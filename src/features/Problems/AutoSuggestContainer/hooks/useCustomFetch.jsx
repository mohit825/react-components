import { useEffect, useState } from "react";

export const useCustomFetch = (url, delay) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!url) {
      setResults([]);
      setLoading(false);
      setError("");
      return;
    }

    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async (url) => {
      try {
        setLoading(true);
        const data = await fetch(url, { signal });
        const result = await data.json();
        setResults(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    let timer;

    timer = setTimeout(() => {
      fetchData(url);
    }, delay);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [url]);

  return { results, loading, error };
};
