<!--
  HeroSection.vue — Cyberpunk Terminal Hero
  
  Full-viewport hero with animated typewriter text,  
  glowing neon typography, and a terminal-style prompt.
-->
<template>
  <section
    id="hero"
    class="relative flex items-center justify-center min-h-screen px-4 pt-16 overflow-hidden"
  >
    <!-- Decorative grid background -->
    <div
      class="absolute inset-0 opacity-[0.04]"
      style="
        background-image: linear-gradient(#22d3ee 1px, transparent 1px),
          linear-gradient(90deg, #22d3ee 1px, transparent 1px);
        background-size: 60px 60px;
      "
    ></div>

    <!-- Content -->
    <div class="relative z-10 text-center max-w-4xl mx-auto">
      <!-- System status line -->
      <div
        class="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-terminal-border bg-terminal-surface/60 text-xs uppercase tracking-widest text-gray-500"
      >
        <span class="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
        system online
      </div>

      <!-- Main heading -->
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4">
        <span class="text-gray-200">Hello, I'm</span>
        <br />
        <span class="text-neon-pink text-glow-pink">John Carl Gabriel</span>
        <span class="text-neon-blue text-glow-blue"> B. Guzman</span>
      </h1>

      <!-- Subtitle / Role -->
      <div
        class="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl text-gray-400 mb-8"
      >
        <ChevronRight class="w-5 h-5 text-neon-blue" />
        <span class="typewriter-text">Webprog Finals</span>
        <span class="animate-blink border-r-2 border-neon-blue h-6 ml-1"></span>
      </div>

      <!-- Terminal prompt -->
      <div
        class="inline-block bg-terminal-surface border border-terminal-border rounded-lg px-6 py-4 text-left text-sm sm:text-base mb-10"
      >
        <p class="text-gray-500 mb-1">
          <span class="text-neon-green">guest@portfolio</span>:<span
            class="text-neon-blue"
            >~</span
          >$ cat skills.txt
        </p>
        <p class="text-gray-300">
          <span class="text-neon-pink">[</span> Vue.js
          <span class="text-gray-600">|</span> NestJS
          <span class="text-gray-600">|</span> Tailwind CSS
          <span class="text-gray-600">|</span> Supabase
          <span class="text-gray-600">|</span> TypeScript
          <span class="text-neon-pink">]</span>
        </p>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#projects"
          class="clip-corners-sm bg-neon-pink/10 border border-neon-pink text-neon-pink px-8 py-3 text-sm uppercase tracking-widest hover:bg-neon-pink hover:text-terminal-base hover:shadow-neon-pink transition-all duration-300"
        >
          <span class="flex items-center gap-2">
            <FolderOpen class="w-4 h-4" />
            View Projects
          </span>
        </a>
        <a
          href="#contact"
          class="clip-corners-sm bg-neon-blue/10 border border-neon-blue text-neon-blue px-8 py-3 text-sm uppercase tracking-widest hover:bg-neon-blue hover:text-terminal-base hover:shadow-neon-blue transition-all duration-300"
        >
          <span class="flex items-center gap-2">
            <Mail class="w-4 h-4" />
            Contact Me
          </span>
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronsDown class="w-6 h-6 text-neon-blue/50" />
    </div>
  </section>
</template>

<script setup>
import {
  ChevronRight,
  FolderOpen,
  Mail,
  ChevronsDown,
} from 'lucide-vue-next';
</script>

<style scoped>
.typewriter-text {
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter 2s steps(24) 0.5s forwards;
  width: 0;
  display: inline-block;
}

@keyframes typewriter {
  from { width: 0; }
  to   { width: 100%; }
}
</style>
