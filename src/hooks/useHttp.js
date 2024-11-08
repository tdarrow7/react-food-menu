import { useCallback, useEffect, useState } from "react";

const sendHttpRequest = async (url, config) => {
  const response = await fetch(url, config);

  const data = await response.json();
  if (!response.ok) {
    throw new Error(da.message || "Something went wrong!");
  }

  return data;
};

export const useHttp = (url, config, initialData) => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialData);

  const clearData = () => {
    setData(initialData);
  };

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (error) {
        setError(error.message || "something went wrong");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if (config && (!config || !config.method || config.method === "GET"))
      sendRequest();
  }, [sendRequest, config]);

  return { data, isLoading, error, sendRequest, clearData };
};
