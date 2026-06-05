import type { PortableTextBlock } from "sanity";

export type Article = {
    _id: string;
    title: string;
    slug: string;
    excerpt?: string;
    publishedAt?: string;
    body?: PortableTextBlock[];
};