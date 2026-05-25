"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ExternalLink,
  Github,
  FolderCode,
  Layers,
  Smartphone,
  Fingerprint,
  ShieldCheck,
  BarChart3,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "frontend" | "backend" | "fullstack" | "data" | "mobile" | "all";
  liveUrl: string;
  githubUrl: string;
  isMobile?: boolean;
  mobileScreenshots?: string[];
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
    liveUrl: "#",
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
    githubUrl: "https://github.com/ImRanto/Event-Manager-App",
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
    githubUrl: "https://github.com/ImRanto/meteo_project",
  },
  {
    id: 5,
    title: "CycleFlow – Analyse Cyclique",
    description:
      "Application web moderne et intuitive permettant de suivre et prédire leur cycle menstruel avec précision.",
    image: "https://i.postimg.cc/mgZCqLJJ/cycleflow.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    liveUrl: "https://cycleflow-one.vercel.app/",
    githubUrl: "https://github.com/ImRanto/cycle-flow",
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
  {
    id: 7,
    title: "Fidio – Vote Électronique",
    description:
      "Application mobile Android sécurisée de vote électronique avec résultats en temps réel, authentification biométrique (empreinte & visage), gestion des scrutins et profil électeur vérifié.",
    image: "https://iili.io/BmmtSSI.jpg",
    tags: ["React Native", "Spring Boot", "WebSocket"],
    category: "mobile",
    liveUrl: "#",
    githubUrl: "#",
    isMobile: true,
    mobileScreenshots: [
      "https://iili.io/BmmtSSI.jpg",
      "https://iili.io/Bmp29b2.jpg",
      "https://iili.io/Bmp9jtt.jpg",
      "https://iili.io/BmpJWQt.jpg",
    ],
  },
];

const getTagStyle = (tag: string) => {
  const styles: Record<string, string> = {
    React: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    "React Native": "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    TypeScript: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    "Next.js": "bg-slate-500/10 text-slate-600 dark:text-slate-300",
    "Spring Boot": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    Python: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
    "Tailwind CSS": "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    "Node.js": "bg-green-500/10 text-green-600 dark:text-green-400",
    Express: "bg-slate-500/10 text-slate-600 dark:text-slate-300",
    PostgreSQL: "bg-blue-700/10 text-blue-700 dark:text-blue-400",
    OpenAI: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    Airflow: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    Vite: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    Java: "bg-red-500/10 text-red-600 dark:text-red-400",
    "Power BI": "bg-yellow-700/10 text-yellow-800 dark:text-yellow-400",
    WebSocket: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  };
  return (
    styles[tag] ||
    "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
  );
};

/* ─────────────────────────────────────────
   Feature list for Fidio
───────────────────────────────────────── */
const fidioFeatures = [
  {
    Icon: Fingerprint,
    label: "Auth biométrique",
    sub: "Empreinte digitale & reconnaissance faciale",
  },
  {
    Icon: ShieldCheck,
    label: "Vote sécurisé",
    sub: "Chiffrement de bout en bout",
  },
  {
    Icon: BarChart3,
    label: "Résultats en direct",
    sub: "Mise à jour temps réel via WebSocket",
  },
  {
    Icon: BadgeCheck,
    label: "Profil vérifié",
    sub: "Vérification CIN & compte électeur",
  },
];

const screenLabels = ["Connexion", "Scrutins", "Résultats", "Profil"];

