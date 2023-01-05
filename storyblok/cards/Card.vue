<template>
    <article :class="['card', bgColor]">
        <template v-if="blok.image.filename">
            <div  :style="{ 'background-image': 'url(' + blok.image.filename + ')', 'height': height ? height : '80px',  'width': width ? width: '80px', }" class="image"/>
            <div class="card-text flex-col js-space" :style="{'width': parent === 'list' ? `calc(95% - ${width})` : '100%'}" >
                <DateString v-if="blok.date" :date="blok.date" class="thin-date"></DateString>
                <div>
                    <BlokTitle v-if="blok.title" :blok="blok" :class="[headerType, textColor]"/>
                    <Description v-if="blok.description" :blok="blok" :class="[textColor, lineClamp]"/>
                </div>
            </div>
        </template>
        <template v-else>
             <div class="card-text flex-col js-space w-100" >
            <DateString v-if="blok.date" :date="blok.date" class="thin-date"></DateString>
            <div>
                <BlokTitle v-if="blok.title" :blok="blok" :class="[headerType, textColor]"/>
                <Description v-if="blok.description" :blok="blok" :class="[textColor, lineClamp]"/>
            </div>
        </div>
        </template>

    </article>    
   
</template>

  <script>
import BlokTitle from '../atoms/BlokTitle.vue';
import Description from '../atoms/Description.vue';
import DateString from '../atoms/DateString.vue';
import LinkWrapper from '../atoms/LinkWrapper.vue'
export default {
  components: { BlokTitle, Description, DateString, LinkWrapper },
        props: {
            blok: {
                type: Object,
                required: true
            },
            parent: {
                type: String,
                required: false
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
            },
            index: {
                type: Number,
                required: false
            }
        }
    };
</script>

<style lang="scss">
// .card:hover {
//         background-color: #e9e9e9
// }

.card {
    .thin-date {
        margin-bottom: $small-margin;
    }
}

.list {
    .inner {
        align-items: flex-start;
    }

    .card {
        display: flex;
        width: 95%;
        // min-width: 400px;
        max-width: 900px;
        // box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        // padding: $box-padding;
        border-radius: 5px;
        margin-bottom: $blok-padding;

        &:first-child {
            margin-top: $small-margin;
        }

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

        // .card-text {
        //     @media only screen and (max-width: $phone-max) {
        //         width: calc(100% - 80px) !important;
        //     }
        // }

    }
}

.grid {
    padding-top: $pad-inner;

    @media only screen and (max-width: $phone-max) {
        padding-top: $pad-inner-mobile;
    }

    .card {
        padding: $box-padding;
        display: flex;
        flex-direction: column;

        .image {
            background-repeat: no-repeat;
            background-position: center;
            margin-bottom: $tiny-margin;
            background-size: cover;
            border-radius: $button-rounded;
        }

        .card-text {
            width: 100%; 
        }



    }
}
</style>