'use client'

import { useState } from "react";
import Image from "next/image";
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

import SearchType from "./SearchType";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button
      type="submit"
      className={`-ml-3 z-10 ${otherClasses}`}
    >
      <Image
        alt="search-icon"
        src="/magnifying-glass.svg"
        height={40}
        width={40}
        className="object-contain"
      />  
    </button>
  )
}

const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')

  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(manufacturer === '' && model === '') {
      return toast.error('Please fill the fields')
    }
    
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())

  }

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    if(model) searchParams.set('model', model)
    else searchParams.delete('model')

    if(manufacturer) searchParams.set('manufacturer', manufacturer)
    else searchParams.delete('manufacturer')

    const url = `${window.location.pathname}?${searchParams.toString()}`

    router.push(url)
  }

  return ( 
    <form
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchType 
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton 
          otherClasses="sm:hidden"
        />
      </div>

      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <Image
          alt="car-model-icon"
          src='/model-icon.png'
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
        />
        <SearchButton 
          otherClasses="sm:hidden"
        />
      </div>
      
      <SearchButton 
        otherClasses="max-sm:hidden"
      />

    </form>
   );
}
 
export default SearchBar;