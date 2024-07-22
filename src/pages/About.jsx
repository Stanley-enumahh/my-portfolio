import { Navbar } from "../components/Navbar";
import ProfilePix from "../assets/IMG_1636-1_702906_CS-8325.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFileDownload } from "react-icons/fa";
import { DarkmodeContext } from "../contexts/darkmodeContext";
import { useContext } from "react";

export default function About() {
  const { darkMode } = useContext(DarkmodeContext);
  return (
    <div
      className={`bg-[#ebebeb] w-full h-screen flex flex-col  justify-start md:justify-center items-center overflow-hidden dark:bg-[#5b04bc]  ${
        darkMode && "dark"
      }`}
    >
      <Navbar />
      {/* main div */}
      <div className="mt-[80px] flex flex-col md:h-[80%] h-[75%] w-[90%] md:justify-center md:items-center gap-4 md:mt-0 ">
        <div className="md:text-center select-none">
          <h1 className="md:text-xl text-lg font-bold dark:text-neutral-200">
            About me
          </h1>
          <p className="text-sm text-slate-600 dark:text-neutral-300">
            A little introduction
          </p>
        </div>
        <div className="relative md:w-[80%] md:h-[80%] w-full flex md:flex-row flex-col-reverse justify-between items-center">
          <div className="hidden md:flex absolute w-[300px] h-[380px] border-2 border-black left-[20px] top-[30px] shadow-lg dark:border-neutral-200"></div>
          <div className="abt-image-conatainer flex w-full mb-6 md:h-full h-[80%] mt-6 justify-center   md:w-[30%] rounded-lg overflow-hidden md:shadow-md">
            <img
              src={ProfilePix}
              className="md:h-full h-[70%] w-[90%] object-cover z-10 mt-6 shadow-lg md:shadow-none"
              alt="profilepix"
            />
          </div>
          <div className="flex flex-col gap-4 md:w-[40%] w-full items-start">
            <p className="w-[80%] text-start text-sm select-none dark:text-neutral-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              rerum omnis eaque aut ullam, quos earum officiis recusandae
              repellendus veniam.
            </p>
            <div className="select-none flex flex-row justify-between  items-start w-full">
              <div className=" rounded-md text-center text-xs flex flex-col w-[80px] p-2 shadow-lg">
                <h1 className="font-bold text-sm text-[#6c54e3] dark:text-neutral-200">
                  2+
                </h1>
                <p className="dark:text-neutral-200 text-black">
                  years of experience
                </p>
              </div>
              <div className="rounded-md text-center text-xs flex flex-col w-[80px] p-2 shadow-lg">
                <h1 className="font-bold text-sm text-[#6c54e3] dark:text-neutral-200">
                  20+
                </h1>
                <p className="dark:text-neutral-200 text-black ">
                  projects completed
                </p>
              </div>
              <div className="rounded-md text-center text-xs flex flex-col w-[80px] p-2 shadow-md">
                <h1 className="font-bold text-sm text-[#6c54e3] dark:text-neutral-200">
                  10+
                </h1>
                <p className="dark:text-neutral-200 text-black">Open source</p>
              </div>
            </div>
            <button className="hover:bg-[#8876e1] duration-150 transition-all flex flex-row gap-2 outline-none items-center mt-3  w-fit px-3 py-2 bg-[#6c54e3] text-white rounded-md text-sm">
              Download CV <FaFileDownload />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
