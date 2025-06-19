import { Text } from "@chakra-ui/react";
import userGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = userGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
