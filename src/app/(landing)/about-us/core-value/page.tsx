"use client";
import Image from "next/image";
import React, { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useResponsive } from "../../../../lib/useResponsive";
import { values, FirstDot } from "../../../../constants/core-values";

gsap.registerPlugin(ScrollTrigger);

interface GsapPanelProps {
  image: string | Element;
}

const MainGsapPanelMolecule = ({ image }: GsapPanelProps) => {
  const { isMobile } = useResponsive();
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!panelRef.current || isMobile) return;

    const panel = panelRef.current;

    const animation = gsap.fromTo(
      panel,
      {
        opacity: 1,
        scale: 1,
      },
      {
        opacity: 1,
        scale: 1,
        ease: "power2.inOut",
        duration: 20,
        scrollTrigger: {
          trigger: panel,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: 2,
        },
      }
    );
    return () => {
      animation.scrollTrigger?.kill();
    };
  }, [image]);

  if (isMobile) {
    return <div className="w-full h-full">{image as unknown as ReactNode}</div>;
  }
  return (
    <div ref={panelRef} className="bg-white relative overflow-hidden w-screen">
      <div className="w-full h-full">{image as unknown as ReactNode}</div>
    </div>
  );
};

// Header Component
const CoreValueHeader = () => {
  const { isMobile } = useResponsive();
  if (isMobile) {
    return (
      <div className="w-full h-48 text-center">
        <div
          className="w-full h-48 rounded-lg flex flex-col items-center justify-center"
          style={{
            background:
              "linear-gradient(90deg, #833AB4 0%, #E1306C 50%, #F56040 100%)",
            border: "1px solid #E5E7EB",
          }}
        >
          <h1 className="text-2xl font-bold text-white mb-4">
            We Bridge Values
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-48 md:h-96 text-center">
      <div
        className="w-full h-48 md:h-96 rounded-lg flex flex-col items-center justify-center"
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

function CoreValues() {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div className="mx-auto p-3 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-center">
          {values.map((item, i) => (
            <div key={i} className="flex flex-col items-center space-y-4">
              {/* 아이콘 */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-opacity-20 text-white text-3xl shadow-md">
                {item.icon}
              </div>

              {/* 텍스트 */}
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-center">
        {values.map((item, i) => (
          <div key={i} className="flex flex-col items-center space-y-4">
            {/* 아이콘 */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-3xl shadow-md">
              {item.icon}
            </div>

            {/* 텍스트 */}
            <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Hero Component
const CoreValueHero = () => {
  const { isMobile } = useResponsive();
  if (isMobile) {
    return (
      <div className="w-full p-6 text-center flex flex-col bg-white mt-8">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-black mb-4">Core Values</h1>
          <p className="text-xl mt-2 font-normal text-[#4B5563] leading-relaxed">
            우리가 추구하는 5가지 핵심 가치
          </p>
          <CoreValues />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-12 text-center flex flex-col h-48 md:h-96 bg-white">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
          Core Values
        </h1>
        <p className="text-2xl mt-2 font-normal text-[#4B5563] leading-relaxed">
          우리가 추구하는 5가지 핵심 가치
        </p>
        <CoreValues />
      </div>
    </div>
  );
};

const FirstContainer = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div className="w-full flex flex-col justify-center p-4 text-center bg-[#F9FAFB]">
        <div className="p-4">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-bold text-black mb-4">Vision</h2>

              <ul className="text-lg text-gray-700 font-normal font-sans space-y-1">
                <li>디지털 콘텐츠 세상을 향한</li>
                <li>
                  깨끗하고 바람직한 단 하나의 &nbsp;
                  <span className="font-bold text-[#D300C5]">'Addeep'</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-center h-96 p-8 bg-[#F9FAFB]">
      <div className="p-48">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col items-center lg:items-start lg:w-1/2">
            <h2 className="text-4xl font-bold text-black mb-4">Vision</h2>

            <ul className="text-xl text-gray-700 font-normal font-sans space-y-1">
              <li>디지털 콘텐츠 세상을 향한</li>
              <li>
                깨끗하고 바람직한 단 하나의{" "}
                <span className="font-bold text-[#D300C5]">'Addeep'</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondContainer = () => {
  const { isMobile } = useResponsive();
  if (isMobile) {
    return (
      <div className="w-full flex flex-col justify-center text-center p-8 bg-white">
        <div className="p-4">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-bold text-black mb-4">Motto</h2>

              <p className="text-xl font-bold text-[#833AB4] leading-relaxed mb-6">
                열망, 공감, 민첩
              </p>

              <ul className="text-lg text-gray-700 font-normal font-sans space-y-1">
                <li>지금 우리 모두에게 소중한 시간을 열망과 공감,</li>
                <li>그리고 민첩하게 협력하자</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-center h-96 p-8 bg-white">
      <div className="p-48">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 space-y-6"></div>
          <div className="flex flex-col items-center lg:items-start lg:w-1/2">
            <h2 className="text-4xl font-bold text-black mb-4">Motto</h2>

            <p className="text-2xl font-bold text-[#833AB4] leading-relaxed mb-6">
              열망, 공감, 민첩
            </p>

            <ul className="text-xl text-gray-700 font-normal font-sans space-y-1">
              <li>지금 우리 모두에게 소중한 시간을 열망과 공감,</li>
              <li>그리고 민첩하게 협력하자</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThirdContainer = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div className="w-full flex flex-col justify-center text-center p-8 bg-[#F9FAFB]">
        <div className="p-4">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-bold text-black mb-4">Mission</h2>

              <ul className="text-lg text-gray-700 font-normal font-sans flex flex-col items-center justify-center space-y-4">
                <li className="flex flex-row items-center gap-4">
                  작은 성공에 분투하자.
                </li>
                <li className="flex flex-row items-center gap-4">
                  함께하는 힘으로 도전과 모험을 즐기자.
                </li>
                <li className="flex flex-row items-center gap-4">
                  스마트하게 생각하고 바람직하게 행동하자.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-center h-96 p-8 bg-[#F9FAFB]">
      <div className="p-48">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col items-center lg:items-start lg:w-1/2">
            <h2 className="text-4xl font-bold text-black mb-4">Mission</h2>

            <ul className="text-xl text-gray-700 font-normal font-sans space-y-4">
              <li className="flex flex-row items-center gap-4">
                <FirstDot /> 작은 성공에 분투하자. 작은 성공에 분투하자.
              </li>
              <li className="flex flex-row items-center gap-4">
                <FirstDot /> 함께하는 힘으로 도전과 모험을 즐기자.
              </li>
              <li className="flex flex-row items-center gap-4">
                <FirstDot /> 스마트하게 생각하고 바람직하게 행동하자.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const sectionGroup = [
  <FirstContainer />,
  <SecondContainer />,
  <ThirdContainer />,
];

export default function LandingPage() {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div className="min-h-screen bg-white">
        <CoreValueHeader />
        <CoreValueHero />
        <div className="mt-24">
          {sectionGroup.map((image, idx) => (
            <MainGsapPanelMolecule
              key={`section-${idx}`}
              image={image as unknown as string | Element}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <CoreValueHeader />
      <CoreValueHero />
      <div className="mt-24">
        {sectionGroup.map((image, idx) => (
          <MainGsapPanelMolecule
            key={`section-${idx}`}
            image={image as unknown as string | Element}
          />
        ))}
      </div>
    </div>
  );
}
