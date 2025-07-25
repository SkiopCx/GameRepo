import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "../compoments/GenreList";
import GameHeading from "../compoments/GameHeading";
import PlatformSelector from "../compoments/PlatformSelector";
import SortSelector from "../compoments/SortSelector";
import GameGrid from "../compoments/GameGrid";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{ base: `"main"`, lg: `"aside main"` }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Box paddingLeft={3}>
            <GameHeading />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
