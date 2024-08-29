import React from 'react'
import Navbar from "../../component/Navbar/Navbar"
import LandingPage from '../Landingpage/LandingPage'
import Menubar from '../MenuBar/Menubar'

const HomePage = () => {
  return (
    <div className="HomePage ">
    <Navbar/>
    <Menubar/>
    <LandingPage/>
    </div>
  )
}

export default HomePage