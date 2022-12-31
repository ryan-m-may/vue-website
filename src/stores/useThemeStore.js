import { defineStore } from 'pinia'
import { ref } from 'vue'

const useThemeStore = defineStore('theme', () => {
    const themeIcons = {
        light: 'fa-solid fa-sun',
        dark: 'fa-solid fa-moon',
    }

    const theme = ref('light')
    const themeIcon = ref(themeIcons.light)

    function toggleTheme() {
        const currentTheme = theme.value

        // toggle theme
        theme.value = currentTheme === 'light' ? 'dark' : 'light'
        // toggle theme icon
        themeIcon.value = currentTheme === 'light' ? themeIcons.dark : themeIcons.light
    }

    return {
        theme,
        themeIcon,
        themeIcons,
        toggleTheme,
    }
})

export default useThemeStore
