import { ref, onMounted, onUnmounted } from 'vue'

export function useWindowWidth() {
    const mobile = ref(false);
    // const windowWidth = process.client ? ref(window.innerWidth) : ref(0)

    onMounted(() => {
        console.log("1");
        
        // mobile.value = windowWidth && windowWidth.value > 450 ? false : true
       
       console.log("2");
       
        window.addEventListener('resize', () => {
            updateMobile();
          });
    })

    function updateMobile() {
        mobile.value = process.client && window.innerWidth < 450 ? true : false
    }

    return {
        mobile,
    }
}