<template>
        <h3>TOPMENUBLOK</h3>
        <button class="top-menu" v-for="item in selected.stories" :key="item.uuid" @click="findArticles(item)">
            {{ item.name }}
        </button>
        <NuxtLink to="category/category-test" blok="hello">NUXT LINK</NuxtLink>
        <button class="sub-menu" v-for="tag in tags" :key="tag.uuid" @click="findTagArticles(tag.id)">
            {{ tag.name }}
        </button>
        <div class="flex" v-for="article in articles.stories" :key="article._uid">
            <p v-for="menu in article.content.topMenu" :key="menu._uid"> {{ menu.name }}</p>
            <Article :article="article"/>
        </div>
</template>

<script lang="ts">
import ApiService from './../services/apiService'
export default {
    data() {
        return {
            selected: Object,
            articles: Object,
            tags: [],
            selectedId: '',
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData(){
            this.selected = await ApiService.getStories({starts_with: 'menus/'})
        },
        async findArticles(item){
            await navigateTo('category/' + item.name + '-' + item.uuid);
            // this.selectedId = id;
            // this.articles = await ApiService.getStories({
            //     starts_with: 'articles/', 
            //     filter_query: {
            //         topMenu: {
            //         in_array: id
            //         },
            //     },
            // });

            // this.tags = [];

            // for (let i = 0; i < this.articles.stories.length; i++){
                
            //     this.articles.stories[i].content.tags.map(item => {
                    
            //         if (item && this.tags.filter(e => e.name === item.name).length === 0) {
            //            this.tags.push({ name : item.name, id: item.uuid })
            //         } else {
            //             this.tags = []
            //         }
            //     })
            // }
        },
        async findTagArticles(id){

            
            this.articles = await ApiService.getStories({
                starts_with: 'articles/', 
                filter_query: {
                     topMenu: {
                    in_array: this.selectedId
                    },
                    tags: {
                    in_array: id
                    },
                },
            });
            for (let i = 0; i < this.articles.stories.length; i++){
                this.articles.stories[i].content.tags.map(item => {
                    if (item && this.tags.filter(e => e.name === item.name).length === 0) {
                       this.tags.push({ name : item.name, id: item.uuid })
                    } 
                })
            }
        }
    }
}
</script>
