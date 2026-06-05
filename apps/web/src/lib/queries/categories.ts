import { sanityClient } from "../sanity";
import type { Article } from "../../types/Article";
import type { Category } from "../../types/Category";
import { articleCardFields } from "./fragments";

export async function getCategorySlugs() {
  return sanityClient.fetch<{ slug: string }[]>(`
    *[_type == "category" && defined(slug.current)] {
      "slug": slug.current
    }
  `);
}

export async function getCategoryBySlug(slug: string) {
  return sanityClient.fetch<Category | null>(
    `
      *[_type == "category" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        description
      }
    `,
    { slug }
  );
}

export async function getArticlesByCategorySlug(slug: string) {
  return sanityClient.fetch<Article[]>(
    `
      *[
        _type == "article" &&
        defined(slug.current) &&
        category->slug.current == $slug
      ] | order(publishedAt desc) {
        ${articleCardFields}
      }
    `,
    { slug }
  );
}