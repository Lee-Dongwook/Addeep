"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useResponsive } from "../../../../lib/useResponsive";
import { NEXT_PUBLIC_CDN_BASE } from "../../../../lib/env";

gsap.registerPlugin(ScrollTrigger);

const DigitalPlatformInnovation = () => {
  const { isMobile } = useResponsive();
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

  if (isMobile) {
    return (
      <div className="stage relative mb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="sticky top-0 h-[70vh]">
            <div className="relative -mt-16 h-full w-[320px] rounded-[40px]">
              <div className="absolute inset-[12px] overflow-hidden rounded-[32px] bg-transparent">
                {["1", "2", "3", "4"].map((src, i) => (
                  <Image
                    key={i}
                    src="https://storage.googleapis.com/assets-addeep/images/addeep-is-image.png"
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
          {/* 우측: 카피 섹션들 */}
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
    <div ref={root} className="stage relative mb-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-24 md:grid-cols-2 md:py-32">
        {/* 좌측: 고정될 폰 목업 */}
        <div ref={phone} className="sticky top-0 h-[70vh]">
          <div className="relative -mt-16 h-full w-[320px] rounded-[40px]">
            {/* 프레임들 (섹션 수만큼) */}
            <div className="absolute inset-[12px] overflow-hidden rounded-[32px] bg-transparent">
              {["1", "2", "3", "4"].map((src, i) => (
                <Image
                  key={i}
                  src="https://storage.googleapis.com/assets-addeep/images/addeep-is-image.png"
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
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              Addeep is
            </h2>
            <p className="text-2xl leading-relaxed">
              디지털 플랫폼 생태계에서 소셜 미디어 플랫폼과 미디어 콘텐츠 산업을
              둘러싸고 있는 모든 구성원들간 상호 니즈를 스마트하게 연결하는 통합
              플랫폼을 지향합니다.
            </p>
          </section>

          <section className="copy">
            <p className="text-2xl leading-relaxed">
              사람과 사람의 연결 가치를 더 재미 있도록 사용자 중심의 시장으로
              혁신합니다.
            </p>
          </section>

          <section className="copy">
            <p className="text-2xl leading-relaxed">
              빅데이터와 AI기술로 방대한 정형/비정형 데이터를 효율적으로
              축적하고, 다각적 분석/재해석/재가공을 통해 콘텐츠 시장의 인적·물적
              자원을 연결하고 재배치합니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DigitalPlatformInnovation;
