<template>
    <div class="card flex" :style="{'height': height ? height + 'px' : '80px' }">
        <template  v-for="blok in blok.content" :key="blok._uid" >
            <div v-if="blok && blok.component === 'image'" :style="{ 'background-image': 'url(' + blok.image.filename + ')', 'height': height ? height + 'px' : '80px',  'width': height ? height + 'px' : '80px', }" class="image"/>
        </template>
        <div class="flex-col">
            <template  v-for="blok in blok.content" :key="blok._uid" >
                <component v-if="blok && blok.component !== 'image'" :is="blok.component" :blok="blok"/>
            </template>
        </div>

    </div>
</template>

<script lang="ts">
    export default {
        props: {
            blok: {
                type: Object,
                required: true
            },
            height: {
                type: String,
                required: false
            }
        },
        mounted(){
            console.log("CARD", toRaw(this.blok));
            
        }
    };
</script>

<style lang="scss">
.list {
    .card {
        height: 80px;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        padding: $box-padding;
        margin: $box-margin;
        border-radius: 5px;

        .image {
            background-repeat: no-repeat;
            background-position: center;
        }
    }
}
</style>