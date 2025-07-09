import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshot(gameId);
  console.log(data?.results);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {data?.results.map((file) => (
          <Image key={file.id} src={file.image}></Image>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
