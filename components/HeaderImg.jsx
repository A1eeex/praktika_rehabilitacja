"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import bg_header from "../img/background_header.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: custom =>({
    y: 0,
    opacity: 1,
    transition: {delay: custom * 0.2}
 }),
}
const HeaderImg = ({
  isMainPage,
  pageTitlePage,
  pageTitlePage2,
  pageTitlePageMainColor,
  pageTitlePageMainColor2,
}) => {
  const pathname = usePathname();
  return (
    <motion.div
      initial ="hidden"
      whileInView="visible"
      className={`${isMainPage ? "h-screen min-h-[550px]" : "h-64"}  w-full relative z-10`}
    >
      {pathname === "/" ? (
        <>
          <Image
            className="absolute top-0 left-0 z-0 w-full h-full object-cover"
            src={bg_header}
            alt="background_header"
          />
          <div className="w-full absolute top-[25%] lg:top-[40%] text-center z-20">
            <motion.h1 custom={1} variants={textAnimation} className="text-white text-5xl mb-6">
              Rehabilitacja Medyczna{" "}
              <span className="text-main-color">Praktika</span>
            </motion.h1>
            <motion.p custom={2} variants={textAnimation} className="text-2xl text-center text-white mb-14">
              Fizykoterapia | Terapia manualna | Kinezyterapia | Masaż leczniczy
              | Rehabilitacja w domu pacjenta
            </motion.p>
            <motion.div custom={3} variants={textAnimation} className="flex flex-col items-center justify-center lg:flex-row gap-7">
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
            </motion.div>
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
                pageTitlePageMainColor ? "text-main-color" : "text-white"}
                text-3xl font-bold py-9 lg:text-5xl 
              `}
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
    </motion.div>
  );
};

export default HeaderImg;
