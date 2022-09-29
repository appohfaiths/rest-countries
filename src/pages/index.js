import { useState, useEffect } from 'react';
import { useCountries } from '../common/contexts/CountriesContext';
import Navbar from '../common/components/shared/Navbar';
import CountryDisplay from '../common/components/home/CountryDisplay';
import FilterBar from '../common/components/home/Filterbar';
import SearchBar from '../common/components/home/Searchbar';

export default function Home() {
  const { query, data, filteredResults } = useCountries();

  useEffect(() => {
    console.log(filteredResults);
  }, [filteredResults]);

  return (
    <div className="">
      <Navbar />

      <section className="container mx-auto mt-8 flex flex-col gap-4 md:flex-row items-center justify-between">
        <SearchBar />
        <FilterBar />
      </section>

      <section className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 justify-items-center">
          {query.length > 1
            ? filteredResults.map((country, index) => (
                <CountryDisplay
                  key={index}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  flag={country.flags.png}
                />
              ))
            : data.map((country, index) => (
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
