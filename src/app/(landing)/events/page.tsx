"use client";

import React, { type ReactNode, useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EventSpeakerSlider from "../../../components/EventSpeakerSlider";
import { useResponsive } from "../../../lib/useResponsive";
import { supabase } from "../../../lib/supabase";
import { NEXT_PUBLIC_CDN_BASE } from "../../../lib/env";

gsap.registerPlugin(ScrollTrigger);

type NoticeItem = {
  id: string;
  title: string;
  description: string;
  created_at: string; // "2024-01-08" 또는 Date ISO
  href?: string; // 상세 페이지 링크 (옵션)
  day?: string;
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
  const router = useRouter();
  const { isMobile, isTablet } = useResponsive();
  const handleMoveToEventDetail = (it: NoticeItem) => {
    router.push(`/events/${it.id}`);
  };

  if (isMobile || isTablet) {
    return (
      <section className="w-full flex flex-col items-center justify-center mb-8">
        {title ? (
          <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
            {title}
          </h2>
        ) : null}
        <ul className="space-y-8 p-4">
          {items.length === 0 && <h4>이벤트가 존재하지 않습니다.</h4>}
          {items.map((it) => {
            const Card = it.href ? "a" : "div";
            const props = it.href ? { href: it.href } : {};
            return (
              <li key={it.id}>
                <Card
                  {...props}
                  className="rounded-3xl bg-white border border-neutral-100 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition
                  hover:shadow-md hover:-translate-y-0.5
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300
                  cursor-pointer
                  min-h-[400px]
                "
                  onClick={() => handleMoveToEventDetail(it)}
                >
                  <div className="flex flex-col">
                    <EventSpeakerSlider
                      onClick={(e) => e.stopPropagation()}
                      uuid={it.id as unknown as number}
                    />
                    <div className="p-8">
                      <h3 className="text-xl font-extrabold text-neutral-900">
                        {it.title}
                      </h3>
                      <p className="mt-2 text-neutral-500">{it.description}</p>
                      <div className="mt-6 flex items-center gap-2 text-neutral-500">
                        <CalendarIcon />
                        <time dateTime={it.created_at} className="text-sm">
                          {formatKoreanDate(it.created_at)} {it.day}
                        </time>
                      </div>
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

  return (
    <section className="w-full">
      {title ? (
        <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
          {title}
        </h2>
      ) : null}

      <ul className="space-y-8">
        {items.length === 0 && <h4>이벤트가 존재하지 않습니다.</h4>}
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
                  cursor-pointer
                  min-h-[400px]
                "
                onClick={() => handleMoveToEventDetail(it)}
              >
                <div className="flex flex-row">
                  <EventSpeakerSlider
                    onClick={(e) => e.stopPropagation()}
                    uuid={it.id as unknown as number}
                  />
                  <div className="p-8">
                    <h3 className="text-xl font-extrabold text-neutral-900">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-neutral-500">{it.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-neutral-500">
                      <CalendarIcon />
                      <time dateTime={it.created_at} className="text-sm">
                        {formatKoreanDate(it.created_at)} {it.day}
                      </time>
                    </div>
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

function EventContent() {
  const { isMobile, isTablet } = useResponsive();
  const searchParams = useSearchParams();

  const [pagination, setPagination] = useState({
    pageIndex: Number(searchParams.get("page") || 0),
    pageSize: Number(searchParams.get("size") || 10),
  });

  const getEventData = async () => {
    try {
      const { data, count, error } = await supabase
        .from("events")
        .select("*", { count: "exact" })
        .order("id")
        .range(
          pagination.pageIndex * 10,
          pagination.pageIndex * 10 + (pagination.pageSize - 1)
        );

      if (error) {
        console.error("Supabase 에러:", error);
        throw error;
      }

      return { data, count };
    } catch (err) {
      console.error("getEventData 에러:", err);
      throw err;
    }
  };

  const {
    data: eventList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["event", pagination.pageIndex, pagination.pageSize],
    queryFn: () => getEventData(),
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 30000,
  });

  const NoticeListSectionClassname =
    isMobile || isTablet
      ? "flex flex-col items-center justify-center flex-1 p-2"
      : "flex flex-col items-center justify-center flex-1 w-3/4 p-24";

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center flex-1">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isMobile || isTablet) {
    return (
      <div className="flex flex-col items-center min-h-screen bg-white">
        <div className={NoticeListSectionClassname}>
          <NoticeList title="" items={eventList?.data || []} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <div className={NoticeListSectionClassname}>
        <NoticeList title="" items={eventList?.data || []} />
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EventContent />
    </Suspense>
  );
}
