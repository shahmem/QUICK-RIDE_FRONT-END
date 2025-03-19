import React from 'react'
import CommonHome from '../CommonComponents/CommonHome'
import { Route, Routes } from 'react-router'
import Signup from '../CommonComponents/Signup'
import Login from '../CommonComponents/Login'
import Forget from '../CommonComponents/Forget'


function CommonRouter() {
  return (
    <>
        <Routes>
            <Route path="/" element={<CommonHome />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<Forget />} />
        </Routes>       
    </>
  )
}

export default CommonRouter