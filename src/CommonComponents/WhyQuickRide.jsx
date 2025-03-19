import React from 'react'
import img2 from '../assets/images/img-3.jpg'

function WhyQuickRide() {
  return (
    <>
    <div className='bg-[#2d8873] text-[#ffffff] flex flex-col-reverse md:flex-row p-5 py-12 gap-14  md:p-20 justify-around'>
        <div className='md:w-[40%]'>
          <img src={img2} alt="" />
        </div>
        <div className=' md:w-[58%] md:px-6  space-y-12'>
          <h2 className='  text-5xl  font-bold'>Why QuickRide ?</h2>
          <p className='md:max-w-[80%] font-semibold leading-9'>We bridge the gap between riders and drivers, creating a service that's built on convenience, trust, and mutual benefit. With QuickRide, every ride becomes a smooth journey, and every drive turns into a rewarding experience.</p>
        </div>
      </div>
    </>
  )
}

export default WhyQuickRide