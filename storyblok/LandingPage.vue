<template>
    <section class="blok flex-col al-c js-c">
      LANDINGPAGE
        <button class="top-menu" v-for="menu in topMenus.stories" :key="menu.uuid" @click="findArticles(menu.uuid)">
            HERE {{ menu.name }}
        </button>
            <div class="flex" v-for="article in articles.stories" :key="article._uid">
                <p v-for="menu in article.content.topMenu" :key="menu._uid"> {{ menu.name }}</p>
                <Article :article="article"/>
            </div>
    </section>
</template>
<script lang="ts">
import ApiService from '../services/apiService'
import Article from './buildingBlocks/Article.vue'

  export default {
  components: { Article },
    data() {
        return {
            articles: Object,
            topMenus: Object
        }
    },
    mounted(){
      this.fetchData()
 
    },
    methods: {
        
      async fetchData( ) {
        this.topMenus = await ApiService.getStories({starts_with: 'menus/'});
      },

      async findArticles(id){
            this.articles = await ApiService.getStories({
                starts_with: 'articles/', 
                filter_query: {
                    topMenu: {
                    in_array: id
                    }
                },
            });
        }

    }
  }
</script>