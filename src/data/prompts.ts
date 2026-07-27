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
    project: entry.data.project,
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

export async function getPromptsByProject(projectSlug: string): Promise<Prompt[]> {
  const prompts = await getAllPrompts();
  return prompts
    .filter((p) => p.project?.slug === projectSlug)
    .sort((a, b) => (a.project?.order ?? 0) - (b.project?.order ?? 0));
}

export async function getProjectsInSubcategory(subcategorySlug: string): Promise<{ slug: string; name: string; description?: string; promptCount: number }[]> {
  const prompts = await getAllPrompts();
  const projectPrompts = prompts.filter((p) => p.subcategorySlug === subcategorySlug && p.project);

  const projectMap = new Map<string, { slug: string; name: string; description?: string; promptCount: number }>();
  for (const p of projectPrompts) {
    if (!p.project) continue;
    const existing = projectMap.get(p.project.slug);
    if (existing) {
      existing.promptCount++;
    } else {
      projectMap.set(p.project.slug, {
        slug: p.project.slug,
        name: p.project.name,
        description: p.project.description,
        promptCount: 1,
      });
    }
  }

  return Array.from(projectMap.values());
}
