<template>
    <teleport to="body">
        <article :class="`contact sticky-bottom flex animation-slide-up ${!blok.vertical ? 'inner al-c js-e' : 'al-e js-e w-100 vw-100 contact-margin-right'}`">
            <template v-if="!blok.vertical" >
                   <a v-if="blok.content[0].phoneNumber" :href="'tel:+45'+blok.content[0].phoneNumber"><IconWrapper :blok="blok.content[0].icon[0]"/></a>
                <a v-if="blok.content[1].email" :href="'mailto:'+blok.content[1].email"><IconWrapper :blok="blok.content[1].icon[0]"/></a>
                    <a :href="blok.content[2].link.url" target="_blank" >
                        <IconWrapper :blok="blok.content[2].icon[0]"/>
                        </a>
            </template>
            <div v-else :class="`contact-box flex-col al-e js-e m-bottom ${blok.backgroundColor ? blok.backgroundColor : ''}`">
                <a v-if="blok.content[0].phoneNumber" :href="'tel:+45'+blok.content[0].phoneNumber"><IconWrapper :blok="blok.content[0].icon[0]"/></a>
                <a v-if="blok.content[1].email" :href="'mailto:'+blok.content[1].email"><IconWrapper :blok="blok.content[1].icon[0]"/></a>
                    <a :href="blok.content[2].link.url" target="_blank" >
                        <IconWrapper :blok="blok.content[2].icon[0]"/>
                        </a>
            </div>
        </article>
    </teleport>
</template>


<script setup>
import {onMounted} from 'vue'
import IconWrapper from '../atoms/IconWrapper.vue';
import { useGlobalVariables } from '../../composables/globalVariables';

const props = defineProps(['blok'])

</script>

<style lang="scss" scoped>
.contact-box{
    width: 60px;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-left: 5px;

  @media only screen and (max-width: $phone-max) {
    width: 40px;
    padding: 0;
  }

    a {
        margin-right: 5px
    }
}

.contact {
    z-index: 10;
    height: 20px;

    a {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
    }
    
    img {
        position: relative;
        height: 20px;
    }

    .email {
        height: 22px;
    }

    a {
        margin: 5px;
    }
}

</style>
