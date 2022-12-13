<template>
   <p>{{ new Date(date).toLocaleString("da-DK", {dateStyle: "long"}) }}</p>
</template>

  <script>
export default {
    props: {
        date: {
            required: true, 
            type: String,
        }
    },
}
</script>