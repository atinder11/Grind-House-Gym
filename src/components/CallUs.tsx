'use client'

import React from 'react';

import Link from 'next/link';
import Barbell from "../assets/barbell.jpg";


function CallUs() {
  return (
    <div>
      <div
        className="hero min-h-60"
        style={{
          backgroundImage: `url(${Barbell.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat:"no-repeat",
          
          
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">Join us</h1>
            <p className="mb-5 text-xl">
              <Link href="tel:+919821023521">+91 98210 23521
              </Link>
              </p>
            <Link href="/join">
            <button className="btn btn-soft">Join Now</button>
            </Link>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallUs;