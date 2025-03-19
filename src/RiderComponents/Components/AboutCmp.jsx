import React from 'react'
import logo from '../../assets/images/logo.png'

function AboutCmp({aboutRef}) {
  return (
    <>
      <div ref={aboutRef} className='flex md:flex-row flex-col px-5 md:px-20 py-8 md:py-16'>
          <div className=' flex-1  flex justify-center pb-20 py-12 '>
            <img src={logo} className='md:w-72 object-contain w-52' alt="" />
          </div>
          <div className='md:w-[46%] md:px-12 md:py-16 p-9 bg-[#4FCAAD] text-white space-y-6'>
              <h3 className='text-4xl md:text-5xl'>About Us</h3>
              <p className='md:text-lg leading-6 md:leading-9 '>Welcome to QuickRide, your trusted platform for seamless and reliable driver services. Whether you need a driver for your personal car or a professional with their own vehicle, QuickRide connects you to skilled drivers quickly and efficiently.</p>
          </div>
      </div>
    </>
  )
}

export default AboutCmp