"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Server,
  Brain,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SkillCard = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{
      delay: index * 0.1,
      duration: 0.5,
      ease: [0.21, 0.45, 0.32, 0.9],
    }}
  >
    <Card className="group relative h-full overflow-hidden border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 shadow-sm hover:shadow-cyan-500/10 rounded-[2rem]">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="p-6 md:p-8 flex flex-col h-full relative z-10">
        <div className="mb-5 inline-flex w-fit p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
          <Icon className="h-6 w-6" />
        </div>

        <div className="space-y-3">
          <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {description}
          </p>
        </div>

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-40 transition-opacity">
          <Sparkles className="h-4 w-4 text-cyan-500" />
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const AboutSection = () => {
  const skills = [
    {
      icon: Layout,
      title: "Frontend Development",
      description:
        "Interfaces pixel-perfect avec React et Next.js (Base HTML/CSS). Focus sur la performance et l'accessibilité.",
    },
    {
      icon: Server,
      title: "Backend Systems",
      description:
        "APIs robustes en Node.js et Java. Expertise en microservices et sécurité.",
    },
    {
      icon: Database,
      title: "Database",
      description:
        "Architecture de données optimisée avec PostgreSQL. Maîtrise de l'indexation.",
    },
    {
      icon: Code2,
      title: "Core Languages",
      description:
        "Développement typé avec TypeScript, combiné à la puissance de React et React Native.",
    },
    {
      icon: Brain,
      title: "Software Architecture",
      description:
        "Conception de systèmes scalables utilisant les meilleurs design patterns.",
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description:
        "Résolution de problèmes complexes avec une approche centrée utilisateur.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 overflow-hidden bg-white dark:bg-[#020617]"
    >
      {/* Background radial soft */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
          {/* CÔTÉ TEXTE : Sticky seulement sur desktop pour éviter les bugs mobiles */}
          <div className="lg:sticky lg:top-32 w-full space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-500 mb-4">
                Expertise
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-[1.1]">
                Passionné par le{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
                  Code
                </span>{" "}
                & le Design.
              </h3>
            </motion.div>

            <motion.p
              className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Développeur Full-Stack, je transforme des problématiques complexes
              en interfaces intuitives. Mon but est de construire des produits
              exceptionnels.
            </motion.p>

            {/* Statistiques adaptatives */}
            <motion.div
              className="flex items-center gap-8 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* <div className="flex flex-col">
                <span className="text-cyan-600 text-3xl font-bold">01+</span>
                <span className="text-[10px] uppercase font-black tracking-widest opacity-50 dark:text-white">
                  Année d'exp.
                </span>
              </div> */}
              <div className="w-px h-10 bg-slate-200 dark:bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-cyan-600 text-3xl font-bold">8+</span>
                <span className="text-[10px] uppercase font-black tracking-widest opacity-50 dark:text-white">
                  Projets finis
                </span>
              </div>
            </motion.div>
          </div>

          {/* GRILLE DE COMPÉTENCES : 1 col sur mobile, 2 sur tablette/desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 w-full">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.title}
                index={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
