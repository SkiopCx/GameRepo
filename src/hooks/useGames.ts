import { useInfiniteQuery } from "@tanstack/react-query";
import type { FetchDataResponse } from "../services/api-client";
import APIClient from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../services/GameQueryStore";
import type Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

// Use useData
/*const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );*/

// Use useInfiniteQuery of @tanstack/react-query
const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchDataResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useGames;
