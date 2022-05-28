import axios from 'axios';

const url = 'http://localhost:5000/games'

export const fetchGames = async () => await axios.get(url);
export const createGame = newGame => axios.post(url, newGame);