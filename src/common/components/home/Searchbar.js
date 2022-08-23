import { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import useCountries from '../../utilities/hooks/useCountries';

export default function SearchBar() {
  const { query, setQuery, searchCountries } = useCountries();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCountries(query);
    console.log(query);
  };

  return (
    <div>
      <div className="flex items-center gap-2 bg-white p-2">
        <div className="px-2 dark:text-black">
          <FaSearch />
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="search"
            placeholder="Search for a country"
            className="w-80 px-2 dark:text-black"
            value={query}
            onChange={(e) => {
              searchCountries(e.target.value);
              setQuery(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
}
