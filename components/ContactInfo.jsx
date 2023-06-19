
const ContactInfo = ({address, mail, phone1, phone2, openHourseTitle, openHourseTime}) => {
    return (      
      <div className='flex flex-col gap-3'>
        {/* Address */}
        <div className='flex items-center text-base font-bold'>
        <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#e5097f"
              className="w-5 h-5 min-w-[18px] mr-3"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
        {address}
        </div>
        {/* Email */}
        <div className='flex items-center text-base font-bold'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e5097f" className="w-5 h-5 min-w-[18px] mr-3">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          <div className="w-full overflow-wrap-break-word break-words">
            <a className="link_hover" href={`mailto:${mail}`}>{mail}</a>
          </div>
          
        </div>
        {/* Phone */}
        <div className='flex items-start  flex-col text-base font-bold'>
          <div className="flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e5097f" className="w-5 h-5 min-w-[18px] mr-3">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            <a className="link_hover" href={`tel:${phone1.replace(/\s/g, '')}`}>{phone1}</a> 
            
          </div>
          
          {phone2 && (
            <div className="flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="transparent" className="w-5 h-5 min-w-[18px] mr-3">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>                 
              <a className="link_hover" href={`tel:${phone2.replace(/\s/g, '')}`}>{phone2}</a> 
            </div>
            
          )}
        </div>
        {/* Opening Hours */}
        <div className='flex items-start flex-col text-base font-bold'>
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e5097f" className="w-5 h-5 min-w-[18px] mr-3">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
            </svg>
            {openHourseTitle}   
          </div>
              

          <div className='flex items-center text-base font-bold'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 min-w-[18px] mr-3 text-transparent">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {openHourseTime}            
          </div>

        </div>
        
      </div>        
    );
};

export default ContactInfo;