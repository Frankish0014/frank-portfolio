"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResumePage() {
  const handleDownload = () => {
    // Create a temporary link to download the resume
    // In production, replace with actual resume PDF path
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Update with actual resume path
    link.download = "Frank_ISHIMWE_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Resume</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Download my resume or view it online
            </p>
            <Button onClick={handleDownload} size="lg" className="group">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle>Resume Preview</CardTitle>
                </div>
                <CardDescription>
                  View or download the full PDF version
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-[8.5/11] w-full bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                  <div className="text-center space-y-4 p-8">
                    <FileText className="h-16 w-16 text-muted-foreground mx-auto" />
                    <div>
                      <p className="text-lg font-semibold mb-2">Resume PDF</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Add your resume PDF to the public folder as &quot;resume.pdf&quot;
                      </p>
                      <p className="text-xs text-muted-foreground">
                        For now, you can use an iframe or embed tag when the PDF is available:
                      </p>
                      <code className="text-xs bg-background p-2 rounded mt-2 inline-block">
                        {"<iframe src='/resume.pdf' className='w-full h-full' />"}
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Alternative: If you have the PDF ready, uncomment this */}
          {/* 
          <div className="mt-8">
            <iframe
              src="/resume.pdf"
              className="w-full aspect-[8.5/11] border rounded-lg"
              title="Resume"
            />
          </div>
          */}
        </motion.div>
      </section>
    </div>
  );
}
