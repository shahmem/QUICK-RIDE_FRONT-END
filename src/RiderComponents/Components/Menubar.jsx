import { faClipboardList, faComments, faListCheck, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function Menubar({display}) {
   const [visible, setVisible] = useState(true);
      const [lastScrollY, setLastScrollY] = useState( 40);
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
        const navigate =useNavigate()
  return (
    <>
        <div className={`${display} flex w-full fixed bottom-0  px-6 py-3 md:px-24 z-30 md:py-3 justify-between text-sm bg-slate-100 transition-all transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"} `}>
          <div onClick={()=>{navigate('/riderbookings')}} className='flex flex-col items-center rounded-3xl p-2 gap-1 hover:bg-slate-200 cursor-pointer'>
          <FontAwesomeIcon className='md:size-5' icon={faListCheck} />
            <p  className='text-[9px] md:text-[11px] font-semibold '>Bookings</p>
          </div>
          {/* <div onClick={()=>{navigate('/riderchats')}} className='flex flex-col items-center rounded-3xl p-2 gap-1 hover:bg-slate-200 cursor-pointer'>
          <FontAwesomeIcon className='md:size-5' icon={faComments} />
            <p className='text-[9px] md:text-[11px] font-semibold'>Chats</p>
          </div> */}
          <div onClick={()=>{navigate('/riderhistory')}} className='flex flex-col items-center rounded-3xl p-2 gap-1 hover:bg-slate-200 cursor-pointer'>
          <FontAwesomeIcon className='md:size-5' icon={faClipboardList} />
            <p className='text-[9px] md:text-[11px] font-semibold'>History</p>
          </div>
          <div onClick={()=>{navigate('/ridertransaction')}} className='flex flex-col rounded-3xl p-2 items-center gap-1 hover:bg-slate-200 cursor-pointer'>
          <FontAwesomeIcon className='md:size-5' icon={faMoneyBillTrendUp} />
            <p className='text-[9px] md:text-[11px] font-semibold'>Transaction</p>
          </div>
        </div>
    </>
  )
}

export default Menubar