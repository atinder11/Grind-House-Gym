import React from "react";
import Link from "next/link";
import Trainer2 from "../assets/trainer2.jpg";
import Trainer3 from "../assets/trainer3.jpg";
import Image from "next/image";
function Coaches() {
  return (
    <>
      <div className="p-2">
        <p className=" text-center text-gray-700 text-md font-semibold dark:text-white  mt-2">
          Are You Looking for a Mentor?
        </p>
        <h2 className="text-5xl text-center font-bold mb-3 transition  ease-in-out ">Coaches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 p-2">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2 overflow-hidden " data-aos="fade-right">
            <div>
              <Image
                src={Trainer3}
                width={400}
                height={400}
                alt="Trainer 3"
                className="rounded-2xl"
              />
            </div>
            <div>
              <Image
                src={Trainer2}
                width={400}
                height={400}
                alt="Trainer 2"
                className="rounded-2xl "
              />
            </div>
          </div>
          <div className="text-pretty m-4 p-2" data-aos="fade-left">
            <p className="text-pretty ">
              At Grind House, our coaches aren’t just trainers — they’re
              mentors, motivators, and role models dedicated to helping you
              reach your fullest potential. Each brings a unique set of skills,
              passion, and experience to the floor, ensuring you get the perfect
              balance of strength, endurance, and mindset training.
              <b />
              </p>
              <ul className="gap-2 p-3">
              <li className="p-2">
                <span className="font-bold  text-pretty  ">Coach Jake</span> – Strength &
                Conditioning Expert With years of experience in powerlifting and
                performance training, Jake focuses on building raw strength,
                improving form, and unlocking your maximum potential through
                tailored strength programs.
              </li>
            
              <li className="p-2">
                <span className="font-bold text-pretty">Coach Emily</span> – Certified
                Personal Trainer & Nutrition Coach Emily combines fitness and
                nutrition expertise to help members achieve holistic wellness.
                Her motivating approach empowers clients to build strength,
                confidence, and balance — both inside and outside the gym.
              </li>
              </ul>
              <br />
              <p>
              Together, they form the heart of Grind House — pushing you,
              guiding you, and celebrating every milestone on your fitness
              journey.
              </p>
              <br/>
              <div className="text-center mt-4  ">
                <Link href="/join">
                <button className="btn btn-outline items-center hover:scale-110 ">Explore more</button>
                </Link>
                

              </div>
              
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Coaches;
