"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import dripBarImg from "../public/drip-bar-logo.png"
// import { useRouter } from 'next/router'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const router = useRouter();
  // const isHomePage = router.pathname === '/contact';
  // const containerClassName = isHomePage ? 'home-page' : '';
  return (
    <>
      <header className="bg-main-bg-color  right-0 top-0 left-0 z-50">
        <nav className="p-4 container mx-auto flex items-center justify-between flex-wrap lg:p-3">
          <div className="flex p-1 items-center flex-shrink-0 text-main-color mr-2 lg:mr-2">
            Logo
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-main-color hover:text-black-400"
            >
              <svg
                className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
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
                href="#"
                className="header-link"
              >
                Strona Głuwna
              </Link>
              <Link
                href="#"
                className="header-link"
              >
                Oferta
              </Link>
              <Link
                href="#"
                className="header-link"
              >
                Cennik
              </Link>
              <Link
                href="#"
                className="header-link"
              >
                Kontakt
              </Link>
            </div>
            <div>
              <Image
                src={dripBarImg} // Путь к изображению (без "/public")
                alt="drip-bar" // Альтернативный текст для изображения
                width={130} // Ширина изображения
                height={50} // Высота изображения
              />
            </div>
          </div>
        </nav>
      </header>
      {/* <div className={containerClassName}>
        ButtomHeader
      </div> */}
    </>
  );
};

export default Header;
