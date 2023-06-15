import React from 'react';

const InfoCard = ({description, listDescription}) => {
    return (
        <div className='bg-white w-full py-[10px] px-5 border-l-[3px] border-main-color'>
            <div className='text-2xl'>{description}</div>
            {listDescription
                ? 
                (<>
                    <ul className=" text-sm list-disc flex flex-col w-full pl-10 my-4" dangerouslySetInnerHTML={{ __html: listDescription }} />
                </>)
                : 
                ""
            }
        </div>
    );
};

export default InfoCard;