"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Code2, Brain, Database, Globe, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techStack = [
  { name: "TypeScript", icon: Code2 },
  { name: "Python", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "AI Agents", icon: Brain },
  { name: "Backend Systems", icon: Database },
  { name: "Data Automation", icon: Database },
];

const featuredProjects = [
  {
    title: "Voya AI Agent",
    description: "Intelligent travel planning agent with multi-agent orchestration",
    category: "AI",
    href: "/projects#voya-ai",
    image: "/images/voya-interface.jpg",
  },
  {
    title: "Coffee Trends Agent",
    description: "Data-driven insights platform for coffee industry trends",
    category: "AI",
    href: "/projects#coffee-trends",
  },
  {
    title: "ExpressGo",
    description: "Fast and efficient delivery management system",
    category: "Web",
    href: "/projects#expressgo",
    image: "/images/expressgo-project.jpg",
  },
  {
    title: "Baho Coffee",
    description: "E-commerce and digital presence solutions for coffee business",
    category: "Web",
    href: "/projects#baho-coffee",
    image: "/images/baho-coffee.jpg",
  },
  {
    title: "MedBooking Web3",
    description: "Blockchain-based medical booking platform with Smart Contracts",
    category: "Emerging Tech",
    href: "/projects#medbooking-web3",
    image: "/images/medbooking.jpg",
  },
];

const impactStatements = [
  {
    title: "Problem-Solving First",
    description: "I approach every project by first understanding the core problem and its real-world impact.",
  },
  {
    title: "Real-World Impact",
    description: "Every line of code is written with the goal of creating meaningful change and solving actual challenges.",
  },
  {
    title: "Learning by Building",
    description: "I believe in hands-on experience. The best way to master a technology is to build something real with it.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Modern Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#34495e]/5 dark:bg-[#34495e]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#5d6d7e]/5 dark:bg-[#5d6d7e]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s", animationDuration: "10s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7f8c8d]/3 dark:bg-[#7f8c8d]/8 rounded-full blur-3xl animate-pulse-glow" />
      </div>
      
      {/* Hero Section - Modern Split Layout */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 text-sm font-medium text-primary mb-6"
              >
                <Sparkles className="h-3 w-3" />
                <span>Available for opportunities</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight"
              >
                <span className="block text-foreground mb-2">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-[#34495e] via-[#5d6d7e] to-[#7f8c8d] bg-clip-text text-transparent">
                  Frank ISHIMWE
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl sm:text-3xl font-semibold text-muted-foreground"
              >
                Software Engineer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              >
                I build AI-powered, web, and data-driven solutions for real-world and impact-focused problems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <Button asChild size="lg" className="group text-base px-8 py-6 h-auto rounded-xl">
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group text-base px-8 py-6 h-auto rounded-xl border-2">
                  <Link href="/resume">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Link>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center gap-4 pt-4"
              >
                <a
                  href="https://github.com/Frankish0014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-muted hover:bg-primary/10 transition-colors group"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ishimwe-frank-096256371/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-muted hover:bg-primary/10 transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="mailto:frank.ishimwe@example.com"
                  className="p-3 rounded-xl bg-muted hover:bg-primary/10 transition-colors group"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Profile Photo with Modern Frame */}
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full max-w-md mx-auto"
                >
                  <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/10 to-primary/5">
                    <Image
                      src="/images/passport-photo.jpg"
                      alt="Frank ISHIMWE"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-2xl blur-xl" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-3xl blur-2xl" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Modern Card Design */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Card className="relative overflow-hidden border-2 bg-card/80 backdrop-blur-xl shadow-2xl rounded-3xl">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 p-8 md:p-16">
                <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
                  {/* Profile Photo */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl group">
                      <Image
                        src="/images/passport-photo.jpg"
                        alt="Frank ISHIMWE"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="280px"
                        priority
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-[#34495e] via-[#5d6d7e] to-[#7f8c8d] bg-clip-text text-transparent">
                        About Me
                      </h2>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p className="text-lg">
                          I&apos;m a Software Engineer passionate about building intelligent systems that solve real-world problems. 
                          My journey in tech started with curiosity and has evolved into a commitment to creating impact through code.
                        </p>
                        <p className="text-lg">
                          Currently studying Software Engineering at African Leadership University, I&apos;ve been focusing on 
                          mastering modern web technologies, AI systems, and backend infrastructure. I believe in learning 
                          by doing, which is why every project I build is an opportunity to push boundaries and explore new possibilities.
                        </p>
                        <p className="text-lg">
                          When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, 
                          or working on side projects that challenge me to grow. I&apos;m always open to collaborations, internships, 
                          and opportunities that align with my passion for impactful technology.
                        </p>
                      </div>
                    </div>
                    <Button asChild variant="outline" size="lg" className="group rounded-xl border-2">
                      <Link href="/about">
                        Learn More About Me
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack - Modern Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#34495e] via-[#5d6d7e] to-[#7f8c8d] bg-clip-text text-transparent">
              Tech Stack
            </h2>
            <p className="text-xl text-muted-foreground">Technologies I work with</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <Card className="h-full hover:border-primary/50 transition-all duration-300 cursor-pointer group border-2 rounded-2xl">
                    <CardContent className="p-6 flex flex-col items-center justify-center space-y-3 text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <p className="text-sm font-semibold group-hover:text-primary transition-colors">{tech.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Featured Projects - Modern Grid Layout */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#34495e] via-[#5d6d7e] to-[#7f8c8d] bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground">A selection of my recent work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer group border-2 rounded-2xl">
                  {project.image && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  <CardHeader className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary">{project.category}</Badge>
                    </div>
                    <CardDescription className="text-base group-hover:text-foreground/80 transition-colors">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <Button asChild variant="ghost" className="group/btn w-full justify-start rounded-xl">
                      <Link href={project.href}>
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg" className="rounded-xl border-2">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Impact Statements - Modern Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#34495e] via-[#5d6d7e] to-[#7f8c8d] bg-clip-text text-transparent">
              My Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStatements.map((statement, index) => (
              <motion.div
                key={statement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:border-primary/50 transition-all duration-300 group border-2 rounded-2xl p-8">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-primary" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{statement.title}</h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {statement.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
