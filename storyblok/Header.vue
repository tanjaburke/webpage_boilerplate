<template>
    <section v-if="header">
        <img class="logo" src="" alt="">
        <Navigation :blok="header.content.header_menu"/>
    </section>
</template>

<script lang="ts">
export default {
    data() {
        return {
            header: '',
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData(){
            this.header = await useStoryblok('config', { version: 'draft' });
            console.log(toRaw(this.header));
        }
    }
}

</script>
