import React from 'react'
import { apple, bill, google } from "../assets";
const Billing = () => {
  return (
    <>
      <header class="  ">
        <div class="container px-6 py-16 mx-auto">
          <div class="items-center lg:flex">
            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                class="w-full h-full lg:max-w-3xl"
                src={bill}
                alt="Catalogue-pana.svg"
              />
            </div>

            <div class="lg:ml-24 w-full lg:w-1/2">
              <div class="lg:max-w-lg">
                <h1 class="text-3xl font-semibold text-color lg:text-6xl">
                  Easily control your billing & invoicing.{" "}
                </h1>

                <p class="mt-6 text-section">
                  Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                  ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                  integer platea placerat.
                </p>

                <div class="flex mb-10 mt-10 md:mt-10 ">
                  <a
                    class="border-[#f3f6f4] border-2 rounded-lg text-color-hover mr-2 lg:mr-10"
                    href="/download"
                  >
                    <img
                      src={apple}
                      alt="apple"
                      class=" text-lg font-normal transition-all"
                    />
                  </a>
                  <a
                    class="border-[#f3f6f4] border-2 rounded-lg text-color-hover "
                    href="/download"
                  >
                    <img
                      src={google}
                      alt="google"
                      class=" text-lg font-normal transition-all"
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