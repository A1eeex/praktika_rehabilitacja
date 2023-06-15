import Image from 'next/image';
import React from 'react';

const HeroOffer = ({title, description, listOffer, image, isTextFirst}) => {
    return (
        <section className="text-gray-600 body-font mb-12">
            <div className={`container bg-white mx-auto flex  ${isTextFirst? "flex-col":"flex-col-reverse"} lg:flex-row`} bis_skin_checked="1">
                {isTextFirst
                    ? 
                    (<>
                        <div className="p-12 w-full lg:w-2/3 flex flex-col justify-center items-center" bis_skin_checked="1">
                            <h3 className='text-center text-3xl mb-6'>{title}</h3>
                            {description
                                ? 
                                (<>
                                    <p className="mb-8 leading-relaxed text-bases">
                                        {description}
                                    </p>
                                </>)
                                : 
                                ""
                            }
                        
                            
                            {listOffer
                                ? 
                                (<>
                                    <ul className="list-disc flex flex-col w-full pl-5" dangerouslySetInnerHTML={{ __html: listOffer }} />
                                </>)
                                : 
                                ""
                            }
                            
                        </div>
                        <div className="relative w-full lg:w-1/3 min-h-[200px] lg:min-h-[350px] border-t-[3px] lg:border-l-[3px] lg:border-t-0 border-solid border-main-color" bis_skin_checked="1">
                            <Image  className="absolute top-0 left-0 z-0 w-full h-full object-cover" alt="hero" src={image}/>
                        </div>
                    </>)
                    : 
                    (<>
                        <div className="relative w-full lg:w-1/3 min-h-[200px] lg:min-h-[350px] border-t-[3px] lg:border-r-[3px] lg:border-t-0  border-solid border-main-color" bis_skin_checked="1">
                            <Image  className="absolute top-0 left-0 z-0 w-full h-full object-cover" alt="hero" src={image}/>
                        </div>
                        <div className="p-12 w-full lg:w-2/3 flex flex-col justify-center items-center" bis_skin_checked="1">
                            <h3 className='text-center text-3xl mb-6'>{title}</h3>
                            {description
                                ? 
                                (<>
                                    <p className="mb-8 leading-relaxed text-bases">
                                        {description}
                                    </p>
                                </>)
                                : 
                                ""
                            }

                            {listOffer
                                ? 
                                (<>
                                    <ul className="list-disc flex flex-col w-full pl-5" dangerouslySetInnerHTML={{ __html: listOffer }} />
                                </>)
                                : 
                                ""
                            }
                            
                        </div>

                    </>)
                }



                
            </div>
        </section>
    );
};

export default HeroOffer;