<template>
  <div>
    <v-container>
      <h1 class="display-1">List of characters</h1>
      <div class="text-center">
        <v-pagination v-model="page" :length="info.pages" total-visible="12"></v-pagination>
      </div>
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="4"
          md="4"
          lg="4"
          v-for="character of characters"
          :key="character.id"
        >
          <Card
            :id="character.id"
            :img="character.image"
            :name="character.name"
            :species="character.species"
            :status="character.status"
            :gender="character.gender"
          />
        </v-col>
      </v-row>
      <div class="text-center">
        <v-pagination v-model="page" :length="info.pages" total-visible="12"></v-pagination>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTER_PAGE_REQUEST
} from "../store/action-types";
import Card from "@/components/Card";

export default {
  name: "Characters",
  data() {
    return {
      page: this.$route.query.page? Number(this.$route.query.page) : 1
    };
  },
  components: {
    Card
  },
  mounted() {
    if(this.page>1){
      this.FETCH_CHARACTER_PAGE_REQUEST(this.page);
    }else{
      this.FETCH_CHARACTERS_REQUEST();
    }
  },
  computed: {
    ...mapState("characters", ["characters", "info"])
  },
  watch: {
    page: function() {
      this.FETCH_CHARACTER_PAGE_REQUEST(this.page);
      this.$router.push({ path: "characters", query: { page: this.page } });
    }
  },
  methods: {
    ...mapActions("characters", [
      FETCH_CHARACTERS_REQUEST,
      FETCH_CHARACTER_PAGE_REQUEST
    ])
  }
};
</script>