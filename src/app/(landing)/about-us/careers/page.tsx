"use client";

import React, { useRef, useEffect, type ReactNode } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useResponsive } from "../../../../lib/useResponsive";
import { LandingBottomArrowIcon } from "../../../../icons";
import { sectionData, items } from "../../../../constants/careers";
import { NEXT_PUBLIC_CDN_BASE } from "../../../../lib/env";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: ReactNode;
  index: number;
}

type InfoCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

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

const InfoCard = ({ title, description, icon = "📍" }: InfoCardProps) => {
  return (
    <div className="group bg-white w-full p-6 md:p-8 rounded-2xl shadow-[0_12px_30px_rgba(16,24,40,0.08)] ring-1 ring-black/5">
      <div className="flex items-start gap-5">
        {/* 아이콘 원형 그라디언트 */}
        <div
          className="flex-none w-12 h-12 md:w-14 md:h-14 rounded-full grid place-items-center
  bg-[linear-gradient(to_bottom_right,#F09433,#E6683C,#DC2743,#CC2366,#BC1888)]
  text-white text-xl shadow-md"
        >
          <span>{icon}</span>
        </div>
        <div className="space-y-2">
          <h3 className="text-base md:text-lg font-extrabold text-gray-900">
            {title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
const CareerHero = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <section className="w-full bg-[#F9FAFB]">
        <div className="mx-auto px-6 py-14 text-center">
          {/* 제목 */}
          <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
            Job Openings
          </h1>

          {/* 본문 */}
          <p className="mt-8 text-md font-normal text-gray-700 leading-relaxed">
            We are currently seeking talented individuals
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#F9FAFB]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="text-5xl font-bold text-gray-800 tracking-tight">
          Job Openings
        </h1>
        <h3 className="mt-8 text-xl md:text-2xl lg:text-3xl font-normal text-gray-700">
          We are currently seeking talented individuals
        </h3>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-700">
          to join our team in the following roles:
        </h3>

        <div className="flex flex-col gap-6 mt-8">
          <div className="flex flex-row gap-24">
            <h3 className="text-2xl font-normal text-gray-700 min-w-72">
              Backend Planner
            </h3>
            <p className="text-lg font-normal text-gray-700">
              Designs the backend system architecture and plans new features to
              ensure the service's stability and efficiency.
            </p>
          </div>
          <div className="flex flex-row gap-24">
            <h3 className="text-2xl font-normal text-gray-700 leading-relaxed min-w-72">
              Engineer
            </h3>
            <p className="text-lg font-normal text-gray-700 leading-relaxed">
              Utilizes a diverse tech stack to implement and develop Addeep's
              innovative AI and Web 3.0 platform.
            </p>
          </div>
          <div className="flex flex-row gap-24">
            <h3 className="text-2xl font-normal text-gray-700 leading-relaxed min-w-72">
              Global Business Strategist
            </h3>
            <p className="text-lg font-normal text-gray-700 leading-relaxed">
              Analyzes global market trends and formulates strategies to achieve
              Addeep's business objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CareerCard = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div>
          <h1 className="text-5xl font-bold text-gray-800 tracking-tight">
            Recuritment Purpose
          </h1>
          <h3 className="mt-8 text-xl md:text-2xl lg:text-3xl font-normal text-gray-700">
            At Addeep, we highly value the safety and satisfaction of the
            diverse
          </h3>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-700">
            talents who work together to bring our imaginative ideas to reality.
          </h3>
        </div>

        {/* 카드 그리드 */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 xl:gap-12">
          {items.map((it, i) => (
            <InfoCard key={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function LandingPage() {
  const { isMobile } = useResponsive();
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

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-200">
        <div className="mx-auto">
          {sectionData.map((section, index) => (
            <AnimatedSection key={index} index={index}>
              <div className="flex flex-col w-full">
                {/* Text Section */}
                <div className="absolute top-1/4 items-center justify-center p-8">
                  <p className="text-2xl font-sans flex flex-col font-normal text-gray-800 leading-loose text-left gap-2">
                    {section.text.map((line, lineIndex) => (
                      <span key={lineIndex} className="animate-text">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
                {/* Bottom Arrow */}
                <div
                  className="absolute top-2/4 mt-12 left-8 animate-text cursor-pointer hover:scale-110 transition-transform duration-200"
                  onClick={handleArrowClick}
                >
                  <LandingBottomArrowIcon />
                </div>

                {/* Image Section */}
                <div
                  className={[
                    "absolute top-3/4 mt-6 right-0 w-full h-1/3 animate-image",
                  ].join(" ")}
                >
                  <img
                    src="https://storage.googleapis.com/assets-addeep/images/Career_Background.png"
                    alt="girl taking a photo with a tunnel filter"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div ref={secondSectionRef}>
          <CareerHero />
          <CareerCard />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div
        className="flex flex-col h-[600px] items-center justify-center text-center"
        style={{
          background: `url(${NEXT_PUBLIC_CDN_BASE}/images/CareerBanner.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.9,
        }}
      >
        {sectionData.map((section, index) => (
          <AnimatedSection key={index} index={index}>
            <div className="flex flex-col w-full">
              {/* Text Section */}
              <div className="items-center justify-center text-center">
                <p className="text-5xl font-sans flex flex-col font-bold text-white gap-6">
                  {section.text.map((line, lineIndex) => (
                    <span key={lineIndex} className="animate-text">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <div ref={secondSectionRef}>
        <CareerHero />
        <CareerCard />
      </div>
    </div>
  );
}
