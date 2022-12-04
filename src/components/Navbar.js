import React from "react";
import { logo } from "../assets";
import { navLinks, footerLinksnav } from "../constants";
import { useState } from "react";


const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = useState("Home");
  return (
    <>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <img className="h-8 w-auto sm:h-10" src={logo} alt="logo" />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <nav className="hidden md:flex space-x-10">
              <ul className="flex space-x-14 ">
                {navLinks.map((nav, index) => (
                  <>
                    <li key={nav.id}>
                      <a
                        href={`#${nav.id}`}
                        activestyle={{ color: "red" }}
                        className={` 
                        ${active === nav.title ? "text-nav" : "text-color"}
                        ${
                          index === navLinks.length - 1
                            ? "mr-0"
                            : "mr-10"
                        }
             
                       px-2 text-base font-medium  text-color-hover cursor-pointer`}
                        onClick={() => setActive(nav.title)}
                      >
                        {nav.title}
                      </a>
                    </li>
                  </>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/**mobile screen */}
        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2   transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-white ring-opacity-5 bg-slate-900 text-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={logo} alt="Workflow" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-slate-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#5CE1E6]"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <ul>
                    {navLinks.map((link) => (
                      <>
                        <a
                          key={link.name}
                          href={link.link}
                          className=" text-color-hover -m-3 p-3 flex items-center rounded-md   "
                        >
                          {link.title}
                        </a>
                      </>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            <div className="py-5 px-5 max-w-[700px]">
              <ul className="flex flex-row space-x-10 md:space-x-20 ">
                {footerLinksnav.map((footerlink) => (
                  <li key={footerlink.id}>
                    <a href=""> {footerlink.title}</a>

                    <ul className="py-2">
                      {footerlink.links.map((link) => (
                        <li key={link.id}>
                          <a
                            href="#"
                            className="px-2 py-1 text-color-hover  text-base font-thin text-gray-300  cursor-pointer"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
