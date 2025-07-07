import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../compoments/ExpandableText";
import GameAttributes from "../compoments/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>
        <ExpandableText>{game.description_raw}</ExpandableText>
      </Text>
      <GameAttributes game={game}></GameAttributes>
    </>
  );
};

export default GameDetailPage;
