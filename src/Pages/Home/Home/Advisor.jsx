import React from 'react';
import img1 from '../../../assets/advisor/MOHAMMAD-ZAMA-Advisor-150x150.png'
import img2 from '../../../assets/advisor/Ariful-Hasan-Apu-Advisor-150x150.png'
import img3 from '../../../assets/advisor/Md.Kafi-Khan-Advisor-150x150.png'
import img4 from '../../../assets/advisor/Md-Syedul-Islam-FCA-Advisor-rrad-150x150.jpg'
import img5 from '../../../assets/advisor/Md-Kamruzzaman-Didar-advisor-150x150.png'

const Advisor = () => {
    return (
        <div className='mt-12'>

            <h1 className='text-white text-4xl font-bold'>OUR ADVISORS</h1>
            <div className='border border-red-600 w-12 mx-auto mt-4'></div>
            <div className='grid grid-cols-1 md:grid-cols-5 mt-16 gap-8'>

                <div className='  '>
                    <img src={img1} className='rounded-full h-24 mx-auto mb-4' alt="" />
                    <div className=' '>
                        <h4 className='font-bold'>MOHAMMAD ZAMAN</h4>
                        <p className='text-[12px] mt-2 text-gray-300'>Leader, Solutions</p>
                        <p className='text-[12px] mt-2 text-gray-300'>Architecture, Amazon Web Services.</p>
                        <p className='text-[12px] mt-2 text-gray-300'>Founder, Cloudcamp Bangladesh</p>
                    </div>
                </div>
                <div className='  '>
                    <img src={img2} className='rounded-full h-24 mx-auto mb-4' alt="" />
                    <div className=' '>
                        <h4 className='font-bold'>ARIFUL HASAN OPU</h4>
                        <p className='text-[12px] mt-2 text-gray-300'>Founder, Bangladesh <br /> Innovation Forum.</p>
                        <p className='text-[12px] mt-2 text-gray-300'>CEO, E-Soft</p>
                       
                    </div>
                </div>
                <div className='  '>
                    <img src={img3} className='rounded-full h-24 mx-auto mb-4' alt="" />
                    <div className=' '>
                        <h4 className='font-bold'>MD.KAFI KHAN</h4>
                        <p className='text-[12px] mt-2 text-gray-300'>Company Secretary, <br />The City Bank Ltd.</p>
                        
                    </div>
                </div>
                <div className='  '>
                    <img src={img4} className='rounded-full h-24 mx-auto mb-4' alt="" />
                    <div className=' '>
                        <h4 className='font-bold'>SYEDUL ISLAM FCA</h4>
                        <p className='text-[12px] mt-2 text-gray-300'>Head of Audit,</p>
                        <p className='text-[12px] mt-2 text-gray-300'>Eastern Bank Limited</p>
                  
                    </div>
                </div>
                <div className='  '>
                    <img src={img5} className='rounded-full h-24 mx-auto mb-4' alt="" />
                    <div className=' '>
                        <h4 className='font-bold'>KAMRUZZAMAN DIDAR</h4>
                        <p className='text-[12px] mt-2 text-gray-300'>Assistant Professor &</p>
                        <p className='text-[12px] mt-2 text-gray-300'>Head, Department of Innovation </p>
                        <p className='text-[12px] mt-2 text-gray-300'>Entrepreneurship, DIU</p>
                    </div>
                </div>




            </div>



        </div>
    );
};

export default Advisor;