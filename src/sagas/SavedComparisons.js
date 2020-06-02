import {
    all,
    fork,
    put,
    call,
    takeLatest
} from 'redux-saga/effects';

import { SAGA_FETCH_SAVED_COMPARISONS } from '../constants/ActionTypes';
import { updateSavedComparisons, setFetchSavedComparisonsLoading } from '../actions/SavedComparisons';
import { getSavedComparisons } from '../apis/Membership';

function* fetchSavedComparisonsFromAPI() {
    put(setFetchSavedComparisonsLoading());
    const data = yield call(getSavedComparisons);
    yield put(updateSavedComparisons(data));
}

export function* fetchSavedCards() {
    yield takeLatest(SAGA_FETCH_SAVED_COMPARISONS, fetchSavedComparisonsFromAPI);
}

export default function* rootSaga() {
    yield all([fork(fetchSavedCards)]);
}