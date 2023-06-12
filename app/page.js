import HeroBase from "@/components/HeroBase";
import PolandMap from "@/components/PolandMap";
import heroMain1 from "../img/main_hero_img_1.svg";
import heroMain2 from "../img/main_hero_img_2.svg";
import NfzInfoBaner from "@/components/NfzInfoBaner";
import InfoBanerText from "@/components/InfoBanerText";
export default function Home() {
  return (
    <>
      <PolandMap />
      <HeroBase
        isTextFirst={true}
        changePaddingY='pb-24 pt-8'
        titleT={"O nas"}
        description={`Rehabilitacja Medyczna Praktika w Rzeszowie świadczy kompleksowe usługi
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
      <NfzInfoBaner/>
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
      <InfoBanerText/>
    </>
  );
}
