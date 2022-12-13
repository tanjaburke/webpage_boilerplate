<template>
 <div :class="['inner', blok.backgroundColor]" :style="{'background-color': blok.backgroundColor}">
    <template v-for="blok in blok.body" :key="blok._uid">
        <StoryblokComponent
          :blok="blok"
        />
    </template>
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
       console.log("On PAGE", toRaw(this.blok));
    }
}
</script>
