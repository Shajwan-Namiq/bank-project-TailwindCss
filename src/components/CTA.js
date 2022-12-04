import React from 'react'

const CTA = () => {
  return (
    <>
      <section className="cta-bg mx-5 mb-10 lg:mt-20 mt-10  max-w-6xl lg:mx-auto ">
        <div className="container px-5 py-14 mx-auto flex items-center md:flex-row flex-col">
          <div className="flex lg:px-5 flex-col md:pr-10 md:mb-0 mb-6 pr-0  md:w-auto md:text-left text-center">
            <h1 className="text-3xl font-semibold text-color lg:text-6xl">
              Let’s try our service now!{" "}
            </h1>
            <p className="lg:max-w-md mt-6 text-lg text-section">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>

          <div className="flex md:ml-auto md:mr-20   items-center flex-shrink-0 space-x-4">
            <div className=" mb-10 mt-4 md:mt-8">
              <a
                className=" group relative inline-flex items-center overflow-hidden rounded border border-current px-10 py-3  text-btn btn-hover focus:outline-none focus:ring active:text-slate-500"
                href="/download"
              >
                <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span className=" text-lg  transition-all group-hover:mr-4">
                  Get started
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA