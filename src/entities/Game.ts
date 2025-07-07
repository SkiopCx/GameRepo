import type { Genre } from "./Genre";
import type { Platform } from "./Platform";
import type { Publisher } from "./Publishers";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  metacritic: number;
  rating_top: number;
}
