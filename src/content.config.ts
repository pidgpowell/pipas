import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const tourdates = defineCollection({
  loader: file("src/data/tourdates.json"),
  schema: z.object({
    date: z.coerce.date(),
    venue: z.string(),
    city: z.string(),
    country: z.string(),
    url: z.string(),
    other: z.string(),
  }),
});

const releases = defineCollection({
  loader: file("src/data/releases.json"),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    cat: z.string(),
    hasImage: z.boolean().optional(),
    format: z.number(),
    label: z.string(),
    tracklisting: z.string().optional(),
    notes: z.string().optional(),
  }),
});

export const collections = { releases, tourdates };
