<template>
  <v-app>
    <v-content>
      <HomeLayout/>
    </v-content>
  </v-app>
</template>

<script>
import HomeLayout from './components/HomeLayout';

export default {
  name: 'App',
  components: {
    HomeLayout,
  },
  data: () => ({
    //
  }),
};
</script>
