import React from 'react'
import Home from '../RiderComponents/Pages/Home'
import { Route, Routes } from 'react-router'
import ProfileForm from '../RiderComponents/Components/ProfileForm'
import BookForm from '../RiderComponents/Components/BookForm'
import Booking from '../RiderComponents/Components/Booking'
import Chats from '../RiderComponents/Components/Chats'
import History from '../RiderComponents/Components/History'
import Transaction from '../RiderComponents/Components/Transaction'
import ChatWindow from '../RiderComponents/Components/ChatWindow'

function RiderRouter() {
  return (
    <>
        <Routes>
            <Route path="/riderhome" element={<Home />} />
            <Route path="/riderprofile" element={<ProfileForm />} />
            <Route path="/riderbookform" element={<BookForm />} />
            <Route path="/riderbookings" element={<Booking />} />
            <Route path="/riderchats" element={<Chats />} />
            <Route path="/riderchatswindow" element={<ChatWindow />} />
            <Route path="/riderhistory" element={<History />} />
            <Route path="/ridertransaction" element={<Transaction />} />
        </Routes> 
    </>
  )
}

export default RiderRouter