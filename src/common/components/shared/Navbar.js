import { FaRegMoon, FaSun } from 'react-icons/fa';
import useDarkMode from '../../utilities/hooks/useDarkMode';

export default function Navbar() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <nav className="flex justify-between px-20 py-3 bg-white shadow-md dark:bg-[#2B3743]">
      <div className="">
        <h3 className="font-bold">Where in the world?</h3>
      </div>
      <div
        className=" hover:cursor-pointer"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode === false && (
          <div className="flex gap-2 items-center">
            <FaRegMoon />
            <p>Dark Mode</p>
          </div>
        )}
        {darkMode === true && (
          <div className="flex gap-2 items-center">
            <FaSun />
            <p>Light Mode</p>
          </div>
        )}
      </div>
    </nav>
  );
}
