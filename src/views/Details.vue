<template>
  <div>
    <h1>Details Page {{$route.params.id}}</h1>
    <h2>{{character.name}}</h2>
  </div>
</template>

<script>
import { mapActions,mapGetters,mapState } from "vuex";
import { FETCH_EPISODES_REQUEST} from '../store/action-types';

export default {
  name: "Details",
  data(){
    return{
      character:{}
    }
  },
  mounted(){
    this.character = this.getCharacter(this.$route.params.id);
    this.FETCH_EPISODES_REQUEST(this.listEpisodes(this.$route.params.id));
  },
  computed: {
    ...mapGetters("characters", ["listEpisodes","getCharacter"]),
    ...mapState("characters", ["episodes"])
  },
  methods:{
    ...mapActions("characters", [FETCH_EPISODES_REQUEST])
  }
};
</script>