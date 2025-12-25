"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Filter, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/projects";

const categories: Array<Project["category"] | "All"> = ["All", "AI", "Web", "Data", "Emerging Tech"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Project["category"] | "All">("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Modern Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#34495e]/5 dark:bg-[#34495e]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#7f8c8d]/5 dark:bg-[#7f8c8d]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s", animationDuration: "12s" }} />
      </div>
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#34495e] via-[#5d6d7e] to-[#7f8c8d] bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Case studies of my work building AI systems, web platforms, and data-driven solutions
            </p>
          </div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            <Filter className="h-4 w-4 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-xl transition-all ${
                  selectedCategory === category 
                    ? "border-2 shadow-lg" 
                    : "hover:border-primary/50"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  id={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <CardHeader className="p-8 pb-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <CardTitle className="text-3xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                              <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary border-2">
                                {project.category}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            {project.githubUrl && (
                              <Button
                                asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-xl hover:bg-primary/10"
                                aria-label="View on GitHub"
                              >
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-5 w-5" />
                                </a>
                              </Button>
                            )}
                            {project.demoUrl && (
                              <Button
                                asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-xl hover:bg-primary/10"
                                aria-label="View live demo"
                              >
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-5 w-5" />
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-8 pt-0 space-y-8">
                        {/* Project Image */}
                        {project.image && (
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden border-2 border-border/50 group-hover:border-primary/50 transition-all duration-300"
                          >
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.div>
                        )}
                        
                        {/* Problem & Solution */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <h3 className="text-xl font-bold text-foreground">Problem</h3>
                            <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                          </div>
                          <div className="space-y-3">
                            <h3 className="text-xl font-bold text-foreground">Solution</h3>
                            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-foreground">Tech Stack</h3>
                          <div className="flex flex-wrap gap-3">
                            {project.techStack.map((tech) => (
                              <motion.div
                                key={tech}
                                whileHover={{ scale: 1.1, y: -2 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <Badge variant="secondary" className="font-mono text-sm py-2 px-4 cursor-default hover:bg-primary/20 hover:text-primary hover:border-primary/50 border-2 transition-all rounded-xl">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Role */}
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-foreground">My Role</h3>
                          <p className="text-muted-foreground leading-relaxed">{project.role}</p>
                        </div>

                        {/* Challenges & Learnings */}
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-foreground">Challenges & Learnings</h3>
                          <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
                        </div>

                        {/* Impact */}
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-foreground">Impact / Results</h3>
                          <p className="text-muted-foreground leading-relaxed">{project.impact}</p>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </section>
    </div>
  );
}
