<template>
    <section v-if="header.content">
        <!-- <img class="logo" v-if="header.content?.logo.filename.length > 0" :src="header.content?.logo.filename" :alt="header.content?.logo.alt"/> -->
        <Navigation v-if="header.content" :blok="header.content"/>
    </section>
</template>

<script lang="ts">
import { Header } from '@/types';
export default {
    data() {
        return {
            header: {} as Header,
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData(){
            this.header = await useStoryblok('config', { version: 'draft' }) as Header;
            console.log("This eader",toRaw(this.header.content?.headerMenu));
        }
    }
}

</script>
