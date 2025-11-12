import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

export default function HeroSwiper() {
  return (
    <Swiper modules={[Pagination, Autoplay]} spaceBetween={30} pagination={{ clickable: true }} autoplay={{ delay: 4000 }}>
      <SwiperSlide>
        <div className="hero-slide"> 
          <h1>Learn locally. Share skills.</h1>
          <p>Find friendly teachers & users in your area.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide><div className="hero-slide"><h1>Grow together</h1></div></SwiperSlide>
      <SwiperSlide><div className="hero-slide"><h1>Teach something new</h1></div></SwiperSlide>
    </Swiper>
  );
}
