<script setup lang="ts">
import ProductImage from '@/components/ProductImage.vue'
defineProps<{
  title: string
  description: string
  imageUrl: string
  price: number
}>()
</script>

<template>
  <div class="relative">
    <h1 class="font-semibold text-2xl mb-6 text-gray-900">{{ title }}</h1>
    <div class="text-xl mb-12">
      <span class="text-orange-400">$</span> <span class="text-gray-500">{{ price }}</span>
    </div>
    <ProductImage :src="imageUrl" :alt="title" class="mb-12 mx-auto max-h-96 aspect-square" />
    <div class="text-gray-500 mb-12 text-center italic">
      {{ description.slice(0, 90) }}...
    </div>
    <button
      class="rounded-lg block py-3 bg-gradient-to-br from-orange-400 to-orange-500 text-white font-semibold mx-auto mb-12 w-full max-w-sm">
      Add to cart
    </button>
  </div>
</template>
