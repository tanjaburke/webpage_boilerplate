<template>
    <div class="navigation flex js-e al-c">
        <ul class="w-100 flex js-e al-c">
            <template v-for="item in blok" :key="item._uid">
                <a class="m-xs text-none" v-if="item.link.linktype === 'story'"
                    :href="`/${item.link.cached_url}`"
                    :style="{'color': color}"
                    >
                    <p class="mix-blend" :style="{'color': color}">{{ item.title }}</p>
                </a>
                <a v-else class="m-xs text-none" :href="item.link.cached_url.includes('https') ? item.link.cached_url : `https://${item.link.cached_url}`" target="_blank"
                :style="{'color': color}">{{ item.title }}</a>
            </template>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps(['blok', 'color'])



</script>

<style lang="scss" scoped>
    .navigation {
        z-index: 10;
        height: 50px;
        background-color: inherit;

        a {
            font-size: $header-font-size;
            font-weight: $header-font-weight;
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