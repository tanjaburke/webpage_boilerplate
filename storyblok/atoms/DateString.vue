<template>
    {{ new Date(date).toLocaleString("da-DK", {dateStyle: "long"})  }}
</template>

<script lang="ts">
export default {
    props: {
        date: {
            required: true, 
            type: String,
        }
    },
}
</script>