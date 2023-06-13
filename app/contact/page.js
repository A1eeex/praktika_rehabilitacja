import React from "react";
import InfoBanerText from "@/components/InfoBanerText";
import HeaderImg from "@/components/HeaderImg";

const contactPage = () => {
  return (
    <>
      <HeaderImg
        pageTitlePage={"Informacje "}
        pageTitlePage2={"kontaktowe"}
        pageTitlePageMainColor2={true}
      />

      <h1>Rehabilitacja Medyczna Praktika Malik Spółka Jawna</h1>
      <InfoBanerText />
    </>
  );
};

export default contactPage;
