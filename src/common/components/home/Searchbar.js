import { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import useCountries from '../../utilities/hooks/useCountries';

export default function SearchBar() {
  const { data, query, setQuery, searchCountries } = useCountries();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query === '') {
      alert('enter a country');
    } else {
      // searchCountries(data);
      setQuery('');
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 bg-white p-2">
        <div className="px-2">
          <FaSearch />
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="search"
            placeholder="Search for a country"
            className="w-80 px-2 dark:text-black"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              console.log(query);
            }}
          />
        </form>
      </div>
    </div>
  );
}
