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
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
  >
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-full text-cyan-600 dark:text-cyan-400">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
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
        "React, Next.js, TailwindCSS, et plus pour créer des interfaces modernes et réactives.",
    },
    {
      icon: Server,
      title: "Backend",
      description:
        "Node.js, Express, Java(POO) pour développer des API robustes et scalables.",
    },
    {
      icon: Database,
      title: "Databases",
      description:
        "PostgreSQL pour la gestion efficace des données.",
    },
    {
      icon: Code2,
      title: "Languages",
      description:
        "JavaScript, TypeScript, Python et Java pour des solutions complètes.",
    },
    {
      icon: Brain,
      title: "Architecture",
      description:
        "Conception de systèmes distribués, microservices et applications cloud-native.",
    },
    {
      icon: Lightbulb,
      title: "UX/UI",
      description:
        "Création d'expériences utilisateur intuitives et attrayantes.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            À propos de moi
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-cyan-500 rounded-full"></div>
          </h2>
          <p className="text-lg text-muted-foreground">
            Développeur web passionné dans la
            création d'applications modernes, performantes et maintenables. Je
            combine mon expertise technique avec un œil attentif pour le design
            afin de créer des expériences utilisateur exceptionnelles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
