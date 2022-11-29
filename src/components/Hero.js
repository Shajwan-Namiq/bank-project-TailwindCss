import React from "react";
import { discount, robot } from "../assets";
//import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <>
      <section class="  sm:grid sm:grid-cols-2  sm:items-center">
        <div class="py-0  md:p-12 lg:px-16">
          <div class="mt-2 lg:mt-0 mx-auto max-w-xl text-center sm:text-left">
            <div className="max-w-md mx-auto lg:mx-0 text-sm lg:text-lg text-slate-600 flex flex-row items-center py-[6px] px-2 uppercase   bg-discount-gradient rounded-[10px] mb-2">
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

            <div>
              <h2 class="text-5xl font-bold text-hero  md:text-7xl">
                The Next
              </h2>
              <span className="text-gradient text-5xl">Generation</span>
              <h2 class="text-5xl font-bold text-hero  md:text-7xl">
                Payment Method.
              </h2>
            </div>

            <p class="max-w-md mx-auto lg:mx-0 text-gray-500 md:mt-4 md:block">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
            <div class="mt-4 md:mt-8">
              <a
                href="#"
                class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <div>
          {/* gradient start */}
          <div className="absolute z-[0]  w-[10%] h-[50%]   lg:w-[40%] lg:h-[35%] lg:top-0 pink__gradient" />
          <div className="absolute z-[1] w-[20%] h-[50%]    lg:w-[40%] lg:h-[80%] rounded-full white__gradient lg:bottom-40" />
          <div className="absolute z-[0] w-[250%] h-[50%]   lg:w-[50%] lg:h-[100%] right-20 lg:bottom-20 blue__gradient" />
          {/* gradient end */}
          <img alt="Violin" src={robot} class=" h-full w-full object-cover  " />
        </div>
      </section>
    </>
  );
};

export default Hero;
