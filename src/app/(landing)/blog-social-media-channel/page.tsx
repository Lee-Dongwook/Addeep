"use client";
import Image from "next/image";
import React, { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Item = {
  label: string;
  href: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <defs>
      <linearGradient id="ig" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f58529" />
        <stop offset="50%" stopColor="#dd2a7b" />
        <stop offset="100%" stopColor="#515bd4" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig)" />
    <rect
      x="6.3"
      y="6.3"
      width="11.4"
      height="11.4"
      rx="3.2"
      fill="none"
      stroke="white"
      strokeWidth="1.8"
    />
    <circle cx="17.5" cy="6.7" r="1.3" fill="white" />
    <circle
      cx="12"
      cy="12"
      r="3.1"
      fill="none"
      stroke="white"
      strokeWidth="1.8"
    />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#1877F2" />
    <path
      d="M13.5 10.5h2V8h-2c-1.7 0-3 1.3-3 3v2.2H8.5V16H10.5v4h2.8v-4h2l.4-2.8h-2.4v-1c0-.6.4-1.2 1.2-1.2Z"
      fill="#fff"
    />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#000" />
    <path
      d="M16.9 6.5h-2.1l-2.8 3.6-2.7-3.6H7.1l3.7 4.9-3.9 5.1h2.1l3-4 3 4h2.2l-4-5.3 3.7-4.7Z"
      fill="#fff"
    />
  </svg>
);

const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="5" fill="#FF0000" />
    <path d="M10 9.5v5l4.5-2.5L10 9.5Z" fill="#fff" />
  </svg>
);

const BlogIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#03C75A" />
    <rect x="6" y="6" width="12" height="12" rx="3" fill="#fff" />
    <path
      d="M9 15.5V8.5h3.5c1.6 0 2.5.9 2.5 2.2 0 1-.5 1.6-1.3 1.9l1.6 2.9h-2.1l-1.4-2.6h-0.8v2.6H9Zm2.9-3.9c.7 0 1.1-.3 1.1-.9s-.4-.9-1.1-.9H11v1.8h.9Z"
      fill="#03C75A"
    />
  </svg>
);

const items: Item[] = [
  { label: "Blog", href: "#", Icon: BlogIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "X", href: "#", Icon: XIcon },
  { label: "YouTube", href: "#", Icon: YouTubeIcon },
];

// Header Component
const CoreValueHeader = () => {
  return (
    <div className="w-full p-4 text-center">
      <div
        className="w-full h-full p-32 rounded-lg flex flex-col items-center justify-center"
        style={{
          background:
            "linear-gradient(90deg, #833AB4 0%, #E1306C 50%, #F56040 100%)",
          border: "1px solid #E5E7EB",
        }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Connect with Us
        </h1>
        <SocialLinksRow />
      </div>
    </div>
  );
};

const SocialLinksRow = () => {
  return (
    <section aria-label="Social Links" className="w-full p-32">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-fuchsia-600 via-rose-500 to-orange-400 p-6 md:p-8">
        <ul className="flex flex-wrap gap-24 items-center justify-center">
          {items.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                className="group flex h-36 w-full flex-col items-center justify-center rounded-3xl"
              >
                <div
                  className="
                    mb-3 rounded-2xl bg-white p-2 shadow ring-1 ring-black/5
                    transition group-hover:scale-105
                  "
                >
                  <Icon className="h-10 w-10" />
                </div>
                <span className="text-base font-semibold text-white drop-shadow-sm">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
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
      <CoreValueHeader />
    </div>
  );
}
