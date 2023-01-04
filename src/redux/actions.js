import axios from "axios";
import { GET_GAMES, GET_GENRES, GET_GAME_DETAIL, CLEAN_DETAIL, CREATE_GAME } from "./const";


export const getGames = (Game = "") => {
    return function (dispatch) {
        axios
            .get(`https://back-games-production-d5b5.up.railway.app/videogames?name=${Game}`)
            .then((response) => {
                return response.data;
            })
            .then((data) => dispatch({ type: GET_GAMES, payload:data }))
            .catch((error) => console.log(error));
    }
};

export const getGenres = () => {
    return async (dispatch) => {
        const videoGamesApi = await axios.get("https://back-games-production-d5b5.up.railway.app/genres");
        dispatch({type: GET_GENRES, payload: videoGamesApi.data});
    };
};

export const getGameDetail = (id) => {
    return  function (dispatch) {
        axios
        .get(`https://back-games-production-d5b5.up.railway.app/videogame/${id}`)
        .then((resp) => dispatch({type: GET_GAME_DETAIL, payload: resp.data}))
    }};

export const cleanDetail = () => {
    return {type: CLEAN_DETAIL};
};

export const createGame = (detail) => {
    return async (dispatch) => {
        const videoGamesApi = await axios.post('https://back-games-production-d5b5.up.railway.app/videogames', detail);
        dispatch({type: CREATE_GAME, payload: videoGamesApi.data});
    };
};