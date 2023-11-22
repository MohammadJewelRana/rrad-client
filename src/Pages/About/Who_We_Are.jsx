import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaReact, FaTwitter } from 'react-icons/fa';
import TeamImage from '../../assets/TeamMember/team.jpg'
import { Link } from 'react-router-dom';


const Who_We_Are = ({ subHeading, heading, details }) => {
    // console.log(subHeading,heading,details);

    return (
        <div>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-12 mb-24'>
                <div>
                    <img src={TeamImage} className='  rounded-3xl' alt="" />
                </div>
                <div className='text-left px-8'>
                    <h5 className='text-white text-xl'>{subHeading}</h5>
                    <h1 className='text-[36px]   font-bold text-red-600'>
                        {heading}
                    </h1>
                    <div className='  border bg-white w-24 mt-4'></div>
                    <p className='text-justify mt-10 text-[16px]'>
                        {details}
                    </p>
                    <div className='flex text-3xl gap-8 text-white mt-8'>
                        <Link to='https://www.facebook.com/rrad.ltd' target="_blank"> <FaFacebook className="border rounded-full text-4xl p-2   hover:bg-red-600 cursor-pointer "></FaFacebook> </Link>
                        <Link to='https://twitter.com/rrad_bd' target="_blank">  <FaTwitter className="border rounded-full text-4xl p-2   hover:bg-red-600 cursor-pointer "></FaTwitter> </Link>
                        <Link to='https://www.instagram.com/rrad.ltd/' target="_blank">  <FaInstagram className="border rounded-full text-4xl p-2   hover:bg-red-600 cursor-pointer "></FaInstagram>  </Link>
                        <Link to='https://www.linkedin.com/company/rrad-bd' target="_blank">   <FaLinkedin className="border rounded-full text-4xl p-2   hover:bg-red-600 cursor-pointer "></FaLinkedin>  </Link>

                    </div>
                </div>
            </div>
            {/* 
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-12 mb-24'>
                <div>
                    <img src={TeamImage} className='  rounded-3xl' alt="" />
                </div>
                <div className='text-left p-8'>
                    <h5 className='text-white text-xl'>WHO WE ARE</h5>
                    <h1 className='text-[36px]   font-bold text-red-600'>
                        WE ARE AN INTERACTIVE TECHNOLOGY COMPANY
                    </h1>
                    <div className='  border bg-white w-24 mt-4'></div>
                    <p className='text-justify mt-10 text-[16px]'>
                        based in Dhaka, Bangladesh specializing in AR, VR, Games, Simulation, cross-platform mobile apps, and business solutions. The company values transparency, open communication and has a goal to make technology accessible and easy to use.
                    </p>
                    <div className='flex text-3xl gap-8 text-white mt-8'>
                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                        <FaInstagram></FaInstagram>
                        <FaLinkedin></FaLinkedin>
                    </div>
                </div>
            </div> */}




        </div>
    );
};

export default Who_We_Are;