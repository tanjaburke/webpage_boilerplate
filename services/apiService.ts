import axios from 'axios';

class Config {
    config;
    storyblokApi;
    baseUrl;
    storiesUrl = 'cdn/stories';

    constructor() {
        this.config = useRuntimeConfig();  
        this.storyblokApi = useStoryblokApi()
        this.baseUrl  = this.config.public.API_BASE_URL
    }
}

export default class ApiService {
    public static getStories(params: object) {
        const config = new Config();
        const storyblokApi = config.storyblokApi;
        
        return storyblokApi.get(config.storiesUrl , {
            version: config.config.public.VERSION,
            resolve_relations: ['articleType.topMenu','articleType.tags','articleType.type'],
            ...params
          }).then((res) => {
            return (res.data)
          });
    }
}