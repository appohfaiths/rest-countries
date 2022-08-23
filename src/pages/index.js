import { useState, useEffect } from 'react';
import useCountries from '../common/utilities/hooks/useCountries';
import Navbar from '../common/components/shared/Navbar';
import CountryDisplay from '../common/components/home/CountryDisplay';
import FilterBar from '../common/components/home/Filterbar';
import SearchBar from '../common/components/home/Searchbar';

export default function Home() {
  const { query, data, filteredData } = useCountries();
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setFilteredCountries(filteredData);
  }, [filteredData]);

  useEffect(() => {
    console.log(filteredData);
  }, [filteredCountries]);

  return (
    <div className="">
      <Navbar />

      <section className="container mx-auto mt-8 flex items-center justify-between">
        <SearchBar />
        <FilterBar />
      </section>

      <section className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {query.length > 0 &&
            filteredCountries.map((country, index) => (
              <CountryDisplay
                key={index}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flags.png}
              />
            ))}
          {query.length == 0 &&
            data.map((country, index) => (
              <CountryDisplay
                key={index}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flags.png}
              />
            ))}
        </div>
      </section>
    </div>
  );
}
