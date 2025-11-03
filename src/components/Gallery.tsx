"use client"
import Image from "next/image"
import React, { useState, useEffect } from "react"

import img1 from "../assets/gallery4.jpg"
import img2 from "../assets/gallery2.jpg"
import img3 from "../assets/gallery3.jpg"
import img4 from "../assets/gallery1.jpg"
import img5 from "../assets/gallery5.jpg"
import img6 from "../assets/gallery6.jpg"
import img7 from "../assets/gallery7.jpg"
import img8 from "../assets/gallery8.jpg"

const images = [img1, img2, img3, img4, img5, img6, img7, img8]

const Gallery: React.FC = () => {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((index + 1) % images.length)
  const prev = () => setIndex((index - 1 + images.length) % images.length)

  useEffect(() => {
    const timer = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(timer)
  }, [index])

  return (
    <div className="p-4 bg-base-200">
      <div className="p-2 mb-2">
        <h2 className="text-center font-bold text-5xl">Gallery</h2>
      </div>

      <div className="relative w-full mx-auto overflow-hidden rounded-lg p-2">
        <div className="relative h-50 sm:h-72 md:h-50 lg:h-[500px] w-full">
          <Image
            key={index}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            fill
            priority
            className="object-cover rounded-2xl transition-opacity duration-10000 ease-in-out opacity-100"
          />
        </div>

        <button
          onClick={prev}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-80 text-gray-800 p-2 rounded-full shadow-md"
        >
          &#10094;
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-80 text-gray-800 p-2 rounded-full shadow-md"
        >
          &#10095;
        </button>

        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
