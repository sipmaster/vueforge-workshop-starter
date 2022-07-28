<script setup lang="ts">
  const props = defineProps({
    src: String
  })

  const { src } = toRefs(props)

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
</script>

<template>
  <!-- <div class="relative " style="padding-top: 100%" :style="backgroundStyle">
    <img :src=src v-bind="$attrs" class="absolute top-0 left-0 w-full h-full object-contain">
  </div> -->
  <TwicImg :src="imageURL" mode="contain" />
</template>