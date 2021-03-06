import mutations from './mutations';
import getters from './getters';
import actions from './actions';

const state = {
    characters:[],
    isFetching:false,
    error:false,
    info:{},
    episodes:[]
}

export default{
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}