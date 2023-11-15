import React from "react";
import { FaAddressBook, FaLocationArrow, FaMailBulk, FaPhone, FaSearchLocation, FaVoicemail } from "react-icons/fa";
import { useForm } from "react-hook-form";



const Contact = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 ">


                <div className="card   bg-white shadow-xl cursor-pointer hover:text-red-600">

                    <div className="flex">
                        <div className="mx-auto mb-12 mt-4 ">
                            <FaAddressBook className="text-center text-4xl text-red-600 cursor-pointer"></FaAddressBook>
                        </div>
                    </div>
                    <div className=" ">
                        <h1 className="  text-black font-semibold text-2xl  ">ADDRESS</h1>
                        <div className="text-base-400  p-4 text-xl">
                            <p>House 4, Road B. Block F, Niketon,Dhaka-1212</p>
                        </div>
                    </div>
                </div>

                <div className="card   bg-white shadow-xl cursor-pointer hover:text-red-600">

                    <div className="flex">
                        <div className="mx-auto mb-12 mt-4 ">
                            <FaMailBulk className="text-center text-4xl text-red-600 cursor-pointer"></FaMailBulk>
                        </div>
                    </div>
                    <div className=" ">
                        <h1 className="  text-black font-semibold text-2xl  ">Email</h1>
                        <div className="text-base-400  p-4 text-xl">
                            <p> infor@rrad.ltd</p>
                        </div>
                    </div>
                </div>

                <div className="card   bg-white shadow-xl cursor-pointer hover:text-red-600">

                    <div className="flex">
                        <div className="mx-auto mb-12 mt-4 ">
                            <FaPhone className="text-center text-4xl text-red-600 cursor-pointer"></FaPhone>
                        </div>
                    </div>
                    <div className=" ">
                        <h1 className="  text-black font-semibold text-2xl  ">Phone</h1>
                        <div className="text-base-400  p-4 text-xl">
                            <p> +880 1715 186 647</p>
                            <p> +880 1798 334 658</p>
                        </div>
                    </div>
                </div>



            </div>



            {/* contact  */}
            <div>
                <div className="mt-24">
                    <h4 className="text-white text-xl " >TELL US MORE ABOUT YOUR PROJECT </h4>
                    <h1 className="text-white  text-4xl font-bold mt-6">LET`S WORK TOGETHER</h1>
                    <div className="flex">
                        <div className="border  border-red-600 w-8 mx-auto mt-8">
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-12">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="grid grid-cols-2 gap-4">
                        <div className='mb-6'>
                            <input type='text'
                                className='bg-base-300   w-full py-2 rounded-md pl-4 text-white text-[14px]'
                                {...register("name", { required: true })}
                                placeholder='  Name'
                            />
                            {errors.name && <span className='mt-4 text-red-600'>This field is required</span>}
                        </div>

                        <div className='mb-6'>
                            <input type='text'
                                className='bg-base-300    w-full py-2 rounded-md pl-4 text-white text-[14px]'
                                {...register("name", { required: true })}
                                placeholder='Email'
                            />
                            {errors.email && <span className='mt-4 text-red-600'>This field is required</span>}
                        </div>

                    </div>


                    <div className='mb-6'>
                        <textarea
                            {...register("message", { required: true })}
                            placeholder='Enter Your Message'
                            className="textarea  bg-base-300     w-full  rounded-lg text-white text-[14px] h-32 "
                        ></textarea>



                        {errors.message && <span className='mt-4 text-red-600'>This field is required</span>}
                    </div>

                    

                    <button className="bg-red-600 p-4 text-white font-bold text-[10px] cursor-pointer rounded-md px-12">SEND YOUR MESSAGE</button>

                </form>


            </div>




        </div>
    );
};

export default Contact;
