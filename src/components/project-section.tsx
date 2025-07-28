"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
};
// https://patrimoine-economique-ui-rnt.onrender.com

const projects: Project[] = [
  {
    id: 1,
    title: "Gestion de Patrimoine (L1)",
    description:
      "Application full-stack permettant de gérer les possessions d'une personne, calculer la valeur actuelle de son patrimoine, avec amortissements et revenus réguliers.",
    image: "https://iili.io/FNQpoWN.png",
    tags: ["React", "Express", "Node.js", "Tailwind CSS"],
    category: "all",
    liveUrl: "#", 
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Assistant IA (Hackathon HIU) (L2)",
    description:
      "Application Next.js primée lors du Hackathon Inter-Universitaire, intégrant des fonctionnalités intelligentes pour l’aide à la recherche d’emploi et la planification de tâches quotidiennes avec IA.",
    image: "https://iili.io/FNQiG0x.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "OpenAI API"],
    category: "all",
    liveUrl: "https://hiu-2025-bisounours.vercel.app",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Tapakila – Billetterie en ligne (L2)",
    description:
      "Application web de billetterie permettant la réservation d'événements avec intégration d’API et paiement sécurisé.",
    image: "https://iili.io/FN4Ujcb.png",
    tags: ["Next.js", "Taiwindcss(Shadcn)", "Java(Spring Boot)"],
    category: "all",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            Mes Projets
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-cyan-500 rounded-full"></div>
          </h2>
          <p className="text-lg text-muted-foreground">
            Une sélection de mes travaux récents, allant des applications web
            full stack aux sites vitrines et applications mobiles.
          </p>
        </motion.div>

        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="mb-12"
        >
          <div className="flex justify-center">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="all">all</TabsTrigger>
              <TabsTrigger value="all">Frontend</TabsTrigger>
              <TabsTrigger value="all">Backend</TabsTrigger>
              <TabsTrigger value="all">Full Stack</TabsTrigger>
              <TabsTrigger value="all">Mobile</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between">
                        <Button size="sm" variant="default" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <ExternalLink className="h-4 w-4" /> Live
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <Github className="h-4 w-4" /> Code
                          </a>
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-muted/80"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
