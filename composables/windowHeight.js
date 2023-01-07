import { ref, onMounted } from 'vue'

export function useWindowHeight() {
    const windowHeight = ref(process.client ? window.innerHeight : '')
    const heightIsReady = ref(false)

    onMounted(() => {
        windowHeight.value = ref(process.client ? window.innerHeight : '')
        heightIsReady.value = true
        window.addEventListener('resize', () => {
            heightIsReady.value = false;
            updateHeight();
          });
    })

    function updateHeight() {
        windowHeight.value = ref(process.client ? window.innerHeight : '')
        heightIsReady.value = true

    }

    return {
        heightIsReady, 
        windowHeight
    }
}