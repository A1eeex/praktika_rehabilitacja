import HeaderImg from "@/components/HeaderImg";
import HeroBase from "@/components/HeroBase";
import NfzInfoBaner from "@/components/NfzInfoBaner";
import heroMain1 from "../../img/offer_hero_img.svg";
const OfferPage = () => {
    return (
        <>

          <HeaderImg
            pageTitlePage={"Oferta "}
            pageTitlePage2={"usług "}
            pageTitlePageMainColor={true}
          />
          <HeroBase
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
          <NfzInfoBaner/>
        </>
      );
}
 
export default OfferPage;