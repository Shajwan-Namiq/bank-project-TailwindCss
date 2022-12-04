import React from 'react'
import { apple, bill, google } from "../assets";
const Billing = () => {
  return (
    <>
      <header className="  ">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src={bill}
                alt="Catalogue-pana.svg"
              />
            </div>

            <div className="lg:ml-24 w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-color lg:text-6xl">
                  Easily control your billing & invoicing.{" "}
                </h1>

                <p className="mt-6 text-section">
                  Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                  ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                  integer platea placerat.
                </p>

                <div className="flex mb-10 mt-10 md:mt-10 ">
                  <a
                    className="border-[#f3f6f4] border-2 rounded-lg text-color-hover mr-2 lg:mr-10"
                    href="/download"
                  >
                    <img
                      src={apple}
                      alt="apple"
                      className=" text-lg font-normal transition-all"
                    />
                  </a>
                  <a
                    className="border-[#f3f6f4] border-2 rounded-lg text-color-hover "
                    href="/download"
                  >
                    <img
                      src={google}
                      alt="google"
                      className=" text-lg font-normal transition-all"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Billing