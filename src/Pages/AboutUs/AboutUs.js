import React from 'react'
import NavBar from '../../components/Navbar/Navbar'
import Solutions from '../../components/Solutions/Solutions'
import './AboutUs.scss'
import JoinCustomer from '../../components/JoinCustomer/JoinCustomer'
import Technology from '../../components/Technology/Technology'
import System from '../../components/System/System'
import Founders from '../../components/Founders/Founders'
import AboutWork from '../../components/AboutWork/AboutWork'
import DelivarITSolution from '../../components/DelivarITSolution/DelivarITSolution'
import Footer from '../../components/Footer/Footer'
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
