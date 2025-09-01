"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function GPRPage() {
  const [activeSection, setActiveSection] = useState("hero");
  const [language, setLanguage] = useState("ko");

  const content = {
    ko: {
      hero: {
        name: "AI의 미래: 예측하고, 생성하고, 증강하다",
        description:
          "Addeep GPR-1은 사용자의 잠재 의도를 미리 파악하여 최적의 경험을 자동으로 생성하는 \'비 대화형 완전 자동 생성형 AI\'입니다. 단순한 응답을 넘어, 사용자의 다음 행동을 예측하고 증강합니다.",
      },
      summary: {
        title: "Addeep GPR-1: 증강 지능의 시작",
        description:
          "Addeep GPR(Generative Pre-trained Recommender)은 기존 추천 시스템의 한계를 넘어, 사용자의 '마인드셋(Mindset)'을 심층적으로 '채굴(Mining)'하여 새로운 콘텐츠, 광고, 상거래 경험까지 '생성(Generative)'하는 증강 AI(Augmented AI)입니다. 이는 WEB 3.0 기반 S2E(SNS to Earn) 소셜 미디어 생태계의 심장과도 같은 핵심 엔진입니다.",
      },
    },
    en: {
      hero: {
        name: "The Future of AI: Predicting, Generating, and Augmenting",
        description:
          "As an AI innovator and founder of Addeep, I design the future by breaking down boundaries between humans and technology through augmented AI technology.",
      },
      summary: {
        title: "AI Innovator",
        description:
          "Evolution from engineer to global leader, leadership and technical contributions through TCI & ACI, ACT technologies",
      },
    },
  };

  const currentContent = content[language as keyof typeof content];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "summary",
        "technologies",
        "gpr1",
        "projects",
        "journey",
        "accolades",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-['Inter','Noto_Sans_KR',sans-serif]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row justify-between items-center h-16">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-lg font-semibold text-purple-600"
            >
              Addeep GPR
            </button>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-6">
                {[
                  {
                    id: "hero",
                    label: language === "ko" ? "소개" : "Introduction",
                  },
                  {
                    id: "summary",
                    label: language === "ko" ? "핵심 기술" : "Core Tech",
                  },
                  {
                    id: "technologies",
                    label:
                      language === "ko"
                        ? "서비스 및 확장성"
                        : "Services & Scalability",
                  },
                  {
                    id: "gpr1",
                    label: language === "ko" ? "기대 효과" : "Vision & Value",
                  },
                  {
                    id: "projects",
                    label: language === "ko" ? "기술 비교" : "Comparison",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-purple-600 border-b-2 border-purple-600"
                        : "text-gray-600 hover:text-purple-600"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <button
                onClick={() => setLanguage("ko")}
                className="px-4 py-2 text-sm font-medium text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-200"
              >
                KO
              </button>
              <button
                onClick={() => setLanguage("en")}
                className="px-4 py-2 text-sm font-medium text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-200"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {currentContent.hero.name}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {currentContent.hero.description}
            </p>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-200">
            핵심 기술 살펴보기
          </button>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {currentContent.summary.title}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {currentContent.summary.description}
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section
        id="technologies"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === "ko" ? "핵심 기술" : "Core Technologies"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                Augmented AI: Addeep GPR-1
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "대화형 AI 기술을 통한 인간과 AI의 자연스러운 상호작용"
                  : "Natural interaction between humans and AI through conversational AI technology"}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                Content Economy: ACI & ACT
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "혁신적인 콘텐츠 경제 플랫폼 구축"
                  : "Building innovative content economy platform"}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                Reward Ecosystem: S2E
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "지속 가능한 보상 생태계 설계"
                  : "Designing sustainable reward ecosystem"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GPR-1 Model Section */}
      <section id="gpr1" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Large Mind-mining Model (LMM)
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {language === "ko"
                ? "기존 LLM과 차별화된 혁신적인 마인드 마이닝 모델"
                : "Innovative mind-mining model differentiated from existing LLMs"}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === "ko" ? "주요 프로젝트" : "Key Projects"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                OTT Platform Innovation
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "차세대 OTT 플랫폼 개발 및 혁신"
                  : "Next-generation OTT platform development and innovation"}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                Addeep Ecosystem
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "통합 AI 생태계 구축"
                  : "Building integrated AI ecosystem"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneurial Journey Section */}
      <section id="journey" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === "ko" ? "기업가 여정" : "Entrepreneurial Journey"}
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                Addeep Founder & CVO
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "증강 AI 기술의 선구자로서의 역할"
                  : "Role as a pioneer in augmented AI technology"}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                US Addeep Inc. CEO
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "글로벌 시장 진출을 위한 리더십"
                  : "Leadership for global market expansion"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accolades Section */}
      <section id="accolades" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === "ko" ? "수상 및 인정" : "Accolades & Recognition"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                {language === "ko"
                  ? "기술 혁신상"
                  : "Technology Innovation Award"}
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "AI 기술 분야 혁신 기여 인정"
                  : "Recognition for innovation in AI technology"}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                {language === "ko" ? "기업가상" : "Entrepreneur Award"}
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "혁신적 비즈니스 모델 구축"
                  : "Building innovative business models"}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                {language === "ko" ? "리더십상" : "Leadership Award"}
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "글로벌 팀 리더십과 비전"
                  : "Global team leadership and vision"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .nav-link {
          transition:
            color 0.3s,
            border-bottom-color 0.3s;
          border-bottom: 2px solid transparent;
        }
        .nav-link:hover,
        .nav-link.active {
          color: #8b5cf6;
          border-bottom-color: #8b5cf6;
        }
      `}</style>
    </div>
  );
}
