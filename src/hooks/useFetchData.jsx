import { useEffect, useState } from "react";

const useFetchData = (apiUrl) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const callApi = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const result = await res.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    callApi(apiUrl);
  }, [apiUrl]);

  return { data, error, loading };
};

export default useFetchData;
