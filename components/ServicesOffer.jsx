import React from 'react';
import InfoCard from './atom/InfoCard';
import PhysiotherapistContact from './atom/PhysiotherapistContact';

const ServicesOffer = ({title}) => {
    return (
        <div className='bg-main-bg-color py-24'>
            <div className="container m-auto">
                <div className="text-white font-bold text-center text-4xl mb-12">{title}</div>
                <div className={`flex flex-col lg:flex-row`}>
                    <div className='w-full lg:w-1/2 px-6 flex flex-col gap-5'>
                        <InfoCard
                            description={`Fizjoterapia ureginekologiczna kobiet i urologiczna mężczyzn`}
                            listDescription={`
                                                <li>Nietrzymanie moczu i zaburzenia dolnych dróg moczowych</li>
                                                <li>Bóle menstruacyjne</li>
                                                <li>Obniżenie narządów miednicy</li>
                                                <li>Terapia w pochwicy, vulvodynii</li>
                                                <li>Zespoły napięciowe</li>
                                                <li>Bóle krocza kobiet i mężczyzn</li>
                                                <li>Przygotowanie oraz rehabilitacja po zabiegu prostatektomii</li>
                                            `}            
                        />  
                        <InfoCard description={'Elektrostymulacja mięśni dna miednicy'}/>  
                        <InfoCard description={'Terapia manualna'}/>  
                    </div>
                    <div className='w-full lg:w-1/2 px-6 flex flex-col gap-5'>
                        <InfoCard
                            description={`Fizjoterapia kobiet w ciąży i po porodzie`}
                            listDescription={`
                                                <li>Rozejście mięśnia prostego brzucha</li>
                                                <li>Dolegliwości bólowe w obrębie kręgosłupa i stawach krzyżowo biodrowych</li>
                                                <li>Mobilizacja blizn po cesarskim cięciu i porodzie naturalnym</li>
                                                <li>Kinesiotaping</li>
                                                <li>Profilaktyka poporodowa</li>
                                            `}            
                        /> 
                        <InfoCard description={'EMG Biofeedback'}/>  
                        <InfoCard description={'Masaż'}/>  
                    </div>              
                </div>
            </div>
            <PhysiotherapistContact
                fullName={"Katarzyna Rogóż"}
                position={"mgr fizjoterapii"}
            />
        </div>
    );
};

export default ServicesOffer;