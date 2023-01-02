<template>
    <article class="connect flex js-c al-c">
            <a :href="'tel:+45'+blok.phone"><img src="../../assets/icons/phone-icon.png" alt="phone_number" :title="'call'+blok.phone"></a>
            <a :href="'mailto:'+blok.email"><img class="email" src="../../assets/icons/email-icon.png" alt="email" title="send email"></a>
            <template v-for="item in blok.content" :key="item._uid">
                <a :href="item.link.url" target="_blank" ><img :src="item.icon.filename" :alt="item.icon.slt"></a>
            </template>
    </article>
</template>


<script setup>
import { useWindowWidth } from '../../composables/windowWidth';
const props = defineProps(['blok'])
const { mobile} = useWindowWidth();
</script>

<style lang="scss" scoped>
.connect {
    position: absolute;
    bottom: 30px;
    right: 30px;
    z-index: 1000;
    height: 20px;

    a {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
    }
    
    img {
        position: relative;
        height: 100%;
    }

    .email {
        height: 22px;
    }

    a {
        margin: 5px;
    }
}
</style>
