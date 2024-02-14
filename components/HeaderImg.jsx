"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import AnchorLink from "./atom/AnchorLink";

const arrowDownIcon = (<svg width="25px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 4V20M12 20L8 16M12 20L16 16" stroke="#e5097f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
)
const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1, type: "spring", duration: 0.8 }
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`${isMainPage ? "h-screen min-h-[550px]" : "h-64"}  w-full relative z-10`}
    >
      {pathname === "/" ? (
        <>
          <img
            className="absolute top-0 left-0 z-0 w-full h-full object-cover"
            src={'/background_header.jpg'}
            alt="background_header"
          />
          <div className="w-full absolute top-[25%] lg:top-[40%] text-center z-20">
            <h1 className="text-white text-5xl mb-6">
              Rehabilitacja Medyczna{" "}
              <span className="text-main-color">Praktika</span>
            </h1>
            <motion.p custom={2} variants={textAnimation} className="text-2xl text-center text-white mb-14">
              Fizykoterapia | Terapia manualna | Kinezyterapia | Masaż leczniczy
              | Rehabilitacja w domu pacjenta
            </motion.p>
            <motion.div custom={3} variants={textAnimation} className="flex items-center justify-center p-4 lg:flex-row gap-7">
              <Link
                href="/offer"
                className="button_solid">
                Nasza oferta
              </Link>
              <Link
                href="/contact"
                className="button_transparent"
              >
                Kontakt
              </Link>
            </motion.div>
            <motion.div custom={4} variants={textAnimation} className="flex items-center justify-center p-4 lg:flex-row gap-7">
              <AnchorLink href="#map_main" offset={94}>
                <p className=" flex items-center justify-center text-white m-0 p-1 border border-solid border-main-color bg-transparent rounded-lg hover:text-main-color transition-all duration-300 ease-linear">
                  Gdzie jesteśmy? {arrowDownIcon}
                </p>
              </AnchorLink>
              {/* <Link
                href="#map_main"
                className="button_solid">
                Gdzie jesteśmy ? {arrowDownIcon}
              </Link> */}

            </motion.div>
          </div>
        </>
      ) : (
        <>
          <img
            className="absolute top-0 left-0 z-0 w-full h-full object-cover"
            src={'/background_header.jpg'}
            alt="background_header"
          />

          <div className="w-full text-center absolute bottom-0 z-20">
            <h1
              className={`${pageTitlePageMainColor ? "text-main-color" : "text-white"}
                text-3xl font-bold py-9 lg:text-5xl 
              `}
            >
              {pageTitlePage}
              <span
                className={`${pageTitlePageMainColor2 ? "text-main-color" : "text-white"
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
