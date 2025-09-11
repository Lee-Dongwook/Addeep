"use client";

import { useResponsive } from "../../../../lib/useResponsive";
import { YoutubePlayer } from "../../../../components/YoutubePlayer";

const DigitalPlatformInnovation = () => {
  const { isMobile, isTablet } = useResponsive();

  if (isMobile || isTablet) {
    return (
      <div className="stage relative mb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="space-y-20">
            <section className="copy">
              <h2 className="mb-4 text-2xl font-semibold text-pink-500">
                Addeep is
              </h2>
              <h2 className="mb-4 text-2xl font-semibold text-pink-500">
                GPR Innovation
              </h2>
              <YoutubePlayer videoId="xUG4jmCCZWU" />
              <p className="text-xl leading-relaxed mt-8">
                we aspire to create an integrated platform that smartly connects
                the mutual needs of all members within the social media platform
                and media content industry, within the digital platform
                ecosystem. We innovate in a user-centeric market to make the
                value of human connections even more enjoyable.
              </p>
              <p className="text-xl leading-relaxed mt-8">
                We efficiently accumulate vast amounts of structured and
                unstructured data by using big data and AI technologies.
              </p>
              <p className="text-xl leading-relaxed mt-8">
                Through multidimensional analysis, reinterpretation, and
                reprocessing, we effectively connect and reallocate all human
                and material resources surrounding the content market.
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
