import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChevronDown,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Autocomplete, GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const containerStyle = {
  width: "100%",
  height: "400px",
};
function History() {

  return (
    <>
      <div className="bg-slate-100 h-screen flex flex-col items-center justify-center overflow-auto">


        <Navbar className="bg-white"/>
        <Sidebar/>
        <div className=' flex flex-col gap-3 p-20 pl-64 px-28'>
          <div>
            <h3 className='text-xl font-semibold'>History :</h3>
          </div>
          <div className='flex gap-5 text-xs font-semibold'>
            <div className='bg-white px-2 py-1 rounded-md flex justify-between items-center gap-7 shadow'>Status <FontAwesomeIcon icon={faChevronDown} /></div>
            <div className='bg-white px-2 py-1 rounded-md flex justify-between items-center gap-7 shadow'>Sort <FontAwesomeIcon icon={faChevronDown}  /> </div>
            <div className='bg-white px-2 py-1 rounded-md flex justify-between items-center gap-7 shadow'>Filter <FontAwesomeIcon icon={faChevronDown}  /> </div>
          </div>
          
         
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className='pr-5'>
              <div className='font-semibold text-xl'>John Doe</div>
            </div>
            <div className=' text-[#111269] px-24 border-x-[1px]'>
              <div className='flex gap-3  items-center'>
                <FontAwesomeIcon className='text-sm' icon={faLocationDot} />
                <p className=' font-semibold'>Calicut</p>
                <p className='text-xl font-bold'>-</p>
                <p className=' font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-6'>62km</p>
            </div>
            <div className='text-sm pl-8 font-extralight text-slate-500'>
              <p>16/02/2025</p>
              <p>04:38:45 AM</p>
            </div>
          </div>
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className='pr-5'>
              <div className='font-semibold text-xl'>John Doe</div>
            </div>
            <div className=' text-[#111269] px-24 border-x-[1px]'>
              <div className='flex gap-3  items-center'>
                <FontAwesomeIcon className='text-sm' icon={faLocationDot} />
                <p className=' font-semibold'>Calicut</p>
                <p className='text-xl font-bold'>-</p>
                <p className=' font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-6'>62km</p>
            </div>
            <div className='text-sm pl-8 font-extralight text-slate-500'>
              <p>16/02/2025</p>
              <p>04:38:45 AM</p>
            </div>
          </div>
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className='pr-5'>
              <div className='font-semibold text-xl'>John Doe</div>
            </div>
            <div className=' text-[#111269] px-24 border-x-[1px]'>
              <div className='flex gap-3  items-center'>
                <FontAwesomeIcon className='text-sm' icon={faLocationDot} />
                <p className=' font-semibold'>Calicut</p>
                <p className='text-xl font-bold'>-</p>
                <p className=' font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-6'>62km</p>
            </div>
            <div className='text-sm pl-8 font-extralight text-slate-500'>
              <p>16/02/2025</p>
              <p>04:38:45 AM</p>
            </div>
          </div>
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className='pr-5'>
              <div className='font-semibold text-xl'>John Doe</div>
            </div>
            <div className=' text-[#111269] px-24 border-x-[1px]'>
              <div className='flex gap-3  items-center'>
                <FontAwesomeIcon className='text-sm' icon={faLocationDot} />
                <p className=' font-semibold'>Calicut</p>
                <p className='text-xl font-bold'>-</p>
                <p className=' font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-6'>62km</p>
            </div>
            <div className='text-sm pl-8 font-extralight text-slate-500'>
              <p>16/02/2025</p>
              <p>04:38:45 AM</p>
            </div>
          </div>
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className='pr-5'>
              <div className='font-semibold text-xl'>John Doe</div>
            </div>
            <div className=' text-[#111269] px-24 border-x-[1px]'>
              <div className='flex gap-3  items-center'>
                <FontAwesomeIcon className='text-sm' icon={faLocationDot} />
                <p className=' font-semibold'>Calicut</p>
                <p className='text-xl font-bold'>-</p>
                <p className=' font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-6'>62km</p>
            </div>
            <div className='text-sm pl-8 font-extralight text-slate-500'>
              <p>16/02/2025</p>
              <p>04:38:45 AM</p>
            </div>
          </div>
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className='pr-5'>
              <div className='font-semibold text-xl'>John Doe</div>
            </div>
            <div className=' text-[#111269] px-24 border-x-[1px]'>
              <div className='flex gap-3  items-center'>
                <FontAwesomeIcon className='text-sm' icon={faLocationDot} />
                <p className=' font-semibold'>Calicut</p>
                <p className='text-xl font-bold'>-</p>
                <p className=' font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-6'>62km</p>
            </div>
            <div className='text-sm pl-8 font-extralight text-slate-500'>
              <p>16/02/2025</p>
              <p>04:38:45 AM</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default History;
