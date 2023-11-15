import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import loginImg from '../../assets/LoginReg/images.jpg'
import { FaBeer, FaFacebook, FaGoogle } from 'react-icons/fa';
const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const {email,password}=data;
        console.log(email,password);
    };

    return (
        <section className="  bg-[#101f35] text-white md:h-screen lg:h-screen pt-12 mb:pb-32   md:pt-[5%]  ">
            <div className="    mx-auto">
                {/* <img src={loginImg} alt="" /> */}
                <div className="flex text-center mb-12">
                    <div className="mx-auto">
                        <p className="text-xl md:text-5xl font-bold md:my-6 my-2">
                            Welcome Back!
                        </p>
                        <p className="px-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
                            saepe?
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
                                Email :
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
                                Password :
                            </label>
                            <input
                                type="text"
                                className="bg-[#00193B] w-full  border border-blue-800 py-2 md:py-4 pl-6 rounded-lg text-white text-[14px] md:text-xl"
                                {...register("password", { required: true })}
                                placeholder="Enter Your password"
                            />
                            <p className="text-blue-400 text-center mt-4 text-xl">
                                <Link>Forgot Password?</Link>
                            </p>
                            {errors.password && (
                                <span className="mt-4 text-red-600">
                                    This field is required
                                </span>
                            )}
                        </div>

                        <input
                            className="btn btn-accent w-full text-xl"
                            type="submit"
                            value="Login"
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

                    <p className="text-center mt-8 pb-32">Don't have an account? <Link to='/registration' className="text-blue-500 hover:underline ml-3">Sign Up</Link></p>
                         
                     
                </div>
 

            </div>
        </section>
    );
};

export default Login;
