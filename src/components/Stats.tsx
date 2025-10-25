import React from "react";

function Stats() {
  return (
    <>
      <div className=" w-full  mx-auto bg-black text-white">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 text-center px-4 py-2 md:px-16">
          <div className="">
            <h2>5+</h2>
            <p>Years of Service</p>
          </div>
          <div>
            <h2>10+</h2>
            <p>Certified Trainers</p>
          </div>
          <div>
            <h2>786+</h2>
            <p>Happy Memebers</p>
          </div>
          <div>
            <h2>95%</h2>
            <p>customer Satisfaction</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
