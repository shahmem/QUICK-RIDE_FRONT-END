import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function Profile({setSubmitted}) {
  const [saveddata, setSaveddata] = useState([]);
  const navigate =useNavigate()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("formData")) || [];
    setSaveddata(data);
    console.log(data);
    
  }, []);
  const handleEdit =()=>{
    setSubmitted(false)
    navigate('/driverprofile')

  }

  return (
    <div className='grid place-items-center pt-24'>
        {saveddata.length > 0 ? (
            saveddata.map((data)=>(
            <div>
                <div className='flex gap-4 p-4  rounded-lg shadow-2xl'>
                <div className='shadow p-8 rounded-md'>
                    <div className=''>
                        <button type='button' onClick={handleEdit}>
                        <FontAwesomeIcon size='xl' icon={faPenToSquare} />
                        </button>
                    </div>
                    <div>
                        <img src={data.profilePicture} className='rounded-full w-56 h-56' alt="" />
                    </div>
                    <div className='mt-10'>
                        <p className='text-2xl font-semibold capitalize'>{data.fname} {data.lname}</p>
                    </div>
                    <ul className='mt-4 flex flex-col gap-3'>
                        <li className='capitalize'><span className='font-semibold'>First Name :</span>  {data.fname}</li>
                        <li className='capitalize' ><span className='font-semibold'>Last Name :</span> {data.lname}</li>
                        <li><span className='font-semibold'>Email :</span> {data.email}</li>
                        <li><span className='font-semibold'>Phone :</span> {data.phone}</li>
                    </ul>
                </div>
                <div className='flex gap-20 p-8 pt-12 shadow'>
                    <div>
                        <ul className='mt-4 flex flex-col gap-6'>
                            <li className='capitalize'><span className='font-semibold'>License Number :</span>  {data.license}</li>
                            <li className='capitalize' ><span className='font-semibold'>Date of Issued :</span> {data.dateIssued}</li>
                            <li className='capitalize' ><span className='font-semibold'>Date of Expire :</span> {data.dateexpire}</li>
                            <li> <span className='font-semibold'>Imgae of License : </span><br /><br /><img className='w-64 h-52' src={data.licenseImg} alt="" /></li>
                        </ul>
                    </div>
                    {data.regNum && (
                    <div>
                        <h3 className='text-xl font-semibold py-3'>Vehicle Details :</h3>
                        <ul className='mt-4 flex flex-col gap-7'>
                            <li className='capitalize'><span className='font-semibold'>Registration Number :</span>  {data.regNum}</li>
                            <li className='capitalize' ><span className='font-semibold'>Brand of vehicle :</span> {data.brand}</li>
                            <li className='capitalize' ><span className='font-semibold'>Model (Varient)  :</span> {data.model}</li>
                            <li className='flex gap-2'>
                                <li className=' space-y-2'> <span className='font-semibold'>Imgae of  RC : </span><br /><img className='w-36 h-28' src={data.rcImg} alt="" /></li>
                                <li className=' space-y-2'> <span className='font-semibold'>Imgae of Insurance : </span><br /><img className='w-36 h-28' src={data.insurance} alt="" /></li>
                            </li>
                            
                        </ul>
                    </div>
                    )}

                </div>
                
            </div>
            </div>
            
            ))
        ):(
            <div className='pt-36 text-xl '>not updated</div>
        ) }
   

    </div>
  )
}

export default Profile