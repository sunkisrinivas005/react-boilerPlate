import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import SavedCards from './SavedCards';
import Reviews from './review';

export default (history) => combineReducers({
  router: connectRouter(history),
  savedCards: SavedCards,
  Reviews :Reviews
});
