import React from 'react'
import CommonRouter from './Router/CommonRouter'
import { BrowserRouter } from 'react-router'
import RiderRouter from './Router/RiderRouter'
import DriverRouter from './Router/DriverRouter'

function App() {
  return (
    <>

      <BrowserRouter>
        <CommonRouter/>
        <RiderRouter/>
        <DriverRouter/>
      </BrowserRouter>

    </>
  )
}

export default App