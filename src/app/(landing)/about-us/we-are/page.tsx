"use client";
import Image from "next/image";
import React, { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

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

const sectionData = [
  {
    text: [
      "디지털 플랫폼과 사람,",
      "그리고 데이터와",
      "인공지능,",
      "문화 콘텐츠 융합!",
    ],
    image: "/images/about-us-header.png",
  },
];

const HeaderImageData = [
  {
    text: ["디지털 혁신과", "뉴 미디어 시장의", "트랜스포메이션", "으로 전환!"],
  },
];

const HeroText = [
  {
    text: [
      "이용자, 데이터 중심의",
      "소셜 미디어 서비스 Addeep이",
      "디지털 플랫폼의",
      "새로운 혁신을 만들어 갑니다.",
    ],
  },
];

const slideData = [
  {
    title: "AGI와 S/W 플랫폼 기술로 여는 미래 디지털 생태계",
    text: [
      "Addeep은 급변하는 디지털 세상 속에서 AGI(인공 일반 지능)",
      "기술과 혁신적인 S/W 플랫폼 기술을 기반으로 미디어&커머스,",
      "데이터 스트리밍, 디지털 마케팅",
      "그리고 문화,엔터테인먼트 등 다양한 콘텐츠 산업의 융합을 선도합니다.",
      '"클라우드 스트리밍,미디어,게임,커머스 플랫폼"',
      "산업의 글로벌 혁신 기술 기업으로 도약하며,",
      "디지털 플랫폼 생태계의 새로운 패러다임을 만들어나가고 있습니다.",
    ],
    image: "/images/about-us-slider-1.png",
  },
  {
    title: "",
    text: [
      "우리는 전 세계 모든 고객과 사용자들이 공존의 가치를 창출할 수 있도록,",
      "AGI 기반의 데이터 서비스 경계를 혁신하여 독자적인 비즈니스 모델인",
      '"Addeep Platform" 생태계를 구축하고 있습니다.',
      "Addeep의 스마트 문화는 모두를 향한 도전의 즐거움을 의미합니다.",
      "클라우드 S/W 플랫폼 기술과 AGI를 바탕으로 디지털 콘텐츠 서비스 체계를 혁신하여",
      "스마트 컬처 세상을 향해 나아갑니다.",
      "전 세계 개발자, 창작자(크리에이터), 각 분야 전문가들이 무한한 도전과 혁신을 경험하고",
      '새로운 가치를 끊임없이 만들어 모두에게 "희망"이 되는 공간,',
      '바로 "Addeep Platform" 입니다.',
      "a",
      "우리는 글로벌 최고의 인재들과 함께 S/W 핵심 역량을 모아 한국, 미국, 인도, 동남아시아를 발판으로",
      "글로벌 기업으로의 도약을 시작합니다.",
      "Addeep이 추구하는 비즈니스 모델은 클라우드 기술, 커머스 플랫폼, AGI, 데이터, 미디어 등",
      "디지털 트랜스 미디어 융합이 결합된 컬처 크리에이터 통합 디지털 플랫폼 서비스를 의미합니다.",
    ],
    image: "/images/about-us-slider-1.png",
  },
  {
    title: "",
    text: ["AGI 기반의 스마트한 플랫폼과 콘텐츠 서비스 ..."],
    image: "/images/about-us-slider-1.png",
  },
];

function AboutSwiper() {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="w-full h-screen custom-swiper"
    >
      {slideData.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col md:flex-row items-center justify-between h-full px-8 md:px-20">
            {/* Text */}
            <div className="md:w-2/3 space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-600 leading-snug">
                {slide.title}
              </h2>
              <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                {slide.text.map((t, index) => (
                  <div key={index}>{t}</div>
                ))}
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <div className="relative w-[280px] h-[560px] border-2 border-pink-500 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={slide.image ?? ""}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

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
    </div>
  );
}
