<template>
        <div v-if="blok.images.length===1" class="image-center-cropped hero-image" :style="{ 'background-image': `url(${blok.images[0].filename})` }"></div>
        <swiper v-else
            class="w-100 my-swiper"
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            :navigation="{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}"
            :autoplay='{
            "delay": 5000,
            "disableOnInteraction": false
            }'
            parallax
            grabCursor
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            >
            <swiper-slide v-for="(image, index) in blok.images" :key="index">
                <div class="image-center-cropped hero-image" :style="{ 'background-image': `url(${image.filename})` }"></div>
            </swiper-slide>
        </swiper>
        <div v-if="blok.images.length>1" class="swiper-button-next"></div>
        <div v-if="blok.images.length>1" class="swiper-button-prev"></div>
</template>
 
  <script>
 // import Swiper core and required modules
import { Navigation, A11y, Autoplay, EffectFade } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'

export default {
    props: {
        blok: {
            type: Object,
            required: true
        }
    },
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            modules: [Navigation, Autoplay, A11y, EffectFade],
        }
    }
}
</script>

<style lang="scss">
    .hero-image {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;

        @media only screen and (max-width: $phone-max) {
            min-width: 100%;
            width: unset;
            height: 100vh;
        }

    }

    .my-swiper {
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        font-size: 25px;
        color: #444;
        font-weight: bold;

        @media only screen and (max-width: $phone-max) {
            font-size: 20px;
        }
    }

    .swiper-button-next,
    .swiper-button-prev{
        width: 50px;
        height: 50px;
        background-color: white;
        border-radius: 50%;

        @media only screen and (max-width: $phone-max) {
            width: 40px;
            height: 40px;
        }
    }

</style>