import type { PortableTextBlock } from "sanity";

export type Article = {
    title: string;
    slug: string;
    excerpt?: string;
    publishedAt?: string;
    body?: PortableTextBlock[];
};