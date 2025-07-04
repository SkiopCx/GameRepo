import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./compoments/NavBar";
import GameGrid from "./compoments/GameGrid";
import GenreList from "./compoments/GenreList";
import PlatformSelector from "./compoments/PlatformSelector";
import SortSelector from "./compoments/SortSelector";
import GameHeading from "./compoments/GameHeading";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
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
}

export default App;
