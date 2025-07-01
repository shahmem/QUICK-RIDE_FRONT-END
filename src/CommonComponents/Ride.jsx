import React from 'react'
import img from '../assets/images/drvr.jpeg'
import { useNavigate } from 'react-router'


function Ride() {
  const navigate =useNavigate();
  return (
    <>
    
    <div className='flex flex-col md:flex-row p-6 md:justify-between md:pr-14 gap-5'>
          <div className='flex flex-col gap-4 md:pl-12 text-[#2d8873] md:w-1/2 font-bold  '>
            <h1 className='md:max-w-96 leading-[3.7rem] md:leading-[5rem] text-5xl md:text-6xl md:tracking-tight'>
            Your Journey, Always Our Priority!
            </h1>
            <a onClick={()=>{navigate('/login', { state: { active: 'rider' }})}} className='cursor-pointer text-white bg-[#31977f] hover:bg-[#206d5b] w-max rounded-lg px-4 py-2 text-xs font-semibold'>Get Started</a>
          </div>
          <div className='flex justify-center'>
            <img className='md:w-[30rem] w-full' src={img} alt="" />
          </div>
        </div>
    </>
  )
}

export default Ride