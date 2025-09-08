"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSearchParams } from "next/navigation";
import { useResponsive } from "../../../../lib/useResponsive";

gsap.registerPlugin(ScrollTrigger);

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

function SummaryAI() {
  const { isMobile } = useResponsive();
  const router = useRouter();

  if (isMobile) {
    return (
      <div className="flex flex-col gap-8 p-4">
        <div className="space-y-20">
          <section className="copy-ai">
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              Addeep GPR 개요 및 비전
            </h2>
            <p className="text-lg leading-relaxed">
              Addeep은 WEB 3.0 기반의 혁신적인 소셜 미디어 사업을 완성하기 위한
              핵심 기술로 'Addeep-GPR-1' (Generative Pre-trained Recommender)
              AI를 개발하고 있습니다. 이는 기존 대화형 AI 모델에 CNN 및 RNN
              차세대 기술을 통합하여 독자적으로 고안된 것으로, Addeep의 증강
              AI(Augmented AI) 기술의 기반을 이룹니다. Addeep의 GPR-1은 단순한
              AI 모델을 넘어, 사용자에게 명시적인 입력 없이도 개인화된 콘텐츠를
              자동으로 생성하고 추천하는데 중점을 둔 '비대화형 완전 자동 생성형
              AI'라는 점에서 차별점을 가집니다. Addeep GPR AI는 독보적인 기술적
              범위를 통해 경쟁 우위를 확보합니다. 다차원 사용자 데이터 수집 및
              LMM 학습: Addeep은 자체 소셜 미디어 플랫폼인 Addeep SNS를 통해
              소통 지수(대화 상대, 내용, 빈도, 콘텐츠 공유/추천, 리뷰/댓글 등),
              활동 패턴(좋아요, 관심 콘텐츠, 소비 패턴 등), 인구통계학적
              데이터(국가/지역, 성별, 나이, 언어 등)의 세 가지 개인화 데이터를
              지속적으로 수집합니다.
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
              이 데이터는 Addeep의 독자적인 LMM(Large Mind-mining Model)에
              지속적으로 학습되어 사용자의 마인드셋을 깊이 이해합니다. 이는 기존
              AI 모델의 LLM(Large Language Model)이 언어 데이터에 집중하는 것과
              달리, 사용자의 '생각'과 '의도'를 마이닝하는데 특화되어 있다는
              점에서 혁신적입니다. 비대화형 완전 자동 생성형 AI 구현: 기존
              대화형 AI가 사용자 입력 기반의 생성형 AI인 반면, Addeep GPR-1은
              사용자 입력이 없는 완전 자동 생성형 AI를 구현합니다. 이는
              강화학습(Reinforced training)으로 지속적으로 보정되는 Deep neural
              network를 통해 가능하며, 기존 AI 모델의 기반 위에 확장된 자체 AI
              모델을 구축합니다. 이로써 사용자는 복잡한 입력 없이도 개인화된
              콘텐츠를 즉각적으로 받아볼 수 있습니다.
            </p>
          </section>
          <section className="copy-ai">
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              ACT (Addeep Automatic Content Convergence Technology):
            </h2>
            <p className="text-lg leading-relaxed">
              ACT는 Addeep Augmented AI 기반의 콘텐츠 자동 융합/생성 기술로,
              Addeep의 A-GPR 추론 모델이 적용된 비대화형 생성형 AI 기술입니다.
              다차원 학습된 개인의 마인드셋 데이터에 기반하여 개인화 맞춤형
              콘텐츠 및 광고를 자동으로 생성하고 매칭합니다. 이 기술은 일반
              이용자, 크리에이터, 광고주 등 Addeep 플랫폼 생태계 내 모든
              참여자들이 생성한 이미지, 동영상, 음원, 이모티콘, 밈 등 다양한
              멀티 포맷 콘텐츠를 ACT AI 엔진이 분해/융합하여 사용자 맞춤형
              콘텐츠를 자동 재생성/배포합니다. 특히 'Deep Blend'라는 자체 정의된
              콘텐츠 AI 기술을 통해 복잡한 저작 도구 없이도 사용자가 의도하는
              콘텐츠를 완전 자동 재생성하여 배포/공유함으로써 WEB 3.0의 확장형
              플랫폼 서비스를 현실화합니다. Deep Blend 프로세스는 멀티 포맷
              콘텐츠 데이터의 메타데이터 생성/축적, A-GPR 모델을 통한 사용자
              마인드셋 모델 생성, 사용자 관심사 추출, 기초 콘텐츠 후보군 선정,
              콘텐츠 분해 및 특징점 추출, 재조합, 그리고 사용자 맞춤형 추천으로
              이루어집니다.
            </p>
          </section>
          <section className="copy-ai">
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              ACT (Addeep Automatic Content Convergence Technology):
            </h2>
            <p className="text-lg leading-relaxed">
              Addeep GPR AI는 '생성(Generation) – 승인(Confirmation)' 모델을
              기반으로 다양한 혁신적인 서비스를 제공합니다. 콘텐츠 생성 자동화:
              이미지, 밈 콘텐츠, 감정 이모티콘 등 사용자 콘텐츠를 자동으로
              생성하고 추천하며, 사용자 승인 시 활성화됩니다. 광고 생성 자동화:
              콘텐츠와 광고를 자동으로 매칭하여 Addeep 콘텐츠를 생성 및
              추천하며, 사용자 승인 시 활성화됩니다. 거래 자동화: 콘텐츠
              판매/구매, 상품 판매/구매 트랜잭션을 자동으로 생성 및 추천하며,
              사용자 승인 시 결제를 포함한 거래 프로세스가 완료됩니다. SNS
              포스팅 자동화: 텍스트, 이미지, 동영상 등 멀티 포맷 콘텐츠를 포함한
              SNS 게시물을 자동으로 생성 및 추천하며, 사용자 승인 시 사용자
              계정에 연결된 Addeep SNS에 자동 포스팅됩니다.
            </p>
          </section>
          <section className="copy-ai">
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              ACT (Addeep Automatic Content Convergence Technology):
            </h2>
            <p className="text-lg leading-relaxed">
              이러한 서비스들은 사용자의 명시적 입력 없이 다차원 학습된 사용자
              데이터를 기반으로 사용자 마인드셋 모델을 자동 추출하여 진행됩니다.
              이는 SNS 상에서 사용자가 특정 시간에 가장 높은 확률로 의도할
              것으로 예상되는 행위를 자동으로 생성하고 추천하는 것을 목표로
              합니다. Addeep의 AI 엔진은 기본적으로 Addeep 클라우드 서버 내에
              인스턴스화되며, Azure, AWS, Google 등 다양한 클라우드 서비스에
              유연하게 적용 가능한 확장성을 가집니다. 또한, 'AIaaS (Artificial
              Intelligence-as-a-Service)' 형태로 일반 외부 클라이언트(개인,
              법인, 단체)에게 클라우드 기반 구독형 서비스를 제공할 계획입니다.
              이는 API 형태의 서비스부터 각 산업별 도메인 서비스까지 다양화될 수
              있으며, 글로벌 AIaaS 시장에서 각기 다른 요구사항에 대응할 수 있는
              잠재력을 의미합니다.
            </p>
          </section>
        </div>
      </div>
    );
  }

  return (
    <section className="px-2 py-4 mb-20 flex flex-col flex-1">
      <div className="flex flex-col flex-1 p-28">
        <h2 className="mb-4 text-[56px] font-bold">
          Redefining <span className="text-[#B641E9]">Web 3.0 </span>
          Social Media
        </h2>
        {/* <button
          className="mt-4 mb-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
          onClick={() => router.push("/addeep-is/summary/gpr")}
        >
          내용 더보기
        </button> */}
        <div className="border border-[#B641E9] text-[#B641E9] w-20 h-px mb-4"></div>
        <p className="text-2xl leading-relaxed">
          <span className="text-[#B641E9] font-bold">Addeep-GPR-1</span>{" "}
          (Generative Pre-trained Recommender) represents the core technology
          powering our revolutionary Web 3.0 social media platform. Our
          breakthrough integration of{" "}
          <span className="text-[#B641E9] font-bold">
            next-generation CNN and RNN technologies{" "}
          </span>
          into existing conversational AI models creates an unprecendented user
          experience.
        </p>
        <p className="text-2xl leading-relaxed mt-6">
          Unlike traditional AI systems, GPR focuses on{" "}
          <span className="text-[#B641E9] font-bold">
            automatically generating and recommending personalized content{" "}
          </span>
          without requiring explicit user input-a truly non-conversational,
          fully automated generative AI.
        </p>
      </div>

      <div className="flex flex-col flex-1 p-28">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[56px] font-bold">Beyond the Conversation:</h2>
          <h2 className="mb-4 text-[56px] font-bold">
            Our Technical Advantage
          </h2>
          <div className="border border-[#B641E9] text-[#B641E9] w-36 h-px mt-2 mb-4"></div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4">
          <div className="max-w-96 border-[1.2px] border-[#1F2937] p-6 rounded-2xl flex flex-col items-center">
            <h2 className="text-[26px] text-[#B641E9] font-bold mb-4">
              UnderStanding the Mind
            </h2>
            <p className="text-lg leading-relaxed mb-12 p-4">
              Multi-dimensional user data collection from Addeep SNS including{" "}
              <span className="font-bold">
                communication metrics, activity patterns, and demographic data.
              </span>
            </p>
            <p className="text-lg leading-relaxed p-4">
              Our proprietary{" "}
              <span className="font-bold">Large Mind-mining Model (LMM) </span>
              mines user thoughts and intentions, differentiating from
              traditional LLMs that focus solely on linguistic data.
            </p>
          </div>
          <div className="max-w-96 border-[1.2px] border-[#1F2937] p-6 rounded-2xl flex flex-col items-center">
            <h2 className="text-[26px] text-[#B641E9] font-bold">
              True Automation
            </h2>
            <p className="text-lg leading-relaxed mb-12 p-4">
              <span className="font-bold">
                Non-interactive, fully automatic
              </span>{" "}
              generative AI implementation.
            </p>
            <p className="text-lg leading-relaxed p-4">
              Deep neural network continously calibrated with reinforcement
              training, enabling{" "}
              <span className="font-bold">instant personalized content </span>
              without complex user input.
            </p>
          </div>
          <div className="max-w-96 border-[1.2px] border-[#1F2937] p-6 rounded-2xl flex flex-col items-center">
            <h2 className="text-[26px] text-[#B641E9] font-bold">
              The ACT Engine
            </h2>
            <p className="text-lg leading-relaxed p-4">
              <span className="font-bold">
                Addeep Automatic Content Convergence Technology
              </span>{" "}
              powered by our Augmented AI and A-GPR inference model.
            </p>
            <p className="text-lg leading-relaxed p-4">
              Automatically generates personalized content by decomposing and
              fusing <span className="font-bold">multi-format content </span>{" "}
              from our platform ecosystem.
            </p>
            <p className="text-lg leading-relaxed p-4">
              <span className="font-bold">Deep Blend </span> technology
              recreates user-intended content without complex authoring tools.
            </p>
          </div>
        </div>
      </div>

      <div className="copy-ai">
        <h2 className="mb-4 text-2xl font-semibold text-pink-500">
          From Generation to Confirmation:
        </h2>
        <h2 className="mb-4 text-2xl font-semibold text-pink-500">
          Our Core Services
        </h2>

        <h2 className="mb-4 text-2xl font-semibold text-pink-500">
          Introducing our revolutionary "Generation - Confirmation" model that
        </h2>
        <h2 className="mb-4 text-2xl font-semibold text-pink-500">
          transforms how users interact with AI-generated content.
        </h2>
        <p className="text-2xl leading-relaxed">Automated Content Generation</p>
        <p className="text-2xl leading-relaxed">
          Automatically generates and recommends user content including images,
          memes, and emojis, activated by simple user approval.
        </p>
        <p className="text-2xl leading-relaxed">Automated Ad Generation</p>
        <p className="text-2xl leading-relaxed">
          Intelligently matches content and advertisements, generating
          personalized recommendations activated by user approval.
        </p>
        <p className="text-2xl leading-relaxed">Transaction Automation</p>
        <p className="text-2xl leading-relaxed">
          Automatically creates and recommends sale/purchase transactions,
          completed upon user approval.
        </p>
        <p className="text-2xl leading-relaxed">Social Media Post Automation</p>
        <p className="text-2xl leading-relaxed">
          Automatically generates social media posts including text, images, and
          videos for Addeep accounts, posted upon user approval.
        </p>
      </div>
      <div className="copy-ai">
        <h2 className="mb-4 text-2xl font-semibold text-pink-500">
          Scalability and AI-as-a-Service
        </h2>
        <p className="text-2xl leading-relaxed">
          Our AI engine automatically extracts user mindset models without
          explicit input, generating social media behaviors users are most
          likely to intend.
        </p>
        <p className="text-2xl leading-relaxed">
          Cloud Adaptability: Instantiated on Addeep's cloud server but
          adaptable to Azure, AWS, Google Cloud, and other platforms.
        </p>
        <p className="text-2xl leading-relaxed">
          Future Vision: Offering 'Artificial Intelligence-as-a-Service' (AIaaS)
          via subscription model to external clients-individuals and
          corporations worldwide.
        </p>
      </div>
    </section>
  );
}

