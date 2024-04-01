'use client'
import React from 'react';
import ProjectCarousel from './carousel';

export default function Page() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      imageUrl: "images/sql.png",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      imageUrl: "images/sql.png",
    },
    {
      title: "Project 3",
      description: "Description of Project 3",
      imageUrl: "images/sql.png",
    },
    {
      title: "Project 4",
      description: "Description of Project 4",
      imageUrl: "images/sql.png",
    }
    // Add more projects as needed
  ];


  return (
    <div className='main-card'>
      <h1 className="text-3xl font-black text-slate-900">Projects</h1>
      <div className="h-1 bg-blue-500 flex-grow w-3/4 mb-10"></div>
      <ProjectCarousel projects={projects}/>
    </div>
  );
}

