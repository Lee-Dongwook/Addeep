"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function EventSpeakerSlider() {
  const speakers = [
    {
      img: "/images/oskar.png",
    },
    {
      img: "/images/yoonjay.png",
    },
  ];

  return (
    <div className="w-full max-w-xl min-h-[400px] mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 10000 }}
        loop
        className="rounded-2xl shadow-lg h-full"
      >
        {speakers.map((sp, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl">
              <img
                src={sp.img}
                className="w-40 h-40 rounded-full object-cover mb-4"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
