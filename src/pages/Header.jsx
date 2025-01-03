import React, { useState } from "react";
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:border-gray-700">
        <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://theinternationalglamourproject.com/wp-content/uploads/2022/10/TIGP_logo_.png"
              className="h-8"
              alt="Flowbite Logo"
            />
          </a>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-multi-level"
          >
            <ul className=" flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-white">
              <li className="text-white bg-black hover:bg-white hover:text-black border-2 border-black flex items-center py-1 px-2 transition-all duration-300">
                <a href="#" className="block py-2 px-3" aria-current="page">
                  Home
                </a>
              </li>
              <li className="text-white bg-black hover:bg-white hover:text-black border-2 border-black flex items-center py-1 px-2 transition-all duration-300">
                <a href="#" className="block py-2 px-3">
                  About Us
                </a>
              </li>
              <li className="relative group">
                <button className="text-white w-full bg-black hover:bg-white hover:text-black border-2 border-black flex items-center py-3 px-5 transition-all duration-300">
                  Artists
                </button>
                <ul className="artist-dropdown absolute hidden group-hover:flex flex-col bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 mt-2 z-50 dark:bg-gray-700">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black  bg-white "
                    >
                      Models
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black  bg-white"
                    >
                      Makeup Artist
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black  bg-white"
                    >
                      Hairstylist
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black  bg-white"
                    >
                      Choreographer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black  bg-white"
                    >
                      Stylist
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black  bg-white"
                    >
                      Photographer
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <button className="text-white w-full bg-black hover:bg-white hover:text-black border-2 border-black flex items-center py-3 px-5 transition-all duration-300">
                 Events
                </button>
                <ul className="artist-dropdown absolute hidden group-hover:flex flex-col bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 mt-2 z-50 dark:bg-gray-700">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black  bg-white"
                    >
                      Pageant
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black  bg-white"
                    >
                      Runway
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black  bg-white"
                    >
                      Award
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black  bg-white"
                    >
                      Photoshoot
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black  bg-white"
                    >
                      Workshops
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black  bg-white"
                    >
                      Photographer
                    </a>
                  </li>
                </ul>
              </li>
              <li  className=" pink-purple button-jittery text-white  hover:bg-white hover:text-purple-700 border-2  flex items-center py-1 px- transition-all duration-300">
                <a href="#" className="block py-2 px-3">
                  Enroll Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
