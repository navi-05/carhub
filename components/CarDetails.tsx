'use client'

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";

import { CarCardProps } from "./CarCard"

interface CarDetailsProps {
  car: CarCardProps;
  isOpen?: boolean;
  close: () => void
}

const CarDetails: React.FC<CarDetailsProps> = ({
  car,
  isOpen,
  close
}) => {

  const {
    city_mpg,
    class: vehicleClass,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year
  } = car

  return (
    <Transition
      as={Fragment}
      appear
      show={isOpen}
    >
      <Dialog as="div" className="relative z-10" onClose={close}>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">

          <div className="flex min-h-full items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl shadow-xl bg-white text-left transition-all flex flex-col gap-5 p-6'>
                <button
                  type='button'
                  className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  onClick={close}
                >
                  <Image
                    alt="close-modal"
                    src='/close.svg'
                    height={20}
                    width={20}
                    className="object-contain"
                  />
                </button>

                <div className="flex flex-1 flex-col gap-3">

                  <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                    <Image 
                      src='/hero.png'
                      fill
                      alt="image"
                      className="object-contain"
                      priority
                    />
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image 
                        src='/hero.png'
                        fill
                        alt="image"
                        className="object-contain"
                        priority
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image 
                        src='/hero.png'
                        fill
                        alt="image"
                        className="object-contain"
                        priority
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image 
                        src='/hero.png'
                        fill
                        alt="image"
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>

                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="font-semibold text-xl capitalize">
                    {make} {model}
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-4">
                    {Object.entries(car).map(([key, value]) => (
                      <div key={key} className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-grey capitalize">{key.split('_').join(" ")}</h4>
                        <p className="font-semibold text-black-100">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </Dialog.Panel>

            </Transition.Child>
          </div>

        </div>
      </Dialog>
    </Transition>
  )
}

export default CarDetails

{/* <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog.Panel>
    </Dialog> */}