import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const photos = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    album: z.string().optional(),
    src: image(),
    alt: z.string(),
  }),
});

export const collections = { blog, photos };
