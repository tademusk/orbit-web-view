import React from 'react'
import '../App.css'

import SliderCard from './SliderCard'

const Slider = () => {
  return (
    <div className='cursor-default overflow-x-auto flex items-center scrollHr'>
    <div className="flex gap-8 pl-5 w-full">
       <SliderCard />
       <SliderCard />
       <SliderCard />
       <SliderCard />

    </div>
</div>
  )
}

export default Slider
