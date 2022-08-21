import axios from 'axios';

export const countriesClient = () =>
  axios.create({
    baseURL: 'https://restcountries.com/v3.1/all',
  });
  