"use client";

import { FaDownload, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CVPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-[#020617] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Navigation & Action */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6">
          <Link
            href="/#hero"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-500 transition-colors group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold uppercase tracking-widest">
              Retour
            </span>
          </Link>

          <a
            href="/RAFALIMANANA Ranto Handraina - CV.pdf"
            download
            className="flex items-center gap-3 px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-sm shadow-xl hover:scale-105 transition-transform active:scale-95"
          >
            <FaDownload size={14} />
            Télécharger le CV
          </a>
        </div>

        {/* Container du CV */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          {/* Bordure décorative très fine */}
          <div className="absolute -inset-[1px] bg-gradient-to-b from-slate-200 to-transparent dark:from-slate-800 dark:to-transparent rounded-2xl" />

          <div className="relative bg-white dark:bg-slate-900 p-2 sm:p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/cv.png"
                alt="Curriculum Vitae"
                width={1000}
                height={1414}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <ScrollToTopButton />
    </section>
  );
}
