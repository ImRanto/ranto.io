"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight, FiDownload } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500"
    >
      {/* 1. Background dynamique : Grille + Halos */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] dark:bg-cyan-500/5" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] dark:bg-blue-600/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* CONTENU TEXTE */}
          <div className="md:w-[55%] space-y-10 order-2 md:order-1 text-center md:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-900/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-700 dark:text-cyan-400">
                  Full Stack Engineer
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Bonjour, je suis <br />
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-cyan-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    Ranto Handraina
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-cyan-500/20 fill-current"
                    viewBox="0 0 100 10"
                  >
                    <path
                      d="M0 5 Q 25 0, 50 5 T 100 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed mx-auto md:mx-0 font-medium">
                Je conçois des expériences numériques d’exception, avec un fort
                accent sur
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                  {" "}
                  des interfaces modernes
                </span>{" "}
                et un
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {" "}
                  backend bien structuré
                </span>
                .
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link href="/#projects">
                <button className="group relative bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)] hover:-translate-y-1 active:scale-95 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Voir mes travaux{" "}
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>

              <Link href="/cv">
                <button className="group border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-bold transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50 flex items-center gap-2 hover:-translate-y-1">
                  Mon CV{" "}
                </button>
              </Link>
            </div>
          </div>

          {/* IMAGE EN CERCLE (Version Ultra-Moderne) */}
          <div className="md:w-[40%] flex justify-center order-1 md:order-2">
            <div className="relative">
              {/* Effet d'orbite technologique */}
              <div className="absolute -inset-10 border border-slate-200/50 dark:border-slate-800/50 rounded-full scale-90 opacity-50" />
              <div className="absolute -inset-10 border-t-2 border-cyan-500 rounded-full animate-[spin_8s_linear_infinite]" />

              {/* Halo de profondeur */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse" />

              {/* Cercle Image Principal */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-3 bg-white dark:bg-slate-900 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_32px_64px_-15px_rgba(0,0,0,0.6)]">
                <div className="w-full h-full rounded-full overflow-hidden relative group">
                  <Image
                    fill
                    src="/ranto.jpg"
                    alt="Ranto"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    priority
                  />
                  {/* Overlay subtile au hover */}
                  <div className="absolute inset-0 bg-cyan-900/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              {/* Floating Tech Badges (Pour le côté moderne) */}
              <div className="absolute top-0 -right-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 p-3 rounded-2xl shadow-xl animate-float group hover:scale-110 transition-transform">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-600">
                    <span className="text-[10px] font-black tracking-tighter">
                      Front
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 -left-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 p-3 rounded-2xl shadow-xl animate-float-delayed group hover:scale-110 transition-transform">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex items-center justify-center text-emerald-600">
                    <span className="text-[10px] font-black tracking-tighter">
                      Back
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
