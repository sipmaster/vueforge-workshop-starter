<script setup lang="ts">
import { stringLiteral } from '@babel/types';

  const props = defineProps({
    src: {type: String, required: true},
    isLcp: {type: Boolean, default: false},
    alt: {type: String, required: true}
  })

  const { src, isLcp } = toRefs(props)

  function toBlurryURL(imageURL) {
    const fileName = imageURL.replace("https://fakestoreapi.com/img","")
    const url = "https://tw2mmiur.twic.pics/tp-workshop/" + fileName
    const blurryURL = url + "?twic=v1/output=preview"
    return blurryURL
  }

  const backgroundStyle = computed(()=> {
    return {
      backgroundImage: `url("${toBlurryURL(src.value)}")`
    }
  })

  function toTwicPicsURL( url: string ) {
    return url.replace("https://fakestoreapi.com/img/","")
  }

  const imageURL = computed(() => {
    const tpURL = toTwicPicsURL(src.value)
    return `${tpURL}`
  })

  const attrs = computed(()=> {
    if (isLcp.value === true) {
      return {src: imageURL.value,}
    }
    return {
      src: imageURL.value
    }
  })
</script>

<template>
  <!-- <div class="relative " style="padding-top: 100%" :style="backgroundStyle">
    <img :src=src v-bind="$attrs" class="absolute top-0 left-0 w-full h-full object-contain">
  </div> -->
  <div v-if="isLcp" class="relative">
    <nuxt-img v-bind="attrs" sizes="xs:300px sm:400px" :alt="alt" fit="inside" :preload="true" class="w-full h-full object-contain absolute inset-0" fetchpriority="high" />
  </div>
  <TwicImg :src="imageURL" mode="contain" />
</template>