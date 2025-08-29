"use client";

import React, { type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useResponsive } from "../../../lib/useResponsive";

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
        {items.length === 0 && <h4>공지사항이 존재하지 않습니다.</h4>}
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

const AnnouncementHeader = () => {
  return (
    <div className="w-full p-2 text-center">
      <div
        className="w-full p-24 rounded-lg flex flex-col items-center justify-center"
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
  const { isMobile, isTablet } = useResponsive();

  const NoticeListSectionClassname =
    isMobile || isTablet
      ? "flex flex-col items-center justify-center flex-1"
      : "flex flex-col items-center justify-center flex-1 w-3/4 p-24";

  return (
    <div className="flex flex-col items-center text-center min-h-screen bg-white p-2">
      <AnnouncementHeader />
      <div className={NoticeListSectionClassname}>
        <NoticeList
          title="공지사항"
          items={
            [
              // {
              //   id: "n1",
              //   title: "테스트 공지사항",
              //   summary: "테스트 공지사항입니다.",
              //   date: "2024-01-08",
              //   href: "/announcement/n1",
              // },
              // {
              //   id: "n2",
              //   title: "테스트 공지사항",
              //   summary: "테스트 공지사항입니다.",
              //   date: "2024-01-08",
              //   href: "/announcement/n2",
              // },
              // {
              //   id: "n3",
              //   title: "테스트 공지사항",
              //   summary: "테스트 공지사항입니다.",
              //   date: "2024-01-08",
              //   href: "/announcement/n3",
              // },
            ]
          }
        />
      </div>
    </div>
  );
}
