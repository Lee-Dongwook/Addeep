"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSearchParams } from "next/navigation";
import { useResponsive } from "../../../../lib/useResponsive";
import { NEXT_PUBLIC_CDN_BASE } from "../../../../lib/env";

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
        <div
          className="w-full rounded-lg flex flex-col items-center text-center justify-center p-8"
          style={{
            background: `url(${NEXT_PUBLIC_CDN_BASE}/images/AISummaryBanner.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            border: "1px solid #E5E7EB",
          }}
        >
          <h1 className="text-2xl font-bold text-white mb-4">Addeep GPR</h1>
          <h3 className="text-lg font-bold text-white mb-4">
            Introducing a non-conversational,
          </h3>
          <h3 className="text-lg font-bold text-white mb-4">
            fully automated generative AI that understands your mindset.
          </h3>
          <button
            className="mt-4 mb-6 px-6 w-32 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
            onClick={() => router.push("/addeep-is/summary/gpr")}
          >
            Explore Technology
          </button>
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="mb-4 text-2xl font-bold">
            Redefining <span className="text-[#B641E9]">Web 3.0 </span>
            Social Media
          </h2>
          <div className="border border-[#B641E9] text-[#B641E9] w-10 h-px mb-4"></div>
          <p className="text-xl leading-relaxed">
            <span className="text-[#B641E9] font-bold">Addeep-GPR-1</span>{" "}
            (Generative Pre-trained Recommender) represents the core technology
            powering our revolutionary Web 3.0 social media platform. Our
            breakthrough integration of{" "}
            <span className="text-[#B641E9] font-bold">
              next-generation CNN and RNN technologies{" "}
            </span>
            into existing conversational AI models creates an unprecendented
            user experience.
          </p>
          <p className="text-xl leading-relaxed mt-6">
            Unlike traditional AI systems, GPR focuses on{" "}
            <span className="text-[#B641E9] font-bold">
              automatically generating and recommending personalized
              content{" "}
            </span>
            without requiring explicit user input-a truly non-conversational,
            fully automated generative AI.
          </p>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold">Beyond the Conversation:</h2>
            <h2 className="mb-4 text-3xl font-bold">Our Technical Advantage</h2>
            <div className="border border-[#B641E9] text-[#B641E9] w-36 h-px mt-2 mb-4"></div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4">
            <div className="max-w-96 border-[1.2px] border-[#1F2937] p-2 rounded-2xl flex flex-col items-center">
              <h2 className="text-xl text-[#B641E9] font-bold mb-4 mt-4">
                UnderStanding the Mind
              </h2>
              <p className="text-lg leading-relaxed mb-12 p-4">
                Multi-dimensional user data collection from Addeep SNS including{" "}
                <span className="font-bold">
                  communication metrics, activity patterns, and demographic
                  data.
                </span>
              </p>
              <p className="text-lg leading-relaxed p-4">
                Our proprietary{" "}
                <span className="font-bold">
                  Large Mind-mining Model (LMM){" "}
                </span>
                mines user thoughts and intentions, differentiating from
                traditional LLMs that focus solely on linguistic data.
              </p>
            </div>
            <div className="max-w-96 border-[1.2px] border-[#1F2937] p-2 rounded-2xl flex flex-col items-center">
              <h2 className="text-xl text-[#B641E9] font-bold mt-4">
                True Automation
              </h2>
              <p className="text-lg leading-relaxed mb-4 p-4">
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
              <h2 className="text-xl text-[#B641E9] font-bold">
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

          <div className="flex flex-col flex-1 mt-8 gap-4">
            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-2xl font-bold">
                From Generation to Confirmation:
              </h2>
              <h2 className="mb-4 text-2xl font-bold">
                Our <span className="text-[#B641E9]">Core Services</span>
              </h2>
              <h2 className="text-lg font-normal">
                Introducing our revolutionary "Generation - Confirmation" model
                that
              </h2>
              <h2 className="mb-4 text-lg font-normal">
                transforms how users interact with AI-generated content.
              </h2>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center">
              <div className="grid grid-cols-1 gap-8">
                <div className="max-w-[600px] border-[1.2px] border-[#1F2937] p-6 rounded-2xl flex flex-col">
                  <h3 className="text-2xl leading-relaxed text-[#B641E9] font-bold">
                    Automated Content Generation
                  </h3>
                  <p className="text-xl leading-relaxed">
                    Automatically generates and recommends user content
                    including images, memes, and emojis, activated by simple
                    user approval.
                  </p>
                </div>

                <div className="max-w-[600px] border-[1.2px] border-[#1F2937] p-6 rounded-2xl flex flex-col">
                  <h3 className="text-2xl leading-relaxed text-[#B641E9] font-bold">
                    Automated Ad Generation
                  </h3>
                  <p className="text-xl leading-relaxed">
                    Intelligently matches content and advertisements, generating
                    personalized recommendations activated by user approval.
                  </p>
                </div>
                <div className="max-w-[600px] border-[1.2px] border-[#1F2937] p-6 rounded-2xl flex flex-col">
                  <h3 className="text-2xl leading-relaxed text-[#B641E9] font-bold">
                    Transaction Automation
                  </h3>
                  <p className="text-xl leading-relaxed">
                    Automatically creates and recommends sale/purchase
                    transactions, completed upon user approval.
                  </p>
                </div>

                <div className="max-w-[600px] border-[1.2px] border-[#1F2937] p-6 rounded-2xl flex flex-col">
                  <h3 className="text-2xl leading-relaxed text-[#B641E9] font-bold">
                    Social Media Post Automation
                  </h3>
                  <p className="text-xl leading-relaxed">
                    Automatically generates social media posts including text,
                    images, and videos for Addeep accounts, posted upon user
                    approval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="mb-20 flex flex-col flex-1">
      <div className="w-full text-center">
        <div
          className="w-full h-[600px] rounded-lg flex flex-col items-center justify-center"
          style={{
            background: `url(${NEXT_PUBLIC_CDN_BASE}/images/AISummaryBanner.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            border: "1px solid #E5E7EB",
          }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Addeep GPR
          </h1>
          <h3 className="text-2xl font-bold text-white mb-4">
            Introducing a non-conversational,
          </h3>
          <h3 className="text-2xl font-bold text-white mb-4">
            fully automated generative AI that understands your mindset.
          </h3>
          <button
            className="mt-4 mb-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
            onClick={() => router.push("/addeep-is/summary/gpr")}
          >
            Explore Technology
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-28">
        <h2 className="mb-4 text-[56px] font-bold">
          Redefining <span className="text-[#B641E9]">Web 3.0 </span>
          Social Media
        </h2>
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

      <div className="flex flex-col flex-1 p-28">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[56px] font-bold">
            From Generation to Confirmation:
          </h2>
          <h2 className="mb-4 text-[56px] font-bold">
            Our <span className="text-[#B641E9]">Core Services</span>
          </h2>
          <h2 className="text-2xl font-normal">
            Introducing our revolutionary "Generation - Confirmation" model that
          </h2>
          <h2 className="mb-4 text-2xl font-normal">
            transforms how users interact with AI-generated content.
          </h2>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center">
          <div className="grid grid-cols-2 gap-8">
            <div className="max-w-[600px] border-[1.2px] border-[#1F2937] p-6 rounded-2xl flex flex-col">
              <h3 className="text-2xl leading-relaxed text-[#B641E9] font-bold">
                Automated Content Generation
              </h3>
              <p className="text-xl leading-relaxed">
                Automatically generates and recommends user content including
                images, memes, and emojis, activated by simple user approval.
              </p>
            </div>

            <div className="max-w-[600px] border-[1.2px] border-[#1F2937] p-6 rounded-2xl flex flex-col">
              <h3 className="text-2xl leading-relaxed text-[#B641E9] font-bold">
                Automated Ad Generation
              </h3>
              <p className="text-xl leading-relaxed">
                Intelligently matches content and advertisements, generating
                personalized recommendations activated by user approval.
              </p>
            </div>
            <div className="max-w-[600px] border-[1.2px] border-[#1F2937] p-6 rounded-2xl flex flex-col">
              <h3 className="text-2xl leading-relaxed text-[#B641E9] font-bold">
                Transaction Automation
              </h3>
              <p className="text-xl leading-relaxed">
                Automatically creates and recommends sale/purchase transactions,
                completed upon user approval.
              </p>
            </div>

            <div className="max-w-[600px] border-[1.2px] border-[#1F2937] p-6 rounded-2xl flex flex-col">
              <h3 className="text-2xl leading-relaxed text-[#B641E9] font-bold">
                Social Media Post Automation
              </h3>
              <p className="text-xl leading-relaxed">
                Automatically generates social media posts including text,
                images, and videos for Addeep accounts, posted upon user
                approval.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div
          className="max-w-[1240px] border-[1.2px] p-12 rounded-2xl flex flex-col border-[#B641E9] border-opacity-20"
          style={{
            background:
              "linear-gradient(to right, rgba(182, 65, 233, 0.1) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <h2 className="mb-4 text-3xl font-bold text-[#B641E9]">
            Scalability and AI-as-a-Service
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl">
            Our AI engine automatically extracts user mindset models without
            explicit input, generating social media behaviors users are most
            likely to intend.
          </p>
          <p className="text-lg leading-relaxed max-w-2xl">
            Cloud Adaptability: Instantiated on Addeep's cloud server but
            adaptable to Azure, AWS, Google Cloud, and other platforms.
          </p>
          <p className="text-lg leading-relaxed max-w-2xl">
            Future Vision: Offering 'Artificial Intelligence-as-a-Service'
            (AIaaS) via subscription model to external clients-individuals and
            corporations worldwide.
          </p>
          <p className="min-w-[1000px]"></p>
        </div>
      </div>
    </section>
  );
}

function SummarySNS() {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div className="flex flex-col flex-1">
        <div className="w-full text-center">
          <div
            className="w-full h-[600px] rounded-lg flex flex-col items-center justify-center"
            style={{
              background: `url(${NEXT_PUBLIC_CDN_BASE}/images/SNSSummaryBanner.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              border: "1px solid #E5E7EB",
            }}
          >
            <h1 className="text-2xl font-bold text-white mb-4">
              Addeep S2E SNS GPR Platform
            </h1>
            <h3 className="text-xl font-bold text-white mb-4">
              Experience an innovative platform where engagement genuinely
            </h3>
            <h3 className="text-xl font-bold text-white mb-4">
              rewards every participant, powered by Addeep GPR AI.
            </h3>
          </div>
        </div>
        <div className="flex flex-col flex-1 p-6 gap-4">
          <h2 className="mb-4 text-2xl font-bold">
            <span className="text-[#B641E9] font-bold">Redefining Value: </span>
            Shared Prosperity for All
          </h2>
          <p className="text-lg leading-relaxed">
            Addeep allows users to accumulate reward cash, optimized through
            Addeep GPR Ai's sophisticated analysis, which can be used like real
            money. Our innovative structure ensures reward cash accumulates for
            all participants - advertiesers, platform operators, users, and
            creators/influencers - where increased usage generates more economic
            profit for everyone.
          </p>
          <h2 className="mb-4 text-2xl text-[#B641E9] font-bold mt-4">
            Empowering Users, Beyond Traditional Models
          </h2>
          <p className="text-lg leading-relaxed">
            Addeep addresses the imbalance in existing platform ecosystems where
            users were subordinate. We introduce an SNS platform based on a user
            and participant-centric reward-based advertising service for users
            worldwide.
          </p>

          <div className="flex flex-col mt-16 gap-4">
            <h2 className="text-2xl text-[#B641E9] font-bold">
              Addeep GRP AI:
            </h2>
            <h2 className="text-xl font-bold">
              Intelligent Engagement & Fair Distribution
            </h2>
            <p className="text-lg leading-relaxed">
              Addeep's core strength lies in the enhanced predicitive and
              generative capabilities of Addeep GPR AI, differentiated big data
              analysis, and improved targeted advertising marketing services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-12">
            <div className="max-w-[600px] border-[1.2px] border-transparent shadow-xl p-6 rounded-2xl flex flex-col">
              <h2 className="mb-4 text-2xl font-semibold text-[#B641E9]">
                Personalized Content Generation
              </h2>
              <p className="text-2xl leading-relaxed">
                Addeep GPR AI automatically generates and recommends
                personalized content without explicit user input.
              </p>
            </div>

            <div className="max-w-[600px] border-[1.2px] border-transparent shadow-xl p-6 rounded-2xl flex flex-col">
              <h2 className="mb-4 text-2xl font-semibold text-[#B641E9]">
                Fair Revenue Sharing
              </h2>
              <p className="text-2xl leading-relaxed">
                Builds a platform ecosystem that more fairly and efficiently
                shares advertising costs among all participants.
              </p>
            </div>

            <div className="max-w-[600px] border-[1.2px] border-transparent shadow-xl p-6 rounded-2xl flex flex-col">
              <h2 className="mb-4 text-2xl font-semibold text-[#B641E9]">
                100% Targeted Accuracy
              </h2>
              <p className="text-2xl leading-relaxed">
                Innovative AI-driven revenue-sharing model where targeted
                advertising accuracy approaches 100%, maximizing efficiency.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-16">
            <h2 className="mb-4 text-2xl font-bold">
              Next-Generation Technology
            </h2>
            <h2 className="text-2xl font-bold">
              for{" "}
              <span className="text-[#B641E9]">Creators and Industries</span>
            </h2>
          </div>

          <h2 className="mb-4 text-xl font-semibold text-[#B641E9]">
            AI & Cloud Platform
          </h2>
          <p className="text-lg leading-relaxed">
            Addeep GPR AI advances deep learning AI technology to a new level,
            providing cloud-based data platform technology. This optimizes the
            platform for various industry customers to conveniently utilize
            customized, domain-specialized services.
          </p>
          <h2 className="mb-4 text-xl font-semibold text-[#B641E9] mt-8">
            ACI Content Protection
          </h2>
          <p className="text-lg leading-relaxed">
            The ACI (Addeep Contents Identifier) content protection technology
            leverages Addeep GPR AI's content analysis and identification
            capabilities, along with blockchain security technology, to enhance
            IP protection. This allows content creators to more freely and
            safely trade content within the Addeep platform.
          </p>
        </div>
        <div className="w-full text-center p-2">
          <div
            className="w-full h-[600px] rounded-lg flex flex-col items-center justify-center"
            style={{
              background: `url(${NEXT_PUBLIC_CDN_BASE}/images/SNSEarthBanner.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              border: "1px solid #E5E7EB",
            }}
          >
            <h1 className="text-3xl font-bold text-white mb-12">
              Expanding Our Global Footprint
            </h1>
            <h3 className="text-lg font-bold text-white mb-4">
              Addeep will expand this new platform ecosystem, starting in South
              Korea,
            </h3>
            <h3 className="text-lg font-bold text-white mb-4">
              to be accessible to people worldwide.
            </h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-20 flex flex-col flex-1">
      <div className="w-full text-center">
        <div
          className="w-full h-[600px] rounded-lg flex flex-col items-center justify-center"
          style={{
            background: `url(${NEXT_PUBLIC_CDN_BASE}/images/SNSSummaryBanner.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            border: "1px solid #E5E7EB",
          }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Addeep S2E SNS GPR Platform
          </h1>
          <h3 className="text-2xl font-bold text-white mb-4">
            Experience an innovative platform where engagement genuinely
          </h3>
          <h3 className="text-2xl font-bold text-white mb-4">
            rewards every participant, powered by Addeep GPR AI.
          </h3>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-28">
        <h2 className="mb-4 text-[56px] font-bold">
          <span className="text-[#B641E9] font-bold">Redefining Value: </span>
          Shared Prosperity for All
        </h2>
        <p className="text-2xl leading-relaxed">
          Addeep allows users to accumulate reward cash, optimized through
          Addeep GPR Ai's sophisticated analysis, which can be used like real
          money. Our innovative structure ensures reward cash accumulates for
          all participants - advertiesers, platform operators, users, and
          creators/influencers - where increased usage generates more economic
          profit for everyone.
        </p>
        <h2 className="mb-4 text-2xl text-[#B641E9] font-bold mt-4">
          Empowering Users, Beyond Traditional Models
        </h2>
        <p className="text-2xl leading-relaxed">
          Addeep addresses the imbalance in existing platform ecosystems where
          users were subordinate. We introduce an SNS platform based on a user
          and participant-centric reward-based advertising service for users
          worldwide.
        </p>

        <div className="flex flex-col items-center justify-center mt-32">
          <h2 className="text-[56px] text-[#B641E9] font-bold">
            Addeep GRP AI:
          </h2>
          <h2 className="text-[56px] font-bold">
            Intelligent Engagement & Fair Distribution
          </h2>
          <p className="text-2xl leading-relaxed text-center">
            Addeep's core strength lies in the enhanced predicitive and
            generative capabilities of Addeep GPR AI, differentiated big data
            analysis, and improved targeted advertising marketing services.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="max-w-[600px] border-[1.2px] border-transparent shadow-xl p-6 rounded-2xl flex flex-col">
            <h2 className="mb-4 text-2xl font-semibold text-[#B641E9]">
              Personalized Content Generation
            </h2>
            <p className="text-2xl leading-relaxed">
              Addeep GPR AI automatically generates and recommends personalized
              content without explicit user input.
            </p>
          </div>

          <div className="max-w-[600px] border-[1.2px] border-transparent shadow-xl p-6 rounded-2xl flex flex-col">
            <h2 className="mb-4 text-2xl font-semibold text-[#B641E9]">
              Fair Revenue Sharing
            </h2>
            <p className="text-2xl leading-relaxed">
              Builds a platform ecosystem that more fairly and efficiently
              shares advertising costs among all participants.
            </p>
          </div>

          <div className="max-w-[600px] border-[1.2px] border-transparent shadow-xl p-6 rounded-2xl flex flex-col">
            <h2 className="mb-4 text-2xl font-semibold text-[#B641E9]">
              100% Targeted Accuracy
            </h2>
            <p className="text-2xl leading-relaxed">
              Innovative AI-driven revenue-sharing model where targeted
              advertising accuracy approaches 100%, maximizing efficiency.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-32">
          <h2 className="mb-4 text-[56px] font-bold">
            Next-Generation Technology
          </h2>
          <h2 className="text-[56px] font-bold">
            for <span className="text-[#B641E9]">Creators and Industries</span>
          </h2>
        </div>

        <h2 className="mb-4 text-2xl font-semibold text-[#B641E9]">
          AI & Cloud Platform
        </h2>
        <p className="text-2xl leading-relaxed">
          Addeep GPR AI advances deep learning AI technology to a new level,
          providing cloud-based data platform technology. This optimizes the
          platform for various industry customers to conveniently utilize
          customized, domain-specialized services.
        </p>
        <h2 className="mb-4 text-2xl font-semibold text-[#B641E9] mt-8">
          ACI Content Protection
        </h2>
        <p className="text-2xl leading-relaxed">
          The ACI (Addeep Contents Identifier) content protection technology
          leverages Addeep GPR AI's content analysis and identification
          capabilities, along with blockchain security technology, to enhance IP
          protection. This allows content creators to more freely and safely
          trade content within the Addeep platform.
        </p>
      </div>
      <div className="w-full text-center">
        <div
          className="w-full h-[600px] rounded-lg flex flex-col items-center justify-center"
          style={{
            background: `url(${NEXT_PUBLIC_CDN_BASE}/images/SNSEarthBanner.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            border: "1px solid #E5E7EB",
          }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-24">
            Expanding Our Global Footprint
          </h1>
          <h3 className="text-2xl font-bold text-white mb-4">
            Addeep will expand this new platform ecosystem, starting in South
            Korea,
          </h3>
          <h3 className="text-2xl font-bold text-white mb-4">
            to be accessible to people worldwide.
          </h3>
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
