import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/Clients/1.png'
import img2 from '../../../assets/Clients/2.png'
import img3 from '../../../assets/Clients/3.png'
import img4 from '../../../assets/Clients/4.png'
import img5 from '../../../assets/Clients/5.png'
import img6 from '../../../assets/Clients/6.png'
import img7 from '../../../assets/Clients/7.png'
import img8 from '../../../assets/Clients/8.png'
import img9 from '../../../assets/Clients/9.png'
import img10 from '../../../assets/Clients/10.png'
import img11 from '../../../assets/Clients/11.png'
import img12 from '../../../assets/Clients/12.png'
import img13 from '../../../assets/Clients/13.png'
import img14 from '../../../assets/Clients/14.png'
import img15 from '../../../assets/Clients/15.png'
import img16 from '../../../assets/Clients/16.png'
import img17 from '../../../assets/Clients/17.png'
import img18 from '../../../assets/Clients/18.png'
import img19 from '../../../assets/Clients/19.png'
import img20 from '../../../assets/Clients/20.png'
import img21 from '../../../assets/Clients/21.png'

const Clients = () => {
    return (
        <div className='mt-28    text-white'>

        <div className='  '>
            <p className='mb-4'>WHO WE WORK WITH</p>
            <h1 className='text-5xl font-bold'>OUR CLIENTS</h1>
            <div className=' border border-red-600 w-20  mt-10 mx-auto'></div>
       
        </div>

        <div className='grid grid-cols-3 md:grid-cols-7  bg-white mt-12 rounded-lg gap-4 p-4'>

           <img src={img1} alt="" />
           <img src={img2} alt="" />
           <img src={img3} alt="" />
           <img src={img4} alt="" />
           <img src={img5} alt="" />
           <img src={img6} alt="" />
           <img src={img7} alt="" />
           <img src={img8} alt="" />
           <img src={img9} alt="" />
           <img src={img10} alt="" />
           <img src={img11} alt="" />
           <img src={img12} alt="" />
           <img src={img13} alt="" />
           <img src={img14} alt="" />
           <img src={img15} alt="" />
           <img src={img16} alt="" />
           <img src={img17} alt="" />
           <img src={img18} alt="" />
           <img src={img19} alt="" />
           <img src={img20} alt="" />
           <img src={img21} alt="" />
        </div>
        


    </div>
    );
};

export default Clients;