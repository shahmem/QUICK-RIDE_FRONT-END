import React from 'react'
import user from '../../assets/images/user.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'

function ChatWindow() {
  return (
    <>
        <div className='h-full  pt-16 md:block flex-1 bg-gradient-to-b from-[#ade9dc] via-[#cef3eb] p-3 to-[#8feed9] overflow-y-auto overflow-x-hidden'>
                    <div className='flex items-center gap-3 text-sm bg-[#f5f5f579] p-1 w-full rounded-[40px]'>
                        <img src={user} className='rounded-full object-fill h-12 w-12' alt="" />
                        <p>John Doe</p>
                    </div>
                    <div>
                    </div>
                    <div className=' flex px-5 items-center h-9 md:absolute md:w-[74.5%] right-1 bottom-1 '>
                        <div className='text-lg'><FontAwesomeIcon icon={faPaperclip} /></div>
                        <div className='flex-1 px-2 z-10 shadow-lg'><input type="text" className=' w-full py-1 rounded-[24px] pl-4 focus:outline-none text-sm' placeholder='Enter anything....' /></div>
                        <div><p className='text-white font-semibold bg-green-800 text-sm h-min rounded-[20px] clip-custom hover:bg-green-900 cursor-pointer px-3 pl-12 -ml-12 py-1'>send</p></div>
                    </div>
                </div>
    </>
  )
}

export default ChatWindow