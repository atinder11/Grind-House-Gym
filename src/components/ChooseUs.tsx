import React from "react";

import Image from "next/image";
import { GiStrong } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
import { RiFocus2Fill } from "react-icons/ri";

import Image1 from "../assets/image1.jpg"
import Image3 from "../assets/image3.jpg"
import Image4 from "../assets/image4.jpg"
export default function ChooseUs() {
  return (
    <>
      <div className="bg-base-200">
        <div className="container mx-auto p-4 ">
          <h2 className="text-center text-3xl font-bold py-2"> Why Choose Us</h2>
          <p className="text-center text-xl text-bold text-gray-700 dark:text-white">
            Our approach goes beyond fitness
            <br />
            it’s about building strength, confidence, and resilience that last a
            lifetime
          </p>

          <div className="grid md:grid-cols-2 grid-cols-1 mt-4 p-2 gap-2"data-aos="fade-up">
            <div className="grid grid-cols-2 gap-1">
              <div >
                <div className="flex items-center space-x-2">
                  <GiStrong className="text-2xl" />
                  <h3 className="text-xl font-semibold">Expert Trainers</h3>
                </div>
                <p className="mt-2 text-gray-700 text-pretty dark:text-white">Our certified professionals guide you with personalized programs tailored to your goals and fitness level.</p>
              </div>

              <div >
                <div className="flex items-center space-x-2">
                  <FaDumbbell className="text-2xl" />
                  <h3 className="text-xl font-semibold">State-of-the-Art Equipment</h3>
                </div>
                <p className="mt-2 text-gray-700 dark:text-white">Train with premium machines and gear that ensure safe, effective, and result-driven workouts.</p>
              </div>
              <div >
                <div className="flex items-center space-x-2">
                  <FaLeaf  className="text-2xl" />
                  <h3 className="text-xl font-semibold">Motivating Environment</h3>
                </div>
                <p className="mt-2 text-gray-700 dark:text-white">Step into a space designed to inspire — filled with energy, passion, and a community that pushes you to do better every day</p>
              </div>
             <div >
                <div className="flex items-center space-x-2">
                  <RiFocus2Fill  className="text-2xl" />
                  <h3 className="text-xl font-semibold">Holistic Fitness Focus</h3>
                </div>
                <p className="mt-2 text-gray-700 dark:text-white">From strength and endurance to recovery and nutrition, we help you achieve complete physical and mental wellness</p>
              </div>
            </div>
            <div className="grid grid-cols-2 justify-center items-center gap-1 lg:gap-0   ">
              <div>
                <Image src={Image4} height={200} width={300} alt="image 1" className="rounded-xl"/>

                
                <br />
               <Image src={Image3} height={200} width={300} alt="image 1" className="rounded-xl"/>
              </div>
              <div>
                <Image src={Image1} height={600} width={300} alt="image 1" className="rounded-xl"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
