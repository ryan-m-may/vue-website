<template>
    <v-app-bar app>
        <ToggleSidebarBtn />
        <v-app-bar-title>Guitar App</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="fa-lg" />
        </v-btn>
        <ToggleThemeBtn />
        <v-btn icon>
            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="fa-lg" />
        </v-btn>
    </v-app-bar>
</template>

<script>
import ToggleSidebarBtn from './ToggleSidebarBtn.vue'
import ToggleThemeBtn from './ToggleThemeBtn.vue'

export default {
    name: 'NavBar',
    components: {
        ToggleSidebarBtn,
        ToggleThemeBtn,
    },
}
</script>
