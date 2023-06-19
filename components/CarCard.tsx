'use client'

import { useState } from "react";
import Image from "next/image";

import { calculateCarRent } from "@/utils";
import Button from "./Button";
import CarDetails from "./CarDetails";
import getCarImageUrl from "@/actions/getCarImageUrl";

export type CarCardProps = {
  city_mpg: number;
  class?: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

const CarCard = ({ car }: { car: CarCardProps }) => {

  const { 
    city_mpg,
    year,
    make,
    model,
    transmission,
    drive
  } = car

  const [isOpen, setIsOpen] = useState(false)

  const carRent = calculateCarRent(city_mpg, year)

  return ( 
    <div className="group flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl">

      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] font-medium">
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image 
          src={getCarImageUrl(car)}
          fill
          alt="image"
          className="object-contain"
          priority
        />
      </div>

      <div className="relative flex mt-2 w-full">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              width={20}
              height={20}
              src="/steering-wheel.svg"
              alt="steering-wheel"
            />
            <p className="text-[14px]">
              {transmission === 'a' ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              width={20}
              height={20}
              src="/tire.svg"
              alt="tire"
            />
            <p className="text-[14px]">
              {drive.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              width={20}
              height={20}
              src="/gas.svg"
              alt="gas"
            />
            <p className="text-[14px]">
              {city_mpg} MPG
            </p>
          </div>
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 z-10 w-full ">
          <Button
            className="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            onClick={() => setIsOpen(true)}
            rightIcon="/right-arrow.svg"
          >
            View more
          </Button>
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        car={car} 
      />  

    </div>
   );
}
 
export default CarCard;