<template>
    <v-app>
        <v-content>
            <v-container>
                <v-layout>
                    <v-card>
                        <v-card-title>WeatherHub</v-card-title>
                        <v-card-text>Get weather information from a variety of providers</v-card-text>
                        <v-card-actions><v-btn text href="http://weatherhub.azurewebsites.net" target="_blank">Click</v-btn></v-card-actions>
                    </v-card>

                    <v-card>
                        <v-card-title>To Do List</v-card-title>
                        <v-card-text>A list of your jobs to do</v-card-text>
                        <v-card-actions><v-btn text href="http://todolistme.net/" target="_blank">Click</v-btn></v-card-actions>
                    </v-card>

                    <v-card>
                        <v-card-title>Speed Test</v-card-title>
                        <v-card-text>Test your network connection speed</v-card-text>
                        <v-card-actions><v-btn text href="http://speedtest.net" target="_blank">Click</v-btn></v-card-actions>
                    </v-card>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
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
</style>