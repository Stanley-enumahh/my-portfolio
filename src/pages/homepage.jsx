import { Navbar } from "../components/Navbar";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { DarkmodeContext } from "../contexts/darkmodeContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function HomePage() {
  const { darkMode } = useContext(DarkmodeContext);
  return (
    <div
      className={`flex relative md:justify-center justify-start flex-col items-center h-screen bg-[#ebebeb] dark:bg-[#0f172a]  ${
        darkMode && "dark"
      }`}
    >
      <Navbar />
      <div className="flex md:flex-row flex-col mt-[0px] justify-start md:justify-between md:w-[80%] w-full">
        <div className="mt-[80px] md:mt-0 flex md:flex-row flex-col-reverse md:w-[75%] w-full justify-between md:items-center md:ml-0 ml-4 md:mb-20">
          <div className="flex md:flex-col flex-row gap-4 text-[#6c54e3] md:mt-0 mt-[30px]">
            <a href="https://twitter.com/StanLee53959205">
              <FaTwitter className="cursor-pointer dark:text-neutral-200 hover:-translate-y-1 duration-150 transition-all" />
            </a>

            <RiInstagramFill className="cursor-pointer dark:text-neutral-200 hover:-translate-y-1 duration-150 transition-all" />
            <FaLinkedin className="cursor-pointer dark:text-neutral-200 hover:-translate-y-1 duration-150 transition-all" />
            <a href="https://github.com/Stanley-enumahh">
              <FaGithub className="cursor-pointer dark:text-neutral-200 hover:-translate-y-1 duration-150 transition-all" />
            </a>
          </div>
          <div className="w-[80%] gap-3 flex flex-col dark:text-neutral-200 text-slate-700">
            <h1 className="font-bold dark:text-neutral-200  text-black md:text-3xl text-2xl">
              Hi, I'm Stanlee
            </h1>
            <h2 className="font-semibold">frontend Developer</h2>
            <p className="text-sm md:text-lg mt-3">
              I'm passionate about developing user-friendly and responsive
              interfaces. With strong foundation in HTML, CSS, Javascript, React
              and other Frameworks, connecting with like-minded friends and
              creating amazing things. I create modern web applications that
              deliver seamless user experiences.Go on and explore my projects.
            </p>
            <button className=" md:mt-8 mt-12 dark:bg-[#5b04bc]  w-fit px-3 py-2 bg-[#6c54e3] text-white rounded-md shadow-md hover:bg-[#8876e1] duration-150 transition-all">
              <Link
                className="flex flex-row gap-2 items-center"
                to="https://wa.me/qr/X3EWPKC7LIIUB1"
              >
                Contact me <FaWhatsapp />
              </Link>
            </button>
          </div>
        </div>

        <div className="bg-[#6c54e3] dark:bg-[#5b04bc] absolute md:w-[300px] w-[150px] md:h-[300px] h-[150px] rounded-full right-[-30px] bottom-[-60px] ">
          <div className="bg-[#6c5] md:w-[180px] w-[60px] md:h-[160px] h-[60px] rounded-full mt-[0px]"></div>
        </div>
      </div>
    </div>
  );
}
