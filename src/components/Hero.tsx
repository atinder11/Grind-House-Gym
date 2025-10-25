import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          width={1920}
          height={1080}
          src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          alt="Gym Slide 1"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <Image
          width={1920}
          height={1080}
          src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
          alt="Gym Slide 2"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <Image
          width={1920}
          height={1080}
          src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          alt="Gym Slide 3"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <Image
          width={1920}
          height={1080}
          src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          alt="Gym Slide 4"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
