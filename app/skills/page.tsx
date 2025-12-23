"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "Shell", level: "Intermediate" },
      { name: "Solidity", level: "Basic" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML/CSS", level: "Advanced" },
      { name: "Responsive Design", level: "Advanced" },
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      { name: "Python Backend", level: "Advanced" },
      { name: "REST APIs", level: "Advanced" },
      { name: "Regex Data Extraction", level: "Advanced" },
      { name: "CLI Tools", level: "Advanced" },
      { name: "Data Processing", level: "Advanced" },
    ],
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "Multi-Agent Systems", level: "Intermediate" },
      { name: "AI Workflows", level: "Intermediate" },
      { name: "LLM Integration", level: "Intermediate" },
      { name: "Automation Scripts", level: "Advanced" },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "Linux", level: "Intermediate" },
      { name: "Vercel", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-primary text-primary-foreground";
    case "Intermediate":
      return "bg-secondary text-secondary-foreground";
    case "Basic":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Skills</h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive overview of my technical expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                    <CardDescription>
                      {category.skills.length} skills
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Badge
                            variant="outline"
                            className="cursor-default text-xs py-1 px-2"
                          >
                            {skill.name}
                            <span className={`ml-2 px-1.5 py-0.5 rounded text-[10px] ${getLevelColor(skill.level)}`}>
                              {skill.level}
                            </span>
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
