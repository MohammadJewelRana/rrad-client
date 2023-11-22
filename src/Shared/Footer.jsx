import React from "react";
// h-[calc(100vh-70px)]
import Basis from '../assets/rrad_logo/basis-logo-white-300x83.png'
import Meta from '../assets/rrad_logo/MicrosoftTeams-image-7-300x83.png'

import Logo from "../assets/rrad_logo/rradlogo.png";
import { FaBeer, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className=" pt-36">
            {/* <div className='mt-[calc(90vh-200px)]'> */}
            <footer className="footer    bg-black text-base-content      ">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* text  */}
                    <div className="">
                        <img src={Logo} className="h-12 w-56 md:w-2/3 " alt="" />

                        <p className="mt-12 text-justify text-white font-semibold mb-4">
                            Robust Research And Development Ltd. is a leading tech company
                            based in Dhaka, Bangladesh. We are specialized in delivering
                            innovative and user-friendly Augmented Reality, Virtual Reality,
                            Games, Simulation, Cross-platform Mobile Applications, and
                            business solution products and services.
                        </p>

                        <hr className="mt-8 mb-8" />
                        <div className="text-justify text-white   leading-4">
                            <p className="mb-3">
                                House 94, Road 10, Block D, Niketon, Gulshan 1, Dhaka-1212
                            </p>
                            <p className="mb-3">info@rrad.ltd</p>
                            <p className="mb-3">+880179-8334658</p>
                            <p> +880171-5186647</p>
                        </div>
                    </div>

                    {/* map  */}
                    <div className="pr-10">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.326081130732!2d90.40788617608627!3d23.771399987968454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77f39b41e49%3A0x2b655fe4b279b2cf!2sRobust%20Research%20And%20Development%20Ltd.%20(RRAD)!5e0!3m2!1sen!2sbd!4v1700027663093!5m2!1sen!2sbd"      loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    className="md:h-96 md:w-[500px] "
                    ></iframe>

                       
                    </div>
                </div>





            </footer>


            <div className=" bg-black p-4 md:p-0 mt-12">
                <hr />
                <h1 className="font-bold text-[16px] md:text-xl text-white text-left mt-8 "> WE ARE PROUD MEMBER OF</h1>

                <div className="flex my-8 flex-wrap">
                    <img src={Basis} className='h-16 ' alt="" />
                    <img src={Meta} className='h-16    ' alt="" />
                </div>

                <footer className="footer items-center p-4  bg-black text-neutral-content">
                    <aside className="items-center grid-flow-col">

                        <p> <span className="text-red-600">RRAD</span> © 2023 - All right reserved</p>
                    </aside>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">

                        <div className="flex gap-4   ">

                            <FaFacebook className="border rounded-full text-4xl p-2   hover:bg-red-600 cursor-pointer "></FaFacebook>
                            <FaTwitter className="border rounded-full text-4xl p-2   hover:bg-red-600 cursor-pointer "></FaTwitter>
                            <FaInstagram className="border rounded-full text-4xl p-2   hover:bg-red-600 cursor-pointer "></FaInstagram>
                            <FaLinkedin className="border rounded-full text-4xl p-2   hover:bg-red-600 cursor-pointer "></FaLinkedin>
                        </div>
                    </nav>
                </footer>

            </div>

        </div>
    );
};

export default Footer;
