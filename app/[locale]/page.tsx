import React from "react";
import Hero from "@/components/homePage/Hero";
import BenefitsBrand from "@/components/homePage/BenefitsBrand";
import EarlyBird from "@/components/homePage/EarlyBird";
import BannerCta from "@/components/homePage/BannerCta";
import Brands from "@/components/homePage/Brands";
import Faq from "@/components/form/Faq";

const Page = () => {
  return (
    <>
      <Hero />
      <BenefitsBrand />
      <Brands />
      <EarlyBird />
      <Faq />
      <BannerCta /> 

    </>
  );
};

export default Page;
