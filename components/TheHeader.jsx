"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';

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
                  <a className="link_hover" href="mailto:rejestracja@praktika-rehabilitacja.pl"> rejestracja@praktika-rehabilitacja.pl</a>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e5097f" className="w-4 h-4 mr-1">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  <a className="link_hover" href="tel:173070677"> 17 307 06 77</a> 
                </div> 
              </div> 
              <div className="w-1/2 flex justify-end items-end gap-3">
                <Link target="_blank" className="" href='https://www.facebook.com/Praktika.Rehabilitacja/'>
                  <svg 
                    className="w-7 h-7 link_hover"
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true">
                    <path fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd">
                    </path>
                  </svg>
                </Link>
                <Link target="_blank" className="" href='https://www.instagram.com/praktika_rehabilitacja/?fbclid=IwAR1OhZjEyY82tbm45Byc3CUUFCAQiJjtKz8mULsq4aU0RwvtIcnwGq7XQGU'>
                  <svg 
                    className="w-7 h-7 link_hover" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true">
                    <path fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd">
                    </path>
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
                    Strona Główna
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
                  <Link
                    href="/other"
                    className={`header-link ${pathname ==='/other'?'text-main-color font-bold':''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Inne
                  </Link>
                </div>
                {/* <div>
                  <Image
                    src={dripBarImg} 
                    alt="drip-bar" 
                    width={130} 
                    height={50} 
                  />
                </div> */}
              </div>
            </nav>
          </div>
        </div>
        
              
      </header>
    </>
  );
};

export default Header;
