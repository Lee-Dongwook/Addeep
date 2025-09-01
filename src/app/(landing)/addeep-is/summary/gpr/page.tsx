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
            {language === "ko" ? "핵심 기술 Deep Dive" : "Core Technologies"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                LMM: Large Mind-mining Model
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "LLM이 언어를 이해한다면, LMM은 사용자의 '의도'를 채굴합니다. 3가지 핵심 데이터를 통해 사용자의 복합적인 마인드셋을 확률적으로 모델링하여, 사용자가 무엇을 원하는지, 왜 원하는지를 예측합니다."
                  : "If LLM understands language, LMM mines the user's 'intentions'. By modeling the user's complex mindset probabilistically through three key data, it predicts what the user wants and why they want it."}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                ACT & Deep Blend
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "콘텐츠 자동 융합 기술(ACT)은 LMM의 추론을 바탕으로, Diffusion 모델 기반의 \'Deep Blend\' 프로세스를 통해 최적의 콘텐츠를 자동으로 생성합니다."
                  : "ACT is an automated content convergence technology based on LMM's inference. It automatically generates the optimal content through the \'Deep Blend\' process based on the Diffusion model."}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                Generation-Confirmation & RL
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "Addeep의 AI는 \'생성-승인\' 모델과 강화학습(Reinforcement Learning)을 통해 지속적으로 진화하며 사용자와 함께 성장합니다."
                  : "Addeep's AI evolves continuously with \'Generation-Confirmation\' model and Reinforcement Learning, growing together with users."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GPR-1 Model Section */}
      <section id="gpr1" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === "ko"
              ? "주요 서비스 및 AIaaS 확장성"
              : "Key Services and AIaaS Scalability"}
          </h2>
          <h2 className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Addeep GPR-1은 SNS 플랫폼 내에서 4대 핵심 서비스를 자동화하며, 그
            기술력은 AIaaS(서비스형 AI) 모델을 통해 모든 산업으로 무한히 확장될
            수 있습니다.
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                콘텐츠 생성 자동화
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "이미지, 밈, 이모티콘 등 사용자 맞춤형 콘텐츠를 자동으로 생성하고 제안합니다."
                  : "It automatically generates and proposes user-personalized content such as images, memes, and emoticons."}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                광고 생성 자동화
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "콘텐츠와 광고를 최적으로 자동 매칭하여 거부감 없는 네이티브 광고를 생성합니다."
                  : "It automatically matches content and advertisements to create native ads without any rejection."}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                거래 자동화
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "콘텐츠와 상품의 판매/구매 트랜잭션을 자동으로 생성하여 구매 전환을 극대화합니다."
                  : "It automatically generates content and product sales/purchase transactions to maximize purchase conversions."}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                SNS 포스팅 자동화
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "사용자 승인만으로 최적화된 SNS 게시물을 자동으로 포스팅합니다."
                  : "It automatically posts optimized SNS posts with user approval."}
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg w-full">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">
              AIaaS (Artificial Intelligence-as-a-Service)
            </h3>
            <p className="text-gray-700">
              {language === "ko"
                ? "Addeep의 강력한 GPR 엔진은 API와 솔루션 형태로 제공되어, 금융, 헬스케어, 교육 등 모든 산업 도메인에 맞춤형으로 적용될 수 있는 무한한 확장성을 가집니다."
                : "Addeep's powerful GPR engine is provided in API and solution forms, and has infinite scalability that can be applied to any industry domain tailored to the needs of finance, healthcare, education, and other sectors."}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === "ko" ? "기대 효과 및 미래 가치" : "Vision & Value"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                혁신적 사용자 경험
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "사용자는 더 이상 원하는 것을 찾아 헤맬 필요가 없습니다. Addeep AI가 먼저 사용자의 마음을 읽고 최적의 콘텐츠와 서비스를 제안하여 전에 없던 편리함과 만족감을 제공합니다."
                  : "Users no longer need to search for what they want. Addeep AI reads the user's mind first and suggests the optimal content and services, providing a new level of convenience and satisfaction."}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                비즈니스 효율 극대화
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "콘텐츠 생산부터 광고 캠페인, 판매에 이르는 전 과정을 자동화하여 기업의 비용을 절감하고 마케팅 효율성과 구매 전환율을 극대화하여 경쟁 우위를 확보합니다."
                  : "It automates the entire process from content production to advertising campaigns, sales, and maximizes cost savings and marketing efficiency and purchase conversion rate to gain a competitive advantage."}
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg w-full text-center">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">
              WEB 3.0/4.0 시대 선도
            </h3>
            <p className="text-gray-700">
              {language === "ko"
                ? "탈중앙화된 개인화 콘텐츠 시대를 넘어, 사람과 AI가 경계 없이 상호작용하며 함께 성장하는 WEB 4.0 시대를 Addeep의 증강 AI 기술이 선도할 것입니다."
                : "Beyond the centralized personalized content era, Addeep's augmented AI technology will lead the WEB 4.0 era where people and AI interact seamlessly and grow together."}
            </p>
          </div>
        </div>
      </section>

      {/* Entrepreneurial Journey Section */}
      <section id="journey" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === "ko"
              ? "GPR vs LLM: 패러다임의 전환"
              : "GPR vs LLM: Paradigm Shift"}
          </h2>
          <div className="overflow-x-auto card p-2">
            <table className="w-full text-left comparison-table rounded-lg">
              <thead className="bg-gray-50 text-gray-700 text-lg">
                <tr>
                  <th className="lang-ko">구분</th>
                  <th className="lang-en hidden">Category</th>
                  <th>Addeep GPR-1</th>
                  <th>
                    <span className="lang-ko">대화형 LLM (e.g., ChatGPT)</span>
                    <span className="lang-en hidden">
                      Conversational LLM (e.g., ChatGPT)
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold lang-ko">핵심 철학</td>
                  <td className="font-bold lang-en hidden">Core Philosophy</td>
                  <td>
                    <strong className="lang-ko">
                      증강 지능 (Augmented Intelligence):
                    </strong>
                    <span className="lang-ko">
                      {" "}
                      AI가 인간의 의도를 예측하고 능력을 증강
                    </span>
                    <strong className="lang-en hidden">
                      Augmented Intelligence:
                    </strong>
                    <span className="lang-en hidden">
                      {" "}
                      AI predicts and enhances human intent
                    </span>
                  </td>
                  <td>
                    <strong className="lang-ko">
                      인공 지능 (Artificial Intelligence):
                    </strong>
                    <span className="lang-ko">
                      {" "}
                      인간의 지시를 이해하고 결과를 수행
                    </span>
                    <strong className="lang-en hidden">
                      Artificial Intelligence:
                    </strong>
                    <span className="lang-en hidden">
                      {" "}
                      AI understands and executes human commands
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold lang-ko">추론 모델</td>
                  <td className="font-bold lang-en hidden">Inference Model</td>
                  <td className="font-semibold text-gray-800">
                    LMM (Large Mind-mining Model)
                  </td>
                  <td>LLM (Large Language Model)</td>
                </tr>
                <tr>
                  <td className="font-bold lang-ko">상호작용 방식</td>
                  <td className="font-bold lang-en hidden">
                    Interaction Method
                  </td>
                  <td className="font-semibold text-gray-800">
                    <strong className="lang-ko">비대화형 (Proactive):</strong>
                    <span className="lang-ko">
                      {" "}
                      명시적 입력 없이 선제적으로 자동 생성
                    </span>
                    <strong className="lang-en hidden">
                      Non-conversational (Proactive):
                    </strong>
                    <span className="lang-en hidden">
                      {" "}
                      Proactively generates without explicit input
                    </span>
                  </td>
                  <td>
                    <strong className="lang-ko">대화형 (Reactive):</strong>
                    <span className="lang-ko">
                      {" "}
                      사용자의 프롬프트(입력)에 기반하여 반응
                    </span>
                    <strong className="lang-en hidden">
                      Conversational (Reactive):
                    </strong>
                    <span className="lang-en hidden">
                      {" "}
                      Reacts based on user prompts (input)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold lang-ko">비즈니스 적용</td>
                  <td className="font-bold lang-en hidden">
                    Business Application
                  </td>
                  <td>
                    <strong className="lang-ko">S2E 생태계 직접 구동:</strong>
                    <span className="lang-ko">
                      {" "}
                      광고, 커머스와 직접 연동된 수익 모델
                    </span>
                    <strong className="lang-en hidden">
                      Direct S2E Ecosystem Drive:
                    </strong>
                    <span className="lang-en hidden">
                      {" "}
                      Revenue model directly linked with ads and commerce
                    </span>
                  </td>
                  <td>
                    <strong className="lang-ko">범용 API 제공:</strong>
                    <span className="lang-ko">
                      {" "}
                      다양한 서비스에 적용 가능한 기반 기술
                    </span>
                    <strong className="lang-en hidden">
                      General-Purpose API:
                    </strong>
                    <span className="lang-en hidden">
                      {" "}
                      Foundational tech applicable to various services
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
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
