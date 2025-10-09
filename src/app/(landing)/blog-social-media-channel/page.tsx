"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  InstagramIcon,
  FacebookIcon,
  XIcon,
  YouTubeIcon,
  BlogIcon,
} from "../../../constants/blog";
import { useResponsive } from "../../../lib/useResponsive";
import { NEXT_PUBLIC_CDN_BASE } from "../../../lib/env";

gsap.registerPlugin(ScrollTrigger);

type Item = {
  label: string;
  href: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

type HelpItem = {
  id: string;
  label: string;
  content: React.ReactNode;
};

const items: Item[] = [
  { label: "Blog", href: "https://blog.naver.com/addeep", Icon: BlogIcon },
  {
    label: "Instagram",
    href: "https://www.instagram.com/addeep_/",
    Icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Addeep.2023",
    Icon: FacebookIcon,
  },
  { label: "X", href: "https://twitter.com/Addeep_", Icon: XIcon },
  { label: "YouTube", href: "https://youtube.com/@addeep_", Icon: YouTubeIcon },
];

interface HelpAccordionProps {
  title?: string;
  items: HelpItem[];
  type?: "single" | "multiple";
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
  const { isMobile } = useResponsive();
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

  if (isMobile) {
    return (
      <div>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="
          group flex w-full items-center justify-between gap-2 py-6
          text-left text-[14px] leading-7 text-neutral-800
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

  return (
    <div className="p-6">
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
  const { isMobile, isTablet } = useResponsive();

  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (type === "single") return isOpen ? [] : [id];
      return isOpen ? prev.filter((x) => x !== id) : [...prev, id];
    });
  };

  if (isMobile || isTablet) {
    return (
      <section className="w-full p-6 flex flex-col items-center justify-center">
        <h2 className="mb-6 text-2xl font-normal text-neutral-900 md:text-4xl">
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

  return (
    <section className="w-full p-24 flex flex-col items-center justify-center">
      <h2 className="mb-6 text-3xl font-normal text-neutral-900 md:text-4xl">
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
  const { isMobile, isTablet } = useResponsive();

  if (isMobile || isTablet) {
    return (
      <div className="w-full text-center">
        <div className="absolute max-h-[745px] min-h-[640px] mt-20 inset-0 bg-black bg-opacity-60 rounded-lg" />
        <div
          className="w-full h-screen p-8 rounded-lg flex flex-col items-center justify-center"
          style={{
            background: `url(${NEXT_PUBLIC_CDN_BASE}/images/ContactBanner.png)`,
            border: "1px solid #E5E7EB",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col gap-4 items-center justify-center z-10">
            <h1 className="text-2xl font-bold text-white mb-4">
              Connect with Us
            </h1>
            <SocialLinksRow />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full text-center">
      <div
        className="w-full h-screen p-4 rounded-lg flex flex-col items-center justify-center bg-opacity-10"
        style={{
          background: `url(${NEXT_PUBLIC_CDN_BASE}/images/ContactBanner.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "1px solid #E5E7EB",
        }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-24 mb-4">
          Connect with Us
        </h1>
        <SocialLinksRow />
      </div>
    </div>
  );
};

const SocialLinksRow = () => {
  const { isMobile, isTablet } = useResponsive();

  const linkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  if (isMobile || isTablet) {
    return (
      <section
        aria-label="Social Links"
        className="w-full flex-1 flex flex-col items-center justify-center"
      >
        <div>
          <ul className="flex flex-col gap-12">
            {items.map(({ label, href, Icon }) => (
              <li
                key={label}
                className="bg-transparent w-14 h-14 rounded-3xl flex flex-col items-center justify-center"
              >
                <a
                  href={href}
                  {...linkProps}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <Icon className="h-6 w-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section aria-label="Social Links" className="w-full p-16">
      <div className="mx-auto max-w-6xl rounded-3xl p-6 md:p-8">
        <ul className="flex flex-wrap gap-24 items-center justify-center">
          {items.map(({ label, href, Icon }) => (
            <li
              key={label}
              className="bg-white/15 w-32 h-32 rounded-3xl border border-white/20 flex flex-col items-center justify-center"
            >
              <a
                href={href}
                {...linkProps}
                className="flex flex-col items-center justify-center gap-2"
              >
                <div className="h-12">
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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <CoreValueHeader />
      {/* <HelpAccordion
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
            label: "Addeep의 Web3 P to E는 무엇인가요?",
            content: (
              <p>
                참여(Produce-to-Earn)에 따른 보상 모델로, 창작·유통·참여
                데이터를 온체인으로 기록하고 투명하게 분배합니다.
              </p>
            ),
          },
        ]}
      /> */}
    </div>
  );
}
