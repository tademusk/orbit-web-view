import React from 'react'
import { BsBookmarkFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const Events = () => {
  return (
    <div className='flex gap-2'>
        <div className="h-20 w-32 rounded-xl overflow-hidden">
           <img src="https://media.timeout.com/images/105685403/image.jpg" alt="image" className=' object-covor h-full w-full' />
        </div>
        <div className="flex flex-col w-full justify-between py-1 font-[500]">
            <div className="">
                <div className="flex items-center justify-between">
                    <p className=" text-red-400 font-semibold text-xs">ARBAMINCH VS WOLAYITA DICHA</p>
                    <div className=" text-red-500">
                       <BsBookmarkFill/> 
                    </div>
                    
                </div>
                <p className="text-xs">Arbaminch stadium</p>
            </div>
            <div className="flex text-black/75 gap-2">
               <MdLocationPin size={16} /> 
               <p className="text-xs ">Sikela, Arbaminch </p>
            </div>
        </div>
    </div>
  )
}

export default Events
