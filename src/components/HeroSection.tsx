"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight, Download, Terminal } from "lucide-react";
import { useTranslations } from "next-intl";

/* ── Animation variants ── */
const EASE = [0.22, 1, 0.36, 1] as any;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

const techStack = [
  "React Native",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Java",
  "Python",
  "PostgreSQL",
];

const HeroSection = () => {
  const t = useTranslations("hero");
  const reduceMotion = useReducedMotion();

  /* ── 3D tilt on the photo card ── */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), {
    stiffness: 140,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), {
    stiffness: 140,
    damping: 18,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="hero"
      className="relative isolate min-h-screen flex flex-col justify-center overflow-hidden bg-slate-50 dark:bg-[#05060a] text-slate-900 dark:text-white transition-colors duration-500"
    >
      {/* ── Background: masked grid ── */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(100,116,139,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.10)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_30%,transparent_100%)]"
      />

      {/* ── Background: aurora ── */}
      <motion.div
        aria-hidden
        className="absolute -top-40 left-[8%] -z-10 h-[520px] w-[520px] rounded-full bg-violet-500/20 dark:bg-violet-600/20 blur-[130px]"
        animate={reduceMotion ? undefined : { x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/4 right-[2%] -z-10 h-[460px] w-[460px] rounded-full bg-cyan-400/20 dark:bg-cyan-500/15 blur-[130px]"
        animate={reduceMotion ? undefined : { x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/3 -z-10 h-[300px] w-[500px] rounded-full bg-emerald-400/10 dark:bg-emerald-500/8 blur-[120px]"
      />

      <div className="container mx-auto max-w-7xl px-6 pt-28 pb-10 md:pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* ═════════════ LEFT – Content ═════════════ */}
          <motion.div
            className="order-2 lg:order-1 lg:col-span-7 space-y-8 text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Availability / role badge */}
            <motion.div variants={item} className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur-md px-4 py-2 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-200">
                  {t("roleBadge")}
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div variants={item} className="space-y-2">
              <p className="text-lg md:text-xl font-medium text-slate-500 dark:text-slate-400">
                {t("greetingPrefix")}
              </p>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.02]">
                <span className="block text-slate-900 dark:text-white">
                  RAFALIMANANA
                </span>
                <span className="block bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent pb-1">
                  Ranto Handraina
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="mx-auto lg:mx-0 max-w-xl text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400"
            >
              {t("subtitle")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <Link
                href="/#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-slate-900 dark:bg-white px-7 py-3.5 text-sm font-semibold text-white dark:text-slate-900 shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#05060a]"
              >
                <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/20 dark:via-slate-900/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">{t("viewProjects")}</span>
                <ArrowUpRight
                  size={16}
                  className="relative transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/cv"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-300/80 dark:border-white/15 bg-white/60 dark:bg-white/[0.04] backdrop-blur-md px-7 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 dark:hover:border-white/30 hover:bg-white dark:hover:bg-white/[0.08] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#05060a]"
              >
                <Download
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                />
                {t("downloadCV")}
              </Link>
            </motion.div>
          </motion.div>

          {/* ═════════════ RIGHT – Photo card ═════════════ */}
          <motion.div
            className="order-1 lg:order-2 lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          >
            <div
              className="relative w-full max-w-[340px] sm:max-w-[380px] [perspective:1000px]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Glow behind card */}
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-violet-500/30 via-blue-500/20 to-cyan-400/30 blur-3xl"
              />

              {/* Tilting card */}
              <motion.div
                style={reduceMotion ? undefined : { rotateX, rotateY }}
                className="relative aspect-[4/5] rounded-[2rem] p-[1.5px] bg-gradient-to-br from-violet-400/70 via-blue-400/40 to-cyan-300/70 shadow-2xl shadow-blue-900/20 dark:shadow-black/60 [transform-style:preserve-3d]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-1.5px)] bg-slate-200 dark:bg-slate-900">
                  <Image
                    fill
                    priority
                    sizes="(max-width: 1024px) 380px, 440px"
                    src="/ranto.jpg"
                    alt="RAFALIMANANA Ranto Handraina - Développeur Full-Stack Web & Mobile"
                    className="object-cover"
                  />
                  {/* Subtle bottom gradient for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                  {/* Mini terminal strip */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2.5 rounded-xl border border-white/15 bg-slate-950/55 backdrop-blur-md px-3.5 py-2.5 font-mono text-[11px] text-slate-200">
                    <Terminal size={13} className="text-emerald-400 shrink-0" />
                    <span className="truncate">
                      <span className="text-emerald-400">~</span>{" "}
                      <span className="text-slate-400">$</span> npm run build
                      <motion.span
                        className="ml-0.5 inline-block h-3 w-[6px] translate-y-[2px] bg-slate-200"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1.1, repeat: Infinity }}
                      />
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* ═════════════ Tech stack marquee ═════════════ */}
        <motion.div
          className="relative mt-16 md:mt-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.div
            className="flex w-max gap-3"
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400" />
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;