"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import callImg from '../../assets/images/call.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Order = () => {
    const [name ,setName] =useState("")
    const [services ,setServices] =useState([])
    const [phone ,setPhone] =useState("")
    const [detail ,setDetail] =useState("")
    const [id ,setId] =useState("")


    useEffect(()=>{
        const getServices = async ()=>{
            const result = await fetch(`http://site.taamiz.com/api/services`)
            const result2 = await result.json()
            const data = result2.services
            setServices(data)
        }
        getServices()
    },[])



    


    const handleData = async (e)=>{
        e.preventDefault()
        await axios.post(`http://site.taamiz.com/api/make_order`,{
            
                "name": name,
                "service_id" : id,
                "details" : detail,
                "phone" : phone
                
        }).then(response =>{
            if (response.data.code === 200) {
                toast.success(response.data.msg, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
            else {
                toast.error(response.data.msg, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
        })
    }
  return (
    <div className='py-16 bg-[#F7F7F7]'>
      <div className='m-auto max-w-[1280px] flex justify-evenly items-center  xs:justify-center'>
      <div className='rounded-md border-t-8 border-b-8 shadow-lg border-[#CE4642]'>
            <form action="" className='py-8 px-5 bg-[#F7F7F7] text-[#CE4642] w-[450px] text-right'>
                <div className='text-md'>نحن نرعاكم على مدار 24 ساعة</div>
                <div className='text-2xl'>اطلب/استفسر عن خدماتنا</div>
                <br />
                <label htmlFor="" className='text-lg'>أسمك</label>
                <br />
                <input type="text"  className='w-full h-8 border-[#CE4642] border-2 text-right' onChange={(e)=>{setName(e.target.value)}}/>
                 <br /><br />   
                <label htmlFor="" className='text-lg'>رقم هاتفك</label>
                <br />
                <input type="text"  className='w-full h-8 border-[#CE4642] border-2 text-right' onChange={(e)=>{setPhone(e.target.value)}}/>
                 <br /><br />   
                 <label htmlFor="" className='text-lg'>الخدمة المتعلقة</label>
                 <select name="" id="" className='w-full h-8 border-[#CE4642] border-2 text-center'  onChange={(e)=>{setId(e.target.value)}}>
                    <option value="00">أختر الخدمة</option>
                    {
                        services.map((service)=>(
                            <option key={service.id} value={service.id} className='text-center'>{service.name}</option>
                        ))
                    }
                 </select>
                 <br /><br />
                 <label htmlFor="" className='text-lg' >استفسارك/طلبك</label>
                 <textarea name="" id="" cols="30" rows="10" className='w-full border-[#CE4642] border-2 text-right'  onChange={(e)=>{setDetail(e.target.value)}}></textarea>
                 <br />
                 <button className='bg-[#CE4642] text-white py-2 px-6 text-xl text-center font-semibold rounded-md cursor-pointer' onClick={handleData}>إرســـال</button>
            </form>
        </div>
        <div>
            <Image 
                src={callImg}
                width={400}
                height={400}
                className='xs:hidden'
            />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
    />
    </div>
  );
}

export default Order;
