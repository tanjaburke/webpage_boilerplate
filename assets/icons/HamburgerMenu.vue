<template>
    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 7H19" :stroke="slug !== 'kontakt' ? 'white' : 'black'" stroke-linecap="round"/>
    <path d="M5 12H19" :stroke="slug !== 'kontakt' ? 'white' : 'black'" stroke-linecap="round"/>
    <path d="M5 17H19" :stroke="slug !== 'kontakt' ? 'white' : 'black'" stroke-linecap="round"/>
    </svg>
</template>

<script setup>
  const route = useRoute()
  const slug = route.params.slug
</script>