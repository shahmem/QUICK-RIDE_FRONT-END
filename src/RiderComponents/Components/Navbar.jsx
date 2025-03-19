import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import user from '../../assets/images/user.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router';


function Navbar({scrollToSection,className,hover}) {
    const [isScrolled, setIsScrolled] = useState(false);
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
        <nav className={`flex fixed z-20 ${className} ${isScrolled && "bg-[#f5f5f5]" }  transition-all duration-700 ease-in-out transform  md:px-8 p-3 items-center w-full justify-between`}>
            <div>
                <img onClick={()=>{navigate('/riderhome')}} className='w-24 cursor-pointer' src={logo} alt="logo" />
            </div>
            <div className='flex gap-40 text-xs font-bold'>
                <div className='md:flex hidden gap-6 tracking-wide'>
                    <Link to='/riderhome' className={` ${hover} uppercase px-3 py-1`}  >Home</Link>
                    <Link onClick={()=>{scrollToSection("about")}} className={` ${hover} uppercase px-3 py-1`} >About</Link> 
                    <Link onClick={()=>{scrollToSection("contact")}} className={` ${hover} uppercase px-3 py-1`} >Contact</Link>
                </div>
                <div className='flex gap-3'>
                     <div className='rounded-full w-7 md:w-8 border-[1px] bg-slate-300 hover:drop-shadow-[0px_0px_3px_rgba(0,0,0,0.3)] cursor-pointer'>
                        <img src={user} onClick={()=>{navigate('/riderprofile')}} className='object-fill rounded-full' alt="" />
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