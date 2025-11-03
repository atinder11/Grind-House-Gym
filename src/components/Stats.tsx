"use client";
import React from "react";
import CountUp from "react-countup";

function Stats() {
  return (
    <>
      <div className="w-full mx-auto text-white">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 text-center px-4 py-2 md:px-16 bg-stone-900 dark:bg-gray-1000">
          <div >
            <h2>
              <CountUp end={5} duration={5} />+
            </h2>
            <p>Years of Service</p>
          </div>

          <div  >
            <h2>
              <CountUp end={10} duration={4} />+
            </h2>
            <p>Certified Trainers</p>
          </div>

          <div  >
            <h2>
              <CountUp end={786} duration={3} />+
            </h2>
            <p>Happy Members</p>
          </div>

          <div  >
            <h2>
              <CountUp end={95} duration={3} />%
            </h2>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
