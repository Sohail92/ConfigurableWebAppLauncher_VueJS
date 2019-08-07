<template>
    <!-- This is the bar at the top of the page with the drawer icon and title -->
    <v-app-bar app dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Web App Launcher</v-toolbar-title>
    </v-app-bar>



</template>

<script>
    export default {
        data() {

        },
        methods: {
            toggleNavigationBar() {
                const vm = this;

                vm.$emit('toggleNavigationBar');
            }
        }
    };
</script>

<style>
</style>