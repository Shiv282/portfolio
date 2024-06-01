"use client";
import React from "react";
import ProjectCarousel from "./carousel";

export default function Page() {
  const projects = [
    
    {
      title: "Career Predictor",
      description: [
        "Developed an online streamlined career predictor/guidance system with client- server architecture",
        "Used flask framework and trained 2 ML models  to predict the career options based on skill sets and learning styles",
        "Used Reactjs to design the ui/ux for tests and charts/graphs for results",
      ],
      imageUrl1: "project_images/CareerPrediction.png",
      imageUrl2: "project_images/CareerPrediction_3.png",
      imageUrl3: "project_images/CareerPrediction_2.png",
    },
    {
      title: "TaskManager Extension",
      description: [
        "Developed a browser extension for task management, inspired by widely-used tools, to streamline task organization and productivity",
        "Enabled users to create multiple dashboards and custom stages for efficient task organization",
        "Developed using Java Spring Boot with MVC architecture for the backend, MongoDB for data storage, and Vite + React for the frontend, ensuring a responsive and intuitive user interface",
      ],
      imageUrl1: "project_images/TaskManager.png",
      imageUrl2: "project_images/TaskManager_2.png",
      imageUrl3: "project_images/TaskManager_3.png",
    },
    {
      title: "Mastro Workforce",
      description: [
        "Developed a full-stack web application using with Node.js serving a REST API with Next.js as the frontend",
        "Implemented NFC writer and NFC reader for patrolling services",
        "Provided HCM features like Payroll Management, Attendance Management and Work tracking",
        "Provided different level of access based on user role",
      ],
      imageUrl1: "project_images/MastroWorkforce.png",
      imageUrl2: "project_images/MastroWorkforce2.png",
      imageUrl3: "project_images/MastroWorkForce3.png",
    },
  ];

  return (
    <div className="main-card dark:bg-zinc-900">
      <h1 className="text-3xl font-black text-slate-900 dark:text-white">
        Projects
      </h1>
      <div className="h-1 bg-blue-500 flex-grow w-3/4 mb-10 dark:bg-sky-400"></div>
      <ProjectCarousel projects={projects} />
    </div>
  );
}
