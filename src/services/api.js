import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const key = 'c8dadecd0c853cd41bb90a438ec87f6f';

export default api;
export {key};
