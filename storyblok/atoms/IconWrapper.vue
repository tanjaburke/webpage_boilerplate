<template>
    <SlideDown v-if="blok.iconName === 'slideDown'" class="icon front" :color="blok.color"/>
    <PhoneStroke v-if="blok.iconName === 'phoneStroke'" class="icon front" :color="blok.color"/>
    <EmailStroke v-if="blok.iconName === 'emailStroke'" class="icon front" :color="blok.color"/>
    <FacebookIcon v-if="blok.iconName === 'facebookIcon'" class="icon front" :color="blok.color"/>
</template>

<script setup>
    import SlideDown from '../../assets/icons/SlideDown.vue'
    import PhoneStroke from '../../assets/icons/PhoneStroke.vue'
    import EmailStroke from '../../assets/icons/EmailStroke.vue'
    import FacebookIcon from '../../assets/icons/FacebookIcon.vue'
    import { onMounted } from 'vue'
    
    const props = defineProps(['blok'])

    onMounted(()=>{
        console.log(props.blok);
    })
</script>

<style lang="scss">
    .front{
        z-index: 10000;
    }
</style>