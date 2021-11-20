import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://backendfiap.herokuapp.com/',
});
