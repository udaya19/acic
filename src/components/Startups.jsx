import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { FiArrowRight } from "react-icons/fi";
import { startups } from "../data";

const Startups = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="max-w-lg mx-auto text-center py-10">
        <h2 className="text-3xl font-bold sm:text-4xl">
          <span className="underline decoration-orange-600 decoration-4 underline-offset-2">
            Startups a
          </span>
          t a Glance
        </h2>
        <p className="mt-4 mb-6 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit
          consequuntur saepe laborum.
        </p>
      </div>
      <div
        class="flex overflow-x-auto scroll-smooth scrollbar-hide"
        id="flavoursContainer"
      >
        <div class="flex flex-nowrap py-6 gap-12 lg:ml-20 md:ml-20 ml-10">
          {startups.map((member) => {
            return (
              <>
                <div class="block w-64 group cursor-pointer">
                  <div class="relative flex items-end h-full transition bg-white border-4 border-orange-500 group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#F97316] p-8">
                    <div class="lg:group-hover:opacity-0 lg:group-hover:absolute">
                      <img
                        src={member.image}
                        class="w-full"
                        alt={member.name}
                      />

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
                          onClick={() => setOpenModal(true)}
                        >
                          Know More
                        </button>
                        <Modal
                          open={openModal}
                          onClose={() => setOpenModal(false)}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* <div
        class="flex overflow-x-auto scroll-smooth scrollbar-hide"
        id="flavoursContainer"
      >
        <div class="flex flex-nowrap py-6 gap-12 lg:ml-20 md:ml-20 ml-10">
          {startups.map((member) => {
            return (
              <>
                <div class="block w-64 group cursor-pointer">
                  <div class="relative flex items-end h-full transition bg-white border-4 border-orange-500 group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#F97316] p-8">
                    <div class="lg:group-hover:opacity-0 lg:group-hover:absolute">
                      <img
                        src={member.image}
                        class="w-full"
                        alt={member.name}
                      />

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
                          onClick={() => setShowModal(true)}
                        >
                          Know More
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                {showModal ? (
                  <>
                    <Modal member={member} />
                  </>
                ) : null}
              </>
            );
          })}
        </div>
      </div> */}

      <div className="py-4 px-6 grid place-items-end">
        <Link to="/startups">
          <a
            class="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-orange-500 rounded-full group"
            href="/"
          >
            <span class="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
              <FiArrowRight />
            </span>

            <span class="text-sm font-medium transition-all group-hover:mr-4">
              View All
            </span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Startups;
