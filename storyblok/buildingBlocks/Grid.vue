<template>
    <section :class="['grid', 'inner', blok.backgroundColor]">
        <template  v-for="item in blok.content" :key="item._uid" >
            <component v-if="item" :is="item.component" :blok="item" :height="blok.imageHeight" :width="blok.imageWidth" :bgColor="blok.cardBackgroundColor" :textColor="blok.textColor" :headerType="blok.headerType" :lineClamp="blok.lineClamp"/>
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
        }
    };
</script>

<style lang="scss">
.grid {
    display: grid;
    grid-template-columns: repeat(4, 25%);

    @media only screen and (max-width: $tablet-max) {
        grid-template-columns: repeat(2, 50%);
    }

    @media only screen and (max-width: $phone-max) {
        grid-template-columns: repeat(1, 100%);
    }
}
</style>


