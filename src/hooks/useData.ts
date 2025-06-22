import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";

interface FetchDataResponse<T> {
    count: number;
    results: T[];
}

const useData= <T>(endpoint : string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]); 
    //const [error, setError] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchDataResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
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
  }, deps ? [...deps] : []);

  return {data, error, isLoading}
}

export default useData;