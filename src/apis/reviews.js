import axios from 'axios';

const client = axios.create({
    baseURL: "https://staging1.bestcards.com",
    headers: {
        'Content-Type': 'application/json'
    }
});


export const getReviews = async () => {
  let response =  client.get("/wp-json/ccnm/v1/my_reviews");
  return response
}

export const getSuggestions = async(suggestion) => {
 let response = client.get(`/wp-json/ccnm/v1/auto_complete_title?title=${suggestion}`);
 return response
}

export const submitReview = async(review) => {
    const formData = new FormData();
    let data = review;
    formData.append('title', data.title);
    formData.append('post', data.post);
    formData.append('best_features', data.best_features);
    formData.append('dislike_features', data.best_features);
    formData.append('content', data.content);
    formData.append('rating', data.rating);
    formData.append('currently_using', data.currently_using);
    formData.append('card_recommendation', data.card_recommendation);
    formData.append('card_recommendation', data.card_recommendation);
    formData.append('card_benifits', data.card_benifits);
    formData.append('customer_service', data.customer_service);
    // let response = client({url, method, data})
    const res = await  axios.post('https://staging1.bestcards.com/wp-json/wp/v2/comments', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return res;
}