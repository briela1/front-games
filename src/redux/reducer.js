import { GET_GAMES, GET_GENRES, GET_GAME_DETAIL, CLEAN_DETAIL, CREATE_GAME } from "./const";

const initialState = {
    games: [],
    genres: [],
    gameDetail: {},
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_GAMES:
            return {
                ...state,
                games: action.payload,
            };
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload,
            };
        case GET_GAME_DETAIL:
            return {
                ...state,
                gameDetail: action.payload,
            };
        case CLEAN_DETAIL:
            return {
                ...state,
                gameDetail: {},
            };
        case CREATE_GAME:
            return {
                ...state,
                games: [...state.games, action.payload],
            };
        default:
            return {...state};
    }
};

export default rootReducer;