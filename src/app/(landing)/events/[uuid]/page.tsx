"use client";

import React, { useRef, useEffect, useState, type ReactNode } from "react";
import { NEXT_PUBLIC_CDN_BASE } from "../../../../lib/env";

type Stat = { label: string; value: string; hint?: string };
type AgendaItem = { time: string; title: string; desc?: string };
type Track = { title: string; desc: string };

type FAQ = { q: string; a: string };

function Timeline({ items }: { items: AgendaItem[] }) {
  return (
    <ol className="mt-4 space-y-5">
      {items.map((it) => (
        <li key={it.time} className="relative pl-6">
          <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-indigo-600" />
          <div className="text-sm text-gray-500">{it.time}</div>
          <div className="font-medium">{it.title}</div>
          {it.desc && <p className="text-sm text-gray-600">{it.desc}</p>}
        </li>
      ))}
    </ol>
  );
}

const EventDetailHeader = () => {
  return (
    <div className="w-full text-center">
      <div
        className="w-full min-h-[600px] rounded-lg flex flex-col items-center justify-center"
        style={{
          background: `url(${NEXT_PUBLIC_CDN_BASE}/images/EventGlobalBusinessSummit.png)`,
          border: "1px solid #E5E7EB",
        }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
          The Genesis of AI Internet: 글로벌 비즈니스 서밋
        </h1>
        <h3 className="text-xl font-medium text-white">
          본 서밋은 단순한 기술 컨퍼런스를 넘어, GCC 펀드가 주도하는 글로벌 AI
          인프라 구축 프로젝트의 아시아 허브를
        </h3>
        <h3 className="text-xl font-medium text-white">
          대한민국에 설립하기 위한 전략적 파트너십을 구축하는 역사적 첫
          무대입니다.
        </h3>
        <button className="w-48 h-14 rounded-full bg-gradient-to-r from-[#4C15A1] via-[#A218DE] to-[#FF17C5] mt-8 py-4 px-11">
          <span className="text-white font-medium">참가 신청하기</span>
        </button>
      </div>
    </div>
  );
};

export default function LandingPage() {
  const date = "2025.10.14 (화)";
  const venue = "서울 · (장소 추후 공개)";

  const stats: Stat[] = [
    { label: "세션", value: "100+", hint: "핵심 기술/산업 트렌드" },
    { label: "파트너 발표", value: "60+", hint: "클라우드 도입 인사이트" },
    { label: "핸즈온/데모", value: "30+", hint: "현장 체험 공간" },
    { label: "고객 사례", value: "70+", hint: "최신 적용 사례" },
  ];

  const agendaDay1: AgendaItem[] = [
    { time: "08:30 – 09:30", title: "등록/웰컴" },
    {
      time: "09:30 – 10:40",
      title: "기조연설",
      desc: "Internet of AI 비전, 글로벌 인프라 로드맵",
    },
    {
      time: "11:10 – 17:10",
      title: "브레이크아웃 트랙",
      desc: "산업/코어 서비스 병렬 세션",
    },
  ];
  const agendaDay2: AgendaItem[] = [
    { time: "08:30 – 09:30", title: "등록/네트워킹" },
    {
      time: "09:30 – 10:40",
      title: "기조연설",
      desc: "국가 AI 주권/표준 전략",
    },
    {
      time: "11:10 – 16:30",
      title: "브레이크아웃/정책 세션",
      desc: "정책/생태계/투자",
    },
  ];

  const tracks: Track[] = [
    {
      title: "Industry",
      desc: "제조/반도체/통신/금융 등 산업별 성공사례/전략",
    },
    { title: "GenAI & ML", desc: "모델·에이전트·프롬프트 엔지니어링·평가" },
    {
      title: "Developer Productivity",
      desc: "DevEx, 플랫폼 엔지니어링, 품질/보안",
    },
    {
      title: "Data & Analytics",
      desc: "데이터 파이프라인·웨어하우스·BI·거버넌스",
    },
    { title: "Cloud Infra", desc: "컴퓨트/네트워킹/옵저버빌리티/코스트" },
  ];

  const faqs: FAQ[] = [
    {
      q: "행사 등록은 어떻게 하나요?",
      a: "상단/하단의 등록 버튼을 통해 기본 정보를 제출하면 됩니다. 좌석이 제한될 수 있어 조기 등록을 권장합니다.",
    },
    {
      q: "발표 자료는 제공되나요?",
      a: "행사 종료 후 발표자 승인 범위 내에서 하이라이트/요약본을 순차 공개합니다.",
    },
    {
      q: "현장 데모는 어떤 준비가 필요한가요?",
      a: "일부 핸즈온 세션은 개인 노트북 지참이 필요합니다. 세션별 안내문을 확인하세요.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <EventDetailHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-black">
                GCC 펀드 & HyperCycle
              </h1>
              <h1 className="text-2xl font-bold tracking-tight text-black">
                글로벌 인터넷 AI 서울 Summit
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-gray-700">
                본 서밋은 'Internet of AI'라는 혁명적 패러다임의 실체와, 이를
                통해 열릴 무한한 비즈니스 기회를 대한민국 최고의 기술 리더들에게
                공개하는 역사적인 첫 무대입니다.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                행사의 핵심 목표는 단순한 기술 소개를 넘어, GCC 펀드가 주도하는
                글로벌 AI 인프라 구축 프로젝트의 아시아 허브(Hub)를 대한민국에
                설립하기 위한 최상의 기술 및 제조 파트너십을 구축하는데
                있습니다.
              </p>
            </div>
            <div className="mt-6 flex flex-row items-center justify-between text-gray-600 border border-gray-200 rounded-xl p-2">
              <div className="flex flex-col gap-2 rounded-lg bg-white px-3 py-2">
                {/* <CalendarIcon /> */}
                <span className="text-xl font-bold text-[#BD19F1]">{date}</span>
                <span className="text-xl font-normal text-[#4B5563]">
                  09:30 - 16:00
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2">
                {/* <PinIcon /> */}
                <span className="text-lg font-bold">{venue}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
          <h2 className="sr-only">행사 하이라이트</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                <div className="text-3xl font-extrabold">{s.value}</div>
                <div className="mt-1 text-sm font-medium text-gray-700">
                  {s.label}
                </div>
                {s.hint && (
                  <p className="mt-2 text-sm text-gray-500">{s.hint}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keynote / Tracks */}
      <section id="agenda" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold md:text-3xl">기조연설 & 트랙</h2>
            <p className="mt-3 text-gray-700">
              글로벌 표준을 향한 로드맵과 산업·핵심기술 트랙으로 구성된 병렬
              세션.
            </p>
            <ul className="mt-6 space-y-4">
              {tracks.map((t) => (
                <li
                  key={t.title}
                  className="rounded-xl border border-gray-200 p-4"
                >
                  <div className="font-semibold">{t.title}</div>
                  <p className="mt-1 text-sm text-gray-600">{t.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-lg font-semibold">Day 1 · 10/14 (Tue)</h3>
              <Timeline items={agendaDay1} />
              <div className="mt-6 h-px w-full bg-gray-100" />
              <h3 className="mt-6 text-lg font-semibold">
                Day 2 · 10/15 (Wed)
              </h3>
              <Timeline items={agendaDay2} />
            </div>
          </div>
        </div>
      </section>

      {/* Keynote / Tracks */}
      <section id="agenda" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl font-bold md:text-4xl text-center">
            Summit Overview
          </h2>
        </div>
        <div className="mt-8 mb-8 grid grid-cols-3 gap-4">
          <div className="max-w-[500px] border border-gray-200 shadow-md rounded-lg p-8 flex flex-col gap-3">
            <h4 className="text-[28px] text-[#4B5563] font-poppins font-normal">
              Global Investment Partnership
            </h4>
            <p className="text-lg text-[#4B5563] font-poppins font-normal">
              중동 10개국이 조성한 GCC 펀드가 석유 중심 경제에서 AI 기반 경제로
              전환하며, 대한민국을 최적의 기술 파트너로 선정. 아시아 허브 설립을
              통한 글로벌 AI 인프라 구축
            </p>
          </div>
          <div className="max-w-[500px] border border-gray-200 shadow-md rounded-lg p-8 flex flex-col gap-3">
            <h4 className="text-[28px] text-[#4B5563] font-poppins font-normal">
              Internet Revolution
            </h4>
            <p className="text-lg text-[#4B5563] font-poppins font-normal">
              TCP/IP 이후 50년 만의 혁신 TODA/IP 프로토콜. 0.2초 국제 송금, 99%
              에너지 절감으로 데이터가 아닌 '가치' 전송이 가능한 새로운 인터넷
              시대
            </p>
          </div>
          <div className="max-w-[500px] border border-gray-200 shadow-md rounded-lg p-8 flex flex-col gap-3">
            <h4 className="text-[28px] text-[#4B5563] font-poppins font-normal">
              Fair Digital Ecosystem
            </h4>
            <p className="text-lg text-[#4B5563] font-poppins font-normal">
              애딥의 GPR-1 비화대형 증강 AI와 ACT 콘텐츠 자동 융합 기술로
              창작자와 사용자 모두에게 공정한 보상이 돌아가는 AUCE 경제 생태계
            </p>
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
