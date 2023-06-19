import React from "react";
import vl from "../assets/vl.jpg";
import timesh from '../assets/time.jpg'
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: vl,
      ref:""
    },
    {
      id: 2,
      src: time,
      red: "https://timesheetxsls.netlify.app/"
    },
    
    
  ];
  return (
    <div
      name="portfolio"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="mt-3 text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 ">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, ref }) => (
            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
              <img
                src={src}
                className="w-60 ml-10 rounded-md duriation-200 hover:scale-105"
                alt={id}
              />
              <div className="flex item-center justify-center">
                <a className="w-1/2 px-6 m-4 duration-200 hover:scale-105" href={ref}>
                  Demo
                </a>
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default Portfolio;
