"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
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
    description: "Système expert de calcul financier : gestion d'actifs, calcul d'amortissements et projections de revenus en temps réel.",
    image: "https://iili.io/FmzUawb.png",
    tags: ["React", "Node.js", "Express", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "#",
    githubUrl: "https://github.com/ImRanto/patrimoine-economique",
  },
  {
    id: 2,
    title: "Assistant IA (Hackathon HIU)",
    description: "Lauréat HIU 2025. Agent intelligent optimisant la recherche d'emploi et l'automatisation de tâches via OpenAI.",
    image: "https://iili.io/Fmz4Ziv.png",
    tags: ["Next.js", "TypeScript", "OpenAI", "Python"],
    category: "frontend",
    liveUrl: "https://hiu-2025-bisounours.vercel.app",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Tapakila – Billetterie",
    description: "Plateforme événementielle avec gestion de tickets QR Code et passerelle de paiement sécurisée Spring Boot.",
    image: "https://iili.io/FmI9Kuf.png",
    tags: ["Next.js", "Spring Boot", "PostgreSQL"],
    category: "fullstack",
    liveUrl: "#",
    githubUrl: "https://github.com/ImRanto/Event-Manager-App",
  },
  {
    id: 4,
    title: "Analyse Météo ETL",
    description: "Pipeline de données automatisé avec Airflow pour le traitement et la visualisation de métriques climatiques.",
    image: "https://iili.io/FmxQjv2.png",
    tags: ["Airflow", "Python", "Power BI"],
    category: "data",
    liveUrl: "#",
    githubUrl: "https://github.com/ImRanto/meteo_project",
  },
  {
    id: 5,
    title: "CycleFlow – Analyse Cyclique",
    description: "Application web moderne et intuitive permettant de suivre et prédire leur cycle menstruel avec précision.",
    image: "https://i.postimg.cc/mgZCqLJJ/cycleflow.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    liveUrl: "https://cycleflow-one.vercel.app/",
    githubUrl: "https://github.com/ImRanto/cycle-flow",
  },
  {
    id: 6,
    title: "Suivi de vente E-Tsako",
    description: "Application web pour la gestion des ventes et des stocks, avec dashboard analytique intégré.",
    image: "https://i.postimg.cc/BQBf4KCb/e-tsako.png",
    tags: ["Vite", "Tailwind CSS", "Java", "Spring Boot"],
    category: "fullstack",
    liveUrl: "https://i-tsaky.vercel.app",
    githubUrl: "https://github.com/ImRanto/e-tsako",
  },
];

const getTagStyle = (tag: string) => {
  const styles: Record<string, string> = {
    React: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    TypeScript: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    "Next.js": "bg-slate-500/10 text-slate-600 dark:text-slate-400",
    "Spring Boot": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    Python: "bg-red-500/10 text-red-600 dark:text-red-400",
    "Tailwind CSS": "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    "Node.js": "bg-green-500/10 text-green-600 dark:text-green-400",
    Express: "bg-white/10 text-slate-200",
    PostgreSQL: "bg-blue-700/10 text-blue-800 dark:text-blue-400",
    OpenAI: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    Airflow: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    Vite: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    Java: "bg-red-500/10 text-red-600 dark:text-red-400",
    "Power BI": "bg-yellow-700/10 text-yellow-800 dark:text-yellow-400"
  };
  return styles[tag] || "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400";
};

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = projects.filter((p) =>
    activeTab === "all" ? true : p.category === activeTab
  );

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#020617] transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold tracking-widest uppercase">
              <FolderCode size={14} />
              <span>Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Projets <span className="text-cyan-500">Réacteurs</span>
            </h2>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full lg:w-auto">
            <TabsList className="flex h-12 w-full items-center justify-start overflow-x-auto rounded-2xl bg-slate-100 p-1 dark:bg-slate-900 lg:w-auto">
              {["all", "frontend", "fullstack", "data"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="min-w-[100px] rounded-xl px-6 text-sm font-bold capitalize transition-all data-[state=active]:bg-white data-[state=active]:text-cyan-600 data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-800 dark:data-[state=active]:text-cyan-400"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="group flex h-full flex-col overflow-hidden rounded-[2rem] border-none bg-slate-50 dark:bg-slate-900/50 shadow-none transition-all hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl hover:shadow-cyan-500/5">
                  
                  {/* MEDIA BOX */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* RESPONSIVE OVERLAY (Toujours visible sur mobile, hover sur desktop) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex items-end 
                                    opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex w-full gap-3 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
                        {project.liveUrl !== "#" && (
                          <Button size="sm" className="flex-1 rounded-xl bg-cyan-500 font-bold text-white hover:bg-cyan-400" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" /> Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl !== "#" && (
                          <Button size="sm" variant="outline" className="flex-1 rounded-xl border-white/20 bg-white/10 font-bold text-white backdrop-blur-md hover:bg-white/20" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" /> Code
                            </a>
                          </Button>
                        )}
                        {/* État si aucun lien n'est disponible */}
                        {project.liveUrl === "#" && project.githubUrl === "#" && (
                          <div className="w-full text-center text-[10px] font-black uppercase tracking-tighter text-white/60">
                            Proprietary Project
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <CardContent className="flex flex-1 flex-col p-7">
                    <div className="mb-3 flex items-start justify-between">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      <Layers size={16} className="text-slate-400" />
                    </div>
                    
                    <p className="mb-6 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-lg px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${getTagStyle(tag)}`}
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