import { ref, onMounted, onUnmounted } from 'vue'

export function useWindowWidth() {
    const mobile = ref(process.client && window.innerWidth < 450 ? true : false);
    const ready = ref(false)

    onMounted(() => {
        mobile.value = process.client && window.innerWidth < 450 ? true : false
        ready.value = true
        window.addEventListener('resize', () => {
            updateMobile();
          });
    })

    function updateMobile() {
        mobile.value = process.client && window.innerWidth < 450 ? true : false
        ready.value = true

    }

    return {
        mobile, 
        ready
    }
}