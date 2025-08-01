"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
// import LanguageSwitcher from "./LanguageSwitcher";
import PopupBrandForm from "../form/PopupBrandForm";
import { Link as ScrollLink } from "react-scroll";
import { DialogTitle } from "../ui/dialog";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const t = useTranslations("navbar");

  const navLinks = [
    { label: t("links.home"), href: "hero" },
    { label: t("links.influencers"), href: "influencers" },
    { label: t("links.brands"), href: "brands" },
    { label: t("links.earlyBird"), href: "early-bird" },
    { label: t("links.contact"), href: "footer" },
  ];

  return (
    <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-30 w-full flex justify-center">
      <div className="container mx-auto max-w-11/12 border-[0.2px] border-main shadow flex justify-between items-center p-5 backdrop-blur-sm rounded-md bg-black/10">
        <Image src={"/logo.png"} alt="logo" width={150} height={100} />

        {/* Desktop Navigation (hidden on mobile) */}
        <nav className="hidden md:flex gap-5">
          {navLinks.map((link) => (
            <div key={link.href} className="relative">
              <ScrollLink
                to={link.href}
                className="font-semibold cursor-pointer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                {link.label}
              </ScrollLink>

              {/* <Link href={link.href} className="font-semibold"></Link> */}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-[10px] bg-main"
                initial={{ scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              className="p-2 hover:bg-transparent focus:ring-0"
            >
              <Menu className="h-6 w-6 text-main" />
            </Button>
          </SheetTrigger>

          <DialogTitle className=" hidden">Nav mobile</DialogTitle>

          <SheetContent
            side="right"
            className="bg-body backdrop-blur-sm px-5 border-gray-600"
          >
            <div className="flex flex-col h-full pt-10">
              <div className="flex mb-28">
                <Image src={"/logo.png"} alt="logo" width={150} height={100} />
              </div>
              <div className="flex flex-col gap-8 items-start">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <ScrollLink
                      to={link.href}
                      spy={true}
                      smooth={true}
                      offset={-70} // Adjust for fixed header height
                      duration={500}
                      href={link.href}
                      className="text-xl font-semibold hover:text-main transition-colors"
                    >
                      {link.label}
                    </ScrollLink>
                  </SheetClose>
                ))}
                <div className=" md:hidden flex items-center gap-2.5">
                  <PopupBrandForm>
                    <Button className="bg-main border border-main lg:w-auto text-black hover:bg-transparent hover:text-main">
                      {t("cta")}
                    </Button>
                  </PopupBrandForm>
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="hidden md:flex items-center gap-2.5">
          <LanguageSwitcher />
          <PopupBrandForm>
            <Button className="bg-main border border-main text-white hover:bg-transparent hover:text-main">
              {t("cta")}
            </Button>
          </PopupBrandForm>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
