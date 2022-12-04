import React from 'react'
import { clients } from "../constants";


const Clients = () => {
  return (
    <>
      <section className="py-5">
        <div className="max-w-6xl mx-auto mt-10 lg:mt-36">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 ">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex justify-center items-center h-8 text-gray-500 fill-current dark:text-gray-300"
              >
                <img
                  src={client.logo}
                  alt="client_logo"
                  className="sm:w-[192px] w-[100px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Clients