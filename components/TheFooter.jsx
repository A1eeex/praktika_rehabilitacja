import Link from "next/link";

const TheFooter = () => {
  return (
  <footer className="text-gray-600 body-font">
    <div className="container m-auto flex flex-col p-12 gap-12 lg:flex-row items-center lg:gap-0">
      <div className="w-full px-1 lg:w-1/4 ">
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
      <div className="w-full px-1 lg:w-1/4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e5097f" className="w-8 h-8 m-auto mb-5">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
        </svg>

        <div className="">
          <div className="text-center font-bold">Rejestracja</div>
          <div className="text-center">Tel: 
            <a className="link_hover" href="tel:173070677"> 17 307 06 77</a>
          </div>
          <div className="text-center">E-mail:
            <a className="link_hover" href="mailto:rejestracja@praktika-rehabilitacja.pl"> rejestracja@praktika-rehabilitacja.pl</a>
          </div>
        </div>  
      </div>
      <div className="w-full px-1 lg:w-1/4">
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
      <div className="w-full px-1 lg:w-1/4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#e5097f" className="w-8 h-8 m-auto mb-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>

        <div className="">
          <div className="text-center font-bold">Media społecznościowe</div>
          <div className="flex items-center justify-center px-3 gap-3 mb-2">
            <div>Facebook: </div> 
            <Link target="_blank" className="" href='https://www.facebook.com/Praktika.Rehabilitacja/'>
              <svg 
                className="w-7 h-7 link_hover"
                fill="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true">
                <path fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd">
                </path>
              </svg>
            </Link>
          </div>
          <div className="flex items-center justify-center px-3 gap-3">
            <div>Instagram: </div> 
            <Link target="_blank" className="" href='https://www.instagram.com/praktika_rehabilitacja/?fbclid=IwAR1OhZjEyY82tbm45Byc3CUUFCAQiJjtKz8mULsq4aU0RwvtIcnwGq7XQGU'>
              <svg 
                className="w-7 h-7 link_hover" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true">
                <path fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd">
                </path>
              </svg>
            </Link>
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


