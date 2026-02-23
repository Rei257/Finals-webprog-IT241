<!--
  ContactSection.vue — Contact Section Wrapper
  
  Wraps the ContactForm with section layout, decorative elements,
  and additional contact information.
-->
<template>
  <section id="contact" class="py-20 sm:py-28 px-4">
    <div class="mx-auto max-w-6xl">
      <!-- Section header -->
      <SectionHeader title="Contact" command="nano message.txt" />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
        <!-- Left: Info panel -->
        <div class="space-y-6">
          <div class="bg-terminal-surface border border-terminal-border rounded-lg p-6 sm:p-8">
            <h3 class="text-lg font-bold text-gray-100 mb-4 flex items-center gap-2">
              <MessageSquare class="w-5 h-5 text-neon-pink" />
              Get In Touch
            </h3>
            <p class="text-sm text-gray-400 leading-relaxed mb-6">
              Have a project idea, want to collaborate, or just want to say hello?
              Fill out the form and I'll get back to you as soon as possible.
              All messages are securely stored in the database.
            </p>

            <!-- Contact info items -->
            <div class="space-y-4">
              <div class="flex items-center gap-3 text-sm">
                <div class="w-8 h-8 flex items-center justify-center rounded bg-neon-blue/10 border border-neon-blue/30">
                  <Mail class="w-4 h-4 text-neon-blue" />
                </div>
                <div>
                  <span class="text-gray-500 text-xs uppercase tracking-wider">Email</span>
                  <p class="text-gray-300">jbguzman@student.apc.edu.ph</p>
                </div>
              </div>

              <div class="flex items-center gap-3 text-sm">
                <div class="w-8 h-8 flex items-center justify-center rounded bg-neon-pink/10 border border-neon-pink/30">
                  <MapPin class="w-4 h-4 text-neon-pink" />
                </div>
                <div>
                  <span class="text-gray-500 text-xs uppercase tracking-wider">Location</span>
                  <p class="text-gray-300">Manila, Philippines</p>
                </div>
              </div>

              <div class="flex items-center gap-3 text-sm">
                <div class="w-8 h-8 flex items-center justify-center rounded bg-neon-green/10 border border-neon-green/30">
                  <Github class="w-4 h-4 text-neon-green" />
                </div>
                <div>
                  <span class="text-gray-500 text-xs uppercase tracking-wider">GitHub</span>
                  <p class="text-gray-300">github.com/johncarlgabriel</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Terminal decoration -->
          <div class="bg-terminal-surface border border-terminal-border rounded-lg p-4 text-xs text-gray-500 font-mono">
            <p><span class="text-neon-green">system</span>: contact form status</p>
            <p class="text-neon-blue mt-1">├── encryption: <span class="text-neon-green">enabled</span></p>
            <p class="text-neon-blue">├── database: <span class="text-neon-green">connected</span></p>
            <p class="text-neon-blue">└── uptime: <span class="text-neon-green">99.9%</span></p>
          </div>
        </div>

        <!-- Right: Contact Form -->
        <div class="bg-terminal-surface border border-terminal-border rounded-lg p-6 sm:p-8">
          <div class="flex items-center gap-2 mb-6 text-xs text-gray-500 uppercase tracking-widest">
            <div class="flex gap-1.5">
              <span class="w-3 h-3 rounded-full bg-red-500/70"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-500/70"></span>
              <span class="w-3 h-3 rounded-full bg-green-500/70"></span>
            </div>
            <span class="ml-2">contact_form.sh</span>
          </div>
          <ContactForm @messageSent="loadMessages" />
        </div>
      </div>

      <!-- Messages Section -->
      <div class="mt-12">
        <h3 class="text-lg font-bold text-gray-100 mb-6 flex items-center gap-2">
          <MessageSquare class="w-5 h-5 text-neon-blue" />
          <span class="text-neon-blue">//</span> Messages
        </h3>

        <!-- Loading -->
        <div v-if="loadingMessages" class="text-center text-gray-500 text-sm py-8">
          Loading messages...
        </div>

        <!-- No messages -->
        <div v-else-if="messages.length === 0" class="text-center text-gray-500 text-sm py-8">
          No messages yet. Be the first to send one!
        </div>

        <!-- Messages list -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="msg in messages"
            :key="msg.id"
            class="bg-terminal-surface border border-terminal-border rounded-lg p-5 hover:border-neon-blue/50 transition-all duration-300"
          >
            <div class="flex items-center gap-2 mb-3">
              <div class="w-8 h-8 flex items-center justify-center rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink text-xs font-bold uppercase">
                {{ msg.name?.charAt(0) || '?' }}
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-200">{{ msg.name }}</p>
                <p class="text-xs text-gray-500">{{ msg.email }}</p>
              </div>
            </div>
            <p class="text-sm text-gray-400 leading-relaxed">{{ msg.content }}</p>
            <p class="text-xs text-gray-600 mt-3">{{ formatDate(msg.created_at) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { MessageSquare, Mail, MapPin, Github } from 'lucide-vue-next';
import SectionHeader from './SectionHeader.vue';
import ContactForm from './ContactForm.vue';
import { fetchMessages } from '../services/api';

const messages = ref([]);
const loadingMessages = ref(false);

async function loadMessages() {
  loadingMessages.value = true;
  try {
    messages.value = await fetchMessages();
  } catch (e) {
    console.error('Failed to load messages:', e);
  } finally {
    loadingMessages.value = false;
  }
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

onMounted(loadMessages);
</script>
