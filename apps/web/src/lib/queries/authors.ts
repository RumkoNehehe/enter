import { sanityClient } from "../sanity";
import type { Article } from "../../types/Article";
import type { Author } from "../../types/Author";
import { articleCardFields } from "./fragments";

export async function getAuthorSlugs() {
  return sanityClient.fetch<{ slug: string }[]>(`
    *[_type == "author" && defined(slug.current)] {
      "slug": slug.current
    }
  `);
}

export async function getAuthorBySlug(slug: string) {
  return sanityClient.fetch<Author | null>(
    `
      *[_type == "author" && slug.current == $slug][0] {
        _id,
        name,
        "slug": slug.current,
        bio,
        image
      }
    `,
    { slug }
  );
}

export async function getArticlesByAuthorSlug(slug: string) {
  return sanityClient.fetch<Article[]>(
    `
      *[
        _type == "article" &&
        defined(slug.current) &&
        author->slug.current == $slug
      ] | order(publishedAt desc) {
        ${articleCardFields}
      }
    `,
    { slug }
  );
}