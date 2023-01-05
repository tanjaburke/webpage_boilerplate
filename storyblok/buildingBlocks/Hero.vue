<template>
    <article :class="`hero-wrapper ${blok.type ? blok.type : 'hero-full' }`">
        <template  v-for="blok in blok.content" :key="blok._uid" >
            <component v-if="blok" :is="blok.component" :blok="blok" class="hero-item"/>
        </template>
    </article>
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
        console.log(toRaw(this.blok));
    }
}
</script>

<style lang="scss">
.hero-full {
    height: 100vh;
}

.hero-80 {
    height: 80vh;
}

.hero-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: center;
    width: 100vw;
    margin-left: - $pad-inner;
    // padding: $pad-inner;

    @media only screen and (max-width: $phone-max) {
        height: calc(100vh - 80px);;
        padding: $pad-inner-mobile;
    }

    .title, 
    .description, 
    .button {
        z-index: 10;
        padding: 0 $pad-inner;
        width: 80%;

        @media only screen and (max-width: $phone-max) {
            padding: 0 $pad-inner-mobile;
            width: 100%
        }
    }

    .title {
        margin: 0;
    }


    .description,
    .button {
        font-size: clamp(16px, 11px + 0.9vw, 21px);
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