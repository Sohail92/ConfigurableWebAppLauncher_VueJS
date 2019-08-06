<template>
 <v-app>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>  
  </v-navigation-drawer>

  <v-app-bar app color="teal" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Web App Launcher</v-toolbar-title>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-content>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <!-- If using vue-router -->
      <!--<router-view></router-view>-->

      <v-card max-width="350" class="mx-auto">
        <v-card-title>WeatherHub</v-card-title>
        <v-card-text>Get weather information from a variety of providers</v-card-text>
        <v-card-actions>
          <v-btn text href="http://weatherhub.azurewebsites.net" target="_blank">Click</v-btn>
        </v-card-actions>
      </v-card>
<br/>
      <v-card max-width="350" class="mx-auto">
        <v-card-title>To Do List</v-card-title>
        <v-card-text>A list of your jobs to do</v-card-text>
        <v-card-actions>
          <v-btn text href="http://todolistme.net/" target="_blank">Click</v-btn>
        </v-card-actions>
      </v-card>
<br>
      <v-card max-width="350" class="mx-auto">
        <v-card-title>Speed Test</v-card-title>
        <v-card-text>Test your network connection speed</v-card-text>
        <v-card-actions>
        <v-btn text href="http://speedtest.net" target="_blank">Click</v-btn>
      </v-card-actions>
    </v-card>

    </v-container>
  </v-content>

    <v-footer color="teal" app>
      <span class="white--text">Sohail Rahman - 2019&copy;</span>
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
        { title: 'Admin', icon: 'gavel' },
      ],
    }),
  }
</script>