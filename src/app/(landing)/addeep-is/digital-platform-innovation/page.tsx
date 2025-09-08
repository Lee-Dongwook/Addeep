"use client";

import { useResponsive } from "../../../../lib/useResponsive";
import { YoutubePlayer } from "../../../../components/YoutubePlayer";

const DigitalPlatformInnovation = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div className="stage relative mb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="sticky top-0 h-[70vh]">
            <div className="relative -mt-16 h-full w-[320px] rounded-[40px]">
              <div className="absolute inset-[12px] overflow-hidden rounded-[32px] bg-transparent"></div>
            </div>
          </div>
          <div className="space-y-20">
            <section className="copy">
              <h2 className="mb-4 text-2xl font-semibold text-pink-500">
                Addeep is
              </h2>
              <p className="text-lg leading-relaxed">
                디지털 플랫폼 생태계에서 소셜 미디어 플랫폼과 미디어 콘텐츠
                산업을 둘러싸고 있는 모든 구성원들간 상호 니즈를 스마트하게
                연결하는 통합 플랫폼을 지향합니다.
              </p>
            </section>

            <section className="copy">
              <p className="text-lg leading-relaxed">
                사람과 사람의 연결 가치를 더 재미 있도록 사용자 중심의 시장으로
                혁신합니다.
              </p>
            </section>

            <section className="copy">
              <p className="text-lg leading-relaxed">
                빅데이터와 AI기술로 방대한 정형/비정형 데이터를 효율적으로
                축적하고, 다각적 분석/재해석/재가공을 통해 콘텐츠 시장의
                인적·물적 자원을 연결하고 재배치합니다.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="stage relative mb-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-24 md:grid-cols-2 md:py-32">
        <div className="space-y-[60vh]">
          <section className="copy">
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              Addeep is
            </h2>
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              GPR Innovation
            </h2>
            <p className="text-xl leading-relaxed">
              we aspire to create an integrated platform that smartly connects
              the mutual needs of all members within the social media platform
              and media content industry, within the digital platform ecosystem.
              We innovate in a user-centeric market to make the value of human
              connections even more enjoyable.
            </p>
            <p className="text-xl leading-relaxed">
              We efficiently accumulate vast amounts of structured and
              unstructured data by using big data and AI technologies.
            </p>
            <p className="text-xl leading-relaxed">
              Through multidimensional analysis, reinterpretation, and
              reprocessing, we effectively connect and reallocate all human and
              material resources surrounding the content market.
            </p>
          </section>
        </div>
        <YoutubePlayer videoId="xUG4jmCCZWU" />
      </div>
    </div>
  );
};

export default DigitalPlatformInnovation;
