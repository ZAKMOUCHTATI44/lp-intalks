"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Slider = () => {
  const images = [
    "/logos/facebook.png",
    "/logos/instagram.png",
    "/logos/linkedin.png",
    "/logos/snapchat.png",
    "/logos/tiktok.png",
    "/logos/youtube.png",
    "/logos/facebook.png",
    "/logos/instagram.png",
    "/logos/linkedin.png",
    "/logos/snapchat.png",
    "/logos/tiktok.png",
    "/logos/youtube.png",
    "/logos/facebook.png",
    "/logos/instagram.png",
    "/logos/linkedin.png",
    "/logos/snapchat.png",
    "/logos/tiktok.png",
    "/logos/youtube.png",
    "/logos/facebook.png",
    "/logos/instagram.png",
    "/logos/linkedin.png",
    "/logos/snapchat.png",
    "/logos/tiktok.png",
    "/logos/youtube.png",
    "/logos/facebook.png",
    "/logos/instagram.png",
    "/logos/linkedin.png",
    "/logos/snapchat.png",
    "/logos/tiktok.png",
    "/logos/youtube.png",
    "/logos/facebook.png",
    "/logos/instagram.png",
    "/logos/linkedin.png",
    "/logos/snapchat.png",
    "/logos/tiktok.png",
    "/logos/youtube.png",
    "/logos/facebook.png",
    "/logos/instagram.png",
    "/logos/linkedin.png",
    "/logos/snapchat.png",
    "/logos/tiktok.png",
    "/logos/youtube.png",
    "/logos/facebook.png",
    "/logos/instagram.png",
    "/logos/linkedin.png",
    "/logos/snapchat.png",
    "/logos/tiktok.png",
    "/logos/youtube.png",
    "/logos/facebook.png",
    "/logos/instagram.png",
    "/logos/linkedin.png",
    "/logos/snapchat.png",
    "/logos/tiktok.png",
    "/logos/youtube.png",
    "/logos/facebook.png",
    "/logos/instagram.png",
    "/logos/linkedin.png",
    "/logos/snapchat.png",
    "/logos/tiktok.png",
    "/logos/youtube.png",
    "/logos/facebook.png",
    "/logos/instagram.png",
    "/logos/linkedin.png",
    "/logos/snapchat.png",
    "/logos/tiktok.png",
    "/logos/youtube.png",
    "/logos/facebook.png",
    "/logos/instagram.png",
    "/logos/linkedin.png",
    "/logos/snapchat.png",
    "/logos/tiktok.png",
    "/logos/youtube.png",
  ];

  return (
    <div className="my-12">
      <Marquee className="flex items-center gap-12">
        <div className="flex items-center gap-12">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="Slide Image"
              width={50}
              height={50}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Slider;
