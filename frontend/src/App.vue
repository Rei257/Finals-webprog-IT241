<!--
  App.vue — Root Application Component
  
  Wraps the entire app in the CRT scanline overlay and
  assembles all section components into a single-page layout.
-->
<template>
  <div class="crt-overlay min-h-screen bg-terminal-base">
    <!-- Navigation Bar -->
    <NavBar />

    <!-- Hero Section -->
    <HeroSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Projects Section -->
    <ProjectsSection />

    <!-- Contact Section -->
    <ContactSection />

    <!-- Footer -->
    <FooterBar />
  </div>
</template>

<script setup>
/**
 * Root component assembling the full portfolio layout.
 * Each section is a standalone component imported below.
 */
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';
import FooterBar from './components/FooterBar.vue';
</script>
