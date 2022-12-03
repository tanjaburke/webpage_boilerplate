<template>
  <template v-for="blok in blok.body" :key="blok._uid" :style="{backgroundColor: '#'+blok.backgroundColor}">
   <StoryblokComponent
      :blok="blok"
    />
  </template>
</template>

<script lang="ts">
export default {
    props: {
        blok: {
            type: Object,
            required: true
        }
    },
    mounted(){
       console.log("tjos is where it a");
    }
}
</script>
