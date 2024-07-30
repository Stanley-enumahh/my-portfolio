import { Navbar } from "../components/Navbar";
import { useContext } from "react";
import { DarkmodeContext } from "../contexts/darkmodeContext";
import Javascript from "../assets/stacks/JavaScript-Symbol-removebg-preview.png";
import tailwind from "../assets/stacks/https___dev-to-uploads.s3.amazonaws.com_uploads_articles_dxy1c2bvl6odeo52dodk-removebg-preview.png";
import react from "../assets/stacks/React__web_framework_-Logo.wine-removebg-preview.png";
import bootstrap from "../assets/stacks/png-clipart-bootstrap-logo-thumbnail-tech-companies-removebg-preview.png";
import github from "../assets/stacks/png-clipart-github-black-logo-landscape-tech-companies-removebg-preview.png";
import Git from "../assets/stacks/512px-Git-logo.svg-removebg-preview.png";
import CSSLogo from "../assets/stacks/a9dcc740cad3149598307b5de8bc10c3-removebg-preview.png";
import htmlLogo from "../assets/stacks/HTML5-wow-removebg-preview (1).png";
import Vercel from "../assets/stacks/png-transparent-vercel-hd-logo-thumbnail-removebg-preview.png";

const StactData = [
  {
    image: react,
    text: "react",
  },

  {
    image: github,
    text: "github",
  },
  {
    image: tailwind,
    text: "tailwind",
  },
  {
    image: bootstrap,
    text: "bootstrap",
  },
  {
    image: Git,
    text: "git",
  },
  {
    image: Vercel,
    text: "Vercel",
  },

  {
    image: Javascript,
    text: "Javascript",
  },
  {
    image: CSSLogo,
    text: "css",
  },
  {
    image: htmlLogo,
    text: "HTML5",
  },
];
export const TechStacks = () => {
  const { darkMode } = useContext(DarkmodeContext);
  return (
    <div
      className={`flex dark:bg-[#0f172a] flex-col w-full h-screen items-center md:justify-center bg-[#ebebeb] ${
        darkMode && "dark"
      } `}
    >
      <Navbar />
      <div className="flex justify-center items-center gap-4 md:gap-2 flex-col w-[90%] md:w-[80%] h-[90%] md:h-[80%]">
        <div className="text-center md:mt-6">
          <h1 className="dark:text-neutral-100 font-bold text-lg">
            Tech Stacks
          </h1>
          <p className="text-gray-700 dark:text-neutral-200 text-sm">
            Unveiling technologies that i mostly make use of;
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 items-center md:ml-0 ml-4 w-full md:w-[80%] h-[60%] md:h-[80%]">
          {StactData.map((stack, index) => {
            return <Stack Data={stack} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

function Stack(props) {
  const { image, text } = props.Data;
  return (
    <div className="cursor-pointer flex flex-col justify-center items-center bg-[#6c54e3] shadow-lg h-[100px] md:h-[120px] w-[100px] md:w-[120px] dark:bg-[#5b04bc] p-4 rounded-lg">
      <img className="w-[100px] object-cover" src={image} alt={text} />
      <p className="uppercase">{text}</p>
    </div>
  );
}
