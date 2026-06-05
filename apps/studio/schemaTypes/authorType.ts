import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Krátky popis obrázka pre prístupnosť a SEO.",
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "bio",
      media: "image",
    },
  },
});