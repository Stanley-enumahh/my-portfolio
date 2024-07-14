import React from "react";
import { Navbar } from "../components/Navbar";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex relative md:justify-center justify-start flex-col items-center h-screen bg-[#ebebeb]">
      <Navbar />
      <div className=" flex md:flex-row flex-col mt-[0px] justify-start md:justify-between md:w-[80%] w-full">
        <div className="mt-[40px] md:mt-0 flex md:flex-row flex-col-reverse md:w-[75%] w-full justify-between md:items-center md:ml-0 ml-4 md:mb-20">
          <div className="flex md:flex-col flex-row gap-4 text-[#6c54e3] md:mt-0 mt-[30px]">
            <FaTwitter className="cursor-pointer" />
            <RiInstagramFill className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
          </div>
          <div className="w-[80%] gap-3 flex flex-col text-slate-700">
            <h1 className="font-bold text-black md:text-3xl text-2xl">
              Hi, I'm Stanlee
            </h1>
            <h2 className="font-semibold">frontend Developer</h2>
            <p className="text-sm md:text-lg">
              I'm passionate about developing user-friendly and responsive
              interfaces. With strong foundation in HTML, CSS, Javascript, React
              and other Frameworks. I create modern web applications that
              deliver seamless user experiences.Go on and explore my projects.
            </p>
            <button className=" mt-3 w-fit px-3 py-2 bg-[#6c54e3] text-white rounded-md">
              <Link
                className="flex flex-row gap-2 items-center"
                to="https://wa.me/qr/X3EWPKC7LIIUB1"
              >
                Contact me <FaWhatsapp />
              </Link>
            </button>
          </div>
        </div>

        <div className="bg-[#6c54e3] absolute md:w-[300px] w-[150px] md:h-[300px] h-[150px] rounded-full right-[-30px] bottom-[-60px] ">
          <div className="bg-[#6c5] md:w-[200px] w-[60px] md:h-[160px] h-[60px] rounded-full mt-[0px]"></div>
        </div>
      </div>
    </div>
  );
}
