<template>
    <NuxtLink to="/">
        <h3>{{ item.content.title }}</h3>
        <p>{{ item.published_at }}</p>
        <RichText :textBlock="item.content.text"></RichText>
        {{item}}
    </NuxtLink>
</template>

<script lang="ts">
import RichText from '../RichText.vue';
export default {
  components: { RichText },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    mounted(){
        console.log(toRaw(this.item.content));
        
    }
}
</script>