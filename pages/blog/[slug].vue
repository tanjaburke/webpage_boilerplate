<template>
<button @click="gotr()">BLOG - SLUG</button>
</template>
<script lang="ts">
import ApiService from '../../services/apiService'

  export default {
    mounted(){
      console.log("HERE");
      
      this.fetchData()
 
    },
    methods: {
      async gotr(){
        await navigateTo('/')
      },
      async fetchData( ) {
        const articles = await ApiService.getStories({starts_with: 'articles/'});
      },

    }
  }
</script>