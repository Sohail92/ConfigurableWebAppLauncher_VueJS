<template>
    <v-navigation-drawer v-model="toggle" fixed dark app>
        <v-list nav class="py-0">
            <v-list-item two-line>
                <v-list-item-avatar>
                    <img src="https://randomuser.me/api/portraits/men/81.jpg">
                </v-list-item-avatar>

                <v-list-item-content>
                    <router-link to="/foo">Login here</router-link>
                    <!--<v-list-item-title>App Launcher</v-list-item-title>-->
                    <v-list-item-subtitle>Guest mode</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

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
    }
</script>

<style>
    .toolbar {
        font-weight: bold;
        font-size: 18px;
    }

        .toolbar .text {
            padding-left: 10px;
            color: white;
            text-decoration: none;
        }

    .item-title {
        font-size: 17px;
        font-weight: 500;
    }

    .item-sub-title {
        font-size: 15px;
        font-weight: 500;
    }

    .active {
        font-weight: bold;
    }
</style>
