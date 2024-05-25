import { Navbar, Header } from "./components"

export default function App() {

  return (
    <div className="w-[100vw] h-[100vh] max-w-[430px] m-auto font-montserrat">
        <section className="pt-6 bg-[#171766]">    
           <Navbar />
       </section>
        <section className="-mt-3"> 
            <Header />
       </section>
    </div>
  )
}