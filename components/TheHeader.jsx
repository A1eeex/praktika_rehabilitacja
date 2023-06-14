"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import dripBarImg from "../public/drip-bar-logo.png"

import { usePathname } from 'next/navigation'

import logo from "../img/logo-praktika.svg"
  const Header = () => {
  const pathname  = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const MY_HEADER_WRAP = "myHeaderWrap"
    useEffect(() => {
      const handleScroll = () => {
        const headerHeight = document.querySelector(`#${MY_HEADER_WRAP}`).offsetHeight;
        const scrollPosition = window.scrollY || window.pageYOffset;
        setScrolled(scrollPosition>(headerHeight * 0.3));
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, [scrolled]);

  return (
    <>
      <header>
        <div id={MY_HEADER_WRAP} className="fixed w-full z-40">
         <div className={`hidden bg-gray-200 my-0 p-0 lg:flex`}>
            <div className="container m-auto flex items-center justify-between p-3">
              <div className="flex items-center justify-start w-1/2 gap-5">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e5097f" className="w-4 h-4 mr-1">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  <Link className="link_hover" href="mailto:rejestracja@praktika-rehabilitacja.pl"> rejestracja@praktika-rehabilitacja.pl</Link>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e5097f" className="w-4 h-4 mr-1">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  <Link className="link_hover" href="tel:173070677"> 17 307 06 77</Link> 
                </div> 
              </div> 
              <div className="w-1/2 flex justify-end items-end">
                <Link className="pr-3" href='https://www.facebook.com/Praktika.Rehabilitacja/'>
                <svg
                  className="w-5 h-5 text-blue-600 fill-current link_hover"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </Link>
              </div>
            </div>
          </div>
          <div className={`${scrolled? "bg-header-bg-color border-b-2 border-main-color": 'bg-transparent'} `}>
            <nav className={` ${isOpen? "bg-main-bg-color" : ""} right-0 top-0 left-0 z-50 p-4 container mx-auto flex items-center justify-between flex-wrap lg:p-3`}>
              <div className="flex p-1 items-center flex-shrink-0 text-main-color mr-2 lg:mr-2">
                <Link href={'/'} className={`${scrolled? "w-20 lg:w-20": 'w-20 lg:w-36'}   hover:opacity-80 transition-all duration-300 ease-linear`}>
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
                    className={`header-link ${pathname ==='/'?'text-main-color font-bold':''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Strona Głuwna
                  </Link>
                  <Link
                    href="/offer"
                    className={`header-link ${pathname ==='/offer'?'text-main-color font-bold':''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Oferta
                  </Link>
                  <Link
                    href="/price-list"
                    className={`header-link ${pathname ==='/price-list'?'text-main-color font-bold':''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Cennik
                  </Link>
                  <Link
                    href="/contact"
                    className={`header-link ${pathname ==='/contact'?'text-main-color font-bold':''}`}
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
        </div>
        
              
      </header>
    </>
  );
};

export default Header;
