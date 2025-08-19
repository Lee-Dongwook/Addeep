"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PlatformToEarn = () => {
  const root = useRef<HTMLDivElement>(null);
  const phone = useRef<HTMLDivElement>(null);
  const frames = useRef<HTMLImageElement[]>([]);

  useGSAP(
    () => {
      // 1) 좌측 폰 고정(pin)
      ScrollTrigger.create({
        trigger: ".stage",
        start: "top top",
        end: "bottom bottom",
        pin: phone.current,
        pinSpacing: true,
        anticipatePin: 1, // 급스크롤 깜빡임 방지
      });

      // 2) 섹션 등장 애니메이션 (우측 카피)
      gsap.utils.toArray<HTMLElement>(".copy").forEach((el, i) => {
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
              // markers: true, // 디버깅 시
            },
          }
        );

        // 3) 섹션 진입 시 폰 프레임 교체 (crossfade)
        const imgs = frames.current;
        if (imgs[i]) {
          gsap.fromTo(
            imgs[i],
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
                // 이전 프레임들 숨기기
                imgs.forEach((img, idx) => {
                  if (idx !== i) gsap.set(img, { autoAlpha: 0 });
                });
              },
            }
          );
        }
      });

      // 4) 전체 구간 스크럽 타임라인(옵션): 배경색 전환 등 추가
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".stage",
          start: "top top",
          end: "+=3000", // 길이 조절
          scrub: true,
        },
      });
      // tl.to(".stage", { backgroundColor: "#f9fafb" }, 0); // 필요시
    },
    { scope: root }
  );

  return (
    <div ref={root} className="stage relative">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-24 md:grid-cols-2 md:py-32">
        {/* 좌측: 고정될 폰 목업 */}
        <div ref={phone} className="sticky top-24 h-[70vh]">
          <div className="relative mx-auto h-full w-[320px] rounded-[40px] border border-gray-200 shadow-lg">
            {/* 폰 베젤 배경 */}
            <img
              src="/phone/bezel.png"
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full select-none"
            />
            {/* 프레임들 (섹션 수만큼) */}
            <div className="absolute inset-[12px] overflow-hidden rounded-[32px] bg-black">
              {[
                "/media/frame1.jpg",
                "/media/frame2.jpg",
                "/media/frame3.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
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
          <section className="copy">
            <h2 className="mb-4 text-sm font-semibold text-pink-500">
              Addeep platform to Earn
            </h2>
            <p className="text-2xl leading-relaxed">
              Addeep은 보다 빠른 서비스 확장과 효율적인 이용자 만족도를 높이기
              위해 이용자 모두에게 리워드 캐시를 제공하여 모든 이용자에게 수익을
              실현 할 수 있는 보상 서비스를 혁신하고 개선하였습니다. 서비스
              이용자의 유연한 확보로 광고주의 타겟 광고를 고객별 맞춤형
              광고서비스 제공과 데이터 기반의 CRM으로 한층 더 높은 수준의 디지털
              마케팅을 제공합니다. 빠른 이용자 만족도 향상과 소셜 플랫폼 확장을
              통하여 모든 이용자가 협업 할 수 있는 글로벌 플랫폼으로 성장
              발전합니다. 서비스 향상과 이용자 만족도를 높이기 위해 Augmented
              AI와 Ads Data, CRM 그리고 ACI까지 확장된 플랫폼 서비스를
              제공합니다.
            </p>
          </section>

          <section className="copy">
            <h2 className="mb-4 text-sm font-semibold text-pink-500">
              Adertiser & Digital Marketing
            </h2>
            <p className="text-2xl leading-relaxed">
              광고주는 타겟 광고율을 높이기 위해 이용자 맞춤형 타겟 광고
              설정으로 한차원 높은 고객 확보와 지속적인 CRM운영을 지원합니다.
              광고 대상 이용자와 고객별 빅데이터 패턴 분석을 통하여 맞춤형 AI
              광고/홍보서비스를 제공하여 재방문과 매출 향상에 기여합니다. 고객의
              데이터는 광고주의 자산입니다. 광고주의 제품 생산.유통.판매등 모든
              과정을 정밀하게 분석하여 신제품 출시 및 상품개발을 지속적으로
              돕습니다. 디지털 마케팅의 핵심은 차원 높은 데이터 분석입니다.
              우리는 광고의 효율성과 고객관리 중요성을 Addeep Ads에서 통합관리
              할 수 있도록 제공하고 발전시킵니다
            </p>
          </section>
          <section className="copy">
            <h2 className="mb-4 text-sm font-semibold text-pink-500">
              Service User's
            </h2>
            <p className="text-2xl leading-relaxed">
              다양한 소셜 미디어 플랫폼과 비즈니스 플랫폼이 존재합니다. 많은
              이용자는 강력한 플랫폼 사업자에 종속되는 이용자는 각기 다른
              플랫폼서비스 정책에 의해 비용을 지불하고 있습니다. 하지만
              이용자에게 어떠한 보상과 수익창출을 지속적으로 발생시켜주는 플랫폼
              채널은 아직 존재하지 않습니다.  Addeep은 이용자 모두에게 지속적인
              수익을 만들 수 있도록 서비스를 발전시키고 서비스를 이용하는 참여자
              모두가 다양한 수익 채널로 연결될 수 있도록 독창적인 플랫폼
              생태계를 제공합니다. 이용자 모두가 유용한 정보와 타겟 광고 서비스
              기반으로 이용자에게 지속 가능한 수익모델을 제시합니다. 우리는
              이용자 모두에게 새로운 소셜 미디어 환경을 조성하고 협력합니다.
            </p>
          </section>
          <section className="copy">
            <h2 className="mb-4 text-sm font-semibold text-pink-500">
              Creator & Influencer
            </h2>
            <p className="text-2xl leading-relaxed">
              Addeep Cons는 광고주의 디지털 광고 서비스를 제공하기 위해
              Addepp콘텐츠의 디자인 요구사항을 반영됩니다. 크리에이터와
              인플루언서가 참여하여 창의적이고 흥미로운 애딥(Shorts Video, Meme,
              emoticon, Image)콘텐츠가 개발되어, 이용자에게 다양한 형태의 광고
              서비스가 제공됩니다. 다양한 콘텐츠 창작과 서비스 반영으로
              창작자에게 일정한 수익이 보장되고 지속 가능한 보상이 이루어집니다.
              우리는 크리에이터와 인플루언서에게 더 많은 혜택을 지원함으로써
              참여자 모두가 조화로운 플랫폼 생태계를 만들어 갈 것입니다.또한
              모든 창작자에게 콘텐츠 소유권과 권리보장을 위해 ACI 콘텐츠
              보호기술로 창작자의 IP보호 서비스를 제공하여 IP관리를 돕습니다.
            </p>
          </section>
          <section className="copy">
            <h2 className="mb-4 text-sm font-semibold text-pink-500">
              Addeep Content's
            </h2>
            <p className="text-2xl leading-relaxed">
              개인 소셜 미디어 환경에서 MZ세대중심으로 Shorts, meme,
              emoticon등의 디지털 콘텐츠 사용은 대중화 되었습니다.
              커뮤니케이션과 정보전달의 방법이 다양해지면서 디지털 콘텐츠 사용은
              우리 일상에 자리 잡았습니다. Addeep은 이용자와 이용자 사이에
              보내고 받을 수 있도록 쉽고 편리하게 이용간 징검다리 역할로
              연결하여 이용자 모두가 자유롭게 소통하면서 지속적인 수익을
              실현시켜 줍니다. 다양한 산업분야의 디지털 광고 서비스를 위해
              광고주의 광고를 애딥 콘텐츠에 결합하여 이용자가 애딥 콘텐츠를
              구매하는 방식이 아니라, 이용자는 무료 사용과 함께 이용자 모두가
              창작자로 참여하여 자유롭게 소통하며, 애딥 콘텐츠를 만들어 갑니다.
              애딥 콘텐츠를 개발하는 창작자에게 우리는 다양한디지털 콘텐츠
              생태계를 만들어 갑니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PlatformToEarn;
