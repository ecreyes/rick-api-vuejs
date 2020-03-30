import {SET_CHARACTERS_REQUEST,SET_CHARACTERS_SUCCESS,SET_CHARACTERS_FAILED,
        SET_EPISODES_REQUEST, SET_EPISODES_SUCCESS,SET_EPISODES_FAILED} from '../../mutations-types';

export default{
    [SET_CHARACTERS_REQUEST](state,data){
        state.isFetching = data.isFetching;
    },
    [SET_CHARACTERS_SUCCESS](state,data){
        state.characters = data.payload;
        state.info = data.info;
        state.isFetching = data.isFetching;
        state.error = data.error;
    },
    [SET_CHARACTERS_FAILED](state,data){
        state.isFetching = data.isFetching;
        state.error = data.error;
    },
    [SET_EPISODES_REQUEST](state,data){
        state.isFetching = data.isFetching;
    },
    [SET_EPISODES_SUCCESS](state,data){
        state.episodes = data.payload;
        state.isFetching = data.isFetching;
        state.error = data.error;
    },
    [SET_EPISODES_FAILED](state,data){
        state.isFetching = data.isFetching;
        state.error = data.error;
    }
}