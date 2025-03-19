import React from 'react'
import img from '../../assets/images/img-2.jpg'
function WhyQuickRide() {
  return (
    <>
      <div className='flex flex-col md:flex-row bg-[#E8C8AD] p-4 py-14 gap-9 md:px-28 md:py-12'>
        <div className='md:w-[45%] md:p-7 my-3'>
          <img src={img} alt="" />
        </div>
        <div className='flex-1 md:px-12 md:py-7 p-2 space-y-8'>
              <h3 className='text-4xl md:text-5xl'>Why QuickRIde ?</h3>
              <p className='md:text-lg leading-6 md:leading-9 '>On-Demand Services: Hire drivers whenever you need, whether for short trips, long commutes, or commercial purposes.
Flexible Options: Choose between drivers for your car or those providing their own vehicles.
Transparent Pricing: Get fare estimates upfront with a clear breakdown of costs.
Secure Payments: Experience safe and hassle-free transactions with multiple payment options.</p>
          </div>
      </div>
    </>
  )
}

export default WhyQuickRide