"use client";

import React, { useRef, useEffect, useState, type ReactNode } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../../lib/supabase";
import { NEXT_PUBLIC_CDN_BASE } from "../../../../lib/env";

type AgendaItem = {
  time: string;
  title: string;
  subTitle?: string;
  duration: string;
  speaker?: string;
  desc?: string;
};

function Timeline({ items }: { items: AgendaItem[] }) {
  return (
    <>
      <div className="mt-4 space-y-12">
        {items.map((it, idx) => (
          <div key={it.time || idx} className="flex flex-row gap-10">
            <div className="h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center">
              {it.time}
            </div>
            <div className="flex flex-col gap-4 bg-white p-6 border-l-4 border-[#BD19F1] rounded-2xl lg:w-[1000px] shadow-lg">
              <div className="font-medium">{it.title}</div>
              {it.subTitle && (
                <div className="font-medium text-sm">{it.subTitle}</div>
              )}
              {it.speaker && (
                <div className="font-medium text-sm">by {it.speaker}</div>
              )}
              <div className="font-medium text-sm">Duration: {it.duration}</div>
              {it.desc && <p className="text-sm text-gray-600">{it.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const EventDetailHeader = ({
  eventDetail,
  uuid,
}: {
  eventDetail: any;
  uuid: any;
}) => {
  return (
    <div className="w-full text-center">
      <div
        className="w-full min-h-[600px] rounded-lg flex flex-col items-center justify-center"
        style={{
          background:
            uuid === "1"
              ? `url(${NEXT_PUBLIC_CDN_BASE}/images/EventGlobalBusinessSummit.png)`
              : `url(${NEXT_PUBLIC_CDN_BASE}/images/EventParliament.png)`,
          border: "1px solid #E5E7EB",
        }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
          {eventDetail[0].title}
        </h1>
        <h3 className="text-xl font-medium text-white">
          {eventDetail[0].banner_description[0]}
        </h3>
        <h3 className="text-xl font-medium text-white">
          {eventDetail[0].banner_description[1]}
        </h3>
        <button className="w-48 h-14 rounded-full bg-gradient-to-r from-[#4C15A1] via-[#A218DE] to-[#FF17C5] mt-8 py-4 px-11">
          <span className="text-white font-medium">참가 신청하기</span>
        </button>
      </div>
    </div>
  );
};

const renderWithNewlines = (text: string) => {
  return text.split("\n").map((line, index) => (
    <p key={index} className="mb-0.5 last:mb-0">
      {line}
    </p>
  ));
};

export default function LandingPage() {
  const params = useParams();
  const uuid = params.uuid as any;

  const getEventDetailData = async () => {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", uuid);

      if (error) {
        console.error("Supabase 에러:", error);
        throw error;
      }

      return data;
    } catch (err) {
      console.error("getEventDetailData 에러:", err);
      throw err;
    }
  };

  const {
    data: eventDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["eventDetail", uuid],
    queryFn: () => getEventDetailData(),
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 30000,
  });

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-1 items-center justify-center">
        Error Occurred
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <EventDetailHeader eventDetail={eventDetail || {}} uuid={uuid} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-10">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-black">
                  {eventDetail?.[0].Hero.title[0]}
                </h1>
                <h1 className="text-2xl font-bold tracking-tight text-black">
                  {eventDetail?.[0].Hero.title[1]}
                </h1>
                <p className="mt-8 text-lg leading-relaxed text-gray-700">
                  {eventDetail?.[0].Hero.description[0]}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  {eventDetail?.[0].Hero.description[1]}
                </p>
              </div>
            </div>
            <div
              className="w-full rounded-lg flex flex-col items-center justify-center"
              style={{
                background: "transparent",
                border: "none",
              }}
            />
          </div>
          <div className="mt-12 flex flex-row items-center text-gray-600 border border-gray-200 rounded-xl p-6 gap-64">
            <div className="flex flex-col gap-2 rounded-lg bg-white px-3 py-2">
              <span className="text-xl font-bold text-[#BD19F1]">일정</span>
              <span className="text-lg font-normal text-[#4B5563]">
                {eventDetail?.[0].Hero.date}
              </span>
            </div>
            <div className="flex flex-col gap-2 rounded-lg bg-white px-3 py-2">
              <span className="text-xl font-bold text-[#BD19F1]">장소</span>
              <span className="text-lg font-normal text-[#4B5563]">
                {eventDetail?.[0].Hero.space}
              </span>
            </div>
          </div>
          <div className="mt-6 flex flex-row items-center justify-between text-gray-600 border border-gray-200 rounded-xl p-6">
            <div className="flex flex-col gap-2 rounded-lg bg-white px-3 py-2">
              <span className="text-xl font-bold text-[#BD19F1]">
                참석 대상
              </span>
              <span className="text-lg font-normal text-[#4B5563]">
                {eventDetail?.[0].Hero.participant}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Keynote / Tracks */}
      <section id="intro" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-10">
          <h2 className="text-2xl font-bold md:text-3xl text-center">
            행사 개요 및 목표
          </h2>
          <div className="mt-8 mb-8 flex flex-row items-center gap-10">
            {eventDetail?.[0].Overview.data.map((item: any, idx: number) => (
              <div
                key={idx}
                className="max-w-[600px] h-80 border border-[#F3E8FF] bg-gradient-to-r from-[#FAF5FF] to-[#FDF2F8] shadow-md rounded-lg p-8 flex flex-col gap-3 items-center"
              >
                <h4 className="text-2xl text-[#4B5563] font-poppins font-normal text-center">
                  {item.title}
                </h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker */}
      <section id="agenda" className="mx-auto px-6 py-16 md:py-20 bg-gray-50">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold md:text-4xl text-center">
            Speakers
          </h2>
          <h4 className="text-xl text-center">
            AI 인터넷의 미래를 제시하는 세계적 석학들
          </h4>
        </div>
        <div className="mt-8 mb-8 grid grid-cols-3 gap-4">
          {eventDetail?.[0].Person.data.map((item: any, idx: number) => (
            <div
              key={idx}
              className="max-w-[500px] border border-gray-200 shadow-md rounded-lg p-8 flex flex-col gap-3 items-center"
            >
              <h4>{item.speaker}</h4>
              <h4>({item.en_name})</h4>
              <h4 className="text-center">
                {renderWithNewlines(item.sub_title)}
              </h4>
              <h2>{item.title}</h2>
              <div className="flex flex-col gap-6">
                {item.desc &&
                  item.desc.map((d: any, idx: number) => (
                    <div key={idx}>{d}</div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Keynote / Tracks */}
      <section id="agenda" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-10">
          <h2 className="text-2xl font-bold md:text-3xl text-center">
            Program Schedule
          </h2>
          <div>
            <div className="rounded-2xl bg-white p-6">
              <Timeline items={eventDetail?.[0].Schedule.data || []} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="register" className="bg-gray-50">
        <div className="flex flex-col flex-1 p-16 items-center justify-center">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Ready to Shape the Future?
            </h2>
            <button className="w-48 h-14 rounded-full bg-gradient-to-r from-[#4C15A1] via-[#A218DE] to-[#FF17C5]">
              <span className="text-white font-medium">참가 신청하기</span>
            </button>
            <p className="text-gray-700">문의 : jhjeong@addeeplab.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
