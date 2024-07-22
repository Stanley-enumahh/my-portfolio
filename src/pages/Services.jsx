import { useContext, useState } from "react";
import { Navbar } from "../components/Navbar";
import { FaXmark } from "react-icons/fa6";
import { BsArrowRightShort } from "react-icons/bs";
import service1 from "../assets/pexels-cliff-booth-4058226_560512_CS-1071.jpg";
import service2 from "../assets/pexels-divinetechygirl-1181396_630671_CS-9257.jpg";
import service3 from "../assets/pexels-fauxels-3184339_606849_CS-2373.jpg";
import service4 from "../assets/pexels-sora-shimazaki-5935791_602277_CS-3695.jpg";
import { DarkmodeContext } from "../contexts/darkmodeContext";
const ServicesData = [
  {
    Image: service1,
    title: "Web design and development",
    info: "I design and build modern responsive websites from scratch including design, layout and funcunality",
  },
  {
    Image: service2,
    title: "E-commerce solutions",
    info: "Developing online stores, shopping carts and payment gateways using platforms like shopify, magneto and woocommerce",
  },
  {
    Image: service3,
    title: "Web security",
    info: "Ensuring websites are totally secure, including SSL certificates, aunthetifications, vunerability testing and security audits",
  },
  {
    Image: service4,
    title: "Maintenance and Updates",
    info: "I provide regular updating and maintaining websites to ensure they remain secure, fast, functional and up-to-date technology.",
  },
];

export default function Services() {
  const { darkMode } = useContext(DarkmodeContext);
  return (
    <div
      className={` dark:bg-[#5b04bc]  flex relative md:justify-center justify-start flex-col items-center h-fit bg-[#ebebeb] ${
        darkMode && "dark"
      } `}
    >
      <Navbar />
      <div className=" flex mt-[80px] flex-col gap-10 md:mt-16 w-full  md:w-[90%] items-center">
        <div className="text-center md:px-0 px-7">
          <h1 className="font-bold text-xl dark:text-neutral-100">Services</h1>
          <p className="text-sm dark:text-neutral-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            temporibus!
          </p>
        </div>
        <div className=" flex md:flex-row flex-col flex-wrap gap-y-8 justify-center items-center md:items-tart cursor-pointer rounded-lg overflow-hidden md:justify-between md:w-[70%] w-full h-fit mb-10">
          {ServicesData.map((services, index) => {
            return <ServicesDetails data={services} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

const ServicesDetails = (props) => {
  const { title, info, Image } = props.data;
  const [learnMore, setLearnMore] = useState(false);
  return (
    <div className="relative w-[90%] md:w-[260px] h-[300px] md:h-[270px] flex justify-between flex-col shadow-lg rounded-md overflow-hidden border-1 border-[#6c54e3]">
      <div className=" absolute w-full h-full">
        <img className="w-full h-full object-cover" src={Image} alt="" />
      </div>
      <div className="absolute w-full h-full gap-4 bg-[#21202099] flex justify-center items-center flex-col">
        <span className="w-full flex justify-center text-center">
          <h2 className="text-xl font-bold text-white ">{title}</h2>
        </span>
        <span>
          <button
            onClick={() => {
              setLearnMore(true);
            }}
            className="flex flex-row items-center text-sm justify-center  text-white w-full py-1 px-3 hover:border hover:border-white transition-all duration-150 rounded-lg"
          >
            Learn more <BsArrowRightShort />
          </button>
        </span>
      </div>
      <span
        className={` absolute w-full h-full bg-neutral-200 left-0 flex flex-row text-center items-center text-black p-2 transition-all duration-150 ${
          learnMore ? "top-[0]" : "top-[-100%]"
        }`}
      >
        {info}
        <FaXmark
          onClick={() => {
            setLearnMore(false);
          }}
          className="absolute bottom-4 left-[45%]"
        />
      </span>
    </div>
  );
};
