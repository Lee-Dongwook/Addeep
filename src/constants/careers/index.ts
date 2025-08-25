type InfoCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export const sectionData = [
  {
    text: ["우리를 도와주세요.", "여러분의 창의력과", "잠재력이 필요합니다."],
    image: "/images/about-us-header.png",
  },
];

export const items: InfoCardProps[] = [
  {
    icon: "📍",
    title: "회사 위치",
    description:
      "서울 강남에 본사를 두고 있습니다. 우리는 세계 도시에서 성장하고 발전합니다.",
  },
  {
    icon: "🏠",
    title: "원격근무 지원",
    description:
      "근무환경 개선과 함께 원격근무를 지원하여 구성원 모두의 업무 효율을 극대화하고 있습니다.",
  },
  {
    icon: "💰",
    title: "급여 및 4대 보험",
    description:
      "경쟁력 있는 급여, 4대 보험, 인센티브 등 다양한 복지를 제공합니다.",
  },
  {
    icon: "⚖️",
    title: "워라밸",
    description:
      "유연한 근무시간과 넉넉한 휴가, 가족 중심 복지 등 건강한 일·생활 균형을 지원합니다.",
  },
];
