<template>
    <v-app>
        <v-content>
            <v-app id="inspire">
                <div class="app-container">
                        <dark-layout />
                </div>
            </v-app>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        components: {

        },
        data: () => ({
            drawer: true
        }),
    };
</script>
