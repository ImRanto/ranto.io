"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "Licence en Informatique",
    organization: "HEI (Haute École d'Informatique)",
    period: "2023 - 2026",
    description:
      "Formation approfondie en développement logiciel, algorithmes, bases de données et systèmes d'information.",
    highlights: ["Algorithmique", "Réseaux", "Programmation", "Bases de données"],
  },
  {
    type: "education",
    title: "Baccalauréat Scientifique",
    organization: "Lycée Ambohimanarina",
    period: "2021-2022",
    description:
      "Diplôme de fin d'études secondaires, série scientifique, axé sur les mathématiques et la logique.",
    highlights: ["Logique", "Mathématiques", "Physique"],
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#020617]/50"
    >
      {/* Lignes décoratives en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* En-tête de section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Mon Parcours
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Expérience & <span className="text-cyan-600">Formation</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Un aperçu de mon évolution académique et des étapes clés qui forgent
            mon expertise technique aujourd'hui.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Ligne centrale de la Timeline */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Point de la Timeline (Node) */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-white dark:bg-slate-950 border-4 border-cyan-500 z-20 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

                {/* Carte de contenu */}
                <div
                  className={`pl-12 md:pl-0 md:w-[calc(50%-2.5rem)] ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="p-6 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-cyan-500/50 transition-colors group">
                    {/* Badge Date & Type */}
                    <div
                      className={`flex items-center gap-3 mb-4 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                        {item.type === "work" ? (
                          <Briefcase size={20} />
                        ) : (
                          <GraduationCap size={20} />
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                        <Calendar size={14} className="text-cyan-500" />
                        {item.period}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-4">
                      {item.organization}
                    </p>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Tags / Highlights */}
                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {item.highlights.map((tag) => (
                        <div
                          key={tag}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tight"
                        >
                          <CheckCircle2 size={10} className="text-cyan-500" />
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Espaceur pour le côté vide en Desktop */}
                <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
