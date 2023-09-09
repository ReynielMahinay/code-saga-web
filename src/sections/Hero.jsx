import React from "react";
import Button from "../components/Button";
import { portal, run } from "../assets/images";

const Hero = () => {
  return (
    <section
      className="w-full flex flex-row justify-center min-h-screen max-container md:pt-[80px] sm:pb-[60px]"
      id="home"
    >
      <div className="relative xl:2/5 flex flex-col justify-center items-start xl:w-[55%] md:w-[70%] max-xl:padding-x  w-full ">
        <h1 className="text-white font-kanit font-bold max-sm:text-[72px] text-7xl w-full leading-[90px] ">
          CODE<span className="text-yellow"> SAGA</span>
          <br />
          AARHUS EVENTYR
        </h1>
        <p className="text-slate-300 mb-8 max-w-[420px] font-kanit text-lg mt-4">
          Embark on an epic 2D RPG action adventure. Dive into a richly crafted
          world and find the answer to the legendary book.{" "}
        </p>
        <Button />
      </div>
      <div className="flex flex-row  relative md:w-[45%] w-full flex-1 justify-center items-center  pr-[200px]">
        <img
          src={run}
          className="absolute -left-[180px] top-[130px] w-[500px] h-[500px] hidden xl:block"
        />
        <img
          src={portal}
          className="w-[278px] h-[400px] pl-15 hidden md:block  "
        />
      </div>
    </section>
  );
};

export default Hero;
