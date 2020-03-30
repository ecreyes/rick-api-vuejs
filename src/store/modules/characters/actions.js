import { getCharacters, getCharactersPage, getEpisodes } from '../../../api/rickService';
import { FETCH_CHARACTERS_REQUEST, FETCH_CHARACTER_PAGE_REQUEST, FETCH_EPISODES_REQUEST } from '../../action-types';
import {
    SET_CHARACTERS_REQUEST, SET_CHARACTERS_SUCCESS, SET_CHARACTERS_FAILED,
    SET_EPISODES_REQUEST, SET_EPISODES_FAILED, SET_EPISODES_SUCCESS
} from '../../mutations-types';

export default {
    [FETCH_CHARACTERS_REQUEST](context) {
        context.commit(SET_CHARACTERS_REQUEST, { isFetching: true });
        return getCharacters().then(res => {
            context.commit(SET_CHARACTERS_SUCCESS, { info: res.data.info, payload: res.data.results, isFetching: false, error: false });
        }).catch(() => {
            context.commit(SET_CHARACTERS_FAILED, { isFetching: false, error: true });
        });
    },
    [FETCH_CHARACTER_PAGE_REQUEST](context, id) {
        context.commit(SET_CHARACTERS_REQUEST, { isFetching: true });
        return getCharactersPage(id).then(res => {
            context.commit(SET_CHARACTERS_SUCCESS, { info: res.data.info, payload: res.data.results, isFetching: false, error: false });
        }).catch(() => {
            context.commit(SET_CHARACTERS_FAILED, { isFetching: false, error: true });
        });
    },
    [FETCH_EPISODES_REQUEST](context, listEpisodes) {
        context.commit(SET_EPISODES_REQUEST, { isFetching: true });
        return getEpisodes(listEpisodes).then(res => {
            context.commit(SET_EPISODES_SUCCESS, { payload: res.data, isFetching: false, error: false });
        }).catch(() => {
            context.commit(SET_EPISODES_FAILED, { isFetching: false, error: true });
        });
    }
}