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
    <div className="min-h-screen relative overflow-hidden">
      {/* Modern Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#5d6d7e]/5 dark:bg-[#5d6d7e]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-[#34495e]/5 dark:bg-[#34495e]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3.5s", animationDuration: "11s" }} />
      </div>
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#34495e] via-[#5d6d7e] to-[#7f8c8d] bg-clip-text text-transparent">
              Skills
            </h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive overview of my technical expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full"
                >
                  <Card className="h-full hover:border-primary/50 transition-all duration-300 group border-2 rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader className="relative z-10 p-0 mb-6">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors mb-2">{category.category}</CardTitle>
                      <CardDescription className="text-base">
                        {category.skills.length} skills
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10 p-0">
                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill) => (
                          <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <Badge
                              variant="outline"
                              className="cursor-default text-sm py-2 px-4 hover:bg-primary/10 hover:border-primary/50 transition-all rounded-xl border-2"
                            >
                              {skill.name}
                              <span className={`ml-2 px-2 py-0.5 rounded-lg text-xs font-semibold ${getLevelColor(skill.level)}`}>
                                {skill.level}
                              </span>
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
