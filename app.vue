<template>
  <NuxtLayout>
    <Contact/>
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
