<template>
  <div v-editable="blok" class="font-[Roboto] px-4">
   <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
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
    mounted(){
      console.log('in Page', toRaw(this.blok));
      
    }
}
</script>
