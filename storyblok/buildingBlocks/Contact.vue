<template>
    <teleport to="body">
        <article v-if="contact" class="contact inner sticky-bottom flex js-c al-c">
                <a v-if="contact.phone" :href="'tel:+45'+contact.phone"><img src="../../assets/icons/phone-icon.png" alt="phone_number" :title="'call'+contact.phone"></a>
                <a v-if="contact.email" :href="'mailto:'+contact.email"><img class="email" src="../../assets/icons/email-icon.png" alt="email" title="send email"></a>
                <template v-for="item in contact.content" :key="item._uid">
                    <a :href="item.link.url" target="_blank" ><img :src="item.icon.filename" :alt="item.icon.slt"></a>
                </template>
        </article>
    </teleport>
</template>


<script setup>
import { useGlobalVariables } from '../../composables/globalVariables';

const { headerMenu,
        headerLogo,
        headerTitle,
        contact } = await useGlobalVariables();
console.log(toRaw(contact));
console.log(toRaw(contact.value));
console.log(contact);
</script>

<style lang="scss" scoped>
.contact {
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
