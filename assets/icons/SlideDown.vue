<template>
    <div :class="`icon-circle ${color === 'white' ? 'bg-white' : 'bg-black'}`">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 9L12 15L6 9" :stroke="color === 'white' ? 'black' : 'white'" stroke-width="2"/>
        </svg>
    </div>
</template>

<script setup>
    const props = defineProps(['color'])
</script>

<style lang="scss">
.icon-circle {
    min-width: 30px;
    width: 30px;
    min-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}
</style>

