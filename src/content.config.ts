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
    project: z.object({
      slug: z.string(),
      name: z.string(),
      description: z.string().optional(),
      order: z.number(),
      totalParts: z.number().optional(),
      videoUrl: z.string().optional(),
    }).optional(),
    mediaType: z.enum(['none', 'image', 'video', 'comparison']).default('none'),
    beforeImage: z.string().optional(),
    afterImage: z.string().optional(),
    beforeCaption: z.string().optional(),
    afterCaption: z.string().optional(),
    gallery: z.array(z.object({
      src: z.string(),
      caption: z.string().optional(),
    })).optional(),
  }),
});

export const collections = {
  prompts: promptsCollection,
};
