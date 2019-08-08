<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app clipped>

            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/81.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Example User</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>

                <v-list-item v-for="item in items"
                             :key="item.title"
                             link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Web App Launcher</v-toolbar-title>
        </v-app-bar>

        <home-layout />

        <v-footer app>
            <span>Sohail Rahman - 2019&copy; </span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            items: [
                { title: 'Dashboard', icon: 'dashboard' },
                { title: 'Account', icon: 'account_box' },
                { title: 'Admin', icon: 'gavel' }
            ],
        }),
        created() {
            this.$vuetify.theme.dark = true
        },
    }
</script>

<style>
    html{
        overflow-y:hidden;
    }
</style>