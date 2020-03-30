<template>
  <div>
    <v-toolbar class="hidden-lg-and-up" color="primary" dark>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
    </v-toolbar>
    <v-navigation-drawer dark color="info" v-model="drawer" app :width="220">
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="@/assets/logo.svg" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Vuetify</v-list-item-title>
            <v-list-item-subtitle>Rick and morty API</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.route">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      drawer: null,
      items: [
        {
          icon: "mdi-inbox",
          text: "Home",
          route: "/"
        },
        {
          icon: "mdi-star",
          text: "Characters",
          route: "/characters"
        }
      ],
      model: 1
    };
  }
};
</script>