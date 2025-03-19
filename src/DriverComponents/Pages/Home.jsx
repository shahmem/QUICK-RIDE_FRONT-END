import React from 'react'
import Navbar from '../Components/Navbar'
import speedmtr from '../../assets/images/speedometer.jpg'
import WhyDrive from '../Components/WhyDrive'
import Footer from '../Components/Footer'
import Menubar from '../Components/MenuBar'

function Home() {
  return (
    <>
        <Navbar/>
        <div className='flex flex-col md:justify-evenly md:flex-row gap-9 md:pt-32 pt-24 md:px-24 px-4'>
          <div className='flex-1 md:px-8'>
            <p className='text-[37px] font-semibold md:max-w-[69%] tracking-[-0.020em] md:leading-[4.7rem] md:text-[3.4rem]'>Drive when you want, make what you need</p>
          </div>
          <div className='flex-1'>
            <img src={speedmtr} alt="" />
          </div>
        </div>
        <WhyDrive/>
        <Menubar/>
        <Footer/>
    </>
  )
}

export default Home