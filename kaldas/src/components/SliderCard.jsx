import React from 'react'
import { group, image1 } from '../assets'
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniBookmark } from "react-icons/hi2";

const SliderCard = () => {
  return (
    <div className='flex flex-col gap-2 whitespace-nowrap'>
       <div className="relative">
          <img src={image1} alt="card" className='' />
          <div className="absolute rounded-xl text-center h-12 w-12 top-2 left-2 bg-white/70 ">
             <p className="font-bold text-lg">
                15
             </p>
             <p className='text-xs font-semibold'>JULY</p>
          </div>
          <div className="absolute rounded-lg flex items-center justify-center h-8 w-8 text-red-500 top-2 right-2 bg-white/70 ">
             <HiMiniBookmark size={18}/>  
          </div>
       </div>
       <p className=" text-[#171766] px-1 font-[500]">
          Rophnan live in concert ...
       </p>
       <div className="flex items-center gap-2">
        <img src={group} alt="group" />
        <p className=" text-red-400 font-semibold text-sm"> +200 Going</p>
       </div>
       <div className="flex items-center text-black/30 text-sm font-semibold gap-2">
          <FaLocationDot size={18} />
          <p className="">Chamo, Arba Minch</p>
       </div>
    </div>
  )
}

export default SliderCard
