<!--
  ProjectsSection.vue — Portfolio Projects Grid
  
  Fetches projects from the NestJS API and renders them
  using the ProjectCard component in a responsive grid.
  Falls back to local sample data when the API is unavailable.
-->
<template>
  <section id="projects" class="py-20 sm:py-28 px-4 bg-terminal-surface/30">
    <div class="mx-auto max-w-6xl">
      <!-- Section header -->
      <SectionHeader title="Projects" command="ls ./projects" />

      <!-- Loading state -->
      <div v-if="loading" class="mt-12 text-center">
        <Loader2 class="w-8 h-8 text-neon-blue animate-spin mx-auto mb-3" />
        <p class="text-gray-500 text-sm uppercase tracking-widest">Fetching data...</p>
      </div>

      <!-- Error state -->
      <div
        v-else-if="error"
        class="mt-12 bg-terminal-surface border border-red-500/30 rounded-lg p-6 text-center"
      >
        <AlertTriangle class="w-8 h-8 text-red-400 mx-auto mb-3" />
        <p class="text-red-400 text-sm">{{ error }}</p>
        <p class="text-gray-500 text-xs mt-2">Displaying cached sample data instead.</p>
      </div>

      <!-- Projects Grid -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Loader2, AlertTriangle } from 'lucide-vue-next';
import SectionHeader from './SectionHeader.vue';
import ProjectCard from './ProjectCard.vue';
import { fetchProjects } from '../services/api';

/** Reactive state */
const projects = ref([]);
const loading = ref(true);
const error = ref(null);

/** Fallback sample data for offline / demo usage */
const sampleProjects = [
  {
    id: '1',
    title: 'Cyberpunk Portfolio',
    description:
      'A full-stack terminal-themed portfolio built with Vue 3, NestJS, and Supabase. Features CRT scanline effects and neon UI.',
    tech_stack: ['Vue 3', 'Tailwind CSS', 'NestJS', 'Supabase'],
    link: 'https://github.com/johncarlgabriel/cyberpunk-portfolio',
  },
  {
    id: '2',
    title: 'Task Tracker CLI',
    description:
      'A command-line task management tool with persistent storage, color-coded priority levels, and export capabilities.',
    tech_stack: ['Node.js', 'TypeScript', 'SQLite'],
    link: 'https://github.com/johncarlgabriel/task-tracker-cli',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description:
      'Real-time weather dashboard consuming the OpenWeather API with animated chart visualizations and location search.',
    tech_stack: ['React', 'Chart.js', 'OpenWeather API'],
    link: 'https://github.com/johncarlgabriel/weather-dashboard',
  },
];

/**
 * On mount, attempt to fetch projects from the API.
 * Falls back to sample data if the API call fails.
 */
onMounted(async () => {
  try {
    projects.value = await fetchProjects();
  } catch (err) {
    error.value = 'Could not connect to the backend API.';
    projects.value = sampleProjects;
  } finally {
    loading.value = false;
  }
});
</script>
