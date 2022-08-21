import { FaSearch } from 'react-icons/fa';
import useCountries from '../../utilities/hooks/useCountries';

export default function SearchBar() {
  const { query, setQuery } = useCountries();

  return (
    <div>
      <div className="flex items-center gap-2 bg-white p-2">
        <div className="px-2">
          <FaSearch />
        </div>
        <input
          type="search"
          placeholder="Search for a country"
          className="w-80 px-2"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            console.log(query);
          }}
        />
      </div>
    </div>
  );
}
