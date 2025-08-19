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

type NoticeItem = {
  id: string;
  title: string;
  summary: string;
  date: string; // "2024-01-08" 또는 Date ISO
  href?: string; // 상세 페이지 링크 (옵션)
};

function formatKoreanDate(input: string) {
  // 출력: 2024.01.08
  const d = new Date(input);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const da = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${da}`;
}

const CalendarIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-4 w-4 ${className}`}
    aria-hidden="true"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="17"
      rx="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M8 2v4M16 2v4M3 9h18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

interface NoticeListProps {
  items: NoticeItem[];
  title?: string;
}

function NoticeList({ items, title = "" }: NoticeListProps) {
  return (
    <section className="w-full px-6 md:px-10">
      {title ? (
        <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
          {title}
        </h2>
      ) : null}

      <ul className="space-y-8">
        {items.map((it) => {
          const Card = it.href ? "a" : "div";
          const props = it.href ? { href: it.href } : {};
          return (
            <li key={it.id}>
              <Card
                {...props}
                className="
                  block rounded-3xl bg-white
                  border border-neutral-100 shadow-[0_1px_0_rgba(0,0,0,0.02)]
                  transition
                  hover:shadow-md hover:-translate-y-0.5
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300
                "
              >
                <div className="p-8">
                  <h3 className="text-xl font-extrabold text-neutral-900">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-neutral-500">{it.summary}</p>
                  <div className="mt-6 flex items-center gap-2 text-neutral-500">
                    <CalendarIcon />
                    <time dateTime={it.date} className="text-sm">
                      {formatKoreanDate(it.date)}
                    </time>
                  </div>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
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

const AnnouncementHeader = () => {
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
          Announcement
        </h1>
      </div>
    </div>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementHeader />
      <NoticeList
        title="공지사항"
        items={[
          {
            id: "n1",
            title: "개인정보 처리방침 변경 안내",
            summary: "개인정보 처리방침이 일부 변경되었습니다.",
            date: "2024-01-08",
            href: "/notice/n1",
          },
          {
            id: "n2",
            title: "개인정보 처리방침 변경 안내",
            summary: "개인정보 처리방침이 일부 변경되었습니다.",
            date: "2024-01-08",
            href: "/notice/n2",
          },
          {
            id: "n3",
            title: "개인정보 처리방침 변경 안내",
            summary: "개인정보 처리방침이 일부 변경되었습니다.",
            date: "2024-01-08",
            href: "/notice/n3",
          },
        ]}
      />
    </div>
  );
}
