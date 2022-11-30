import React from 'react'
import { card } from "../assets";

const CardDeal = () => {
  return (
    <>
      <header class="  ">
        <div class="container px-6 py-16 mx-auto">
          <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
              <div class="lg:max-w-lg">
                <h1 class="text-3xl font-semibold text-color lg:text-6xl">
                  Find a better card deal in few easy steps.{" "}
                </h1>

                <p class="mt-6 text-section">
                  Arcu tortor, purus in mattis at sed integer faucibus. Aliquet
                  quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                </p>

                <div class=" mb-10 mt-4 md:mt-8">
                  <a
                    class=" group relative inline-flex items-center overflow-hidden rounded border border-current px-10 py-3  text-btn btn-hover focus:outline-none focus:ring active:text-slate-500"
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
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </span>

                    <span class=" text-lg  transition-all group-hover:mr-4">
                      Details
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img class="w-full h-full lg:max-w-lg" src={card} alt="card" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default CardDeal