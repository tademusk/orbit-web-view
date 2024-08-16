import { Navbar, Header, Slider, EventList } from "./components"
import { RiArrowRightSFill } from "react-icons/ri";
import { MdExplore, MdEmojiEvents } from "react-icons/md";
import { TbHexagonPlusFilled } from "react-icons/tb";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { NavLink } from 'react-router-dom';


export default function App() {

  return (
    <div className="w-[100vw] h-[100vh] max-w-[430px] m-auto font-montserrat">
        <section className=" bg-[#171766]">    
            <Navbar />
       </section>
        <section className="-mt-3"> 
            <Header />
       </section>
        <section className="px-5"> 
            <div className="flex justify-between py-3">
               <p className="text-lg font-semibold text-[#171766]">Upcoming Events</p>
               <div className="flex items-center text-black/50 px-4">
                 <p className="font-semibold">See All</p>
                 <RiArrowRightSFill size={25} />
               </div>
            </div>
       </section>
       <section className=""> 
          <Slider />
       </section>
       <section className="px-5"> 
            <div className="flex justify-between py-5">
               <p className="text-xl font-semibold text-[#171766]">Top Tickets</p>
               <div className="flex items-center text-black/50 px-4">
                 <p className="font-semibold">See All</p>
                 <RiArrowRightSFill size={25} />
               </div>
            </div>
       </section>
       <section className="px-5"> 
            <EventList />
       </section>
       <section className="py-12">

       </section>
       <section className="mx-auto">
           <div className="flex bottomnav justify-around items-center bg-white py-3 max-w-[430px] fixed -bottom-1 left-0 w-full">
              <NavLink className="flex flex-col text-[#171766] items-center">
                <MdExplore size={28} />
                 <p className="text-xs">Explore</p>
              </NavLink>
              <NavLink className="flex flex-col text-black/30 items-center">
                <MdEmojiEvents size={28} />
                 <p className="text-xs">Events</p>
              </NavLink>
              <NavLink className="flex flex-col text-[#171766] items-center">
                 <TbHexagonPlusFilled size={50} />
              </NavLink>
              <NavLink className="flex flex-col text-black/30 items-center">
                <BsTicketPerforatedFill size={28} />
                 <p className="text-xs">Tickets</p>
              </NavLink>
              <NavLink className="flex flex-col text-black/30 items-center">
                <IoMdPerson size={28} />
                 <p className="text-xs">Profile</p>
              </NavLink>
           </div>
       </section>
    </div>
  )
}