import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const promptsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prompts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categorySlug: z.string(),
    subcategorySlug: z.string(),
    tags: z.array(z.string()),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    tokenCount: z.number().optional(),
    successRate: z.number().optional(),
    createdAt: z.string(),
    updatedAt: z.string(),
    isFeatured: z.boolean().default(false),
    author: z.object({
      name: z.string(),
      avatar: z.string().optional(),
      role: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  prompts: promptsCollection,
};
