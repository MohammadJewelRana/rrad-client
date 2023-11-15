import React from 'react';
import img1 from '../../../assets/projects/1.png'
import img2 from '../../../assets/projects/2.png'
import img3 from '../../../assets/projects/3.png'
import img4 from '../../../assets/projects/4.png'
import img5 from '../../../assets/projects/5.png'
import img6 from '../../../assets/projects/6.png'
import { Link } from 'react-router-dom';


const Our_Project = () => {
    return (
        <div className='mt-24'>


            <div className='  '>
                <p className='mb-4'>Works</p>
                <h1 className='text-5xl font-bold'>OUR PROJECTS</h1>
                <div className=' border border-red-600 w-20  mt-10 mx-auto'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3    mt-12 rounded-lg gap-4 p-4'>

                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />

            </div>

            <Link className=' '  to='/portfolio'>
                <div className='flex gap-4 justify-end mr-8 mt-2 hover:text-red-600'>
                    <p>View All Projects    </p>
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </div>


            </Link>


        </div>
    );
};

export default Our_Project;
