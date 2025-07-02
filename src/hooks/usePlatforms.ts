//import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//const usePlatforms = () => useData<Platform>("/platforms/lists/parents"); //call by using service

// Use static data
//const usePlatforms = () => ({ data:platforms, error:null, isLoading: false });

const apiCleint = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiCleint.getAll,
    staleTime: ms("24h"), // 24h
    //initialData: { count: platforms.length, next: null, results: platforms },
    initialData: platforms,
  });

export default usePlatforms;
