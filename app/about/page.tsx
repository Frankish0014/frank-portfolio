"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Target, Lightbulb, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Modern Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#34495e]/5 dark:bg-[#34495e]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#5d6d7e]/5 dark:bg-[#5d6d7e]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s", animationDuration: "10s" }} />
      </div>
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <Card className="relative overflow-hidden border-2 bg-card/80 backdrop-blur-xl shadow-2xl rounded-3xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 p-8 md:p-16">
                <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl group">
                      <Image
                        src="/images/passport-photo.jpg"
                        alt="Frank ISHIMWE"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="300px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </motion.div>
                  <div className="space-y-6">
                    <div>
                      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#34495e] via-[#5d6d7e] to-[#7f8c8d] bg-clip-text text-transparent">
                        About Me
                      </h1>
                      <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                        <p>
                          I&apos;m a Software Engineer passionate about building intelligent systems that solve real-world problems. 
                          My journey in tech started with curiosity and has evolved into a commitment to creating impact through code.
                        </p>
                        <p>
                          Currently studying Software Engineering at African Leadership University, I&apos;ve been focusing on 
                          mastering modern web technologies, AI systems, and backend infrastructure. I believe in learning 
                          by doing, which is why every project I build is an opportunity to push boundaries and explore new possibilities.
                        </p>
                        <p>
                          When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, 
                          or working on side projects that challenge me to grow. I&apos;m always open to collaborations, internships, 
                          and opportunities that align with my passion for impactful technology.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#34495e] via-[#5d6d7e] to-[#7f8c8d] bg-clip-text text-transparent">
                Education
              </h2>
              <p className="text-xl text-muted-foreground">My academic journey</p>
            </div>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="hover:border-primary/50 transition-all duration-300 group border-2 rounded-2xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <CardHeader className="relative z-10">
                        <div className="flex items-start gap-6">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors flex-shrink-0"
                          >
                            <GraduationCap className="h-8 w-8 text-primary" />
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                              <CardTitle className="text-2xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                              <span className="text-sm text-muted-foreground font-mono bg-primary/10 px-3 py-1 rounded-full border border-primary/20">{item.year}</span>
                            </div>
                            <CardDescription className="text-lg font-semibold">{item.institution}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#34495e] via-[#5d6d7e] to-[#7f8c8d] bg-clip-text text-transparent">
                Values & Philosophy
              </h2>
              <p className="text-xl text-muted-foreground">What drives my work</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="h-full"
                    >
                      <Card className="h-full hover:border-primary/50 transition-all duration-300 group border-2 rounded-2xl p-8 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <CardHeader className="relative z-10 p-0 mb-6">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="p-4 bg-primary/10 rounded-2xl w-fit mb-4 group-hover:bg-primary/20 transition-colors"
                          >
                            <Icon className="h-8 w-8 text-primary" />
                          </motion.div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">{value.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="relative z-10 p-0">
                          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">{value.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
