import api from "./api";

export const loginUser = async ({ email, password }) => {
  try {
    const { data: users } = await api.get("/users", {
      params: {
        email,
        password,
      },
    });

    if (users.length === 0) {
      throw new Error("INVALID_CREDENTIALS");
    }

    const user = users[0];

    if (user.status !== "فعال") {
      throw new Error("ACCOUNT_DISABLED");
    }

    const { password: _, ...safeUser } = user;

    return safeUser;
  } catch (error) {
    if (
      error.message === "INVALID_CREDENTIALS" ||
      error.message === "ACCOUNT_DISABLED"
    ) {
      throw error;
    }

    throw new Error("LOGIN_FAILED");
  }
};

export const registerUser = async ({
  city,
  name,
  email,
  phone,
  password,
  confirmPassword,
}) => {
  try {
    // Check duplicate email
    const { data: existingUsers } = await api.get("/users", {
      params: { email },
    });
    if (existingUsers.length > 0) {
      throw new Error("EMAIL_ALREADY_EXISTS");
    } // Create new user
    const { data: newUser } = await api.post("/users", {
      city,
      name,
      email,
      phone,
      password,
      status: "فعال",
      role: "customer",
    }); // Remove password from returned user
    const { password: _, ...safeUser } = newUser;
    return safeUser;
  } catch (error) {
    if (error.message === "EMAIL_ALREADY_EXISTS") {
      throw error;
    }
    throw new Error("REGISTER_FAILED");
  }
};
