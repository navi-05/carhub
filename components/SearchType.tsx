'use client'

import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { HiCheckCircle } from 'react-icons/hi'

import { manufacturers } from "@/constants";

interface SearchTypeProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

const SearchType: React.FC<SearchTypeProps> = ({
  manufacturer,
  setManufacturer
}) => {

  const [query, setQuery] = useState('')

  const filteredManufactures =
    query === ''
      ? manufacturers
      : manufacturers.filter((manufacturer) => {
          return manufacturer.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
        })

  return ( 
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              alt="car-image"
              src='/car-logo.svg'
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>  
          <Combobox.Input 
            onChange={(e) => setQuery(e.target.value)} 
            className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm" 
            placeholder="Volkswagen" 
            displayValue={(manufacturer: string) => manufacturer} 
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {filteredManufactures.map((item) => (
                <Combobox.Option 
                  key={item}
                  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary-blue text-white': 'text-gray-900'}`}
                  value={item}
                >
                  {({ selected }) => (
                    <span className="flex items-center">
                      {selected && <HiCheckCircle className="absolute left-4" size={15} />}
                      {item}  
                    </span>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>

        </div>
      </Combobox>
    </div>
   );
}
 
export default SearchType;