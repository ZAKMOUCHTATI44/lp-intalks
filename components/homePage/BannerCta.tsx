import React from "react";
import { Button } from "../ui/button";
import { RocketIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const BannerCta = () => {
  const t = useTranslations("bandCta");

  return (
    <div className="container mx-auto max-w-11/12" id="footer">
      <div className="my-12 md:my-24 rounded-xl bg-band-cta text-white shadow-inner relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col gap-5 md:col-span-2 py-12 md:py-24 px-4 md:px-8">
            <h2 className="text-xl md:text-3xl font-semibold">{t("title")}</h2>
            <p className="text-sm md:text-xl">{t("description")}</p>
            <div className="flex">
                <Button className="bg-transparent border border-white  text-white font-bold text-base md:text-lg px-8 md:px-12 hover:text-main hover:border-main">
                  {t("cta")}
                  <RocketIcon className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
            </div>
          </div>
          {/* <div
            className="bg-cover h-48 md:h-full w-full rounded-b-xl md:rounded-xl md:rounded-l-none"
            style={{ backgroundImage: `url("/hypeo-app.png")` }}
          ></div> */}
        </div>
      </div>
    </div>
  );
};

export default BannerCta;
