import React from 'react';
import main from '../../assets/images/main.png'
import Image from 'next/image'
import "./Header.css"
import Link from 'next/link';

const Header = () => {
  return (
    <div className='py-36 bg-[#F7F7F7] header'>
      <div className='max-w-[1280px] m-auto flex justify-between items-center flex-row-reverse gap-6 md:mx-8 lg:mx-8 sm:mx-8 xl:mx-8'>
        <div className='flex justify-around items-center flex-col md:w-full sm:w-full xs:w-full gap-6'>
            <div className='font-bold text-6xl xs:text-center sm:text-center md:text-center text-right'>خدمات <span className='text-[#CE4642]'>الرعاية الطبية المنزلية</span> <br /> رقـــم 1 فــي مصــر </div>
            <div className='font-semibold text-[#343434] text-3xl text-right xs:text-center sm:text-center md:text-center'>نقوم بتقديم مختلف الخدمات الطبية والصحية بالمنزل على <br /> مستوى جمهورية مصر العربية بأعلى كفاءة وأنسب الأسعار منذ <br /> أكثر من 5 سنوات</div>
            <Link href='/services' className='bg-[#CE4642] text-white py-3 px-8 text-xl font-semibold rounded-md'>تصفح خدماتنا</Link>
        </div>
        <div>
            <Image
                src={main}
                width={500}
                height={500}
                alt="Picture of the Doctor"
                className='xs:hidden sm:hidden md:hidden'
            />
        </div>
      </div>
    </div>
  );
}

export default Header;
