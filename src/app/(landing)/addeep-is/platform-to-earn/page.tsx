"use client";

import { NEXT_PUBLIC_CDN_BASE } from "../../../../lib/env";
import { useResponsive } from "../../../../lib/useResponsive";

const PlatformToEarn = () => {
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
            Addeep: A Platform to Earn
          </h1>
          <h3 className="text-2xl font-bold text-white mb-4">
            Addeep has innovated its reward service
          </h3>
          <h3 className="text-2xl font-bold text-white">
            by providing reward cash to all users.
          </h3>
          <h3 className="text-2xl font-bold text-white">
            enabling them to realize profits.
          </h3>
          <h3 className="text-2xl font-bold text-white">
            This model is designed for faster service expansion
          </h3>
          <h3 className="text-2xl font-bold text-white">
            and higher user satisfaction.
          </h3>
          <h3 className="text-2xl font-bold text-white">
            By securing flexible users, Addeep offers targeted advertising and
          </h3>
          <h3 className="text-2xl font-bold text-white">
            data-driven CRM, growing as a global, collaborative platform.
          </h3>
        </div>
      </div>
      <section className="flex flex-col flex-1 p-28">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-[56px]">
            <span className="text-[#B641E9]">For Advertisers:</span> Precision &
            Performance
          </h2>
          <h4 className="text-[28px] text-[#4B5563] font-normal">
            Addeep helps advertisers increase their target advertising rates
          </h4>
          <h4 className="text-[28px] text-[#4B5563] font-normal">
            and secure customer acquisition through user-specific settings.
          </h4>
        </div>
        <div className="mt-8 mb-8 grid grid-cols-3 gap-4">
          <div className="max-w-[500px] border border-gray-200 shadow-md rounded-lg p-8">
            <h4 className="text-[28px] text-[#4B5563] font-normal">
              Data-Driven Insights
            </h4>
            <p className="text-xl text-[#4B5563] font-normal">
              By analyzing big data patterns, Addeep provides customized AI
              advertising services that drive repeat visits and increased sales.
            </p>
          </div>
          <div className="max-w-[500px] border border-gray-200 shadow-md rounded-lg p-8">
            <h4 className="text-[28px] text-[#4B5563] font-normal">
              Strategic Growth
            </h4>
            <p className="text-xl text-[#4B5563] font-normal">
              Addeep assists advertisers in precise analysis of product stages
              -from production to sales- to facilitate new product launches and
              development.
            </p>
          </div>
          <div className="max-w-[500px] border border-gray-200 shadow-md rounded-lg p-8">
            <h4 className="text-[28px] text-[#4B5563] font-normal">
              Integrated Efficiency
            </h4>
            <p className="text-xl text-[#4B5563] font-normal">
              The platform seamlessly integrates advertising efficiency with
              crucial customer management through Addeep Ads.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-[56px]">
            <span className="text-[#B641E9]">For Users:</span> From Engagement
            to Income
          </h2>
          <h4 className="text-[28px] text-[#4B5563] font-normal">
            Many social media users are dependent on platforms
          </h4>
          <h4 className="text-[28px] text-[#4B5563] font-normal">
            that offer no consistent rewards. Addeep changes that reality.
          </h4>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="max-w-[500px] p-8">
            <h4 className="text-[28px] text-[#4B5563] font-normal">
              Sustainable Profit Models
            </h4>
            <p className="text-xl text-[#4B5563] font-normal">
              Based on valuable information and targeted ads, creating
              consistent income streams.
            </p>
          </div>
          <div className="max-w-[500px] p-8">
            <h4 className="text-[28px] text-[#4B5563] font-normal">
              Collaborative Environment
            </h4>
            <p className="text-xl text-[#4B5563] font-normal">
              An innovative platform ecosystem that connects all participants to
              diverse profit channels.
            </p>
          </div>
        </div>
        <img
          src={`${NEXT_PUBLIC_CDN_BASE}/images/PlatformToEarnUserBanner.png`}
          alt="Platform to Earn"
        />

        <div className="flex flex-col items-center justify-center mt-28">
          <h2 className="font-bold text-[56px]">
            <span className="text-[#B641E9]">For Creators:</span> Monetize Your
            Creativity
          </h2>
          <h4 className="text-[28px] text-[#4B5563] font-normal">
            By involving creators and influencers, Addeep develops creative and
            engaging content
          </h4>
          <h4 className="text-[28px] text-[#4B5563] font-normal">
            like short videos, memes, and images, which serve as diverse
            advertising services.
          </h4>
        </div>
        <div className="flex flex-col gap-4">
          <div className="max-w-[500px] p-8">
            <h4 className="text-[28px] text-[#B641E9] font-normal">
              Sustainable Rewards
            </h4>
            <p className="text-xl text-[#4B5563] font-normal">
              Creators are guaranteed steady incomes and sustainable rewards
              through the continous creation of diverse content. Addeep provides
              more benefits to foster a harmonious platform ecosystem.
            </p>
            <p className="text-xl font-normal mt-4">Guaranteed steady income</p>
          </div>
          <div className="max-w-[500px] p-8">
            <h4 className="text-[28px] text-[#B641E9] font-normal">
              IP Protection
            </h4>
            <p className="text-xl text-[#4B5563] font-normal">
              ACI content protection technology uses Addeep's AI and blockchain
              to safeguard content ownership and rights, providing assistance
              with IP management.
            </p>
            <p className="text-xl font-normal mt-4">
              Blockchain-secured rights
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-[56px]">
            The Content That Connects Us
          </h2>
          <h4 className="text-[28px] text-[#4B5563] font-normal">
            Digital content like Shorts, memes, and emoticons play a crucial
            role in modern communication,
          </h4>
          <h4 className="text-[28px] text-[#4B5563] font-normal">
            especially among Millennials and Gen Z.
          </h4>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <img
              src={`${NEXT_PUBLIC_CDN_BASE}/images/SNSShort.png`}
              alt="Platform to Earn"
            />
            <h4 className="text-[28px] text-[#4B5563] font-normal mt-8">
              Short Videos
            </h4>
            <p className="text-xl text-[#4B5563] font-normal">
              Engaging visual stories
            </p>
          </div>
          <div className="text-center">
            <img
              src={`${NEXT_PUBLIC_CDN_BASE}/images/SNSMeme.png`}
              alt="Platform to Earn"
            />
            <h4 className="text-[28px] text-[#4B5563] font-normal mt-8">
              Memes & Art
            </h4>
            <p className="text-xl text-[#4B5563] font-normal">
              Creative expression
            </p>
          </div>
          <div className="text-center">
            <img
              src={`${NEXT_PUBLIC_CDN_BASE}/images/SNSDigital.png`}
              alt="Platform to Earn"
            />
            <h4 className="text-[28px] text-[#4B5563] font-normal mt-8">
              Digital Communication
            </h4>
            <p className="text-xl text-[#4B5563] font-normal">
              Modern connection
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-28">
          <h2 className="font-bold text-[56px]">Your Bridge to Freedom</h2>
          <h4 className="text-[28px] text-[#4B5563] font-normal">
            Addeep is the bridge that connects users and allows them to freely
          </h4>
          <h4 className="text-[28px] text-[#4B5563] font-normal">
            communicate and achieve sustained incomes. Users can freely engage
          </h4>
          <h4 className="text-[28px] text-[#4B5563] font-normal">
            as creators, not just consumers, fostering open communication and a
          </h4>
          <h4 className="text-[28px] text-[#4B5563] font-normal">
            diverse digital content ecosystem.
          </h4>
        </div>
      </section>
      <div className="w-full text-center">
        <div
          className="w-full h-[600px] rounded-lg flex flex-col items-center justify-center"
          style={{
            background: `url(${NEXT_PUBLIC_CDN_BASE}/images/SNSFreedomBanner.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            border: "1px solid #E5E7EB",
          }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Your Bridge to Freedom
          </h1>
          <h3 className="text-2xl font-bold text-white mb-4">
            Addeep is the bridge that connects users and allows them to freely
          </h3>
          <h3 className="text-2xl font-bold text-white">
            communicate and achieve sustained incomes. Users can freely engage
          </h3>
          <h3 className="text-2xl font-bold text-white">
            as creators, not just consumers, fostering open communication and a
          </h3>
          <h3 className="text-2xl font-bold text-white">
            diverse digital content ecosystem.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PlatformToEarn;
