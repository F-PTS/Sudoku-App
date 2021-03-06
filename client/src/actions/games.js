import * as api from '../api';


// I'm first learning about redux and I'm laughing my a** off lol
export const getGames = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGames();

        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (err) {
        console.log(err.message)
    }
}

export const createGame = game => async (dispatch) => {
    try {
        const { data } = await api.createGame(game);

        dispatch({type: 'CREATE', payload: data})
    } catch(err) {
        console.log(err);
    }
}