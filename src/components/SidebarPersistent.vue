<template>
    <v-navigation-drawer v-model="drawerOpen" app temporary></v-navigation-drawer>
</template>

<script>
export default {
    name: 'SidebarPersistent',
    setup() {
        const drawerOpen = true
        return {
            drawerOpen,
        }
    },
}
</script>
