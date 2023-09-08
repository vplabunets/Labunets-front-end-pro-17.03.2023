import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export async function apiJsonPLaceholder() {
    return await axios.get('posts/')


}