import { ref, onMounted, onUnmounted } from 'vue'

export async function useGlobalVariables() {
    const headerMenu = ref(null)
    const headerLogo = ref(null)
    const headerTitle = ref(null)
    const contact = ref(null)

    const storyblokApi = useStoryblokApi()
    const { data } = await storyblokApi.get('cdn/stories/config', {
        version: 'draft',
        resolve_links: 'url',
    })
    headerMenu.value = data.story.content.navigation
    headerLogo.value = data.story.content.headerLogo
    headerTitle.value = data.story.content.headerTitle
    contact.value = data.story.content.contact



    return {
        contact,
        headerMenu,
        headerLogo,
        headerTitle,
    }
}
