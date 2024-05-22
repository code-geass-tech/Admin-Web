import React from "react";

const Hero = ({ handleLoginPopup }) => {
  return (
    <>
      <main>
        <div className="flex h-[100vh] w-full flex-col items-center justify-center">
          <h1
            className="select-none p-8 text-center font-aptos text-2xl text-white mix-blend-exclusion sm:p-2 sm:text-6xl md:w-[550px] md:text-8xl
          "
          >
            Carident
          </h1>
          <p className="text-center tracking-widest text-white mix-blend-exclusion md:w-[550px]">
            Lorem ipsum, sit amet consectetur adipisicing elit.
          </p>
          <button
            onClick={handleLoginPopup}
            className="transition-200 mt-7 rounded-full bg-orange-500 px-5 py-1 text-white hover:bg-red-500/80 "
          >
            Join Now
          </button>
        </div>
      </main>
    </>
  );
};

export default Hero;
