"use client";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import {
  BadgeDollarSign,
  BarChart3,
  BrainCircuit,
  Briefcase,
  CalendarCheck,
  FileText,
  Gift,
  Handshake,
  MailOpen,
  MoveUpRight,
  ScrollText,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useTranslations } from "next-intl";
import LazyVideoPlayer from "../ui/LazyVideoPlayer";

const BenefitsInfluenceur = () => {
  const t = useTranslations("benefitsInfluenceur");
  const data = [
    { key: "aiMatching", icon: BrainCircuit },
    { key: "personalizedBriefs", icon: MailOpen },
    { key: "preWrittenScripts", icon: FileText },
    { key: "topBrandAccess", icon: Briefcase },
    { key: "smartPriceSuggestion", icon: BadgeDollarSign },
    { key: "negotiationTools", icon: Handshake },
    { key: "campaignManager", icon: CalendarCheck },
    { key: "performanceKPIs", icon: BarChart3 },
    { key: "businessOpportunities", icon: TrendingUp },
    { key: "clearAgreements", icon: ScrollText },
    { key: "boostedVisibility", icon: Sparkles },
    { key: "earlyBirdPerks", icon: Gift },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="my-12 flex-col gap-5 container mx-auto px-4"
      id="influencers"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-5">
        {/* TEXT FIRST ON MOBILE */}
        <div className="flex flex-col gap-5 col-span-2 justify-between order-1 md:order-2">
          <h3 className="text-xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f9ffcb] via-[#e0f74e] to-[#c4db2c]">
            <span className="text-center uppercase">{t("title")}</span> <br />
            {t("subtitle")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((feature) => (
              <div
                data-aos="fade-in"
                key={feature.key}
                className={`border-[0.2px] border-gray-700 px-5 py-2 rounded-md flex flex-col gap-2 justify-between backdrop-blur-3xl
                transition-all duration-300 ease-in-out 
                hover:bg-main hover:text-black hover:shadow-glass-lg
                group relative`}
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex gap-2.5 items-center">
                    <div
                      className="flex justify-center items-center bg-main text-black p-2 border border-gray-700 rounded-full 
                    group-hover:bg-black group-hover:text-main transition-all duration-300"
                    >
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {t(`features.${feature.key}.title`)}
                      </h3>
                      <p className="text-sm group-hover:text-black">
                        {t(`features.${feature.key}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button className="bg-main border lg:h-9  h-auto !py-3.5 text-wrap border-main text-black hover:bg-transparent hover:text-main text-sm w-full">
              {t("cta")}
              <MoveUpRight className="h-8 w-8 md:h-12 md:w-12 ml-2" />
            </Button>
          </div>
        </div>

        {/* VIDEO SECOND ON MOBILE */}
        <div className="h-full flex justify-center mb-5 rounded-4xl w-full order-2 md:order-1 mt-5 lg:mt-0">
          <LazyVideoPlayer
            src="/videos/Infl-TO-VF.mp4"
            poster="/poster.jpeg"
            className="h-full"
            autoPlay={false}
            controls={true}
            muted={false}
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitsInfluenceur;
