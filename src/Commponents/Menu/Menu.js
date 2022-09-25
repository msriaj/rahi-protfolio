import React from "react";
import menLogo from "./logo.png";
import menubtn from "./navbtn.png";
const Menu = () => {
  return (
    <div>
      <header className="text-gray-600 body-font w-10/12 mx-auto">
        <div className="container mx-auto flex flex-wrap pt-5 flex-col md:flex-row items-center">
          <a
            href="#home"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img className="w-16" src={menLogo} alt="" />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#home" className="mr-5 text-white hover:text-gray-500">
              Home
            </a>
            <a href="#HowIwork" className="mr-5 text-white hover:text-gray-500">
              How I work
            </a>
            <a
              href="#testimonials"
              className="mr-5 text-white hover:text-gray-500"
            >
              Testimonials
            </a>
            <a href="#contact" className="mr-5 text-white hover:text-gray-500">
              Contact
            </a>
          </nav>
          <button className="hidden md:block  items-center border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
            <img src={menubtn} alt="" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Menu;
