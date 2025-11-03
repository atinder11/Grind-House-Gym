import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";


import Link from 'next/link';

function Footer() {
  return (
   <>
   <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10"
   >
  <aside>
    <h1 className='text-2xl font-bold hover:scale-110 '>Grind House</h1>
    <p>
      The Grind House GYM
      <br />
      Providing reliable tech since 1992
    </p>
    < div data-aos="fade-up">
      <ul className='grid grid-cols-3 gap-2'>
        <li><Link href="https://www.linkedin.com/in/atinder-kumar/" target="_blank"><FaFacebookF  className='text-xl' /></Link></li>
         <li><Link href="https://www.linkedin.com/in/atinder-kumar/" target="_blank"><FaInstagram    className='text-xl'/></Link></li>
         <li><Link href="mailto:atinderk71@mail.com"><IoIosMail  className='text-xl'/></Link></li>
      </ul>

    </div>
  </aside>
  <div className='columns-3'>
    
  </div>
  <nav>
    <h6 className="footer-title ">Quick Link</h6>
    <div className='grid grid-cols-1 '>
      <Link href="./" className="link link-hover">Home</Link>
    <Link href="/about" className="link link-hover">About us</Link>
    <Link href="/plan" className="link link-hover">Services</Link>
    <Link href="/join" className="link link-hover">Contact</Link>

    </div>
    
  </nav>
 
 <nav>
  <h6 className="footer-title">Contact us</h6>

  <Link href="tel:+919821023521" className="link link-hover " style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
    <FaPhone  className='text-md'/> +91 9821023521
  </Link>

  <Link href="mailto:atinderk71@mail.com" className="link link-hover" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
    <IoIosMail  className='text-md'/> atinderk71@gmail.com
  </Link>

  {/* <Link href="./" className="link link-hover" style={{ display: "flex", alignItems: "center", gap: "0.5rem", whiteSpace: "nowrap" }}>
    <FaLocationDot /> Grind House Sector 62 Noida, Uttar Pradesh
  </Link> */}
  <a href="https://maps.app.goo.gl/26xZYFaNNoRok8FW6" className="link link-hover text-pretty" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
    <FaLocationDot className='text-md' /> Grind House Sector 62 Noida, Uttar Pradesh
  </a>
</nav>

  <section aria-label="Location Map">
      <h6 className="footer-title">Location</h6>
      <div className="w-full aspect-video rounded-2xl" >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9802606544063!2d77.3720932!3d28.630353699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce551491b3ce7%3A0x7335d9fcfd4d9db0!2sJAYPEE%20INSTITUTE%20OF%20INFORMATION%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1761070903833!5m2!1sen!2sin"
          style={{ border: 2,borderRadius:"0.8rem" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </section>

</footer>
{/* footer bottom */}
<footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 "
>
  <aside>
    <p >< Link href="/" className='transition  ease-in-out hover:scale-110'>Copyright © {new Date().getFullYear()} - All right reserved by  The Grind House Gym </Link> </p>
  </aside>
</footer>


   </>
  )
}

export default Footer