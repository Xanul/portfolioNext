/* eslint-disable @next/next/no-img-element */
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mb-[60px] sm:mb-20" id="contact">
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50"/>
      </div> */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span>your</span> digital level to the next level
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and lets discuss how i can help ypu achive your
          goals
        </p>
        <a href="mailto:rivas.060@gmail.com">
          <MagicButton
            title="Let’s Talk"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col gap-10 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Rodrigo Rivas Martinez Dev
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, img, link }) => (
            <Link key={id} href={link} target="_blank">
              <div
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter
                  backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border
                  border-black-300">
                <img src={img} alt={img} width={20} height={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
