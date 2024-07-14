import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

export const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className="relative flex flex-row justify-between items-center md:fixed top-0 md:py-3 py-2 md:w-[80%] w-full md:p-0  px-3 md:shadow-none shadow">
      <div>
        <h1 className="text-lg font-bold">
          Stanlee <span className="text-[#6c54e3]">*</span>
        </h1>
      </div>
      <div className="flex flex-row gap-5 z-50">
        <ul
          className={`flex md:flex-row flex-col md:static absolute top-[44px] bg-[#6c54e3] text-white md:bg-transparent md:text-black md:h-fit h-[550px] md:w-fit w-[60%] md:p-0 z-50 p-4 duration-150 transition-all gap-6 items-center ${
            sideNav ? "right-[0]" : "right-[-60%]"
          }`}
        >
          <li
            onClick={() => setSideNav(!sideNav)}
            className="Links flex flex-col text-sm "
          >
            <Link to="/">Home</Link>
            <span className="Nav-span"></span>
          </li>
          <li
            onClick={() => setSideNav(!sideNav)}
            className="Links flex flex-col text-sm "
          >
            <Link to="/about">About me</Link>
            <span className="Nav-span"></span>
          </li>
          <li
            onClick={() => setSideNav(!sideNav)}
            className="Links flex flex-col text-sm"
          >
            <Link to="/">Services</Link>
            <span className="Nav-span"></span>
          </li>
          <li
            onClick={() => setSideNav(!sideNav)}
            className="Links flex flex-col text-sm "
          >
            <Link to="/projects">Projects</Link>
            <span className="Nav-span"></span>
          </li>
        </ul>

        <FaBars
          className="cursor-pointer md:hidden flex"
          onClick={() => setSideNav(!sideNav)}
        />
      </div>
    </div>
  );
};
