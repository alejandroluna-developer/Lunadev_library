import { getCollection } from 'astro:content';

export async function GET() {
  const [promptEntries, skillEntries, workflowEntries] = await Promise.all([
    getCollection('prompts'),
    getCollection('skills'),
    getCollection('workflows'),
  ]);

  const prompts = promptEntries.map((entry) => ({
    type: 'prompt' as const,
    slug: entry.id,
    href: `/prompts/${entry.id}`,
    title: entry.data.title,
    description: entry.data.description,
    categorySlug: entry.data.categorySlug,
    subcategorySlug: entry.data.subcategorySlug,
    tags: entry.data.tags,
    difficulty: entry.data.difficulty,
  }));

  const skills = skillEntries.map((entry) => ({
    type: 'skill' as const,
    slug: entry.id,
    href: `/skills/${entry.id}`,
    title: entry.data.title,
    description: entry.data.description,
    categorySlug: entry.data.categorySlug,
    subcategorySlug: entry.data.subcategorySlug,
    tags: entry.data.tags,
    difficulty: entry.data.difficulty,
  }));

  const workflows = workflowEntries.map((entry) => ({
    type: 'workflow' as const,
    slug: entry.id,
    href: `/workflows/${entry.id}`,
    title: entry.data.title,
    description: entry.data.description,
    categorySlug: entry.data.categorySlug,
    subcategorySlug: entry.data.subcategorySlug,
    tags: entry.data.tags,
    difficulty: entry.data.difficulty,
  }));

  const searchIndex = [...prompts, ...skills, ...workflows];

  return new Response(JSON.stringify(searchIndex), {
    headers: { 'Content-Type': 'application/json' },
  });
}
