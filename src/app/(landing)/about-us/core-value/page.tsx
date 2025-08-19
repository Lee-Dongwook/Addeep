"use client";
import Image from "next/image";
import React, { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapPanelProps {
  image: string | Element;
}

const MainGsapPanelMolecule = ({ image }: GsapPanelProps) => {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!panelRef.current) return;

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

  return (
    <div ref={panelRef} className="bg-white relative overflow-hidden w-screen">
      <div className="w-full h-full">{image as unknown as ReactNode}</div>
    </div>
  );
};

// Header Component
const CoreValueHeader = () => {
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
  const values = [
    {
      icon: "👤", // 여기 실제 아이콘 넣으면 됨 (Image나 SVG)
      title: "올바른 인재제일",
      desc: "정직하고 역량있는 인재를 최우선으로 생각합니다",
    },
    {
      icon: "🏆",
      title: "바람직한 최고지향",
      desc: "올바른 방향으로 최고의 결과를 추구합니다",
    },
    {
      icon: "🚀",
      title: "도전·혁신적인 변화선도",
      desc: "끊임없는 도전과 혁신으로 변화를 이깁니다",
    },
    {
      icon: "🤝",
      title: "지혜로운 상생추구",
      desc: "모든 이해관계자와 함께 성장하는 길을 찾습니다",
    },
    {
      icon: "💡",
      title: "창의적인 정도경영",
      desc: "창의성과 정직함을 바탕으로 경영 합니다",
    },
  ];

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
          {/* <div className="flex flex-col items-center lg:items-start lg:w-1/2">
              <h2 className="text-2xl font-bold text-black mb-1">Motto</h2>
              <p className="text-lg font-bold text-gray-800 leading-relaxed">
                열망, 공감, 민첩
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>지금 우리 모두에게 소중한 시간을 열망과 공감,</li>
                <li>그리고 민첩하게 협력하자</li>
              </ul>
            </div> */}
        </div>
      </div>
    </div>
  );
};

const ThirdContainer = () => {
  return (
    <div className="w-full flex flex-col justify-center h-96 p-8 bg-[#F9FAFB]">
      <div className="p-48">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col items-center lg:items-start lg:w-1/2">
            <h2 className="text-4xl font-bold text-black mb-4">Mission</h2>

            <ul className="text-xl text-gray-700 font-normal font-sans space-y-4">
              <li className="flex flex-row items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9.04785 0.80957C13.6765 0.80957 17.4287 4.5618 17.4287 9.19043C17.4287 13.8191 13.6765 17.5713 9.04785 17.5713C4.41922 17.5712 0.666992 13.8191 0.666992 9.19043C0.667049 4.56183 4.41926 0.809627 9.04785 0.80957Z"
                    fill="#833AB4"
                  />
                  <path
                    d="M9.04785 0.80957C13.6765 0.80957 17.4287 4.5618 17.4287 9.19043C17.4287 13.8191 13.6765 17.5713 9.04785 17.5713C4.41922 17.5712 0.666992 13.8191 0.666992 9.19043C0.667049 4.56183 4.41926 0.809627 9.04785 0.80957Z"
                    stroke="#E5E7EB"
                  />
                </svg>{" "}
                작은 성공에 분투하자.
              </li>
              <li className="flex flex-row items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <path
                    d="M9.04785 0.142822C13.6765 0.142822 17.4287 3.89505 17.4287 8.52368C17.4287 13.1524 13.6765 16.9045 9.04785 16.9045C4.41922 16.9045 0.666992 13.1523 0.666992 8.52368C0.667049 3.89509 4.41926 0.142879 9.04785 0.142822Z"
                    fill="#FD1D1D"
                  />
                  <path
                    d="M9.04785 0.142822C13.6765 0.142822 17.4287 3.89505 17.4287 8.52368C17.4287 13.1524 13.6765 16.9045 9.04785 16.9045C4.41922 16.9045 0.666992 13.1523 0.666992 8.52368C0.667049 3.89509 4.41926 0.142879 9.04785 0.142822Z"
                    stroke="#E5E7EB"
                  />
                </svg>{" "}
                함께하는 힘으로 도전과 모험을 즐기자.
              </li>
              <li className="flex flex-row items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9.04785 0.80957C13.6765 0.80957 17.4287 4.5618 17.4287 9.19043C17.4287 13.8191 13.6765 17.5713 9.04785 17.5713C4.41922 17.5712 0.666992 13.8191 0.666992 9.19043C0.667049 4.56183 4.41926 0.809627 9.04785 0.80957Z"
                    fill="#F77737"
                  />
                  <path
                    d="M9.04785 0.80957C13.6765 0.80957 17.4287 4.5618 17.4287 9.19043C17.4287 13.8191 13.6765 17.5713 9.04785 17.5713C4.41922 17.5712 0.666992 13.8191 0.666992 9.19043C0.667049 4.56183 4.41926 0.809627 9.04785 0.80957Z"
                    stroke="#E5E7EB"
                  />
                </svg>{" "}
                스마트하게 생각하고 바람직하게 행동하자.
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
