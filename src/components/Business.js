import React from 'react'
 
import { features } from "../constants";

const FeatureCard = ({ icon, title, content, index }) => (
  <>
    <div class="container px-6 py-0 mx-auto">
      <div class="mt-6 space-y-8 xl:mt-12">
        <div class="section-hover flex items-center justify-between max-w-2xl px-5 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700">
          <div class="flex items-center">
            <div class="flex flex-col items-center mx-1 space-y-1">
              <img src={icon} alt={title} />{" "}
              <h2 class="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">
                {title}
              </h2>
              <div class="px-0 text-xs  text-section  rounded-full sm:px-4 sm:py-1  ">
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);






const Business = () => {
  return (
    <div className=" ">
      <header class="">
        <div class="container  py-10 mx-auto">
          <div class="items-center lg:flex">
            <div class="px-6 w-full lg:w-1/2">
              <div class="lg:max-w-lg">
                <h1 class="text-3xl font-semibold  text-color lg:text-6xl">
                  You do the business, we’ll handle the money.
                </h1>

                <p class="mt-7  text-section ">
                  With the right credit card, you can improve your financial
                  life by building credit, earning rewards and saving money. But
                  with hundreds of credit cards on the market.
                </p>

                <div class=" mb-10 mt-4 md:mt-8">
                  <a
                    class="group relative inline-flex items-center overflow-hidden rounded border border-current px-10 py-3  text-btn btn-hover focus:outline-none focus:ring active:text-slate-500"
                    href="/download"
                  >
                    <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </span>

                    <span class=" text-lg font-normal transition-all group-hover:mr-4">
                      Business
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <div className='grid grid-cols-1'>
                {features.map((feature, index) => (
                  <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
              </div>

             
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Business