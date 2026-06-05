import { sanityClient } from "../sanity";
import type { Article } from "../../types/Article";
import { articleCardFields, articleDetailFields} from "./fragments";

export async function getArticles() {
  return sanityClient.fetch<Article[]>(`
    *[_type == "article" && defined(slug.current)]
    | order(publishedAt desc) {
      ${articleCardFields}
    }
  `);
}

export async function getArticleSlugs() {
  return sanityClient.fetch<{ slug: string }[]>(`
    *[_type == "article" && defined(slug.current)] {
      "slug": slug.current
    }
  `);
}

export async function getArticleBySlug(slug: string) {
  return sanityClient.fetch<Article | null>(
    `
      *[_type == "article" && slug.current == $slug][0] {
        ${articleDetailFields}
      }
    `,
    { slug }
  );
}