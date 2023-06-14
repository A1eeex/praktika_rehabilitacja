import HeaderImg from "@/components/HeaderImg";
import NfzInfoBaner from "@/components/NfzInfoBaner";
import PriceList from "@/components/PriceList";

const PriceListPage = () => {
    return (
        <>
          <HeaderImg
            pageTitlePage={"Cennik "}
            pageTitlePage2={"usług rehabilitacyjnych"}
            pageTitlePageMainColor={true}
          />
          <PriceList/>
          <NfzInfoBaner/>
        </>
      );
}
 
export default PriceListPage;