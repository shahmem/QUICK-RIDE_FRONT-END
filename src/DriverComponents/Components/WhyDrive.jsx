import React from 'react'
import img from '../../assets/images/drv-img.svg'

function WhyDrive() {
  return (
    <>
    <div className='py-16 mt-24 px-4 md:px-28'>
        <div>
            <h3 className='text-2xl md:text-3xl font-bold'>Why Drive With Us ?</h3>
        </div>
        <div className='md:px-20 my-16'>
            <img src={img} alt="" />
        </div>
        <div className='flex flex-col md:flex-row md:justify-evenly gap-8 py-7'>
           <div className='flex flex-col gap-4 p-6 px-8  rounded-xl bg-slate-50 shadow-md'>
                <h4 className='font-bold'>Set your own hours</h4>
                <p className='text-sm font-semibold'>You decide when and how often you drive.</p>
            </div> 
           <div className='flex flex-col gap-4 p-6 px-8  rounded-xl bg-slate-50 shadow-md'>
                <h4 className='font-bold'>Set your own hours</h4>
                <p className='text-sm font-semibold'>You decide when and how often you drive.</p>
            </div> 
           <div className='flex flex-col gap-4 p-6 px-8  rounded-xl bg-slate-50 shadow-md'>
                <h4 className=' font-bold'>Set your own hours</h4>
                <p className='text-sm font-semibold'>You decide when and how often you drive.</p>
            </div> 
        </div>
            
    </div>
        
    </>
  )
}

export default WhyDrive