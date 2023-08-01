import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import Link from 'next/link';

const MiniServices = async () => {
  const result = await fetch(`http://site.taamiz.com/api/services`)
  const result2 = await result.json()
  const services = result2.services
  const newServices = services.slice(5)
  return (
    <div className='py-16 bg-[#F7F7F7]'>
      <div className='m-auto max-w-[1280px] md:mx-8 lg:mx-8 sm:mx-8 xl:mx-8 text-center flex flex-col'>
        <div className='text-[#CE4642] text-lg'>خدمات الرعاية الطبية المنزلية</div>
        <div className='text-4xl font-bold mb-8'>خدمات مركز دكتور <span className='text-[#CE4642]'>أحمد أحمد</span></div>
        <div className='grid gap-8 sm:mx-8 grid-cols-4 xs:grid-cols-1 xs:mx-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:justify-center mb-8'>
            {
              newServices.map((service) =>(
                <ServicesCard id = {service.id} name={service.name} des ={service.short_description} img = {service.image}/>
              ))
            }
        </div>
        <div><Link href='/services' className='bg-[#CE4642] text-white py-2 px-6 text-xl font-semibold rounded-md'>تصفح جميع الخدمات</Link></div>
      </div>
    </div>
  );
}

export default MiniServices;
