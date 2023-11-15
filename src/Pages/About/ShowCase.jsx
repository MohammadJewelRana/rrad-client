import React from 'react';

const ShowCase = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-24'>
            
            <div className='md:text-5xl text-2xl text-white font-bold my-auto'> 
                PROJECT SHOWCASE

            </div>

            <div>
            <iframe className='md:w-[560px] md:h-[315px] mx-auto '    src="https://www.youtube.com/embed/oIfxc0To1HE?si=98L_RprqQwdGFsD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
        </div>
    );
};

export default ShowCase;