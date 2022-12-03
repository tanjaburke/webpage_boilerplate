<template>
    <div class="navigation w-100 flex js-e al-c" >
        <ul class="w-100 flex js-e al-c">
            <template v-for="item in blok" :key="item._uid">
                <NuxtLink class="m-xs text-none" v-if="item.link.linktype === 'story'"
                    :to="`/${item.link.cached_url}`">{{ item.title }}
                </NuxtLink>
                <a v-else :href="item.link.cached_url.includes('https') ? item.link.cached_url : `https://${item.link.cached_url}`" target="_blank">{{ item.title }}</a>
            </template>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps(['blok'])

</script>

<style lang="scss" scoped>
    .navigation {
        z-index: 10;
        height: 50px;

        a {
            font-size: $header-font-size;
            font-weight: $header-font-weight;
            color: $color-black !important;
        }
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