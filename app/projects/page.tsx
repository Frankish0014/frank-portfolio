"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, Filter } from "lucide-react";
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
    <div className="min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-muted-foreground">
              Case studies of my work building AI systems, web platforms, and data-driven solutions
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  id={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                          <Badge variant="outline">{project.category}</Badge>
                        </div>
                        <div className="flex gap-2">
                          {project.githubUrl && (
                            <Button
                              asChild
                              variant="ghost"
                              size="icon"
                              aria-label="View on GitHub"
                            >
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          {project.demoUrl && (
                            <Button
                              asChild
                              variant="ghost"
                              size="icon"
                              aria-label="View live demo"
                            >
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Problem & Solution */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Problem</h3>
                        <p className="text-muted-foreground mb-4">{project.problem}</p>
                        <h3 className="text-lg font-semibold mb-2">Solution</h3>
                        <p className="text-muted-foreground">{project.solution}</p>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <Badge key={tech} variant="secondary" className="font-mono text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Role */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">My Role</h3>
                        <p className="text-muted-foreground">{project.role}</p>
                      </div>

                      {/* Challenges & Learnings */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Challenges & Learnings</h3>
                        <p className="text-muted-foreground">{project.challenges}</p>
                      </div>

                      {/* Impact */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Impact / Results</h3>
                        <p className="text-muted-foreground">{project.impact}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
}
