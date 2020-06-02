import axios from 'axios';

const client = axios.create({
    baseURL: window.ccnm_api_url,
    headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': window.ccnm_wp_nonce
    }
});

export const getSavedCards = async () => {
    let res = await client.get("savedcards");
    return res.data;
}

export const getSavedComparisons = async () => {
    let res = await client.get("savedcomparisons");
    return res.data;
}