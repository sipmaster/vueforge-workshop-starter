<script setup lang="ts">
import { computed } from 'vue'
import products from '@/data/products.json'

const props = defineProps<{
  except?: number
}>()

const { except } = toRefs(props)

const productsToDisplay = computed(() => {
  return except.value
    ? products.filter(({ id }) => id !== except.value)
    : products
})
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    <a v-for="product in productsToDisplay" :key="product.id" :href="`/products/${product.id}`" :title="product.title"
      class="cursor-pointer">
      <div class="h-20 mb-8 flex items-center justify-center">
        <div class="text-center font-semibold leading-tight">{{ product.title }}</div>
      </div>
      <ProductImage :src="product.image" :alt="product.title" class="mx-auto aspect-square" />
    </a>
  </div>
</template>
