import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <>
      <section class="">
        <div class="container px-4 lg:px-0 py-0 lg:py-5  ">
          <div className="flex items-center justify-center w-full  ">
            <section class=" section-hover cursor-pointer ">
              <div class="p-8  border rounded-xl dark:border-gray-700">
                <p class="leading-loose text-section h-32">{content}</p>

                <div class="flex items-center mt-8 -mx-2">
                  <img
                    class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                    src={img}
                    alt={name}
                  />

                  <div class="mx-2">
                    <h1 class="font-semibold text-gray-800 dark:text-white">
                      {name}
                    </h1>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                      {title}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedbackCard;
