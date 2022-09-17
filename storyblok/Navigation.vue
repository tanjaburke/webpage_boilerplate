<template>
    <div class="navigation w-100 flex js-e al-c" :style="{ backgroundColor: '#'+blok.reference.content.backgroundColor }">
        <ul class="w-100 flex js-e al-c" :style="{ color: '#'+blok.reference.content.fontColor }">
            <template v-for="item in blok.reference.content.navigation" :key="item._uid">
                <template v-if="item.logo && item.logo[0].name && item.logo[0].logo.filename.length === 0">
                    <NuxtLink class="m-xs text-none logo" to="/" :style="{ color: '#'+blok.reference.content.fontColor }">{{ item.logo[0].name }}</NuxtLink>
                </template>
                    <template v-if="item.logo && item.logo[0].logo.filename.length > 0">
                        <NuxtLink class="m-xs text-none logo" to="/"><img :src="item.logo[0].logo.filename" alt=""></NuxtLink>
                    </template>
                    <NuxtLink class="m-xs text-none menu-item"
                    :style="{ color: '#'+blok.reference.content.fontColor }" v-else :to="`/${item.item.cached_url}`">{{ item.itemTitle }}</NuxtLink>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        blok: {
            type: Object,
            required: true
        }
    },
        data() {
        return {
            story: '',
        }
    },
}
</script>

<style lang="scss">

    .navigation {
        z-index: 10;
        height: 50px;
    }

    .menu-item {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
    }

    .logo {
        height: 10%;
        position: absolute;
        left: $blok-margin;

       & img {
            height: 30px;
        }
    }

    .mmm {
        align-self: flex-start;
    }
</style>