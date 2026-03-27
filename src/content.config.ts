import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const coding = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/coding' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    subsection: z.string().optional(),
    subsectionOrder: z.number().optional(),
    date: z.coerce.string().optional(),
  }),
});

const career = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cv/career' }),
  schema: z.object({
    title: z.string(),
    what: z.string().optional(),
    when: z.string(),
    where: z.string().optional(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cv/education' }),
  schema: z.object({
    title: z.string(),
    when: z.string(),
    where: z.string().optional(),
  }),
});

export const collections = { coding, career, education };
