<template>
    <section class="flex">
        <article class="menu-list flex-col">
            <transition-group name="slide-fade" tag="article" class=" menu-list flex-col">
                <button class="top-menu list-item" :style="`transition-delay: 0.${index*2}s`" v-for="(item, index) in selected.stories" :key="item.uuid" @click="findArticles(item.uuid)">
                    {{ item.name }}
                </button>
            </transition-group>
        </article>
        <article v-if="topMenuSelected">
            <transition-group name="slide-fade" tag="article" class=" menu-list flex-col">
                <button v-for="tag in tags" :key="tag.id">{{ tag.name }}</button>
                <List v-if="articles && articles.stories" :blok="articles.stories"></List>
            </transition-group>
        </article>
    </section>
</template>

<script >
import ApiService from './../services/apiService'
export default {
    data() {
        return {
            selected: Object,
            selectedId: '',
            articles: {},
            tags: [],
            topMenuSelected: false,
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData(){
            this.selected = await ApiService.getStories({starts_with: 'menus/'})
        },
        async findArticles(id){
            // await navigateTo('category/' + item.name + '-' + item.uuid);
            console.log("tjd",toRaw(id));
            this.selectedId = id;
            this.articles = await ApiService.getStories({
                starts_with: 'articles/', 
                filter_query: {
                    topMenu: {
                    in_array: id
                    },
                },
            });

            console.log(toRaw(this.articles));
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
            this.topMenuSelected = true;
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

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

// .slide-fade-leave-active {
//   transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
// }

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
</style>
