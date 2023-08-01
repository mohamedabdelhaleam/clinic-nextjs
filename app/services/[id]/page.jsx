'use client'
import React from 'react';
import Link from 'next/link';
import Questions from '../../components/Questions/Questions';
import Rates from '../../components/Rates/Rates';

const ProductDetails = async  ({params}) => {
  const result = await fetch(`http://site.taamiz.com/api/service/${params.id}`)
  const result2 = await result.json()
  const product =  result2.data
  const productQuestions = result2.questions
  const productRates = result2.rates
  console.log(productQuestions);

  const value = 3.5;
  return (
    <div className='py-16 min-h-[calc(100vh-100px)] xs:px-4'>
      <div className='m-auto max-w-[1280px]'>
        <div className=' flex justify-between items-center gap-8 text-right flex-row-reverse xs:flex-col sm:flex-col md:flex-col'>
          <img src={product.image} width={600} height={600} alt="" srcset="" className='min-w-[600px] min-h-[600px] xs:min-w-[300px] sm:min-w-[360px] md:min-w-[450px]'/>
          <div>
            <div className='text-4xl mb-8 border-b-2 border-[#CE4642] text-[#CE4642]'>{product.name}</div>
            <div className='text-lg py-4'>{product.description}</div>
            <div><Link href='/buy-service' className='bg-[#CE4642] text-white py-2 px-6 text-xl font-semibold rounded-md'>اطلب الخدمة</Link></div>
          </div>
        </div>
  
          <div className='text-center text-4xl py-8'>بعض الأسئلة الشائعة عن الخدمة</div>
          <div className= "flex flex-col justify-evenly items-center gap-5">
            {
              productQuestions.map((ques)=>(

                <Questions ans={ques.answer} question = {ques.question}/>
              ))
            }
          </div>
          <div className='text-center text-4xl py-8'>تقيمات الخدمة</div>
          <div className= "grid grid-cols-2 gap-5">
            {
              productRates.map((rate)=>(
                <Rates name = {rate.name} rate = {rate.rate} title = {rate.title} cont = {rate.content}/>
              ))
            }
          </div>
      </div>
    </div>
  );
}

export default ProductDetails;