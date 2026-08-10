"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0-.1 3.8 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-start pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-emerald-400 font-mono text-sm mb-4 tracking-wider uppercase">
          Hi, my name is
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-100 tracking-tight mb-4">
          Renée Paternesi.
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-400 tracking-tight mb-8">
          I build high-performance web architectures.
        </h1>
        <p className="max-w-2xl text-lg text-gray-400 leading-relaxed mb-10">
          I'm a Senior Frontend Engineer and AI-Augmented Developer specializing in React, Next.js, and Design Systems. 
          I leverage artificial intelligence workflows to automate testing, eliminate visual regressions, and accelerate engineering velocity.
        </p>

        <div className="flex items-center gap-6">
          <a href="mailto:reneepaternesi@gmail.com" className="group flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-white transition-colors">
            Get in touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://github.com/reneepaternesi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <GithubIcon />
          </a>
          <a href="https://linkedin.com/in/reneepaternesi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <LinkedinIcon />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
