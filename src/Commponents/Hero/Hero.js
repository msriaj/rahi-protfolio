import React from "react";
import HeroText from "../HeroText/HeroText";
import Menu from "../Menu/Menu";
import heroImg from "./hero.png";
const Hero = () => {
  return (
    <section className="bg-[#222222] h-auto md:h-screen ">
      <Menu />
      <div className="flex overflow-hidden pt-16 md:pt-0  flex-wrap md:flex-nowrap items-center h-full container pb-20 w-10/12 text-white mx-auto justify-between">
        <HeroText></HeroText>
        <div className="w-full md:w-1/2 flex justify-center pt-32 md:pt-0">
          <img className="w-full md:w-96 " src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
