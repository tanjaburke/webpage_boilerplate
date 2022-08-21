<template>
  <div v-editable="blok" :class="`${blok.class}`">
    <h4 v-for="(item, index) in blok.headline.content" :key="index">
      {{ blok.headline.content[index] }}
    </h4>
  </div>
</template>

<script lang="ts">
export default {
  props: ["blok"],
  data() {
    return {
      myInnerHTML: "",
    };
  },
};
</script>
