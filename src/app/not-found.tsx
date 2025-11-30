"use client";

import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IoHome } from "react-icons/io5";

export default function NotFound() {
  return (
    <>
    <Navbar/>
    
    <div className="min-h-screen flex flex-col items-center justify-center  text-center px-4">
      <h1 className="text-9xl font-bold text-mainblue text-center ">404</h1>
      <p className="text-xl mt-4 text-base-content text-center">Page Not Found</p>
      <p className="mt-2 text-md opacity-80">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="flex gap-4 mt-6">
        <Link href="/" className="btn bg-yellow-400 flex items-center gap-2 text-white" >
          <IoHome />  Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="btn btn-outline flex items-center gap-2"
        >
          <FaArrowLeft /> Go Back
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
}