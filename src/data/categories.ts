import type { Category, Subcategory } from '../types';
import { getAllPrompts } from './prompts';
import { getAllSkills } from './skills';
import { getAllWorkflows } from './workflows';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Desarrollo de Software',
    slug: 'desarrollo-de-software',
    description: 'Clean code, patrones arquitectónicos y estrategias de depuración.',
    icon: 'code',
    tags: ['Frontend', 'Backend', 'Mobile', 'Arquitectura'],
    subcategories: [
      {
        id: '1-1',
        name: 'Desarrollo Frontend',
        slug: 'desarrollo-frontend',
        description: 'React, Astro, Angular, Tailwind CSS y patrones de manejo de estado complejo.',
        icon: 'layout',
        parentCategorySlug: 'desarrollo-de-software',
      },
      {
        id: '1-2',
        name: 'Desarrollo Mobile',
        slug: 'desarrollo-mobile',
        description: 'Componentes UI cross-platform para Flutter y optimizaciones en React Native.',
        icon: 'smartphone',
        parentCategorySlug: 'desarrollo-de-software',
      },
      {
        id: '1-3',
        name: 'Desarrollo Backend',
        slug: 'desarrollo-backend',
        description: 'Diseño de APIs, esquemas de base de datos y plantillas de optimización en Node.js.',
        icon: 'server',
        parentCategorySlug: 'desarrollo-de-software',
      },
      {
        id: '1-4',
        name: 'Arquitectura y Buenas Prácticas',
        slug: 'arquitectura-y-buenas-practicas',
        description: 'Diagramas de diseño de sistemas, patrones de escalabilidad y blueprints cloud-native.',
        icon: 'layers',
        parentCategorySlug: 'desarrollo-de-software',
      },
      {
        id: '1-5',
        name: 'Proyectos de Contenido',
        slug: 'proyectos-de-contenido',
        description: 'Prompts organizados por proyecto usados en videos de TikTok. Cada proyecto agrupa los prompts utilizados para construirlo paso a paso.',
        icon: 'video',
        parentCategorySlug: 'desarrollo-de-software',
      },
    ],
  },
  {
    id: '2',
    name: 'Creación de Imágenes y Diseño',
    slug: 'creacion-de-imagenes-y-diseno',
    description: 'Domina Midjourney y DALL-E para visualización técnica y creativa.',
    icon: 'image',
    tags: ['Avatares', 'Ilustraciones', 'Mockups', 'Diagramas'],
    subcategories: [
      {
        id: '2-1',
        name: 'Avatares y Perfiles',
        slug: 'avatares-y-perfiles',
        description: 'Generación de avatares profesionales, fotos de perfil e identidades visuales.',
        icon: 'users',
        parentCategorySlug: 'creacion-de-imagenes-y-diseno',
      },
      {
        id: '2-2',
        name: 'Ilustraciones',
        slug: 'ilustraciones',
        description: 'Ilustraciones técnicas, artísticas y conceptuales con estilos consistentes.',
        icon: 'image',
        parentCategorySlug: 'creacion-de-imagenes-y-diseno',
      },
      {
        id: '2-3',
        name: 'Interfaces y Mockups',
        slug: 'interfaces-y-mockups',
        description: 'Generación de mockups UI/UX, wireframes y prototipos visuales de alta fidelidad.',
        icon: 'layout',
        parentCategorySlug: 'creacion-de-imagenes-y-diseno',
      },
      {
        id: '2-4',
        name: 'Diagramas y Arquitecturas',
        slug: 'diagramas-y-arquitecturas',
        description: 'Diagramas de flujo, arquitectura de sistemas y visualización de datos técnicos.',
        icon: 'grid',
        parentCategorySlug: 'creacion-de-imagenes-y-diseno',
      },
    ],
  },
  {
    id: '3',
    name: 'Creación de Video y Contenido',
    slug: 'creacion-de-video-y-contenido',
    description: 'Guiones, estructura de contenido y generación de material educativo.',
    icon: 'video',
    tags: ['Guiones', 'Estructura', 'Tutoriales'],
    subcategories: [
      {
        id: '3-1',
        name: 'Guiones Técnicos',
        slug: 'guiones-tecnicos',
        description: 'Scripts para videos técnicos, presentaciones y demos de producto.',
        icon: 'terminal',
        parentCategorySlug: 'creacion-de-video-y-contenido',
      },
      {
        id: '3-2',
        name: 'Estructura de Contenido',
        slug: 'estructura-de-contenido',
        description: 'Planificación de series de contenido, outlines y estrategia editorial.',
        icon: 'filter',
        parentCategorySlug: 'creacion-de-video-y-contenido',
      },
      {
        id: '3-3',
        name: 'Explicaciones y Tutoriales',
        slug: 'explicaciones-y-tutoriales',
        description: 'Frameworks para crear tutoriales claros, paso a paso y accesibles.',
        icon: 'book',
        parentCategorySlug: 'creacion-de-video-y-contenido',
      },
    ],
  },
  {
    id: '4',
    name: 'Guías y Consejos de Prompts',
    slug: 'guias-y-consejos-de-prompts',
    description: 'Frameworks avanzados de ingeniería de prompts y métodos de validación.',
    icon: 'book',
    tags: ['Construcción', 'Optimización', 'Errores Comunes'],
    subcategories: [
      {
        id: '4-1',
        name: 'Cómo construir un buen prompt',
        slug: 'como-construir-un-buen-prompt',
        description: 'Principios fundamentales para estructurar prompts efectivos y reproducibles.',
        icon: 'plus',
        parentCategorySlug: 'guias-y-consejos-de-prompts',
      },
      {
        id: '4-2',
        name: 'Cómo pedir información a la IA',
        slug: 'como-pedir-informacion-a-la-ia',
        description: 'Técnicas para formular preguntas claras y obtener respuestas precisas.',
        icon: 'search',
        parentCategorySlug: 'guias-y-consejos-de-prompts',
      },
      {
        id: '4-3',
        name: 'Optimización y corrección de respuestas',
        slug: 'optimizacion-y-correccion-de-respuestas',
        description: 'Iteración, refinamiento y validación de outputs para mayor calidad.',
        icon: 'check-circle',
        parentCategorySlug: 'guias-y-consejos-de-prompts',
      },
      {
        id: '4-4',
        name: 'Errores comunes y cómo evitarlos',
        slug: 'errores-comunes-y-como-evitarlos',
        description: 'Anti-patrones frecuentes en prompt engineering y sus soluciones.',
        icon: 'zap',
        parentCategorySlug: 'guias-y-consejos-de-prompts',
      },
    ],
  },
];

