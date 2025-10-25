"use client"
import React from "react"
import { IoMdMailOpen } from "react-icons/io"
import { FaPhoneAlt } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import Link from "next/link"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const Page: React.FC = () => {
  return (
    <>
    <Navbar/>
    
  
    <div className="px-4 py-2
     text-white min-h-screen">
      {/* Google Map */}
      <div className="w-full mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9801061543003!2d77.36747977148802!3d28.630358330421178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce551491b3ce7%3A0x7335d9fcfd4d9db0!2sJAYPEE%20INSTITUTE%20OF%20INFORMATION%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1761294419003!5m2!1sen!2sin"
          className="w-full h-[350px] md:h-[450px] rounded-lg "
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact & Join Form */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold  border-white  pb-1 text-black text-center">
            Contact Us
          </h2>
          <ul className="space-y-5 text-black">
            <li className="flex items-center gap-3">
              <IoMdMailOpen className="text-2xl text-black" />
              <Link
                href="mailto:atinderk71@mail.com"
                className="hover:underline"
              >
                atinderk71@mail.com
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-2xl text-black" />
              <Link
                href="tel:+919821023521"
                className="hover:underline"
              >
                +91 98210 23521
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <FaLocationDot className="text-2xl text-black" />
              <a
                href="https://maps.app.goo.gl/26xZYFaNNoRok8FW6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                The Grind House Gym
                <br/>
                Sector 62  Noida, Uttar Pradesh, India
              </a>
            </li>
          </ul>
        </div>

        {/* Join Now Form */}
        <div className="bg-white text-black rounded-2xl p-6 shadow-xl">
          <h3 className="text-2xl font-semibold mb-5 text-center">Join Now</h3>
          <form className="space-y-5">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Goal</label>
              <textarea
                placeholder="Describe your goal..."
                rows={4}
                className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Page
