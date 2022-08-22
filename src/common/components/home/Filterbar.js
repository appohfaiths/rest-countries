export default function FilterBar() {
  return (
    <div>
      <form action="">
        <select
          name="regionFilter"
          id=""
          className="bg-white p-2 block w-44 rounded-md leading-tight dark:text-black"
        >
          <option value="">Filter by Region</option>
          <option value="">Africa</option>
          <option value="">Americas</option>
          <option value="">Asia</option>
          <option value="">Europe</option>
          <option value="">Oceania</option>
        </select>
      </form>
    </div>
  );
}
