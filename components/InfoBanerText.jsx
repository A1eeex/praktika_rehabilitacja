/* eslint-disable react/display-name */
"use client"
import { motion } from "framer-motion";
import { forwardRef } from "react";
export const InfoBanerText = forwardRef((prop,ref) => {
    return ( 
        <section ref={ref} className="bg-main-bg-color p-12">
            <div className="container mx-auto items-center lg:flex lg:flex-row">                
                <div className="w-full text-center mt-8 text-white font-bold text-3xl lg:mt-0"> 
                    <h3 className="text-center"> “ <span className="text-main-color">Ruch</span> zastąpi prawie każdy lek, 
                        <span className="block">podczas gdy żaden lek nie zastąpi ruchu”</span>             
                        <span className="block text-end text-base mt-2 text-main-color">dr Wojciech Oczko</span>
                    </h3>  
                </div> 
            </div>
        </section> 
    );
});
 
export const MInfoBanerText = motion(InfoBanerText)