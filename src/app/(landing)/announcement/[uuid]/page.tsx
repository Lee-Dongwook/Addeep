// app/notice/[id]/page.tsx
import type { Metadata } from "next";
import React from "react";

// ── 가짜 데이터 (API 붙이면 이 부분 교체)
const MOCK = {
  id: "n1",
  title: "2024년 서비스 업데이트 및 정책 변경 안내",
  date: "2024-01-15",
  content: `
안녕하세요, 회원 여러분. 더 나은 서비스 제공을 위한 중요한 업데이트 사항을 안내드립니다.

1) 서비스 안정화
- 서버 인프라를 확장하여 피크 시간대 응답 속도를 개선했습니다.
- 데이터베이스 인덱싱 및 캐시 정책을 개편했습니다.

2) 정책 변경
- 개인정보 처리방침 중 수집 항목과 보관 기간 일부를 조정했습니다.
- 변경 내용은 공지일로부터 7일 후(2024.01.22) 적용됩니다.

항상 더 나은 경험을 위해 노력하겠습니다. 감사합니다.
`,
};

// ── 유틸
function formatDotDate(input: string) {
  const d = new Date(input);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

// ── 아이콘
function CalendarIcon({ className = "" }: { className?: string }) {
  return (
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
}

// ── 메타데이터(선택)
export const metadata: Metadata = {
  title: "공지사항 | 2024년 서비스 업데이트 및 정책 변경 안내",
};

export default async function NoticeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // 실제로는 여기서 fetch(`/api/notices/${params.id}`) 등으로 교체
  const data = MOCK; // 데모용

  return (
    <main className="mx-auto max-w-3xl px-5 py-10 md:py-14">
      {/* 카드 */}
      <article className="rounded-3xl border border-neutral-100 bg-white p-6 md:p-9 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
        {/* 제목 */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-neutral-900 leading-snug">
          {data.title}
        </h1>

        {/* 날짜 */}
        <div className="mt-4 flex items-center gap-2 text-neutral-500">
          <CalendarIcon />
          <time dateTime={data.date} className="text-sm md:text-base">
            {formatDotDate(data.date)}
          </time>
        </div>

        {/* 본문 */}
        <div className="mt-8 rounded-2xl bg-neutral-50 p-5 md:p-6 leading-7 text-neutral-700">
          {/* 간단한 마크다운 줄바꿈 처리 */}
          {data.content.split("\n").map((line, i) =>
            line.trim().length ? (
              <p key={i} className="mb-3 whitespace-pre-wrap">
                {line}
              </p>
            ) : (
              <div key={i} className="h-2" />
            )
          )}
        </div>
      </article>

      {/* 뒤로가기/리스트 링크 (옵션) */}
      <div className="mt-6">
        <a
          href="/notice"
          className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
        >
          ← 목록으로
        </a>
      </div>
    </main>
  );
}
