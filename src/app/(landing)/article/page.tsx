"use client";

const ArticleData = [
  {
    id: "1",
    uuid: "1",
    createdAt: "2024.10.15",
    title: "AI 기반 솔루션 개발로 디지털 혁신 선도",
    content:
      "차세대 인공지능 기술을 활요한 혁신적인 솔루션을 공개하며, 업계 디지털 전환의 새로운 패러다임을 제시합니다.",
  },
  {
    id: "1",
    uuid: "1",
    createdAt: "2024.07.28",
    title: "AI 기반 솔루션 개발로 디지털 혁신 선도",
    content:
      "차세대 인공지능 기술을 활요한 혁신적인 솔루션을 공개하며, 업계 디지털 전환의 새로운 패러다임을 제시합니다.",
  },
  {
    id: "1",
    uuid: "1",
    createdAt: "2024.01.15",
    title: "AI 기반 솔루션 개발로 디지털 혁신 선도",
    content:
      "차세대 인공지능 기술을 활요한 혁신적인 솔루션을 공개하며, 업계 디지털 전환의 새로운 패러다임을 제시합니다.",
  },
  {
    id: "1",
    uuid: "1",
    createdAt: "2024.01.15",
    title: "AI 기반 솔루션 개발로 디지털 혁신 선도",
    content:
      "차세대 인공지능 기술을 활요한 혁신적인 솔루션을 공개하며, 업계 디지털 전환의 새로운 패러다임을 제시합니다.",
  },
  {
    id: "1",
    uuid: "1",
    createdAt: "2024.01.15",
    title: "AI 기반 솔루션 개발로 디지털 혁신 선도",
    content:
      "차세대 인공지능 기술을 활요한 혁신적인 솔루션을 공개하며, 업계 디지털 전환의 새로운 패러다임을 제시합니다.",
  },
  {
    id: "1",
    uuid: "1",
    createdAt: "2024.01.15",
    title: "AI 기반 솔루션 개발로 디지털 혁신 선도",
    content:
      "차세대 인공지능 기술을 활요한 혁신적인 솔루션을 공개하며, 업계 디지털 전환의 새로운 패러다임을 제시합니다.",
  },
];

const Article = () => {
  return (
    <div className="mb-20 flex flex-col flex-1 items-center">
      <div className="w-full text-center">
        <div className="absolute h-[600px] inset-0 bg-black bg-opacity-60 mt-32 mx-1 rounded-lg" />
        <div className="w-full h-[600px] rounded-lg flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4 items-center justify-center z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-4">
              공시자료
            </h1>
            <h3 className="text-xl font-poppins font-normal text-white">
              투명한 경영정보를 제공합니다.
            </h3>
          </div>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center flex-1 p-12 border border-gray-200 shadow-md rounded-2xl w-1/2 mt-12">
        <div className="mt-12 mb-8 flex flex-col">
          {ArticleData.map((article) => (
            <div key={article.id} className=" flex flex-col gap-4">
              <div
                key={article.id}
                className="mt-2 mb-2 flex flex-col gap-4 p-4"
              >
                <h4 className="text-md text-[#4B5563] font-poppins font-normal">
                  {article.createdAt}
                </h4>
                <h4 className="text-2xl text-[#4B5563] font-poppins font-normal">
                  {article.title}
                </h4>
                <p className="text-md text-[#4B5563] font-poppins font-normal">
                  {article.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Article;
