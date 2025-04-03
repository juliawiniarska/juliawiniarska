"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiAmazonaws,
  SiGooglecloud,
  SiWireshark,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

// -- DANE O AUTORZE
const about = {
  title: "About me",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Julia Winiarska",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+48) 505 300 353",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    // {
    //   fieldName: "Nationality",
    //   fieldValue: "Polish",
    // },
    {
      fieldName: "Email",
      fieldValue: "juliaaw.business@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Polish",
    },
  ],
};

// -- DOŚWIADCZENIE
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  items: [
    {
      company: "4soft Software House - Web and Blockchain Applications",
      position: "Internship - Junior React Developer",
      duration: "June 2023 - June 2024",
    },
    {
      company: "University of Applied Sciences in Nysa",
      position: "Computer Science Student",
      duration: "2021 - present",
    },
  ],
};

// -- EDUKACJA
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  items: [
    {
      institution: "University of Applied Sciences in Nysa",
      degree: "Computer Science - Web Systems",
      duration: "2021 - 2025",
    },
    {
      institution: "I LO w Nysie im. Jana III Sobieskiego Carolinum",
      degree: "Mathematics, Physics, and Computer Science class",
      duration: "2018 - 2021",
    },
  ],
};

// -- OGÓLNE SKILLE (z ikonami)
const skills = {
  title: "My skills",
  skillList: [
    // Języki
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiPhp />, name: "PHP 8" },
    // Frameworki
    { icon: <FaNodeJs />, name: "Node.js (Express)" },
    { icon: <SiLaravel />, name: "Laravel" },
    { icon: <FaReact />, name: "React" },
    { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" className="w-8 h-8" alt="Vue.js" />, name: "Vue.js" },
    // Bazy
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    // Cloud & DevOps
    { icon: <SiAmazonaws />, name: "AWS (Basic)" },
    { icon: <SiGooglecloud />, name: "GCP (Basic)" },
    { icon: <SiDocker />, name: "Docker (Basic)" },
    { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-8 h-8" alt="Git" />, name: "Git" },
  ],
};

// -- CYBERSECURITY SKILLS (w kafelkach)
const cybersecuritySkills = {
  title: "Cybersecurity Skills",
  skillList: [
    {
      title: "Network & System Fundamentals",
      description:
        "Basic Linux administration, Docker (containers), configuring network traffic analysis",
    },
    {
      title: "Offensive Security Basics",
      description:
        "TryHackMe labs (Pre-Security, Complete Beginner) — pentesting fundamentals, vulnerabilities, exploits",
    },
    {
      title: "CompTIA Security+ Prep",
      description:
        "Studying network security, threats, vulnerabilities, and best practices",
    },
    {
      title: "Secure Development",
      description:
        "Authentication, session management, data sanitization in web applications",
    },
    {
      title: "Programming & Scripting",
      description:
        "Proficient in Python (automation scripts, network scanning), JavaScript, essential Bash/C",
    },
    {
      title: "Security Tools",
      description:
        "Scapy, Wireshark, Nmap, Burp Suite, and SIEM basics",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* ---- LEWE MENU (LISTA ZAKŁADEK) ---- */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="cybersecurity">Cybersecurity Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* ---- PRAWA STRONA (ZAWARTOŚĆ ZAKŁADEK) ---- */}
          <div className="min-h-[70vh] w-full">
            {/* EXPERIENCE */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] max-h-[330px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* EDUCATION */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] max-h-[330px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* SKILLS */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group p-4">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                              <p className="mt-2 text-sm capitalize text-white/80">
                                {skill.name}
                              </p>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* CYBERSECURITY SKILLS */}
            <TabsContent value="cybersecurity" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {cybersecuritySkills.title}
                </h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
                    {cybersecuritySkills.skillList.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] min-h-[150px] py-6 px-4 rounded-xl flex flex-col justify-center items-center md:items-start gap-2"
                      >
                        <h4 className="text-xl font-semibold text-accent text-center md:text-left">
                          {skill.title}
                        </h4>
                        <p className="text-white/80 text-sm text-center md:text-left">
                          {skill.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* ABOUT ME */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
