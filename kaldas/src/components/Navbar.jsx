import React from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { HiOutlineAdjustments } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className='bg-[] py-4 px-5'>
      <div className="flex justify-between items-center text-white">
        <RiMenu2Fill size={32} />
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center pb-1">
            <p className="text-xs text-white/75">Current Location </p>
            <IoMdArrowDropdown size={18} />
          </div>
          <p className="text-sm text-white">Arba Minch, Ethiopia</p>
        </div>
        <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center">
          <FaRegBell size={22} />
        </div>
      </div>
      <div className="p-4 pt-5 ">
        <div className="relative text-gray-600 font-[500] text-opacity-80">
          <input 
            type="search" 
            name="search" 
            placeholder="Search tickets..."  
            className="bg-white w-full h-[50px] px-5 rounded-lg text-sm focus:outline-none pr-14"
          />
          <div className="absolute right-0 top-2 mr-3 p-2 rounded-lg bg-[#171766]">
            <HiOutlineAdjustments size={18} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
