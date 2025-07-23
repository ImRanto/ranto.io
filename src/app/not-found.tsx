"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiFrown } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-[#0f172a] dark:to-[#1e293b] overflow-hidden p-4 sm:p-6">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
        <div className="absolute inset-0 bg-[length:30px_30px] [background-image:linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]" />
      </div>

      {/* Error code floating */}
      <motion.div
        className="absolute text-[20rem] font-bold opacity-5 dark:opacity-[0.03] pointer-events-none select-none"
        initial={{ y: -50, rotate: -5 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        404
      </motion.div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-rose-100 dark:bg-rose-900/50 rounded-full mb-6">
            <FiFrown className="text-rose-600 dark:text-rose-400 text-4xl" />
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Page introuvable
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Oups ! La page que vous cherchez n'existe pas ou a été déplacée.
          Revenez à l'accueil ou explorez nos autres sections.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500/90 dark:hover:bg-cyan-500 text-white font-medium transition-colors group"
          >
            Retour à l'accueil
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 pt-6 border-t border-gray-200 dark:border-white/10 flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/#about" className="hover:text-cyan-500 transition-colors">
            About
          </Link>
          <Link
            href="/#projects"
            className="hover:text-cyan-500 transition-colors"
          >
            Projets
          </Link>
          <Link
            href="/#contact"
            className="hover:text-cyan-500 transition-colors"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
