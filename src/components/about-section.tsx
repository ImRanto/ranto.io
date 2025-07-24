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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SkillCard = ({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{
      delay,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    }}
  >
    <Card className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 hover:border-cyan-500/30">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/40 dark:to-blue-900/40 rounded-lg text-cyan-600 dark:text-cyan-400 shadow-inner">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-muted-foreground mt-1">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const AboutSection = () => {
  const skills = [
    {
      icon: Layout,
      title: "Frontend",
      description:
        "Création d'interfaces modernes avec React, Next.js et TailwindCSS. Expertise en animations et expérience utilisateur fluide.",
    },
    {
      icon: Server,
      title: "Backend",
      description:
        "Développement d'API performantes avec Node.js, Express et Java. Conception d'architectures scalables.",
    },
    {
      icon: Database,
      title: "Bases de données",
      description:
        "Modélisation et optimisation de bases de données relationnelles avec PostgreSQL.",
    },
    {
      icon: Code2,
      title: "Langages",
      description:
        "Maîtrise de JavaScript/TypeScript, Python et Java pour des solutions full-stack complètes.",
    },
    {
      icon: Brain,
      title: "Architecture",
      description:
        "Design système, microservices et déploiements cloud-native. Pensée critique et résolution de problèmes complexes.",
    },
    {
      icon: Lightbulb,
      title: "Design UX/UI",
      description:
        "Approche centrée utilisateur pour des interfaces intuitives et esthétiques. Prototypage et tests utilisateurs.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/20 dark:to-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 relative inline-block"
            whileHover={{ scale: 1.02 }}
          >
            <span className="relative z-10">
              À propos de moi
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Développeur full-stack passionné par la création d'applications web
            performantes et élégantes. Je combine expertise technique et
            sensibilité design pour concevoir des expériences digitales
            mémorables et intuitives.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              delay={index * 0.1 + 0.4}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
