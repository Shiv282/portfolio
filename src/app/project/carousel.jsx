import React from "react";
import { useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const ProjectCarousel = ({ projects }) => {
    const [index,setIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
  };
  function rightClick(){
    setIndex((index + 1) % projects.length);
  }

  function leftClick(){
    if(index-1 < 0){
        setIndex(projects.length - 1);
    }else{
        setIndex(index - 1);
    }
  }

  return (
        <div className="flex w-full ml-5">
          <div className="w-1/12 flex flex-row items-center">
            <KeyboardArrowLeftIcon className="rounded-xl dark:bg-black" onClick={leftClick}/>
          </div>
          <div className="project-card flex-1">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">{projects[index].title}</h3>
            <p className="text-3xl font-black text-slate-900 dark:text-white">{projects[index].description}</p>
            <img
              src={projects[index].imageUrl}
              alt={projects[index].title}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
                stroke: "black"
              }}
            />
            {/* Add more project details or components as needed */}
          </div>
          <div className="w-1/12 flex flex-row items-center">
            <KeyboardArrowRightIcon className="rounded-xl dark:bg-black" onClick={rightClick}/>
          </div>
        </div>
  );
};

export default ProjectCarousel;
