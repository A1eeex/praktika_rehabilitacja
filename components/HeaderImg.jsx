"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import bg_header from "../img/background_header.jpg";
import Link from "next/link";

const HeaderImg = ({
  isMainPage,
  pageTitlePage,
  pageTitlePage2,
  pageTitlePageMainColor,
  pageTitlePageMainColor2,
}) => {
  const pathname = usePathname();
  return (
    <div
      className={`${isMainPage ? "h-screen" : "h-64"}  w-full relative z-10`}
    >
      {pathname === "/" ? (
        <>
          <Image
            className="absolute top-0 left-0 z-0 w-full h-full object-cover"
            src={bg_header}
            alt="background_header"
          />
          <div className="w-full absolute top-[25%] lg:top-[40%] text-center z-20">
            <h1 className="text-white text-5xl mb-6">
              Rehabilitacja Medyczna{" "}
              <span className="text-main-color">Praktika</span>
            </h1>
            <p className="text-2xl text-center text-white mb-14">
              Fizykoterapia | Terapia manualna | Kinezyterapia | Masaż leczniczy
              | Rehabilitacja w domu pacjenta
            </p>
            <div className="flex flex-col items-center justify-center lg:flex-row gap-7">
                <Link
                    href="/offer" 
                    className="button_solid">
                    Nasza oferta
                </Link>
                <Link 
                    href="/contact" 
                    className="button_transparent">
                    Kontakt
                </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <Image
            className="absolute top-0 left-0 z-0 w-full h-full object-cover"
            src={bg_header}
            alt="background_header"
          />

          <div className="w-full text-center absolute bottom-0 z-20">
            <h1
              className={`${
                pageTitlePageMainColor ? "text-main-color" : "text-white"
              } font-bold py-9 text-5xl`}
            >
              {pageTitlePage}
              <span
                className={`${
                  pageTitlePageMainColor2 ? "text-main-color" : "text-white"
                }`}
              >
                {pageTitlePage2}
              </span>
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default HeaderImg;
