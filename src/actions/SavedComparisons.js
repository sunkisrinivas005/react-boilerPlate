import {
    UPDATE_SAVED_COMPARISONS,
    SAGA_FETCH_SAVED_COMPARISONS,
    SET_UPDATE_SAVED_COMPARISONS_LOADING
} from '../constants/ActionTypes';

export const updateSavedComparisons = (comparisions) => {
    return {
        type: UPDATE_SAVED_COMPARISONS,
        payload: comparisions
    };
};

export const fetchSavedComparisons = () => {
    return {
        type: SAGA_FETCH_SAVED_COMPARISONS
    };
}

export const setFetchSavedComparisonsLoading = () => {
    return {
        type: SET_UPDATE_SAVED_COMPARISONS_LOADING
    }
}