<template>
  <div
    v-editable="blok"
    class="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center"
  >
    <h3 class="text-2xl text-[#1d243d] font-bold">
      Er d{{ blok }}
    </h3>
    new
    {{blok.content}}
  </div>
</template>
 
<script lang="ts">

export default {
    props: {
        blok: {
        type: Object,
        required: true
        }
    },


}

</script>