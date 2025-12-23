"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Target, Lightbulb, Code } from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "Software Engineering Student",
    institution: "African Leadership University",
    description: "Pursuing a degree in Software Engineering with a focus on AI systems and full-stack development.",
  },
];

const values = [
  {
    icon: Target,
    title: "Impact-Driven",
    description: "I focus on building solutions that solve real problems and create meaningful change in people's lives.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Technology evolves rapidly, and so do I. I'm always exploring new tools, frameworks, and methodologies.",
  },
  {
    icon: Code,
    title: "Code Quality",
    description: "Clean, maintainable, and well-documented code is not optional—it's a standard I uphold in every project.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-muted-foreground mb-4">
              I&apos;m a Software Engineer passionate about building intelligent systems that solve real-world problems. 
              My journey in tech started with curiosity and has evolved into a commitment to creating impact through code.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Currently studying Software Engineering at African Leadership University, I&apos;ve been focusing on 
              mastering modern web technologies, AI systems, and backend infrastructure. I believe in learning 
              by doing, which is why every project I build is an opportunity to push boundaries and explore new possibilities.
            </p>
            <p className="text-lg text-muted-foreground">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, 
              or working on side projects that challenge me to grow. I&apos;m always open to collaborations, internships, 
              and opportunities that align with my passion for impactful technology.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-8 mt-16">Education</h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle>{item.title}</CardTitle>
                          <span className="text-sm text-muted-foreground font-mono">{item.year}</span>
                        </div>
                        <CardDescription className="text-base">{item.institution}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8 mt-16">Values & Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="p-2 bg-primary/10 rounded-lg w-fit mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
