<template>
    <transition  v-if="blok.animation" name="appear" appear>
        <section :class="`list ${blok.backgroundColor}`" style="transition-delay: 0.9s">
            <template v-for="(item, index) in blok.content" :key="item._uid">
                <transition-group appear name="slide-fade" class="menu-list flex-col" v-if="blok.animation">
                    <component v-if="item" :is="item.component" :blok="item" :height="blok.imageHeight" :width="blok.imageWidth" :bgColor="blok.cardBackgroundColor" :textColor="blok.textColor" :headerType="blok.headerType" :lineClamp="blok.lineClamp" parent="list" :index="index"/>
                </transition-group>
            </template>
        </section>
    </transition>
    <section v-else>
        <div class="inner flex-col al-c js-c"> 
            <template  v-for="item in blok.content" :key="item._uid">
                <component v-if="item" :is="item.component" :blok="item" :height="blok.imageHeight" :width="blok.imageWidth" :bgColor="blok.cardBackgroundColor" :textColor="blok.textColor" :headerType="blok.headerType" :lineClamp="blok.lineClamp" parent="list"/>
            </template>
        </div>
    </section>
</template>

<script lang="ts">
    export default {
        props: {
            blok: {
                type: Object,
                required: true
            }
        },
        mounted(){
            console.log("list", toRaw(this.blok));
            
        }
    };
</script>

<style lang="scss">
.appear-enter-active,
.appear-leave-active {
  transition: opacity 0.7s ease-in;
}

.appear-enter-from,
.appear-leave-to {
  opacity: 0;
}

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
</style>


