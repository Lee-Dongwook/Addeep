"use client";

import { useRef, Suspense } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSearchParams } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { useResponsive } from "../../../../lib/useResponsive";

// Image imports
import addeepIsImage from "/public/images/Summary.png";

gsap.registerPlugin(ScrollTrigger);

type SectionProps = {
  children: React.ReactNode; // 왼쪽 텍스트
  imageSrc: string; // 오른쪽 이미지 경로
  imageAlt?: string;
  className?: string;
};

function useVariant(): "ai" | "sns" {
  const sp = useSearchParams();
  const val =
    (
      sp.get("type") ||
      sp.get("mode") ||
      sp.get("view") ||
      sp.get("variant") ||
      sp.get("v")
    )?.toLowerCase() ?? "";

  if (val === "sns") return "sns";
  if (val === "ai") return "ai";
  if (sp.has("sns")) return "sns"; // ?sns
  if (sp.has("ai")) return "ai"; // ?ai
  return "ai"; // default
}

function useSummaryGsap(
  root: React.RefObject<HTMLDivElement | null>,
  phone: React.RefObject<HTMLDivElement | null>,
  frames: React.MutableRefObject<HTMLImageElement[]>,
  copyClass: string
) {
  useGSAP(
    () => {
      // pin
      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: "bottom bottom",
        pin: phone.current,
        pinSpacing: true,
        anticipatePin: 1,
      });

      // copy reveal + frame crossfade
      const copies = gsap.utils.toArray<HTMLElement>(`.${copyClass}`);
      copies.forEach((el, i) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          }
        );

        const imgs = frames.current;
        const target = imgs[i];
        if (target) {
          gsap.fromTo(
            target,
            { autoAlpha: 0 },
            {
              autoAlpha: 1,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 70%",
                end: "top 30%",
                toggleActions: "play none none reverse",
              },
              onStart: () => {
                imgs.forEach((img, idx) => {
                  if (idx !== i) gsap.set(img, { autoAlpha: 0 });
                });
              },
            }
          );
        }
      });
    },
    { scope: root }
  );
}

