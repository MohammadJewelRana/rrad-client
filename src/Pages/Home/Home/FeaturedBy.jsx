import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/feature/C24-300x156.png'
import img2 from '../../../assets/feature/2.png'
import img3 from '../../../assets/feature/3.png'
import img4 from '../../../assets/feature/4.png'
import img5 from '../../../assets/feature/5.png'
import img6 from '../../../assets/feature/6.png'
import img7 from '../../../assets/feature/7.png'
import img8 from '../../../assets/feature/8.png'
import img9 from '../../../assets/feature/9.png'
import img10 from '../../../assets/feature/10.png'
import img11 from '../../../assets/feature/11.png'
import img12 from '../../../assets/feature/12.png'

const FeaturedBy = () => {
    
    return (
        <div className='mt-28 text-left text-white'>

            <div className='  '>
                <h1 className='text-5xl font-bold'>FEATURED BY</h1>
                <div className=' border border-red-600 w-24 mt-12'></div>
           
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4  bg-white mt-12 rounded-lg'>

               <div>
                <Link to='https://www.youtube.com/watch?v=hMkr8kwftyY' target="_blank" > <img src={img1} className='h-48' alt="" /></Link>
               </div>
               <div>
                <Link to='https://epaper.ittefaq.com.bd/m/4283/6314be0b325bb' target="_blank" > <img src={img2} className='h-48' alt="" /></Link>
               </div>
               <div>
                <Link to='https://www.bangladeshtoday.net/index.php/error' target="_blank" > <img src={img3} className='h-48' alt="" /></Link>
               </div>
               <div>
                <Link to='https://www.daily-sun.com/post/645034/Experts-see-potentials-in-gaming-at-first-Metaverse-confce?fbclid=IwAR3RzyxMTBdmrB2_7ToE38j5eqALYRvlfXY7imPUF-vNhu0ZEP9vfAfXNqg' target="_blank" > <img src={img4} className='h-48' alt="" /></Link>
               </div>
               <div>
                <Link to='https://samakal.com/technology/article/2304167902/%E0%A6%AC%E0%A7%8D%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A1-%E0%A6%9C%E0%A6%BF%E0%A6%AA%E0%A6%BF%E0%A6%9F%E0%A6%BF-%E0%A6%A6%E0%A7%87%E0%A6%AC%E0%A7%87-%E0%A6%AC%E0%A7%8D%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A1%E0%A6%BF%E0%A6%82-%E0%A6%B8%E0%A6%AE%E0%A6%BE%E0%A6%A7%E0%A6%BE%E0%A6%A8' target="_blank" > <img src={img5} className='h-48' alt="" /></Link>
               </div>
               <div>
                <Link to='https://www.bbarta24.net/science-and-technology/198126' target="_blank" > <img src={img6} className='h-48' alt="" /></Link>
               </div>
               <div>
                <Link to='https://bn.thestatement24.com/archives/3216' target="_blank" > <img src={img7} className='h-48' alt="" /></Link>
               </div>
               <div>
                <Link to='https://techvision24.com/%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A7%8D%E0%A6%9E%E0%A6%BE%E0%A6%A8/' target="_blank" > <img src={img8} className='h-48' alt="" /></Link>
               </div>
               <div>
                <Link to='https://www.saradin.news/news/128420' target="_blank" > <img src={img9} className='h-48' alt="" /></Link>
               </div>
               <div>
                <Link to='https://bangla52news.com/%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A7%8D%E0%A6%9E%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%AC%E0%A6%BF%E0%A6%95%E0%A6%BE%E0%A6%B6%E0%A7%87-%E0%A6%A4%E0%A6%B0%E0%A7%81%E0%A6%A8%E0%A6%B0%E0%A6%BE/' target="_blank" > <img src={img10} className='h-48' alt="" /></Link>
               </div>
               <div>
                <Link to='https://banglaprobaho.com/?p=28639' target="_blank" > <img src={img11} className='h-48' alt="" /></Link>
               </div>
               <div>
                <Link to='https://www.sadhindesh.com/%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A7%8D%E0%A6%9E%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%AC%E0%A6%BF%E0%A6%95%E0%A6%BE%E0%A6%B6%E0%A7%87-%E0%A6%A4%E0%A6%B0%E0%A7%81%E0%A6%A8%E0%A6%B0%E0%A6%BE/' target="_blank" > <img src={img12} className='h-48' alt="" /></Link>
               </div>

            </div>
            


        </div>
    );
};

export default FeaturedBy;