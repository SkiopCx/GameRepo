import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import type Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

// Use useQuery of @tanstack/react-query
const useGame = (slug: string) =>
  useQuery({
    queryKey: ["gameDetail", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
