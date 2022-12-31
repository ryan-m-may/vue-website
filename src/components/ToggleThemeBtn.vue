<template>
    <v-btn icon @click="onClick">
        <font-awesome-icon :icon="themeIcon" />
    </v-btn>
</template>

<script>
import { storeToRefs } from 'pinia'
import useThemeStore from '../stores/useThemeStore'

export default {
    name: 'ToggleThemeBtn',
    emits: ['error'],
    props: {},
    setup() {
        const store = useThemeStore()
        const { themeIcon } = storeToRefs(store)
        const { toggleTheme } = store

        function onClick() {
            toggleTheme()
        }

        return {
            store,
            toggleTheme,
            themeIcon,
            onClick,
        }
    },
}
</script>
