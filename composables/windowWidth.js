import { ref, onMounted, onUnmounted } from 'vue'

export function useWindowWidth() {
    const mobile = ref(process.client && window.innerWidth < 450 ? true : false);
    let width = process.client ? ref(window.innerWidth) : ref(null)


    onMounted(() => {
        window.addEventListener('resize', () => {
            updateMobile();
          });
    })

    function updateMobile() {
        mobile.value = process.client && window.innerWidth < 450 ? true : false
    }

    return {
        mobile,
        width
    }
}