<template>
    <teleport to="body">
        <article v-if="contact" :class="`contact sticky-bottom flex ${slug ==='/' || slug === undefined ? 'inner al-c js-e' : 'al-e js-e w-100 vw-100 contact-margin-right'}`">
            <template v-if="slug ==='/' || slug === undefined" >
                <a v-if="contact.phone" :href="'tel:+45'+contact.phone"><img src="../../assets/icons/phone-icon.png" alt="phone_number" :title="'call'+contact.phone"></a>
                <a v-if="contact.email" :href="'mailto:'+contact.email"><img class="email" src="../../assets/icons/email-icon.png" alt="email" title="send email"></a>
                <template v-for="item in contact.content" :key="item._uid">
                    <a :href="item.link.url" target="_blank" ><img :src="item.icon.filename" :alt="item.icon.slt"></a>
                </template>
            </template>
            <div v-else class="contact-box bg-black flex-col al-e js-e m-bottom">
                <a v-if="contact.phone" :href="'tel:+45'+contact.phone"><img src="../../assets/icons/phone-icon.png" alt="phone_number" :title="'call'+contact.phone"></a>
                <a v-if="contact.email" :href="'mailto:'+contact.email"><img class="email" src="../../assets/icons/email-icon.png" alt="email" title="send email"></a>
                <template v-for="item in contact.content" :key="item._uid">
                    <a :href="item.link.url" target="_blank" ><img :src="item.icon.filename" :alt="item.icon.slt"></a>
                </template>
            </div>
        </article>
    </teleport>
</template>


<script setup>
import { useGlobalVariables } from '../../composables/globalVariables';
const route = useRoute()
const slug = route.params.slug
const { headerMenu,
        headerLogo,
        headerTitle,
        contact } = await useGlobalVariables();
</script>

<style lang="scss" scoped>
.contact-box{
    background-color: $color-background;
    width: 30px;
    height: fit-content;
    margin: 0 $pad-inner;

  @media only screen and (max-width: $phone-max) {
    padding: 0;
    margin: 10px;
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
