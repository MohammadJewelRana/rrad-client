import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About_rrad = () => {
    return (
        <div className='text-left mb-28 mt-8'>

            <h1 className='text-white mb-4'>WE ARE</h1>
            <h1 className='text-white text-4xl font-bold '> ROBUST RESEARCH AND DEVELOPMENT LTD. </h1>

            <div className='border mt-8 text-red-600 border-red-600 w-24'></div>

            <p className='mt-12 text-white text-justify'>

                Robust Research And Development Ltd. is a leading tech company based in Dhaka, Bangladesh. We are specialized in delivering innovative and user-friendly Augmented Reality, Virtual Reality, Games, Simulation, Cross-platform Mobile Applications, and business solution products and services. We believe in continuously researching and developing cutting-edge technologies ahead of the curve. <br /><br />

                Our team of experts is dedicated to providing the best possible experience for our customers. We strive to exceed expectations and ensure complete satisfaction from developers to customer support.
                <br /><br />
                We are proud of our diverse portfolio, which includes products ranging from virtual reality experiences to cross-platform applications. Our goal is to make technology accessible and easy to use for everyone.
                <br /><br />
                At Robust Research And Development Limited, we value transparency and open communication. We strive to build strong relationships with our customers, partners, and employees by fostering an environment of collaboration and trust. If you're looking for a partner in innovation, look no further than Robust Research And Development Ltd. Join us in our mission to revolutionize the tech industry and make technology work for you.

            </p>

              <Link to='/about'>
              <div className='mt-8 text-red-600 flex gap-2 cursor-pointer'>
                <p>KNOW MORE</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>

            </div>
              </Link>



        </div>
    );
};

export default About_rrad;