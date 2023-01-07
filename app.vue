<template>
  <NuxtLayout>
    <Header/>
    <NuxtPage/>
    <!-- <Contact/> -->
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
