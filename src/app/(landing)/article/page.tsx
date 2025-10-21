"use client";
import { useMemo, useState } from "react";

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
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedYear, setSelectedYear] = useState("전체연도");

  const yearOptions = useMemo(() => {
    const years = Array.from(
      new Set(ArticleData.map((a) => a.createdAt.slice(0, 4)))
    );
    return ["전체연도", ...years.sort((a, b) => Number(b) - Number(a))];
  }, []);

  const filteredArticles = useMemo(() => {
    return ArticleData.filter((article) => {
      const year = article.createdAt.slice(0, 4);
      const matchesYear = selectedYear === "전체연도" || year === selectedYear;
      const matchesKeyword =
        article.title.includes(searchKeyword) ||
        article.createdAt.includes(searchKeyword) ||
        year.includes(searchKeyword);
      return matchesYear && matchesKeyword;
    });
  }, [searchKeyword, selectedYear]);

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
        <div className="flex flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="검색 (연도 또는 제목)"
            className="border border-gray-300 rounded-lg px-4 py-2 w-2/3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-12 mb-8 flex flex-col border border-gray-200 shadow-md rounded-2xl p-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div
                key={article.id}
                className="flex flex-row items-center justify-between gap-4 py-4"
              >
                <div className="flex flex-row items-center gap-4">
                  <h4 className="text-md text-[#4B5563] font-poppins font-normal w-24">
                    {article.createdAt}
                  </h4>
                  <h4 className="text-xl text-[#4B5563] font-poppins font-normal">
                    {article.title}
                  </h4>
                </div>
                <div className="flex flex-row items-center gap-2 text-indigo-600 font-medium cursor-pointer">
                  <span>PDF</span>
                  <span>다운로드</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-8">
              검색 결과가 없습니다.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Article;
