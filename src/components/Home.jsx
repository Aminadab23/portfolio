import React from "react";
import HeroImage from "../assets/rof.jpg";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl  text-white sm:text-7xl font-bold">I m a Fullstack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have a 2 year eperience with back end techs like django and node
            and a year with mobile app with flutter.
          </p>

          <div>
            <Link to="portfolio" smooth duration={700}>
            <button  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
              Portfolio
              <span className="group-hover:rotate-90 duration-500">
                <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
              </span>
            </button></Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
