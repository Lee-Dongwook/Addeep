"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useResponsive } from "../../../../../lib/useResponsive";

export default function JaeyoungPage() {
  const [activeSection, setActiveSection] = useState("hero");
  const [language, setLanguage] = useState("ko");
  const [tabState, setTabState] = useState("GPR");

  const { isMobile, isTablet } = useResponsive();

  const handleTabChange = (tab: string) => {
    switch (tab) {
      case "GPR":
        setTabState("GPR");
        break;
      case "ACI":
        setTabState("ACI");
        break;
      case "S2E":
        setTabState("S2E");
        break;
    }
  };

  const data =
    isMobile || isTablet
      ? [
          {
            name: "S/W Engineer",
            years: 15,
            color: "rgba(139, 92, 246, 1.0)",
          },
          {
            name: "TITAN Platform",
            years: 10,
            color: "rgba(139, 92, 246, 0.8)",
          },
          {
            name: "글로벌 경영",
            years: 7,
            color: "rgba(139, 92, 246, 0.6)",
          },
          {
            name: "Addeep",
            years: 5,
            color: "rgba(139, 92, 246, 0.4)",
          },
        ]
      : [
          {
            name: "S/W Engineer(보안/네트워크/UTM)",
            years: 15,
            color: "rgba(139, 92, 246, 1.0)",
          },
          {
            name: "TITAN Platform (Founder/CEO)",
            years: 10,
            color: "rgba(139, 92, 246, 0.8)",
          },
          {
            name: "글로벌 경영 (미국/중국/싱가포르)",
            years: 7,
            color: "rgba(139, 92, 246, 0.6)",
          },
          {
            name: "Addeep (Founder/CVO)",
            years: 5,
            color: "rgba(139, 92, 246, 0.4)",
          },
        ];

  const content = {
    ko: {
      hero: {
        title: "증강된 미래의 설계자",
        subtitle: "Architect of the Augmented Future",
        name: "윤재영 Kevin Jaeyoung Yoon",
        education: [
          "Hayfield University MBA",
          "Seoul National University Graduate School of Business",
          "CFO Academy",
          "현) 사단법인 한국AGI연합협회 이사",
          "전) TiTAN Platform Corp. Founder & CEO",
        ],
        slogan: '"We Bridge Values"',
        description:
          "기술 창시자, 글로벌 경영자, 그리고 혁신적 비전가. 25년의 경력을 통해 더 공정하고 지능적인 인간 중심의 디지털 생태계를 구축합니다. ICT:Networks, Information Security, Cloud, Platform, AI, DeepTech, Augmented AI을 아우르는 전문성으로 Web 3.0의 새로운 미래를 열어갑니다.",
      },
      summary: {
        title: "소개",
        subTitle: "미래 기술의 지평을 여는 AI 혁신가, 윤재영",
        description: [
          "윤재영은 소프트웨어 엔지니어로서의 탄탄한 기술적 기반 위에 경영학적 통찰력을 더해, AI, 플랫폼, 클라우드, ICT산업을 아우르는 혁신 리더로 자리매김했습니다. 고교 시절 전자계산정보처리 전공으로 시작된 그의 여정은 MBA 취득과 서울대학교 경영대학원 CFO 과정 수료를 통해 기술과 경영을 융합하는 독보적인 전문성으로 완성되었습니다.",
          "TiTAN Platform Corp. CEO를 역임하며 증명된 탁월한 리더십은 현재 Addeep Inc.의 의장/최고 비전 책임자(CVO)이자 한국AGI연합협회 이사로서 미래를 향한 혁신을 이끄는 동력이 되고 있습니다. 지난 25여 년간 그는 사업 기획, 제품 개발, 사업 전략 등 ICT 산업의 핵심 역량을 내재화하며, 아이디어를 현실로 만드는 견고한 기반을 다져왔습니다.",
          "그는 AI 기반 소셜 미디어 플랫폼, OTT 스마트 콘텐츠, AI 소셜 로봇 시리즈의 사업화를 성공적으로 이끌며 상상 속의 기술을 비즈니스로 전환하는 데 탁월한 역량을 입증했습니다. 특히, 데이터 주권과 디지털 저작권 보호의 새로운 패러다임을 제시한 ‘TCI & ACI’ 기술과 생성형 증강 AI의 가능성을 연 ‘ACT’ 콘텐츠 자동 융합 기술을 직접 창시하며, 기술 혁신의 중심에 서 있음을 증명했습니다.",
          "그의 비전은 국경을 넘어 한국, 미국, 중국, 싱가포르, 동남아시아에서 성공적인 글로벌 경영 성과로 이어졌습니다. 투자사로부터 누적 550억 원에 달하는 투자 유치에 성공하며 기술 경영 경쟁력을 인정받았고, 2017년 국무총리상 및 미국 백악관 도널드 트럼프 대통령상 수상은 그의 혁신적인 리더십에 대한 명예로운 증표입니다.",
          "현재 윤재영은 끊임없는 도전과 혁신으로 미래 기술을 선도하며, 증강AI.딥테크 산업의 새로운 지평을 열어가는 비저너리(Visionary) 경영 리더로서 다음 시대의 '기술은 인간을 대체하는 것이 아니라, 인간의 가치를 증강시키고 연결하기 위해 존재해야 한다'는 공존의 가치를 만들어가고 있습니다.",
        ],
      },
      vision: {
        title: "비전과 철학",
        description:
          "그의 모든 혁신은 '가치 연결(Value Bridging)'이라는 하나의 철학에서 시작됩니다. 단절된 가치를 잇고, 생태계에 기여하는 모두에게 정당한 보상을 제공하는 것, 이것이 그가 설계하는 미래의 핵심입니다.",
      },
    },
    en: {
      hero: {
        title: "Architect of the Augmented Future",
        subtitle: "Architect of the Augmented Future",
        name: "Kevin Jaeyoung Yoon",
        education: "Hanyang University, Electronic Engineering",
        slogan: '"We Bridge Values"',
        description:
          "As an AI innovator and founder of Addeep, I design the future by breaking down boundaries between humans and technology through augmented AI technology.",
      },
      summary: {
        title: "AI Innovator",
        subTitle: "미래 기술의 지평을 여는 AI 혁신가, 윤재영",
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

  if (isMobile || isTablet) {
    return (
      <div className="min-h-screen bg-white text-gray-800 font-['Inter','Noto_Sans_KR',sans-serif]">
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
          <div className="max-w-full mx-auto p-4">
            <div className="flex justify-between items-center">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-lg font-bold text-black min-w-48"
              >
                윤재영 Kevin Jaeyoung Yoon
              </button>
              <div className="flex items-center space-x-6">
                <div className="hidden space-x-6">
                  {[
                    {
                      id: "summary",
                      label: language === "ko" ? "소개" : "About me",
                    },
                    {
                      id: "vision",
                      label: language === "ko" ? "비전" : "Vision",
                    },
                    {
                      id: "technologies",
                      label: language === "ko" ? "핵심 기술" : "Core Tech",
                    },
                    {
                      id: "gpr1",
                      label: language === "ko" ? "GPR-1 모델" : "GPR-1 Model",
                    },
                    {
                      id: "projects",
                      label: language === "ko" ? "주요 프로젝트" : "Projects",
                    },
                    {
                      id: "journey",
                      label: language === "ko" ? "기업가 여정" : "Journey",
                    },
                    {
                      id: "accolades",
                      label: language === "ko" ? "성취와 인정" : "Accolades",
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
                <button
                  onClick={() => setLanguage(language === "ko" ? "en" : "ko")}
                  className="px-4 py-2 text-sm font-medium text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-200"
                >
                  {language === "ko" ? "English" : "한국어"}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden p-8">
          <div className="absolute inset-0 bg-cover bg-center" aria-hidden />
          <div className="absolute inset-0 bg-purple-50" />
          <div className="relative max-w-7xl mx-auto py-20 md:py-32">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                <img
                  src="https://storage.googleapis.com/assets-addeep/images/JaeyoungProfile.png"
                  alt="Kevin Jaeyoung Yoon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {currentContent.hero.name}
              </h1>
              <h2 className="text-xl font-semibold text-purple-600 mb-4">
                {currentContent.hero.title}
              </h2>
              <div className="text-md text-gray-600 mb-4 flex flex-col gap-1">
                {Array.isArray(currentContent.hero.education)
                  ? currentContent.hero.education.map((edu, idx) => (
                      <ol key={idx}>{edu}</ol>
                    ))
                  : currentContent.hero.education}
              </div>
              <h2 className="text-xl font-semibold text-blue-600 mb-6">
                {currentContent.hero.slogan}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {currentContent.hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section id="summary" className="bg-gray-50 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-purple-600 mb-8">
                {currentContent.summary.title}
              </h2>
              <h2 className="text-xl font-bold text-gray-900 mb-8 text-left">
                {currentContent.summary.subTitle}
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed">
                {Array.isArray(currentContent.summary.description)
                  ? currentContent.summary.description.map((sum, idx) => (
                      <ol key={idx} className="mt-4 mb-4">
                        {sum}
                      </ol>
                    ))
                  : currentContent.summary.description}
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="bg-purple-50 p-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-purple-600 mb-8">
              {currentContent.vision.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {currentContent.vision.description}
            </p>
            <div className="flex flex-col items-center gap-10 mt-10">
              <div className="rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  {language === "ko"
                    ? "기술 철학의 진화"
                    : "Evolution of Technical Philosophy"}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === "ko"
                    ? "그의 기술적 여정은 하나의 맥락으로 이어집니다. 네트워크 기술을 시작으로 정보보안 기술로 자산을 보호하는 기반을 다졌고, TCI & ACI 기술로 창작자의 권리를 투명하게 연결했으며, 현재 Addeep의 증강 AI는 모든 참여자의 가치를 지능적으로 연결하고 증폭시키는 단계로 진화했습니다."
                    : "His technical journey follows a single thread. Starting with network technology, he laid the foundation of protecting assets with information security technology, connected the rights of creators transparently through TCI & ACI technology, and evolved to the current Addeep augmented AI, which intelligently connects and amplifies the value of all participants."}
                </p>
                <div className="flex flex-col gap-8 mt-8">
                  <button
                    disabled
                    className="text-purple-600 font-bold text-lg bg-purple-200/50 rounded-lg p-2 min-w-20"
                  >
                    N/W
                  </button>
                  <button
                    disabled
                    className="text-purple-600 font-bold text-lg bg-purple-200/50 rounded-lg p-2 min-w-24"
                  >
                    정보보안
                  </button>
                  <button
                    disabled
                    className="text-purple-600 font-bold text-lg bg-purple-200/50 rounded-lg p-2 min-w-28"
                  >
                    TCI & ACI
                  </button>
                  <button
                    disabled
                    className="text-purple-600 font-bold text-lg bg-purple-200/50 rounded-lg p-2 min-w-48"
                  >
                    Addeep 증가 AI GPR-1
                  </button>
                </div>
              </div>
              <div className="rounded-lg shadow-lg flex flex-col items-center justify-center bg-purple-100 p-6">
                <h2 className="text-6xl font-bold text-purple-600">Vision</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto mt-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-12">
              {language === "ko"
                ? "핵심 기술: 미래 경제의 기둥"
                : "Core Technologies: The Pillars of the Future Economy"}
            </h2>

            <div className="flex flex-col gap-6 justify-center p-4 mb-8">
              <button
                className={clsx(
                  "font-semibold text-lg rounded-full p-4 min-w-48",
                  tabState === "GPR" && "bg-purple-600 text-white",
                  tabState !== "GPR" && "bg-gray-200/50"
                )}
                onClick={() => handleTabChange("GPR")}
              >
                증강 AI: Addeeep GPR-1
              </button>
              <button
                className={clsx(
                  "font-semibold text-lg rounded-full p-4 min-w-48",
                  tabState === "ACI" && "bg-purple-600 text-white",
                  tabState !== "ACI" && "bg-gray-200/50"
                )}
                onClick={() => handleTabChange("ACI")}
              >
                콘텐츠 경제: ACI & ACT
              </button>
              <button
                className={clsx(
                  "font-semibold text-lg rounded-full p-4 min-w-48",
                  tabState === "S2E" && "bg-purple-600 text-white",
                  tabState !== "S2E" && "bg-gray-200/50"
                )}
                onClick={() => handleTabChange("S2E")}
              >
                보상 생태계: S2E
              </button>
            </div>

            <div className="flex items-center justify-center max-w-4xl mx-auto">
              {tabState === "GPR" && (
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-600 mb-4">
                    {language === "ko"
                      ? "Addeep GPR-1: 비대화형 AI 패러다임"
                      : "Addeep GPR-1: Non-conversational AI Paradigm"}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {language === "ko"
                      ? "주류 대화형 AI와 달리, 사용자의 의도를 먼저 파악하고 최적의 결과물을 '먼저 제안'하는 능동적 증강 AI입니다. 독자적인 LMM(Large Mind-mining Model) 추론 모델을 통해 사용자의 '마인드셋'을 모델링하여, 명시적 명령 없이도 필요한 콘텐츠, 광고, SNS 게시물까지 자동으로 생성합니다. AI와의 상호작용을 '명령과 실행'에서 '제안과 선택'으로 전환시키는 혁신입니다."
                      : "Unlike mainstream conversational AI, Addeep GPR-1 proactively understands the user's intent and 'first proposes' the optimal result. By modeling the user's 'mindset' through an innovative LMM(Large Mind-mining Model) inference model, it automatically generates necessary content, advertisements, and SNS posts without explicit commands. This innovation shifts the interaction between humans and AI from 'commands and execution' to 'proposals and selections'."}
                  </p>
                </div>
              )}
              {tabState === "ACI" && (
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-600 mb-4">
                    {language === "ko"
                      ? "ACI & ACT: 투명한 콘텐츠 경제를 위한 이중 엔진"
                      : "ACI & ACT: Dual Engines for Transparent Content Economy"}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {language === "ko"
                      ? "ACI (Addeep Content Identifier): 콘텐츠의 DNA와 같은 고유 식별자입니다. 블록체인 기반 특허 기술로, 원본 콘텐츠 파일에 직접 암호화된 식별 코드를 삽입하여 복제되거나 변형되어도 원본의 소유권과 유통 이력을 영구적으로 추적합니다. 이는 모든 디지털 콘텐츠에 법적 효력을 지닌 '디지털 등기부등본'을 발급하는 것과 같으며, 투명한 저작권 보호와 수익 정산의 기반이 됩니다."
                      : "ACI (Addeep Content Identifier): A unique identifier similar to the DNA of content. Based on blockchain-based patent technology, it directly inserts an encrypted identification code into the original content file so that even if it is copied or modified, the ownership and流通 history of the original can be permanently traced. This is equivalent to issuing a 'digital notarization' with legal effect for all digital content, serving as the foundation for transparent copyright protection and revenue settlement."}
                  </p>
                  <p className="text-gray-700">
                    {language === "ko"
                      ? "ACT (Addeep Automatic Content Convergence): ACI로 보호되고 식별된 콘텐츠 자산들을 GPR-1 AI가 실시간으로 융합하여 새로운 가치를 창출하는 기술입니다. 사용자의 마인드셋에 맞춰 크리에이터의 창작물과 광고주의 브랜드 메시지를 가장 적절한 형태로 자동 결합하여, 거부감 없는 고품질의 '네이티브 증강 콘텐츠'를 생성합니다. 이는 창작자와 광고주 모두에게 새로운 수익 모델을 제공하는 혁신적 접근입니다."
                      : "ACT (Addeep Automatic Content Convergence): Converts protected and identified content assets into GPR-1 AI to create new value in real-time. Automatically combines creator's creative work and advertiser's brand message in the most appropriate form to create high-quality 'native augmented content' without rejection. This is an innovative approach that provides new revenue models for both creators and advertisers."}
                  </p>
                </div>
              )}
              {tabState === "S2E" && (
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-600 mb-4">
                    {language === "ko"
                      ? "Social 2 Earn: S2E 혁명"
                      : "Social 2 Earn: S2E Revolution"}
                  </h3>
                  <p className="text-gray-700">
                    {language === "ko"
                      ? "GPR-1, ACI, ACT 기술이 결합하여 완성되는 새로운 경제 프로토콜입니다. 기존 Web 2.0의 데이터 착취 구조를 뒤집고, 가치를 창출하는 모든 참여자에게 보상을 제공하는 다자간 보상 시스템입니다. 광고 수익의 50%를 생태계에 환원하여 Users, Creators, Marketers to Earn을 실현합니다."
                      : "A new economic protocol completed by combining GPR-1, ACI, and ACT technologies. It reverses the data exploitation structure of Web 2.0 and provides rewards to all participants who create value. By returning 50% of advertising revenue to the ecosystem, it realizes Users, Creators, and Marketers to Earn."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* GPR-1 Model Section */}
        <section id="gpr1" className="p-6">
          <div className="max-w-7xl mx-auto mt-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-8">
              {language === "ko"
                ? "GPR-1: 증강 AI 추론 모델"
                : "GPR-1: Augmented AI Inference Model"}
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {language === "ko"
                ? "Addeep GPR-1은 단순한 추천 시스템을 넘어, 사용자의 잠재적 의도를 이해하고 먼저 행동하는 '증강 지능'의 핵심 엔진입니다. 그 기술적 기반은 LMM이라는 독자적인 모델에 있습니다."
                : "Addeep GPR-1 is a core engine of 'augmented intelligence' that not only understands the user's potential intent but also acts first. Its technical foundation lies in an innovative model called LMM."}
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg mt-4 mb-4">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                {language === "ko"
                  ? "LMM (Large Mind-mining Model)의 개념"
                  : "Concept of LMM (Large Mind-mining Model)"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === "ko"
                  ? "LMM은 텍스트 데이터 학습에 집중하는 LLM(Large Language Model)과 달리, 다차원적인 개인화 데이터를 종합적으로 분석하여 사용자의 '마인드셋(Mindset)'을 추론하는 모델입니다. 마인드셋이란 특정 상황에서 개인이 가질 수 있는 생각, 감정, 의도의 총체적 집합을 의미합니다. LMM은 소통 지수, 활동 패턴, 인구통계학적 정보, 콘텐츠 소비 이력 등 비정형 데이터를 심층적으로 학습하여 이 마인드셋을 확률적으로 모델링합니다."
                  : "Unlike LLM(Large Language Model) that focuses on text data learning, LMM analyzes comprehensive personalized data to infer the user's 'mindset'. Mindset refers to the comprehensive set of thoughts, emotions, and intentions that an individual may have in a specific situation. LMM learns unstructured data such as communication metrics, activity patterns, demographic information, and content consumption history in depth to model this mindset probabilistically."}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg mt-4 mb-4">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                {language === "ko"
                  ? "LLM과의 차별점: '명령'이 아닌 '의도'의 이해"
                  : "Difference from LLM: Understanding 'Intent' rather than 'Command'"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === "ko"
                  ? "LLM 기반의 대화형 AI는 사용자의 '명령(Command)'을 정확히 이해하고 텍스트로 답변하는 데 최적화되어 있습니다. 반면, LMM 기반의 GPR-1은 사용자가 명시적으로 표현하지 않은 잠재적 '의도(Intent)'를 파악하는 데 중점을 둡니다. 예를 들어, 사용자가 '오늘 날씨 좋다'라고 포스팅하면, LLM은 이 문장의 의미를 분석하지만, LMM은 '이 사용자는 지금 긍정적인 감정 상태이며, 야외 활동과 관련된 콘텐츠나 상쾌한 느낌의 광고에 반응할 확률이 높다'는 마인드셋을 추론합니다. 이 추론을 바탕으로 GPR-1은 질문을 기다리지 않고, 관련 콘텐츠와 광고를 자동으로 생성하여 먼저 제안합니다."
                  : "Conversational AI based on LLM is optimized to accurately understand the user's 'command (Command)' and answer in text. In contrast, GPR-1 based on LMM focuses on understanding the user's latent 'intent (Intent)' that is not explicitly expressed. For example, when a user posts 'today's weather is good', LLM analyzes the meaning of this sentence, but LMM infers that the user is in a positive emotional state and has a high probability of reacting to content or advertisements related to outdoor activities and refreshing feelings. Based on this inference, GPR-1 automatically generates and proposes relevant content and advertisements without waiting for questions."}
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto mt-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-12">
              {language === "ko"
                ? "주요 프로젝트 및 제품 개발"
                : "Key Projects and Product Development"}
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {language === "ko"
                ? "그의 제품 개발 여정은 정보보안 솔루션에서 시작하여, 클라우드 기반 플랫폼 서비스와 AI 및 딥테크 분야로 확장되었습니다. 이 과정에서 그는 아이디어를 현실로 만드는 탁월한 실행력을 입증했습니다"
                : "His product development journey started with information security solutions, expanded to cloud-based platform services, and AI and deep tech fields. During this process, he proved his exceptional execution ability to turn ideas into reality."}
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-8 mb-6">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-purple-600 mb-4">
                  {language === "ko"
                    ? 'OTT 플랫폼 혁신 "TiTAN Play"'
                    : "OTT Platform Innovation 'TiTAN Play'"}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === "ko"
                    ? "TCI 저작권 보호 기술을 핵심으로, 창작자 중심의 새로운 미디어 소비 경험을 제공하는 OTT 서비스를 기획하고 출시했습니다."
                    : "As a core technology, we developed an OTT service that provides a new media consumption experience centered on creators, launching 'TiTAN Play'."}
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-purple-600 mb-4">
                  {language === "ko"
                    ? 'AI 소셜 로봇 "TiTAN AI"'
                    : "AI Social Robot 'TiTAN AI'"}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === "ko"
                    ? "카메라, 스피커, 디스플레이를 탑재하여 가족 구성원과 교감하고 정보를 제공하는 AI 기반 소셜 로봇 시리즈를 개발 및 상용화했습니다."
                    : "Developed and commercialized an AI-based social robot series equipped with a camera, speaker, and display to communicate with family members and provide information."}
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-purple-600 mb-4">
                  {language === "ko" ? "TiTAN Core" : "TiTAN Core"}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === "ko"
                    ? "플랫폼과 연동되는 다양한 IoT 스마트 홈 기기를 개발 및 상용화하여 콘텐츠 소비를 넘어 일상 생활 공간까지 지능적으로 확장되는 통합적인 플랫폼 생태계를 제공하였습니다."
                    : "Developed and commercialized various IoT smart home devices linked to the platform to provide an integrated platform ecosystem that extends from content consumption to everyday living spaces."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Entrepreneurial Journey Section */}
        <section id="journey" className="p-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-purple-600 mb-12">
              {language === "ko"
                ? "기업가 여정: 엔지니어에서 글로벌 리더로"
                : "Entrepreneurial Journey: From Engineer to Global Leader"}
            </h2>
            <div className="flex flex-col gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-purple-600 mb-4">
                  {language === "ko"
                    ? "기술의 기반"
                    : "Foundation of Technology"}
                </h3>
                <p className="text-gray-700">
                  {language === "ko"
                    ? "소프트웨어 엔지니어로 시작, 네트워크 및 보안 기술 전문가로 성장하며 훗날의 기술 혁신을 위한 견고한 토대를 마련했습니다. 특히 네트워크 통합보안 시스템(UTM) 개발 경험은 그의 기술적 깊이를 더했습니다."
                    : "Started as a software engineer, grew into a network and security technology expert, laying a solid foundation for future technological innovation. In particular, the experience of developing a network unified security system (UTM) deepened his technical depth."}
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-purple-600 mb-4">
                  {language === "ko" ? "글로벌 도약" : "Global Expansion"}
                </h3>
                <p className="text-gray-700">
                  {language === "ko"
                    ? "TiTAN Platform 설립 후 미국, 중국, 싱가포르 법인을 7년간 경영하고 누적 550억 투자를 유치하며 글로벌 경영자로서의 역량을 입증했습니다."
                    : "After founding TiTAN Platform, he managed seven overseas subsidiaries for seven years, raised cumulative investments of 550 billion won, and proved his capabilities as a global manager."}
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-purple-600 mb-4">
                  {language === "ko"
                    ? "비전의 집대성"
                    : "Achievement of Vision"}
                </h3>
                <p className="text-gray-700">
                  {language === "ko"
                    ? "Addeep Inc. 창업. 지난 25년의 경험과 철학, 기술을 집대성하여 Web 3.0 시대의 차세대 증강 AI 산업 생태계를 구축하기 위한 끊임없는 노력으로 연구개발과 AI산업발전에 기여하고 있습니다."
                    : "After founding TiTAN Platform, he managed seven overseas subsidiaries for seven years, raised cumulative investments of 550 billion won, and proved his capabilities as a global manager."}
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-4">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data} layout="vertical">
                  <XAxis type="number" domain={[0, 16]} />
                  <YAxis dataKey="name" type="category" width={70} />
                  <Tooltip formatter={(value) => [`${value}년`, "기간"]} />
                  <Bar dataKey="years" fill="#8B5CF6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-['Inter','Noto_Sans_KR',sans-serif]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-full mx-auto px-24">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-xl font-bold text-black"
              >
                윤재영 Kevin Jaeyoung Yoon
              </button>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6">
                {[
                  {
                    id: "summary",
                    label: language === "ko" ? "소개" : "About me",
                  },
                  {
                    id: "vision",
                    label: language === "ko" ? "비전" : "Vision",
                  },
                  {
                    id: "technologies",
                    label: language === "ko" ? "핵심 기술" : "Core Tech",
                  },
                  {
                    id: "gpr1",
                    label: language === "ko" ? "GPR-1 모델" : "GPR-1 Model",
                  },
                  {
                    id: "projects",
                    label: language === "ko" ? "주요 프로젝트" : "Projects",
                  },
                  {
                    id: "journey",
                    label: language === "ko" ? "기업가 여정" : "Journey",
                  },
                  {
                    id: "accolades",
                    label: language === "ko" ? "성취와 인정" : "Accolades",
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
              <button
                onClick={() => setLanguage(language === "ko" ? "en" : "ko")}
                className="px-4 py-2 text-sm font-medium text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-200"
              >
                {language === "ko" ? "English" : "한국어"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" aria-hidden />
        <div className="absolute inset-0 bg-purple-50" />
        <div className="relative max-w-7xl mx-auto py-20 md:py-32">
          <div className="text-center">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
              <img
                src="https://storage.googleapis.com/assets-addeep/images/JaeyoungProfile.png"
                alt="Kevin Jaeyoung Yoon"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-3">
              {currentContent.hero.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">
              {currentContent.hero.title}
            </h2>
            <div className="text-lg text-gray-600 mb-4">
              {Array.isArray(currentContent.hero.education)
                ? currentContent.hero.education.map((edu, idx) => (
                    <ol key={idx}>{edu}</ol>
                  ))
                : currentContent.hero.education}
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
              {currentContent.hero.slogan}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {currentContent.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col">
            <h2 className="text-4xl text-center font-bold text-purple-600 mb-8">
              {currentContent.summary.title}
            </h2>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-left">
              {currentContent.summary.subTitle}
            </h2>
            <div className="text-xl text-gray-700 leading-relaxed">
              {Array.isArray(currentContent.summary.description)
                ? currentContent.summary.description.map((sum, idx) => (
                    <ol key={idx} className="mt-4 mb-4">
                      {sum}
                    </ol>
                  ))
                : currentContent.summary.description}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-purple-600 mb-8">
              {currentContent.vision.title}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {currentContent.vision.description}
            </p>
          </div>
          <div className="flex flex-row items-center gap-24 mt-24">
            <div className="rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                {language === "ko"
                  ? "기술 철학의 진화"
                  : "Evolution of Technical Philosophy"}
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "그의 기술적 여정은 하나의 맥락으로 이어집니다. 네트워크 기술을 시작으로 정보보안 기술로 자산을 보호하는 기반을 다졌고, TCI & ACI 기술로 창작자의 권리를 투명하게 연결했으며, 현재 Addeep의 증강 AI는 모든 참여자의 가치를 지능적으로 연결하고 증폭시키는 단계로 진화했습니다."
                  : "His technical journey follows a single thread. Starting with network technology, he laid the foundation of protecting assets with information security technology, connected the rights of creators transparently through TCI & ACI technology, and evolved to the current Addeep augmented AI, which intelligently connects and amplifies the value of all participants."}
              </p>
              <div className="flex flex-row items-center gap-8 mt-8">
                <button
                  disabled
                  className="text-purple-600 font-bold text-lg bg-purple-200/50 rounded-lg p-2 min-w-20"
                >
                  N/W
                </button>
                <button
                  disabled
                  className="text-purple-600 font-bold text-lg bg-purple-200/50 rounded-lg p-2 min-w-24"
                >
                  정보보안
                </button>
                <button
                  disabled
                  className="text-purple-600 font-bold text-lg bg-purple-200/50 rounded-lg p-2 min-w-28"
                >
                  TCI & ACI
                </button>
                <button
                  disabled
                  className="text-purple-600 font-bold text-lg bg-purple-200/50 rounded-lg p-2 min-w-48"
                >
                  Addeep 증가 AI GPR-1
                </button>
              </div>
            </div>
            <div className="p-8 rounded-lg shadow-lg w-[1000px] h-[400px] flex flex-col items-center justify-center bg-purple-100">
              <h2 className="text-[80px] font-bold text-purple-600 mb-4">
                Vision
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section
        id="technologies"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-600 text-center mb-12">
            {language === "ko"
              ? "핵심 기술: 미래 경제의 기둥"
              : "Core Technologies: The Pillars of the Future Economy"}
          </h2>

          <div className="flex flex-row items-center gap-2 justify-center p-4 mb-8">
            <button
              className={clsx(
                "font-semibold text-lg rounded-full p-4 min-w-48",
                tabState === "GPR" && "bg-purple-600 text-white",
                tabState !== "GPR" && "bg-gray-200/50"
              )}
              onClick={() => handleTabChange("GPR")}
            >
              증강 AI: Addeeep GPR-1
            </button>
            <button
              className={clsx(
                "font-semibold text-lg rounded-full p-4 min-w-48",
                tabState === "ACI" && "bg-purple-600 text-white",
                tabState !== "ACI" && "bg-gray-200/50"
              )}
              onClick={() => handleTabChange("ACI")}
            >
              콘텐츠 경제: ACI & ACT
            </button>
            <button
              className={clsx(
                "font-semibold text-lg rounded-full p-4 min-w-48",
                tabState === "S2E" && "bg-purple-600 text-white",
                tabState !== "S2E" && "bg-gray-200/50"
              )}
              onClick={() => handleTabChange("S2E")}
            >
              보상 생태계: S2E
            </button>
          </div>

          <div className="flex items-center justify-center max-w-4xl mx-auto">
            {tabState === "GPR" && (
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-purple-600 mb-4">
                  {language === "ko"
                    ? "Addeep GPR-1: 비대화형 AI 패러다임"
                    : "Addeep GPR-1: Non-conversational AI Paradigm"}
                </h3>
                <p className="text-gray-700">
                  {language === "ko"
                    ? "주류 대화형 AI와 달리, 사용자의 의도를 먼저 파악하고 최적의 결과물을 '먼저 제안'하는 능동적 증강 AI입니다. 독자적인 LMM(Large Mind-mining Model) 추론 모델을 통해 사용자의 '마인드셋'을 모델링하여, 명시적 명령 없이도 필요한 콘텐츠, 광고, SNS 게시물까지 자동으로 생성합니다. AI와의 상호작용을 '명령과 실행'에서 '제안과 선택'으로 전환시키는 혁신입니다."
                    : "Unlike mainstream conversational AI, Addeep GPR-1 proactively understands the user's intent and 'first proposes' the optimal result. By modeling the user's 'mindset' through an innovative LMM(Large Mind-mining Model) inference model, it automatically generates necessary content, advertisements, and SNS posts without explicit commands. This innovation shifts the interaction between humans and AI from 'commands and execution' to 'proposals and selections'."}
                </p>
              </div>
            )}
            {tabState === "ACI" && (
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-purple-600 mb-4">
                  {language === "ko"
                    ? "ACI & ACT: 투명한 콘텐츠 경제를 위한 이중 엔진"
                    : "ACI & ACT: Dual Engines for Transparent Content Economy"}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === "ko"
                    ? "ACI (Addeep Content Identifier): 콘텐츠의 DNA와 같은 고유 식별자입니다. 블록체인 기반 특허 기술로, 원본 콘텐츠 파일에 직접 암호화된 식별 코드를 삽입하여 복제되거나 변형되어도 원본의 소유권과 유통 이력을 영구적으로 추적합니다. 이는 모든 디지털 콘텐츠에 법적 효력을 지닌 '디지털 등기부등본'을 발급하는 것과 같으며, 투명한 저작권 보호와 수익 정산의 기반이 됩니다."
                    : "ACI (Addeep Content Identifier): A unique identifier similar to the DNA of content. Based on blockchain-based patent technology, it directly inserts an encrypted identification code into the original content file so that even if it is copied or modified, the ownership and流通 history of the original can be permanently traced. This is equivalent to issuing a 'digital notarization' with legal effect for all digital content, serving as the foundation for transparent copyright protection and revenue settlement."}
                </p>
                <p className="text-gray-700">
                  {language === "ko"
                    ? "ACT (Addeep Automatic Content Convergence): ACI로 보호되고 식별된 콘텐츠 자산들을 GPR-1 AI가 실시간으로 융합하여 새로운 가치를 창출하는 기술입니다. 사용자의 마인드셋에 맞춰 크리에이터의 창작물과 광고주의 브랜드 메시지를 가장 적절한 형태로 자동 결합하여, 거부감 없는 고품질의 '네이티브 증강 콘텐츠'를 생성합니다. 이는 창작자와 광고주 모두에게 새로운 수익 모델을 제공하는 혁신적 접근입니다."
                    : "ACT (Addeep Automatic Content Convergence): Converts protected and identified content assets into GPR-1 AI to create new value in real-time. Automatically combines creator's creative work and advertiser's brand message in the most appropriate form to create high-quality 'native augmented content' without rejection. This is an innovative approach that provides new revenue models for both creators and advertisers."}
                </p>
              </div>
            )}
            {tabState === "S2E" && (
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-purple-600 mb-4">
                  {language === "ko"
                    ? "Social 2 Earn: S2E 혁명"
                    : "Social 2 Earn: S2E Revolution"}
                </h3>
                <p className="text-gray-700">
                  {language === "ko"
                    ? "GPR-1, ACI, ACT 기술이 결합하여 완성되는 새로운 경제 프로토콜입니다. 기존 Web 2.0의 데이터 착취 구조를 뒤집고, 가치를 창출하는 모든 참여자에게 보상을 제공하는 다자간 보상 시스템입니다. 광고 수익의 50%를 생태계에 환원하여 Users, Creators, Marketers to Earn을 실현합니다."
                    : "A new economic protocol completed by combining GPR-1, ACI, and ACT technologies. It reverses the data exploitation structure of Web 2.0 and provides rewards to all participants who create value. By returning 50% of advertising revenue to the ecosystem, it realizes Users, Creators, and Marketers to Earn."}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* GPR-1 Model Section */}
      <section id="gpr1" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-purple-600 mb-8">
              {language === "ko"
                ? "GPR-1: 증강 AI 추론 모델"
                : "GPR-1: Augmented AI Inference Model"}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {language === "ko"
                ? "Addeep GPR-1은 단순한 추천 시스템을 넘어, 사용자의 잠재적 의도를 이해하고 먼저 행동하는 '증강 지능'의 핵심 엔진입니다. 그 기술적 기반은 LMM이라는 독자적인 모델에 있습니다."
                : "Addeep GPR-1 is a core engine of 'augmented intelligence' that not only understands the user's potential intent but also acts first. Its technical foundation lies in an innovative model called LMM."}
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg mt-4 mb-4">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">
              {language === "ko"
                ? "LMM (Large Mind-mining Model)의 개념"
                : "Concept of LMM (Large Mind-mining Model)"}
            </h3>
            <p className="text-gray-700">
              {language === "ko"
                ? "LMM은 텍스트 데이터 학습에 집중하는 LLM(Large Language Model)과 달리, 다차원적인 개인화 데이터를 종합적으로 분석하여 사용자의 '마인드셋(Mindset)'을 추론하는 모델입니다. 마인드셋이란 특정 상황에서 개인이 가질 수 있는 생각, 감정, 의도의 총체적 집합을 의미합니다. LMM은 소통 지수, 활동 패턴, 인구통계학적 정보, 콘텐츠 소비 이력 등 비정형 데이터를 심층적으로 학습하여 이 마인드셋을 확률적으로 모델링합니다."
                : "Unlike LLM(Large Language Model) that focuses on text data learning, LMM analyzes comprehensive personalized data to infer the user's 'mindset'. Mindset refers to the comprehensive set of thoughts, emotions, and intentions that an individual may have in a specific situation. LMM learns unstructured data such as communication metrics, activity patterns, demographic information, and content consumption history in depth to model this mindset probabilistically."}
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg mt-4 mb-4">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">
              {language === "ko"
                ? "LLM과의 차별점: '명령'이 아닌 '의도'의 이해"
                : "Difference from LLM: Understanding 'Intent' rather than 'Command'"}
            </h3>
            <p className="text-gray-700">
              {language === "ko"
                ? "LLM 기반의 대화형 AI는 사용자의 '명령(Command)'을 정확히 이해하고 텍스트로 답변하는 데 최적화되어 있습니다. 반면, LMM 기반의 GPR-1은 사용자가 명시적으로 표현하지 않은 잠재적 '의도(Intent)'를 파악하는 데 중점을 둡니다. 예를 들어, 사용자가 '오늘 날씨 좋다'라고 포스팅하면, LLM은 이 문장의 의미를 분석하지만, LMM은 '이 사용자는 지금 긍정적인 감정 상태이며, 야외 활동과 관련된 콘텐츠나 상쾌한 느낌의 광고에 반응할 확률이 높다'는 마인드셋을 추론합니다. 이 추론을 바탕으로 GPR-1은 질문을 기다리지 않고, 관련 콘텐츠와 광고를 자동으로 생성하여 먼저 제안합니다."
                : "Conversational AI based on LLM is optimized to accurately understand the user's 'command (Command)' and answer in text. In contrast, GPR-1 based on LMM focuses on understanding the user's latent 'intent (Intent)' that is not explicitly expressed. For example, when a user posts 'today's weather is good', LLM analyzes the meaning of this sentence, but LMM infers that the user is in a positive emotional state and has a high probability of reacting to content or advertisements related to outdoor activities and refreshing feelings. Based on this inference, GPR-1 automatically generates and proposes relevant content and advertisements without waiting for questions."}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-600 text-center mb-12">
            {language === "ko"
              ? "주요 프로젝트 및 제품 개발"
              : "Key Projects and Product Development"}
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {language === "ko"
              ? "그의 제품 개발 여정은 정보보안 솔루션에서 시작하여, 클라우드 기반 플랫폼 서비스와 AI 및 딥테크 분야로 확장되었습니다. 이 과정에서 그는 아이디어를 현실로 만드는 탁월한 실행력을 입증했습니다"
              : "His product development journey started with information security solutions, expanded to cloud-based platform services, and AI and deep tech fields. During this process, he proved his exceptional execution ability to turn ideas into reality."}
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-6 mb-6">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                {language === "ko"
                  ? 'OTT 플랫폼 혁신 "TiTAN Play"'
                  : "OTT Platform Innovation 'TiTAN Play'"}
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "TCI 저작권 보호 기술을 핵심으로, 창작자 중심의 새로운 미디어 소비 경험을 제공하는 OTT 서비스를 기획하고 출시했습니다."
                  : "As a core technology, we developed an OTT service that provides a new media consumption experience centered on creators, launching 'TiTAN Play'."}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                {language === "ko"
                  ? 'AI 소셜 로봇 "TiTAN AI"'
                  : "AI Social Robot 'TiTAN AI'"}
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "카메라, 스피커, 디스플레이를 탑재하여 가족 구성원과 교감하고 정보를 제공하는 AI 기반 소셜 로봇 시리즈를 개발 및 상용화했습니다."
                  : "Developed and commercialized an AI-based social robot series equipped with a camera, speaker, and display to communicate with family members and provide information."}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                {language === "ko" ? "TiTAN Core" : "TiTAN Core"}
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "플랫폼과 연동되는 다양한 IoT 스마트 홈 기기를 개발 및 상용화하여 콘텐츠 소비를 넘어 일상 생활 공간까지 지능적으로 확장되는 통합적인 플랫폼 생태계를 제공하였습니다."
                  : "Developed and commercialized various IoT smart home devices linked to the platform to provide an integrated platform ecosystem that extends from content consumption to everyday living spaces."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneurial Journey Section */}
      <section id="journey" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-600 text-center mb-12">
            {language === "ko"
              ? "기업가 여정: 엔지니어에서 글로벌 리더로"
              : "Entrepreneurial Journey: From Engineer to Global Leader"}
          </h2>
          <div className="flex flex-row gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                {language === "ko" ? "기술의 기반" : "Foundation of Technology"}
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "소프트웨어 엔지니어로 시작, 네트워크 및 보안 기술 전문가로 성장하며 훗날의 기술 혁신을 위한 견고한 토대를 마련했습니다. 특히 네트워크 통합보안 시스템(UTM) 개발 경험은 그의 기술적 깊이를 더했습니다."
                  : "Started as a software engineer, grew into a network and security technology expert, laying a solid foundation for future technological innovation. In particular, the experience of developing a network unified security system (UTM) deepened his technical depth."}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                {language === "ko" ? "글로벌 도약" : "Global Expansion"}
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "TiTAN Platform 설립 후 미국, 중국, 싱가포르 법인을 7년간 경영하고 누적 550억 투자를 유치하며 글로벌 경영자로서의 역량을 입증했습니다."
                  : "After founding TiTAN Platform, he managed seven overseas subsidiaries for seven years, raised cumulative investments of 550 billion won, and proved his capabilities as a global manager."}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                {language === "ko" ? "비전의 집대성" : "Achievement of Vision"}
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "Addeep Inc. 창업. 지난 25년의 경험과 철학, 기술을 집대성하여 Web 3.0 시대의 차세대 증강 AI 산업 생태계를 구축하기 위한 끊임없는 노력으로 연구개발과 AI산업발전에 기여하고 있습니다."
                  : "After founding TiTAN Platform, he managed seven overseas subsidiaries for seven years, raised cumulative investments of 550 billion won, and proved his capabilities as a global manager."}
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-4">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data} layout="vertical">
                <XAxis type="number" domain={[0, 16]} />
                <YAxis dataKey="name" type="category" width={200} />
                <Tooltip formatter={(value) => [`${value}년`, "기간"]} />
                <Bar dataKey="years" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Accolades Section */}
      <section id="accolades" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === "ko"
              ? "성취와 인정: 탁월함의 유산"
              : "Achievement and Recognition: A Legacy of Excellence"}
          </h2>

          <div className="flex flex-row justify-between gap-8 w-[1200px]">
            <div className="bg-purple-100 p-8 rounded-lg shadow-lg text-center w-[1200px] flex flex-col items-center justify-center">
              <h3 className="text-[80px] font-semibold text-purple-600 mb-4">
                Awards
              </h3>
            </div>

            <div className="flex flex-col gap-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <h3 className="text-lg font-semibold text-purple-600 mb-4">
                    {language === "ko"
                      ? "미국 대통령 기술혁신 및 자원 봉사상"
                      : "U.S. President's Award for Innovation and Volunteerism"}
                  </h3>
                  <p className="text-gray-700">
                    {language === "ko"
                      ? "2017, 미국 백악관"
                      : "2017, White House, USA"}
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <h3 className="text-lg font-semibold text-purple-600 mb-4">
                    {language === "ko"
                      ? "국무총리 표창"
                      : "Prime Minister's Award"}
                  </h3>
                  <p className="text-gray-700">
                    {language === "ko"
                      ? "2017, 중소벤처기업부"
                      : "2017, Ministry of SMEs and Startups"}
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <h3 className="text-lg font-semibold text-purple-600 mb-4">
                    {language === "ko"
                      ? "저작권 기술상"
                      : "Copyright Technology Award"}
                  </h3>
                  <p className="text-gray-700">
                    {language === "ko" ? "2016, ICOTEC" : "2016, ICOTEC"}
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <h3 className="text-lg font-semibold text-purple-600 mb-4">
                    {language === "ko"
                      ? "두뇌역량우수전문기업"
                      : "A company specializing in brain power"}
                  </h3>
                  <p className="text-gray-700">
                    {language === "ko"
                      ? "2017, 산업통상자원부"
                      : "2017, Ministry of Trade, Industry and Energy"}
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold text-purple-600 mb-4">
                  {language === "ko" ? "저서 및 칼럼" : "Books and Columns"}
                </h3>
                <p className="text-gray-700">
                  {language === "ko"
                    ? "『스마트플랫폼 단 하나의 Core』 저술 및 다수 칼럼 기고를 통해 산업의 담론을 형성하는 지적 리더십을 발휘했습니다."
                    : "Through the publication of 'Smart Platform: A Single Core' and numerous column contributions, he has demonstrated intellectual leadership in shaping industry discourse."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="rounded-lg shadow-lg text-center p-12 bg-slate-800">
        <h3 className="text-3xl font-bold text-white mb-4">
          {language === "ko"
            ? "윤재영 Kevin Jaeyoung Yoon"
            : "Kevin Jaeyoung Yoon"}
        </h3>
        <p className="text-gray-400 text-lg">
          {language === "ko"
            ? "기술은 인간을 대체하는 것이 아니라, 인간의 가치를 증강시키고 연결하기 위해 존재해야 합니다."
            : "Technology should not replace humans, but exist to enhance and connect human value."}
        </p>

        <hr className="mt-4 mb-4 border-gray-500" />

        <h3 className="text-xl font-semibold text-white mt-8 mb-4">
          {language === "ko" ? "연락처" : "Contact"}
        </h3>
        <h3 className="text-xl font-semibold text-gray-400 mb-4">
          {language === "ko" ? "addeepcvo@gmail.com" : "addeepcvo@gmail.com"}
        </h3>
        <h3 className="text-md font-medium text-gray-400 mt-8 mb-4">
          {language === "ko"
            ? "© 2025 Kevin Jaeyoung Yoon. All Rights Reserved."
            : "© 2025 Kevin Jaeyoung Yoon. All Rights Reserved."}
        </h3>
      </div>

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
