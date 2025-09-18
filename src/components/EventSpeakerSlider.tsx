"use client";

import { useRef } from "react";
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
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

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
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        autoplay={{ delay: 10000 }}
        loop
        className="h-full rounded-l-2xl"
      >
        {speakers.map((sp, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center justify-center bg-white aspect-square w-full h-[800px]">
              <img src={sp.img} className="w-full h-full object-cover" />
              {/* 커스텀 버튼 */}
              <button
                ref={prevRef}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full opacity-100"
              >
                <h4 className="text-2xl">◀</h4>
              </button>
              <button
                ref={nextRef}
                className="absolute left-[470px] top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full opacity-100"
              >
                <h4 className="text-2xl">▶</h4>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
