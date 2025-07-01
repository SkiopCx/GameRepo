//import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import type { Platform } from "./usePlatform";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

//const useGenres= () => useData<Genre>("/genres"); //call by using service

// Use static data
//const useGenres= () =>  ({ data:genres, error:null, isLoading: false });

// Use useQuery of @tanstack/react-query
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
