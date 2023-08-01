"use client"
import React, { useEffect, useState } from 'react';
import './services.css'
import ServicesCard from '../components/ServicesCard/ServicesCard';

const page =  () => {
  const [services ,setServices] =useState([])
  useEffect(()=>{
    const getServices = async ()=>{
        const result = await fetch(`http://site.taamiz.com/api/services`)
        const result2 = await result.json()
        const data = result2.services
        setServices(data)
    }
    getServices()
},[])

  return (
    <div>
      <header className='py-16 bg-[#F7F7F7] h-[calc(100vh-100px)] services-bg'>
        <div className='m-auto max-w-[1280px] flex justify-center items-center h-full'>
          <div className='text-center'>
            <div className='text-xl'>مركز دكتور أحمد أحمد » خدماتنا</div>
            <div className='text-4xl font-semibold'>خدمات مركز دكتور أحمد أحمد</div>
          </div>
        </div>
      </header>
      <div className='py-16 mx-4'>
        <div className='m-auto max-w-[1280px] grid grid-cols-4 gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
          {
            services.map((service)=>(
              <ServicesCard id = {service.id} name={service.name} des ={service.short_description} img = {service.image}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default page;
