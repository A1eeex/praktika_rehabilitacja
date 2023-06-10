import Image from "next/image";
import NfzLogo from '../img/nfz_logo.svg'
const NfzInfoBaner = () => {
    return ( 
        <section className="bg-main-bg-color p-12">
            <div className=" flex-col  container mx-auto items-center lg:flex lg:flex-row">
                <div className="w-4/5 m-auto lg:w-1/4"> 
                    <Image
                        className="object-cover object-center rounded w-full"
                        alt="nfz_logo"
                        src={NfzLogo}
                    />
                </div> 
                <div className="w-full text-center mt-8 text-white font-bold text-3xl lg:w-3/4 lg:text-end lg:mt-0"> 
                    <h3>Wykonujemy zabiegi refundowane przez 
                        <span className="block text-main-color">Narodowy Fundusz Zdrowia</span>
                    </h3>  
                </div> 
            </div>
        </section> 
    );
}
 
export default NfzInfoBaner;