import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
    baseURL: `http://www.omdbapi.com/`,
  });
};
