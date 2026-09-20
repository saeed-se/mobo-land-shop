import { useState, useEffect } from "react";

import { getBlogs } from "@/services/blogs";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const data = await getBlogs();
        setBlogs(data);
      } catch (error) {
        setError("بارگذاری بلاگ ها با مشکل روبرو شد");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, loading, error };
};

export default useBlogs;
