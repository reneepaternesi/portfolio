"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";

const showcases = [
  {
    title: "React 19 Enterprise Architecture",
    description: "A cutting-edge React architecture demonstrating Next.js 16, React 19, Tailwind v4, and state orchestration using XState and Zustand.",
    tech: ["Next.js 16", "React 19", "XState", "Tailwind v4"],
    url: "https://github.com/reneepaternesi/react19-enterprise-architecture"
  },
  {
    title: "Nuxt 3 SSR Architecture",
    description: "A production-ready Server-Side Rendering (SSR) architecture boilerplate utilizing Vue 3, Nuxt 3, Pinia for hydration, and Tailwind CSS.",
    tech: ["Vue 3", "Nuxt 3", "Pinia", "SSR"],
    url: "https://github.com/reneepaternesi/nuxt-ssr-architecture"
  },
  {
    title: "React Rollup Design System",
    description: "White-label Design System Architecture Showcase powered by React, Rollup, Styled Components, and robust Storybook documentation.",
    tech: ["React", "Rollup", "Storybook", "Styled Components"],
    url: "https://github.com/reneepaternesi/react-rollup-ds-architecture"
  },
  {
    title: "Real Estate Open House Dashboard",
    description: "Robust React application managing property viewings, featuring custom hooks for state management and native browser History API syncing.",
    tech: ["React", "Custom Hooks", "History API", "Performance"],
    url: "https://github.com/reneepaternesi/real-estate-open-house-dashboard"
  }
];

export default function Showcases() {
  return (
    <section className="py-24" id="showcases">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-100 mb-12 flex items-center gap-4">
          <span className="text-emerald-400 font-mono text-xl">01.</span> Architectural Showcases
          <div className="h-[1px] bg-gray-800 flex-1 ml-4"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showcases.map((project, idx) => (
            <a 
              key={idx} 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:bg-gray-800/50 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <FolderGit2 className="w-10 h-10 text-emerald-400" />
                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-200 group-hover:text-emerald-400 transition-colors mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 h-20">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((t, i) => (
                  <li key={i} className="text-xs font-mono text-gray-500">
                    {t}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
