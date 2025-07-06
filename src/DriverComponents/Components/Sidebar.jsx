import { faCalendarCheck, faClipboardList, faComments, faListCheck, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router'

function Sidebar() {
    const navigate =useNavigate()
  return (
     <div className={`flex flex-col h-[92vh] fixed left-0 bottom-0 bg-slate-200 px-4 py-3 md:px-12 z-30 md:py-12 justify-between text-sm transition-all transform duration-300 `}>
              <div onClick={()=>{navigate('/driverrequests')}} className='flex flex-col group items-center rounded-3xl p-6 gap-1 hover:bg-slate-100'>
                <FontAwesomeIcon className='md:size-6' icon={faListCheck} />
                <div className="absolute  text-black text-center p-0.5 mt-12 opacity-0 group-hover:opacity-100 text-xs transition-opacity duration-300">
                Requests
                </div>
              </div>
              <div onClick={()=>{navigate('/driveryourride')}} className='flex flex-col group items-center rounded-3xl p-6 gap-1 hover:bg-slate-100'>
                <FontAwesomeIcon className='md:size-6' icon={faCalendarCheck} />
                <div className="absolute  text-black text-center p-0.5 mt-12 opacity-0 group-hover:opacity-100 text-xs transition-opacity duration-300">
                Your Rides
                </div>
              </div>
              {/* <div  onClick={()=>{navigate('/driverchats')}} className='flex flex-col group items-center rounded-3xl p-6 gap-1 hover:bg-slate-100'>
                <FontAwesomeIcon className='md:size-6' icon={faComments} />
                <div className="absolute  text-black text-center p-0.5 mt-12 opacity-0 group-hover:opacity-100 text-xs transition-opacity duration-300">
                Chats
                </div>
              </div> */}
              <div  onClick={()=>{navigate('/driverhistory')}} className='flex flex-col group items-center rounded-3xl p-6 gap-1 hover:bg-slate-100'>
                <FontAwesomeIcon className='md:size-6' icon={faClipboardList} />
                <div className="absolute  text-black text-center p-0.5 mt-12 opacity-0 group-hover:opacity-100 text-xs transition-opacity duration-300">
                History
                </div>
              </div>
              <div  onClick={()=>{navigate('/drivertransaction')}} className='flex flex-col group rounded-3xl p-6 items-center gap-1 hover:bg-slate-100'>
                <FontAwesomeIcon className='md:size-6' icon={faMoneyBillTrendUp} />
                <div className="absolute  text-black text-center p-0.5 mt-12 opacity-0 group-hover:opacity-100 text-xs transition-opacity duration-300">
                Transactions
                </div>
              </div>
            </div>
  )
}

export default Sidebar