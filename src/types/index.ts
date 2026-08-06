export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  tags?: string[];
  subcategories?: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  parentCategorySlug: string;
}

export interface Prompt {
  id: string;
  title: string;
  slug: string;
  description: string;
  categorySlug: string;
  subcategorySlug: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tokenCount?: number;
  successRate?: number;
  createdAt: string;
  updatedAt: string;
  isFeatured?: boolean;
  author?: Author;
  project?: Project;
}

export interface Project {
  slug: string;
  name: string;
  description?: string;
  order: number;
  totalParts?: number;
  videoUrl?: string;
}

export interface Author {
  name: string;
  avatar?: string;
  role?: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  isActive?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface OptimizationTip {
  title: string;
  description: string;
}

export type TargetAgent = 'cursor' | 'kiro' | 'claude-code' | 'gemini-cli' | 'copilot' | 'universal';

export interface Skill {
  id: string;
  title: string;
  slug: string;
  description: string;
  categorySlug: string;
  subcategorySlug: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  targetAgent?: TargetAgent;
  createdAt: string;
  updatedAt: string;
  isFeatured?: boolean;
  author?: Author;
}

export interface Workflow {
  id: string;
  title: string;
  slug: string;
  description: string;
  categorySlug: string;
  subcategorySlug: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  steps: number;
  estimatedTime?: string;
  targetAgent?: TargetAgent;
  createdAt: string;
  updatedAt: string;
  isFeatured?: boolean;
  author?: Author;
}
