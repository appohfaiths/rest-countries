import { useState, useEffect } from 'react';
import { countriesClient } from '../helpers/getCountries';

export default function useCountries() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filterParam, setFilterParam] = useState(['All']);
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

  const searchCountries = (searchValue) => {
    setQuery(searchValue);
    if (query !== '') {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(query.toLowerCase());
      });
      setFilteredResults(filteredData);
      console.log(filteredResults);
    } else {
      setFilteredResults(data);
      console.log(filteredResults);
    }
  };

  return {
    data,
    setData,
    isLoaded,
    query,
    setQuery,
    searchCountries,
    filteredResults,
    setFilteredResults,
    filterParam,
    setFilterParam,
  };
}
