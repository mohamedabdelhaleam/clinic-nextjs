import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-[#CE4642] font-bold text-lg'>
        <div className="m-auto max-w-[1280px] flex flex-row-reverse justify-between items-center py-4 md:mx-8 lg:mx-8 sm:mx-8 xl:mx-8">
            <div><Link href='/' className='py-2 px-3 text-white font-bold'>Logo</Link></div>
            <ul className='flex flex-row-reverse justify-between items-center text-white gap-2'>
                <li className=' px-3'><Link href='/' className='py-2 hover:border-b-white hover:border-b-2'>الرئيسية</Link></li>
                <li className=' px-3'><Link href='/services' className='py-2 hover:border-b-white hover:border-b-2'>خدماتنا</Link></li>
                <li className=' px-3'><Link href='/buy-service' className='py-2 hover:border-b-white hover:border-b-2'>طلب خدمة</Link></li>
                <li className=' px-3'><Link href='/rate-services' className='py-2 hover:border-b-white hover:border-b-2'>تقيم خدمة</Link></li>
            </ul>
        </div>
      
    </div>
  );
}

export default Navbar;
