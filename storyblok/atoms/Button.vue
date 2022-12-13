<template>
    <button :class="`button ${blok.backgroundColor} ${blok.textColor} ${blok.borderColor}`"> {{blok.title}} </button>
</template>

  <script>
export default {
    props: {
        blok: {
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
.button {
    width: 200px;
    border-radius: $button-rounded;
    height: 40px;
    border: none;
    cursor: pointer;
    margin-top: $button-margin;

    @media only screen and (max-width: $phone-max) {
        margin-top: $button-margin-mobile;
    }
}
</style>