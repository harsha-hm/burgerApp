import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-burger-4bf40.firebaseio.com/'
});

export default instance;