import React from 'react';

const MissionVision = () => {
    return (
        <div>

            <div className='bg-white grid grid-cols-1 md:grid-cols-2 my-12 p-6 gap-8 rounded-md'>
                {/* mission  */}
                <div className='  '>
                    <h1 className='text-black text-4xl font-bold text-left'>
                        OUR MISSION
                    </h1>
                    <p  className='text-base-200 text-xl  text-justify mt-3'>
                        At Robust Research and Development Ltd., we believe that every great idea deserves to see the light of day. Our vision is to empower individuals and organizations by transforming their concepts into robust, scalable products that make a meaningful impact. Through a blend of creativity, technical expertise, and relentless drive, we aim to shape the future of technology and bring about positive change in various industries.
                    </p>

                </div>


                {/* vision  */}
                <div className='  '>
                    <h1 className='text-black text-4xl font-bold text-left'>
                        OUR VISION
                    </h1>
                    <p  className='text-base-200 text-xl  text-justify mt-3'>
                    Robust Research and Development Ltd., where innovation meets excellence. We are a leading tech company specializing in cutting-edge technologies such as augmented reality, virtual reality, games, and cross-platform mobile applications. Our team of experts is dedicated to transforming ideas into robust, user-friendly products that make a lasting impact. With a dynamic approach, deep expertise, and a commitment to excellence, we are shaping the future of technology. Join us on this visionary journey and let’s create a better tomorrow together.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default MissionVision;