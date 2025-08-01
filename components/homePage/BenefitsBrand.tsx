"use client";
import { MoveUpRight } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import {
  FileText,
  ClipboardList,
  ScrollText,
  Users,
  BadgeDollarSign,
  ShoppingBag,
  // Workflow,
  // Ear,
  // BarChart3,
} from "lucide-react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useTranslations } from "next-intl";
import PopupBrandForm from "../form/PopupBrandForm";

const BenefitsBrand = () => {
  const t = useTranslations("benefitsBrand");

  const data = [
    { key: "aiBriefGenerator", icon: FileText },
    { key: "aiCampaignPlanner", icon: ClipboardList },
    { key: "aiScriptGenerator", icon: ScrollText },
    { key: "aiInfluencerMatching", icon: Users },
    { key: "smartPriceEstimator", icon: BadgeDollarSign },
    { key: "productMarketplace", icon: ShoppingBag },
    // { key: "streamlinedWorkflow", icon: Workflow },
    // { key: "influencerSocialListening", icon: Ear },
    // { key: "performanceDashboard", icon: BarChart3 },
    // { key: "fullCampaignControl", icon: LayoutDashboard },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="my-12 md:my-28 container mx-auto flex-col gap-5 px-4"
      id="brands"
    >
      <div className="grid gap-5">
        {/* Content Section */}
        <div className="flex flex-col gap-5 col-span-2 justify-between">
          <h3 className="text-center text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3dd1fe] via-main to-[#410093]">
            {t("title")} <br />
          </h3>
          <p className="text-center text-xl">{t("subtitle")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.map((feature) => (
              <div
                key={feature.key}
                data-aos="fade-in"
                className={`border-[0.2px] border-gray-700 p-5 rounded-md flex flex-col gap-2 justify-between backdrop-blur-3xl
                transition-all duration-300 ease-in-out 
                hover:bg-main hover:text-white hover:shadow-glass-lg
                group relative`}
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex gap-2.5 items-center">
                    <div
                      className="flex justify-center items-center bg-main text-white p-2 border border-gray-700 rounded-full 
                      group-hover:bg-black group-hover:text-white transition-all duration-300"
                    >
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">
                        {t(`features.${feature.key}.title`)}
                      </h4>
                    </div>
                  </div>
                      <p className="text-sm group-hover:text-white/70">
                        {t(`features.${feature.key}.description`)}
                      </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <PopupBrandForm>
              <Button className="bg-main border border-main hover:bg-transparent hover:text-main !h-auto text-white">
                {t("cta")}
                <MoveUpRight className="h-8 w-8 md:h-12 md:w-12 ml-2" />
              </Button>
            </PopupBrandForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsBrand;
