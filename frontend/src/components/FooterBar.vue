<!--
  FooterBar.vue — Cyberpunk Terminal Footer
  
  Minimal footer with neon accent line and copyright.
-->
<template>
  <footer class="border-t border-terminal-border bg-terminal-base py-8 px-4">
    <div class="mx-auto max-w-6xl">
      <!-- Gradient line -->
      <div class="h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent mb-8"></div>

      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <!-- Left: Terminal prompt -->
        <div class="text-xs text-gray-500 font-mono">
          <span class="text-neon-green">guest@portfolio</span>:<span class="text-neon-blue">~</span>$ echo "Thanks for visiting!"
        </div>

        <!-- Center: Copyright -->
        <p class="text-xs text-gray-600 text-center">
          &copy; {{ currentYear }} <span class="text-gray-400">John Carl Gabriel B. Guzman</span> — Asia Pacific College
        </p>

        <!-- Right: Social links -->
        <div class="flex items-center gap-4">
          <a
            href="https://github.com/johncarlgabriel"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-neon-blue transition-colors"
            aria-label="GitHub profile"
          >
            <Github class="w-4 h-4" />
          </a>
          <a
            href="mailto:jbguzman@student.apc.edu.ph"
            class="text-gray-500 hover:text-neon-pink transition-colors"
            aria-label="Send email"
          >
            <Mail class="w-4 h-4" />
          </a>
        </div>
      </div>

      <!-- Bottom status bar -->
      <div class="mt-6 flex items-center justify-center gap-4 text-[10px] text-gray-600 uppercase tracking-widest">
        <span class="flex items-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full bg-neon-green"></span>
          Online
        </span>
        <span>|</span>
        <span>Vue 3 + NestJS + Supabase</span>
        <span>|</span>
        <span>Deployed on Vercel</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Github, Mail } from 'lucide-vue-next';

/** Current year for dynamic copyright */
const currentYear = new Date().getFullYear();
</script>
