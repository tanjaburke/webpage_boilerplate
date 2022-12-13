<template>
    <section>
        <h3>{{ blok.title }}</h3>
        <template v-for="item in blok.episodes" :key="item._uid">
            <a v-if="item.link.url" :href="item.link.url" class="flex card">
                <div class="img-thumb" v-if="item.image.filename" :style="{ 'background-image': 'url(' + item.image.filename + ')' }"/>
                <p>{{ item.date.slice(8, 10) }}-{{ item.date.slice(5, 7) }}-{{ item.date.slice(0, 4) }}</p>
                <p>{{ item.episodeTitle }}</p>
                <p>{{ item.podcast }}</p>
            </a>
            <article v-else class="flex card">
                <div class="img-thumb" v-if="item.image.filename" :style="{ 'background-image': 'url(' + item.image.filename + ')' }"/>
                <p>{{ item.date.slice(8, 10) }}-{{ item.date.slice(5, 7) }}-{{ item.date.slice(0, 4) }}</p>
                <p>{{ item.episodeTitle }}</p>
                <p>{{ item.podcast }}</p>
            </article>
        </template>
    </section>
</template>

<script>
export default {
        props: {
        blok: {
            type: Object,
            required: true
        }
    },
    mounted(){
        console.log('podcast', typeof this.blok.episodes[0].date);
        
    }
}
</script>