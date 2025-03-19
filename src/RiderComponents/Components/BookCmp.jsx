import React from 'react'
import { useNavigate } from 'react-router'

function BookCmp(props) {
  const navigate = useNavigate();

  return (
    <>
        <div className='flex flex-col justify-between gap-3 flex-1 px-4 py-3 rounded-2xl bg-slate-200 shadow-lg'>
          <div className='font-semibold'>{props.head}</div>
          <div className='text-sm tracking-[0.02em]'>{props.para}</div>
          <div className="w-full flex justify-end">
            <button onClick={()=>{navigate('/riderbookform')}} className='text-xs font-semibold bg-white hover:bg-slate-800 hover:text-white rounded-3xl px-3 py-1'>{props.btn}</button>
          </div>
        </div>
    </>
  )
}

export default BookCmp