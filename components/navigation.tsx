"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-border/40 bg-background/95 backdrop-blur-xl shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative font-mono text-2xl font-bold bg-gradient-to-r from-[#34495e] via-[#5d6d7e] to-[#7f8c8d] bg-clip-text text-transparent">
                FI
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl",
                    isActive 
                      ? "text-primary bg-primary/10 border-2 border-primary/30" 
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5 border-2 border-transparent"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#34495e] via-[#5d6d7e] to-[#7f8c8d] rounded-full"
                      layoutId="navbar-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
}
