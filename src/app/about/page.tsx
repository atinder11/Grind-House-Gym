import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import CallUs from '@/components/CallUs'
import AboutUs from '@/components/AboutUs'
import ChooseUs from '@/components/ChooseUs'
import Coaches from '@/components/Coaches'


function page() {
  return (
    <>
    <Navbar/>
    <AboutUs/>
    <ChooseUs/>
    <Coaches/>
   
   <CallUs/>
    <Footer/>
    </>
  )
}

export default page