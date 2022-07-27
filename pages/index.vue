<script setup lang="ts">
import ProductList from '@/components/ProductList.vue'

useHead({
  title: '(Work)Shop',
  meta: [
    {
      name: 'description',
      content: 'Your new favorite shop'
    }
  ]
})
</script>

<template>
  <div>
    <header>
      <h1 class="text-3xl font-semibold text-orange-600 mt-8 mb-12 text-center">(Work)Shop</h1>
    </header>
    <main>
      <ProductList />
    </main>
  </div>
</template>
