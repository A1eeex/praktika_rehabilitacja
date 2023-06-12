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
      <header>
        <dir className="hidden bg-gray-200 my-0 p-0 lg:flex">
          <dir className="container m-auto flex items-center justify-between p-3">
            <div className="flex items-center justify-start w-1/2 gap-5">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#e5097f" className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <Link className="link_hover" href="mailto:rejestracja@praktika-rehabilitacja.pl"> rejestracja@praktika-rehabilitacja.pl</Link>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#e5097f" className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <Link className="link_hover" href="tel:173070677"> 17 307 06 77</Link> 
              </div> 
            </div> 
            <div className="w-1/2 flex justify-end items-end">
              <Link className="pr-3" href='https://www.facebook.com/Praktika.Rehabilitacja/'>
              <svg
                className="w-5 h-5 text-blue-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </Link>
            </div>
          </dir>
        </dir>
        <div className="bg-main-bg-color">
          <nav className="  right-0 top-0 left-0 z-50 p-4 container mx-auto flex items-center justify-between flex-wrap lg:p-3">
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
                  href="/price-list"
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
        </div>
      </header>
    </>
  );
};

export default Header;
