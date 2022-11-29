<template>
    <section>
            <a v-if="blok.link.url" :href="blok.link.url" class="flex">
                <div>
                   <div class="img-thumb" v-if="blok.image.filename" :style="{ 'background-image': 'url(' + blok.image.filename + ')' }"/>
                </div>
                <div>
                    <p>{{ blok.date.slice(8, 10) }}-{{ blok.date.slice(5, 7) }}-{{ blok.date.slice(0, 4) }}</p>
                    <p>{{ blok.title }}</p>
                    <p>{{ blok.media }}</p>
                </div>

            </a>
            <article v-else class="flex">
                <div>
                   <div class="img-thumb" v-if="blok.image.filename" :style="{ 'background-image': 'url(' + blok.image.filename + ')' }"/>
                </div>
                <div>
                    <p>{{ blok.date.slice(8, 10) }}-{{ blok.date.slice(5, 7) }}-{{ blok.date.slice(0, 4) }}</p>
                    <p>{{ blok.title }}</p>
                    <p>{{ blok.media }}</p>
                </div>
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
};
</script>