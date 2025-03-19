import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../DriverComponents/Pages/Home'
import ProfileForm from '../DriverComponents/Components/ProfileForm'
import Profile from '../DriverComponents/Components/Profile'
import Bookings from '../DriverComponents/Components/YourRide'
import Transaction from '../DriverComponents/Components/Transaction'
import Chats from '../DriverComponents/Components/Chats'
import History from '../DriverComponents/Components/History'
import YourRide from '../DriverComponents/Components/YourRide'
import Requests from '../DriverComponents/Components/Requests'

function DriverRouter() {
  return (
    <>
        <Routes>
           <Route path="/driverhome" element={<Home />} />
           <Route path="/driverprofile" element={<ProfileForm />} />
           <Route path="/driverprofilecard" element={<Profile />} />
           <Route path="/driveryourride" element={<YourRide />} />
           <Route path="/driverrequests" element={<Requests />} />
           <Route path="/driverchats" element={<Chats />} />
           <Route path="/drivertransaction" element={<Transaction />} />
           <Route path="/driverhistory" element={<History />} />
        </Routes>
    </>
  )
}

export default DriverRouter