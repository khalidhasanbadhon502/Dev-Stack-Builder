export interface TechItem {
  id: string;
  name: string;
  description: string;
  category: string;
  level: string;
  rating: number;
  badge?: string;
  badgeColor?: string;
  icon: string;
}

export const techList: TechItem[] = [
  {
    id: 'react',
    name: 'React',
    description: 'A declarative, component-based JavaScript library for building modern user interfaces.',
    category: 'Frontend',
    level: 'Beginner-Friendly',
    rating: 4.9,
    badge: 'Popular',
    badgeColor: 'bg-cyan-100 text-cyan-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    id: 'vue',
    name: 'Vue.js',
    description: 'An approachable, performant, and versatile framework for building web user interfaces.',
    category: 'Frontend',
    level: 'Beginner-Friendly',
    rating: 4.8,
    badge: 'Versatile',
    badgeColor: 'bg-emerald-100 text-emerald-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
  },
  {
    id: 'svelte',
    name: 'Svelte',
    description: 'Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.',
    category: 'Frontend',
    level: 'Intermediate',
    rating: 4.8,
    badge: 'Fast',
    badgeColor: 'bg-orange-100 text-orange-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    description: 'The React framework for full-stack web applications with hybrid static & server rendering.',
    category: 'Frontend',
    level: 'Intermediate',
    rating: 4.9,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    description: "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: 'Backend',
    level: 'Intermediate',
    rating: 4.8,
    badge: 'Standard',
    badgeColor: 'bg-emerald-100 text-emerald-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    description: 'A powerful, open-source object-relational database system with proven reliability.',
    category: 'Database',
    level: 'Intermediate',
    rating: 4.9,
    badge: 'Top SQL',
    badgeColor: 'bg-blue-100 text-blue-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  {
    id: 'redis',
    name: 'Redis',
    description: 'In-memory data structure store used as a high-speed database, cache, and message broker.',
    category: 'Database',
    level: 'Intermediate',
    rating: 4.8,
    badge: 'Cache',
    badgeColor: 'bg-red-100 text-red-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'The versatile, ubiquitous scripting language powering dynamic behavior across the web.',
    category: 'Language',
    level: 'Beginner-Friendly',
    rating: 4.9,
    badge: 'Ubiquitous',
    badgeColor: 'bg-amber-100 text-amber-700',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    description: 'A strongly typed programming language that builds on JavaScript for robust tooling.',
    category: 'Language',
    level: 'Intermediate',
    rating: 4.9,
    badge: 'Essential',
    badgeColor: 'bg-sky-100 text-sky-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  {
  id: 'java',
  name: 'Java',
  description: 'A high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.',
  category: 'Backend',
  level: 'Intermediate',
  rating: 4.8,
  badge: 'Language',
  badgeColor: 'bg-red-100 text-red-600',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
},
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework packed with classes that can be composed to build custom UI.',
    category: 'Styling',
    level: 'Beginner-Friendly',
    rating: 4.9,
    badge: 'Modern',
    badgeColor: 'bg-cyan-100 text-cyan-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
  },
  {
    id: 'docker',
    name: 'Docker',
    description: 'A platform designed to build, share, and run containerized applications reliably.',
    category: 'DevOps',
    level: 'Intermediate',
    rating: 4.9,
    badge: 'Containers',
    badgeColor: 'bg-sky-100 text-sky-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  }
];