function Section({
  children,
  imageSrc,
  imageAlt = "",
  className = "",
}: SectionProps) {
  const { isMobile } = useResponsive();

  if (isMobile) {
    <section className={`w-full bg-white ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px]">
          <div className="p-2">
            <p className="text-2xl leading-relaxed tracking-[-0.01em] [text-wrap:pretty] break-keep text-gray-400">
              {children}
            </p>
          </div>

          <div className="order-first h-[340px] w-full overflow-hidden rounded-xl lg:order-none lg:h-[520px]">
            <div className="relative h-full w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                className="object-cover"
                width={420}
                height={520}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
  return (
    <section className={`w-full bg-white ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        {/* 2열: 텍스트 / 이미지 */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px]">
          {/* text */}
          <div className="p-2">
            <p className="text-2xl leading-relaxed tracking-[-0.01em] [text-wrap:pretty] break-keep text-gray-400">
              {children}
            </p>
          </div>

          {/* image */}
          <div className="order-first h-[340px] w-full overflow-hidden rounded-xl lg:order-none lg:h-[520px]">
            <div className="relative h-full w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                className="object-cover"
                width={420}
                height={520}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryAI() {
  const { isMobile } = useResponsive();
  const router = useRouter();
  const root = useRef<HTMLDivElement>(null);
  const phone = useRef<HTMLDivElement>(null);
  const frames = useRef<HTMLImageElement[]>([]);

  useSummaryGsap(root, phone, frames, "copy-ai");

  if (isMobile) {
    return (
      <div className="stage relative mb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-24">
          <div className="sticky top-0 h-[70vh]">
            <div className="relative -mt-16 h-full w-[320px] rounded-[40px]">
              <div className="absolute inset-[12px] overflow-hidden rounded-[32px] bg-transparent">
                {["1", "2", "3", "4"].map((src, i) => (
                  <Image
                    key={i}
                    src="https://storage.googleapis.com/assets-addeep/images/Summary.png"
                    ref={(el) => {
                      if (el) frames.current[i] = el;
                    }}
                    className="absolute inset-0 h-full w-full object-cover opacity-0"
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>
          {/* 우측: 카피 섹션들 */}
          <div className="space-y-20">
            <section className="copy-ai">
              <h2 className="mb-4 text-2xl font-semibold text-pink-500">
                Addeep GPR 개요 및 비전
              </h2>
              <p className="text-lg leading-relaxed">
                Addeep은 WEB 3.0 기반의 혁신적인 소셜 미디어 사업을 완성하기
                위한 핵심 기술로 'Addeep-GPR-1' (Generative Pre-trained
                Recommender) AI를 개발하고 있습니다. 이는 기존 대화형 AI 모델에
                CNN 및 RNN 차세대 기술을 통합하여 독자적으로 고안된 것으로,
                Addeep의 증강 AI(Augmented AI) 기술의 기반을 이룹니다.
              </p>
            </section>

            <section className="copy-ai">
              <h2 className="mb-4 text-2xl font-semibold text-pink-500">
                e-Commerce PIMS
              </h2>
              <h2 className="mb-4 text-2xl font-semibold text-pink-500">
                #Target커머스 #현금보상
              </h2>
              <p className="text-lg leading-relaxed">
                Addeep의 GPR-1은 단순한 AI 모델을 넘어, 사용자에게 명시적인 입력
                없이도 개인화된 콘텐츠를 자동으로 생성하고 추천하는데 중점을 둔
                '비대화형 완전 자동 생성형 AI' 라는 점에서 차별점을 가집니다.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={root} className="stage relative mb-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-24 md:grid-cols-2 md:py-32">
        {/* 좌측: 고정될 폰 목업 */}
        <div ref={phone} className="sticky top-0 h-[70vh]">
          <div className="relative -mt-16 h-full w-[320px] rounded-[40px]">
            {/* 프레임들 (섹션 수만큼) */}
            <div className="absolute inset-[12px] overflow-hidden rounded-[32px] bg-transparent">
              {["1", "2"].map((src, i) => (
                <Image
                  key={i}
                  src={addeepIsImage}
                  ref={(el) => {
                    if (el) frames.current[i] = el;
                  }}
                  className="absolute inset-0 h-full w-full object-cover opacity-0"
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>

        {/* 우측: 카피 섹션들 */}
        <div className="space-y-[60vh]">
          <section className="copy-ai">
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              Addeep GPR 개요 및 비전
            </h2>
            <button
              className="hidden mt-4 mb-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
              onClick={() => router.push("/addeep-is/summary/gpr")}
            >
              내용 더보기
            </button>
            <p className="text-2xl leading-relaxed">
              Addeep은 WEB 3.0 기반의 혁신적인 소셜 미디어 사업을 완성하기 위한
              핵심 기술로 'Addeep-GPR-1' (Generative Pre-trained Recommender)
              AI를 개발하고 있습니다. 이는 기존 대화형 AI 모델에 CNN 및 RNN
              차세대 기술을 통합하여 독자적으로 고안된 것으로, Addeep의 증강
              AI(Augmented AI) 기술의 기반을 이룹니다.
            </p>
          </section>

          <section className="copy-ai">
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              e-Commerce PIMS
            </h2>
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              #Target커머스 #현금보상
            </h2>
            <p className="text-2xl leading-relaxed">
              Addeep의 GPR-1은 단순한 AI 모델을 넘어, 사용자에게 명시적인 입력
              없이도 개인화된 콘텐츠를 자동으로 생성하고 추천하는데 중점을 둔
              '비대화형 완전 자동 생성형 AI' 라는 점에서 차별점을 가집니다.
            </p>
          </section>
          <section className="copy-ai">
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              e-Commerce PIMS
            </h2>
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              #Target커머스 #현금보상
            </h2>
            <p className="text-2xl leading-relaxed">
              Addeep의 GPR-1은 단순한 AI 모델을 넘어, 사용자에게 명시적인 입력
              없이도 개인화된 콘텐츠를 자동으로 생성하고 추천하는데 중점을 둔
              '비대화형 완전 자동 생성형 AI' 라는 점에서 차별점을 가집니다.
            </p>
          </section>
          <section className="copy-ai">
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              e-Commerce PIMS
            </h2>
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              #Target커머스 #현금보상
            </h2>
            <p className="text-2xl leading-relaxed">
              Addeep의 GPR-1은 단순한 AI 모델을 넘어, 사용자에게 명시적인 입력
              없이도 개인화된 콘텐츠를 자동으로 생성하고 추천하는데 중점을 둔
              '비대화형 완전 자동 생성형 AI' 라는 점에서 차별점을 가집니다.
            </p>
          </section>
          <section className="copy-ai">
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              e-Commerce PIMS
            </h2>
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              #Target커머스 #현금보상
            </h2>
            <p className="text-2xl leading-relaxed">
              Addeep의 GPR-1은 단순한 AI 모델을 넘어, 사용자에게 명시적인 입력
              없이도 개인화된 콘텐츠를 자동으로 생성하고 추천하는데 중점을 둔
              '비대화형 완전 자동 생성형 AI' 라는 점에서 차별점을 가집니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

function SummarySNS() {
  const root = useRef<HTMLDivElement>(null);
  const phone = useRef<HTMLDivElement>(null);
  const frames = useRef<HTMLImageElement[]>([]);

  useSummaryGsap(root, phone, frames, "copy-sns");
  return (
    <div ref={root} className="stage relative mb-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-24 md:grid-cols-2 md:py-32">
        <div ref={phone} className="sticky top-0 h-[70vh]">
          <div className="relative -mt-16 h-full w-[320px] rounded-[40px]">
            <div className="absolute inset-[12px] overflow-hidden rounded-[32px] bg-transparent">
              {["1", "2", "3", "4", "5"].map((src, i) => (
                <Image
                  key={i}
                  src="https://storage.googleapis.com/assets-addeep/images/Summary.png"
                  ref={(el) => {
                    if (el) frames.current[i] = el;
                  }}
                  className="absolute inset-0 h-full w-full object-cover opacity-0"
                  alt=""
                  priority
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-[60vh]">
          <section className="copy-sns">
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              Addeep GPR AI 기반의 혁신적인 보상형 SNS 플랫폼
            </h2>
            <p className="text-2xl leading-relaxed">
              Addeep은 단순한 SNS 서비스를 넘어, 서비스 이용자와 콘텐츠 창작자인
              크리에이터/인플루언서에게 획기적인 가치를 제공합니다. 저희
              서비스는 'Addeep-GPR-1' (Generative Pre-trained Recommender) AI
              기술을 핵심으로 하여, 이용자가 서비스를 이용하기만 해도 Addeep GPR
              AI의 정교한 분석을 통해 최적화된 리워드 캐시가 적립되어 현금처럼
              사용할 수 있도록 설계되었습니다.
            </p>
          </section>

          <section className="copy-sns">
            <p className="text-2xl leading-relaxed">
              광고주, 플랫폼 사업자, 이용자, 그리고 크리에이터/인플루언서 등
              모든 참여자에게 리워드 캐시가 적립되는 혁신적인 구조를 통해,
              Addeep을 이용하면 할수록 경제적 수익을 창출하며 모두가 이익을
              공유할 수 있습니다.
            </p>
          </section>

          <section className="copy-sns">
            <p className="text-2xl leading-relaxed">
              기존 플랫폼 생태계에서 이용자는 플랫폼 사업자에게 종속되어 어떠한
              보상이나 수익 실현도 기대하기 어려웠습니다. Addeep은 이러한
              불균형을 해소하고, 이용자와 참여자 중심의 보상형 광고 서비스를
              기반으로 하는 SNS 플랫폼을 전 세계 이용자에게 선보입니다.
            </p>
          </section>

          <section className="copy-sns">
            <p className="text-2xl leading-relaxed">
              Addeep의 핵심은 Addeep GPR AI의 강화된 예측 및 생성 능력, 차별화된
              빅데이터 분석, 그리고 개선된 타겟 광고 마케팅 서비스에
              있습니다.Addeep GPR AI는 사용자의 명시적 입력 없이도 개인화된
              콘텐츠를 자동으로 생성하고 추천하며, 이를 통해 광고주의 광고비용을
              참여자 모두에게 더욱 공정하고 효율적으로 수익 배분하는 플랫폼
              생태계를 구축합니다. 이러한 혁신적인 AI 기반 수익 쉐어 모델을
              통해, 기존 플랫폼 사업자들의 광고 방식 대비 타겟 광고 적중률이
              100%에 수렴하는 시장 혁신이 가능해집니다. 이는 광고 효율을
              극대화하고, 동시에 사용자 경험을 향상시키는 획기적인 변화를
              의미합니다.
            </p>
          </section>

          <section className="copy-sns">
            <p className="text-2xl leading-relaxed">
              또한, Addeep GPR AI는 딥러닝 AI 기술을 한 차원 발전시켜 클라우드
              방식의 데이터 플랫폼 기술을 제공함으로써, 다양한 산업 고객이
              도메인에 특화된 맞춤형 서비스들을 더욱 편리하게 이용할 수 있도록
              최적화되었습니다. 크리에이터의 콘텐츠 창작 소유권 보호를 위해
              Addeep GPR AI의 콘텐츠 분석 및 식별 능력을 활용한 ACI(Addeep
              Contents Identifier) 콘텐츠 보호 기술과 블록체인 보안 기술을
              적용하여 IP 보호를 강화했습니다. 이를 통해 콘텐츠 창작자들은
              Addeep 플랫폼 내에서 보다 자유롭고 안전하게 콘텐츠를 거래할 수
              있습니다.
            </p>
          </section>
          <section className="copy-sns">
            <p className="text-2xl leading-relaxed">
              Addeep은 이러한 새로운 플랫폼 생태계를 대한민국을 시작으로 전
              세계인이 이용할 수 있도록 확장시켜 나갈 것입니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

function PageContent() {
  const variant = useVariant();
  return variant === "sns" ? <SummarySNS /> : <SummaryAI />;
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
