import { useState, useEffect } from "react";

const API_URL = `${import.meta.env.VITE_API_URL}`;

export function useProjects(page) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchProjects() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${API_URL}?accessKey=${import.meta.env.VITE_ACCESS_KEY}&secretKey=${import.meta.env.VITE_SECRET_KEY}&isPagination=true&size=30&page=${page}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({}),
            signal,
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        setProjects(data.projects);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch request was aborted");
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();

    return () => {
      controller.abort();
    };
  }, [page]);

  return { projects, loading, error };
}
