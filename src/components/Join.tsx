import React from "react";
import Link from "next/link";

function Join() {
  return (
    <div className="px-4 py-10">
      <h2 className="text-center font-bold text-4xl md:text-5xl mb-8">Plans</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {/* Monthly */}
        <div className="card bg-base-200 shadow-sm w-full max-w-sm h-full flex flex-col justify-between transition  ease-in-out hover:scale-110" data-aos="fade-up">
          <div className="card-body flex flex-col flex-grow">
            <div className="text-center">
              <h2 className="text-xl font-semibold">Monthly Plan</h2>
              <span className="text-3xl font-bold">₹1500/month</span>
            </div>

            <ul className="mt-6 flex flex-col gap-2 text-sm flex-grow">
              {[
                "Strength Training",
                "CrossFit",
                "Body Building",
                "Weight Loss",
                "Flexible Time",
                "Expert Trainer",
                "Yoga",
              ].map((t) => (
                <li key={t}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link href="/join">
            <button className="btn btn-neutral btn-block mt-6  p-2" >Subscribe</button>
            </Link>

            
          </div>
        </div>

        {/* Quarterly */}
        <div className="card bg-black text-white shadow-sm w-full max-w-sm h-full flex flex-col justify-between transition  ease-in-out hover:scale-110"
        data-aos="fade-up">
          <div className="card-body flex flex-col flex-grow" data-aos="fade-up">
            <span className="badge badge-sm badge-warning text-white font-semibold self-center mb-2">
              Most Popular
            </span>

            <div className="text-center">
              <h2 className="text-xl font-semibold">Quarterly Plan</h2>
              <span className="text-3xl font-bold">₹1200/month</span>
            </div>

            <ul className="mt-6 flex flex-col gap-2 text-sm flex-grow">
              {[
                "Strength Training",
                "CrossFit",
                "Body Building",
                "Weight Loss",
                "Flexible Time",
                "Expert Trainer",
                "Yoga",
              ].map((t) => (
                <li key={t}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link href="/join">
            <button className="btn btn-outline btn-block mt-6  p-2">Subscribe</button>
            </Link>

            
          </div>
        </div>

        {/* Yearly */}
        <div className="card bg-base-200 shadow-sm w-full max-w-sm h-full flex flex-col justify-between transition  ease-in-out hover:scale-110"
        data-aos="fade-up">
          <div className="card-body flex flex-col flex-grow">
            <div className="text-center">
              <h2 className="text-xl font-semibold">Yearly Plan</h2>
              <span className="text-3xl font-bold">₹1000/month</span>
            </div>

            <ul className="mt-6 flex flex-col gap-2 text-sm flex-grow">
              {[
                "Strength Training",
                "CrossFit",
                "Body Building",
                "Weight Loss",
                "Flexible Time",
                "Expert Trainer",
                "Yoga",
              ].map((t) => (
                <li key={t}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link href="/join">
             <button className="btn btn-neutral btn-block mt-6  p-2 ">Subscribe</button>
            </Link>

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
