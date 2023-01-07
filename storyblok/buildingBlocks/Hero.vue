<template>
    <article v-if="ready && heightIsReady" :class="`hero-wrapper ${blok.type ? blok.type : 'hero-full' }`" :style="(!blok.type || blok.type === 'hero-full') ? {'height' : mobile ? windowHeight.toString() + 'px' : '100vh'} : {'height' : mobile ? (windowHeight * 0.8).toString() + 'px' : '80vh'} ">
        <template  v-for="blok in blok.content" :key="blok._uid" >
            <component v-if="blok" :is="blok.component" :blok="blok" class="hero-item"/>
        </template>
    </article>
</template>
 
  
<script setup>
    import { useWindowWidth } from '../../composables/windowWidth';
    import { useWindowHeight } from '../../composables/windowHeight';

    const props = defineProps(['blok'])

    const { mobile, ready } = useWindowWidth();
    const { windowHeight, heightIsReady } = useWindowHeight();
</script>

<style lang="scss">
.hero-full {
    width: 100%;
    
    @media only screen and (max-width: $phone-max) {
      min-height: -webkit-fill-available; 
      height: unset;
    }
}

.hero-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: center;
    width: 100vw;
    margin-left: - $pad-inner;

    @media only screen and (max-width: $phone-max) {
        height: 100vh;;
        padding: $pad-inner-mobile;
        margin-left: -25px
    }

    .title, 
    .description, 
    .button {
        opacity: 0;
        z-index: 10;
        padding: 0 $pad-inner;
        width: 80%;
        animation-name: appear;
        animation-duration: 2s;
        animation-timing-function: cubic-bezier(0.25, 0.74, 0.22, 0.99);
        animation-fill-mode: forwards;

        @media only screen and (max-width: $phone-max) {
            width: 100%;
            padding: unset
        }
    }

    .icon {
        margin: $pad-inner;

        @media only screen and (max-width: $phone-max) {
            margin: $pad-inner 0 calc($pad-inner / 2) 0;
        }
    }


    // .description {
    //     font-weight: 500;
    //     width: 60%;
        
    //     @media only screen and (max-width: $phone-max) {
    //         width: 100%;
    //         padding: unset
    //     }

    .title {
        margin: 0;
    }


    .description,
    .button {
        font-size: clamp(16px, 11px + 0.6vw, 20px);
        line-height: clamp(25px, 11px + 0.9vw, 30px);
    }

}

.hero-item:last-child {
    margin-bottom: $blok-margin;

        @media only screen and (max-width: $phone-max) {
              margin-bottom: 25px;
        }
}


   



</style>