import React from 'react'
import { MenuHeaderBg, MenuHeaderFr } from '../exports/exportImage'

export default function MenuHeader() {
  return (
    <div className='my-6 relative md:mx-20 md:my-16 md:w-auto lg:mx-40 xl:mx-32 '>
        <div className='shrink-0 mx-0'>
            <img src={MenuHeaderBg} alt="" 
            className='w-full h-72 opacity-0 md:opacity-100 md:w-fit md:h-80 lg:h-fit' />
            
            <img src={MenuHeaderFr} alt="" 
            className='absolute w-auto top-0 brightness-50 md:brightness-100 md:opacity-100 md:-right-6 md:top-8 md:w-1/2 lg:top-6 xl:right-0 xl:top-10 xl:w-fit '/>
        </div>
        <div className="text-white space-y-2 absolute top-10 md:w-5/12 md:space-y-4 md:top-8 md:left-16 lg:top-9 xl:top-16 xl:left-14">
            <h4 className="text-5xl font-['Freight'] uppercase xl:text-6xl">waysbuck</h4>
            <p className="md:text-xl xl:text-2xl">Things are changing, but we’re still here for you</p>
            <p className="text-sm xl:text-base">We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. 
            <br /><span className="font-bold">Waysbucks</span> Drivers is also available <br /><br /> Let’s Order...</p>
        </div>
    </div>
  )
}
