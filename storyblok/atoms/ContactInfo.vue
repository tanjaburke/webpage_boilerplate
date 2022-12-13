<template>
<h4>CONTACT </h4>
<p>{{ blok.name }}</p>
<p>{{ blok.street }} {{ blok.streetNumber }}</p>
<p>{{ blok.postalCode }} {{blok.city}}</p>
<p>{{ blok.country }}</p>
<p>{{ blok.mobile }}</p>
</template>

<script setup>
const props = defineProps(['blok'])

</script>