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

const EventDetailHeader = ({ eventDetail }: { eventDetail: any }) => {
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

  const agendaDay1: AgendaItem[] = [
    {
      time: "09:30",
      title:
        "What is Internet of AI, and how GROQ can accelerate global AI infrastructure",
      speaker: "Oskar Mencer",
      duration: "09:30 ~ 11:00",
      desc: "",
    },
    {
      time: "11:00",
      title: "Addeep Superintelligence Augmented AI GPR R&D Center",
      speaker: "Addeep CVO Jaeyoung Yoon",
      duration: "11:00 ~ 12:00",
    },
    {
      time: "14:00",
      title: 'Book Launch "Internet of AI World Report 2030" co-authors',
      speaker: "Toufi Saliba and Youngsook",
      duration: "14:00 ~ 15:00",
      desc: "",
    },
    {
      time: "15:00",
      title:
        "Meeting with companies interested in participating in the GCC HyperCycle project",
      subTitle: "(GCC HyperCycle 프로젝트 참여 희망기업과 만남)",
      duration: "15:00 ~ 16:00",
      desc: "",
    },
  ];

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
      <EventDetailHeader eventDetail={eventDetail || {}} />

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
                background: `url(${NEXT_PUBLIC_CDN_BASE}/images/EventGlobalBusinessSummit.png)`,
                border: "1px solid #E5E7EB",
              }}
            />
          </div>
          <div className="mt-6 flex flex-row items-center text-gray-600 border border-gray-200 rounded-xl p-6 gap-64">
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
                className="max-w-[600px] h-80 border border-gray-200 shadow-md rounded-lg p-8 flex flex-col gap-3 items-center"
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
          <div className="max-w-[500px] border border-gray-200 shadow-md rounded-lg p-8 flex flex-col gap-3 items-center">
            <h4 className="text-[28px] text-[#4B5563] font-poppins font-normal text-center">
              Toufi Saliba
            </h4>
            <button className="text-white bg-[#BD19F1] max-w-72 h-8 p-4 flex flex-col items-center justify-center rounded-full">
              IEEE AI 보안 글로벌 의장
            </button>
            <h4 className="text-base text-[#4B5563] font-poppins font-normal">
              차세대 인터넷의 아키텍처를 설계한 천재적 혁신가
            </h4>
            <p>
              AI, 분산 컴퓨팅, 암호학 분야의 세계적인 석학이자, 구글, HP 등에
              여러 AI 기업을 성공적 으로 매각한 경험을 보유한 연쇄 창업가입니다.
              세계 최대 컴퓨터 과학 학회인 ACM(Association for Computing
              Machinery)의 실무자 이사회 글로벌 의장을 역임 하며 '컴퓨팅의
              노벨상'이라 불리는 튜링상 수여에 기여했고, 2016년 AI의 탈중앙화
              개념 을 최초로 제시하며 시대를 앞서 나갔습니다.
            </p>
            <p>
              그의 가장 위대한 업적은 TCP/IP 이후 50년 만의 인터넷 혁신으로
              불리는 'TODA/IP' 프 로토콜을 공동 개발한 것입니다. 이는 데이터뿐만
              아니라 '가치(Value)'를 은행과 같은 중 개자 없이 P2P(개인 간)로
              직접 전송할 수 있는 혁신으로, 수일이 걸리는 국제 송금 거래 를
              0.2초 만에, 거의 제로에 가까운 비용(약 0.01원)으로 처리하며 에너지
              효율을 99% 절 감하는 경이로운 성능을 구현합니다.
            </p>
            <p>
              현재 세계 최대 기술 표준 기구인 IEEE의 AI 보안 국제 프로토콜
              글로벌 의장으로서, 그는 "AI 경쟁은 수학적으로 확실하게 AI 전쟁으로
              이어진다"고 경고하며, 인류의 생존을 위해 '경쟁하는 AI'가 아닌
              '협력하는 AI 네트워크'라는 새로운 패러다임을 구축하는 데 헌신하 고
              있습니다.
            </p>
          </div>
          <div className="max-w-[500px] border border-gray-200 shadow-md rounded-lg p-8 flex flex-col gap-3 items-center">
            <h4 className="text-[28px] text-[#4B5563] font-poppins font-normal text-center">
              Oskar Mencer
            </h4>
            <h5 className="text-lg text-[#4B5563] font-poppins font-normal text-center">
              HyperCycle AI CEO
            </h5>
            <h5 className="text-lg text-[#4B5563] font-poppins font-normal text-center">
              GROQ 자회사 대표
            </h5>
            <button className="text-white bg-[#BD19F1] max-w-72 h-8 p-4 flex flex-col items-center justify-center rounded-full">
              AI 추론 속도 혁신가
            </button>
            <h4 className="text-base text-[#4B5563] font-poppins font-normal">
              AI 추론 속도의 한계를 재정의한 컴퓨팅의 거장
            </h4>
            <p>
              오스트리아 빈에서 태어나 이스라엘 공과대학(Technion)에서 컴퓨터
              공학을 전공하고, 세계적인 명성의 스탠포드 대학교에서 박사 학위를
              취득했습니다. 이후 현대 기술의 산실 인 벨 연구소(Bell Labs)에서
              연구원으로 재직하며 기술적 깊이를 더했고, 2003년 LPU(Language
              Processing Unit) 기반 슈퍼컴퓨팅을 상용화하기 위해 Maxeler
              Technologies를 설립했습니다.
            </p>
            <p>
              그의 혁신적인 데이터플로우(Dataflow) 기술은 금융, 석유 및 가스,
              국방 등 세계 최고 수 준의 연산 능력을 요구하는 산업 전반에
              성공적으로 도입되었으며, 150개 이상의 대학 및 연구 프로젝트의 핵심
              솔루션으로 채택되었습니다.
            </p>
            <p>
              2022년, 그의 회사는 "우스꽝스러울 정도로 빠른 LLM
              추론(Ridiculously fast LLM inference)"으로 실리콘밸리를 뒤흔든 AI
              칩 제조사 GROQ에 인수되었습니다. GROQ은 최근 사우디아라비아 아람코
              디지털로부터 15억 달러(약 2조 원)의 투자를 유치하며 세 계 최대
              규모의 AI 인퍼런스 클러스터를 구축하고 있으며, 오스카 멘서는 현재
              GROQ의 자회사 대표이자 HyperCycle의 'AI 인터넷 검색 엔진' 프로젝트
              CEO를 겸임하며, GROQ 의 압도적인 하드웨어 기술력과 HyperCycle의
              탈중앙화 비전을 융합하는 핵심 설계자 로서 AI 인터넷의 상용화를
              이끌고 있습니다.
            </p>
          </div>
          <div className="max-w-[500px] border border-gray-200 shadow-md rounded-lg p-8 flex flex-col gap-3 items-center">
            <h4 className="text-[28px] text-[#4B5563] font-poppins font-normal text-center">
              윤재영 (Kevin Jaeyoung Yoon)
            </h4>
            <h5 className="text-lg text-[#4B5563] font-poppins font-normal text-center">
              (주)애딥 CVO
            </h5>
            <button className="text-white bg-[#BD19F1] max-w-72 h-8 p-4 flex flex-col items-center justify-center rounded-full">
              HyperCycle 프로젝트 파트너
            </button>
            <h4 className="text-base text-[#4B5563] font-poppins font-normal">
              인간 중심의 증강 AI 생태계를 설계하는 비저너리 (Visionary)
            </h4>
            <p>
              윤재영 의장은 소프트웨어 엔지니어로서의 탄탄한 기술적 기반 위에
              경영학적 통찰력을 더해, AI, 플랫폼, 클라우드를 아우르는 ICT 산업의
              혁신을 이끌어 온 비저너리(Visionary) 경영 리더입니다. 그의 25년
              여정은 '기술은 인간의 가치를 증강시키고 연결하기 위해 존재해야
              한다'는 확고한 신념 아래, 더 공정하고 지능적인 인간 중심의 디지털
              생태계를 구축하는 데 바쳐졌습니다.
            </p>
            <p>
              25년 경력의 소프트웨어 엔지니어로서 네트워크, 정보보안, 클라우드,
              플랫폼을 아우르는 기술적 깊이와 경영학적 통찰력을 겸비한 보기 드문
              기술 경영 리더입니다. 그는 CPND기업을 설립하여 약 4,700억 원의
              기업 가치를 창출하고, 한국, 미국, 중국, 싱가포르 법인을 9년간 직접
              경영하며 디지털 콘텐츠 플랫폼의 글로벌 산업생태계를 이끌었습니다.
              현재 Addeep Inc.의 의장이자 최고 비전러리 책임자(CVO)로서, 그는
              지난 경험과 철학을 집대성하여 AI와 Web 3.0 시대의 새로운 미래를
              열어가고 있습니다. 그는 사용자의 명시적 명령 없이 잠재적 의도를
              먼저 파악하고 최적의 결과물을 제안하는 비대화형 증강 AI 'GPR-1'과
              그 기반이 되는 LMM(Large Mind-mining Model)을 창시했습니다. 디지털
              콘텐츠 산업분야의 혁신을 주도하는 콘텐츠 자동생성 AI의 새로운
              가치를 창출하는 'ACT' 콘텐츠 자동 융합 AI 기술 콘텐츠 서비스
              참여자 모두에게 정당한 보상이 돌아가는 S2E(Social 2 Earn) 경제
              프로토콜의 기틀을 만들어가고 있습니다.
            </p>
            <p>
              그의 비전은 "기술이 인간을 대체하는 것이 아니라, 인간의 가치를
              증강시키고 연결하기 위해 존재해야 한다"는 철학 아래, 개인화
              콘텐츠의 가치를 자동으로 융합(ACT)하여 공정한 보상이 돌아가는
              새로운 경제 생태계를 구축해 가고 있습니다. 이번 서밋에서 윤재영
              CVO와 함께 기술이 어떻게 인간의 가치를 증강시키고, 우리 모두를
              연결하는 새로운 미래를 만들어갈 수 있는지에 대한 깊은 통찰을 얻어
              가시길 바랍니다. 또한, 이번 GCC 펀드 프로젝트의 핵심 파트너로서
              대한민국의 기술 허브 구축을 주도하며, AI 시대의 새로운 미래를
              열어가고 있습니다.
            </p>
          </div>
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
