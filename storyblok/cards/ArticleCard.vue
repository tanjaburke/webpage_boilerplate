<template>
    <NuxtLink :to="`/${item.full_slug}`">
        <h3>{{ item.content.title }}</h3>
        <p>{{ item.published_at }}</p>
        <p class="line-clamp-2">{{ item.content.excerpt }}</p>
    </NuxtLink>
</template>

<script lang="ts">
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    mounted(){
        console.log("ARTICLE in card", toRaw(this.item));
    }
}
</script>