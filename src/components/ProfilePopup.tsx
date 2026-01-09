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
  Briefcase,
} from "lucide-react";
import { Button } from "./ui/button";

const ProfilePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed -right-1 top-1/2 -translate-y-1/2 z-50 flex items-center flex-row-reverse">
      {!isOpen && (
        <motion.button
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => setIsOpen(true)}
          className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 pt-1 pb-1 rounded-l-2xl shadow-2xl border border-r-0 border-slate-700 dark:border-slate-200 hover:pr-2 transition-all group"
        >
          <ChevronLeft
            className="group-hover:scale-110 transition-transform"
            size={25}
          />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: -20, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="relative w-72 bg-white/90 dark:bg-slate-900/95 backdrop-blur-2xl p-6 rounded-2xl shadow-[-20px_20px_50px_rgba(0,0,0,0.2)] border border-slate-200 dark:border-slate-800"
          >
            {/* Bouton Fermer */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-6 text-slate-400 hover:text-red-500 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Photo */}
              <div className="relative w-24 h-24 mb-4">
                <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-20" />
                <div className="relative w-full h-full rounded-full border-2 border-cyan-500 p-1 bg-white dark:bg-slate-800">
                  <Image
                    src="/ranto.jpg"
                    alt="Ranto"
                    width={96}
                    height={96}
                    className="rounded-full object-cover w-full h-full shadow-inner"
                  />
                </div>
              </div>
              {/* Infos */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-none mb-1">
                Ranto <span className="text-cyan-500">H.</span>
              </h3>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-4">
                Développeur Web Fullstack
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                Passionné par la création d'interfaces modernes et performantes.
                Basé à Antananarivo.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                À la recherche d'un{" "}
                <span className="text-slate-900 dark:text-white font-semibold">
                  stage passionnant
                </span>{" "}
                en Front-end, Back-end ou Fullstack.
              </p>
              {/* Réseaux Sociaux */}
              <div className="flex gap-3 mb-6">
                {[
                  { icon: Mail, link: "mailto:hei.ranto.2@gmail.com" },
                  { icon: Github, link: "https://github.com/ImRanto" },
                  {
                    icon: Linkedin,
                    link: "https://linkedin.com/in/handraina-ranto-78a00b299",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-cyan-600 hover:text-white transition-all shadow-sm"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
              <Button
                className="w-full justify-center bg-cyan-600 hover:bg-cyan-700 text-white"
                asChild
              >
                <a href="#contact">
                  Contacter
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfilePopup;
