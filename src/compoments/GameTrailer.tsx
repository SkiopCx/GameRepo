import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  console.log(data?.results);

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls></video>
  ) : null;
};

export default GameTrailer;
