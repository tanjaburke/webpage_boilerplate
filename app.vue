<template>
  <NuxtLayout>
    <Header/>
    <NuxtPage/>
    <Footer/>
  </NuxtLayout>
</template>

<script>
import Header from './storyblok/navigation/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
