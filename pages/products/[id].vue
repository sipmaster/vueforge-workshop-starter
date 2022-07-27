<script setup lang="ts">
import products from '@/data/products.json'
import ProductOverview from '@/components/ProductOverview.vue'
import ProductList from '@/components/ProductList.vue'
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon.vue'

const route = useRoute()
const product = products.find(({ id }) => Number(route.params.id) === id)

useHead({
  title: `${product?.title} | MyShop`,
  meta: [
    {
      name: 'description',
      content: product?.description
    }
  ]
})
</script>

<template>
  <div>
    <header>
      <nav class="text-orange-600 font-semibold text-lg mt-8 mb-8 ">
        <RouterLink to="/" title="Home">
          <ArrowLeftIcon />
        </RouterLink>
      </nav>
    </header>
    <main>
      <div v-if="!product">
        Loading error
      </div>
      <template v-else>
        <ProductOverview :title="product.title" :description="product.description" :image-url="product.image"
          :price="product.price" />
        <h2 class="font-semibold text-xl text-orange-700 text-center">Similar items</h2>
        <ProductList :except="product.id" />
      </template>
    </main>
  </div>
</template>
