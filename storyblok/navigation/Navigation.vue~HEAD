<template>
    <div class="navigation w-100 flex js-e al-c" >
        <ul class="w-100 flex js-e al-c">
            <template v-for="item in blok.headerMenu" :key="item._uid">
                <NuxtLink class="m-xs text-none menu-item" v-if="item.link.linktype === 'story'"
                    :to="`/${item.link.cached_url}`">{{ item.title }}
                </NuxtLink>
                <a v-else :href="`https://${item.link.cached_url}`" target="_blank">{{ item.title }}</a>
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
    }
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
</style>