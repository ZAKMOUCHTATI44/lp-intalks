"use client";
import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import axios from "axios";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const links = [
    { icon: "/media/instagram.png", href: "https://www.instagram.com/hypeoai" },
    {
      icon: "/media/facebook.png",
      href: "https://www.facebook.com/profile.php?id=61574909289181",
    },
    {
      icon: "/media/tiktok.png",
      href: "https://www.tiktok.com/@hypeo.ai?_t=ZM-8vMdcul5Pnj&_r=1",
    },
    {
      icon: "/media/linkedin.png",
      href: "https://www.linkedin.com/company/hypeo-ai/",
    },
  ];

  const t = useTranslations("");

  const navLinks = [
    { label: t("navbar.links.home"), href: "hero" },
    { label: t("navbar.links.influencers"), href: "influencers" },
    { label: t("navbar.links.brands"), href: "brands" },
    { label: t("navbar.links.earlyBird"), href: "early-bird" },
    { label: t("navbar.links.contact"), href: "footer" },
  ];


  const [email, setEmail] = useState<string>("");
  const [success, setSuccess] = useState<string | null>();

  const submitNewsLetter = async () => {
    try {
      await axios.post("/news-letter", email);
      setSuccess("Merci pour votre inscription !");
      setEmail("");
    } catch (err) {
      console.log(err);
      setSuccess("Merci pour votre inscription !");
    }
  };

  return (
    <div className="md:mt-28 mt-24 max-w-11/12 container mx-auto shadow flex flex-col justify-between items-center p-5 bg-dark rounded-3xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12">
        {/* Logo & Social Links Section */}
        <div className="flex flex-col gap-5 items-center">
          <Image src={"/logo.png"} alt="Logo" width={150} height={250} />
          <p className="text-center text-sm sm:text-base">
            {t("footer.description")}
          </p>
          <div className="flex gap-3 mt-3">
            {links.map((link, index) => (
              <a
                href={link.href}
                target="_blank"
                key={index}
                className=" border border-white/20 p-2 rounded-md transition-all duration-300 hover:bg-gray-300/20 hover:-translate-y-1 group"
              >
                <Image src={link.icon} alt="Icon" width={24} height={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-5 pl-0 sm:pl-12">
          <p className="font-semibold text-sm sm:text-base">
            {t("footer.quickLink")}
          </p>
          {navLinks.map((link) => (
            <ScrollLink
              key={link.href}
              to={link.href}
              className="flex gap-2.5 items-center text-sm sm:text-base cursor-pointer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <ChevronRight className="h-4 w-4" />

              {link.label}
            </ScrollLink>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-3 col-span-1 sm:col-span-2 md:col-span-2">
          <h2 className="font-semibold text-lg sm:text-xl">
            {t("footer.newsletter.title")}
          </h2>
          <p className="text-sm sm:text-base">
            {t("footer.newsletter.subTitle")}
          </p>
          {success && <p className="text-green-700 font-semibold">{success}</p>}
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("footer.newsletter.placeholder")}
            className="rounded-xl"
          />
          <Button
            onClick={() => submitNewsLetter()}
            className="bg-transparent border border-white rounded-2xl font-bold mt-3"
          >
            {t("footer.newsletter.cta")}
          </Button>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="flex lg:flex-row flex-col items-center gap-5 justify-between w-full text-xs sm:text-sm">
        <div>
          <Link href={"#"}>{t("footer.copyright")}</Link>
        </div>
        <div>
          <Link href={"/"}>{t("footer.mentions_legales")}</Link>
        </div>
        <div>
          <Link href={"/"}>{t("footer.politique_confidentialite")}</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
