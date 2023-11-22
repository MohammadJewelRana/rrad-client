import React from 'react';
import CountUp from 'react-countup';
import { FaFacebook, FaInstagram, FaLinkedin, FaReact, FaTwitter } from 'react-icons/fa';

const Count = () => {
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div>
                    <h1 className='text-red-600 text-6xl font-bold mb-4'>

                        <CountUp
                            end={350}
                            duration={2}
                        ></CountUp>
                        K+</h1>


                    <p className='text-white -ml-8'>USER REACHED</p>
                </div>
                <div className='flex flex-col'>
                    <p className='mx-auto'> <FaReact
                        className='text-6xl mb-4 font-bold text-red-600'></FaReact></p>
                    <p className='text-white '>ULTIMATE INTERACTIVE SOLUTIONS</p>
                </div>

                <div>
                    <h1 className='text-red-600 text-6xl font-bold mb-4'>                       <CountUp
                            end={80}
                            duration={2}
                        ></CountUp></h1>
                    <p className='text-white '> PROJECT DEPLOYED  </p>
                </div>

                <div>
                    <h1 className='text-red-600 text-6xl font-bold mb-4'>                        <CountUp
                            end={40}
                            duration={2}
                        ></CountUp></h1>
                    <p className='text-white -ml-8'> WEB & MOBILE APPS  </p>
                </div>
                <div>
                    <h1 className='text-red-600 text-6xl font-bold mb-4'>                        <CountUp
                            end={30}
                            duration={2}
                        ></CountUp></h1>
                    <p className='text-white '> gAMES & SIMULATIONS  </p>
                </div>


            </div>
        </div>
    );
};

export default Count;