import React from 'react'
import NavBar from '../../Components/Navbar/Navbar'
import Solutions from '../../Components/Solutions/Solutions'
import './AboutUs.scss'
import JoinCustomer from '../../Components/JoinCustomer/JoinCustomer'
import Technology from '../../Components/Technology/Technology'
import System from '../../Components/System/System'
import Founders from '../../Components/Founders/Founders'
import AboutWork from '../../Components/AboutWork/AboutWork'
import DelivarITSolution from '../../Components/DelivarITSolution/DelivarITSolution'
import Footer from '../../Components/Footer/Footer'
const AboutUs = () => {
  return (
  <React.Fragment>
<div className='about-us-main-div'>
    <NavBar content="true"/>
    <Solutions/>
    <JoinCustomer/>
    <Technology/>
    <div className='mt-5 pt-5'>
    <System/>
    </div>
    <Founders/>
    <AboutWork/>
    <DelivarITSolution/>
    <Footer/>
</div>

  </React.Fragment>
  )
}

export default AboutUs
