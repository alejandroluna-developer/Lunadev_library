import { getCollection } from 'astro:content';
import type { Skill } from '../types';

export async function getAllSkills(): Promise<Skill[]> {
  const entries = await getCollection('skills');
  return entries.map((entry) => ({
    id: entry.id,
    title: entry.data.title,
    slug: entry.id,
    description: entry.data.description,
    categorySlug: entry.data.categorySlug,
    subcategorySlug: entry.data.subcategorySlug,
    tags: entry.data.tags,
    difficulty: entry.data.difficulty,
    targetAgent: entry.data.targetAgent,
    createdAt: entry.data.createdAt,
    updatedAt: entry.data.updatedAt,
    isFeatured: entry.data.isFeatured,
    author: entry.data.author,
  }));
}

export async function getSkillBySlug(slug: string): Promise<Skill | undefined> {
  const skills = await getAllSkills();
  return skills.find((s) => s.slug === slug);
}

export async function getSkillsByCategory(categorySlug: string): Promise<Skill[]> {
  const skills = await getAllSkills();
  return skills.filter((s) => s.categorySlug === categorySlug);
}

export async function getSkillsBySubcategory(subcategorySlug: string): Promise<Skill[]> {
  const skills = await getAllSkills();
  return skills.filter((s) => s.subcategorySlug === subcategorySlug);
}

export async function getFeaturedSkills(): Promise<Skill[]> {
  const skills = await getAllSkills();
  return skills.filter((s) => s.isFeatured);
}

export async function getSkillsByAgent(targetAgent: string): Promise<Skill[]> {
  const skills = await getAllSkills();
  return skills.filter((s) => s.targetAgent === targetAgent || s.targetAgent === 'universal');
}
