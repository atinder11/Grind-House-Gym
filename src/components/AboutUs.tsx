import React from 'react'
import Image from 'next/image'

import Trainer from "@/assets/trainer.jpg"
function AboutUs() {
  return (
    <>
    <div className='p-2 '>
      <h2 className='text-center text-3xl font-bold  '>About us</h2>
      <div className='grid grid-cols-1 md:grid-cols-2  p-2 '>
        <div className=' flex justify-center items-center  overflow-hidden' data-aos="fade-right">
          <Image src={Trainer} height={400} width={400} alt="trainer " 
          className='object-contain rounded-2xl p-2 '/>
        </div>
        <div data-aos="fade-left" >
          <p className='text-pretty p-2'>
             Welcome to <span className="font-semibold text-black dark:text-white">Grind House</span>, where strength meets discipline and results speak louder than words. Founded in the heart of the USA, Grind House isn’t just a gym — it’s a community built for those who push their limits, embrace the grind, and never settle for average.
            <br /><br />
            Our mission is simple: to help you become the strongest version of yourself — physically and mentally. Whether you’re lifting heavy, crushing cardio, or mastering mobility, we provide state-of-the-art equipment, expert trainers, and a motivating environment to fuel your goals.
            <br /><br />
            At Grind House, every rep counts and every member matters. From beginners to elite athletes, we empower everyone to train harder, recover smarter, and live healthier.
            <br /><br />
            Join us and experience what true dedication feels like. <span className="font-semibold">This is your house — the Grind House. 💪</span>
          
          </p>
        </div>
      </div>

    </div>
    </>
  )
}

export default AboutUs