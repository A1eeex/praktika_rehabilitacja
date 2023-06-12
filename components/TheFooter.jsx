import Link from "next/link";

const TheFooter = () => {
  return (
  <footer className="text-gray-600 body-font">
    <div className="flex flex-col p-12 gap-12 lg:flex-row items-center lg:gap-0">
      <div className="w-full px-1 lg:w-1/3 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#e5097f" className="w-8 h-8 m-auto mb-5">
          <path  className="" strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        <address>
          <div className="text-center font-bold">Rehabilitacja Medyczna <span className="text-main-color">Praktika</span></div>
          <Link className="link_hover" href='https://www.google.com/maps/place/Fryderyka+Szopena+25A,+35-055+Rzesz%C3%B3w/@50.0338669,22.0072028,3a,75y,179.16h,90t/data=!3m6!1e1!3m4!1sn5Ajk1TF0SA88VM_6SRDVw!2e0!7i16384!8i8192!4m7!3m6!1s0x473cfafeff7917bb:0xc83b43dc05b798ef!8m2!3d50.0336435!4d22.0071869!10e5!16s%2Fg%2F11c5lyjz_7?entry=ttu'>
            <div className="text-center">ul. Szopena 25a/1L</div>
            <div className="text-center">35-055 Rzeszów</div>
          </Link>
        </address>  
      </div>
      <div className="w-full px-1 lg:w-1/3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#e5097f" className="w-8 h-8 m-auto mb-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>

        <div className="">
          <div className="text-center font-bold">Rejestracja</div>
          <div className="text-center">Tel: 
            <Link className="link_hover" href="tel:173070677"> 17 307 06 77</Link>
          </div>
          <div className="text-center">E-mail:
            <Link className="link_hover" href="mailto:rejestracja@praktika-rehabilitacja.pl"> rejestracja@praktika-rehabilitacja.pl</Link>
          </div>
        </div>  
      </div>
      <div className="w-full px-1 lg:w-1/3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#e5097f" className="w-8 h-8 m-auto mb-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
        <div className="">
          <div className="text-center font-bold">Godziny otwarcia</div>
          <div className="text-center">
            Od poniedziałku do piątku
          </div>
          <div className="text-center">
            8.30 – 19.00
          </div>
        </div>  
      </div>
    </div>
    <div className="bg-gray-200">
      <div className="container m-auto flex flex-col items-center text-xs p-3 lg:flex-row">
      <div className="w-full text-center mb-2 lg:w-1/2 lg:text-start lg:mb-0">
          &copy;Rehabilitacja Medyczna <span className="text-main-color font-bold">Praktika</span>  | Wszelkie prawa zastrzeżone 
        </div>
        <div className="w-full text-center lg:w-1/2 lg:text-end">
          <span className="text-main-color font-bold">Realizacja: </span>Oleksandr Petrovskyi
        </div>

      </div>
    </div>
  </footer>
  );
};

export default TheFooter;


