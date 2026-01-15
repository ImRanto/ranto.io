"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  Mail,
  Github,
  Linkedin,
  ChevronLeft,
} from "lucide-react";
import { Button } from "./ui/button";

const ProfilePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed -right-1 top-1/2 -translate-y-1/2 z-[100] flex items-center flex-row-reverse">
      {/* Bouton d'ouverture optimisé */}
      {!isOpen && (
        <motion.button
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ x: -5 }}
          onClick={() => setIsOpen(true)}
          className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 px-1 rounded-l-2xl shadow-2xl border border-slate-700 dark:border-slate-200 transition-all group"
        >
          <ChevronLeft
            className="group-hover:scale-125 transition-transform"
            size={24}
          />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: -20, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="relative w-80 bg-white/95 dark:bg-slate-900/98 backdrop-blur-2xl p-8 rounded-3xl shadow-[-20px_20px_60px_rgba(0,0,0,0.3)] border border-slate-200 dark:border-slate-800"
          >
            {/* Bouton Fermer */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-6 text-slate-400 hover:text-cyan-500 transition-colors p-1"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Photo avec effet de lueur */}
              <div className="relative w-28 h-28 mb-6">
                <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-30 animate-pulse" />
                <div className="relative w-full h-full rounded-full border-2 border-cyan-500 p-1.5 bg-white dark:bg-slate-800">
                  <Image
                    src="/ranto.jpg"
                    alt="Ranto"
                    width={110}
                    height={110}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Infos */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-none mb-2">
                Ranto <span className="text-cyan-500 font-black">H.</span>
              </h3>
              
              <div className="px-3 py-1 bg-cyan-500/10 rounded-full mb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                  Développeur Fullstack
                </p>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Passionné par le développement d'applications <span className="text-slate-900 dark:text-white font-medium">web & mobile</span> performantes. Basé à Antananarivo.
              </p>

              <div className="w-full p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl mb-6 border border-slate-100 dark:border-slate-700">
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Actuellement disponible pour un <br />
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider text-[11px]">
                    Stage de fin d'études
                  </span>
                </p>
              </div>

              {/* Réseaux Sociaux */}
              <div className="flex gap-4 mb-8">
                {[
                  { icon: Mail, link: "mailto:hei.ranto.2@gmail.com", label: "Email" },
                  { icon: Github, link: "https://github.com/ImRanto", label: "Github" },
                  { icon: Linkedin, link: "https://linkedin.com/in/handraina-ranto-78a00b299", label: "Linkedin" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-800 rounded-2xl text-slate-600 dark:text-slate-300 hover:text-cyan-500 hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700"
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>

              <Button
                className="w-full py-6 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-cyan-600 dark:hover:bg-cyan-500 dark:hover:text-white transition-all font-bold"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <a href="#contact">Me Contacter</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfilePopup;