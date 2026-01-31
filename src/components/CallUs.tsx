"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Barbell from "../assets/barbell.jpg";

function CallUs() {
  return (
    <div className="relative w-full min-h-60">
      {/* Optimized background image */}
      <Image
        src={Barbell}
        alt="Barbell background"
        fill
        className="object-cover object-bottom -z-10"
        priority
        // quality={90}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div
        className="relative flex flex-col items-center justify-center text-center text-white py-10"
        data-aos="fade-up"
      >
        <h1 className="mb-5 text-4xl font-bold">Join us</h1>
        <p className="mb-5 text-xl">
          <Link href="tel:+919821023521">+91 98210 23521</Link>
        </p>
        <Link href="/join">
          <button className="btn btn-soft hover:scale-110 transition-transform duration-200">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CallUs;
