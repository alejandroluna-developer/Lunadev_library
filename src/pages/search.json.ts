import { getCollection } from 'astro:content';

export async function GET() {
  const entries = await getCollection('prompts');

  const searchIndex = entries.map((entry) => ({
    slug: entry.id,
    title: entry.data.title,
    description: entry.data.description,
    categorySlug: entry.data.categorySlug,
    subcategorySlug: entry.data.subcategorySlug,
    tags: entry.data.tags,
    difficulty: entry.data.difficulty,
  }));

  return new Response(JSON.stringify(searchIndex), {
    headers: { 'Content-Type': 'application/json' },
  });
}
