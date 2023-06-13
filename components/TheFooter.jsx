import Link from "next/link";

const TheFooter = () => {
  return (
  <footer className="text-gray-600 body-font">
    <div className="flex flex-col p-12 gap-12 lg:flex-row items-center lg:gap-0">
      <div className="w-full px-1 lg:w-1/3 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e5097f" className="w-8 h-8 m-auto mb-5">
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e5097f" className="w-8 h-8 m-auto mb-5">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e5097f" className="w-8 h-8 m-auto mb-5">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
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


