import logo from "../assets/kevinRushLogo.png";
import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-10 flex flex-wrap items-center justify-between py-4 px-4 sm:px-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-3 text-xl sm:text-2xl">
        <a href="https://www.linkedin.com/in/nitin-kumar-552221210" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/nitinmaharajpur" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <FaInstagram />
        <FaSquareTwitter />
      </div>
      <div className="mt-4 sm:mt-0">
        <a
          href="https://drive.google.com/file/d/1WRhozyHe3oqQk8sMJINF7Bo4QvvE3xkF/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="block sm:inline-block px-4 py-2 text-sm sm:text-base bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
