<!--
  ContactForm.vue — Cyberpunk Contact Form
  
  Uses v-model for two-way binding and submits data
  via POST to the NestJS /contact endpoint.
-->
<template>
  <form @submit.prevent="handleSubmit" class="space-y-5">
    <!-- Name Field -->
    <div>
      <label for="name" class="block text-xs uppercase tracking-widest text-gray-500 mb-2">
        <span class="text-neon-blue mr-1">&gt;</span> Name
      </label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        required
        placeholder="Enter your name..."
        class="w-full bg-terminal-base border border-terminal-border rounded-sm px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:border-neon-blue focus:shadow-neon-blue focus:outline-none transition-all duration-300"
      />
    </div>

    <!-- Email Field -->
    <div>
      <label for="email" class="block text-xs uppercase tracking-widest text-gray-500 mb-2">
        <span class="text-neon-blue mr-1">&gt;</span> Email
      </label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        required
        placeholder="Enter your email..."
        class="w-full bg-terminal-base border border-terminal-border rounded-sm px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:border-neon-blue focus:shadow-neon-blue focus:outline-none transition-all duration-300"
      />
    </div>

    <!-- Message Field -->
    <div>
      <label for="content" class="block text-xs uppercase tracking-widest text-gray-500 mb-2">
        <span class="text-neon-blue mr-1">&gt;</span> Message
      </label>
      <textarea
        id="content"
        v-model="form.content"
        rows="5"
        required
        placeholder="Type your message..."
        class="w-full bg-terminal-base border border-terminal-border rounded-sm px-4 py-3 text-sm text-gray-200 placeholder-gray-600 resize-none focus:border-neon-blue focus:shadow-neon-blue focus:outline-none transition-all duration-300"
      ></textarea>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      :disabled="submitting"
      class="clip-corners-sm w-full sm:w-auto bg-neon-pink/10 border border-neon-pink text-neon-pink px-8 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-neon-pink hover:text-terminal-base hover:shadow-neon-pink disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
    >
      <span v-if="submitting" class="flex items-center justify-center gap-2">
        <Loader2 class="w-4 h-4 animate-spin" />
        Transmitting...
      </span>
      <span v-else class="flex items-center justify-center gap-2">
        <Send class="w-4 h-4" />
        Transmit Message
      </span>
    </button>

    <!-- Success Feedback -->
    <transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div
        v-if="success"
        class="flex items-center gap-2 bg-neon-green/10 border border-neon-green/30 rounded-sm px-4 py-3 text-sm text-neon-green"
      >
        <CheckCircle2 class="w-5 h-5" />
        Message transmitted successfully. Thank you!
      </div>
    </transition>

    <!-- Error Feedback -->
    <transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div
        v-if="errorMsg"
        class="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-sm px-4 py-3 text-sm text-red-400"
      >
        <AlertTriangle class="w-5 h-5" />
        {{ errorMsg }}
      </div>
    </transition>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { Send, Loader2, CheckCircle2, AlertTriangle } from 'lucide-vue-next';
import { sendMessage } from '../services/api';

const emit = defineEmits(['messageSent']);

/** Form model bound via v-model */
const form = reactive({
  name: '',
  email: '',
  content: '',
});

/** UI state */
const submitting = ref(false);
const success = ref(false);
const errorMsg = ref(null);

/**
 * Submit the form to POST /contact via the API service.
 */
async function handleSubmit() {
  submitting.value = true;
  success.value = false;
  errorMsg.value = null;

  try {
    await sendMessage({ ...form });
    success.value = true;
    emit('messageSent');

    // Reset form after successful submission
    form.name = '';
    form.email = '';
    form.content = '';

    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      success.value = false;
    }, 5000);
  } catch (err) {
    errorMsg.value =
      err?.response?.data?.message ||
      'Transmission failed. Please try again later.';
  } finally {
    submitting.value = false;
  }
}
</script>
