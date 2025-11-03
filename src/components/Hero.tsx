import React from "react";
import Heroimg from "../assets/hero.jpg";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div
        className="hero min-h-120 bg-cover  "
        style={{
          backgroundImage: `url(${Heroimg.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content flex flex-col md:items-start items-start text-left  justify-start w-full px-6 md:px-12 pt-24 md:pt-32 text-neutral-content"
        data-aos="fade-right">
          <div className="max-w-md">
            <h2 className="mb-5 text-4xl md:text-5xl font-bold leading-tight">
              Elevate your
              <br />
              Workout
            </h2>
            <p className="mb-5 text-base md:text-xl">
              Join the movement and crush your goals
              <br />
              with expert training and unstoppable energy.
            </p>
            <Link href="/join">
            <button className="btn btn-active">Get Started</button>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;