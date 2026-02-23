<!--
  AboutSection.vue — Terminal-Style About Me
  
  Displays personal bio, tech stack, and stats in a
  terminal/console aesthetic with neon accents.
-->
<template>
  <section id="about" class="py-20 sm:py-28 px-4">
    <div class="mx-auto max-w-6xl">
      <!-- Section header -->
      <SectionHeader title="About Me" command="cat about.md" />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
        <!-- Bio Panel -->
        <div
          class="bg-terminal-surface border border-terminal-border rounded-lg p-6 sm:p-8"
        >
          <div class="flex items-center gap-2 mb-4 text-xs text-gray-500 uppercase tracking-widest">
            <User class="w-4 h-4 text-neon-blue" />
            profile.json
          </div>
          <div class="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            <p>
              A <span class="text-neon-pink font-semibold">21-year-old</span> student from
              <span class="text-neon-blue font-semibold">Asia Pacific College</span>.
              I enjoy <span class="text-neon-pink font-semibold">watching movies and anime</span>,
              the same way as I like reading <span class="text-neon-blue font-semibold">manga and manhwa</span>.
              I also <span class="text-neon-pink font-semibold">play video games</span> during my free time.
            </p>
          </div>
        </div>

        <!-- Tech Stack Panel -->
        <div class="space-y-6">
          <!-- Tech categories -->
          <div
            v-for="category in techCategories"
            :key="category.label"
            class="bg-terminal-surface border border-terminal-border rounded-lg p-5"
          >
            <h3 class="text-xs uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2">
              <component :is="category.icon" class="w-4 h-4 text-neon-pink" />
              {{ category.label }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in category.items"
                :key="tech"
                class="clip-corners-sm bg-terminal-muted border border-terminal-border text-neon-blue text-xs px-3 py-1.5 uppercase tracking-wider hover:border-neon-blue hover:shadow-neon-blue transition-all duration-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Stats row -->
          <div class="grid grid-cols-3 gap-3">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="bg-terminal-surface border border-terminal-border rounded-lg p-4 text-center"
            >
              <div class="text-2xl sm:text-3xl font-bold text-neon-pink text-glow-pink">
                {{ stat.value }}
              </div>
              <div class="text-xs text-gray-500 uppercase tracking-wider mt-1">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { User, Code2, Database, Layout } from 'lucide-vue-next';
import SectionHeader from './SectionHeader.vue';

/** Technology categories displayed as tag groups */
const techCategories = [
  {
    label: 'Frontend',
    icon: Layout,
    items: ['Vue.js 3', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    label: 'Backend',
    icon: Code2,
    items: ['NestJS', 'Node.js', 'Express', 'REST APIs'],
  },
  {
    label: 'Database & Tools',
    icon: Database,
    items: ['Supabase', 'PostgreSQL', 'Git', 'Vercel', 'Vite'],
  },
];

/** Quick Stats */
const stats = [
  { value: '5', label: 'Projects' },
  { value: '2', label: 'Devices' },
  { value: '2nd', label: 'Year Student' },
];
</script>
