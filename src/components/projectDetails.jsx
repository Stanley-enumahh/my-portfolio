import { Link } from "react-router-dom";

export default function ProjectDetails(props) {
  const { image, title, description, url } = props.data;
  return (
    <div className="flex md:flex-row flex-col md:h-[300px] h-fit w-full justify-between md:mt-[40px] gap-5 p-5">
      <div className="md:w-[50%] w-full h-full rounded-md overflow-hidden md:shadow-lg shadow-none">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="project image"
        />
      </div>
      <div className="md:w-[50%] w-full flex flex-col gap-3 justify-center">
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm">{description}</p>
        <button className="flex flex-row gap-2 items-center mt-3 w-fit px-3 py-2 bg-[#6c54e3] text-white rounded-md text-sm outline-none border-0">
          <Link to={url}>view live</Link>
        </button>
      </div>
    </div>
  );
}
