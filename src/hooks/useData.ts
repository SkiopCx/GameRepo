import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchDataResponse<T> {
    count: number;
    results: T[];
}

const useData= <T>(endpoint : string) => {
    const [data, setData] = useState<T[]>([]); 
    const [error, setError] = useState(" ");
    const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchDataResponse<T>>(endpoint)
      .then((res) => {
        setData(res.data.results);
        setIsloading(false);
        })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsloading(false);
    });
      
      return ()=>controller.abort();
  }, []);

  return {data, error, isLoading}
}

export default useData;