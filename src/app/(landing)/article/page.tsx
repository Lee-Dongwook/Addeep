"use client";

const ArticleData = [
  {
    id: "1",
    uuid: "1",
    createdAt: "2024.10.15",
    title: "2024년 3분기 실적발표",
  },
  {
    id: "2",
    uuid: "2",
    createdAt: "2024.07.28",
    title: "2024년 2분기 재무제표",
  },
  {
    id: "3",
    uuid: "3",
    createdAt: "2024.03.29",
    title: "정기주주총회 소집공고",
  },
  {
    id: "4",
    uuid: "4",
    createdAt: "2024.02.14",
    title: "2023년 연간 실적발표",
  },
  {
    id: "5",
    uuid: "5",
    createdAt: "2023.08.15",
    title: "지속가능경영보고서",
  },
  {
    id: "6",
    uuid: "6",
    createdAt: "2023.07.28",
    title: "2023년 2분기 재무제표",
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

      <section className="flex flex-col flex-1 p-12 w-1/2 mt-12">
        <div className="flex flex-row items-center justify-between">
          <input />
          <select />
        </div>
        <div className="mt-12 mb-8 flex flex-col border border-gray-200 shadow-md rounded-2xl p-6">
          {ArticleData.map((article) => (
            <div
              key={article.id}
              className="flex flex-row items-center justify-between gap-4"
            >
              <div
                key={article.id}
                className="mt-2 mb-2 flex flex-row items-center gap-4 p-4"
              >
                <h4 className="text-md text-[#4B5563] font-poppins font-normal w-24">
                  {article.createdAt}
                </h4>
                <h4 className="text-2xl text-[#4B5563] font-poppins font-normal">
                  {article.title}
                </h4>
              </div>
              <div className="flex flex-row items-center gap-2">
                <h4>PDF</h4>
                <h4>다운로드</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Article;
