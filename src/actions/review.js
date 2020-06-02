import {getReviews, getSuggestions, submitReview} from '../apis/reviews';
export function GetReviews() {
    return async dispatch => {
        const headers = {
          'Content-Type': 'application/json'
        };
  
        const res = await getReviews();  
        const body = res && res.data ? res.data : [];        
        dispatch({
          type: 'GET_REVIEWS',
          body : body && body.length ? body : []
        });
        
        return res;
    };
  }

  export function CardSuggestions(data) {
    return async dispatch => {
        const headers = {
          'Content-Type': 'application/json'
        };
  
        const res = await getSuggestions(data);  
        const body = res && res.data ? res.data : [];

        dispatch({
          type: 'GET_AUTO_SUGGESTIONS',
          body : body && body.length ? body : []
        });
        
        return res;
    };
  }

  export function SubmitCreditCardReview(data) {
    return async dispatch => {
        const headers = {
          'Content-Type': 'application/json'
        };
  
        const res = await submitReview(data);  
        const body = res && res.data ? res.data : [];        
        dispatch({
          type: 'SUBMIT_REVIEW',
          body : body
        });
    };
  }

  export function SelectedSuggestion(data) {
    return async dispatch => {
        dispatch({
          type: 'SELECT_SUGGESTION',
          body : data
        });
        
    };
  }



