<template>
    <v-app-bar-nav-icon class="d-lg-none">
        <font-awesome-icon icon="fa-solid fa-bars" class="fa-lg" />
    </v-app-bar-nav-icon>
</template>

<script>
// import { storeToRefs } from 'pinia'
// import { useSidebarStore } from '@/stores/useSidebarStore'
import useSidebarStore from '../stores/useSidebarStore'

export default {
    name: 'ToggleSidebarBtn',
    emits: ['error'],
    props: {},
    setup() {
        const sidebarStore = useSidebarStore()
        // const { minimized } = storeToRefs(sidebarStore)
        const { toggleMinimized } = sidebarStore

        function onClick() {
            toggleMinimized()
        }

        return {
            sidebarStore,
            onClick,
        }
    },
}
</script>
