"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function JaeyoungPage() {
  const [activeSection, setActiveSection] = useState("hero");
  const [language, setLanguage] = useState("ko");

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
        slogan: '"We Bridge Values "',
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
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://placehold.co/1920x1080/C4B5FD/FFFFFF?text=Dynamic+AI+Video)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-white/80" aria-hidden />
        <div className="relative max-w-7xl mx-auto py-20 md:py-32">
          <div className="text-center">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
              <img
                src="https://storage.googleapis.com/assets-addeep/images/JaeyoungProfile.png"
                alt="Kevin Jaeyoung Yoon"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {currentContent.hero.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-6">
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {currentContent.summary.title}
            </h2>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {currentContent.summary.subTitle}
            </h2>
            <div className="text-xl text-left text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {Array.isArray(currentContent.summary.description)
                ? currentContent.summary.description.map((sum, idx) => (
                    <ol key={idx}>{sum}</ol>
                  ))
                : currentContent.summary.description}
            </div>
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
            {language === "ko"
              ? "성취와 인정: 탁월함의 유산"
              : "Achievement and Recognition: A Legacy of Excellence"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                Awards
              </h3>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
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
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                {language === "ko" ? "국무총리 표창" : "Prime Minister's Award"}
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "2017, 중소벤처기업부"
                  : "2017, Ministry of SMEs and Startups"}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                {language === "ko"
                  ? "저작권 기술상"
                  : "Copyright Technology Award"}
              </h3>
              <p className="text-gray-700">
                {language === "ko" ? "2016, ICOTEC" : "2016, ICOTEC"}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
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
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                {language === "ko" ? "저서 및 칼럼" : "Books and Columns"}
              </h3>
              <p className="text-gray-700">
                {language === "ko"
                  ? "『스마트플랫폼 단 하나의 Core』 저술 및 다수 칼럼 기고를 통해 산업의 담론을 형성하는 지적 리더십을 발휘했습니다."
                  : "He has demonstrated intellectual leadership in shaping industry discourse through his work, 'Smart Platform: A Single Core,' and numerous column contributions."}
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
