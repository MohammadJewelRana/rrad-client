import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/rrad_logo/rradlogo.png'


const Navbar = () => {
    const navLinks = <div className='flex gap-4 pr-4'>
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600    border-b-2   mr-4 border-b-red-700 " : " " } > Home </NavLink>

        <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600    border-b-2   mr-4 border-b-red-700 " : ""} > About </NavLink>

        <NavLink to="/portfolio" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600    border-b-2   mr-4 border-b-red-700  " : ""} > Work </NavLink>

        {/* <NavLink to="" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600    border-b-2   mr-4 border-b-red-700  " : ""} > Career </NavLink> */}

        <NavLink to="/services" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600    border-b-2   mr-4 border-b-red-700   " : ""} > Services </NavLink>

        <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600    border-b-2   mr-4 border-b-red-700  " : ""} > Contact </NavLink>

        


    </div>

    return (
        <div>
            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navLinks}


                        </ul>
                    </div>

<img src={Logo} className='h-8' alt="" />

                 
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl  ">

                        {navLinks}


                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Navbar;