<template>
    <section
        class="hero-wrapper h-100"
        >
        <article class="hero-text m-blok w-100">
            <h1 > blok.headline </h1>
            <RichTextRenderer v-if="blok.text" :document="blok.text"></RichTextRenderer>
        </article>
        <div class="w-100 pink-overlay"></div>
        <div v-if="blok.images.length===1" class="image-center-cropped" :style="{ 'background-image': `url(${blok.images[0].filename})` }"></div>
        <swiper v-else
            class="w-100"
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            :navigation="{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}"
            :autoplay='{
            "delay": 350000,
            "disableOnInteraction": false
            }'
            parallax
            grabCursor
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            >
            <swiper-slide v-for="(image, index) in blok.images" :key="index">
                <div class="image-center-cropped" :style="{ 'background-image': `url(${image.filename})` }"></div>
            </swiper-slide>
        </swiper>
        <div v-if="blok.images.length>1" class="swiper-button-next"></div>
        <div v-if="blok.images.length>1" class="swiper-button-prev"></div>
    </section>
</template>
 
<script lang="ts">
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer';
 // import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Parallax, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
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
        RichTextRenderer,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            modules: [Navigation, Autoplay, A11y, EffectFade],
        }
    },


}
</script>

<style lang="scss">
.hero-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
}

.pink-overlay {
    background-color: $color-dark-pink;
    position: absolute;
    z-index: 10;
    top: 0;
    height: calc(100vh - 50px);
    width: 100%;
    opacity: 0.7;

}

.hero-text {
    position: absolute;
    z-index: 10;
    top: 0;
}

.image-center-cropped {
  width: 100%;
  height: calc(100vh - 50px);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
}

/* Set the image to fill its parent and make transparent */
.image-center-cropped img {
  min-height: 100%;
  min-width: 100%;
}

.swiper-button-next::after,
.swiper-button-prev::after
 {
    font-size: 25px;
    color: #444;
    font-weight: bold;

}

.swiper-button-next,
.swiper-button-prev{
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    
}

</style>