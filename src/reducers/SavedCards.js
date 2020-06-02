import {
    UPDATE_SAVED_CARDS,
    SET_UPDATE_SAVED_CARDS_LOADING
} from '../constants/ActionTypes';

const INIT_STATE = {
    cards: [],
    loading: true
};

export default (state = INIT_STATE, action) => {

    switch (action.type) {

        case UPDATE_SAVED_CARDS:
            return {
                cards: action.payload,
                loading: false
            }
        
        case SET_UPDATE_SAVED_CARDS_LOADING: 
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
};