<!--
  ProjectCard.vue — Cyberpunk Project Card
  
  Displays a single project with:
  - 45-degree clipped corners (clip-path)
  - Neon-cyan glow on hover
  - Technology tags as terminal-style badges
-->
<template>
  <article
    class="group relative bg-terminal-surface border border-terminal-border rounded-sm overflow-hidden transition-all duration-500 hover:border-neon-blue hover:shadow-neon-blue-lg clip-corners"
  >
    <!-- Top accent bar -->
    <div
      class="h-1 bg-gradient-to-r from-neon-pink to-neon-blue opacity-50 group-hover:opacity-100 transition-opacity duration-500"
    ></div>

    <!-- Project Screenshot(s) -->
    <div v-if="project.images && project.images.length" class="overflow-hidden">
      <div :class="project.images.length > 1 ? 'grid grid-cols-2' : ''">
        <img
          v-for="(img, index) in project.images"
          :key="index"
          :src="img"
          :alt="project.title + ' screenshot ' + (index + 1)"
          class="w-full h-48 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
      </div>
    </div>
    <!-- Single image fallback -->
    <div v-else-if="project.image" class="overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-48 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      />
    </div>

    <div class="p-5 sm:p-6">
      <!-- Header row: icon + title -->
      <div class="flex items-start gap-3 mb-3">
        <div
          class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded bg-neon-blue/10 border border-neon-blue/30 group-hover:bg-neon-blue/20 transition-colors"
        >
          <FolderGit2 class="w-5 h-5 text-neon-blue" />
        </div>
        <div>
          <h3 class="text-lg font-bold text-gray-100 group-hover:text-neon-blue transition-colors">
            {{ project.title }}
          </h3>
        </div>
      </div>

      <!-- Description -->
      <p class="text-sm text-gray-400 leading-relaxed mb-4">
        {{ project.description }}
      </p>

      <!-- Tech Stack Tags -->
      <div class="flex flex-wrap gap-2 mb-5">
        <span
          v-for="tech in project.tech_stack"
          :key="tech"
          class="text-[10px] sm:text-xs uppercase tracking-wider text-neon-pink bg-neon-pink/10 border border-neon-pink/20 px-2 py-0.5 rounded-sm"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Link -->
      <a
        v-if="project.link"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm text-neon-blue hover:text-neon-pink transition-colors group/link"
      >
        <ExternalLink class="w-4 h-4" />
        <span class="border-b border-transparent group-hover/link:border-neon-pink transition-colors">
          View Project
        </span>
        <ArrowRight class="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
      </a>
    </div>

    <!-- Corner decoration (bottom-right) -->
    <div
      class="absolute bottom-0 right-0 w-8 h-8 border-t border-l border-neon-blue/20 group-hover:border-neon-blue/60 transition-colors"
    ></div>
  </article>
</template>

<script setup>
/**
 * ProjectCard — Renders a single portfolio project.
 *
 * @prop {Object} project — { id, title, description, tech_stack, link }
 */
import { FolderGit2, ExternalLink, ArrowRight } from 'lucide-vue-next';

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
