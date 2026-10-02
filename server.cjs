const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const { URL } = require("url");

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

const DB_PATH = path.join(__dirname, "server-data", "db.json");

const sendJSON = (res, statusCode, data) => {
  const body = JSON.stringify(data);

  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });

  res.end(body);
};

const sendError = (res, statusCode, message) => {
  sendJSON(res, statusCode, {
    error: message,
  });
};

const readDB = async () => {
  const file = await fs.readFile(DB_PATH, "utf8");
  return JSON.parse(file);
};

const writeDB = async (db) => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2), "utf8");
};

const readBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });

    req.on("error", reject);
  });
};

const getId = (item) => String(item.id);

const generateId = (items) => {
  const numericIds = items
    .map((item) => Number(item.id))
    .filter((id) => Number.isFinite(id));

  if (!numericIds.length) {
    return "1";
  }

  return String(Math.max(...numericIds) + 1);
};

const applyQuery = (items, searchParams) => {
  let result = [...items];

  // ?q=iphone
  const q = searchParams.get("q");

  if (q) {
    const search = q.toLowerCase();

    result = result.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(search),
    );
  }

  // ?field=value
  // ?field:contains=value
  for (const [key, value] of searchParams.entries()) {
    if (
      key === "q" ||
      key === "_page" ||
      key === "_limit" ||
      key === "_per_page" ||
      key === "_sort" ||
      key === "_order"
    ) {
      continue;
    }

    // :contains
    if (key.endsWith(":contains")) {
      const field = key.replace(":contains", "");
      const searchValue = value.toLowerCase();

      result = result.filter((item) => {
        const itemValue = item[field];

        if (itemValue === undefined || itemValue === null) {
          return false;
        }

        return String(itemValue).toLowerCase().includes(searchValue);
      });

      continue;
    }

    // exact match
    result = result.filter((item) => {
      const itemValue = item[key];

      if (Array.isArray(itemValue)) {
        return itemValue.some((valueItem) => String(valueItem) === value);
      }

      return String(itemValue) === value;
    });
  }
  // Sorting
  const sort = searchParams.get("_sort");

  if (sort) {
    const order = searchParams.get("_order") || "asc";

    result.sort((a, b) => {
      const aValue = a[sort];
      const bValue = b[sort];

      if (aValue === bValue) return 0;

      const comparison = aValue > bValue ? 1 : -1;

      return order === "desc" ? -comparison : comparison;
    });
  }

  // Pagination
  const page = Number(searchParams.get("_page"));
  const limit = Number(
    searchParams.get("_per_page") || searchParams.get("_limit"),
  );

  if (
    Number.isFinite(page) &&
    Number.isFinite(limit) &&
    page > 0 &&
    limit > 0
  ) {
    const start = (page - 1) * limit;

    result = result.slice(start, start + limit);
  }

  return result;
};

const server = http.createServer(async (req, res) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });

    res.end();
    return;
  }

  try {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const pathname = url.pathname;

    // Health check
    if (pathname === "/" && req.method === "GET") {
      sendJSON(res, 200, {
        status: "ok",
        message: "Mobo Land API is running",
      });

      return;
    }

    // Remove empty parts
    const parts = pathname.split("/").filter(Boolean);

    if (parts.length === 0) {
      sendError(res, 404, "Endpoint not found");
      return;
    }

    const resource = parts[0];
    const id = parts[1];

    const db = await readDB();

    // Resource does not exist
    if (!Object.prototype.hasOwnProperty.call(db, resource)) {
      sendError(res, 404, `Resource "${resource}" not found`);
      return;
    }

    const collection = db[resource];

    // -------------------------
    // GET /products
    // GET /products/22
    // -------------------------

    if (req.method === "GET") {
      if (id !== undefined) {
        const item = collection.find((item) => getId(item) === String(id));

        if (!item) {
          sendError(res, 404, "Item not found");
          return;
        }

        sendJSON(res, 200, item);
        return;
      }

      const result = applyQuery(collection, url.searchParams);

      sendJSON(res, 200, result);
      return;
    }

    // -------------------------
    // POST /products
    // -------------------------

    if (req.method === "POST") {
      const body = await readBody(req);

      const newItem = {
        id: body.id !== undefined ? body.id : generateId(collection),
        ...body,
      };

      collection.push(newItem);

      await writeDB(db);

      sendJSON(res, 201, newItem);
      return;
    }

    // -------------------------
    // PUT /products/22
    // -------------------------

    if (req.method === "PUT") {
      if (id === undefined) {
        sendError(res, 400, "ID is required");
        return;
      }

      const index = collection.findIndex((item) => getId(item) === String(id));

      if (index === -1) {
        sendError(res, 404, "Item not found");
        return;
      }

      const body = await readBody(req);

      const updatedItem = {
        ...body,
        id: collection[index].id,
      };

      collection[index] = updatedItem;

      await writeDB(db);

      sendJSON(res, 200, updatedItem);
      return;
    }

    // -------------------------
    // PATCH /products/22
    // -------------------------

    if (req.method === "PATCH") {
      if (id === undefined) {
        sendError(res, 400, "ID is required");
        return;
      }

      const index = collection.findIndex((item) => getId(item) === String(id));

      if (index === -1) {
        sendError(res, 404, "Item not found");
        return;
      }

      const body = await readBody(req);

      const updatedItem = {
        ...collection[index],
        ...body,
        id: collection[index].id,
      };

      collection[index] = updatedItem;

      await writeDB(db);

      sendJSON(res, 200, updatedItem);
      return;
    }

    // -------------------------
    // DELETE /products/22
    // -------------------------

    if (req.method === "DELETE") {
      if (id === undefined) {
        sendError(res, 400, "ID is required");
        return;
      }

      const index = collection.findIndex((item) => getId(item) === String(id));

      if (index === -1) {
        sendError(res, 404, "Item not found");
        return;
      }

      const deletedItem = collection[index];

      collection.splice(index, 1);

      await writeDB(db);

      sendJSON(res, 200, deletedItem);
      return;
    }

    sendError(res, 405, "Method not allowed");
  } catch (error) {
    console.error(error);

    sendError(res, 500, error.message || "Internal server error");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Mobo Land API running on ${HOST}:${PORT}`);
});
