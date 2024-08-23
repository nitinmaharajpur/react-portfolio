import logo from "../assets/kevinRushLogo.png";
import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/nitin-kumar-552221210" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/nitinmaharajpur" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <FaInstagram />
        <FaSquareTwitter />
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/1WRhozyHe3oqQk8sMJINF7Bo4QvvE3xkF/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
