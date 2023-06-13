'use client'

import Image from "next/image";
import Button from "./Button";

const Hero = () => {

  const handleScroll = () => {}

  return ( 
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">

      <div className="pt-36 flex-1 sm:px-16 px-6">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[40px] font-extrabold">
          Find, book or rent a car — quickly and easily.
        </h1>
        <p className="sm:text-[27px] text-[20px] text-black-100 font-light mt-5">
          Streamline your car rental experience with our effortless booking process.
        </p>
        <Button
          onClick={handleScroll}
          className="bg-primary-blue text-white rounded-full mt-10"
        >
          Explore Cars
        </Button>
      </div>

      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image 
            alt="Hero image"
            src='/hero.png'
            fill
            className="object-contain"
          />
        </div>
        <div className="bg-hero-bg bg-repeat-round w-full xl:h-screen h-[590px] absolute xl:-top-24 xl:-right-1/2 -right-1/4 overflow-hidden -z-10" />
      </div>

    </div>
  );
}
 
export default Hero;