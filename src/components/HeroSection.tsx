"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, Download, Code2, Layers } from "lucide-react";
import { useTranslations } from "next-intl";

/* ── Stagger variants ── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } },
};

const techStack = [
  "React Native",
  "Next.js",
  "Node.js",
  "Express.js",
  "Java",
  "Python",
  "PostgreSQL",
];

const HeroSection = () => {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500 px-6 py-20 md:py-0"
    >
      {/* ── Background texture ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* ── Ambient glow blobs ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-400/5 dark:bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[320px] h-[320px] bg-blue-500/5 dark:bg-blue-600/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">

          {/* ══════════════════════════════════
              LEFT – Text content
          ══════════════════════════════════ */}
          <motion.div
            className="w-full lg:w-[54%] space-y-7 text-center lg:text-left order-2 lg:order-1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Status badge */}
            <motion.div variants={item} className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-sm">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-slate-300">
                  {t("roleBadge")}
                </span>
              </div>
              {t("winnerBadge") && (
                <div className="ml-3 inline-flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-800/60 shadow-sm">
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-cyan-600 dark:text-cyan-400">
                    🏆 {t("winnerBadge")}
                  </span>
                </div>
              )}
            </motion.div>

            {/* Heading */}
            <motion.div variants={item}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.05]">
                {t("greetingPrefix")}
                <br />
                <span className="relative mt-1 inline-block">
                  {/* Gradient text */}
                  <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                    Ranto Handraina
                  </span>
                  {/* Underline accent */}
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-cyan-500/60 via-blue-500/60 to-indigo-500/60 blur-[1px]" />
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-lg leading-relaxed mx-auto lg:mx-0"
            >
              {t("subtitle")}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <Link href="/#projects">
                <button className="group relative inline-flex items-center gap-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-7 py-3.5 rounded-2xl font-bold text-sm tracking-tight transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/20 dark:hover:shadow-white/10 hover:-translate-y-0.5 active:scale-[0.98] overflow-hidden">
                  {/* Shimmer */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                  {t("viewProjects")}
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>

              <Link href="/cv">
                <button className="group inline-flex items-center gap-2.5 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/40 px-7 py-3.5 rounded-2xl font-bold text-sm tracking-tight transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]">
                  <Download size={14} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
                  {t("downloadCV")}
                </button>
              </Link>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              variants={item}
              className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2"
            >
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.05, duration: 0.3 }}
                  className="px-3 py-1.5 text-[11px] font-semibold bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 rounded-xl border border-slate-200/80 dark:border-slate-700/60 hover:border-cyan-300 dark:hover:border-cyan-800 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* ══════════════════════════════════
              RIGHT – Photo + floating badges
          ══════════════════════════════════ */}
          <motion.div
            className="w-full lg:w-[46%] flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as any }}
          >
            <div className="relative">

              {/* ── Outer decorative ring ── */}
              <div className="absolute inset-0 rounded-full border border-dashed border-slate-200/70 dark:border-slate-700/50 scale-[1.18] animate-[spin_30s_linear_infinite]" />

              {/* ── Spinning accent arc ── */}
              <div className="absolute inset-0 scale-[1.18]">
                <svg className="w-full h-full -rotate-90 animate-[spin_8s_linear_infinite]" viewBox="0 0 100 100">
                  <circle
                    cx="50" cy="50" r="49"
                    fill="none"
                    stroke="url(#arcGrad)"
                    strokeWidth="1.5"
                    strokeDasharray="30 320"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* ── Photo frame ── */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full">
                {/* Glow behind photo */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-indigo-500/20 blur-2xl" />

                {/* Photo container */}
                <div className="relative w-full h-full rounded-full p-[5px] bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500 shadow-2xl shadow-blue-500/20">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-900 relative group">
                    <Image
                      fill
                      src="/ranto.jpg"
                      alt="Ranto Handraina"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>

              {/* ── Floating badge – Frontend ── */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-4 md:-right-8 lg:-right-10 z-20"
              >
                <div className="flex items-center gap-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 shadow-xl shadow-slate-200/60 dark:shadow-black/40 px-4 py-3 rounded-2xl">
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/30 shrink-0">
                    <Code2 size={16} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-[11px] font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                      {t("frontendTitle")}
                    </p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                      {t("frontendSubtitle")}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ── Floating badge – Backend ── */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
                className="absolute -bottom-3 -left-4 md:-left-8 lg:-left-10 z-20"
              >
                <div className="flex items-center gap-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 shadow-xl shadow-slate-200/60 dark:shadow-black/40 px-4 py-3 rounded-2xl">
                  <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center shadow-md shadow-emerald-500/30 shrink-0">
                    <Layers size={16} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-[11px] font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                      {t("backendTitle")}
                    </p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                      {t("backendSubtitle")}
                    </p>
                  </div>
                </div>
              </motion.div>


            </div>
          </motion.div>
        </div>

        {/* ── Bottom scroll hint ── */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-600">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-slate-300 dark:from-slate-700 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
