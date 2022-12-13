<template>
    <h2 :class="['animated-blok','title', 'page-header' , blok.color? blok.color : '']" :style="{'margin-bottom': blok.animation ? '10px' : '50px'}"> {{blok.title}}</h2>
</template>

<script lang="ts">
    export default {
        props: {
            blok: {
                type: Object,
                required: true
            },
        }
    }
    
</script>

<style lang="scss" scoped>
  .animated-blok {
        // width: 80%;
        // max-width: 1400px;
        // height: clamp(75px, 50px + 5vw, 160px);
        // background-color: transparent;
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
    }
  
    .animated-blok::after {
        content: "";
        position: absolute;
        right: -100%;
        width: 100%;
        height: clamp(75px, 50px + 5vw, 160px);
        background: white;
        animation: animate 0.9s cubic-bezier(0,.69,1,.33);
    }

      @keyframes animate {
        0% {
            right: 0;
        }
  
        100% {
            right: -100%;
        }
    }
</style>