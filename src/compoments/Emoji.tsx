import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbsup.webp";
import bullseye from "../assets/bullseye.webp";
import { Image, type ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullseye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1}></Image>;
};

export default Emoji;
