import React from "react";
import InfoBanerText from "@/components/InfoBanerText";
import HeaderImg from "@/components/HeaderImg";
import Contact from "@/components/Contact";

const contactPage = () => {
  return (
    <>
      <HeaderImg
        pageTitlePage={"Informacje "}
        pageTitlePage2={"kontaktowe"}
        pageTitlePageMainColor2={true}
      />

      <Contact/>
      <InfoBanerText />
    </>
  );
};

export default contactPage;
