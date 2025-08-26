"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useResponsive } from "../../../../lib/useResponsive";

gsap.registerPlugin(ScrollTrigger);

// Header Component
const TeamWorkHeader = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div className="w-full h-48 text-center p-4">
        <div
          className="w-full h-48 p-2 rounded-lg flex flex-col items-center justify-center"
          style={{
            background:
              "linear-gradient(90deg, #833AB4 0%, #E1306C 50%, #F56040 100%)",
            border: "1px solid #E5E7EB",
          }}
        >
          <h1 className="text-2xl font-bold text-white mb-4">About Our Team</h1>
          <p className="text-base text-white">
            우수한 맨 파워! 창의적인 Brain!
          </p>
          <p className="text-base text-white">잠재력 높은 핵심역량!</p>
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
          About Our Team
        </h1>
        <p className="text-lg md:text-xl text-white">
          우수한 맨 파워! 창의적인 Brain! 잠재력 높은 핵심역량!
        </p>
      </div>
    </div>
  );
};

// Hero Component
const TeamWorkHero = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div className="mt-8 w-full p-4 text-center flex flex-col h-48 bg-[#F9FAFB]">
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-xl font-normal text-gray-800 leading-relaxed">
            우리는 디지털 플랫폼 서비스분야의 최고의 전문가와 기술력으로,
          </p>
          <p className="text-xl font-normal text-gray-800 leading-relaxed mt-4">
            수준 높은 글로벌 플랫폼 생태계 혁신을 주도합니다.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-4 text-center flex flex-col h-48 md:h-96 bg-[#F9FAFB]">
      <div className="flex-1 flex flex-col items-center justify-center">
        <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-800 leading-relaxed">
          우리는 디지털 플랫폼 서비스분야의 최고의 전문가와 기술력으로,
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-800 leading-relaxed mt-4">
          수준 높은 글로벌 플랫폼 생태계 혁신을 주도합니다.
        </p>
      </div>
    </div>
  );
};

