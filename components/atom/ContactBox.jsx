import React from 'react';
import Link from "next/link";
const ContactBox = ({city, hrefAddress, addresStr, addresCode, phone1Href, phone1, phone2, phone2Href, mail, openDays, openHours, iframeMapSrc}) => {
    return (
        <div className="mt-14">
        <h3 className="text-2xl font-bold mb-6">
            {city}          
        </h3>
        <div className="w-full flex flex-col justify-center gap-4 lg:flex-row">
          <Link
            className="flex flex-row w-full px-2 lg:w-1/5"
            href={hrefAddress}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#e5097f"
              className="w-5 h-5 mr-4"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <div className="font-bold mb-1">Adres</div>
              <address className="link_hover">
                <div className="text-start">{addresStr}</div>
                <div className="text-start">{addresCode}</div>
              </address>
            </div>
          </Link>
        
          <div className="flex flex-row w-full px-2 lg:w-1/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#e5097f"
              className="w-5 h-5 mr-4"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>

            <div>
              <div className="font-bold mb-1">Telefon</div>
              <Link className="link_hover" href={`tel:${phone1Href}`}>
                {phone1}
              </Link>
              {phone2 ? 
              (<>
                <Link className="link_hover block"href={`tel:${phone2Href}`}>
                    {phone2}
                </Link>
              </>)
              :
              ""
              }
              
            </div>
          </div>
          <div className="flex flex-row w-full px-2 lg:w-[30%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#e5097f"
              className="w-5 h-5 mr-4"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <div>
              <div className="font-bold mb-1">E-mail</div>
              <Link
                className="link_hover "
                href={`mailto:${mail}`}
              >
                {" "}
                {mail}
              </Link>
            </div>
          </div>
          <div className="flex flex-row w-full px-2 lg:w-[30%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#e5097f"
              className="w-5 h-5 mr-4"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <div className="font-bold mb-1">Godziny otwarcia</div>
              <div className="text-start">{openDays}</div>
              <div className="text-start">{openHours}</div>
            </div>
          </div>
        </div>
        <iframe
          src={iframeMapSrc}
          width="800"
          height="250"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full mt-5"
        />
      </div>
    );
};

export default ContactBox;