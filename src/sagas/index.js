import {all} from 'redux-saga/effects';
import SavedCards from './SavedCards';
import SavedComparisions from './SavedComparisons';

export default function* rootSaga(getState) {
  yield all([
    SavedCards(),
    SavedComparisions()
  ]);
}
