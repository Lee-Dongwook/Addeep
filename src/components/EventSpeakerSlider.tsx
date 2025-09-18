"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { NEXT_PUBLIC_CDN_BASE } from "../lib/env";

import "swiper/css";
import "swiper/css/navigation";

export default function EventSpeakerSlider({
  onClick,
  uuid,
}: {
  onClick: (e: any) => void;
  uuid: number;
}) {
  console.log(uuid, typeof uuid);
  const speakers =
    uuid === 1
      ? [
          {
            img: `${NEXT_PUBLIC_CDN_BASE}/images/GlobalSummitFirstDayFirstImage.png`,
          },
          {
            img: `${NEXT_PUBLIC_CDN_BASE}/images/GlobalSummitFirstDaySecondImage.png`,
          },
        ]
      : [
          {
            img: `${NEXT_PUBLIC_CDN_BASE}/images/GlobalSummitSecondDayFirstImage.png`,
          },
          {
            img: `${NEXT_PUBLIC_CDN_BASE}/images/GlobalSummitSecondDaySecondImage.png`,
          },
        ];

  return (
    <div className="w-full max-w-lg min-h-[400px] mx-auto" onClick={onClick}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 10000 }}
        loop
        className="h-full rounded-l-2xl"
      >
        {speakers.map((sp, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center justify-center bg-white aspect-square w-full h-[800px]">
              <img src={sp.img} className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
