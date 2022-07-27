<script setup lang="ts">
import '@/assets/base.css'

useHead({
  link: [
    {
      rel: 'icon',
      href: '/favicon.png'
    }
  ]
})
</script>

<template>
  <div class="max-w-screen-lg mx-auto px-5">
    <NuxtPage />
  </div>
  <footer class="bg-gray-900 py-10 mt-24 px-5">
    <div class="max-w-screen-sm mx-auto text-center text-lg text-gray-100">
      Built with 🧡 for the Vue.js Forge workshop.
    </div>
  </footer>
</template>
