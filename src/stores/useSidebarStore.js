import { defineStore } from 'pinia'
import { ref } from 'vue'

const useSidebarStore = defineStore('sidebar', () => {
    const minimized = ref(false)

    function toggleMinimized() {
        minimized.value = !minimized.value
    }

    return {
        minimized,
        toggleMinimized,
    }
})

export default useSidebarStore
