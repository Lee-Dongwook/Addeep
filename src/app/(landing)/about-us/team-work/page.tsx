"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useResponsive } from "../../../../lib/useResponsive";

gsap.registerPlugin(ScrollTrigger);

// Header Component
const TeamWorkHeader = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div className="w-full h-48 text-center p-3">
        <div className="w-full h-48 rounded-lg flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold  mb-4">Outstanding manpower!</h1>
          <h1 className="text-xl font-bold text-[#B641E9] mb-4">
            Creative brains!
          </h1>
          <h1 className="text-xl font-bold mb-4">
            High-potential core capabilities!
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full text-center mt-10 mb-20">
      <div className="w-full rounded-lg flex flex-1 flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4">Outstanding manpower!</h1>
        <h1 className="text-5xl font-bold mb-4 text-[#B641E9]">
          Creative brains!
        </h1>
        <h1 className="text-5xl font-bold mb-4">
          High-potential core capabilities!
        </h1>
      </div>
    </div>
  );
};

// Hero Component
const TeamWorkHero = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div className="mt-8 w-full p-4 text-center flex flex-col min-h-48 bg-[#F9FAFB]">
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-xl font-normal text-gray-800 leading-relaxed">
            With the experties of top professionals
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mt-4">
            in the field of digital platform services and advanced technical
            capabilities,
          </p>
          <p className="text-xl font-normal text-gray-800 leading-relaxed mt-4">
            we lead the way in driving innovative transformations
          </p>
          <p className="text-xl font-normal text-gray-800 leading-relaxed mt-4">
            within the global platform ecosystem.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-4 text-center flex flex-col h-48 md:h-96 bg-[#F9FAFB]">
      <div className="flex-1 flex flex-col items-center justify-center">
        <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-800 leading-relaxed">
          With the experties of top professionals
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-800 leading-relaxed mt-4">
          in the field of digital platform services and advanced technical
          capabilities,
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-800 leading-relaxed mt-4">
          we lead the way in driving innovative transformations
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-800 leading-relaxed mt-4">
          within the global platform ecosystem.
        </p>
      </div>
    </div>
  );
};

