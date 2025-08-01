import { RocketIcon } from "lucide-react";
import React from "react";
import { Rocket, PartyPopper, Briefcase } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

const EarlyBird = () => {
  const t = useTranslations("earlyBird");

  const items = [
    {
      icon: Rocket,
      title: t("priorityAccessToThePlatform.title"),
      description: t("priorityAccessToThePlatform.description"),
    },
    {
      icon: PartyPopper,
      title: t("invitationToOurExclusiveLaunchEvent.title"),
      description: t("invitationToOurExclusiveLaunchEvent.description"),
    },
    {
      icon: Briefcase,
      title: t("premiumVisibilityInTheMarketplace.title"),
      description: t("premiumVisibilityInTheMarketplace.description"),
    },
  ];
  return (
    <div
      className="gap-5 container mx-auto my-24 px-5 text-white"
      id="early-bird"
    >
      <div className="flex flex-col gap-3.5 text-center">
        <div className="flex">
          {/* <p className="text-sm justify-center mx-auto items-center gap-2.5 inline-flex backdrop-blur-sm border-[0.2px] border-gray-700 p-1 rounded-md px-5">
            <Flame />
            {t("name")}
          </p> */}
        </div>
        <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-main via-main to-main">
          {t("title")}
        </h3>
        <p className="text-xl">{t("description")}</p>
        <p>{t("content")}</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 mt-5">
          {items.slice(0, 6).map((feature) => (
            <div
              key={feature.title}
              className={`border-[0.2px] border-gray-700 p-5 rounded-md flex flex-col gap-2 justify-between backdrop-blur-3xl
         transition-all duration-300 ease-in-out 
         hover:bg-main hover:text-black hover:shadow-glass-lg
         group relative`}
            >
              <div className="flex flex-col gap-2.5 justify-between items-center">
                <div
                  className="flex justify-center items-center bg-main text-black p-2 border border-gray-700 rounded-full 
             group-hover:bg-black group-hover:text-main transition-all duration-300"
                >
                  <feature.icon className="h-5 w-5 " />
                </div>
                <h5 className="flex gap-2.5 text-xl items-center h-14">
                  {feature.title}
                </h5>
                <p>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button className="bg-main border w-full lg:w-auto  !px-12 border-main text-black hover:bg-transparent hover:text-main py-2 h-auto">
            {t("cta")}
            <RocketIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EarlyBird;
