import React, { useRef } from 'react'
import CommonNavbar from './CommonNavbar'
import CommonFooter from './CommonFooter'
import Drive from './Drive'
import Ride from './Ride'
import WhyQuickRide from './WhyQuickRide'
import { useNavigate } from 'react-router'


function CommonHome() {
  const navigate =useNavigate();
  return (
    <>
      <CommonNavbar/>
      
      
      <div className='p-4'>
        <Ride/>
        <div className='flex flex-col md:flex-row gap-8 md:gap-20 py-12 md:px-16 md:pt-20  justify-between'>
          <div className='flex-1 shadow shadow-[#267e69] font-semibold rounded-3xl px-8 py-5 flex flex-col justify-between space-y-5'>
            <h3 className='text-lg text-[#267e69]'>Ready to Ride</h3>
            <p className='text-sm '>QuickRide is your go-to platform for convenient and reliable driver services. enjoying a seamless and comfortable experience.</p>
            <a onClick={()=>{navigate('/login', { state: { active: 'rider' }})}} className='bg-[#31977f] cursor-pointer hover:bg-[#206d5b] text-white font-semibold text-xs tracking-wide py-2 px-5 rounded-3xl w-max' >Get Started</a>
          </div>
          <div className='flex-1 shadow shadow-[#267e69] font-semibold rounded-3xl px-8 py-5 flex flex-col justify-between space-y-5'>
            <h3 className='text-lg text-[#267e69]'>Ready to Drive</h3>
            <p className='text-sm '>Drive when you want, set your goals, and achieve financial flexibility.</p>
            <a onClick={()=>{navigate('/login', { state: { active: 'driver' }})}} className='bg-[#31977f] cursor-pointer hover:bg-[#206d5b] text-white font-semibold text-xs tracking-wide py-2 px-5 rounded-3xl w-max' >Get Started</a>
          </div>
        </div>
      <Drive />
      </div>
      <WhyQuickRide/>
      <CommonFooter/>
    </>
  )
}

export default CommonHome