import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useContext, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { DarkmodeContext } from "../contexts/darkmodeContext";

export const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);
  const { darkMode, setDarkmode } = useContext(DarkmodeContext);
  const handleDarkAndSidebar = () => {
    setSideNav(!sideNav);
    setDarkmode(!darkMode);
  };
  return (
    <div
      className={`items-center flex justify-center shadow z-50 bg-[#ebebeb] md:shadow-none  fixed top-0 w-full h-fit dark:bg-[#5b04bc] ${
        darkMode && "dark"
      }`}
    >
      <div
        className={`  dark:text-white backdrop-blur-lg flex flex-row justify-between items-center py-3 md:w-[80%] w-full md:p-3  px-3  ${
          darkMode && "dark"
        }`}
      >
        <div>
          <h1 className="text-lg font-bold text-black dark:text-white">
            Stanlee <span className="text-[#6c54e3]">*</span>
          </h1>
        </div>
        <div className="flex flex-row gap-5 z-50">
          <ul
            className={`flex md:flex-row flex-col md:static absolute top-0 bg-[#6c54e3] dark:text-neutral-200  text-white md:bg-transparent md:text-black md:h-fit h-screen md:w-fit w-[60%] md:p-0 z-50 p-4 duration-150 transition-all gap-8 items-center ${
              sideNav ? "right-[0]" : "right-[-60%]"
            }`}
          >
            <FaXmark
              className="md:text-black text-white dark:text-white cursor-pointer md:hidden flex absolute right-4
          top-5"
              onClick={() => setSideNav(!sideNav)}
            />
            <li
              onClick={() => setSideNav(!sideNav)}
              className="Links flex flex-col text-sm md:mt-0 mt-12"
            >
              <Link to="/">Home</Link>
              <span className="Nav-span dark:bg-neutral-300"></span>
            </li>
            <li
              onClick={() => setSideNav(!sideNav)}
              className="Links flex flex-col text-sm "
            >
              <Link to="/about">About me</Link>
              <span className="Nav-span dark:bg-neutral-300"></span>
            </li>
            {/* <li
              onClick={() => setSideNav(!sideNav)}
              className="Links flex flex-col text-sm"
            >
              <Link to="/services">Services</Link>
              <span className="Nav-span dark:bg-neutral-300"></span>
            </li> */}
            <li
              onClick={() => setSideNav(!sideNav)}
              className="Links flex flex-col text-sm "
            >
              <Link to="/tech-stacks">Tech Stacks</Link>
              <span className="Nav-span dark:bg-neutral-300"></span>
            </li>
            <li
              onClick={() => setSideNav(!sideNav)}
              className="Links flex flex-col text-sm "
            >
              <Link to="/projects">Projects</Link>
              <span className="Nav-span dark:bg-neutral-300"></span>
            </li>
            <li
              onClick={handleDarkAndSidebar}
              className="Links flex items-center gap-3 bg-[#6c54e3] text-sm text-white px-2 py-2 cursor-pointer rounded-full hover:bg-[#8876e1] duration-150 transition-all"
            >
              <p className="flex md:hidden">
                {darkMode ? "Light mode" : "Dark mode"}
              </p>
              <MdDarkMode className="dark:text-neutral-200 text-sm text-black" />
            </li>
          </ul>

          <FaBars
            className="cursor-pointer md:hidden flex"
            onClick={() => setSideNav(!sideNav)}
          />
        </div>
      </div>
    </div>
  );
};
