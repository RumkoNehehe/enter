import type { PortableTextBlock } from "sanity";
import type {Author} from "./Author";
import type {SanityImage} from "./SanityImage";
import type {Category} from "./Category";

export type Article = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  mainImage?: SanityImage;
  category?: Category;
  author?: Author;
  body?: PortableTextBlock[];
};