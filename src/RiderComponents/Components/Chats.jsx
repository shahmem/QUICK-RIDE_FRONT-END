import React from 'react'
import Navbar from './Navbar'
import ChatWindow from './ChatWindow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import user from '../../assets/images/user.jpeg'
import '../../Style/Style.css'
import { useNavigate } from 'react-router'


function Chats() {
  const navigate =useNavigate();
  return (
    <>
    <Navbar className='bg-white' />
    <div className='flex h-screen'>
      <div className='bg-[#9cccc69c] w-full md:w-[25%] h-full pt-16 scrollable-container'>
        <div className='px-3 flex items-center'>
          <input type="text" placeholder='Search' className='px-3 focus:outline-none py-1 placeholder:text-sm rounded-3xl w-full bg-[#ffffff56]'/><FontAwesomeIcon className='-ml-7 text-slate-500' icon={faMagnifyingGlass} />
        </div>
        <div className='p-3 space-y-2'>
          <div onClick={()=>{navigate('/riderchatswindow')}} className='flex items-center gap-3 text-sm bg-[#f5f5f5ea] p-1 w-full rounded-[40px]'>
            <img src={user} className='rounded-full object-fill h-12 w-12' alt="" />
            <p>John Doe</p>
          </div>
          <div className='flex items-center gap-3 text-sm bg-[#f5f5f5ea] p-1 w-full rounded-[40px]'>
            <img src={user} className='rounded-full object-fill h-12 w-12' alt="" />
            <p>John Doe</p>
          </div>
          <div className='flex items-center gap-3 text-sm bg-[#f5f5f5ea] p-1 w-full rounded-[40px]'>
            <img src={user} className='rounded-full object-fill h-12 w-12' alt="" />
            <p>John Doe</p>
          </div>
          <div className='flex items-center gap-3 text-sm bg-[#f5f5f5ea] p-1 w-full rounded-[40px]'>
            <img src={user} className='rounded-full object-fill h-12 w-12' alt="" />
            <p>John Doe</p>
          </div>
          <div className='flex items-center gap-3 text-sm bg-[#f5f5f5ea] p-1 w-full rounded-[40px]'>
            <img src={user} className='rounded-full object-fill h-12 w-12' alt="" />
            <p>John Doe</p>
          </div>
          <div className='flex items-center gap-3 text-sm bg-[#f5f5f5ea] p-1 w-full rounded-[40px]'>
            <img src={user} className='rounded-full object-fill h-12 w-12' alt="" />
            <p>John Doe</p>
          </div>
          <div className='flex items-center gap-3 text-sm bg-[#f5f5f5ea] p-1 w-full rounded-[40px]'>
            <img src={user} className='rounded-full object-fill h-12 w-12' alt="" />
            <p>John Doe</p>
          </div>
          <div className='flex items-center gap-3 text-sm bg-[#f5f5f5ea] p-1 w-full rounded-[40px]'>
            <img src={user} className='rounded-full object-fill h-12 w-12' alt="" />
            <p>John Doe</p>
          </div>
          <div className='flex items-center gap-3 text-sm bg-[#f5f5f5ea] p-1 w-full rounded-[40px]'>
            <img src={user} className='rounded-full object-fill h-12 w-12' alt="" />
            <p>John Doe</p>
          </div>
          <div className='flex items-center gap-3 text-sm bg-[#f5f5f5ea] p-1 w-full rounded-[40px]'>
            <img src={user} className='rounded-full object-fill h-12 w-12' alt="" />
            <p>John Doe</p>
          </div>
          
        </div>

      </div>
      <ChatWindow/>
    </div>
        
    </>
  )
}

export default Chats