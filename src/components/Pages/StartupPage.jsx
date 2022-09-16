import React from "react";
import Header from "../Header";
import Footer from "../Footer";


import { startups } from "../../data";

const StartupPage = () => {
  return (
    <>
      <Header />
      <div className="max-w-lg mx-auto text-center py-10">
        <h2 className="text-3xl font-bold sm:text-4xl">
          <span className="underline decoration-orange-600 decoration-4 underline-offset-2">
            Star
          </span>
          tups
        </h2>
        <p className="mt-4 mb-6 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit
          consequuntur saepe laborum.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  xs:grid-cols-1 px-10 gap-16 py-6">
        {startups.map((member) => {
          return (
            <>
              <div class="block w-64 group cursor-pointer">
                <div class="relative flex items-end h-full transition bg-white border-4 border-orange-500 group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#F97316] p-8">
                  <div class="lg:group-hover:opacity-0 lg:group-hover:absolute">
                    <img src={member.image} class="w-full" alt={member.name} />

                    <p class="mt-4 text-xl font-bold sm:text-2xl">
                      {member.name}
                    </p>
                  </div>

                  <div class="absolute opacity-0 lg:group-hover:opacity-100 lg:group-hover:relative">
                    <p class="text-2xl font-bold">{member.name}</p>

                    <p class="mt-4 text-lg font-medium leading-relaxed">
                      <button
                        className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Know More
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default StartupPage;
