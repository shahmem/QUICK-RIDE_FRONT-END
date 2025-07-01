import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function CommonNavbar() {
    const[isOpen,setIsOpen] = useState(false);
    const togglerBtn = () =>{
        setIsOpen(!isOpen);
    }
    const navigate= useNavigate();
  return (
    <>
        <nav className='flex md:px-8 p-3 md:pt-5 items-center w-full justify-between'>
            <div>
                <img className='w-24' src={logo} alt="logo" />
            </div>
            <div className='flex gap-40 text-xs font-semibold'>
                <div className='py-1 hidden md:block'>
                    <a onClick={()=>{navigate('/login')}}  className='text-white bg-[#3aad92] hover:bg-[#319981] rounded-lg px-4 py-2 text-xs font-semibold cursor-pointer'>Get Started</a>
                </div>
            </div>
        </nav>
    </>
  )
}

export default CommonNavbar