import React from 'react';

const StaticCard = ({number , name}) => {
  return (
    <div className='py-8 px-12 text-center bg-white text-white rounded-md'>
        <div className='text-4xl font-bold text-[#CE4642]'>{number}</div>
        <div className='text-2xl font-semibold text-[#CE4642]'>{name}</div>
    </div>
  );
}

export default StaticCard;
