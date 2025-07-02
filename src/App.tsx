import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./compoments/NavBar";
import GameGrid from "./compoments/GameGrid";
import GenreList from "./compoments/GenreList";
import type { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./compoments/PlatformSelector";
import type { Platform } from "./hooks/usePlatforms";
import SortSelector from "./compoments/SortSelector";
import GameHeading from "./compoments/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area={"nav"}>
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              selectGenreId={gameQuery.genreId}
              onSelectGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Box paddingLeft={3}>
            <GameHeading gameQuery={gameQuery}></GameHeading>
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector
                selectedPlatformId={gameQuery.platformId}
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectedSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              ></SortSelector>
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
