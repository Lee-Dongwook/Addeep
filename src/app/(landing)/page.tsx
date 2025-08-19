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
            <div className="relative w-full h-screen">
              {/* Top Left Text Block */}
              <div className="absolute top-8 left-8 w-80 animate-text">
                <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
                  {collageData[0].text.map((line, index) => (
                    <span key={index} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              {/* Top Right Image - Fisheye Effect */}
              <div className="absolute top-8 right-8 w-80 h-80 animate-image">
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
              <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-80 h-80 animate-image">
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
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-80 animate-text">
                <p className="text-2xl md:text-3xl font-bold leading-relaxed bg-gradient-to-b from-purple-400 to-purple-700 bg-clip-text text-transparent">
                  {collageData[1].text.map((line, index) => (
                    <span key={index} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              {/* Bottom Right Image - Three People */}
              <div className="absolute bottom-8 right-8 w-80 h-80 animate-image">
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
                className="absolute bottom-8 left-8 animate-text cursor-pointer hover:scale-110 transition-transform duration-200"
                onClick={handleArrowClick}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black"
                >
                  <path
                    d="M12 4L12 20M12 20L18 14M12 20L6 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Second Section - Split Screen Portrait */}
      <div ref={secondSectionRef} className="min-h-screen bg-black">
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
                <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-loose flex flex-col gap-4">
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
