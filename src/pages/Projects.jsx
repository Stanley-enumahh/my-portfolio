import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Project1 from "../assets/project1.jpg";
import Project2 from "../assets/suitplus-image1.jpg";
import Project3 from "../assets/mortgage-cal.jpg";

const ProjectData = [
  {
    image: Project2,
    title: "SUIT-PLUS",
    description:
      " This an open source internship project, focused on building a web-app that pprovides different kinds of suits for men and addresses several market needs and problems.",
  },
  {
    image: Project1,
    title: "Stanlee's Mart",
    description:
      "This is a web-based shopping cart application that allows users to browse and add products to their cart. it features a user-friendly interface and other modern website features",
    url: "https://stanlee-mart.vercel.app/",
  },

  {
    image: Project3,
    title: "mortgage calculator",
    description:
      "This is a modern calculator that checks the mortgage based on the inputs provided by the user and displays the monthly and total payment.",
    url: "https://stanlee-mortgage-calculator.vercel.app/",
  },
];

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
      <div className="md:h-[75%] mt-[80px] h-full w-[80%] flex flex-col items-center md:gap-10 gap-5 ml-5">
        <div className="text-center md:mt-11 mt-0 flex flex-col md:items-center items-start w-full">
          <h1 className="font-bold md:text-2xl text-lg">Projects</h1>
          <p className="md:text-sm text-xs text-slate-600">
            View my most recent projects
          </p>
        </div>
        <div className="md:w-[90%] w-full h-full ml-5 md:ml-0">
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

const ProjectDetails = (props) => {
  const { image, title, description, url } = props.data;
  return (
    <div className="flex md:flex-row flex-col md:h-[300px] h-fit w-full justify-between md:gap-10 gap-5 md:px-5">
      <div className="md:w-[50%] w-full h-full rounded-md overflow-hidden md:shadow-lg shadow-none border border-[#6c54e3]">
        <img
          className="w-full h-full object-cover cursor-pointer"
          src={image}
          alt="project image"
        />
      </div>
      <div className="md:w-[50%] w-full flex flex-col gap-6 justify-center p-5">
        <h1 className="font-bold md:text-lg uppercase">{title}</h1>
        <p className="text-sm">{description}</p>
        <button className="flex flex-row gap-2 items-center mt-3 w-fit px-3 py-2 bg-[#6c54e3] text-white rounded-md text-sm outline-none border-0 hover:bg-[#9787e5] duration-150 transition-all">
          <Link to={url}>view live</Link>
        </button>
      </div>
    </div>
  );
};