function SummarySNS() {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div className="flex flex-col gap-8 p-4">
        <div className="space-y-20">
          <section className="copy-sns">
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              Addeep GPR AI 기반의 혁신적인 보상형 SNS 플랫폼
            </h2>
            <p className="text-lg leading-relaxed">
              Addeep은 단순한 SNS 서비스를 넘어, 서비스 이용자와 콘텐츠 창작자인
              크리에이터/인플루언서에게 획기적인 가치를 제공합니다. 저희
              서비스는 'Addeep-GPR-1' (Generative Pre-trained Recommender) AI
              기술을 핵심으로 하여, 이용자가 서비스를 이용하기만 해도 Addeep GPR
              AI의 정교한 분석을 통해 최적화된 리워드 캐시가 적립되어 현금처럼
              사용할 수 있도록 설계되었습니다.
            </p>
          </section>

          <section className="copy-sns">
            <p className="text-lg leading-relaxed">
              광고주, 플랫폼 사업자, 이용자, 그리고 크리에이터/인플루언서 등
              모든 참여자에게 리워드 캐시가 적립되는 혁신적인 구조를 통해,
              Addeep을 이용하면 할수록 경제적 수익을 창출하며 모두가 이익을
              공유할 수 있습니다.
            </p>
          </section>
          <section className="copy-sns">
            <p className="text-lg leading-relaxed">
              기존 플랫폼 생태계에서 이용자는 플랫폼 사업자에게 종속되어 어떠한
              보상이나 수익 실현도 기대하기 어려웠습니다. Addeep은 이러한
              불균형을 해소하고, 이용자와 참여자 중심의 보상형 광고 서비스를
              기반으로 하는 SNS 플랫폼을 전 세계 이용자에게 선보입니다.
            </p>
          </section>
          <section className="copy-sns">
            <p className="text-lg leading-relaxed">
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
            <p className="text-lg leading-relaxed">
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
            <p className="text-lg leading-relaxed">
              Addeep은 이러한 새로운 플랫폼 생태계를 대한민국을 시작으로 전
              세계인이 이용할 수 있도록 확장시켜 나갈 것입니다.
            </p>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="px-2 py-4 mb-20">
      <div className="mx-auto">
        <div className="space-y-[60vh]">
          <section className="copy-sns">
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              Redefining Value: Shared Prosperity for All
            </h2>
            <p className="text-2xl leading-relaxed">
              Addeep allows users to accumulate reward cash, optimized through
              Addeep GPR Ai's sophisticated analysis, which can be used like
              real money. Our innovative structure ensures reward cash
              accumulates for all participants - advertiesers, platform
              operators, users, and creators/influencers - where increased usage
              generates more economic profit for everyone.
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              Empowering Users, Beyond Traditional Models
            </h2>
            <p className="text-2xl leading-relaxed">
              Addeep addresses the imbalance in existing platform ecosystems
              where users were subordinate. We introduce an SNS platform based
              on a user and participant-centric reward-based advertising service
              for users worldwide.
            </p>
          </section>

          <section className="copy-sns">
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              Addeep GRP AI:
            </h2>
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              Intelligent Engagement & Fair Distribution
            </h2>
            <p className="text-2xl leading-relaxed">
              Addeep's core strength lies in the enhanced predicitive and
              generative capabilities of Addeep GPR AI, differentiated big data
              analysis, and improved targeted advertising marketing services.
            </p>
          </section>

          <section className="copy-sns">
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              Personalized Content Generation
            </h2>
            <p className="text-2xl leading-relaxed">
              Addeep GPR AI automatically generates and recommends personalized
              content without explicit user input.
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              Fair Revenue Sharing
            </h2>
            <p className="text-2xl leading-relaxed">
              Builds a platform ecosystem that more fairly and efficiently
              shares advertising costs among all participants.
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              100% Targeted Accuracy
            </h2>
            <p className="text-2xl leading-relaxed">
              Innovative AI-driven revenue-sharing model where targeted
              advertising accuracy approaches 100%, maximizing efficiency.
            </p>
          </section>

          <section className="copy-sns">
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              Next-Generation Technology
            </h2>
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              for Creators and Industries
            </h2>
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              AI & Cloud Platform
            </h2>
            <p className="text-2xl leading-relaxed">
              Addeep GPR AI advances deep learning AI technology to a new level,
              providing cloud-based data platform technology. This optimizes the
              platform for various industry customers to conveniently utilize
              customized, domain-specialized services.
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              ACI Content Protection
            </h2>
            <p className="text-2xl leading-relaxed">
              The ACI (Addeep Contents Identifier) content protection technology
              leverages Addeep GPR AI's content analysis and identification
              capabilities, along with blockchain security technology, to
              enhance IP protection. This allows content creators to more freely
              and safely trade content within the Addeep platform.
            </p>
          </section>

          <section className="copy-sns">
            <h2 className="mb-4 text-2xl font-semibold text-pink-500">
              Expanding Our Global Footprint
            </h2>
            <p className="text-2xl leading-relaxed">
              Addeep will expand this new platform ecosystem, starting in South
              Korea, to be accessible to people worldwide.
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
