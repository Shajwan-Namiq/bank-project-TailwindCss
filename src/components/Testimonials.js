import React from 'react'
import { feedback } from "../constants";
import FeedbackCard from './FeedbackCard';



const Testimonials = () => {
  return (
    <>
      <header class="  ">
        <div class="container px-6 py-16 mx-auto">
          <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
              <div class="lg:max-w-lg">
                <h1 class="text-3xl font-semibold text-color lg:text-6xl">
                  What people are saying about us{" "}
                </h1>
              </div>
            </div>

            <div class="flex lg:mr-10 items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <p class="lg:max-w-md mt-6 text-lg text-section">
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="lg:max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>

        <div class="mt-5 md:flex md:items-center md:justify-center">
           <div class="flex justify-center mt-0">
            <button
              title="left arrow"
              class="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              title="right arrow"
              class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials