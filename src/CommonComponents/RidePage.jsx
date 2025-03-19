import React from 'react'
import Ride from './Ride'
import CommonNavbar from './CommonNavbar'
import WhyQuickRide from './WhyQuickRide'
import CommonFooter from './CommonFooter'

function RidePage() {
  return (
    <>
        <CommonNavbar/>
        <Ride/>
        <WhyQuickRide/>
        <CommonFooter/>
    </>
  )
}

export default RidePage