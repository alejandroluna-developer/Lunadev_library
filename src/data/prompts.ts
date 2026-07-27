import { getCollection } from 'astro:content';
import type { Prompt } from '../types';

export async function getAllPrompts(): Promise<Prompt[]> {
  const entries = await getCollection('prompts');
  return entries.map((entry) => ({
    id: entry.id,
    title: entry.data.title,
    slug: entry.id,
    description: entry.data.description,
    categorySlug: entry.data.categorySlug,
    subcategorySlug: entry.data.subcategorySlug,
    tags: entry.data.tags,
    difficulty: entry.data.difficulty,
    tokenCount: entry.data.tokenCount,
    successRate: entry.data.successRate,
    createdAt: entry.data.createdAt,
    updatedAt: entry.data.updatedAt,
    isFeatured: entry.data.isFeatured,
    author: entry.data.author,
  }));
}

export async function getPromptBySlug(slug: string): Promise<Prompt | undefined> {
  const prompts = await getAllPrompts();
  return prompts.find((p) => p.slug === slug);
}

export async function getPromptsByCategory(categorySlug: string): Promise<Prompt[]> {
  const prompts = await getAllPrompts();
  return prompts.filter((p) => p.categorySlug === categorySlug);
}

export async function getPromptsBySubcategory(subcategorySlug: string): Promise<Prompt[]> {
  const prompts = await getAllPrompts();
  return prompts.filter((p) => p.subcategorySlug === subcategorySlug);
}

export async function getFeaturedPrompts(): Promise<Prompt[]> {
  const prompts = await getAllPrompts();
  return prompts.filter((p) => p.isFeatured);
}
