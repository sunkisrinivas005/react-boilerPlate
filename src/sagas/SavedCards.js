import {
    all,
    fork,
    put,
    call,
    takeLatest
} from 'redux-saga/effects';

import { SAGA_FETCH_SAVED_CARDS } from '../constants/ActionTypes';
import { updateSavedCards, setFetchSavedCardsLoading } from '../actions/SavedCards';
import { getSavedCards } from '../apis/Membership';

function* fetchSavedCardsFromAPI() {
    put(setFetchSavedCardsLoading());
    const data = yield call(getSavedCards);
    yield put(updateSavedCards(data));
}

export function* fetchSavedCards() {
    yield takeLatest(SAGA_FETCH_SAVED_CARDS, fetchSavedCardsFromAPI);
}

export default function* rootSaga() {
    yield all([fork(fetchSavedCards)]);
}