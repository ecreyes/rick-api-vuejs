<template>
  <v-container>
    <v-card class="mx-auto" color="light-blue lighten-5"  tile>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="4">
          <v-img :src="character.image" max-height="600px" dark>
            <v-row>
              <v-card-title>
                <v-btn light icon class="mr-4">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn dark icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>

                <v-btn dark icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-card-title>

              <v-spacer></v-spacer>

              <v-card-title class="white--text pl-12 pt-12">
                <div class="display-1 pl-12 pt-12">{{character.name}}</div>
              </v-card-title>
            </v-row>
          </v-img>
        </v-col>

        <v-col cols="12" xs="12" sm="6" md="4">
          <v-list>
            <v-subheader>Personal information</v-subheader>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Name</v-list-item-title>
                <v-list-item-subtitle>{{character.name}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Gender</v-list-item-title>
                <v-list-item-subtitle>{{character.gender}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Species</v-list-item-title>
                <v-list-item-subtitle>{{character.species}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Status</v-list-item-title>
                <v-list-item-subtitle>{{character.status}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Location</v-list-item-title>
                <v-list-item-subtitle>{{location.name}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </v-list>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="4">
          <v-list >
            <v-subheader>Episodes</v-subheader>
            <v-list-item v-for="objEpisode of episodes" :key="objEpisode.id">
              <v-list-item-content>
                <v-list-item-title>
                  <p class="text-justify">{{objEpisode.episode}}</p>
                </v-list-item-title>
                <v-list-item-subtitle>{{objEpisode.name}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { FETCH_EPISODES_REQUEST } from "../store/action-types";

export default {
  name: "Details",
  data() {
    return {
      character: {},
      location: {}
    };
  },
  mounted() {
    this.character = this.getCharacter(this.$route.params.id);
    this.FETCH_EPISODES_REQUEST(this.listEpisodes(this.$route.params.id));
    this.location = this.getLocation(this.$route.params.id);
  },
  computed: {
    ...mapGetters("characters", [
      "listEpisodes",
      "getCharacter",
      "getLocation"
    ]),
    ...mapState("characters", ["episodes"])
  },
  methods: {
    ...mapActions("characters", [FETCH_EPISODES_REQUEST])
  }
};
</script>