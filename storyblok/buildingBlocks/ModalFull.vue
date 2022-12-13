<template>
     <transition appear name="my-slide">
        <section class="menu-modal" >
            <button @click="closeMenu" class="menu-close">X</button>
            <ul>
                <template v-for="item in blok" :key="item._uid">
                    <a class="m-xs text-none" v-if="item.link.linktype === 'story'"
                        :href="`/${item.link.cached_url}`"><p class="mix-blend">{{ item.title }}</p>
                    </a>
                    <a v-else class="m-xs text-none" :href="item.link.cached_url.includes('https') ? item.link.cached_url : `https://${item.link.cached_url}`" target="_blank">{{ item.title }}</a>
                </template>
            </ul>
        </section>
    </transition>
</template>

<script setup>
const props = defineProps(['blok'])
const emit = defineEmits(['closeMenu'])

function closeMenu() {
    emit('closeMenu')
}

onMounted(() => {
   console.log("I am here");
})
</script>


<style lang="scss">
.menu-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

    .menu-close {
        position: absolute;
        top: 30px;
        right: 30px;
    }
}

.my-slide-enter-active {
  transition: all 0.3s ease-out;
}

.my-slide-leave-active {
  transition: all 5s cubic-bezier(1, 0.5, 0.8, 1);
}

.my-slide-enter-from,
.my-slide-leave-to {
  transform: translateY(-100%);
}

.my-slide-enter-to {
    transform: translate(0%);
}

</style>
