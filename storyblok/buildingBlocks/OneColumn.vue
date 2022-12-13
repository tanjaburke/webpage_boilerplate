<template>
  <section :class="`blok container ${blok.backgroundColor}`">
        <template  v-for="blok in blok.content" :key="blok._uid" >
            <component v-if="blok" :is="blok.component" :blok="blok"/>
        </template>
  </section>
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
        console.log("in one ", toRaw(this.blok));
    }

};
</script>

<style lang="scss">
    .column {
        word-break: break-all;
        &:nth-child(1) {
            margin-right: 50px;
        }
    }

</style>