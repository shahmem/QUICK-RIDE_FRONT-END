import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faHeadset} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router';


function Navbar({scrollToSection,className,hover}) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isActive , setIsActive] =useState(false)
    const[isOpen,setIsOpen] = useState(false);
    const togglerBtn = () =>{
        setIsOpen(!isOpen);
    }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navigate =useNavigate();
  return (
    <>
        <nav className={`flex fixed z-20 bg-[#f5f5f5] ${className} transition-all duration-700 ease-in-out transform  md:px-12 p-2.5 items-center w-full justify-between`}>
            <div>
                <Link to='/driverhome'><img className='w-24' src={logo} alt="logo" /></Link>
            </div>
            <div className='flex gap-40 text-sm'>
                <div className='flex'>
                  <div className='hidden md:flex px-6 items-center gap-4'>
                    <div>
                      <p className=' text-slate-400'>Status</p>
                    </div>
                    <div>
                      <div onClick={()=>{setIsActive(!isActive)}} className={`w-10 rounded-3xl cursor-pointer transition-all duration-500 ease-in-out transform ${isActive ? "bg-green-400" : "bg-slate-400"}  h-[18px] p-[1px]`}>
                        <div className={`w-[16px] h-[16px] bg-white rounded-full  transition-all duration-500 ease-in-out transform ${isActive ? "translate-x-[22px]" : "translate-x-0"}`}></div>
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:block px-6 border-l-[1px] border-slate-300'>
                  <FontAwesomeIcon icon={faHeadset} className='size-5 cursor-pointer' />
                  </div>
                  <div className='hidden md:block px-6 border-l-[1px] border-slate-300'>
                  <FontAwesomeIcon onClick={()=>{navigate('/driverprofile')}}  icon={faUser} className='size-5 cursor-pointer' />
                  </div>
                  <button className='md:hidden' onClick={togglerBtn}>
                    {isOpen ? '' : <FontAwesomeIcon icon={faBars} />}
                  </button>
                </div>
               
            </div>
        </nav>
    </>
  )
}

export default Navbar