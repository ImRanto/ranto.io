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

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "fullstack",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description:
      "Tableau de bord analytique interactif pour visualiser des données complexes.",
    image:
      "https://images.pexels.com/photos/7689466/pexels-photo-7689466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "TypeScript", "Chart.js", "Firebase"],
    category: "frontend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "API Gateway Service",
    description:
      "Service de gateway API pour gérer l'authentification et les autorisations.",
    image:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Node.js", "Express", "JWT", "Redis"],
    category: "backend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Social Media App",
    description:
      "Application de réseau social avec messagerie et fil d'actualité en temps réel.",
    image:
      "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React Native", "Firebase", "Socket.io"],
    category: "mobile",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Task Management Tool",
    description:
      "Application de gestion de tâches avec suivi du temps et rapports.",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Vue.js", "Vuex", "Express", "PostgreSQL"],
    category: "fullstack",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "Site portfolio personnel avec sections animées et design réactif.",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    category: "frontend",
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
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
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
