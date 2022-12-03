<template>
    <article class="hero-wrapper">
        <h1 class="ninety">HERO</h1>
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

    @media only screen and (max-width: $phone-max) {
        height: 300px;
    }

    .ninety {
        font-size: 60px !important;
    }

    .title, 
    .description, 
    .button {
        z-index: 10;
        margin-left: $blok-margin*2;
    }

    .button {
        margin-bottom: $blok-margin;
        margin-top: $blok-margin;
    }
}

   



</style>