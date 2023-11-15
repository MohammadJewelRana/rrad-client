import React from 'react';
import Img1 from '../../assets/TeamMember/1.png'
import Img2 from '../../assets/TeamMember/2.jpg'
import Img3 from '../../assets/TeamMember/3.png'
import Img4 from '../../assets/TeamMember/4.jpg'
import Img5 from '../../assets/TeamMember/5.jpg'
import Img6 from '../../assets/TeamMember/6.jpg'
import Img7 from '../../assets/TeamMember/7.jpg'


const Team = () => {
    return (
        <div className='mt-24'>

            <div className='text-left'>
                <h1 className='text-white text-3xl font-bold'>WELCOME TO OUR TEAM!</h1>
                <div className='   border  border-red-600 w-24 mt-4  '></div>

                <p className='text-white max-w-md mt-4'>
                    We are a group of motivated and talented individuals who are dedicated to providing our clients with the highest quality services.
                </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-12'>
                <div>
                    <img src={Img1} className='h-42 w-42 rounded-xl' alt="" />
                </div>
                <div>
                    <img src={Img2} className='h-42 w-42 rounded-xl' alt="" />
                </div>
                <div>
                    <img src={Img3} className='h-42 w-42 rounded-xl' alt="" />
                </div>
                <div>
                    <img src={Img4} className='h-42 w-42 rounded-xl' alt="" />
                </div>
                <div>
                    <img src={Img5} className='h-42 w-42 rounded-xl' alt="" />
                </div>
                <div>
                    <img src={Img6} className='h-42 w-42 rounded-xl' alt="" />
                </div>
                <div>
                    <img src={Img7} className='h-42 w-42 rounded-xl' alt="" />
                </div>

            </div>

        </div>
    );
};

export default Team;