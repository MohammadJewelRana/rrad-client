import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {


const [toggle,setToggle]=useState(false);
console.log(toggle);

  return (
    <div className="w-screen h-screen flex text-white">
      {/* side bar  */}
      {/* <div className="w-[400px] bg-gray-200 h-full"> */}
      
      <div className={`  ${toggle ?  "w-0" : "w-[400px]"  }   bg-gray-200 h-full`} >
      
        <div className=" h-[70px] bg-[#161730] flex justify-center items-center">
          <div>
            <h3> Admin Dashboard</h3>
          </div>
        </div>

        <div className="bg-[#0d0b24] h-[calc(100vh-70px)] ">
          <Link className="flex justify-start ml-8  pt-8 items-center">
            <div className="flex gap-3">
              <FaHome className="mt-1"></FaHome>
              <span>Home</span>
            </div>
          </Link>
          <Link className="flex justify-start ml-8  pt-8 items-center">
            <div className="flex gap-3">
              <FaHome className="mt-1"></FaHome>
              <span>Home</span>
            </div>
          </Link>
          <Link className="flex justify-start ml-8  pt-8 items-center">
            <div className="flex gap-3">
              <FaHome className="mt-1"></FaHome>
              <span>Home</span>
            </div>
          </Link>
        </div>
      </div>




      {/* main  */}
      <div className="w-full h-full bg-[#bcbad3]">
        {/* top navbar */}
        <div className=" h-[70px] ">
          <div className="navbar bg-[#0d0b24]  h-[70px] pr-4">
            <div className="flex-1">
              <div onClick={()=>setToggle(!toggle)} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              </div>
            </div>

            <div className="flex-none gap-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto"
                />
              </div>

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[#161730] h-[calc(100vh-70px)] text-white p-[20px]">
          <div className="border border-gray-400 rounded-md p-[20px] h-full">
            main content
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
