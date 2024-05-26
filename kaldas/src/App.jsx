import { Navbar, Header, Slider } from "./components"
import { RiArrowRightSFill } from "react-icons/ri";

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
    </div>
  )
}