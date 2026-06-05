import type {SanityImage} from "./SanityImage";

export type Author = {
  _id: string;
  name: string;
  slug: string;
  bio?: string;
  image?: SanityImage;
};