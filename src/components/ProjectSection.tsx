"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, FolderCode, Layers } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "frontend" | "backend" | "fullstack" | "data" | "all";
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Gestion de Patrimoine",
    description:
      "Système expert de calcul financier : gestion d'actifs, calcul d'amortissements et projections de revenus en temps réel.",
    image: "https://iili.io/FmzUawb.png",
    tags: ["React", "Node.js", "Express", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "https://patrimoine-economique-ui-rnt.onrender.com",
    githubUrl: "https://github.com/ImRanto/patrimoine-economique",
  },
  {
    id: 2,
    title: "Assistant IA (Hackathon HIU)",
    description:
      "Lauréat HIU 2025. Agent intelligent optimisant la recherche d'emploi et l'automatisation de tâches via OpenAI.",
    image: "https://iili.io/Fmz4Ziv.png",
    tags: ["Next.js", "TypeScript", "OpenAI", "Python"],
    category: "frontend",
    liveUrl: "https://hiu-2025-bisounours.vercel.app",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Tapakila – Billetterie",
    description:
      "Plateforme événementielle avec gestion de tickets QR Code et passerelle de paiement sécurisée Spring Boot.",
    image: "https://iili.io/FmI9Kuf.png",
    tags: ["Next.js", "Spring Boot", "PostgreSQL"],
    category: "fullstack",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Analyse Météo ETL",
    description:
      "Pipeline de données automatisé avec Airflow pour le traitement et la visualisation de métriques climatiques.",
    image: "https://iili.io/FmxQjv2.png",
    tags: ["Airflow", "Python", "Power BI"],
    category: "data",
    liveUrl: "#",
    githubUrl: "https://github.com/ImRanto/meteo",
  },
  {
    id: 5,
    title: "CycleFlow – Analyse Cyclique",
    description:
      "Application web moderne et intuitive permettant de suivre et prédire leur cycle menstruel avec précision.",
    image: "https://i.postimg.cc/mgZCqLJJ/cycleflow.png",
    tags: ["NextJs", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    liveUrl: "https://cycleflow-one.vercel.app/",
    githubUrl: "https://github.com/ImRanto/menstruel-cycle-tracker",
  },
  {
    id: 6,
    title: "Suivi de vente E-Tsako",
    description:
      "Application web pour la gestion des ventes et des stocks, avec dashboard analytique intégré.",
    image: "https://i.postimg.cc/BQBf4KCb/e-tsako.png",
    tags: ["Vite", "Tailwind CSS", "Java", "Spring Boot"],
    category: "fullstack",
    liveUrl: "https://i-tsaky.vercel.app",
    githubUrl: "https://github.com/ImRanto/e-tsako",
  },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = projects.filter((p) =>
    activeTab === "all" ? true : p.category === activeTab
  );

  return (
    <section
      id="projects"
      className="py-32 bg-slate-50/50 dark:bg-[#020617]/50"
    >
      <div className="container mx-auto px-6">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold tracking-widest uppercase text-sm mb-3">
              <FolderCode size={18} />
              <span>Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Projets{" "}
              <span className="text-slate-400 font-light">Sélectionnés</span>
            </h2>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-auto"
          >
            <TabsList className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1 h-12 rounded-xl shadow-sm">
              {["all", "frontend", "fullstack", "data"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="rounded-lg px-6 capitalize data-[state=active]:bg-cyan-600 data-[state=active]:text-white transition-all"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* GRID PROJETS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="group h-full flex flex-col overflow-hidden bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800/60 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 rounded-3xl">
                  {/* IMAGE AVEC OVERLAY */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                      <div className="flex gap-3 w-full">
                        <Button
                          size="sm"
                          className="flex-1 bg-cyan-600 hover:bg-cyan-500 rounded-xl"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" /> Demo
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="flex-1 rounded-xl"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank">
                            <Github className="mr-2 h-4 w-4" /> Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* CONTENU TEXTE */}
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 transition-colors">
                        {project.title}
                      </h3>
                      <Layers size={16} className="text-slate-400" />
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
