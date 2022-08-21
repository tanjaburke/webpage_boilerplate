<template>
  <div v-editable="blok" class="font-[Roboto] px-4">
   YO
   <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
