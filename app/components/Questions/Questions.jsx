import React from 'react';

const Questions = ({question,ans}) => {
  return (
    <div className='text-right bg-[#F7F7F7] py-8 px-4 border-2 border-[#CE4642] rounded-lg'>
      <div className='text-2xl text-[#CE4642] py-4'>{question}</div>
      <div className='text-md'>{ans}</div>
    </div>
  );
}

export default Questions;
