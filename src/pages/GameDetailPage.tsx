import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../compoments/ExpandableText";
import GameAttributes from "../compoments/GameAttributes";
import GameTrailer from "../compoments/GameTrailer";
import GameScreenshots from "../compoments/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <Text>
          <ExpandableText>{game.description_raw}</ExpandableText>
        </Text>
        <GameAttributes game={game}></GameAttributes>
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
