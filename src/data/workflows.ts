import { getCollection } from 'astro:content';
import type { Workflow } from '../types';

export async function getAllWorkflows(): Promise<Workflow[]> {
  const entries = await getCollection('workflows');
  return entries.map((entry) => ({
    id: entry.id,
    title: entry.data.title,
    slug: entry.id,
    description: entry.data.description,
    categorySlug: entry.data.categorySlug,
    subcategorySlug: entry.data.subcategorySlug,
    tags: entry.data.tags,
    difficulty: entry.data.difficulty,
    steps: entry.data.steps,
    estimatedTime: entry.data.estimatedTime,
    targetAgent: entry.data.targetAgent,
    createdAt: entry.data.createdAt,
    updatedAt: entry.data.updatedAt,
    isFeatured: entry.data.isFeatured,
    author: entry.data.author,
  }));
}

export async function getWorkflowBySlug(slug: string): Promise<Workflow | undefined> {
  const workflows = await getAllWorkflows();
  return workflows.find((w) => w.slug === slug);
}

export async function getWorkflowsByCategory(categorySlug: string): Promise<Workflow[]> {
  const workflows = await getAllWorkflows();
  return workflows.filter((w) => w.categorySlug === categorySlug);
}

export async function getWorkflowsBySubcategory(subcategorySlug: string): Promise<Workflow[]> {
  const workflows = await getAllWorkflows();
  return workflows.filter((w) => w.subcategorySlug === subcategorySlug);
}

export async function getFeaturedWorkflows(): Promise<Workflow[]> {
  const workflows = await getAllWorkflows();
  return workflows.filter((w) => w.isFeatured);
}

export async function getWorkflowsByAgent(targetAgent: string): Promise<Workflow[]> {
  const workflows = await getAllWorkflows();
  return workflows.filter((w) => w.targetAgent === targetAgent || w.targetAgent === 'universal');
}
