<template>
    <a v-if="link.linktype === 'story'" :href="link.cached_url" :class="classes">
        <slot></slot>
    </a>
    <a v-if="link.linktype === 'url'"  :href="link.url.includes('https') ? link.url : `https://${link.url}`" :class="classes">
        <slot></slot>
    </a>
</template>

<script>
export default {
    props: {
       link: {
            type: Object, 
            required: false
        },
        classes: {
            type: Array,
            required: false
        }
    }
}
</script>