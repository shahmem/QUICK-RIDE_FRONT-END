import { faCalendarCheck, faClipboardList, faComments, faListCheck, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function MenubarDvr() {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState( 40);
    const navigate =useNavigate()
    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
          setVisible(false);
        } else {
          setVisible(true);
        }
        setLastScrollY(window.scrollY);
      };
    
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, [lastScrollY]);
  return ( 
    <>
        <div className={`flex w-full fixed bottom-0  px-6 py-3 md:px-24 z-30 md:py-3 justify-between text-sm bg-slate-100 transition-all transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"} `}>
          <div onClick={()=>{navigate('/driverrequests')}} className='flex flex-col items-center rounded-3xl p-2 gap-1 hover:bg-slate-200'>
            <FontAwesomeIcon className='md:size-5' icon={faListCheck} />
            <p className='text-[9px] md:text-[11px] font-semibold'>Requests</p>
          </div>
          <div onClick={()=>{navigate('/driveryourride')}} className='flex flex-col items-center rounded-3xl p-2 gap-1 hover:bg-slate-200'>
            <FontAwesomeIcon className='md:size-5' icon={faCalendarCheck} />
            <p className='text-[9px] md:text-[11px] font-semibold'>Your Ride</p>
          </div>
          {/* <div  onClick={()=>{navigate('/driverchats')}} className='flex flex-col items-center rounded-3xl p-2 gap-1 hover:bg-slate-200'>
            <FontAwesomeIcon className='md:size-5' icon={faComments} />
            <p className='text-[9px] md:text-[11px] font-semibold'>Chats</p>
          </div> */}
          <div  onClick={()=>{navigate('/driverhistory')}} className='flex flex-col items-center rounded-3xl p-2 gap-1 hover:bg-slate-200'>
            <FontAwesomeIcon className='md:size-5' icon={faClipboardList} />
            <p className='text-[9px] md:text-[11px] font-semibold'>History</p>
          </div>
          <div  onClick={()=>{navigate('/drivertransaction')}} className=' md:flex flex-col rounded-3xl p-2 items-center gap-1 hover:bg-slate-200'>
            <FontAwesomeIcon className='md:size-5' icon={faMoneyBillTrendUp} />
            <p className='text-[9px] md:text-[11px] font-semibold'>Transaction</p>
          </div>
        </div>
    </>
  )
}

export default MenubarDvr