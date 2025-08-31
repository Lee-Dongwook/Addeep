"use client";

import React, { useRef, useEffect, type ReactNode } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useResponsive } from "../../../../lib/useResponsive";
import { LandingBottomArrowIcon } from "../../../../icons";
import {
  sectionData,
  HeaderImageData,
  HeroText,
  slideData,
} from "../../../../constants/we-are";
import { useState } from "react";

// Image imports
import gradientImage from "/public/images/Gradient.png";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: ReactNode;
  index: number;
}

const AnimatedSection = ({ children, index }: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const textElements = section.querySelectorAll(".animate-text");
    const imageElement = section.querySelector(".animate-image");

    // 초기 상태 설정
    gsap.set(textElements, { y: 100, opacity: 0 });
    gsap.set(imageElement, { y: 100, opacity: 0 });

    // 페이지 로드 시 첫 번째 섹션만 즉시 애니메이션
    if (index === 0) {
      const tl = gsap.timeline();

      textElements.forEach((element, i) => {
        tl.to(
          element,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          i * 0.1
        );
      });

      tl.to(
        imageElement,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        textElements.length * 0.1
      );
    }

    // 스크롤 트리거 설정 - 스크롤 기반 애니메이션
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });

    // 텍스트 요소들을 순차적으로 애니메이션
    textElements.forEach((element, i) => {
      tl.to(
        element,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        i * 0.08
      );
    });

    // 이미지 애니메이션
    tl.to(
      imageElement,
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      textElements.length * 0.08
    );

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, [index]);

  return (
    <div ref={sectionRef} className="min-h-screen flex items-center">
      {children}
    </div>
  );
};

