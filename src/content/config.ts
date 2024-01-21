import { z, defineCollection } from "astro:content";
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    revisionDate: z.coerce.date().optional(),
  }),
});
export const collections = {
  posts: postsCollection,
};
