import React from 'react';
import aboutImg from '../../assets/images/about.png'
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className='py-16'>
        <div className='m-auto max-w-[1280px] md:mx-8 lg:mx-8 sm:mx-8 xl:mx-8 flex justify-around items-center xs:gap-y-16 gap-8 xs:flex-col sm:flex-col md:flex-col'>
        <Image
                src={aboutImg}
                width={350}
                height={350}
                alt="Picture of the hospital"
            />
          <div className='text-right w-[40%] xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[60%] gap-8  flex flex-col'>
            <div className='text-4xl font-bold border-b-2 border-red-200 xs:text-center pb-2'>نبذة عن مركز <span className='text-[#CE4642]'>د. أحمد أحمد</span> للخدمات الطبية المنزلية</div>
            <div className='text-xl text-[#343434]'>مركز د. أحمد أحمد هو مركز متخصص في توفير الخدمات الطبية بالمنزل منذ أكثر من 5 سنوات، وذلك من خلال فريق طبي كبير تم اختيارهم بعناية من أطباء في جميع التخصصات وتمريض ومعالجين وأخصائيين ذوي الخبرة والكفاءة.
نشأ مركز دكتور مؤمن ندا على مبدأ أن الخدمات الصحية والطبية تصبح أفضل عندما يحصل العملاء والمرضى على رعاية أفضل في المنزل، حيث المكان الذي يريدوا أن يكونوا فيه أكثر من غيره، بعيداً عن جو المستشفيات والمراكز الطبية.
كما يحرص المركز على أن يُدرك كل فرد من الفريق الطبي أهمية وقُدسية الدور الذي يقوم به وما يتطلبه من أمانة وإخلاص، حيث أن تقديم الخدمات والرعاية الطبية بالمنزل له أسس ومعايير خاصة يلتزم بها كل العاملين في مركز د. مؤمن ندا.
يتميز المركز باستخدام أحدث الأساليب العلمية والأجهزة الطبية في تقديم الخدمات الطبية المنزلية المختلفة، حيث نقوم بالإهتمام ومتابعة كل حالة على حدا من أجل توفير أفضل مستوى خدمة يمكن أن يحصل عليه المريض/العميل بالمنزل.</div>
            <div className='w-full flex justify-end xs:justify-center md:justify-center sm:justify-center  items-center'><Link href='/services' className='bg-[#CE4642] text-white py-3 px-8 text-xl font-semibold rounded-md'>تصفح خدماتنا</Link></div>
          </div>
        </div>
    </div>
  );
}

export default About;
