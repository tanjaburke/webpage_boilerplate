<template>
 <div :class="`inner ${blok.backgroundColor ? blok.backgroundColor: ''} ${slug ==='/' || slug === undefined ? '' : margin-bottom}`" :style="{'background-color': blok.backgroundColor}">
    <template v-for="blok in blok.body" :key="blok._uid">
        <StoryblokComponent
          :blok="blok"
        />
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['blok'])
  const route = useRoute()
  const slug = route.params.slug
</script>

<style lang="scss" scoped>
  .margin-bottom {
    margin-bottom: 150px;
  }
</style>
