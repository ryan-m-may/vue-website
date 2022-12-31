<template>
    <v-app :theme="theme">
        <!-- <v-navigation-drawer></v-navigation-drawer> -->
        <NavBar />
        <SidebarHover />

        <Body />
        <FooterBar />
    </v-app>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useThemeStore } from './stores/useThemeStore'
import NavBar from './components/NavBar.vue'
import SidebarHover from './components/SidebarHover.vue'
import Body from './components/Body.vue'
import FooterBar from './components/FooterBar.vue'

export default {
    name: 'App',
    components: {
        NavBar,
        SidebarHover,
        Body,
        FooterBar,
    },
    setup() {
        const themeStore = useThemeStore()
        const { theme } = storeToRefs(themeStore)

        return {
            theme,
        }
    },
}
</script>
