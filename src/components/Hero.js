import React from "react";
import { discount, robot } from "../assets";
//import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <>
      <section class="sm:max-w-sm md:max-w-full  lg:max-w-full mx-auto lg:mx-0  sm:grid sm:grid-cols-2  sm:items-center">
        <div class="py-0  md:p-12 lg:px-16">
          <div class="mt-2 lg:mt-0 text-center sm:text-left">
            <div className="text-sm lg:text-lg text-slate-600 flex flex-row items-center py-[6px] px-2 uppercase   bg-discount-gradient rounded-[10px] mb-2">
              <img
                src={discount}
                alt="discount"
                className="w-[32px] h-[32px]"
              />
              <p className="ml-2 ">
                <span className="text-white">20%</span> Discount For{" "}
                <span className="text-white">1 Month</span> Account
              </p>
            </div>

            <div className="">
              <h2 class="text-5xl font-bold text-hero  md:text-7xl">
                The Next
              </h2>
              <span className="text-gradient text-5xl">Generation</span>
              <h2 class="text-5xl font-bold text-hero  md:text-7xl">
                Payment Method.
              </h2>
            </div>

            <p class="max-w-md mx-auto lg:mx-0 text-section md:mt-4 md:block">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>

            <div class=" mb-10 mt-4 md:mt-8">
              <a
                class="group relative inline-flex items-center overflow-hidden rounded border border-current px-10 py-3  text-color-btn btn-hover focus:outline-none focus:ring active:text-slate-500"
                href="/download"
              >
                <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span class=" text-lg font-normal transition-all group-hover:mr-4">
                  Get Started
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex   md:my-0 my-10 relative">
          <img
            src={robot}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />

          {/* gradient start */}
            {/* gradient end */}
        </div>
      </section>
    </>
  );
};

export default Hero;
