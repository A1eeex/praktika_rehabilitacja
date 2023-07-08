import React from 'react';
import InfoCard from './atom/InfoCard';

const OlsoServicesOffer = ({title}) => {
    return (
        <section className='container m-auto my-24'>
            <h2 className='font-bold text-4xl text-center mb-12'>{title}</h2>
            <div className={`flex flex-col lg:flex-row`}>
                <div className='w-full lg:w-1/2 px-6 flex flex-col gap-5'>
                    <InfoCard description={'Kinezyterapia'}/>  
                    <InfoCard description={'Masaż leczniczy'}/>  
                    <InfoCard description={'Fizjoterapia ortopedyczna'}/>  
                    <InfoCard description={'Terapia manualna wg metod Cyriaxa, Mulligana oraz McKenzie\'ego'}/>
                </div>
                <div className='w-full lg:w-1/2 px-6 flex flex-col gap-5'>
                    <InfoCard description={'Terapia bólu kręgosłupa'}/>  
                    <InfoCard description={'PNF'}/>  
                    <InfoCard description={'Kinesiotaping'}/>  
                    <InfoCard description={'Fizykoterapia (laser, ultradźwięki, lampa sollux, pole magnetyczne, prądy Kotza, TENS, Interdyn, jonoforeza, diadynamik)'}/>
                </div>
  
            </div>
        </section>
    );
};

export default OlsoServicesOffer;