import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-179ff.firebaseio.com/'
});

export default instance;