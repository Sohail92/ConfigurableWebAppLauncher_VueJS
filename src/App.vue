<template>
    <v-app>
        <v-content>
            <v-app id="inspire">
                <div class="app-container">
                    <toolbar @toggleNavigationBar="drawer = !drawer"  @click.stop="drawer = !drawer"/>
                    <navigation :toggle="drawer" />
                    <v-content>
                        <HomeLayout />
                        <page-footer />
                    </v-content>
                </div>
            </v-app>
        </v-content>
    </v-app>
</template>

<script>
    import HomeLayout from './components/HomeLayout';

    export default {
        name: 'App',
        components: {
            HomeLayout
        },
        data: () => ({
            //
        }),
    };
</script>
