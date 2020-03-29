import { getCharacters,getCharactersPage } from '../../../api/rickService';
import { FETCH_CHARACTERS_REQUEST, FETCH_CHARACTER_PAGE_REQUEST } from '../../action-types';
import {
    SET_CHARACTERS_REQUEST, SET_CHARACTERS_SUCCESS, SET_CHARACTERS_FAILED
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
    }
}