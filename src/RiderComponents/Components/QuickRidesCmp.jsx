import React from 'react'
import bg from '../../assets/images/img-3.jpg'

function QuickRidesCmp() {
  const divStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: "rotateY(180deg)",
  };
  
  return (
    <>
      <div style={divStyle} className=' w-full flex flex-col md:flex-row p-4 md:p-20 md:pt-24 pt-36'>
        <div className='bg-white p-5 md:p-10 lg:w-[38%] md:w-[60%] space-y-7 md:space-y-10' style={{transform: "rotateY(180deg)"}}>
          <p className='text-4xl md:text-5xl mt-4'>QuickRide</p>
          <p className='md:text-lg leading-8 md:leading-9 text-justify'>At QuickRide, we aim to redefine the standards of convenience and reliability in the driver service industry. By leveraging technology, we empower customers and drivers alike, fostering a seamless connection between them.QuickRide connects you to skilled drivers quickly and efficiently.</p>
        </div>
      </div>
    </>
  )
}

export default QuickRidesCmp