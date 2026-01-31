import React from "react";
import Link from "next/link";
import Trainer2 from "../assets/trainer2.jpg";
import Trainer3 from "../assets/trainer3.jpg";
import Image from "next/image";

function Coaches() {
  return (
    <div className="container mx-auto px-4 py-4">
      <p className="text-center text-gray-700 text-md font-semibold dark:text-white mt-2">
        Are You Looking for a Mentor?
      </p>

      <h2 className="text-5xl text-center font-bold mb-6 transition ease-in-out">
        Coaches
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div
          className="grid grid-cols-2 gap-4 overflow-hidden"
          data-aos="fade-right"
        >
          <Image
            src={Trainer3}
            width={500}
            height={500}
            alt="Trainer 3"
            className="rounded-2xl w-full h-auto"
          />
          <Image
            src={Trainer2}
            width={500}
            height={500}
            alt="Trainer 2"
            className="rounded-2xl w-full h-auto"
          />
        </div>

        <div
          className="text-pretty p-2 lg:p-6 max-w-2xl mx-auto"
          data-aos="fade-left"
        >
          <p>
            At Grind House, our coaches aren’t just trainers — they’re mentors,
            motivators, and role models dedicated to helping you reach your
            fullest potential. Each brings a unique set of skills, passion, and
            experience to the floor.
          </p>

          <ul className="mt-4 space-y-4">
            <li>
              <span className="font-bold">Coach Jake</span> – Strength &
              Conditioning Expert focused on powerlifting, performance training,
              and building raw strength through personalized programs.
            </li>

            <li>
              <span className="font-bold">Coach Emily</span> – Certified Personal
              Trainer & Nutrition Coach helping members achieve holistic
              wellness, strength, and confidence.
            </li>
          </ul>

          <p className="mt-4">
            Together, they form the heart of Grind House — pushing you, guiding
            you, and celebrating every milestone on your fitness journey.
          </p>

          <div className="text-center mt-6">
            <Link href="/join">
              <button className="btn btn-outline hover:scale-110 transition">
                Explore more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coaches;
