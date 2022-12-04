import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <>
      <section className="">
        <div className="container px-0  py-0 lg:py-5  ">
          <div className="flex items-center justify-center w-full  ">
            <section className=" section-hover cursor-pointer ">
              <div className="p-8  border rounded-xl dark:border-gray-700">
                <p className="leading-loose text-section lg:h-32">{content}</p>

                <div className="flex items-center mt-8 -mx-2">
                  <img
                    className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                    src={img}
                    alt={name}
                  />

                  <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">
                      {name}
                    </h1>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
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
