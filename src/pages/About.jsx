import { Navbar } from "../components/Navbar";
import ProfilePix from "../assets/IMG_1636-1_702906_CS-8325.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFileDownload } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-[#ebebeb] w-full h-screen flex flex-col  justify-start md:justify-center items-center overflow-hidden">
      <Navbar />
      {/* main div */}
      <div className=" flex flex-col md:h-[80%] h-[75%] w-[90%] mt-[30px] md:justify-center md:items-center gap-4 md:mt-0 ">
        <div className="md:text-center select-none">
          <h1 className="md:text-xl text-lg font-bold">About me</h1>
          <p className="text-sm text-slate-600">A little introduction</p>
        </div>
        <div className="md:w-[80%] md:h-[80%] w-full flex md:flex-row flex-col-reverse justify-between items-center">
          <div className=" flex w-full mb-6 md:h-full h-[80%] mt-6 justify-center  md:w-[30%] rounded-lg overflow-hidden shadow-md">
            <img
              src={ProfilePix}
              className="md:h-full h-[75%] w-full object-cover"
              alt="profilepix"
            />
          </div>
          <div className="flex flex-col gap-4 md:w-[40%] w-full items-start">
            <p className="w-[80%] text-start text-sm select-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              rerum omnis eaque aut ullam, quos earum officiis recusandae
              repellendus veniam.
            </p>
            <div className="select-none flex flex-row justify-between  items-start w-full">
              <div className="text-center text-xs flex flex-col w-[80px] p-2 shadow-md">
                <h1 className="font-bold text-sm text-[#6c54e3]">2+</h1>
                <p>years of experience</p>
              </div>
              <div className="text-center text-xs flex flex-col w-[80px] p-2 shadow-md">
                <h1 className="font-bold text-sm text-[#6c54e3]">20+</h1>
                <p>projects completed</p>
              </div>
              <div className="text-center text-xs flex flex-col w-[80px] p-2 shadow-md">
                <h1 className="font-bold text-sm text-[#6c54e3]">10+</h1>
                <p>Open source</p>
              </div>
            </div>
            <button className="flex flex-row gap-2 items-center mt-3 border w-fit px-3 py-2 bg-[#6c54e3] text-white rounded-md text-sm">
              Download CV <FaFileDownload />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
