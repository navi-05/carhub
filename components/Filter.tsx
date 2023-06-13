'use client'

import { useState, Fragment } from "react";
import { useRouter } from "next/navigation";
import { HiCheckCircle } from 'react-icons/hi'
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import updateSearchParams from "@/constants";

interface FilterProps {
  type: string;
  options: {
    title: string,
    value: string
  }[]
}

const Filter: React.FC<FilterProps> = ({
  type,
  options
}) => {

  const [selected, setSelected] = useState(options[0])
  const router = useRouter()

  const handleUpdateParams = (e: { title: string, value: string }) => {
    const url = updateSearchParams(type, e.value.toLowerCase())

    router.push(url)
  }

  return ( 
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e)
          handleUpdateParams(e)
        }} 
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className='relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border'>
            <span className="block truncate">{selected.title}</span>
            <Image 
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="controls"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({active}) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                >
                  {({ selected }) => (
                    <span className="flex items-center">
                    {selected && <HiCheckCircle className="absolute right-1" size={15} />}
                    {option.title}
                  </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
   );
}
 
export default Filter;