import React from 'react';

const MiniReviewCard = () => {
  return (
    <div className='bg-[#CE4642] rounded-md max-w-[640px] px-8 py-14 h-[240px] shadow-md'>
        <div className='flex justify-between items-center flex-col h-full'>
            <div className='text-white text-xl text-right'>مهما قلت لن أوفيك حقك يا دكتور مؤمن، لولا الجلسات اللي عملتهالي الفترة اللي فاتت مكنتش هبقى قادر أمشي دلوقتي .. ربنا يجازيك خيراً ويبارك لك في صحتك وعملك.</div>
            <div className='text-white text-2xl text-right border-b-2 border-white py-3'>عادل شكل</div>
        </div>
    </div>
  );
}

export default MiniReviewCard;
