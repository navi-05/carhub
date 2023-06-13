'use client'

import Image from "next/image";
import Link from "next/link";

import Button from "./Button";

const Navbar = () => {
  return ( 
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image 
            alt="logo-image"
            src="/logo.svg"
            height={18}
            width={118}
            className="object-contain"
          />
        </Link>
        <Button
          className="text-primary-blue rounded-full bg-white min-w-[130px]"
        >
          Sign In
        </Button>
      </nav>
    </header>
  );
}
 
export default Navbar;