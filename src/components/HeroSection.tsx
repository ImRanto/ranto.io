"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight, FiDownload, FiCode, FiLayers } from "react-icons/fi";

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500 px-6 py-12 md:py-0"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <motion.div
            className="w-full lg:w-[45%] flex justify-center order-1 lg:order-2 mt-12 lg:mt-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative scale-90 md:scale-100">
              {/* Orbites */}
              <div className="absolute -inset-10 border border-slate-200/50 dark:border-slate-800/50 rounded-full scale-90 opacity-50" />
              <div className="absolute -inset-10 border-t-2 border-cyan-500 rounded-full animate-[spin_8s_linear_infinite]" />

              {/* Cercle Image Principal */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-3 bg-white dark:bg-slate-900 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden relative group border-4 border-slate-50 dark:border-slate-800">
                  <Image
                    fill
                    src="/ranto.jpg"
                    alt="Ranto"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-cyan-900/10 group-hover:opacity-0 transition-opacity" />
                </div>
              </div>

              {/* BADGE FRONTEND */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-2 -right-4 md:-right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border border-white/30 dark:border-slate-700/60 p-2.5 md:p-3 rounded-2xl shadow-xl flex items-center gap-3 z-20"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <FiCode size={18} />
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs font-bold dark:text-white leading-none">
                    Frontend
                  </p>
                  <span className="text-[10px] text-slate-500">
                    React/Next.js
                  </span>
                </div>
              </motion.div>

              {/* BADGE BACKEND */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute -bottom-2 -left-4 md:-left-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border border-white/30 dark:border-slate-700/60 p-2.5 md:p-3 rounded-2xl shadow-xl flex items-center gap-3 z-20"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <FiLayers size={18} />
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs font-bold dark:text-white leading-none">
                    Backend
                  </p>
                  <span className="text-[10px] text-slate-500">
                    Java/Spring
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* TEXTE : Centré sur mobile, aligné gauche sur PC */}
          <motion.div
            className="w-full lg:w-[55%] space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-900/50"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-700 dark:text-cyan-400">
                Développeur Full-Stack Web & Mobile
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              Bonjour, je suis <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Ranto Handraina
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-cyan-500/20 fill-current"
                  viewBox="0 0 100 10"
                >
                  <path
                    d="M0 5 Q 25 0, 50 5 T 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-slate-600 dark:text-slate-400 text-base md:text-xl max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              Je crée des produits web & mobile{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                performants et élégants
              </span>
              , du design à l’architecture backend.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Link href="/#projects">
                <button className="group bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3.5 md:px-8 md:py-4 rounded-2xl font-bold transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95 flex items-center gap-2">
                  Voir mes projets{" "}
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/cv">
                <button
                  className="group border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white 
                     px-6 py-3.5 md:px-8 md:py-4 rounded-2xl font-bold transition-all 
                     hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:-translate-y-0.5 active:scale-95
                     flex items-center gap-2"
                >
                  <FiDownload />
                  Mon CV
                </button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center lg:justify-start gap-2 pt-4"
            >
              {[
                "React Native",
                "Next.js",
                "Node.js",
                "Express.js",
                "Java",
                "Python",
                "PostgreSQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 rounded-lg border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
