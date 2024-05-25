import React from 'react'
import { FaTicketAlt, FaBus } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { MdMovie } from "react-icons/md";
import '../App.css'

const Header = () => {
  return (
    <div className='cursor-default overflow-x-auto flex items-center scrollHr'>
        <div className="flex gap-5 pl-5 text-white w-full">
            <div className="py-2 px-4 bg-red-400 gap-2 whitespace-nowrap flex items-center justify-center">
                 <FaTicketAlt size={22} />
                 <p className=" font-[500]">Events</p>
            </div>
            <div className="py-2 px-4 bg-green-500 gap-2 whitespace-nowrap flex items-center justify-center">
                 <FaBus size={20} />
                 <p className=" font-[500]">Bus</p>
            </div>
            <div className="py-2 px-4 bg-yellow-500 gap-2 whitespace-nowrap flex items-center justify-center">
                 <IoIosFootball size={22} />
                 <p className=" font-[500]">Sports</p>
            </div>
            <div className="py-2 px-4 bg-red-400 gap-2 whitespace-nowrap flex items-center justify-center">
                 <MdMovie size={22} />
                 <p className=" font-[500]">Movies</p>
            </div>
          
        
          
          
          
            
        </div>
    </div>
  )
}

export default Header
