"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Code, Trophy } from "lucide-react";

const education = [
  {
    institution: "African Leadership University",
    degree: "Software Engineering",
    period: "2024 - Present",
    description: "Pursuing a comprehensive software engineering degree with focus on modern web development, AI systems, and backend infrastructure.",
    icon: GraduationCap,
  },
];

const certifications = [
  {
    title: "AI in Marketing",
    issuer: "University of Virginia Darden",
    period: "2024",
    description: "Specialized certification in applying AI technologies to marketing strategies and campaigns.",
    icon: Award,
  },
  {
    title: "Digital Marketing",
    issuer: "Alibaba Global Initiative",
    period: "2024",
    description: "Comprehensive digital marketing certification covering modern marketing strategies and tools.",
    icon: Award,
  },
];

const practicalExperience = [
  {
    title: "Hackathons & Competitions",
    type: "Competitive Programming",
    description: "Participated in multiple hackathons and coding competitions, building innovative solutions under time constraints and collaborating with diverse teams.",
    icon: Trophy,
  },
  {
    title: "Open Source Contributions",
    type: "Community Engagement",
    description: "Contributing to open-source projects, improving documentation, fixing bugs, and building features that benefit the developer community.",
    icon: Code,
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Experience</h1>
            <p className="text-lg text-muted-foreground">
              My educational background, certifications, and practical experience
            </p>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                              <div>
                                <CardTitle className="text-xl">{edu.degree}</CardTitle>
                                <CardDescription className="text-base mt-1">
                                  {edu.institution}
                                </CardDescription>
                              </div>
                              <Badge variant="outline" className="font-mono">
                                {edu.period}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <Badge variant="outline" className="font-mono text-xs">
                            {cert.period}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{cert.title}</CardTitle>
                        <CardDescription className="text-sm">{cert.issuer}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{cert.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Practical Experience */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Practical Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practicalExperience.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-start space-x-3 mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg">{exp.title}</CardTitle>
                            <Badge variant="secondary" className="mt-2">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
