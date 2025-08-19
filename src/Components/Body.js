import React, { useState } from 'react'
import Sidebar from './Sidebar'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

const Body = () => {
     

  return (
    <div className='grid  grid-cols-12'>
      <Sidebar/>
      {/* <MainContainer/>
      <WatchPage/> */}
      <Outlet/>
    </div>
  )
}

export default Body
