"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function GPRPage() {
  const [activeSection, setActiveSection] = useState("hero");
  const [language, setLanguage] = useState("ko");

  const content = {
    ko: {
      hero: {
        title: "증강된 미래의 설계자",
        subtitle: "Architect of the Augmented Future",
        name: "Kevin Jaeyoung Yoon",
        education: "한양대학교 전자공학부 졸업",
        description:
          "AI 혁신가이자 Addeep의 창립자로서, 증강 AI 기술을 통해 인간과 기술의 경계를 허물고 새로운 가치를 창출하는 미래를 설계합니다.",
      },
      summary: {
        title: "AI 혁신가",
        description:
          "엔지니어에서 글로벌 리더로의 진화, TCI & ACI, ACT 기술을 통한 리더십과 기술적 기여",
      },
      vision: {
        title: "가치 연결의 철학",
        description:
          "N/W → Info Security → TCI & ACI → Addeep Augmented AI GPR-1로 이어지는 기술 철학의 진화",
      },
    },
    en: {
      hero: {
        title: "Architect of the Augmented Future",
        subtitle: "Architect of the Augmented Future",
        name: "Kevin Jaeyoung Yoon",
        education: "Hanyang University, Electronic Engineering",
        description:
          "As an AI innovator and founder of Addeep, I design the future by breaking down boundaries between humans and technology through augmented AI technology.",
      },
      summary: {
        title: "AI Innovator",
        description:
          "Evolution from engineer to global leader, leadership and technical contributions through TCI & ACI, ACT technologies",
      },
      vision: {
        title: "Philosophy of Value Bridging",
        description:
          "Evolution of technical philosophy: N/W → Info Security → TCI & ACI → Addeep Augmented AI GPR-1",
      },
    },
  };

  const currentContent = content[language as keyof typeof content];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "summary",
        "vision",
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
                    id: "summary",
                    label: language === "ko" ? "소개" : "Introduction",
                  },
                  {
                    id: "vision",
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden bg-gray-200">
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-6xl">
                👤
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {currentContent.hero.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-6">
              {currentContent.hero.title}
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              {currentContent.hero.education}
            </p>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {currentContent.hero.description}
            </p>
          </div>
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

      {/* Vision Section */}
      <section id="vision" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {currentContent.vision.title}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {currentContent.vision.description}
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