/* ─────────────────────────────────────────
   Mobile Project Card
───────────────────────────────────────── */
const MobileProjectCard = ({ project, t }: { project: Project; t: any }) => {
  const [activeScreen, setActiveScreen] = useState(0);
  const screens = project.mobileScreenshots ?? [];

  const prev = () =>
    setActiveScreen((s) => (s - 1 + screens.length) % screens.length);
  const next = () =>
    setActiveScreen((s) => (s + 1) % screens.length);

  return (
    <Card className="flex flex-col lg:flex-row overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg shadow-slate-100 dark:shadow-none">

      {/* LEFT – Info */}
      <div className="flex flex-col justify-between p-8 lg:p-12 lg:w-[52%]">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-200 dark:border-red-900/60 bg-red-50 dark:bg-red-950/30 text-red-500 dark:text-red-400 text-[10px] font-bold tracking-widest uppercase mb-6">
            <Smartphone size={11} strokeWidth={2.5} />
            <span>Application Mobile · Android</span>
          </div>

          {/* Title */}
          <h3 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-1">
            Fidio
          </h3>
          <p className="text-sm font-semibold text-red-500 dark:text-red-400 mb-5 tracking-tight">
            Plateforme de vote électronique sécurisé
          </p>

          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 mb-8 max-w-sm">
            {project.description}
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {fidioFeatures.map(({ Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 px-4 py-3 transition-colors hover:border-red-200 dark:hover:border-red-900/60"
              >
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
                  <Icon size={14} className="text-red-500" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-100 leading-tight">
                    {label}
                  </p>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5 leading-snug">
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer – tags + actions */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${getTagStyle(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.liveUrl !== "#" && (
              <Button
                size="sm"
                className="rounded-xl bg-red-500 font-bold text-white hover:bg-red-600 shadow-sm shadow-red-200 dark:shadow-none"
                asChild
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-3.5 w-3.5" />
                  {t("demo")}
                </a>
              </Button>
            )}
            {project.githubUrl !== "#" && (
              <Button size="sm" variant="outline" className="rounded-xl font-bold" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-3.5 w-3.5" />
                  {t("code")}
                </a>
              </Button>
            )}
            {project.liveUrl === "#" && project.githubUrl === "#" && (
              <span className="self-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
                {t("proprietary")}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT – Phone showcase */}
      <div className="relative flex items-center justify-center lg:w-[48%] min-h-[500px] overflow-hidden bg-gradient-to-br from-red-500 via-red-500 to-rose-600">

        {/* Geometric rings */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.08]">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-2 border-white" />
          <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full border border-white" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border-2 border-white" />
          <div className="absolute -bottom-6 -left-6 w-52 h-52 rounded-full border border-white" />
        </div>

        {/* Screen label selector */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1.5">
          {screenLabels.map((label, i) => (
            <button
              key={i}
              onClick={() => setActiveScreen(i)}
              className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wide transition-all duration-200 ${
                activeScreen === i
                  ? "bg-white text-red-500 shadow-sm"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Phone + controls */}
        <div className="relative z-10 mt-6 flex flex-col items-center">
          {/* Phone shell */}
          <div className="relative w-[210px] h-[420px] rounded-[3rem] bg-slate-900 shadow-2xl shadow-black/50 ring-1 ring-white/10 overflow-hidden">
            {/* Dynamic island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black z-30" />

            {/* Screen area */}
            <div className="absolute inset-[3px] rounded-[2.7rem] overflow-hidden bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreen}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {screens[activeScreen] ? (
                    <Image
                      src={screens[activeScreen]}
                      alt={screenLabels[activeScreen]}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col">
                      <div className="h-[38%] bg-red-500 flex flex-col justify-end px-4 pb-5">
                        <div className="w-14 h-1.5 bg-white/30 rounded-full mb-2" />
                        <div className="w-28 h-4 bg-white rounded-full mb-1.5" />
                        <div className="w-20 h-2 bg-white/50 rounded-full" />
                      </div>
                      <div className="flex-1 bg-slate-50 p-3 space-y-2.5">
                        {[...Array(3)].map((_, j) => (
                          <div key={j} className="bg-white rounded-2xl p-3 shadow-sm border border-slate-100 space-y-1.5">
                            <div className="w-3/4 h-2.5 bg-slate-200 rounded-full" />
                            <div className="w-1/2 h-2 bg-slate-100 rounded-full" />
                            <div className="w-full h-1 bg-red-100 rounded-full mt-1" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Physical buttons */}
            <div className="absolute right-[-3px] top-[90px] w-[3px] h-10 bg-slate-700 rounded-l-sm" />
            <div className="absolute left-[-3px] top-[80px] w-[3px] h-7 bg-slate-700 rounded-r-sm" />
            <div className="absolute left-[-3px] top-[115px] w-[3px] h-7 bg-slate-700 rounded-r-sm" />
          </div>

          {/* Arrow nav + dot indicators */}
          <div className="flex items-center gap-4 mt-5">
            <button
              onClick={prev}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
            >
              <ChevronLeft size={16} strokeWidth={2.5} />
            </button>

            <div className="flex gap-1.5">
              {screenLabels.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveScreen(i)}
                  className={`rounded-full transition-all duration-300 ${
                    activeScreen === i
                      ? "w-5 h-2 bg-white"
                      : "w-2 h-2 bg-white/35 hover:bg-white/55"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
            >
              <ChevronRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

/* ─────────────────────────────────────────
   Standard Project Card
───────────────────────────────────────── */
const RegularProjectCard = ({ project, t }: { project: Project; t: any }) => (
  <Card className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/60 shadow-none transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/70 dark:hover:shadow-cyan-500/5 hover:-translate-y-1">
    {/* Image */}
    <div className="relative aspect-[16/10] w-full overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent p-5 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex w-full gap-2.5 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
          {project.liveUrl !== "#" && (
            <Button
              size="sm"
              className="flex-1 rounded-xl bg-cyan-500 font-bold text-white hover:bg-cyan-400 text-xs"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                {t("demo")}
              </a>
            </Button>
          )}
          {project.githubUrl !== "#" && (
            <Button
              size="sm"
              variant="outline"
              className="flex-1 rounded-xl border-white/20 bg-white/10 font-bold text-white backdrop-blur-md hover:bg-white/20 text-xs"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1.5 h-3.5 w-3.5" />
                {t("code")}
              </a>
            </Button>
          )}
          {project.liveUrl === "#" && project.githubUrl === "#" && (
            <p className="w-full text-center text-[10px] font-bold uppercase tracking-widest text-white/50">
              {t("proprietary")}
            </p>
          )}
        </div>
      </div>
    </div>

    {/* Content */}
    <CardContent className="flex flex-1 flex-col p-6">
      <div className="mb-2.5 flex items-start justify-between gap-2">
        <h3 className="text-base font-bold leading-snug text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <Layers size={14} className="mt-0.5 shrink-0 text-slate-300 dark:text-slate-600" />
      </div>

      <p className="mb-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
        {project.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getTagStyle(tag)}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);

/* ─────────────────────────────────────────
   Projects Section – main export
───────────────────────────────────────── */
const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const t = useTranslations("projects");

  const filteredProjects = projects.filter((p) =>
    activeTab === "all" ? true : p.category === activeTab
  );

  const mobileProjects = filteredProjects.filter((p) => p.isMobile);
  const regularProjects = filteredProjects.filter((p) => !p.isMobile);

  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 dark:bg-[#020617] transition-colors duration-500"
    >
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-200 dark:border-cyan-900/60 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 text-[10px] font-bold tracking-widest uppercase">
              <FolderCode size={12} strokeWidth={2.5} />
              <span>{t("badge")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              {t("title")}{" "}
              <span className="text-cyan-500">{t("subtitle")}</span>
            </h2>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full lg:w-auto">
            <TabsList className="flex h-11 w-full items-center justify-start overflow-x-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1 gap-0.5 lg:w-auto">
              {["all", "frontend", "fullstack", "data", "mobile"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="min-w-max rounded-xl px-5 py-1.5 text-xs font-bold capitalize transition-all text-slate-500 dark:text-slate-400
                    data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-sm
                    dark:data-[state=active]:bg-white dark:data-[state=active]:text-slate-900"
                >
                  {tab === "mobile"
                    ? "Mobile"
                    : t(`tabs.${tab}`) || tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Regular project grid */}
        {regularProjects.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {regularProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                >
                  <RegularProjectCard project={project} t={t} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Mobile project cards */}
        {mobileProjects.length > 0 && (
          <div className={`${regularProjects.length > 0 ? "mt-6" : ""} space-y-6`}>
            <AnimatePresence mode="popLayout">
              {mobileProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                >
                  <MobileProjectCard project={project} t={t} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
