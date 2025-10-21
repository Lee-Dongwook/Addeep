"use client";

const NewsData = [
  {
    id: "1",
    uuid: "1",
    title: "AI 기반 솔루션 개발로 디지털 혁신 선도",
    content:
      "차세대 인공지능 기술을 활요한 혁신적인 솔루션을 공개하며, 업계 디지털 전환의 새로운 패러다임을 제시합니다.",
  },
];

const News = () => {
  return (
    <div className="mb-20 flex flex-col flex-1">
      <div className="w-full text-center">
        <div className="absolute h-[600px] inset-0 bg-black bg-opacity-60 mt-32 mx-1 rounded-lg" />
        <div className="w-full h-[600px] rounded-lg flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4 items-center justify-center z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-4">
              보도자료
            </h1>
            <div>
              <h3 className="text-xl font-poppins font-normal text-white">
                애딥의 최신 소식과 중요한 발표를 확인하세요.
              </h3>
              <h3 className="text-xl font-poppins font-normal text-white">
                투명하고 신속한 정보 공유를 통해 더 나은 소통을 만들어갑니다.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col flex-1 p-28">
        <div className="mt-12 mb-8 grid grid-cols-3 gap-4">
          {NewsData.map((news) => (
            <div
              className="max-w-[500px] border border-gray-200 shadow-md rounded-lg p-8 flex flex-col gap-4"
              key={news.id}
            >
              <h4 className="text-2xl text-[#4B5563] font-poppins font-normal">
                {news.title}
              </h4>
              <p className="text-md text-[#4B5563] font-poppins font-normal">
                {news.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
