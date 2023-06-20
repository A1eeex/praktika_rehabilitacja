/* eslint-disable react/display-name */
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { forwardRef } from "react";
export const HeroBase = forwardRef(({ titleT, titleB, description, description2, image, isTextFirst, descriptionLinkHref, descriptionLinkText, descriptionLink, changePaddingY},ref) => {
  return (
    <section ref={ref} className="text-gray-600 body-font">
      <div className={`container mx-auto flex px-5 ${changePaddingY ? changePaddingY : 'py-24'} md:flex-row flex-col items-center`}>
        {isTextFirst ? (
          <>
            <div className=" lg:flex-grow md:w-1/2 lg:pr-20 md:pr-14 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
             {titleT ? 
                  (
                    <h1 className="w-full flex items-center justify-center title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-900">
                      {titleT}
                      <br className="hidden lg:inline-block" />
                      {titleB}
                  </h1>
                  ) : 
                  (
                    " "
                  )
              }              
              <div className="relative pl-10 pb-10">
                {/* <p className="mb-4 leading-relaxed">{description}</p> */}
                <p className="mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />



                {description2 ? 
                  (
                    <p className="mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: description2 }} />
                  ) : 
                  (
                    " "
                  )
                }
                <div className="flex justify-start">
                  {descriptionLinkHref ?
                    (
                      <p className="mb-0">{descriptionLinkText} <Link className="text-main-color font-bold" href={descriptionLinkHref} alt={descriptionLink}>{descriptionLink}</Link></p>
                    ):
                    (
                      ""
                    )
                  }
                </div>
                <div className="deco-vertical absolute w-1 h-32 bg-main-color top-0 left-0"></div>
                <div className="deco-horizontal absolute w-32 h-1 bg-main-color bottom-0 right-0"></div>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                className="object-cover object-center rounded w-full"
                alt="hero1"
                src={image}
              />
            </div>
          </>
        ) : (
          <>
            <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                className="object-cover object-center rounded w-full"
                alt="hero1"
                src={image}
              />
            </div>
            <div className="lg:pl-20 md:pl-14 lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              {titleT ? 
                (
                  <h1 className="w-full flex items-center justify-center title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-900">
                    {titleT}
                    <br className="hidden lg:inline-block" />
                    {titleB}
                  </h1>
                ) : 
                (
                  " "
                )
              }
              <div className="relative pr-10 pb-10">
                <p className="mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
                {description2 ? 
                  (
                    <p className="mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: description2 }} />
                  ) : 
                  (
                    ""
                  )
                }
                <div className="flex justify-start">
                  {descriptionLinkHref ?
                      (
                        <p>{descriptionLinkText} <Link className="text-main-color font-bold" href={descriptionLinkHref} alt={descriptionLink}>{descriptionLink}</Link></p>
                      ):
                      (
                        ""
                      )
                  }
                </div>
                <div className="deco-vertical absolute w-1 h-32 bg-main-color top-0 right-0"></div>
                <div className="deco-horizontal absolute w-32 h-1 bg-main-color bottom-0 left-0"></div>
              </div>  
            </div>
          </>
        )}
      </div>
    </section>
  );
});
export const MHeroBase = motion(HeroBase);