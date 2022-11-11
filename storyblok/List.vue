<template>
    <section class="blok flex-col al-c js-c">
        <!-- <template v-if="blok.card">
            <div class="flex card" v-for="item in blok.items" :key="item._uid">
                <component :is="item.component" :blok="item"/>
            </div>
        </template> -->
            <div v-for="item in blok" :key="item._uid">
                <component v-if="item.content.type" :is="`${item.content.type.name}Card`" :item="item"/>
            </div>
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
    mounted() {
        console.log("BLOK in List", toRaw(this.blok));
        
    }
};
</script>
