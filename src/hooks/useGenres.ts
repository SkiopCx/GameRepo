import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres= () => {
    const [genres, setGenres] = useState<Genre[]>([]); 
    const [error, setError] = useState(" ");
    const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGenresResponse>("/genres")
      .then((res) => {
        setGenres(res.data.results);
        setIsloading(false);
        })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsloading(false);
    });
      
      return ()=>controller.abort();
  }, []);

  return {genres, error, isLoading}
}

export default useGenres;