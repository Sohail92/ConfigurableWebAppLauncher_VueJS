<template>
    <v-container fluid>
        <v-card class="itemCard" max-width="344" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">Weather Hub</v-list-item-title>
                    <v-list-item-subtitle>Up to date weather info from a variety of providers, in one place!</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="white">
                    <v-icon color="grey" x-large>wb_sunny</v-icon>
                </v-list-item-avatar>
            </v-list-item>
            <v-card-actions>
                <v-btn outlined color="blue" href="http://weatherhub.azurewebsites.net" target="_blank" text>Visit</v-btn>
            </v-card-actions>
        </v-card>
        <v-card class="itemCard" max-width="344" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">To Do List</v-list-item-title>
                    <v-list-item-subtitle>A handy app to use as a to-do list.</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar tile size="80" color="white">
                    <v-icon color="grey" x-large>view_list</v-icon>
                </v-list-item-avatar>
            </v-list-item>
            <v-card-actions>
                <v-btn outlined color="blue" href="http://todolistme.net/" target="_blank" text>Visit</v-btn>
            </v-card-actions>
        </v-card>
        <v-card class="itemCard" max-width="344" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">Speed Test</v-list-item-title>
                    <v-list-item-subtitle>Test your Internet connection with this interactive speed test tool.</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar tile size="80" color="white">
                    <v-icon color="grey" x-large>check_circle_outline</v-icon>
                </v-list-item-avatar>
            </v-list-item>
            <v-card-actions>
                <v-btn outlined color="blue" href="http://speedtest.net" target="_blank" text>Visit</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            //
        }),
    }
</script>

<style scoped>
    .headline{
        color:#2196F3;
    }
    .itemCard{
        margin:45px;
    }
</style>