function AboutSwiper() {
  const { isMobile } = useResponsive();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 하이드레이션 불일치 방지를 위해 서버와 클라이언트에서 동일한 구조 렌더링
  const renderSlideContent = (
    slide: (typeof slideData)[0],
    isMobileView: boolean
  ) => {
    if (isMobileView) {
      return (
        <div className="flex flex-col items-center justify-between overflow-y-auto p-2">
          {/* Image */}
          <div className="flex justify-center mt-8">
            <div className="relative w-[150px] h-[200px] border-2 border-pink-500 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={slide.image ?? ""}
                alt={slide.title}
                width={150}
                height={200}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-600 leading-snug mt-2 mb-2">
              {slide.title}
            </h2>
            <div className="text-sm text-gray-400 leading-relaxed whitespace-normal overflow-auto">
              {slide.text.map((t, index) => (
                <div key={index}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col md:flex-row items-center justify-between h-full px-8 md:px-20">
        {/* Text */}
        <div className="md:w-2/3 space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-600 leading-snug">
            {slide.title}
          </h2>
          <div className="text-gray-400 leading-relaxed whitespace-pre-line">
            {slide.text.map((t, index) => (
              <div key={index}>{t}</div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative w-[280px] h-[560px] border-2 border-pink-500 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={slide.image ?? ""}
              alt={slide.title}
              width={280}
              height={560}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    );
  };

  // 서버사이드 렌더링 시에는 항상 데스크톱 버전 렌더링 (하이드레이션 불일치 방지)
  const shouldRenderMobile = mounted && isMobile;

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className={`w-full custom-swiper ${shouldRenderMobile ? "min-h-screen" : "h-screen"}`}
    >
      {slideData.map((slide, i) => (
        <SwiperSlide key={i}>
          {renderSlideContent(slide, shouldRenderMobile)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function LandingPage() {
  const { isMobile } = useResponsive();
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleArrowClick = () => {
    if (secondSectionRef.current) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: secondSectionRef.current,
          offsetY: 0,
        },
        ease: "power2.inOut",
      });
    }
  };

  // 하이드레이션 불일치 방지를 위해 서버와 클라이언트에서 동일한 구조 렌더링
  const shouldRenderMobile = mounted && isMobile;

  const renderMobileLayout = () => (
    <div className="min-h-screen bg-white">
      {sectionData.map((section, index) => (
        <AnimatedSection key={index} index={index}>
          <div className="flex flex-col w-full">
            {/* Text Section */}
            <div className="absolute top-1/3 items-center justify-center p-8">
              <p className="text-2xl font-sans flex flex-col font-normal text-gray-800 leading-loose text-left gap-6">
                {section.text.map((line, lineIndex) => (
                  <span key={lineIndex} className="animate-text block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
            {/* Bottom Arrow */}
            <div
              className="absolute top-3/4 mt-12 left-10 animate-text cursor-pointer hover:scale-110 transition-transform duration-200"
              onClick={handleArrowClick}
            >
              <LandingBottomArrowIcon />
            </div>

            {/* Image Section */}
            <div
              className={[
                "absolute top-3/4 right-0 w-1/2 h-1/2 animate-image",
              ].join(" ")}
            >
              <Image
                src={gradientImage}
                alt="girl taking a photo with a tunnel filter"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute bottom-4 inset-0 z-10 flex items-end p-6">
                {HeaderImageData.map((header, index) => {
                  return (
                    <div key={index}>
                      {header.text.map((line, lineIndex) => (
                        <span
                          key={lineIndex}
                          className="animate-text block text-white font-sans font-normal text-base text-right"
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
      <div
        ref={secondSectionRef}
        className="text-2xl flex-1 flex flex-col items-center justify-center font-sans font-normal text-gray-800 leading-loose text-center space-y-4"
      >
        <AnimatedSection index={1}>
          {HeroText.map((section, index) => (
            <div key={index}>
              {section.text.map((line, lineIndex) => (
                <div key={lineIndex} className="animate-text block mt-4">
                  {line}
                </div>
              ))}
            </div>
          ))}
        </AnimatedSection>
      </div>
      <div className="p-16 -mt-64 flex flex-col items-center justify-center">
        <AboutSwiper />
      </div>
    </div>
  );

  const renderDesktopLayout = () => (
    <div className="min-h-screen bg-white">
      {sectionData.map((section, index) => (
        <AnimatedSection key={index} index={index}>
          <div className="flex flex-col md:flex-row w-full">
            {/* Text Section */}
            <div className="md:w-1/2 absolute top-1/3 left-20 items-center justify-center p-8 md:p-12">
              <p className="text-3xl md:text-5xl font-sans flex flex-col font-normal text-gray-800 leading-loose text-left gap-6">
                {section.text.map((line, lineIndex) => (
                  <span key={lineIndex} className="animate-text block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
            {/* Bottom Arrow */}
            <div
              className="absolute top-3/4 mt-12 left-28 animate-text cursor-pointer hover:scale-110 transition-transform duration-200"
              onClick={handleArrowClick}
            >
              <LandingBottomArrowIcon />
            </div>

            {/* Image Section */}
            <div
              className={[
                "absolute top-0 right-0 w-1/2 h-full animate-image",
              ].join(" ")}
            >
              <Image
                src={gradientImage}
                alt="girl taking a photo with a tunnel filter"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute left-72 bottom-4 inset-0 z-10 flex items-end p-6">
                {HeaderImageData.map((header, index) => {
                  return (
                    <div key={index}>
                      {header.text.map((line, lineIndex) => (
                        <span
                          key={lineIndex}
                          className="animate-text block text-white font-sans font-normal text-[48px] text-right"
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
      <div
        ref={secondSectionRef}
        className="text-3xl md:text-5xl flex-1 flex flex-col items-center justify-center font-sans font-normal text-gray-800 leading-loose text-center space-y-6"
      >
        <AnimatedSection index={1}>
          {HeroText.map((section, index) => (
            <div key={index}>
              {section.text.map((line, lineIndex) => (
                <div key={lineIndex} className="animate-text block mt-6">
                  {line}
                </div>
              ))}
            </div>
          ))}
        </AnimatedSection>
      </div>
      <div className="p-16 -mt-48 flex flex-col items-center justify-center">
        <AboutSwiper />
      </div>
      <div className="flex-1 flex items-center justify-center mt-8 mb-20">
        <h2 className="text-[#FF0169] font-normal text-[72px]">
          We Bridge Values
        </h2>
      </div>
    </div>
  );

  // 서버사이드 렌더링 시에는 항상 데스크톱 버전 렌더링 (하이드레이션 불일치 방지)
  return shouldRenderMobile ? renderMobileLayout() : renderDesktopLayout();
}
