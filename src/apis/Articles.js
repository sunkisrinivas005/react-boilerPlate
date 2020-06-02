import axios from 'axios';

const client = axios.create({
    baseURL: window.ccnm_wp_api_url,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getLatestArticles = (next) => {
    client.get("posts?page=1&per_page=3").then(res => next(res.data));
}

export const getMedia = async (id, next) => {
    client.get("media/" + id).then(res => next(res.data.guid.rendered));
}