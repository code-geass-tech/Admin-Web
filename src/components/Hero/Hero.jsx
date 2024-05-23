import React from "react";

const Hero = ({ handleLoginPopup, isDarkTheme }) => {
  return (
    <>
      <main className={isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-black"}>
        <div className="flex h-[100vh] w-full flex-col items-center justify-center">
          <h1
            className="font-aptos p-8 text-center text-2xl mix-blend-exclusion sm:p-2 sm:text-6xl  md:text-8xl
          "
          >
            Carident
          </h1>
          <p className="text-center tracking-widest mix-blend-exclusion">
            Lorem ipsum, sit amet consectetur adipisicing elit.
          </p>
          <button
            onClick={handleLoginPopup}
            className="transition-200 mt-7 rounded-full bg-blue-500 px-5 py-1 hover:bg-blue-500/80 text-white"
          >
            Join Now
          </button>
        </div>
      </main>
    </>
  );
};

export default Hero;
