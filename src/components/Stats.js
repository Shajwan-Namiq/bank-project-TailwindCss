import React from 'react'
import { stats } from "../constants";


const Stats = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-lg md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="">
        <div class="py-10 grid grid-cols-1 lg:grid-cols-3 row-gap-8   text-center">
          {stats.map((str, index) => (
            <div key={str.id} className="py-2 lg:flex justify-center items-center">
              <p class="text-color font-bold text-3xl">{str.value}</p>
              <p class="text-stats ml-4  font-medium tracking-widest  uppercase  text-xl">
                {str.title}
              </p>
              <p className="hidden lg:block mx-auto text-stats">
                {index === 2 ? " " : "|"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats