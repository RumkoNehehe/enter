import { sanityClient } from "../sanity";
import type { Article } from "../../types/Article";

const articleListFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt
`;

const articleDetailFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  body
`;

export async function getArticles() {
  return sanityClient.fetch<Article[]>(`
    *[_type == "article" && defined(slug.current)] 
    | order(publishedAt desc) {
      ${articleListFields}
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