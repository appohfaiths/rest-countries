import { useState, useEffect } from 'react';
import { countriesClient } from '../helpers/getCountries';

export default function useCountries() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [query, setQuery] = useState('');

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
    items.length > 0 &&
      items.filter((item) => {
        if (
          item.name.common
            .toString()
            .toLowerCase()
            .includes(query.toLowerCase())
        );
        // setData(item);
        // console.log(item);
        return item;
      });
  };

  useEffect(() => {
    searchCountries(data);
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
