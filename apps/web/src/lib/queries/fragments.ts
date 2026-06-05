export const categoryFields = `
  _id,
  title,
  "slug": slug.current,
  description
`;

export const authorFields = `
  _id,
  name,
  "slug": slug.current,
  bio,
  image
`;

export const articleCardFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  category->{
    ${categoryFields}
  },
  author->{
    _id,
    name,
    "slug": slug.current,
    image
  }
`;

export const articleDetailFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  category->{
    ${categoryFields}
  },
  author->{
    ${authorFields}
  },
  body
`;