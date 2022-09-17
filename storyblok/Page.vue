<template>
  <div v-for="blok in blok.body" :key="blok._uid" :style="{backgroundColor: '#'+blok.backgroundColor}">
   <StoryblokComponent
      :blok="blok"
    />
  </div>
</template>

<script lang="ts">
export default {
    props: {
        blok: {
            type: Object,
            required: true
        }
    },
}
</script>
