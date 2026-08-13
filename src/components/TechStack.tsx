"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Database, Bot } from "lucide-react";

const categories = [
  {
    title: "Languages & Frameworks",
    icon: <Code2 className="w-5 h-5 text-emerald-400" />,
    skills: ["TypeScript", "JavaScript", "React / Next.js", "Vue.js / Nuxt", "Angular / Angular.js", "HTML5 / CSS3"]
  },
  {
    title: "Architecture & Styling",
    icon: <Layout className="w-5 h-5 text-emerald-400" />,
    skills: ["Tailwind CSS", "Angular Material", "Micro-Frontends", "Nx Monorepo", "Storybook", "Figma (Auto-layout, Tokens)"]
  },
  {
    title: "State Management",
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    skills: ["Redux", "React Context", "Zustand", "XState", "Pinia", "Vuex"]
  },
  {
    title: "Testing & QA",
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    skills: ["Jest", "React Testing Lib", "Enzyme", "Vitest", "Playwright", "Cypress"]
  },
  {
    title: "AI-Augmented Workflows",
    icon: <Bot className="w-5 h-5 text-emerald-400" />,
    skills: ["Google DeepMind Antigravity", "GitHub Copilot", "Agentic Code Review", "AI-Assisted Development"]
  }
];

export default function TechStack() {
  return (
    <section className="py-24" id="tech">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-100 mb-12 flex items-center gap-4">
          <span className="text-emerald-400 font-mono text-xl">03.</span> Tech Stack & Tools
          <div className="h-[1px] bg-gray-800 flex-1 ml-4"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="p-6 bg-gray-900/30 rounded-lg border border-gray-800/50">
              <div className="flex items-center gap-3 mb-6">
                {cat.icon}
                <h3 className="text-lg font-semibold text-gray-200">{cat.title}</h3>
              </div>
              <ul className="grid grid-cols-2 gap-3">
                {cat.skills.map((skill, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400/50 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
