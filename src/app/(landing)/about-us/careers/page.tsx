"use client";
import Image from "next/image";
import React, { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const sectionData = [
  {
    text: ["우리를 도와주세요.", "여러분의 창의력과", "잠재력이 필요합니다."],
    image: "/images/about-us-header.png",
  },
];

const InfoCard = ({ title, description, icon = "📍" }: InfoCardProps) => {
  return (
    <div className="group bg-white w-full p-6 md:p-8 rounded-2xl shadow-[0_12px_30px_rgba(16,24,40,0.08)] ring-1 ring-black/5">
      <div className="flex items-start gap-5">
        {/* 아이콘 원형 그라디언트 */}
        <div
          className="flex-none w-12 h-12 md:w-14 md:h-14 rounded-full grid place-items-center
                        bg-gradient-to-br from-[#FF0169] via-[#D300C5] to-[#7638FA] text-white text-xl shadow-md"
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
  return (
    <section className="w-full bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto px-6 py-14 text-center">
        {/* 제목 */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 tracking-tight">
          채용 목적
        </h1>

        {/* 그라디언트 언더라인 */}
        <div
          className="mt-3 mx-auto h-1 w-16 rounded-full
                     bg-gradient-to-r from-[#FF0169] via-[#D300C5] to-[#7638FA]"
          aria-hidden
        />

        {/* 본문 */}
        <p className="mt-8 text-xl md:text-2xl lg:text-3xl font-normal text-gray-700 leading-relaxed">
          우리가 추구하는 상상이 현실과 연결되는 Addeep에서는
        </p>
        <p className="mt-3 text-xl md:text-2xl lg:text-3xl font-normal text-gray-700 leading-relaxed">
          함께 일하는 다양한 인재들의{" "}
          <span
            className="bg-gradient-to-r from-[#FF0169] via-[#D300C5] to-[#7638FA]
                       bg-clip-text text-transparent font-bold"
          >
            안전과 만족감
          </span>
          을 큰 가치로 두고 있습니다.
        </p>
      </div>
    </section>
  );
};

const CareerCard = () => {
  const items: InfoCardProps[] = [
    {
      icon: "📍",
      title: "회사 위치",
      description:
        "서울 강남에 본사를 두고 있습니다. 우리는 세계 도시에서 성장하고 발전합니다.",
    },
    {
      icon: "🏠",
      title: "원격근무 지원",
      description:
        "근무환경 개선과 함께 원격근무를 지원하여 구성원 모두의 업무 효율을 극대화하고 있습니다.",
    },
    {
      icon: "💰",
      title: "급여 및 4대 보험",
      description:
        "경쟁력 있는 급여, 4대 보험, 인센티브 등 다양한 복지를 제공합니다.",
    },
    {
      icon: "⚖️",
      title: "워라밸",
      description:
        "유연한 근무시간과 넉넉한 휴가, 가족 중심 복지 등 건강한 일·생활 균형을 지원합니다.",
    },
  ];
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
            className="mt-3 mx-auto h-1 w-16 rounded-full
                       bg-gradient-to-r from-[#FF0169] via-[#D300C5] to-[#7638FA]"
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
  return (
    <div className="w-full p-4 text-center bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-black text-2xl font-pretendard font-bold">
          함께 성장할 준비가 되셨나요?
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed mt-4">
          Addeep에서 여러분의 꿈을 현실로 만들어보세요
        </p>
        <button className="mt-10 text-white font-pretendard font-bold bg-[#0066FF] h-14 rounded-2xl">
          진행 중인 공고
        </button>
      </div>
    </div>
  );
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="80"
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

              {/* Image Section */}
              <div
                className={[
                  "absolute top-0 right-0 w-1/2 h-full animate-image",
                ].join(" ")}
              >
                <Image
                  src={section.image}
                  alt="girl taking a photo with a tunnel filter"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
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
