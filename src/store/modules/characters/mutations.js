import {SET_CHARACTERS_REQUEST,SET_CHARACTERS_SUCCESS,SET_CHARACTERS_FAILED} from '../../mutations-types';

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
    }
}