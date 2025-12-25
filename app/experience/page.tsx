"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Code, Trophy, ExternalLink } from "lucide-react";

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
  {
    title: "Data Visualization with Python",
    issuer: "Coursera",
    period: "2024",
    description: "Certification in data visualization techniques using Python, covering libraries like Matplotlib, Seaborn, and Plotly for creating impactful data visualizations.",
    icon: Award,
    certificateUrl: "/images/Data_Visualization_Coursera With Python VRCZ71H94373 certificate .pdf",
  },
  {
    title: "International Organization of Youth",
    issuer: "International Organization of Youth",
    period: "2024",
    description: "Certification from the International Organization of Youth recognizing participation and contributions to youth development initiatives.",
    icon: Award,
    certificateUrl: "/images/Internation Organization of Youth certficate.pdf",
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Modern Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#34495e]/5 dark:bg-[#34495e]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2.5s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-[#5d6d7e]/5 dark:bg-[#5d6d7e]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "5s", animationDuration: "13s" }} />
      </div>
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#34495e] via-[#5d6d7e] to-[#7f8c8d] bg-clip-text text-transparent">
              Experience
            </h1>
            <p className="text-xl text-muted-foreground">
              My educational background, certifications, and practical experience
            </p>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#34495e] via-[#5d6d7e] to-[#7f8c8d] bg-clip-text text-transparent">
              Education
            </h2>
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
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="group hover:border-primary/50 transition-all duration-300 border-2 rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <CardHeader className="relative z-10">
                          <div className="flex items-start space-x-6">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors flex-shrink-0"
                            >
                              <Icon className="h-8 w-8 text-primary" />
                            </motion.div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                                <div>
                                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">{edu.degree}</CardTitle>
                                  <CardDescription className="text-lg">
                                    {edu.institution}
                                  </CardDescription>
                                </div>
                                <Badge variant="outline" className="font-mono bg-primary/10 border-primary/30 text-primary border-2">
                                  {edu.period}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors leading-relaxed">{edu.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#34495e] via-[#5d6d7e] to-[#7f8c8d] bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="h-full"
                    >
                      <Card className="h-full group hover:border-primary/50 transition-all duration-300 border-2 rounded-2xl p-8 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <CardHeader className="relative z-10 p-0 mb-6">
                          <div className="flex items-start justify-between mb-4">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                              className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors"
                            >
                              <Icon className="h-6 w-6 text-primary" />
                            </motion.div>
                            <Badge variant="outline" className="font-mono text-xs bg-primary/10 border-primary/30 text-primary border-2">
                              {cert.period}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">{cert.title}</CardTitle>
                          <CardDescription className="text-base group-hover:text-foreground/80 transition-colors">{cert.issuer}</CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10 p-0">
                          <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors mb-4 leading-relaxed">{cert.description}</p>
                          {cert.certificateUrl && (
                            <Button asChild variant="outline" size="sm" className="group/btn rounded-xl border-2">
                              <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                                View Certificate
                                <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                              </a>
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Practical Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#34495e] via-[#5d6d7e] to-[#7f8c8d] bg-clip-text text-transparent">
              Practical Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="h-full"
                    >
                      <Card className="h-full group hover:border-primary/50 transition-all duration-300 border-2 rounded-2xl p-8 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <CardHeader className="relative z-10 p-0 mb-6">
                          <div className="flex items-start space-x-4 mb-4">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                              className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors"
                            >
                              <Icon className="h-6 w-6 text-primary" />
                            </motion.div>
                            <div className="flex-1">
                              <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">{exp.title}</CardTitle>
                              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 border-2">
                                {exp.type}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="relative z-10 p-0">
                          <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors leading-relaxed">{exp.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
