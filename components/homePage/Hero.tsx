"use client";
import React from "react";
import { motion } from "framer-motion";
import Particles from "../animations/Particles";
import { Button } from "../ui/button";
import Image from "next/image";
import { ArrowRight, Rocket } from "lucide-react";
import CountUp from "../animations/CountUp";
import { useTranslations } from "next-intl";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  const t = useTranslations("hero");

  const influencers = [
    "/influencers/1.webp",
    "/influencers/2.webp",
    "/influencers/3.webp",
  ];

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center gap-5"
      id="hero"
    >
      <div className="w-full h-screen relative">
        <Particles
          particleColors={["#ff56e3", "#ff56e3"]}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <motion.div
          className="container mx-auto px-5 max-w-11/12 absolute w-full mt-12 top-1/2 right-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Influencers Section */}
          <div className="flex justify-center items-center cursor-pointer">
            <Button className="flex items-center border-[0.2px] border-main px-2.5 py-1.5 rounded-md gap-2.5 bg-transparent hover:bg-main">
              <div className="ml-3 flex">
                {influencers.map((profil, index) => (
                  <Image
                    key={profil}
                    src={profil}
                    alt={"App"}
                    width={30}
                    height={30}
                    className={`rounded-full border-2 border-emerald-900 ${
                      index !== 0 ? "-ml-3" : ""
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm">
                {t("join")}
                <span className=" px-1">
                  <CountUp
                    from={0}
                    to={2}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  M +
                </span>
                {t("Influencers")}
              </p>

              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Title */}
          <motion.div
            className="text-3xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3dd1fe] via-main to-[#410093]"
            variants={itemVariants}
            dangerouslySetInnerHTML={{ __html: t("title") }}
          ></motion.div>

          {/* Description */}
          <motion.p
            className="lg:text-3xl text-lg font-semibold text-soft-white/80"
            variants={itemVariants}
            dangerouslySetInnerHTML={{ __html: t("subTitle") }}
          ></motion.p>

          {/* Buttons */}
          <motion.div
            className="w-full lg:w-1/2 mx-auto gap-5"
            variants={itemVariants}
          >
            <Button className="bg-main border border-main text-white hover:bg-transparent hover:text-main text-lg py-2 h-auto !px-12">
              {t("ctaBrand")}
              <Rocket />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
