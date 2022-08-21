import { useState, useEffect } from 'react';
import { countriesClient } from '../helpers/getCountries';
import axios from 'axios';

export default function useCountries() {
  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [query, setQuery] = useState('');
  const [searchParam] = useState(['name']);

  const fetchCountries = () => {
    countriesClient()
      .get()
      .then((Response) => {
        setData(Response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
        if (error) {
          setIsLoaded(false);
        }
      });
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const searchCountries = (items) => {
    return items?.filter((item) => {
      return searchParam.some((newItem) => {
        console.log(item);
        return (
          item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
        );
      });
    });
  };

  useEffect(() => {
    searchCountries(Array.from(data));
  }, [query]);

  return {
    fetchCountries,
    data,
    setData,
    isLoaded,
    query,
    setQuery,
    searchCountries,
  };
}
