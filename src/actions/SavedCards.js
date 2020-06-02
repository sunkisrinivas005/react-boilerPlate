import {
    UPDATE_SAVED_CARDS,
    SAGA_FETCH_SAVED_CARDS,
    SET_UPDATE_SAVED_CARDS_LOADING
} from '../constants/ActionTypes';

export const updateSavedCards = (cards) => {
    return {
        type: UPDATE_SAVED_CARDS,
        payload: cards
    };
};

export const fetchSavedCards = () => {
    return {
        type: SAGA_FETCH_SAVED_CARDS
    };
}

export const setFetchSavedCardsLoading = () => {
    return {
        type: SET_UPDATE_SAVED_CARDS_LOADING
    }
}