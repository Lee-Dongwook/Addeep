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
      "Addeep은 WEB 3.0 기반의 혁신적인 소셜 미디어",
      "사업을 완성하기 위한 핵심 기술로 'Addeep-GPR-1'",
      "(Generative Pre-trained Recommender) AI를 개발하고",
      "있습니다. 이는 기존 대화형 AI 모델에 CNN 및 RNN",
      "차세대 기술을 통합하여 독자적으로 고안된 것으로,",
      "Addeep의 증강 AI(Augmented AI) 기술의 기반을",
      "이룹니다. Addeep의 GPR-1은 단순한 AI 모델을 넘어,",
      "사용자에게 명시적인 입력 없이도 개인화된 콘텐츠를",
      "자동으로 생성하고 추천하는데 중점을 둔 '비대화형",
      "완전 자동 생성형 AI'라는 점에서 차별점을 가집니다.",
    ],
    image:
      "https://scontent-icn2-1.xx.fbcdn.net/v/t39.8562-6/387184831_3144051205888666_1255435093115443770_n.webp?_nc_cat=108&ccb=1-7&_nc_sid=f537c7&_nc_ohc=wXWVeer7fBMQ7kNvwFsuCYw&_nc_oc=AdkMfonxKNvANxrkhcgeXjZiJmhjkBbKCScDWhsoswuZseFPty6gUYCjx8VGfCDKNn4&_nc_zt=14&_nc_ht=scontent-icn2-1.xx&_nc_gid=l1VCRayvBau6AlJdlnBvhQ&oh=00_AfWmojQ0p0li3k62HzFIDgnlx7FbiSUXS-qPDubXU7r9uw&oe=68A76662",
  },
  {
    text: [
      "빅데이터와 AI기술로 방대한 정형/",
      "비정형 데이터를 효율적으로 축적",
      "하고, 다각적 분석, 재해석, 재가공",
      "을 통해 콘텐츠 시장을 둘러싸고",
      "있는 모든 인적, 물적 자원들을 효",
      "율적으로 연결하고 재배치합니다.",
    ],
    image:
      "https://scontent-icn2-1.xx.fbcdn.net/v/t39.8562-6/387184831_3144051205888666_1255435093115443770_n.webp?_nc_cat=108&ccb=1-7&_nc_sid=f537c7&_nc_ohc=wXWVeer7fBMQ7kNvwFsuCYw&_nc_oc=AdkMfonxKNvANxrkhcgeXjZiJmhjkBbKCScDWhsoswuZseFPty6gUYCjx8VGfCDKNn4&_nc_zt=14&_nc_ht=scontent-icn2-1.xx&_nc_gid=l1VCRayvBau6AlJdlnBvhQ&oh=00_AfWmojQ0p0li3k62HzFIDgnlx7FbiSUXS-qPDubXU7r9uw&oe=68A76662",
  },
  {
    text: [
      "이제 애딥의 소셜",
      "네트워크 채널에",
      "서 크리에이터와",
      "인플루언서가 안",
      "정된 콘텐츠 수익",
      "을 만들어 갑니다.",
    ],
    image:
      "https://scontent-icn2-1.xx.fbcdn.net/v/t39.8562-6/387184831_3144051205888666_1255435093115443770_n.webp?_nc_cat=108&ccb=1-7&_nc_sid=f537c7&_nc_ohc=wXWVeer7fBMQ7kNvwFsuCYw&_nc_oc=AdkMfonxKNvANxrkhcgeXjZiJmhjkBbKCScDWhsoswuZseFPty6gUYCjx8VGfCDKNn4&_nc_zt=14&_nc_ht=scontent-icn2-1.xx&_nc_gid=l1VCRayvBau6AlJdlnBvhQ&oh=00_AfWmojQ0p0li3k62HzFIDgnlx7FbiSUXS-qPDubXU7r9uw&oe=68A76662",
  },
];

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
    </div>
  );
}
