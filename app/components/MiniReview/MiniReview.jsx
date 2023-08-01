import React from 'react';
import MiniReviewCard from '../MiniReviewCard/MiniReviewCard';
import Link from 'next/link';

const MiniReview = () => {
  return (
    <div className='py-16'>
      <div className='m-auto max-w-[1280px] '>
            <div className='flex justify-evenly flex-row-reverse xs:flex-col xs:gap-5 sm:flex-col sm:gap-5 md:flex-col md:gap-5 lg:gap-5   items-center xs:mx-8 sm:mx-8 md:mx-8 lg:mx-8'>
                <div className='text-center  py-3'>
                    <div className='text-xl text-[#CE4642] font-medium'>ماذا يقول عملاء مركز دكتور مؤمن ندا</div>
                    <div className='text-4xl text-[#CE4642] font-bold border-b-2 border-[#CE4642] mb-8 lg:text-3xl'>آراء وتقييمات عملاءنا</div>
                    <div><Link href='/reviews' className='bg-[#CE4642] text-white py-2 px-6 text-xl font-semibold rounded-md'>تصفح  جميع التقيمات</Link></div>
                </div>
                <div>
                    <MiniReviewCard />
                </div>
            </div>
      </div>
    </div>
  );
}

export default MiniReview;