// First Human Component
const FirstHuman = () => {
  const { isMobile } = useResponsive();
  const router = useRouter();

  if (isMobile) {
    return (
      <div className="w-full p-4 bg-white">
        <div className=" mx-auto">
          <div className="p-4">
            <div className="flex flex-col gap-8">
              {/* Left Section - Profile Summary */}
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 mb-24 rounded-full">
                  <Image
                    src="https://storage.googleapis.com/assets-addeep/images/JaeyoungProfile.png"
                    alt="Kevin Jaeyoung Yoon"
                    width={256}
                    height={256}
                    className="w-full h-full object-contain"
                    priority
                  />
                  <button
                    className="mt-6 px-6 py-2 bg-gradient-to-r from-[#CE9AFF] via-[#A855F7] to-[#833AB4] text-white rounded-full hover:bg-purple-700 transition-colors duration-200 font-medium"
                    onClick={() => router.push("/about-us/team-work/jaeyoung")}
                  >
                    View More
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  Kevin Jaeyoung Yoon
                </h2>
                <div className="text-md text-black space-y-1">
                  <p className="text-[#4A1A5C] font-semibold">
                    Addeep Founder & CVO Chief Vision Officer
                  </p>
                  <p>US Addeep Inc. Chief Executive Officer CEO</p>
                </div>
              </div>

              {/* Right Section - Detailed Information */}
              <div className="space-y-6">
                <div>
                  <div className="flex flex-row gap-3">
                    <div className="w-1 h-7 bg-[#7B2CBF]" />
                    <h3 className="text-md font-semibold text-black mb-2">
                      Education & Leadership
                    </h3>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-4 p-3">
                    <li>
                      • Current) Director, Korea AGI Enterprises Association
                    </li>
                    <li>
                      • Hayfield University Graduate School of Business MBA
                    </li>
                    <li>
                      • Completed CFO Academy at Seoul National University
                      Graduate School of Business
                    </li>
                    <li>• Founder of Addeep Group</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-row gap-3">
                    <div className="w-1 h-7 bg-[#7B2CBF]" />
                    <h3 className="text-md font-semibold text-black mb-2">
                      Key Achievements
                    </h3>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-4 p-3">
                    <li>
                      • Launched Addeep Platform Series Product Global Service,
                      R&D Secured SNS Service, and Base Digital Platform Service
                    </li>
                    <li>
                      • Commercialized OTT smart content platform and smart
                      device, as well as AI social robot product series
                    </li>
                    <li>
                      • Pioneer of 'ACI' content security technology for
                      protecting digital content rights
                    </li>
                    <li>
                      • Oversaw global management strategies in South Korea,
                      U.S., China, Singapore, Southeast Asia, and EU ICT
                    </li>
                  </ul>
                </div>

                {/* Awards */}
                <div>
                  <div className="flex flex-row gap-3">
                    <div className="w-1 h-7 bg-[#7B2CBF]" />
                    <h3 className="text-md font-semibold text-black mb-2">
                      Major Awards
                    </h3>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-4 p-3">
                    <li className="max-w-md">
                      • 2017 18th Small and Medium-sized Enterprise Technology
                      Innovation Exhibition hosted by the Ministry of SMEs and
                      Startups, awarded the Prime Minister's Award
                    </li>
                    <li className="max-w-md">
                      • 2017 KCS CICON Award for Creative Management
                    </li>
                    <li className="max-w-md">
                      • 2017 Ministry of Trade, Industry, and Energy, selected
                      as an outstanding company for brainpower in the 'K -
                      BrainPower' program
                    </li>
                    <li className="max-w-md">
                      • 2017 received the US White House Donald Trump
                      Presidential Award
                    </li>
                    <li className="max-w-md">
                      • 2016 ICOTEC International Copyright Technology
                      Conference, awarded for copyright technology
                    </li>
                    <li className="max-w-md">
                      • 2015 Best Management Award in Korea, awarded for
                      technological innovation
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-row gap-3">
                    <div className="w-1 h-7 bg-[#7B2CBF]" />
                    <h3 className="text-md font-semibold text-black mb-2">
                      Published Books & Columns
                    </h3>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-4 p-3">
                    <li>• Book: Smart Platform One Core</li>
                    <li>
                      • Column: Series on innovation in social media platforms
                      and digital advertising ecosystems, and many more
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-full p-8 bg-white">
      <div className="max-w-full mx-auto mt-10">
        <div>
          <div className="flex flex-col lg:flex-row">
            {/* Left Section - Profile Summary */}
            <div className="flex flex-col items-center text-center lg:w-1/3">
              <div className="w-64 h-64 rounded-full overflow-hidden">
                <Image
                  src="https://storage.googleapis.com/assets-addeep/images/JaeyoungProfile.png"
                  alt="Kevin Jaeyoung Yoon"
                  width={300}
                  height={300}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <button
                className="mt-10 py-5 px-12 bg-gradient-to-r from-[#CE9AFF] via-[#A855F7] to-[#833AB4] text-white rounded-full hover:bg-purple-700 transition-colors duration-200 font-bold"
                onClick={() => router.push("/about-us/team-work/jaeyoung")}
              >
                View More
              </button>
            </div>

            {/* Right Section - Detailed Information */}
            <div className="lg:w-2/3 space-y-6">
              <h2 className="text-4xl font-bold text-black mb-1">
                Kevin Jaeyoung Yoon
              </h2>
              <div className="text-xl space-y-1">
                <p className="text-[#4A1A5C] font-semibold">
                  Addeep Inc. Founder and CVO (Chief Vision Officer)
                </p>
                <p>US Addeep Inc. Chief Executive Officer CEO</p>
              </div>
              {/* Education */}
              <div>
                <div className="flex flex-row gap-3">
                  <div className="w-1 h-7 bg-[#7B2CBF]" />
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Education & Leadership
                  </h3>
                </div>
                <ul className="text-md text-gray-700 space-y-1 p-3">
                  <li>
                    • Current) Director, Korea AGI Enterprises Association
                  </li>
                  <li>• Hayfield University Graduate School of Business MBA</li>
                  <li>
                    • Completed CFO Academy at Seoul National University
                    Graduate School of Business
                  </li>
                  <li>• Founder of Addeep Group</li>
                </ul>
              </div>

              {/* Experience */}
              <div>
                <div className="flex flex-row gap-3">
                  <div className="w-1 h-7 bg-[#7B2CBF]" />
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Key Achievements
                  </h3>
                </div>
                <ul className="text-md text-gray-700 space-y-1 p-3">
                  <li>
                    • Launched Addeep Platform Series Product Global Service,
                    R&D Secured SNS Service, and Base Digital Platform Service
                  </li>
                  <li>
                    • Commercialized OTT smart content platform and smart
                    device, as well as AI social robot product series
                  </li>
                  <li>
                    • Pioneer of 'ACI' content security technology for
                    protecting digital content rights
                  </li>
                  <li>
                    • Oversaw global management strategies in South Korea, U.S.,
                    China, Singapore, Southeast Asia, and EU ICT
                  </li>
                </ul>
              </div>

              {/* Awards */}
              <div>
                <div className="flex flex-row gap-3">
                  <div className="w-1 h-7 bg-[#7B2CBF]" />
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Major Awards
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-md text-gray-700 space-y-1 p-3">
                  <li className="max-w-md">
                    2017 18th Small and Medium-sized Enterprise Technology
                    Innovation Exhibition hosted by the Ministry of SMEs and
                    Startups, awarded the Prime Minister's Award
                  </li>
                  <li className="max-w-md">
                    2017 KCS CICON Award for Creative Management
                  </li>
                  <li className="max-w-md">
                    2017 Ministry of Trade, Industry, and Energy, selected as an
                    outstanding company for brainpower in the 'K - BrainPower'
                    program
                  </li>
                  <li className="max-w-md">
                    2017 received the US White House Donald Trump Presidential
                    Award
                  </li>
                  <li className="max-w-md">
                    2016 ICOTEC International Copyright Technology Conference,
                    awarded for copyright technology
                  </li>
                  <li className="max-w-md">
                    2015 Best Management Award in Korea, awarded for
                    technological innovation
                  </li>
                </div>
              </div>

              {/* Book */}
              <div>
                <div className="flex flex-row gap-3">
                  <div className="w-1 h-7 bg-[#7B2CBF]" />
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Published Books & Columns
                  </h3>
                </div>
                <ul className="text-md text-gray-700 space-y-1 p-3">
                  <li>• Book: Smart Platform One Core</li>
                  <li>
                    • Column: Series on innovation in social media platforms and
                    digital advertising ecosystems, and many more
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondHuman = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div className="w-full p-4 bg-[#E5E7EB]">
        <div className="mx-auto">
          <div className="p-4">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 mb-8 rounded-full overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/assets-addeep/images/KyoungsuProfile.png"
                    alt="Chris Kang"
                    width={256}
                    height={256}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                <h2 className="text-2xl font-bold text-black mb-1">
                  Chris Kang
                </h2>
                <div className="text-md text-black space-y-1">
                  <p className="text-[#4A1A5C] font-semibold">Addeep Inc CEO</p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                {/* Education */}
                <div className="flex flex-row gap-3">
                  <div className="w-1 h-7 bg-[#7B2CBF]" />
                  <h3 className="text-md font-semibold text-black mb-2">
                    Education & Background
                  </h3>
                </div>

                <ul className="text-md text-gray-700 space-y-4 p-3">
                  <li>
                    • Bachelor's degree in Computer Engineering from Woosong
                    University
                  </li>
                  <li>• Former Vice President and COO of Titan Platform</li>
                  <li>• Former CEO of Titan Studio</li>
                  <li>
                    • Expert in network integration, information security
                    development, and security consulting
                  </li>
                </ul>
                {/* Global Operations & Management */}
                <div className="flex flex-row gap-3 mt-8">
                  <div className="w-1 h-7 bg-[#7B2CBF]" />
                  <h3 className="text-md font-semibold text-black mb-2">
                    Global Operations & Management
                  </h3>
                </div>
                <ul className="text-md text-gray-700 space-y-4 p-3">
                  <li>
                    • Managed operations and established global business
                    strategies, administrative management for 7 overseas
                    subsidiaries
                  </li>
                  <li>
                    • Recipient of the Excellent Award at the 1st JST Venture
                    Startup Contest
                  </li>
                  <li>
                    • Oversaw the management of a studio for producing digital
                    content for broadcasting and advertising
                  </li>
                  <li>
                    • Responsivle for personal affairs, administration, legal
                    affairs, and business planning and management
                  </li>
                </ul>

                <div className="flex flex-row gap-3 mt-8">
                  <div className="w-1 h-7 bg-[#7B2CBF]" />
                  <h3 className="text-md font-semibold text-black mb-2">
                    International Partnerships
                  </h3>
                </div>
                <ul className="text-md text-gray-700 space-y-4 p-3">
                  <li>
                    • Established network cooperation partnerships for business
                    expansion in France, Switzerland, and other EU countries
                  </li>
                  <li>
                    • Established and operated IDC data infrastructure services
                    for smart content services in collaboration with China
                    Unicorn
                  </li>
                  <li>
                    • Collaborated with China Unicorn for strategic joint
                    ventures to promote smart content platforms and smart device
                    business in China
                  </li>
                  <li>
                    • Established strategic business cooperation partnerships
                    with Softbank Solution China
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-full p-8 bg-gray-50">
      <div className="max-w-full mx-auto mt-10">
        <div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col items-center lg:w-1/3">
              <div className="w-64 h-64 rounded-full overflow-hidden">
                <Image
                  src="https://storage.googleapis.com/assets-addeep/images/KyoungsuProfile.png"
                  alt="Chris Kang"
                  width={256}
                  height={256}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
            <div className="lg:w-2/3 space-y-6">
              <h2 className="text-4xl font-bold text-black mb-1">Chris Kang</h2>
              <div className="text-xl space-y-1">
                <p className="text-[#4A1A5C] font-semibold">Addeep Inc CEO</p>
              </div>
              {/* Education */}
              <div>
                <div className="flex flex-row gap-3">
                  <div className="w-1 h-7 bg-[#7B2CBF]" />
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Education & Background
                  </h3>
                </div>
                <ul className="text-md text-gray-700 space-y-1 p-3">
                  <li>
                    • Bachelor's degree in Computer Engineering from Woosong
                    University
                  </li>
                  <li>• Former Vice President and COO of Titan Platform</li>
                  <li>• Former CEO of Titan Studio</li>
                  <li>
                    • Expert in network integration, information security
                    development, and security consulting
                  </li>
                </ul>
                <div className="flex flex-row gap-3 mt-8">
                  <div className="w-1 h-7 bg-[#7B2CBF]" />
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Global Operations & Management
                  </h3>
                </div>
                <ul className="text-md text-gray-700 space-y-1 p-3">
                  <li>
                    • Managed operations and established global business
                    strategies, administrative management for 7 overseas
                    subsidiaries
                  </li>
                  <li>
                    • Recipient of the Excellent Award at the 1st JST Venture
                    Startup Contest
                  </li>
                  <li>
                    • Oversaw the management of a studio for producing digital
                    content for broadcasting and advertising
                  </li>
                  <li>
                    • Responsivle for personal affairs, administration, legal
                    affairs, and business planning and management
                  </li>
                </ul>
                <div className="flex flex-row gap-3 mt-8">
                  <div className="w-1 h-7 bg-[#7B2CBF]" />
                  <h3 className="text-lg font-semibold text-black mb-2">
                    International Partnerships
                  </h3>
                </div>
                <ul className="text-md text-gray-700 space-y-1 p-3">
                  <li>
                    • Established network cooperation partnerships for business
                    expansion in France, Switzerland, and other EU countries
                  </li>
                  <li>
                    • Established and operated IDC data infrastructure services
                    for smart content services in collaboration with China
                    Unicorn
                  </li>
                  <li>
                    • Collaborated with China Unicorn for strategic joint
                    ventures to promote smart content platforms and smart device
                    business in China
                  </li>
                  <li>
                    • Established strategic business cooperation partnerships
                    with Softbank Solution China
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <TeamWorkHeader />
      <TeamWorkHero />
      <div className="flex flex-col items-center justify-center">
        <FirstHuman />
        <SecondHuman />
      </div>
    </div>
  );
}
