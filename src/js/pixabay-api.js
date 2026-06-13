import axios from 'axios';


const BASE_URL = 'https://pixabay.com/api/';
const key = '56295692-388ed2392ca37d8a60cb7a75d'

export function getImagesByQuery(query){
    return axios.get(BASE_URL, {
        params: {
            key: key,
            q: query,
            image_type: `photo`,
            orientation: `horizontal`,
            safesearch: true,
        }
    }).then(response => response.data);
    }

