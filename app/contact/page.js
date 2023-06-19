import React from "react";
import InfoBanerText from "@/components/InfoBanerText";
import HeaderImg from "@/components/HeaderImg";
import ContactMain from "@/components/ContactMain";

const contactPage = () => {
  return (
    <>
      <HeaderImg
        pageTitlePage={"Informacje "}
        pageTitlePage2={"kontaktowe"}
        pageTitlePageMainColor2={true}
      />

      <ContactMain/>
      <InfoBanerText />
    </>
  );
};

export default contactPage;
