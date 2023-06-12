"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import dripBarImg from "../public/drip-bar-logo.png"
import { usePathname } from 'next/navigation'

import logo from "../img/logo-praktika.svg"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);const pathname  = usePathname();
  
  return (
    <>
      <header className="bg-main-bg-color  right-0 top-0 left-0 z-50">
        <nav className="p-4 container mx-auto flex items-center justify-between flex-wrap lg:p-3">
          <div className="flex p-1 items-center flex-shrink-0 text-main-color mr-2 lg:mr-2">
            <Link href={'/'} className="w-20 lg:w-36 hover:opacity-80 transition-all duration-300 ease-linear">
              <Image src={logo} alt="logo-praktika"></Image>          
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-main-color hover:text-black-400"
            >
              <svg
                className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full flex gap-3 flex-col lg:flex lg:flex-row lg:gap-10 lg:justify-between lg:items-center lg:w-auto ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <div className=" w-auto text-sm flex flex-col gap-3 lg:flex-row lg:gap-10">
              <Link
                href="/"
                className={`header-link ${pathname ==='/'?'text-main-color':''}`}
                onClick={() => setIsOpen(false)}
              >
                Strona Głuwna
              </Link>
              <Link
                href="/offer"
                className="header-link"
                onClick={() => setIsOpen(false)}
              >
                Oferta
              </Link>
              <Link
                href="#"
                className="header-link"
                onClick={() => setIsOpen(false)}
              >
                Cennik
              </Link>
              <Link
                href="/contact"
                className={`header-link ${pathname ==='/contact'?'text-main-color':'yo'}`}
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </Link>
            </div>
            <div>
              <Image
                src={dripBarImg} 
                alt="drip-bar" 
                width={130} 
                height={50} 
              />
            </div>
          </div>
        </nav>
      </header>
      <div className={'test'}>
       
      </div>
    </>
  );
};

export default Header;
