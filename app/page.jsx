"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDownload = (language) => {
    if (language === "English") {
      window.location.href = "/assets/CV Julia Winiarska.pdf";
    } else if (language === "Polish") {
      window.location.href = "/assets/Winiarska_Julia_CV.pdf";
    }
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Junior Security Analyst</span>
            <h1 className="h1 mb-6">
              Hi, I&apos;m <br /> <span className="text-accent">Julia Winiarska</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Motivated Computer Science graduate transitioning into Cybersecurity. Currently sharpening my skills on TryHackMe by following the Security Analyst track and preparing for the CompTIA Security+ certification. I combine a solid full-stack background with a growing focus on network and application security to develop secure, elegant digital solutions.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="relative">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                  onClick={toggleDropdown}
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded shadow-lg">
                    <button
                      onClick={() => handleDownload("English")}
                      className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                    >
                      English
                    </button>
                    {/* <button
                      onClick={() => handleDownload("Polish")}
                      className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                    >
                      Polish
                    </button> */}
                  </div>
                )}
              </div>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
