"use client";
import React, { useState } from "react";
import Link from "next/link";

interface HelpLink {
  id: string;
  text: string;
  href: string;
}

const helpLinks: HelpLink[] = [
  {
    id: "1",
    text: "Addeep에서는 무슨일은 하나요?",
    href: "/addeep-is/summary",
  },
  {
    id: "2",
    text: "Addeep의 핵심 가치는 무엇일까",
    href: "/about-us/core-value",
  },
  {
    id: "3",
    text: "Addeep의 SNS 채널은",
    href: "/blog-social-media-channel",
  },
  {
    id: "4",
    text: "Addeep의 Web 3 P to E",
    href: "/addeep-is/platform-to-earn",
  },
  {
    id: "5",
    text: "Addeep 비즈니스 키워드",
    href: "/addeep-is/digital-platform-innovation",
  },
];

export default function HelpCustomerServicePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 검색 로직 구현
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* 메인 헤딩 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            어떻게 도와드릴까요?
          </h1>

          {/* 검색바 */}
          <form onSubmit={handleSearch} className="relative max-w-lg mx-auto">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="도움이 필요한 내용을 검색해보세요"
                className="w-full pl-12 pr-4 py-4 border-2 border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-gray-900 placeholder-gray-500"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors duration-200 font-medium"
            >
              검색하기
            </button>
          </form>
        </div>

        {/* 새로운 기능 섹션 */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            새로운 기능
          </h2>

          <div className="space-y-4">
            {helpLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="block w-full text-left p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
              >
                <span className="text-blue-600 hover:text-blue-700 font-medium">
                  {link.text}
                </span>
                <div className="mt-1">
                  <span className="text-red-400 underline decoration-wavy decoration-red-400">
                    Addeep
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 추가 도움말 섹션 */}
        <div className="mt-16 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            더 많은 도움이 필요하신가요?
          </h3>
          <p className="text-gray-600 mb-4">
            위의 링크에서 원하는 정보를 찾지 못하셨다면, 검색바를 사용해보세요.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              고객 지원
            </span>
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              FAQ
            </span>
            <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              문의하기
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
