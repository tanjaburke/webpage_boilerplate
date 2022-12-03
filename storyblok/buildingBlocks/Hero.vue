<template>
    <article class="hero-wrapper inner">
        <template  v-for="blok in blok.content" :key="blok._uid" >
            <component v-if="blok" :is="blok.component" :blok="blok"/>
        </template>
    </article>
</template>
 
<script lang="ts">
export default {
    props: {
        blok: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
.hero-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: center;
    height: 500px;
    padding: $pad-inner;

    @media only screen and (max-width: $phone-max) {
        height: 300px;
        padding: $pad-inner-mobile;
    }

    .title, 
    .description, 
    .button {
        z-index: 10;
    }

    .description,
    .button {
        font-size: clamp(16px, 11px + 0.9vw, 18px);
        line-height: clamp(21px, 11px + 0.9vw, 24px);
    }

}

   



</style>