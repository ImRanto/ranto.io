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
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: index * 0.1,
      duration: 0.5,
      ease: [0.21, 0.45, 0.32, 0.9],
    }}
  >
    <Card className="group relative h-full overflow-hidden border-gray-200/50 dark:border-gray-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 shadow-sm hover:shadow-cyan-500/10">
      {/* Effet de brillance au hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="p-8 flex flex-col h-full relative z-10">
        <div className="mb-5 inline-flex p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-inner">
          <Icon className="h-6 w-6" />
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>

        {/* Décoration discrète en bas à droite */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity">
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
        "Interfaces pixel-perfect avec React et Next.js. Focus sur la performance, l'accessibilité et les animations fluides.",
    },
    {
      icon: Server,
      title: "Backend Systems",
      description:
        "APIs robustes en Node.js et Java. Expertise en microservices, sécurité et gestion de flux de données.",
    },
    {
      icon: Database,
      title: "Database Design",
      description:
        "Architecture de données optimisée avec PostgreSQL. Maîtrise de l'indexation et des requêtes complexes.",
    },
    {
      icon: Code2,
      title: "Core Languages",
      description:
        "Développement typé avec TypeScript pour la fiabilité, combiné à la puissance de Java et Python.",
    },
    {
      icon: Brain,
      title: "Software Architecture",
      description:
        "Conception de systèmes scalables et maintenables. Utilisation des meilleurs design patterns.",
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description:
        "Résolution de problèmes complexes avec une approche centrée sur l'utilisateur et l'innovation continue.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden bg-white dark:bg-[#020617]"
    >
      {/* Éléments de fond */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03)_0%,transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Côté texte fixe (ou scrollable sur mobile) */}
          <div className="sticky top-32 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-500 mb-4">
                Expertise
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Passionné par le{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
                  Code
                </span>{" "}
                & le Design.
              </h3>
            </motion.div>

            <motion.p
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Développeur Full-Stack, je transforme des problématiques complexes
              en interfaces intuitives. Mon but est de construire des produits
              qui ne sont pas seulement fonctionnels, mais exceptionnels.
            </motion.p>

            <motion.div
              className="pt-4 flex gap-4 text-sm font-bold text-slate-900 dark:text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex flex-col">
                <span className="text-cyan-600 text-2xl">01+</span>
                <span className="text-xs uppercase tracking-wider opacity-60">
                  Années d'exp.
                </span>
              </div>
              <div className="w-[1px] h-10 bg-slate-200 dark:bg-slate-800 mx-4" />
              <div className="flex flex-col">
                <span className="text-cyan-600 text-2xl">2+</span>
                <span className="text-xs uppercase tracking-wider opacity-60">
                  Projets finis
                </span>
              </div>
            </motion.div>
          </div>

          {/* Grille de compétences */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
