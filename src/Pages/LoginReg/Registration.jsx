import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import loginImg from '../../assets/LoginReg/images.jpg'
import { FaBeer, FaFacebook, FaGoogle } from 'react-icons/fa';
const Registration = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const {name,email,mobile,password,cPassword}=data;
        console.log(name,email,mobile,password,cPassword);
    };

    return (
        <section className="  bg-[#101f35] text-white    pt-12 mb:pb-32   md:pt-[5%]  ">
            <div className="    mx-auto">
                {/* <img src={loginImg} alt="" /> */}
                <div className="flex text-center mb-12">
                    <div className="mx-auto">
                        <p className="text-xl md:text-5xl font-bold md:my-6 my-2">
                        Register Account
                        </p>
                        <p className="px-4">
                        If you already have an account with us, please login at the  <Link to='/login' className="text-blue-500">login</Link> page.
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="md:mx-[25%] mx-2">
                     
                     
                     
                        <div className="mb-6 ">
                            <label
                                htmlFor="name"
                                className="block mb-2  text-[12px] md:text-xl ml-2"
                            >
                                Name*
                            </label>
                            <input
                                type="text"
                                className="bg-[#00193B] w-full  border border-blue-800 py-2 md:py-4 pl-6 rounded-lg text-white text-[14px] md:text-xl"
                                {...register("name", { required: true })}
                                placeholder="Enter Your Name"
                            />
                            {errors.name && (
                                <span className="mt-4 text-red-600">
                                    This field is required
                                </span>
                            )}
                        </div>

                        <div className="mb-6 ">
                            <label
                                htmlFor="name"
                                className="block mb-2  text-[12px] md:text-xl ml-2"
                            >
                                Email*
                            </label>
                            <input
                                type="email"
                                className="bg-[#00193B] w-full  border border-blue-800 py-2 md:py-4 pl-6 rounded-lg text-white text-[14px] md:text-xl"
                                {...register("email", { required: true })}
                                placeholder="Enter Your Email"
                            />
                            {errors.email && (
                                <span className="mt-4 text-red-600">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className="mb-6 ">
                            <label
                                htmlFor="name"
                                className="block mb-2  text-[12px] md:text-xl ml-2"
                            >
                                Mobile* 
                            </label>
                            <input
                                type="text"
                                className="bg-[#00193B] w-full  border border-blue-800 py-2 md:py-4 pl-6 rounded-lg text-white text-[14px] md:text-xl"
                                {...register("mobile", { required: true })}
                                placeholder="Enter Your mobile number"
                            />
                            {errors.mobile && (
                                <span className="mt-4 text-red-600">
                                    This field is required
                                </span>
                            )}
                        </div>

                        <div className="mb-6 ">
                            <label
                                htmlFor="name"
                                className="block mb-2  text-[12px] md:text-xl ml-2"
                            >
                                Password*
                            </label>
                            <input
                                type="text"
                                className="bg-[#00193B] w-full  border border-blue-800 py-2 md:py-4 pl-6 rounded-lg text-white text-[14px] md:text-xl"
                                {...register("password", { required: true })}
                                placeholder="Enter Your password"
                            />
                            
                            {errors.password && (
                                <span className="mt-4 text-red-600">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className="mb-6 ">
                            <label
                                htmlFor="name"
                                className="block mb-2  text-[12px] md:text-xl ml-2"
                            >
                               Confirm Password*
                            </label>
                            <input
                                type="text"
                                className="bg-[#00193B] w-full  border border-blue-800 py-2 md:py-4 pl-6 rounded-lg text-white text-[14px] md:text-xl"
                                {...register("cPassword", { required: true })}
                                placeholder="Enter Your confirm password"
                            />
                          
                            {errors.cPassword && (
                                <span className="mt-4 text-red-600">
                                    This field is required
                                </span>
                            )}
                        </div>

                        <input
                            className="btn btn-accent w-full text-xl"
                            type="submit"
                            value="Register"
                        />


                    </div>
                </form>


                <div className="md:mx-[25%] mx-2  ">
                    <div className="divider mt-14">OR</div>
                  
                    <div className="flex gap-12 justify-center mt-12  ">
                        <div className='w-full'>
                            <button className="btn btn-outline btn-secondary w-full">   <FaGoogle className="mr-4"></FaGoogle> Google</button>
                        </div>
                        <div className="w-full">
                            <button className="btn btn-outline btn-accent w-full"><FaFacebook className="mr-4"></FaFacebook> Facebook</button>
                            
                        </div> 
                                            
                    </div>

                    <p className="text-center mt-8 pb-32">Already have an account? <Link to='/login' className="text-blue-500 hover:underline ml-3">Login</Link></p>
                         
                     
                </div>
 

            </div>
        </section>
    );
};

export default Registration;
