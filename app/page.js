"use client"
import {HeroBase} from "@/components/HeroBase";
import PolandMap from "@/components/PolandMap";
import heroMain1 from "../img/main_hero_img_1.svg";
import heroMain2 from "../img/main_hero_img_2.svg";
import {MInfoBanerText} from "@/components/InfoBanerText";
import HeaderImg from "@/components/HeaderImg";

import { motion } from "framer-motion";
import { MNfzInfoBaner } from "@/components/NfzInfoBaner";
const animationHomeComponent = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: custom =>({
    y: 0,
    opacity: 1,
    transition: {delay: custom * 0.2}
 }),
}
export default function Home() {
  return (
    <motion.div
      initial ="hidden"
      whileInView="visible"
      viewport={{amount: 0.9, once: true }}
    >
      <HeaderImg isMainPage={true}/>
      <PolandMap/>
      <HeroBase
        isTextFirst={true}
        changePaddingY='pb-24 pt-8'
        titleT={"O nas"}
        description={`<span class="font-bold">Rehabilitacja Medyczna</span> <span class="font-bold text-main-color">Praktika </span> <span class="font-bold">w Rzeszowie</span> świadczy kompleksowe usługi
                      z zakresu rehabilitacji medycznej w systemie ambulatoryjnym. Mając świadomość nasycenia 
                      lokalnego rynku rehabilitacji, wyposażyliśy ośrodek w najnowoczesniejszy sprzęt, którego 
                      nie posiada większość gabinetów w naszym mieście.
                    `}
        description2={`Jesteśmy młodym, ambitnym i zgranym zespołem fizjoterapeutów
                      składającym się z indywidualnych jednostek, z których każda pasjonuje się inną dziedziną rehabilitacji, a swoją pracę opieramy 
                      na czterech filarach: powszechności, kompleksowości, wczesności i ciągłości.
                     `}
        image={heroMain1}
      />
      <motion.div
        initial ="hidden"
        whileInView="visible"
        viewport={{amount: 0.3, once: true}}
      >
        <MNfzInfoBaner variants={animationHomeComponent}/>
      </motion.div>
      <HeroBase
        isTextFirst={false}
        titleT={"Nasza Oferta"}
        description={`Świadczone przez nas usługi bazują na nowoczesnych 
                      metodach pracy z pacjentem, takich jak kinesiotaping,
                      koncepcja terapii obrzękowej, kinezyterapia miejscowa i ogólnoustrojowa, 
                      terapia punktów spustowych, PNF i nie tylko. Mamy możliwość wspomagania terapii
                      manualnej zabiegami z zakresu fizykoterapii, takimi jak elektroterapia, hydroterapia, 
                      krioterapia (ciekły azot), magnetoterapia, światłolecznictwo czy ultradźwięki.
                    `}
        image={heroMain2}
        descriptionLinkHref={'#'}
        descriptionLinkText={'Zachęcamy do zapoznania się z naszą'}
        descriptionLink={'pełną ofertą.'}
      />
      <motion.div
        initial ="hidden"
        whileInView="visible"
        viewport={{amount: 0.3, once: true}}
      >
        <MInfoBanerText variants={animationHomeComponent}/>
      </motion.div>
    </motion.div>
  );
}
