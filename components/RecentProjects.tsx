/* eslint-disable @next/next/no-img-element */
"use client";

import { projects } from "@/data";

import { FaLocationArrow } from "react-icons/fa";
import { PinContainer } from "./ui/3DPin";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="pt-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 sm:gap-16 sm:mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="flex items-center justify-center h-[32rem] sm:h-[41rem] lg:min-h-[32.5rem]
              sm:w-[570px] w-[80vw]">
            <PinContainer title={link}>
              <Link href={link} target="_blank">
                <div
                  className="flex items-center relative justify-center sm:w-[570px] sm:h-[40vh] h-[30vh]
                    w-[80vw] overflow-hidden mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="flex justify-center items-center border border-white/[0.2] rounded-full bg-black
                          lg:w-10 lg:h-10 w-8"
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}>
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </Link>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
