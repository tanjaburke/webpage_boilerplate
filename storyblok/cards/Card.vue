<template>
    <a :class="`card ${bgColor}`" v-if="blok.link.linktype === 'url'"  :href="blok.link.url.includes('https') ? blok.link.url : `https://${blok.link.url}`">
        <div v-if="blok.image" :style="{ 'background-image': 'url(' + blok.image.filename + ')', 'height': height ? height : '80px',  'width': width ? width: '80px', }" class="image"/>
        <div class="card-text flex-col">
            <BlokTitle v-if="blok.title" :blok="blok" :class="[headerType, textColor]"/>
            <Description v-if="blok.description" :blok="blok" :class="[textColor, lineClamp]"/>
        </div>
    </a>
    <a :class="`card ${bgColor}`" v-else :href="blok.link.url">
        <div v-if="blok.image" :style="{ 'background-image': 'url(' + blok.image.filename + ')', 'height': height ? height : '80px',  'width': width ? width : '80px', }" class="image"/>
        <div class="card-text flex-col" >
            <BlokTitle v-if="blok.title" :blok="blok" :class="[headerType, textColor]"/>
            <Description v-if="blok.description" :blok="blok" :class="[textColor, lineClamp]"/>
        </div>
    </a>
</template>

<script lang="ts">
import BlokTitle from '../atoms/BlokTitle.vue';
import Description from '../atoms/Description.vue';
export default {
  components: { BlokTitle, Description },
        props: {
            blok: {
                type: Object,
                required: true
            },
            height: {
                type: String,
                required: false
            },
            width: {
                type: String,
                required: false
            },
            headerType: {
                type: String,
                required: false
            },
            bgColor: {
                 ype: String,
                required: false
            },
            textColor: {
                type: String,
                required: false
            },
            lineClamp: {
                type: String,
                required: false
            }
        }
    };
</script>

<style lang="scss">
.card:hover {
        background-color: #e9e9e9
}
.list {
    .card {
        display: flex;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        padding: $box-padding;
        margin: 0 $small-margin $small-margin $small-margin;
        border-radius: 5px;

        .image {
            background-repeat: no-repeat;
            background-position: center;
            margin-right: $small-margin;
            background-size: cover;

             @media only screen and (max-width: $phone-max) {
                 height: 80px !important;
                 width: 80px !important;
             }
        }

        .card-text {
            @media only screen and (max-width: $phone-max) {
                width: calc(100% - 80px) !important;
            }
        }


    }
}

.grid {
    .card {
        padding: $box-padding;
        display: flex;
        flex-direction: column;

        .image {
            background-repeat: no-repeat;
            background-position: center;
            margin-bottom: $small-margin;
            background-size: cover;
            border-radius: $button-rounded;


            //  @media only screen and (max-width: $phone-max) {
            //      height: 80px !important;
            //      width: 80px !important;
            //  }
        }

        .card-text {
            width: 100%; 

            @media only screen and (max-width: $phone-max) {
                width: calc(100% - 80px) !important;
            }
        }


    }
}
</style>