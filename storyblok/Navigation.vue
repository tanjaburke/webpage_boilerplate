<template>
    <div class="navigation w-100 flex js-space al-c">
        <ul class="flex js-s al-c">
            <NuxtLink class="m-xs list-none" v-for="item in blok.reference.content.navigation" :key="item._uid" :to="`/${item.item.cached_url}`">{{ item.itemTitle }}</NuxtLink>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        blok: {
            type: Object,
            required: true
        }
    },
        data() {
        return {
            story: '',
        }
    },
}
</script>

<style scoped>
.navigation {
    z-index: 10;
    height: 50px;
}


</style>