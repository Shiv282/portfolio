import React from "react";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Catalogue from "./catalogue";

const ProjectCarousel = ({ projects }) => {
  const [index, setIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
  };
  function rightClick() {
    setIndex((index + 1) % projects.length);
  }

  function leftClick() {
    if (index - 1 < 0) {
      setIndex(projects.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <div className="flex md:w-full ml-5">
      <div className="w-1/12 flex flex-row items-center justify-center">
        <KeyboardArrowLeftIcon
          className="rounded-xl dark:bg-black"
          onClick={leftClick}
        />
      </div>
      <div className="project-card flex-1">
        <h3 className="text-3xl font-black text-center text-slate-900 dark:text-white">
          {projects[index].title}
        </h3>

        <div className="flex justify-center w-full items-center ">
          <Catalogue
            mainImage={projects[index].imageUrl1}
            leftImage={projects[index].imageUrl2}
            rightImage={projects[index].imageUrl3}
          />
        </div>

        <ul>
          {projects[index].description &&
            projects[index].description.map((desc) => (
              <li className="text-l font-black text-slate-900 dark:text-white">
                - {desc}.
              </li>
            ))}
        </ul>
        {/* Add more project details or components as needed */}
      </div>
      <div className="w-1/12 flex flex-row items-center justify-center">
        <KeyboardArrowRightIcon
          className="rounded-xl dark:bg-black"
          onClick={rightClick}
        />
      </div>
    </div>
  );
};

export default ProjectCarousel;
