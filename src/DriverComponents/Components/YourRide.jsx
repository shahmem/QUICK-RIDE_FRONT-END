import React from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faChevronDown, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar'

function YourRide() {
  return (
    <>
    <div className='bg-slate-100 h-screen overflow-auto'>
        <Navbar className="bg-white"/>
        <Sidebar/>
        <div className=' flex flex-col gap-3 p-20 pl-64 px-28'>
          <div>
            <h3 className='text-xl font-semibold'>Your Rides :</h3>
          </div>
          <div className='flex gap-5 text-xs font-semibold'>
            <div className='bg-white px-2 py-1 rounded-md flex justify-between items-center gap-7 shadow'>Status <FontAwesomeIcon icon={faChevronDown} /></div>
            <div className='bg-white px-2 py-1 rounded-md flex justify-between items-center gap-7 shadow'>Sort <FontAwesomeIcon icon={faChevronDown}  /> </div>
            <div className='bg-white px-2 py-1 rounded-md flex justify-between items-center gap-7 shadow'>Filter <FontAwesomeIcon icon={faChevronDown}  /> </div>
          </div>
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className=' text-[#111269]'>
              <div className='flex gap-6 items-center'>
                <FontAwesomeIcon icon={faLocationDot} />
                <p className='text-lg font-semibold'>Calicut</p>
                <p className='text-2xl font-bold'>-</p>
                <p className='text-lg font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-9'>62km</p>
            </div>
            <div>
              <p className='text-xl font-bold border-x-[1px] px-20 py-2 text-blue-900'>$560</p>
            </div>
            <div className='flex gap-1 items-center px-24 flex-col'>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faClock} />
                <p className='text-xl font-semibold'>4:00 PM</p>
              </div>
              <div className='flex gap-2 items-center'>
              <FontAwesomeIcon icon={faCalendarDays} size='sm'/>
              <p className='text-sm text-center'>16/02/2025</p>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className=' text-[#111269]'>
              <div className='flex gap-6 items-center'>
                <FontAwesomeIcon icon={faLocationDot} />
                <p className='text-lg font-semibold'>Calicut</p>
                <p className='text-2xl font-bold'>-</p>
                <p className='text-lg font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-9'>62km</p>
            </div>
            <div>
              <p className='text-xl font-bold border-x-[1px] px-20 py-2 text-blue-900'>$560</p>
            </div>
            <div className='flex gap-1 items-center px-24 flex-col'>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faClock} />
                <p className='text-xl font-semibold'>4:00 PM</p>
              </div>
              <div className='flex gap-2 items-center'>
              <FontAwesomeIcon icon={faCalendarDays} size='sm'/>
              <p className='text-sm text-center'>16/02/2025</p>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className=' text-[#111269]'>
              <div className='flex gap-6 items-center'>
                <FontAwesomeIcon icon={faLocationDot} />
                <p className='text-lg font-semibold'>Calicut</p>
                <p className='text-2xl font-bold'>-</p>
                <p className='text-lg font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-9'>62km</p>
            </div>
            <div>
              <p className='text-xl font-bold border-x-[1px] px-20 py-2 text-blue-900'>$560</p>
            </div>
            <div className='flex gap-1 items-center px-24 flex-col'>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faClock} />
                <p className='text-xl font-semibold'>4:00 PM</p>
              </div>
              <div className='flex gap-2 items-center'>
              <FontAwesomeIcon icon={faCalendarDays} size='sm'/>
              <p className='text-sm text-center'>16/02/2025</p>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className=' text-[#111269]'>
              <div className='flex gap-6 items-center'>
                <FontAwesomeIcon icon={faLocationDot} />
                <p className='text-lg font-semibold'>Calicut</p>
                <p className='text-2xl font-bold'>-</p>
                <p className='text-lg font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-9'>62km</p>
            </div>
            <div>
              <p className='text-xl font-bold border-x-[1px] px-20 py-2 text-blue-900'>$560</p>
            </div>
            <div className='flex gap-1 items-center px-24 flex-col'>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faClock} />
                <p className='text-xl font-semibold'>4:00 PM</p>
              </div>
              <div className='flex gap-2 items-center'>
              <FontAwesomeIcon icon={faCalendarDays} size='sm'/>
              <p className='text-sm text-center'>16/02/2025</p>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className=' text-[#111269]'>
              <div className='flex gap-6 items-center'>
                <FontAwesomeIcon icon={faLocationDot} />
                <p className='text-lg font-semibold'>Calicut</p>
                <p className='text-2xl font-bold'>-</p>
                <p className='text-lg font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-9'>62km</p>
            </div>
            <div>
              <p className='text-xl font-bold border-x-[1px] px-20 py-2 text-blue-900'>$560</p>
            </div>
            <div className='flex gap-1 items-center px-24 flex-col'>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faClock} />
                <p className='text-xl font-semibold'>4:00 PM</p>
              </div>
              <div className='flex gap-2 items-center'>
              <FontAwesomeIcon icon={faCalendarDays} size='sm'/>
              <p className='text-sm text-center'>16/02/2025</p>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className=' text-[#111269]'>
              <div className='flex gap-6 items-center'>
                <FontAwesomeIcon icon={faLocationDot} />
                <p className='text-lg font-semibold'>Calicut</p>
                <p className='text-2xl font-bold'>-</p>
                <p className='text-lg font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-9'>62km</p>
            </div>
            <div>
              <p className='text-xl font-bold border-x-[1px] px-20 py-2 text-blue-900'>$560</p>
            </div>
            <div className='flex gap-1 items-center px-24 flex-col'>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faClock} />
                <p className='text-xl font-semibold'>4:00 PM</p>
              </div>
              <div className='flex gap-2 items-center'>
              <FontAwesomeIcon icon={faCalendarDays} size='sm'/>
              <p className='text-sm text-center'>16/02/2025</p>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className=' text-[#111269]'>
              <div className='flex gap-6 items-center'>
                <FontAwesomeIcon icon={faLocationDot} />
                <p className='text-lg font-semibold'>Calicut</p>
                <p className='text-2xl font-bold'>-</p>
                <p className='text-lg font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-9'>62km</p>
            </div>
            <div>
              <p className='text-xl font-bold border-x-[1px] px-20 py-2 text-blue-900'>$560</p>
            </div>
            <div className='flex gap-1 items-center px-24 flex-col'>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faClock} />
                <p className='text-xl font-semibold'>4:00 PM</p>
              </div>
              <div className='flex gap-2 items-center'>
              <FontAwesomeIcon icon={faCalendarDays} size='sm'/>
              <p className='text-sm text-center'>16/02/2025</p>
              </div>
            </div>
          </div>
         
          

        </div>
    </div>
    </>
  )
}

export default YourRide