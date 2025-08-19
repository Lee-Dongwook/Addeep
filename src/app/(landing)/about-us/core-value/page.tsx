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
      "우리의 핵심 가치는",
      "1. 올바른 인재제일",
      "2. 바람직한 최고지향",
      "3. 도전.혁신적인 변화선도",
      "4. 지혜로운 상생추구",
      "5. 창의적인 정도경영",
    ],
    image:
      "https://scontent-icn2-1.xx.fbcdn.net/v/t39.8562-6/387184831_3144051205888666_1255435093115443770_n.webp?_nc_cat=108&ccb=1-7&_nc_sid=f537c7&_nc_ohc=wXWVeer7fBMQ7kNvwFsuCYw&_nc_oc=AdkMfonxKNvANxrkhcgeXjZiJmhjkBbKCScDWhsoswuZseFPty6gUYCjx8VGfCDKNn4&_nc_zt=14&_nc_ht=scontent-icn2-1.xx&_nc_gid=l1VCRayvBau6AlJdlnBvhQ&oh=00_AfWmojQ0p0li3k62HzFIDgnlx7FbiSUXS-qPDubXU7r9uw&oe=68A76662",
  },
  {
    text: [
      "그리고 사람과",
      "사람사이",
      "관계를...,",
      "세상",
      "어디에서나",
      "만족할 수",
      "있도록...,",
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
