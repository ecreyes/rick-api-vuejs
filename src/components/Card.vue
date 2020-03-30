<template>
  <v-hover v-slot:default="{ hover }">
    <v-card dark max-width="300" color="indigo" :elevation="hover ? 16 : 2">
      <v-img class="white--text align-end" height="250px" :src="img">
        <v-card-title>{{name}}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">{{status}}</v-card-subtitle>

      <v-card-text class="white--text">
        <div>{{species}}</div>

        <div>{{gender}}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="white" text :to="{name:'Details',params:{id}}">Show</v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Card",
  props: ["id", "img", "name", "species", "status", "gender"]
};
</script>