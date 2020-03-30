import { API_RICK_URL } from './config';
import axios from 'axios';

export const getCharacters = () => {
  let url = `${API_RICK_URL}/character`;
  return axios.get(url);
}

export const getCharactersPage = (id) => {
  let url = `${API_RICK_URL}/character/?page=${id}`;
  return axios.get(url);
}

export const getEpisodes = (listEpisodes) => {
  let url = `${API_RICK_URL}/episode/${listEpisodes}`;
  return axios.get(url);
}