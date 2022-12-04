import React from 'react'
import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";

const Footer = () => {
  return (
    <div>
      <footer className=" body-color  body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src={logo} alt="logo" />
            </a>
            <p className="mt-2 text-sm text-gray-500">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="grid grid-cols-1  lg:grid-cols-3  w-full px-4 ">
              {footerLinks.map((footerlink, index) => (
                <div key={index}>
                  <h2 className="py-2 title-font font-medium text-color tracking-widest text-sm mb-3">
                    {footerlink.title}

                    <ul className="cursor-pointer mt-2 ">
                      {footerlink.links.map((link) => (
                        <li
                          key={link.name}
                          className=" font-poppins font-normal text-[16px] leading-[24px] text-dimWhite  cursor-pointer "
                        >
                          <a
                            href={link.link}
                            className="text-gray-400 txt-hover"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-0 lg:mx-16 border-t border-gray-700" />
        <div className="">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-lg text-center sm:text-left">
              © 2022 HooBank —
              <a
                href="https://bank-project-tailwind-css.vercel.app/"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @Netlify
              </a>
            </p>
            <span className=" inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                  <img
                    key={social.id}
                    src={social.icon}
                    alt={social.id}
                    className=" hover-icon mx-4 w-[21px] h-[21px] object-contain cursor-pointer  "
                    onClick={() => window.open(social.link)}
                  />
                ))}
              </div>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer