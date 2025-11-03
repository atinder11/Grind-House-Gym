"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import trainerImg from "../assets/testimonial1.jpg" 
import img2 from "../assets/testimonial2.jpg" 
import img3 from "../assets/testimonial3.jpg" 
import img4 from "../assets/testimonial4.jpg" 
import img5 from "../assets/testimonial5.jpg" 
import img6 from "../assets/testimonial6.jpg" 
import img7 from "../assets/testimonial7.jpg" 
import img8 from "../assets/testimonial8.jpg" 

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Fitness Enthusiast",
    message:
      "Joining this gym has transformed my life! The trainers are highly professional and the environment keeps me motivated every day.",
    image: trainerImg,
  },
  {
    name: "Priya Mehta",
    role: "Yoga Practitioner",
    message:
      "Amazing experience! The yoga sessions helped me improve flexibility and mental peace. Highly recommended!",
    image: img2,
  },
  {
    name: "Amit Verma",
    role: "Bodybuilder",
    message:
      "Best gym in town! The equipment is top-notch and the trainers guide you at every step to reach your goals.",
    image: img3,
  },
   {
    name: "Neha Kapoor",
    role: "Zumba practitioner",
    message:
      "I love the vibe here! The Zumba sessions are full of energy, and the community is so welcoming and supportive.",
    image: img4,
  },
  {
    name: "Vikram Chauhan",
    role: "Powerlifter",
    message:
      "This gym is a paradise for lifters. The strength equipment is world-class, and the trainers ensure proper technique every time.",
    image: img5,
  },
  {
    name: "Simran Kaur",
    role: "Wellness Enthusiast ",
    message:
      "From nutrition guidance to personalized workouts, this gym truly focuses on overall well-being. Absolutely love it!",
    image: img6,
  },
  {
    name: "Arjun Patel",
    role: "Marathon Runner",
    message:
      "The trainers helped me build stamina and endurance for my marathons. The cardio section is excellent!",
    image: img7,
  },
  {
    name: "Rakesh Yadav",
    role: "Gym Member",
    message:
      "Having trained in many gyms, I can confidently say this one stands out for its cleanliness, equipment, and atmosphere.",
    image: img8,
  },
]

const Testimonial: React.FC = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="py-14 px-4 bg-base-200">
      <h2 className="text-center text-xl font-bold mb-8 "
      >What Our Members Say</h2>

      <div className="max-w-4xl mx-auto relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 p-6 flex flex-col items-center text-center" 
              data-aos="fade-left"
            >
              <Image
                src={t.image}
                alt={t.name}
                width={500}
                height={500}
                className="w-30 h-30 rounded-full object-cover mb-4 border-4 border-yellow-400 transition  ease-in-out hover:scale-110"
              />
              <p className="text-base md:text-lg italic mb-4 max-w-2xl transition  ease-in-out hover:scale-110">
                “{t.message}”
              </p>
              <h3 className="text-lg font-semibold transition  ease-in-out hover:scale-110">{t.name}</h3>
              <span className="text-sm text-gray-500 transition  ease-in-out hover:scale-110">{t.role}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-2 p-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === i ? "bg-black scale-120" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
