<!--
  SectionHeader.vue — Reusable Terminal Section Title
  
  Displays a section title with a terminal prompt prefix,
  used across About, Projects, and Contact sections.
-->
<template>
  <div class="mb-2">
    <!-- Terminal prompt -->
    <p class="text-xs sm:text-sm text-gray-500 font-mono mb-2">
      <span class="text-neon-green">guest@portfolio</span>:<span class="text-neon-blue">~</span>$ {{ command }}
    </p>
    <!-- Section title -->
    <h2 class="text-3xl sm:text-4xl font-bold">
      <span class="text-neon-blue text-glow-blue">// </span>
      <span class="text-gray-100">{{ title }}</span>
    </h2>
    <!-- Decorative line -->
    <div class="mt-3 h-px bg-gradient-to-r from-neon-pink via-neon-blue to-transparent"></div>
  </div>
</template>

<script setup>
/**
 * @prop {string} title   — Section heading text
 * @prop {string} command — Terminal command shown above the heading
 */
defineProps({
  title: { type: String, required: true },
  command: { type: String, default: 'ls -la' },
});
</script>
