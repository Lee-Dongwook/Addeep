"use client";
import Image from "next/image";
import React, { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
    const imageElements = section.querySelectorAll(".animate-image");

    // 초기 상태 설정
    gsap.set(textElements, { y: 100, opacity: 0 });
    gsap.set(imageElements, { y: 100, opacity: 0 });

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

      imageElements.forEach((element, i) => {
        tl.to(
          element,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          textElements.length * 0.1 + i * 0.1
        );
      });
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
    imageElements.forEach((element, i) => {
      tl.to(
        element,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        textElements.length * 0.08 + i * 0.08
      );
    });

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

const collageData = [
  {
    text: [
      "우리는 사람들에게",
      "재미와 즐거움,",
      "그리고 상상의 문을",
      "연결시킵니다.",
    ],
    image: "/images/person-fisheye.png", // fisheye lens effect person
    position: "top-left",
  },
  {
    text: [
      "그리고 사람과",
      "사람사이 관계를...,",
      "세상 어디에서나",
      "만족할 수 있도록...,",
    ],
    image: "/images/smiling-man.png", // smiling man with hands on cheeks
    position: "middle-left",
    gradient: true,
  },
  {
    text: [],
    image: "/images/three-people.png", // three people looking down
    position: "bottom-right",
  },
];

const splitScreenData = {
  text: [
    "이제 애딥의",
    "소셜 네트워크 채널에서",
    "크리에이터와 인플루언서가",
    "안정된 콘텐츠 수익을",
    "만들어 갑니다",
  ],
  Image: "/images/person-peeking.png",
};

export default function LandingPage() {
  const secondSectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="min-h-screen bg-white">
      {/* First Section - Collage Layout */}
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection index={0}>
            <div className="relative w-full min-h-screen">
              {/* Top Left Text Block */}
              <div className="absolute top-8 left-8 w-[890px] animate-text">
                <p className="font-sans font-normal text-[64px] text-gray-800 leading-[90px] tracking-normal align-middle">
                  {collageData[0].text.map((line, index) => (
                    <span key={index} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              {/* Top Right Image - Fisheye Effect */}
              <div className="absolute top-8 right-8 w-[400px] h-[400px] animate-image">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={collageData[0].image}
                    alt="Person with fisheye lens effect"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                    priority
                  />
                </div>
              </div>

              {/* Middle Left Image - Smiling Man */}
              <div className="absolute top-3/4 left-8 transform -translate-y-1/2 w-80 h-[400px] animate-image">
                <Image
                  src={collageData[1].image}
                  alt="Smiling man with hands on cheeks"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 320px"
                  priority
                />
              </div>

              {/* Middle Right Text Block - Purple Gradient */}
              <div className="absolute top-3/4 right-24 transform -translate-y-1/2 w-80 animate-text">
                <p
                  className="font-sans font-normal text-[40px]  bg-gradient-to-r from-[#FF0169] via-[#D300C5] to-[#7638FA] 
               bg-clip-text text-transparent leading-[70px] tracking-normal align-middle text-right"
                >
                  {collageData[1].text.map((line, index) => (
                    <span key={index} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              {/* Bottom Right Image - Three People */}
              <div className="absolute top-full bottom-8 right-24 w-[500px] h-80 animate-image">
                <Image
                  src={collageData[2].image}
                  alt="Three people looking down"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 320px"
                  priority
                />
              </div>

              {/* Bottom Left Arrow */}
              <div
                className="absolute top-full mt-48 left-8 animate-text cursor-pointer hover:scale-110 transition-transform duration-200"
                onClick={handleArrowClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="101"
                  viewBox="0 0 75 101"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_15)">
                    <path
                      d="M9.42969 53.5605H17.835C21.7904 53.5605 25.1691 54.467 27.9708 56.2798C30.855 58.1752 32.7915 60.8534 33.7804 64.3144V6.96045H43.669V64.3144C44.6578 60.8534 46.5531 58.1752 49.3549 56.2798C52.2391 54.467 55.6589 53.5605 59.6144 53.5605H68.0197V64.1908H60.7268C55.6177 64.1908 51.4563 65.5505 48.2424 68.2698C45.0287 70.9891 43.4217 74.7798 43.4217 79.6418V81.1246H34.0276V79.6418C34.0276 74.7798 32.4207 70.9891 29.2069 68.2698C25.993 65.5505 21.8316 64.1908 16.7225 64.1908H9.42969V53.5605Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_15">
                      <rect
                        width="75"
                        height="100"
                        fill="white"
                        transform="translate(0 0.530273)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      {/* Second Section - Split Screen Portrait */}
      <div
        ref={secondSectionRef}
        className="mt-96 mb-20 min-h-screen  bg-black"
      >
        <AnimatedSection index={1}>
          <div className="relative w-full h-screen">
            {/* Split Screen Container */}
            <div className="flex w-full h-full">
              {/* Left Side - Person with hands over eyes */}
              <div className="flex-1 relative animate-image">
                <Image
                  src={splitScreenData.Image}
                  alt="Person with hands over eyes peeking through fingers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center animate-text">
              <div className="text-left px-8">
                <p className="text-[60px] font-sans font-normal text-white leading-normal">
                  {splitScreenData.text.map((line, index) => (
                    <span key={index} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
