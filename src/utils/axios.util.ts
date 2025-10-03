import axios from 'axios';

const axiosClient = axios.create(
{
  baseURL: import.meta.env.VITE_API_URL,
  headers:{
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',

  }
});

export default axiosClient;