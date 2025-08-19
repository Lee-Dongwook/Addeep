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
    image:
      "https://scontent-icn2-1.xx.fbcdn.net/v/t39.8562-6/387184831_3144051205888666_1255435093115443770_n.webp?_nc_cat=108&ccb=1-7&_nc_sid=f537c7&_nc_ohc=wXWVeer7fBMQ7kNvwFsuCYw&_nc_oc=AdkMfonxKNvANxrkhcgeXjZiJmhjkBbKCScDWhsoswuZseFPty6gUYCjx8VGfCDKNn4&_nc_zt=14&_nc_ht=scontent-icn2-1.xx&_nc_gid=l1VCRayvBau6AlJdlnBvhQ&oh=00_AfWmojQ0p0li3k62HzFIDgnlx7FbiSUXS-qPDubXU7r9uw&oe=68A76662",
  },
];

const InfoCard = ({ title, description }: InfoCardProps) => {
  return (
    <div className="bg-gray-50 w-[500px] p-10 space-y-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm">{description}</p>
    </div>
  );
};

const CareerHero = () => {
  return (
    <div className="w-full p-4 text-center bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed">
          채용 목적
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed mt-4">
          우리가 추구하는 상상이 현실과 연결되는 Addeep에서는
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed mt-4">
          함께 일하는 다양한 인재들의 안전과 만족감을 큰 가치로 두고 있습니다.
        </p>
      </div>
    </div>
  );
};

const CareerCard = () => {
  return (
    <div className="w-full p-4 text-center bg-[#F9FAFB]">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed">
          근무 환경
        </h1>
        <div className="grid grid-cols-2 gap-24">
          <InfoCard
            title="회사 위치"
            description="서울 강남에 본사를 두고 있습니다. 우리는 세계 도시에서 성장하고 발전합니다."
          />
          <InfoCard
            title="원격근무 지원"
            description="우리는 근무환경과 업무 생산성을 높이기 위해서 근무환경 개선과 함께 원격근무를 지원하여 구성원 모두의 업무 효율을 극대화 하고 있습니다."
          />
          <InfoCard
            title="급여 및 4대 보험"
            description="Addeep은 인재제일을 우선시합니다. 경쟁력있는 급여 제공과 4대 보험 인센티브 혜택 등 포함한 다양한 복지를 제공하고 있습니다."
          />
          <InfoCard
            title="워라밸"
            description="유연한 근무시간, 넉넉한 휴가 복지, 가족 중심의 근무 정책을 제공합니다. 또한 성과에 따른 부대행사 및 복지를 지원합니다."
          />
        </div>
      </div>
    </div>
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
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        {sectionData.map((section, index) => (
          <AnimatedSection key={index} index={index}>
            <div className="flex flex-col md:flex-row w-full">
              {/* Text Section */}
              <div className="flex-1 flex items-center justify-center p-8 md:p-12">
                <p className="text-3xl md:text-5xl flex flex-col font-bold text-gray-800 leading-loose text-left gap-2">
                  {section.text.map((line, lineIndex) => (
                    <span key={lineIndex} className="animate-text">
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              {/* Image Section */}
              <div className="flex-1 relative h-64 md:h-96 animate-image">
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
      <CareerHero />
      <CareerCard />
      <CareerBackground />
    </div>
  );
}