// First Human Component
const FirstHuman = () => {
  const { isMobile } = useResponsive();
  const router = useRouter();

  if (isMobile) {
    return (
      <div className="w-full p-4 bg-white">
        <div className=" mx-auto">
          <div className="p-4">
            <div className="flex flex-col gap-8">
              {/* Left Section - Profile Summary */}
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-10 rounded-full bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for profile image */}
                  <div className="text-gray-400 text-4xl">👤</div>
                </div>
                <h2 className="text-2xl font-bold text-black mb-1">
                  Kevin Jaeyoung Yoon
                </h2>
                <p className="text-lg text-purple-600 mb-4">윤재영</p>
                <div className="text-xs text-black space-y-1">
                  <p>Addeep Founder & CVO Chief Vision Officer</p>
                  <p>US Addeep Inc. Chief Executive Officer CEO</p>
                </div>
              </div>

              {/* Right Section - Detailed Information */}
              <div className="space-y-6">
                {/* Education */}
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Education
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Hayfield University Graduate School of Business MBA</li>
                    <li>서울대학교 경영대학원 CFO Academy Completion</li>
                  </ul>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Experience
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Addeep Platform Series Product Global Service R&D</li>
                    <li>
                      • OTT 스마트 콘텐츠 플랫폼&스마트 디바이스, AI 소셜 로봇
                      제품 시리즈 사업화
                    </li>
                    <li>
                      • 디지털 콘텐츠 권리보호을 위한 'ACI' 콘텐츠 보안 기술
                      창시자
                    </li>
                    <li>
                      • 한국, 미국, 중국, 싱가폴, 동남아시아, EU ICT 글로벌
                      비즈니스 경영전략 총괄
                    </li>
                    <li>• 현) 한국AGI기업연합회 이사</li>
                  </ul>
                </div>

                {/* Awards */}
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Awards
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 2015 대한민국 최고의 경영대상 기술혁신대상</li>
                    <li>
                      • 2016 ICOTEC 국제 저작권 기술 콘퍼런스 저작권 기술상
                    </li>
                    <li>• 2017 중소벤처기업부 주최 "국무총리상" 표창</li>
                    <li>• 2017 US WHITE HOUSE "Donald Trump" 대통령상</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section - Profile Summary */}
            <div className="flex flex-col items-center text-center lg:w-1/2">
              <div className="w-48 h-48 mb-24 rounded-full overflow-hidden">
                <Image
                  src="/images/jaeyoung.png"
                  alt="Kevin Jaeyoung Yoon"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-black mb-1">
                Kevin Jaeyoung Yoon
              </h2>
              <p className="text-lg text-purple-600 mb-4">윤재영</p>
              <div className="text-sm text-black space-y-1">
                <p>Addeep Founder & CVO Chief Vision Officer</p>
                <p>US Addeep Inc. Chief Executive Officer CEO</p>
              </div>
              <button
                className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
                onClick={() => router.push("/about-us/team-work/jaeyoung")}
              >
                이력 더보기
              </button>
            </div>

            {/* Right Section - Detailed Information */}
            <div className="lg:w-1/2 space-y-6">
              {/* Education */}
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Education
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Hayfield University Graduate School of Business MBA</li>
                  <li>서울대학교 경영대학원 CFO Academy Completion</li>
                </ul>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Experience
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Addeep Platform Series Product Global Service R&D</li>
                  <li>
                    • OTT 스마트 콘텐츠 플랫폼&스마트 디바이스, AI 소셜 로봇
                    제품 시리즈 사업화
                  </li>
                  <li>
                    • 디지털 콘텐츠 권리보호을 위한 'ACI' 콘텐츠 보안 기술
                    창시자
                  </li>
                  <li>
                    • 한국, 미국, 중국, 싱가폴, 동남아시아, EU ICT 글로벌
                    비즈니스 경영전략 총괄
                  </li>
                  <li>• 현) 한국AGI기업연합회 이사</li>
                </ul>
              </div>

              {/* Awards */}
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Awards
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 2015 대한민국 최고의 경영대상 기술혁신대상</li>
                  <li>• 2016 ICOTEC 국제 저작권 기술 콘퍼런스 저작권 기술상</li>
                  <li>• 2017 중소벤처기업부 주최 "국무총리상" 표창</li>
                  <li>• 2017 US WHITE HOUSE "Donald Trump" 대통령상</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondHuman = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div className="w-full p-4 bg-[#E5E7EB]">
        <div className="mx-auto">
          <div className="p-4">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                  {/* Placeholder for profile image */}
                  <div className="text-gray-400 text-4xl">👤</div>
                </div>
                <h2 className="text-2xl font-bold text-black mb-1">
                  Chris Kang
                </h2>
                <p className="text-lg text-purple-600 mb-4">강경수</p>
                <div className="text-sm text-black space-y-1">
                  <p>Addeep PIMS Inc 대표이사</p>
                  <p>Addeep Group 부사장 COO</p>
                </div>
              </div>
              <div className="space-y-6 flex flex-col items-center justify-center">
                {/* Education */}
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Education & Background
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>우송대학교 컴퓨터공학부</li>
                    <li>전) 타이탄플랫폼 부사장 COO</li>
                    <li>전) 타이탄스튜디오 대표이사</li>
                  </ul>
                  <h3 className="mt-8 text-lg font-semibold text-black mb-2">
                    Expertise
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 네트워크 통합 정보보안 개발 및 보안 컨설팅 전문가</li>
                    <li>• 7개국 해외법인 운영 및 글로벌 경영전략수립</li>
                    <li>
                      •China Unicorn과 스마트 콘텐츠 서비스 IDC 데이터 인프라
                      서비스 구축
                    </li>
                    <li>
                      • Softbank Solution China 전략적 사업협력 파트너쉽 구축
                    </li>
                    <li>• 인사, 행정, 법무, 경영기획 총괄 운영</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-8 bg-[#E5E7EB]">
      <div className="max-w-6xl mx-auto">
        <div className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 space-y-6 flex flex-col items-center justify-center">
              {/* Education */}
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Education & Background
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>우송대학교 컴퓨터공학부</li>
                  <li>전) 타이탄플랫폼 부사장 COO</li>
                  <li>전) 타이탄스튜디오 대표이사</li>
                </ul>
                <h3 className="mt-8 text-lg font-semibold text-black mb-2">
                  Expertise
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 네트워크 통합 정보보안 개발 및 보안 컨설팅 전문가</li>
                  <li>• 7개국 해외법인 운영 및 글로벌 경영전략수립</li>
                  <li>
                    •China Unicorn과 스마트 콘텐츠 서비스 IDC 데이터 인프라
                    서비스 구축
                  </li>
                  <li>
                    • Softbank Solution China 전략적 사업협력 파트너쉽 구축
                  </li>
                  <li>• 인사, 행정, 법무, 경영기획 총괄 운영</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center lg:w-1/2">
              <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                {/* Placeholder for profile image */}
                <div className="text-gray-400 text-4xl">👤</div>
              </div>
              <h2 className="text-2xl font-bold text-black mb-1">Chris Kang</h2>
              <p className="text-lg text-purple-600 mb-4">강경수</p>
              <div className="text-sm text-black space-y-1">
                <p>Addeep PIMS Inc 대표이사</p>
                <p>Addeep Group 부사장 COO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThirdHuman = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div className="w-full p-4 bg-white">
        <div className="mx-auto">
          <div className="p-4">
            <div className="flex flex-col gap-8">
              {/* Left Section - Profile Summary */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mb-10 flex items-center justify-center text-center">
                  {/* Placeholder for profile image */}
                  <div className="text-gray-400 text-4xl">👤</div>
                </div>
                <h2 className="text-2xl font-bold text-black mb-1">
                  Albert Seyoung Koo
                </h2>
                <p className="text-lg text-purple-600 mb-4">구세영</p>
                <div className="text-sm text-black space-y-1">
                  <p>Addeep Inc. Korea 부사장</p>
                </div>
              </div>

              {/* Right Section - Detailed Information */}
              <div className="lg:w-1/2 space-y-6">
                {/* Education */}
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Education & Career
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>호남대학교 전산통계학 학사</li>
                    <li>전)한국컴퓨터통신 UniSQL DBMS 과장</li>
                    <li>전)티맥스그룹 공공부문 사업총괄 전무</li>
                  </ul>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Professional Experience
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>
                      • 국내 최초 ORDBMS "UniSQL" 8년간 시스템 S/W 사업추진
                    </li>
                    <li>
                      • 국내 초, 중, 고, 대학 교육정보화 부문 시스템 S/W
                      사업추진
                    </li>
                    <li>
                      • 티맥스 그룹 미들웨어, DBMS등 솔루션 제품 국내 대형
                      공공기관 사업추진
                    </li>
                    <li>
                      • Tmax Office, OS, AI, Cloud, Metaverse, BI, Fintech
                      신사업 사업전략기획
                    </li>
                    <li>
                      • ICT 산업분야 28년 경력 네트워크 솔루션 및 컴퓨팅
                      소프트웨어 산업 혁신 전문가
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section - Profile Summary */}
            <div className="flex flex-col items-center lg:w-1/2">
              <div className="w-32 h-32 rounded-full bg-gray-200 mb-20 flex items-center justify-center text-center">
                {/* Placeholder for profile image */}
                <div className="text-gray-400 text-4xl">👤</div>
              </div>
              <h2 className="text-2xl font-bold text-black mb-1">
                Albert Seyoung Koo
              </h2>
              <p className="text-lg text-purple-600 mb-4">구세영</p>
              <div className="text-sm text-black space-y-1">
                <p>Addeep Inc. Korea 부사장</p>
              </div>
            </div>

            {/* Right Section - Detailed Information */}
            <div className="lg:w-1/2 space-y-6">
              {/* Education */}
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Education & Career
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>호남대학교 전산통계학 학사</li>
                  <li>전)한국컴퓨터통신 UniSQL DBMS 과장</li>
                  <li>전)티맥스그룹 공공부문 사업총괄 전무</li>
                </ul>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Professional Experience
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 국내 최초 ORDBMS "UniSQL" 8년간 시스템 S/W 사업추진</li>
                  <li>
                    • 국내 초, 중, 고, 대학 교육정보화 부문 시스템 S/W 사업추진
                  </li>
                  <li>
                    • 티맥스 그룹 미들웨어, DBMS등 솔루션 제품 국내 대형
                    공공기관 사업추진
                  </li>
                  <li>
                    • Tmax Office, OS, AI, Cloud, Metaverse, BI, Fintech 신사업
                    사업전략기획
                  </li>
                  <li>
                    • ICT 산업분야 28년 경력 네트워크 솔루션 및 컴퓨팅
                    소프트웨어 산업 혁신 전문가
                  </li>
                </ul>
              </div>
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
      <TeamWorkHeader />
      <TeamWorkHero />
      <div className="flex flex-col items-center justify-center">
        <FirstHuman />
        <SecondHuman />
        <ThirdHuman />
      </div>
    </div>
  );
}