/* ─── Conteos dinámicos basados en los prompts existentes ─── */

export async function getSubcategoryPromptCount(subcategorySlug: string): Promise<number> {
  const prompts = await getAllPrompts();
  return prompts.filter((p) => p.subcategorySlug === subcategorySlug).length;
}

export async function getCategoryPromptCount(categorySlug: string): Promise<number> {
  const prompts = await getAllPrompts();
  return prompts.filter((p) => p.categorySlug === categorySlug).length;
}

/* ─── Conteos dinámicos para skills ─── */

export async function getSubcategorySkillCount(subcategorySlug: string): Promise<number> {
  const skills = await getAllSkills();
  return skills.filter((s) => s.subcategorySlug === subcategorySlug).length;
}

export async function getCategorySkillCount(categorySlug: string): Promise<number> {
  const skills = await getAllSkills();
  return skills.filter((s) => s.categorySlug === categorySlug).length;
}

/* ─── Conteos dinámicos para workflows ─── */

export async function getSubcategoryWorkflowCount(subcategorySlug: string): Promise<number> {
  const workflows = await getAllWorkflows();
  return workflows.filter((w) => w.subcategorySlug === subcategorySlug).length;
}

export async function getCategoryWorkflowCount(categorySlug: string): Promise<number> {
  const workflows = await getAllWorkflows();
  return workflows.filter((w) => w.categorySlug === categorySlug).length;
}

/* ─── Conteos totales por subcategoría (prompts + skills + workflows) ─── */

export async function getSubcategoryTotalCount(subcategorySlug: string): Promise<number> {
  const [prompts, skills, workflows] = await Promise.all([
    getSubcategoryPromptCount(subcategorySlug),
    getSubcategorySkillCount(subcategorySlug),
    getSubcategoryWorkflowCount(subcategorySlug),
  ]);
  return prompts + skills + workflows;
}

export async function getCategoryTotalCount(categorySlug: string): Promise<number> {
  const [prompts, skills, workflows] = await Promise.all([
    getCategoryPromptCount(categorySlug),
    getCategorySkillCount(categorySlug),
    getCategoryWorkflowCount(categorySlug),
  ]);
  return prompts + skills + workflows;
}

/* ─── Lookup helpers ─── */

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getSubcategoryBySlug(
  categorySlug: string,
  subcategorySlug: string
): Subcategory | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories?.find((s) => s.slug === subcategorySlug);
}
