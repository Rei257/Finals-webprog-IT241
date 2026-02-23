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

// Project screenshot imports
import midtermMain from '../assets/images/projects/Midterm mainpage.png';
import midtermAbout from '../assets/images/projects/MIdterm aboutme.png';
import flutterMain from '../assets/images/projects/Flutter mainpage.png';
import flutterProfile from '../assets/images/projects/Flutter profilepage.png';
import arduinoImg from '../assets/images/projects/Arduino.png';

/** Local project data with screenshots */
const sampleProjects = [
  {
    id: '1',
    title: 'Midterm Web Project',
    description:
      'My midterm project showcasing web development skills with a main page and about me section.',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    images: [midtermMain, midtermAbout],
    link: '',
  },
  {
    id: '2',
    title: 'Flutter Mobile App',
    description:
      'A mobile application built with Flutter featuring a main page and a profile page with clean UI design.',
    tech_stack: ['Flutter', 'Dart'],
    images: [flutterMain, flutterProfile],
    link: '',
  },
  {
    id: '3',
    title: 'Arduino Project',
    description:
      'An Arduino-based project demonstrating hardware programming and embedded systems skills.',
    tech_stack: ['Arduino', 'C++'],
    images: [arduinoImg],
    link: '',
  },
];

/** Reactive state */
const projects = ref(sampleProjects);
const loading = ref(false);
const error = ref(null);

/**
 * Projects are loaded from local data with screenshots.
 * To fetch from API instead, uncomment the onMounted block below.
 */
// onMounted(async () => {
//   try {
//     projects.value = await fetchProjects();
//   } catch (err) {
//     error.value = 'Could not connect to the backend API.';
//     projects.value = sampleProjects;
//   } finally {
//     loading.value = false;
//   }
// });
</script>
