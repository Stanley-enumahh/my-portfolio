import { Navbar } from "../components/Navbar";
import ProjectDetails from "../components/projectDetails";
import { ProjectData } from "../components/projectsData";
import React from "react";
import Slider from "react-slick";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full h-screen flex flex-col md:items-center items-start bg-[#ebebeb] overflow-hidden">
      <Navbar />
      <div className="md:h-[75%] h-full w-[80%] flex flex-col items-center mt-[40px] md:gap-10 gap-5 ml-5">
        <div className="text-center md:mt-11 mt-0 flex flex-col md:items-center items-start w-full">
          <h1 className="font-bold md:text-xl text-lg">Projects</h1>
          <p className="md:text-sm text-xs text-slate-600">
            View my most recent projects
          </p>
        </div>
        <div className="md:w-[90%] w-full h-full ml-5">
          <Slider {...settings}>
            {ProjectData.map((project, index) => {
              return <ProjectDetails data={project} key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
