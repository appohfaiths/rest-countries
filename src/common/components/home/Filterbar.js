import useCountries from '../../utilities/hooks/useCountries';

export default function FilterBar() {
  const { filterParam, setFilterParam } = useCountries();

  return (
    <div>
      <form action="">
        <select
          name="regionFilter"
          id=""
          className="bg-white p-2 block w-44 rounded-md leading-tight dark:text-black"
          onChange={(e) => setFilterParam(e.target.value)}
        >
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
}
