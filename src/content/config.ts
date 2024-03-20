// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  }),
});
const postCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    author: z.optional(z.string()),
    date: z.string(),
    preview: z.string(),
    img: z.object({
      src: image(),
      alt: z.string(),
      width: z.number(),
      height: z.number(),
    })
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'about': aboutCollection,
  'post': postCollection
};