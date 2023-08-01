"use client"
import React, { useEffect, useState } from 'react';
import StaticCard from '../StaticCard/StaticCard';

const Info = () => {

  const [services ,setServices] =useState([])

  useEffect(()=>{
    const getServices = async ()=>{
        const result = await fetch(`http://site.taamiz.com/api/counter`)
        const result2 = await result.json()
        setServices(result2)
    }
    getServices()
},[])
  
  return (
    <div className='bg-[#CE4642] py-16'>
      <div className='m-auto max-w-[1280px] '>
        <div className='grid grid-cols-4 gap-8  xs:grid-cols-1 xs:mx-8 sm:mx-8 md:mx-8 lg:mx-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:justify-center'>
          {
            services.map((service)=>(
              <StaticCard number = {service.count} name ={service.name}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Info;
