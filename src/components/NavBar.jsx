import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
function NavBar() {
  const [Nav, stnav] = useState();
  const link = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },

    { id: 5, link: "contact" },
  ];
  return (
    <div className="flex justify-between item-center w-full h-20 p-4 bg-black text-white fixed  ">
      <h1 className="ml-2 text-5xl font-signature">Yeabsra</h1>
      <ul className="hidden md:flex py-4">
        {link.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-300"
          >
            <Link to={link} smooth duration={700}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => stnav(!Nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {Nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {Nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {link.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
