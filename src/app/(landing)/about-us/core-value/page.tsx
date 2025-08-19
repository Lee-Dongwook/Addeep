"use client";
import Image from "next/image";
import React, { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Header Component
const CoreValueHeader = () => {
  return (
    <div className="w-full p-4 text-center">
      <div
        className="w-full h-48 md:h-64 rounded-lg flex flex-col items-center justify-center"
        style={{
          background:
            "linear-gradient(90deg, #833AB4 0%, #E1306C 50%, #F56040 100%)",
          border: "1px solid #E5E7EB",
        }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          We Bridge Values
        </h1>
      </div>
    </div>
  );
};

// Hero Component
const CoreValueHero = () => {
  return (
    <div className="w-full p-4 text-center bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
          Core Values
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed">
          우리가 추구하는 5가지 핵심 가치
        </p>
      </div>
    </div>
  );
};

const FirstContainer = () => {
  return (
    <div className="w-full p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col items-center lg:items-start lg:w-1/2">
              <h2 className="text-2xl font-bold text-black mb-1">Vision</h2>

              <ul className="text-sm text-gray-700 space-y-1">
                <li>디지털 콘텐츠 세상을 향한</li>
                <li>깨끗하고 바람직한 단 하나의 'Addeep'</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondContainer = () => {
  return (
    <div className="w-full p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 space-y-6"></div>
            <div className="flex flex-col items-center lg:items-start lg:w-1/2">
              <h2 className="text-2xl font-bold text-black mb-1">Motto</h2>
              <p className="text-lg font-bold text-gray-800 leading-relaxed">
                열망, 공감, 민첩
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>지금 우리 모두에게 소중한 시간을 열망과 공감,</li>
                <li>그리고 민첩하게 협력하자</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThirdContainer = () => {
  return (
    <div className="w-full p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col items-center lg:items-start lg:w-1/2">
              <h2 className="text-2xl font-bold text-black mb-1">Mission</h2>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 작은 성공에 분투하자.</li>
                <li>• 함께하는 힘으로 도전과 모험을 즐기자.</li>
                <li>• 스마트하게 생각하고 바람직하게 행동하자.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <CoreValueHeader />
      <CoreValueHero />
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
    </div>
  );
}
