import React from 'react';

import img1 from '../../assets/projects/1.png'
import img2 from '../../assets/projects/2.png'
import img3 from '../../assets/projects/3.png'
import img4 from '../../assets/projects/4.png'
import img5 from '../../assets/projects/5.png'
import img6 from '../../assets/projects/6.png'
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
    return (
        <div >
                       <Helmet>
                <title>Work | RRAD </title>
            </Helmet>
            <h1 className='text-white font-bold text-2xl   mt-12  '>SOME SUCCESSFUL PROJECTS</h1>
            <div className='mb-12 border border-red-600 w-16 mx-auto mt-3'></div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 px-12 mb-16'>
                <div>
                    <img src={img4} className='h-64   w-full' alt="" />
                </div>

                <div className='flex items-center'>


                    <div className='text-left text-justify '>
                        <h4 className='text-white font-bold text-2xl text-left mb-2'>IMEDUCATION </h4>
                        <div className=' mb-4 border border-red-600 w-16   '></div>
                        <p className='text-[15px]'>We are excited to introduce you to iMeducation, a virtual reality application designed to simulate thrombectomy surgery. Our innovative app allows surgeons to explore and understand the complexities of the procedure in a realistic, immersive environment. <br /><br />
                            Using the latest in VR technology, iMeducation has the potential to revolutionize the way thrombectomy surgery is taught and practiced. </p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 px-12 mb-16'>
                <div>
                    <img src={img1} className='h-64 w-full' alt="" />
                </div>
                <div className='flex items-center'>
                    <div className='text-left text-justify'>
                        <h4 className='text-white font-bold text-2xl text-left mb-2'>BANGLADESH CUSTOMS INFO </h4>
                        <div className=' mb-4 border border-red-600 w-16   '></div>
                        <p className='text-[15px]'>Bangladesh Customs Info app is a single platform to get all relevant information and ideas relating to HS Codes, regulatory requirements, duty structures, SROs, Import-export policies, acts, procedures, budgetary changes, and fiscal measures of Bangladesh Customs. Making it error-free and updated is a real challenge and the best effort has been rendered to achieve it. The latest regulatory changes has been incorporated as it happened. Its usage for noncommercial purposes is completely free. This is developed as part of the private contribution of Bangladesh Customs officials for moving towards a digital customs environment. </p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 px-12 mb-16'>
                <div>
                    <img src={img3} className='h-64 w-full' alt="" />
                </div>
                <div className='flex items-center'>
                    <div className='text-left text-justify   '>
                        <h4 className='text-white font-bold text-2xl text-left mb-2'>SURECARE </h4>
                        <div className=' mb-4 border border-red-600 w-16   '></div>
                        <p className='text-[15px]'> SureCare is an innovative responsive medical services platform providing its member’s medical advisory services. The platform comprises a network of national and international doctors and practitioners and medical service providers in B </p>
                    </div>
                </div>
            </div>





            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 px-12 mb-16'>
                <div>
                    <img src={img2} className='h-64 w-full' alt="" />
                </div>
                <div className='flex items-center'>
                    <div className='text-left text-justify'>
                        <h4 className='text-white font-bold text-2xl text-left mb-2'>OUT IN SPACE (OIS) </h4>
                        <div className=' mb-4 border border-red-600 w-16   '></div>
                        <p className='text-[15px]'>
                            Out in Space is a fast-paced and addictive hyper-casual game where you play as a lone astronaut lost in the depths of space. The game’s objective is to navigate through endless obstacles while collecting power-ups and coins. With intuitive controls and challenging gameplay, “Out in Space” is the perfect game for players who are looking for quick and exciting gaming sessions on the go.
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 px-12 mb-16'>
                <div>
                    <img src={img5} className='h-64 w-full' alt="" />
                </div>
                <div className='flex items-center'>
                    <div className='text-left text-justify'>
                        <h4 className='text-white font-bold text-2xl text-left mb-2'>MATIR MOYNA </h4>
                        <div className=' mb-4 border border-red-600 w-16   '></div>
                        <p className='text-[15px]'>
                            Matir Moyna is a unique and challenging hyper casual game that takes players on a journey through a vibrant and mystical world. In this game, you play as a bird navigating through different levels, collecting coins, and avoiding obstacles. With intuitive controls and stunning graphics, “Matir Moyna” offers a truly immersive experience that is both entertaining and satisfying. Whether you are a casual gamer or a seasoned pro, “Matir Moyna” is the perfect game for anyone who loves a good challenge and a touch of magic.
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 px-12 mb-16'>
                <div>
                    <img src={img6} className='h-64 w-full' alt="" />
                </div>
                <div className='flex items-center'>
                    <div className='text-left text-justify'>
                        <h4 className='text-white font-bold text-2xl text-left mb-2'>VIRTUAL COMMUNITY RESOURCE CENTRE (CRC)​ </h4>
                        <div className=' mb-4 border border-red-600 w-16   '></div>
                        <p className='text-[15px]'>
                            P4D Virtual Community Resource Centre is an online platform where citizens can easily access information about Social Accountability Tools in an innovative and engaging way. P4D’s virtual CRC is an interactive online space where citizens can learn about the Social Accountability Tools as like Right to Information Act, 2009, Citizen’s Charter, Grievance Redress System, and National Integrity Strategy.
                        </p>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Portfolio;