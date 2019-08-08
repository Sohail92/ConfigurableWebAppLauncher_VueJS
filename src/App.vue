<template>
    <v-app>
        <v-content>
            <v-app id="inspire">
                <div class="app-container">
                    <v-content>
                        <dark-layout />
                    </v-content>
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
