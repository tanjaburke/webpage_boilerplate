<template>
    <h2>{{ $route.params.category }}</h2>
    <button v-for="tag in tags" :key="tag.id">{{ tag.name }}</button>
    <List v-if="articles && articles.stories" :blok="articles.stories"></List>
</template>

<script>
import ApiService from '../../services/apiService'; 

export default {
    data(){
        return {
            selected: Object,
            selectedId: String,
            articles: Object,
            tags: Array,
        }
    },
    mounted() {
        this.findArticles(this.$route.params.id);
    },
    methods: {
        async getData(){
            this.selected = await ApiService.getStories({starts_with: 'menus/'})
        },
        async findArticles(id){
            this.selectedId = id;
            this.articles = await ApiService.getStories({
                starts_with: 'articles/', 
                filter_query: {
                    topMenu: {
                    in_array: id
                    },
                },
            });

            this.tags = [];

            for (let i = 0; i < this.articles.stories.length; i++){
                
                this.articles.stories[i].content.tags.map(item => {
                    
                    if (item && this.tags.filter(e => e.name === item.name).length === 0) {
                       this.tags.push({ name : item.name, id: item.uuid })
                    } else {
                        this.tags = []
                    }
                })
            }
        },

    }
}
</script>