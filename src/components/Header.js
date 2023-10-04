import React, { useState, useContext } from "react";

import Logo from "../assets/img/logo.svg";

import NavMobile from "./NawMobile";
import SwitchDarkMode from "../components/SwitchDarkMode";
import { Text } from "../components/LanguageContext";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-12 py-4 pt-8 border-b-2 sticky top-0 z-30 bg-white shadow-xl dark:bg-black space-x-3 text-lg">
      <div className="flex items-center mr-12 dark:text-white ">
        <a to="/">
          <img
            src={Logo}
            alt=""
            className="dark:bg-neutral-400 dark:px-4 py-2 rounded-xl dark:text-white"
          />
        </a>
      </div>
      <div></div>

      <div className="hidden  lg:items-center  lg:flex ">
        <a
          href="#"
          className=" font-medium text-gray-800  font-bold px-4 py-2 bg-neutral-100 
          rounded-full dark:text-white dark:bg-neutral-800 focus:outline-none focus:ring-0"
        >
          <Text tid="Home" />
        </a>
        <div class="p-6">
          <div class="dropdown inline-block relative">
            <button class="hover:bg-gray-100 text-gray-500 font-medium py-2 px-6 rounded-full inline-flex items-center dark:text-white dark:hover:bg-neutral-800  ">
              <span class="mr-1">
                <Text tid="Properties" />
              </span>
              <svg
                class="fill-current h-4 w-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul class="dropdown-menu absolute hidden rounded-lg text-gray-700 pt-2   border-lg  shadow-md dark:text-white dark:bg-neutral-800 dark:hover:bg-neutral-800">
              <li class="">
                <a
                  class="  hover:text-gray-400 py-2 px-4 block whitespace-no-wrap "
                  href="#"
                >
                  <Text tid="United States" />
                </a>
              </li>

              <li class="">
                <a
                  class=" hover:text-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  <Text tid="Canada" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <a
          href="#"
          className="text-base font-medium text-gray-500 hover:text-gray-900 px-6 py-2
           hover:bg-neutral-100 rounded-full  dark:text-white hover:dark:bg-neutral-800"
        >
          <Text tid="Blog" />
        </a>

        <a
          href="#"
          className="text-base font-medium text-gray-500
           hover:text-gray-900 items-center w-full px-4 py-2
            hover:bg-neutral-100 rounded-full  dark:text-white dark:hover:bg-neutral-800"
        >
          <Text tid="About us" />
        </a>
      </div>
      <div></div>

      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-x-4">
        <SwitchDarkMode />

        <a
          href="#"
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm  font-
                 text-white bg-violet-600 hover:bg-violet-700"
        >
          <Text tid="buttonsing" />
        </a>
      </div>
      <NavMobile />
    </header>
  );
};
export default Header;
