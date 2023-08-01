import React from 'react';
import { BiSolidClinic,BiSolidCommentDots } from "react-icons/bi";
import { MdOutlineContactPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className='py-2 bg-[#CE4642]'>
        <div className='m-auto max-w-[1280px] '>
            <div className='flex justify-between items-center text-white flex-row-reverse xs:flex-col xs:gap-8 sm:flex-col sm:gap-8 md:flex-col md:gap-8 mx-4'>
            <div className='flex justify-between items-center gap-2'>
                <BiSolidClinic size={22}/>
                72 شارع ذاكر حسين, عباس العقاد, مدينة نصر, القاهرة
            </div>
            <div className='flex justify-between items-center gap-2'>
                <BiSolidCommentDots size={22}/>
                mohamedabdelhaleam@gmail.com
            </div>
            <div className='flex justify-between items-center  gap-2'>
                <MdOutlineContactPhone size={22} />
                01095512791

            </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;  