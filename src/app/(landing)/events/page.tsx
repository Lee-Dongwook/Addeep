"use client";

import React, { useRef, useEffect, useState, type ReactNode } from "react";

type Stat = { label: string; value: string; hint?: string };
type AgendaItem = { time: string; title: string; desc?: string };
type Track = { title: string; desc: string };
type Workshop = {
  day: string;
  room: string;
  slots: { time: string; title: string }[];
};
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

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className="opacity-80"
      aria-hidden
    >
      <path
        d="M7 2v2M17 2v2M4 7h16M5 12h14M5 16h14M5 20h14"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className="opacity-80"
      aria-hidden
    >
      <path
        d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export default function LandingPage() {
  const date = "2025.10.14 (Tue) – 10.15 (Wed)";
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

  const workshops: Workshop[] = [
    {
      day: "10/14 (Tue) · 컨퍼런스룸 402",
      room: "402",
      slots: [
        {
          time: "11:10 – 14:10",
          title: "노코드/서버리스로 GenAI 앱 빠르게 만들기",
        },
        {
          time: "15:00 – 18:00",
          title: "통합 ML 플랫폼으로 엔드투엔드 파이프라인 구축",
        },
      ],
    },
    {
      day: "10/15 (Wed) · 컨퍼런스룸 402",
      room: "402",
      slots: [
        {
          time: "11:10 – 14:10",
          title: "자연어 기반 BI 분석/예측 워크플로우",
        },
        {
          time: "15:00 – 18:00",
          title: "멀티 에이전트로 복잡한 업무 시나리오 자동화",
        },
      ],
    },
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
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50 via-indigo-50 to-white"
        />
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-xs font-medium text-indigo-700 backdrop-blur">
                <span>GCC Fund × HyperCycle</span>
                <span className="h-1 w-1 rounded-full bg-indigo-300" />
                <span>Seoul Summit 2025</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                글로벌 인터넷 AI 서울 Summit
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Internet of AI 비전과 대한민국의 역할을 한자리에서.
                기술·정책·비즈니스가 만나는 전략 서밋.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-gray-200">
                  <CalendarIcon />
                  <span>{date}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-gray-200">
                  <PinIcon />
                  <span>{venue}</span>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white shadow-md transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  href="#register"
                >
                  지금 등록하기
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-200 shadow-sm transition hover:bg-gray-50"
                  href="#agenda"
                >
                  아젠다 살펴보기
                </a>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                * 페이지 구성은 AWS Summit Seoul의 공개 레이아웃 패턴을
                참고했습니다. (문구/카피는 새로 작성)
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-gray-200">
                <img
                  alt="Summit hero"
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1920&auto=format&fit=crop"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover"
                />
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

      {/* Workshops */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                워크숍 & 라이트닝 토크
              </h2>
              <p className="mt-3 text-gray-700">
                현장 실습과 짧은 인사이트 세션으로 실무 감각 업그레이드.
              </p>
            </div>
            <a
              href="#register"
              className="hidden rounded-xl bg-gray-900 px-4 py-2 text-sm text-white md:inline-flex"
            >
              워크숍 좌석 확인
            </a>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {workshops.map((w) => (
              <div
                key={w.day}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                <div className="text-sm font-medium text-indigo-700">
                  {w.day}
                </div>
                <ul className="mt-4 space-y-3">
                  {w.slots.map((s) => (
                    <li
                      key={s.time}
                      className="rounded-lg border border-gray-200 p-4"
                    >
                      <div className="text-sm text-gray-500">{s.time}</div>
                      <div className="font-medium">{s.title}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download / Resources */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 p-8 text-white md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">세션 한눈에 보기</h2>
            <p className="mt-2 text-white/90">
              전체 아젠다/세션 레벨/트랙을 PDF로 정리해 사전 계획을 세워보세요.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700"
              >
                PDF 다운로드
              </a>
              <a
                href="#faq"
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30"
              >
                FAQ 보기
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/30">
              <img
                alt="Agenda preview"
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600&auto=format&fit=crop"
                width={1200}
                height={750}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-bold md:text-3xl">자주 묻는 질문</h2>
          <dl className="mt-6 space-y-6">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200"
              >
                <dt className="font-medium">{f.q}</dt>
                <dd className="mt-2 text-sm text-gray-600">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section id="register" className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold md:text-3xl">
                등록하고 최신 정보를 받아보세요
              </h2>
              <p className="mt-2 text-gray-700">
                좌석/세션 공지, 스피커 업데이트, 워크숍 가이드 등 안내를
                이메일로 드립니다.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl bg-gray-50 p-4 ring-1 ring-gray-200 md:p-6"
            >
              <label className="block text-sm font-medium text-gray-700">
                이메일
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-indigo-600 focus:ring-2"
                />
              </label>
              <button
                type="submit"
                className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
              >
                등록하기
              </button>
              <p className="mt-2 text-xs text-gray-500">
                등록 시 행사 소식 수신에 동의하게 되며, 언제든지 해지할 수
                있습니다.
              </p>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 py-10 text-gray-300">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm">
              © {new Date().getFullYear()} GCC Fund · HyperCycle. All rights
              reserved.
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a className="hover:text-white" href="#">
                개인정보 처리방침
              </a>
              <a className="hover:text-white" href="#">
                이용 약관
              </a>
              <a className="hover:text-white" href="#faq">
                도움말
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
