import React from 'react'
import logo from '../../assets/images/logo.png'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <>
        <div className='bg-black md:px-20 py-7  md:py-12 text-white'>
                    <div className='pl-12'>
                        <img src={logo} alt="logo" className='w-28' />
                    </div>
                    <div className='flex flex-col  md:flex-row'>
                        <div className='flex flex-col pl-12 w-full  md:flex-row gap-10 md:gap-36 py-4  md:py-10 text-xs md:text-sm md:w-[60%]'>
                            <div className='space-y-2 md:space-y-5'>
                                <p className='font-semibold pb-4'>Company</p>
                                <p>About Us</p>
                                <p>Blog</p>
                                <p>Careers</p>
                                
                            </div>
                            <div className='space-y-2 md:space-y-5'>
                                <p className='font-semibold pb-4'>Products</p>
                                <p>Ride</p>
                                <p>Drive</p>
                                <p>Drive for Business</p>
                            </div>
                            <div className='space-y-2 md:space-y-5'>
                                <p className='font-semibold pb-4'>Travel</p>
                                <p>Reserve</p>
                                <p>Cities</p>
                                <p>On time</p>
                            </div>
                            
                        </div>
                        <div className='md:w-[40%]'>
                            <div className=' flex md:justify-end justify-center space-x-6'>
                                <FontAwesomeIcon icon={faInstagram} />
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faXTwitter} />
                            </div>
                        </div>
                    </div>
                    <div className=' flex flex-col-reverse md:flex-row items-center gap-3 md:justify-between font-light pt-6 text-sm text-[#aaa]'>
                        <p>© 2025 QuickRide Technologies Inc.</p>
                        <p className='space-x-6 '>
                            <span>Privacy</span>
                            <span>Accessibilty</span>
                            <span>Terms</span>
                        </p>
                    </div>
        
                </div>
    </>
  )
}

export default Footer