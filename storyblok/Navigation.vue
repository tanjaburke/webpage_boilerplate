<template>
    <div class="navigation w-100 flex js-e al-c" >
        <ul class="w-100 flex js-e al-c">
            <NuxtLink class="m-xs text-none menu-item" 
                v-for="item in blok" :key="item._uid"
                :to="`/${item.item.cached_url}`">{{ item.itemTitle }}
            </NuxtLink>
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
    mounted(){
        console.log(toRaw(this.blok));
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

    .mmm {
        align-self: flex-start;
    }
</style>