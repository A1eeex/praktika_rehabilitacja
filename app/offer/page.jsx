"use client"
import HeaderImg from "@/components/HeaderImg";
import {MHeroBase} from "@/components/HeroBase";
import {NfzInfoBaner} from "@/components/NfzInfoBaner";
import {MHeroOffer} from "@/components/HeroOffer";
import heroMain1 from "../../img/offer_hero_img.svg";
// import heroOfferImg1 from "../../img/offer/hero-offer-1.jpg";
// import heroOfferImg2 from "../../img/offer/hero-offer-2.jpg";
// import heroOfferImg3 from "../../img/offer/hero-offer-3.jpg";
// import heroOfferImg4 from "../../img/offer/hero-offer-4.jpg";
import DontDelay from "@/components/DontDelay";
import OlsoServicesOffer from "@/components/OlsoServicesOffer";
import ServicesOffer from "@/components/ServicesOffer";
import { motion } from "framer-motion";

const animationHeroBaseComponent = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: custom =>({
    y: 0,
    opacity: 1,
    transition: {delay: custom * 0.1, type: "spring",  duration: 0.8}
 }),
}
const animationHeroOfferCmponentLeft = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: custom =>({
    y: 0,
    opacity: 1,
    transition: {delay: custom * 0.4, type: "spring",  duration: 0.8}
 }),
}
const animationHeroOfferCmponentRight = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: custom =>({
    y: 0,
    opacity: 1,
    transition: {delay: custom * 0.4}
 }),
}
const OfferPage = () => {
    return (
      <motion.div 
        initial ="hidden"
        whileInView="visible"
        viewport={{once: true }}
      >

          <HeaderImg
            pageTitlePage={"Oferta "}
            pageTitlePage2={"usług "}
            pageTitlePageMainColor={true}
          />
          <MHeroBase
            variants={animationHeroBaseComponent}
            isTextFirst={true}
           
            description={`<span class="font-bold">Rehabilitacja Medyczna</span> <span class="font-bold text-main-color">Praktika </span> 
                          zaprasza pacjentów po różnego rodzaju operacjach
                          ortopedycznych oraz urazach, jak i osoby przygotowujące się do zabiegu chirurgicznego.
                          <span class="font-bold"> Wczesna rehabilitacja po zabiegach chirurgicznych </span> zapobiega wystąpieniu trwałych
                          przykurczy i zmian w tkankach, które mają wpływ na funkcjonowanie stawów i mięśni oraz
                          na postawę ciała.
                        `}
            description2={`Bardzo ważne są również ćwiczenia stabilizacji i czucia
                           głębokiego zarówno przed, jak i po zabiegach. <span class="font-bold">Ćwiczenia </span> stabilizacji trzymają
                           mięśnia i stawy w odpowiedniej pozycji w trakcie ruchu, wpływają na odpowiednie
                           napięcie danych mięśni i struktur potrzebne do wykonania odpowiedniego ruchu.
                           Korygują wadliwe napięcie struktur kurczliwych.
                        `}
            image={heroMain1}
          />
          <ServicesOffer
            title={'Już teraz w naszej ofercie:'}
          />
          <OlsoServicesOffer
            title={'W naszej ofercie znajdują się również następujące usługi:'}
          />
          <DontDelay/>
          <h2 className="text-center font-bold text-3xl m-auto my-12">Chcesz wiedzieć więcej?</h2>
          <motion.div
            initial ="hidden"
            whileInView="visible"
            viewport={{amount: 0.5, once: true }}
          >
            <MHeroOffer
              variants={animationHeroOfferCmponentLeft}
              isTextFirst={true}
              title={'Rehabilitacja'}
              listOffer={`
                          <li>Po zabiegach na stawie kolanowym: artroskopia, więzadła krzyżowe, łąkotki, endoprotezoplasyka</li>
                          <li>Po operacji kręgosłupa</li>
                          <li>Po złamaniach</li>
                          <li>Po zwichnięciach i skręceniach</li>
                          <li>Po zabiegach operacyjnych korekcyjnych</li>
                          <li>Po zdjęciu gipsu</li>
                        `}
              image={'/hero-offer-1.jpg'}
            />
          </motion.div>
          <motion.div
            initial ="hidden"
            whileInView="visible"
            viewport={{amount: 0.5, once: true }}
          >
            <MHeroOffer
              variants={animationHeroOfferCmponentRight}
              isTextFirst={false}
              title={'Unieruchomienie'}
              description={`Tradycyjne leczenie po urazie sportowym to właściwie unieruchomienie na kilka 
                            tygodni uszkodzonego miejsca, najczęściej w gipsie lub bandażu, a potem stopniowy,
                            raczej powolny powrót do aktywności sprzed urazu. Jednak osoby, które kiedykolwiek 
                            nosiły gips, wiedzą, że już po tym krótkim czasie „bezruchu” zauważalny jest spadek 
                            formy i osłabienie mięśni znajdujących się w unieruchomieniu. Oczywiście, dla kogoś kto
                            trenuje tylko okazjonalnie lub wcale, taki dłuższy powrót do zdrowia, nie zrobi dużej 
                            różnicy. Ale już dla wszystkich uprawiających sport wyczynowo oraz dla tych, którzy 
                            niełatwo pogodzą się ze spadkiem formy, kilka tygodni bezczynności może być nie do 
                            przyjęcia.
                          `}
              image={'hero-offer-2.jpg'}
            />
          </motion.div>
          <motion.div
            initial ="hidden"
            whileInView="visible"
            viewport={{amount: 0.5, once: true }}
          >
            <MHeroOffer
              variants={animationHeroOfferCmponentLeft}
              isTextFirst={true}
              title={'Medycyna sportowa'}
              description={`Medycyna sportowa kieruje się trochę innymi zasadami niż zwykła medycyna – przede 
                            wszystkim obowiązuje tu aktywne działanie zamiast cierpliwego wyczekiwania. Wykonuje się dużo 
                            więcej zabiegów i operacji, korzysta się z najnowszych technik fizjoterapii. Niestety, za to 
                            się płaci i to słono. Jednak w dzisiejszych czasach najnowocześniejsza opieka sportowa 
                            nie jest już zarezerwowana tylko dla piłkarzy najlepszych europejskich klubów. Specjalistyczne 
                            kliniki medycyny sportowej i rehabilitacji znajdują się w całym kraju.
                          `}
              image={'hero-offer-3.jpg'}
            />
          </motion.div>
          <motion.div
            initial ="hidden"
            whileInView="visible"
            viewport={{amount: 0.5, once: true }}
          >
            <MHeroOffer
              variants={animationHeroOfferCmponentRight}
              isTextFirst={false}
              title={'Masaże i inne metody'}
              description={`Podstawową zasadą nowoczesnej rehabilitacji jest jak najszybszy możliwy powrót do 
                            wykonywania aktywności fizycznej. Oczywiście wszystko w granicach rozsądku; nikt nie będzie kazał
                            choremu biegać ze złamaną nogą. Ale większość działań po urazach sportowych nastawiona jest 
                            na „uruchomienie” uszkodzonego miejsca. W miarę możliwości może to być ruch aktywny lub pasywny. 
                            Technikami stosowanymi w leczeniu są masaże, kinezyterapia lub fizykoterapia. Jeśli uraz tego 
                            wymaga, lekarze mogą również zaproponować leczenie operacyjne. Ważne jest, aby zasięgnąć opinii 
                            na temat danej kliniki, zanim poddamy się leczeniu.
                          `}
              image={'hero-offer-4.jpg'}
            />
          </motion.div>
          <NfzInfoBaner/>

        </motion.div>
      );
}
 
export default OfferPage;