/* eslint-disable react/no-unescaped-entities */
"use client";

import type React from "react";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Cpu,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const aboutRef = useRef<HTMLElement>(null);
  const webRef = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLElement>(null);
  const iotRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f5e6c8] text-[#333333] font-mono">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#333333] text-[#f5e6c8] z-50 border-b-4 border-[#ff6b6b] px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold tracking-wider">
            Portfolio
          </h1>
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-[#ff6b6b] transition-colors"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection(webRef)}
              className="hover:text-[#ff6b6b] transition-colors"
            >
              WEB
            </button>
            <button
              onClick={() => scrollToSection(mobileRef)}
              className="hover:text-[#ff6b6b] transition-colors"
            >
              MOBILE
            </button>
            <button
              onClick={() => scrollToSection(iotRef)}
              className="hover:text-[#ff6b6b] transition-colors"
            >
              IOT
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="border-r border-[#333333]"></div>
            ))}
          </div>
          <div className="grid grid-rows-20 h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="border-b border-[#333333]"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-[#ff6b6b] text-[#f5e6c8] px-3 py-1 mb-4 text-sm">
              PORTFOLIO 2.0
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              FULL-STACK
              <br />
              DEVELOPER<span className="text-[#ff6b6b]">_</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Building digital experiences with a touch of nostalgia.
              Specializing in web, mobile, and IoT development.
            </p>
    
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <ChevronDown size={32} className="text-[#333333]" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="py-16 md:py-24 px-4 bg-[#333333] text-[#f5e6c8]"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#ff6b6b]"></div>
              <div className="relative bg-[#444444] p-1">
                <div className="aspect-square w-full max-w-md mx-auto overflow-hidden">
                  <div className="aspect-square w-full max-w-md mx-auto overflow-hidden">
                    <Image
                      src="/pixel-laptop.svg"
                      alt="Retro Laptop"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover pixel-image hover:scale-105 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block bg-[#ff6b6b] text-[#f5e6c8] px-3 py-1 mb-4 text-sm">
                ABOUT ME
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                BACKGROUND & PROFILE<span className="text-[#ff6b6b]">_</span>
              </h2>
              <div className="space-y-4 mb-8">
                <p>
                  Hello my name is Faishal, I am an enthusiastic and eager-to-learn Informatics student
                  with strong skills in programming and application development.
                  Proficient in Python, JavaScript, and Flutter, with hands-on
                  experience in building mobile applications, websites, and IoT
                  integrations. Actively involved in academic projects and
                  internships, I am accustomed to working in teams, solving
                  problems, and adapting quickly. I am ready to contribute fresh
                  ideas and a passion for growth in the dynamic world of
                  technology.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-4 border-[#ff6b6b] pl-4">
                  <h3 className="font-bold mb-1">EDUCATION</h3>
                  <p className="text-sm text-[#f5e6c8]/80">
                    Computer Science, B.Sc.
                  </p>
                </div>
                <div className="border-l-4 border-[#ff6b6b] pl-4">
                  <h3 className="font-bold mb-1">LOCATION</h3>
                  <p className="text-sm text-[#f5e6c8]/80">
                    Yogyakarta, Indonesia
                  </p>
                </div>
                <div className="border-l-4 border-[#ff6b6b] pl-4">
                  <h3 className="font-bold mb-1">LANGUAGES</h3>
                  <p className="text-sm text-[#f5e6c8]/80">
                    Indonesian, English
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Link
                  href="https://github.com/faishaltsq"
                  className="text-[#f5e6c8] hover:text-[#ff6b6b]"
                  target="_blank"
                >
                  <Github size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/muhammad-faishal-tsaqief-7775b3248/"
                  className="text-[#f5e6c8] hover:text-[#ff6b6b]"
                  target="_blank"
                >
                  <Linkedin size={24} />
                </Link>
                <Link href="mailto:faishaltsq@gmail.com" target="_blank" className="text-[#f5e6c8] hover:text-[#ff6b6b]">
                  <Mail size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Programming Section */}
      <section
        ref={webRef}
        className="py-16 md:py-24 px-4 bg-[#f5e6c8] text-[#333333] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="border-r border-[#333333]"></div>
            ))}
          </div>
          <div className="grid grid-rows-20 h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="border-b border-[#333333]"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto relative">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-block bg-[#ff6b6b] text-[#f5e6c8] px-3 py-1 mb-4 text-sm">
                Intermediate
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                WEB PROGRAMMING<span className="text-[#ff6b6b]">_</span>
              </h2>
              <div className="space-y-4 mb-8">
                <p>
                  I build modern, responsive web applications using the latest
                  technologies and best practices. My focus is on creating fast,
                  accessible, and user-friendly experiences.
                </p>
                <p>
                  From static sites to complex web applications, I handle the
                  full development lifecycle with attention to detail and
                  performance optimization.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#333333] text-[#f5e6c8] rounded-full">
                    <Code size={24} />
                  </div>
                  <span className="font-bold">HTML/CSS/JS</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#333333] text-[#f5e6c8] rounded-full">
                    <Code size={24} />
                  </div>
                  <span className="font-bold">Vue/Next.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#333333] text-[#f5e6c8] rounded-full">
                    <Code size={24} />
                  </div>
                  <span className="font-bold">Node.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#333333] text-[#f5e6c8] rounded-full">
                    <Globe size={24} />
                  </div>
                  <span className="font-bold">Full-Stack</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-4 border-[#ff6b6b]"></div>
                <div className="relative bg-[#333333] p-6 text-[#f5e6c8] font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4 border-b border-[#f5e6c8]/20 pb-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff6b6b]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffcc5c]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#88d8b0]"></div>
                    <span className="ml-2 text-xs opacity-70">index.html</span>
                  </div>
                  <pre className="overflow-x-auto">
                    <code>
                      {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Welcome to my portfolio</h1>
    <nav>
      <!-- Navigation links -->
    </nav>
  </header>
  
  <main>
    <section id="projects">
      <!-- Project showcase -->
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Development Section */}
      <section
        ref={mobileRef}
        className="py-16 md:py-24 px-4 bg-[#4a6b8a] text-[#f5e6c8]"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-block bg-[#ff6b6b] text-[#f5e6c8] px-3 py-1 mb-4 text-sm">
                Intermediate
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                MOBILE DEVELOPMENT<span className="text-[#ff6b6b]">_</span>
              </h2>
              <div className="space-y-4 mb-8">
                <p>
                  I create native and cross-platform mobile applications that
                  deliver exceptional user experiences Android
                  devices.
                </p>
                <p>
                  My mobile development approach focuses on performance, offline
                  capabilities, and intuitive interfaces that users love.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#333333] text-[#f5e6c8] rounded-full">
                    <Smartphone size={24} />
                  </div>
                  <span className="font-bold">Flutter</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#333333] text-[#f5e6c8] rounded-full">
                    <Smartphone size={24} />
                  </div>
                  <span className="font-bold">Android/Kotlin</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative max-w-[300px]">
                <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#ff6b6b]"></div>
                <div className="relative">
                  <div className="w-[240px] h-[480px] bg-[#333333] rounded-[36px] p-3 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-[#333333] rounded-b-lg z-10"></div>
                    <div className="w-full h-full bg-[#f5e6c8] rounded-[28px] overflow-hidden relative">
                      <div className="w-full h-[60px] bg-[#ff6b6b] flex items-center justify-center">
                        <h3 className="text-[#f5e6c8] font-bold">MY APP</h3>
                      </div>
                      <div className="p-4">
                        <div className="w-full h-[100px] bg-[#333333] rounded-lg mb-4"></div>
                        <div className="w-full h-[20px] bg-[#333333] rounded-lg mb-2 opacity-80"></div>
                        <div className="w-3/4 h-[20px] bg-[#333333] rounded-lg mb-4 opacity-80"></div>

                        <div className="w-full h-[60px] bg-[#333333] rounded-lg mb-4 opacity-60"></div>
                        <div className="w-full h-[60px] bg-[#333333] rounded-lg mb-4 opacity-60"></div>
                        <div className="w-full h-[60px] bg-[#333333] rounded-lg opacity-60"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-[#333333] flex justify-around items-center px-4">
                        <div className="w-[40px] h-[40px] rounded-full bg-[#f5e6c8] flex items-center justify-center">
                          <Smartphone size={20} className="text-[#333333]" />
                        </div>
                        <div className="w-[40px] h-[40px] rounded-full bg-[#f5e6c8] flex items-center justify-center">
                          <Smartphone size={20} className="text-[#333333]" />
                        </div>
                        <div className="w-[40px] h-[40px] rounded-full bg-[#f5e6c8] flex items-center justify-center">
                          <Smartphone size={20} className="text-[#333333]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IoT Section */}
      <section
        ref={iotRef}
        className="py-16 md:py-24 px-4 bg-[#2a2a2a] text-[#f5e6c8]"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-block bg-[#ff6b6b] text-[#f5e6c8] px-3 py-1 mb-4 text-sm">
                Intermediate
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                IOT DEVELOPMENT<span className="text-[#ff6b6b]">_</span>
              </h2>
              <div className="space-y-4 mb-8">
                <p>
                  I build connected devices and IoT solutions using ESP32 and
                  other microcontrollers, creating smart systems that bridge the
                  physical and digital worlds.
                </p>
                <p>
                  My IoT projects range from home automation to industrial
                  monitoring systems, with a focus on reliability, security, and
                  ease of use.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#ff6b6b] text-[#f5e6c8] rounded-full">
                    <Cpu size={24} />
                  </div>
                  <span className="font-bold">ESP32</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#ff6b6b] text-[#f5e6c8] rounded-full">
                    <Cpu size={24} />
                  </div>
                  <span className="font-bold">Arduino</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#ff6b6b] text-[#f5e6c8] rounded-full">
                    <Cpu size={24} />
                  </div>
                  <span className="font-bold">MQTT</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#ff6b6b] text-[#f5e6c8] rounded-full">
                    <Cpu size={24} />
                  </div>
                  <span className="font-bold">Sensors</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-4 border-[#ff6b6b]"></div>
                <div className="relative bg-[#1a1a1a] p-6 rounded-lg">
                  <div className="bg-[#111111] p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-[#ff6b6b] font-bold">
                        ESP32 DASHBOARD
                      </h3>
                      <div className="w-3 h-3 rounded-full bg-[#88d8b0] animate-pulse"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-[#222222] p-3 rounded-lg">
                        <div className="text-xs text-[#f5e6c8]/60 mb-1">
                          TEMPERATURE
                        </div>
                        <div className="text-2xl font-bold">24.5°C</div>
                        <div className="w-full bg-[#333333] h-2 rounded-full mt-2">
                          <div
                            className="bg-[#ff6b6b] h-2 rounded-full"
                            style={{ width: "65%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="bg-[#222222] p-3 rounded-lg">
                        <div className="text-xs text-[#f5e6c8]/60 mb-1">
                          HUMIDITY
                        </div>
                        <div className="text-2xl font-bold">68%</div>
                        <div className="w-full bg-[#333333] h-2 rounded-full mt-2">
                          <div
                            className="bg-[#4a6b8a] h-2 rounded-full"
                            style={{ width: "68%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#222222] p-3 rounded-lg mb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-xs text-[#f5e6c8]/60 mb-1">
                            SYSTEM STATUS
                          </div>
                          <div className="text-lg font-bold">ONLINE</div>
                        </div>
                        <Cpu size={24} className="text-[#ff6b6b]" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-[#111111] p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff6b6b] animate-pulse"></div>
                      <div className="text-xs font-mono text-[#f5e6c8]/60">
                        ESP32-DEVKIT-V1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#333333] text-[#f5e6c8] border-t-4 border-[#ff6b6b]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold tracking-wider mb-2">
                faishaltsq
              </h2>
              <p className="text-sm text-[#f5e6c8]/70">
                © {new Date().getFullYear()} All Rights Reserved
              </p>
            </div>

            <div className="flex gap-6">
              <Link href="https://github.com/faishaltsq" target="_blank" className="text-[#f5e6c8] hover:text-[#ff6b6b]">
                <Github size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/muhammad-faishal-tsaqief-7775b3248/" target="_blank" className="text-[#f5e6c8] hover:text-[#ff6b6b]">
                <Linkedin size={20} />
              </Link>
              <Link href="mailto:faishaltsq@gmail.com" target="_blank" className="text-[#f5e6c8] hover:text-[#ff6b6b]">
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
