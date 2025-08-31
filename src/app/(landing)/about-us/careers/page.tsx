"use client";

import React, { useRef, useEffect, type ReactNode } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useResponsive } from "../../../../lib/useResponsive";
import { LandingBottomArrowIcon } from "../../../../icons";
import { sectionData, items } from "../../../../constants/careers";

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
            채용 목적
          </h1>

          {/* 그라디언트 언더라인 */}
          <div
            className="mt-3 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#FF0169] via-[#D300C5] to-[#7638FA]"
            aria-hidden
          />

          {/* 본문 */}
          <p className="mt-8 text-md font-normal text-gray-700 leading-relaxed">
            우리가 추구하는 상상이 현실과 연결되는 Addeep에서는
          </p>
          <p className="mt-3 text-md font-normal text-gray-700 leading-relaxed">
            함께 일하는 다양한 인재들의{" "}
            <span className="bg-gradient-to-r from-[#FF0169] via-[#D300C5] to-[#7638FA] bg-clip-text text-transparent font-bold">
              안전과 만족감
            </span>
            을 큰 가치로 두고 있습니다.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto px-6 py-14 text-center">
        {/* 제목 */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 tracking-tight">
          채용 목적
        </h1>

        {/* 그라디언트 언더라인 */}
        <div
          className="mt-3 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#FF0169] via-[#D300C5] to-[#7638FA]"
          aria-hidden
        />

        {/* 본문 */}
        <p className="mt-8 text-xl md:text-2xl lg:text-3xl font-normal text-gray-700 leading-relaxed">
          우리가 추구하는 상상이 현실과 연결되는 Addeep에서는
        </p>
        <p className="mt-3 text-xl md:text-2xl lg:text-3xl font-normal text-gray-700 leading-relaxed">
          함께 일하는 다양한 인재들의{" "}
          <span className="bg-gradient-to-r from-[#FF0169] via-[#D300C5] to-[#7638FA] bg-clip-text text-transparent font-bold">
            안전과 만족감
          </span>
          을 큰 가치로 두고 있습니다.
        </p>
      </div>
    </section>
  );
};

const CareerCard = () => {
  return (
    <section
      className="
        w-full
        bg-gradient-to-b from-[#FFF9F5] via-[#F9F0FF] to-[#F6EDF8]
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* 섹션 타이틀 */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 tracking-tight">
            근무 환경
          </h2>
          <div
            className="mt-3 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#FF0169] via-[#D300C5] to-[#7638FA]"
            aria-hidden
          />
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

const CareerBackground = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <section className="relative w-full bg-[#F9FAFB]">
        {/* 상단 얇은 그라디언트 라인 (옵션) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D300C5]/30 to-transparent" />

        <div className="mx-auto px-6 py-20 text-center">
          <h2 className="text-slate-800 font-pretendard font-extrabold tracking-tight text-xl">
            함께 성장할 준비가 되셨나요?
          </h2>

          <p className="mt-6 text-slate-500 font-pretendard text-sm leading-relaxed">
            Addeep에서 여러분의 꿈을 현실로 만들어보세요
          </p>
          <div className="mt-8">
            <a
              href="/careers"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full text-white font-pretendard font-bold bg-gradient-to-r from-[#FF7A34] via-[#FF0169] to-[#7638FA] shadow-[0_12px_30px_rgba(118,56,250,0.25)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
            >
              지원하기
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full bg-[#F9FAFB]">
      {/* 상단 얇은 그라디언트 라인 (옵션) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D300C5]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
        <h2 className="text-slate-800 font-pretendard font-extrabold tracking-tight text-3xl md:text-5xl lg:text-6xl">
          함께 성장할 준비가 되셨나요?
        </h2>

        <p className="mt-6 text-slate-500 font-pretendard text-base md:text-xl lg:text-2xl leading-relaxed">
          Addeep에서 여러분의 꿈을 현실로 만들어보세요
        </p>
        <div className="mt-12">
          <a
            href="/careers"
            className="inline-flex items-center justify-center h-14 md:h-[60px] px-8 md:px-10 rounded-full text-white font-pretendard font-bold bg-gradient-to-r from-[#FF7A34] via-[#FF0169] to-[#7638FA] shadow-[0_12px_30px_rgba(118,56,250,0.25)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
          >
            지원하기
          </a>
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
          <CareerBackground />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="max-w-4xl mx-auto">
        {sectionData.map((section, index) => (
          <AnimatedSection key={index} index={index}>
            <div className="flex flex-col md:flex-row w-full">
              {/* Text Section */}
              <div className="md:w-1/2 absolute top-1/3 left-20 items-center justify-center p-8 md:p-12">
                <p className="text-3xl md:text-5xl font-sans flex flex-col font-normal text-gray-800 leading-loose text-left gap-6">
                  {section.text.map((line, lineIndex) => (
                    <span key={lineIndex} className="animate-text">
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
        <CareerBackground />
      </div>
    </div>
  );
}
