<!--
  NavBar.vue — Cyberpunk Navigation Bar
  
  Fixed-top navigation with neon accents, responsive hamburger menu,
  and smooth-scroll anchor links.
-->
<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 border-b border-terminal-border bg-terminal-base/90 backdrop-blur-md"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo / Brand -->
        <a
          href="#hero"
          class="flex items-center gap-2 text-neon-blue font-bold text-lg tracking-widest uppercase hover:text-glow-blue transition-all duration-300"
        >
          <Terminal class="w-5 h-5" />
          <span>&gt;_portfolio</span>
        </a>

        <!-- Desktop Nav Links -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm uppercase tracking-wider text-gray-400 hover:text-neon-pink hover:text-glow-pink transition-all duration-300"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          class="md:hidden text-neon-pink hover:text-neon-blue transition-colors"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <X v-if="isMobileMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden border-b border-terminal-border bg-terminal-base/95 backdrop-blur-md"
      >
        <div class="px-4 py-4 space-y-3">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="block text-sm uppercase tracking-wider text-gray-400 hover:text-neon-pink transition-colors"
            @click="isMobileMenuOpen = false"
          >
            <span class="text-neon-blue mr-2">&gt;</span>{{ link.label }}
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { Terminal, Menu, X } from 'lucide-vue-next';

/** Mobile menu visibility state */
const isMobileMenuOpen = ref(false);

/** Navigation anchor links */
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
</script>
