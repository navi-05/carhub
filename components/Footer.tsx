'use client'

import Link from "next/link";
import Image from 'next/image'

import { footerLinks } from "@/constants";

const Footer = () => {
  return ( 
    <footer className="flex flex-col text-black-100 border-t border-gray-200 mt-5">

      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">

        <div className="flex flex-col items-start justify-start gap-6">
          <Image 
            src='/logo.svg'
            className="object-contain"
            height={18}
            width={118}
            alt="logo-image"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserverd &copy;
          </p>
        </div>

        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((item) => (
            <div key={item.title} className="flex flex-col gap-6 text-base min-w-[170px]">
              <h3 className="font-bold">{item.title}</h3>
              <ul>  
                {item.links.map((link) => (
                  <Link href={link.url} key={link.title}>
                    <li className="text-gray-500 my-2">{link.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      <div className="flex flex-col sm:flex-row justify-between sm:items-center items-start flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>
          &copy;2023 Carhub. All rights reserved
        </p>
        <div className="flex-1 flex sm:justify-end justify-start max-sm:mt-4 gap-10">
          <Link href='/' className="text-gray-500">Privacy & Policy</Link>
          <Link href='/' className="text-gray-500">Terms & Conditions</Link>
        </div>
      </div>
      
    </footer>
  );
}
 
export default Footer;