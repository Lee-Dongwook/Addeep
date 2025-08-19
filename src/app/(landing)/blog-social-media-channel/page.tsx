"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Item = {
  label: string;
  href: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

type HelpItem = {
  id: string;
  label: string;
  content: React.ReactNode; // 펼쳤을 때 나오는 내용
};

const ArrowRight = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M13 5l7 7-7 7M5 12h14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

interface HelpAccordionProps {
  title?: string;
  items: HelpItem[];
  /** 여러 개 동시 열림 허용 여부 */
  type?: "single" | "multiple";
  /** 기본으로 열어둘 id들 */
  defaultOpenIds?: string[];
}

function Row({
  item,
  open,
  onToggle,
}: {
  item: HelpItem;
  open: boolean;
  onToggle: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // 내용 변경/창 크기 변화에도 높이 재계산
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const resize = () => setHeight(el.scrollHeight);
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    return () => ro.disconnect();
  }, [item.content]);

  return (
    <div className="py-1">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="
          group flex w-full items-center justify-between gap-4 py-6
          text-left text-[20px] leading-7 text-neutral-800 md:text-[22px]
          focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400
        "
      >
        <span className="whitespace-pre-wrap">{item.label}</span>
        <ArrowRight
          className={`
            h-5 w-5 shrink-0 text-neutral-900 transition-transform
            ${open ? "translate-x-0 rotate-90" : "group-hover:translate-x-1"}
          `}
        />
      </button>

      {/* 드롭다운 패널 (height transition) */}
      <div
        style={{
          maxHeight: open ? height : 0,
          transition: "max-height 320ms cubic-bezier(.2,.8,.2,1)",
        }}
        className="overflow-hidden"
      >
        <div ref={panelRef} className="pb-6 text-neutral-600">
          {item.content}
        </div>
      </div>
    </div>
  );
}

function HelpAccordion({
  title = "무엇을 도와드릴까요?",
  items,
  type = "multiple",
  defaultOpenIds = [],
}: HelpAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (type === "single") return isOpen ? [] : [id];
      return isOpen ? prev.filter((x) => x !== id) : [...prev, id];
    });
  };

  return (
    <section className="w-full px-6 md:px-10">
      <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
        {title}
      </h2>

      <div className="divide-y divide-neutral-200">
        {items.map((it) => (
          <Row
            key={it.id}
            item={it}
            open={openIds.includes(it.id)}
            onToggle={() => toggle(it.id)}
          />
        ))}
      </div>
    </section>
  );
}

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
      <HelpAccordion
        type="single" // 한 번에 하나만 열고 싶으면 'single'
        defaultOpenIds={[]} // 기본 오픈 항목 ids
        items={[
          {
            id: "q1",
            label: "Addeep에서는 무슨 일을 하나요?",
            content: (
              <p>
                소셜·미디어·콘텐츠 산업의 구성원을 연결하는 통합 플랫폼을
                만듭니다. 데이터 기반 매칭과 도구를 제공해 협업을 쉽게 합니다.
              </p>
            ),
          },
          {
            id: "q2",
            label: "Addeep의 핵심 가치는 무엇일까요?",
            content: (
              <ul className="list-disc pl-5 space-y-1">
                <li>사용자 중심</li>
                <li>데이터 기반 의사결정</li>
                <li>개방형 생태계</li>
              </ul>
            ),
          },
          {
            id: "q3",
            label: "Addeep의 Web3 Pto E는 무엇인가요?",
            content: (
              <p>
                참여(Produce-to-Earn)에 따른 보상 모델로, 창작·유통·참여
                데이터를 온체인으로 기록하고 투명하게 분배합니다.
              </p>
            ),
          },
        ]}
      />
    </div>
  );
}
