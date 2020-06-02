import {
    GET_REVIEWS,
    GET_AUTO_SUGGESTIONS,
    SUBMIT_REVIEW,
    SELECT_SUGGESTION
} from '../constants/ActionTypes';

const INIT_STATE = {
    reviews: [],
    loading: true,
    suggestions:[],
    submitReview:{},
    selectedSuggestion : {}
};

export default (state = INIT_STATE, action) => {

    switch (action.type) {
        case GET_REVIEWS:
            return {
                reviews: action.body,
                loading :false
            }
        case GET_AUTO_SUGGESTIONS:
          return {
              ...state,
           suggestions:action.body
          }
          case SUBMIT_REVIEW:
              return{
                  ...state,
                submitReview:action.body
              }
         case SELECT_SUGGESTION:
             return{
                 ...state,
                 selectedSuggestion: action.body
             }
        default:
            return state;
    }
};