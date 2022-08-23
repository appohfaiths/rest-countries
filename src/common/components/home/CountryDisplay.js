import Image from 'next/image';

export default function CountryDisplay({
  name,
  population,
  region,
  capital,
  flag,
}) {
  return (
    <div className="bg-white w-64 h-72">
      <div>
        {flag && <Image src={flag} width="256px" height="140px" alt={name} />}
      </div>
      <div className="p-4 dark:text-black">
        <p className="font-bold py-3">{name}</p>
        <p>
          <span className="font-bold">Population:</span> {population}
        </p>
        <p>
          <span className="font-bold">Region:</span> {region}
        </p>
        <p>
          <span className="font-bold">Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
}
