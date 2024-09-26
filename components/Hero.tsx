import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

/* eslint-disable @next/next/no-img-element */

const Hero = () => {
  return (
    <div className="pb-8 sm:pb-14 pt-7 md:pt-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="white"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03]
          bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center
            dark:bg-black-100 bg-white
            [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div
        className="flex md:gap-10 flex-col md:flex-row justify-center items-center relative my-2
          md:my-16 z-10">
        <div
          className="flex-shrink-0 w-[200px] h-[200px] max-md:mb-6 md:w-[300px] md:h-[300px]
            lg:w-[350px] lg:h-[350px]">
          <img
            src="/profile4.jpg"
            alt="Rodrigo"
            width={500}
            height={500}
            className="rounded-full aspect-square object-cover border-2 border-white-100/50"
          />
        </div>
        <div
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center
            justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Development with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[38px] md:text-4xl lg:text-6xl"
            words="Turning Ideas Into Interactive Digital Solutions"
          />
          <p className="text-center md:tracking-wider mb-6 sm:mb-4 text-sm md:text-lg lg:text-xl">
            Hi, I&apos;m Rodrigo Rivas, a Developer based in México
          </p>
          <a href="#projects">
            <MagicButton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
