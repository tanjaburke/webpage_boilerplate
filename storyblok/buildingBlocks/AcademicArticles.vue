<template>
    <section>
        <h3>{{ blok.title }}</h3>
        <article v-for="item in blok.articles" :key="item._uid" class="w-100">
            <p>{{ item.year }}, <a v-if="item.link.url" :href="item.link.url">{{ item.title }}</a><span v-else>{{ item.title }}</span>, {{ item.journal }}, {{ item.journalVol }}, pp.{{ item.pageNumber }}</p>
        </article>
    </section>
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
        console.log('NEW', this.blok);
        
    }
}
</script>