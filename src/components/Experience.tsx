"use client";

import { motion } from "framer-motion";

const jobs = [
  {
    company: "Halo Media",
    role: "Senior Frontend Engineer & Design System Lead",
    period: "2023 - Present",
    points: [
      "Architected a scalable internal React component library, accelerating UI delivery by 40%.",
      "Led the transition from legacy monolithic systems to modular Micro-Frontends.",
      "Implemented comprehensive automated visual regression testing workflows.",
      "Championed the integration of AI-assisted tools (Claude, DeepMind) for code audits and documentation."
    ]
  },
  {
    company: "Rappi",
    role: "Senior Frontend Engineer",
    period: "2019 - 2023",
    points: [
      "Optimized Core Web Vitals for high-traffic landing pages serving millions of active users.",
      "Developed interactive internal dashboards using Next.js and Tailwind CSS.",
      "Mentored junior engineers and led strict, security-first code review processes."
    ]
  },
  {
    company: "CoderHouse",
    role: "Frontend Engineer / Tech Lead",
    period: "2016 - 2019",
    points: [
      "Built and maintained core educational platform interfaces using Vue.js.",
      "Designed robust token pipelines connecting Figma directly to our styling architecture."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-24" id="experience">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-100 mb-12 flex items-center gap-4">
          <span className="text-emerald-400 font-mono text-xl">02.</span> Where I've Worked
          <div className="h-[1px] bg-gray-800 flex-1 ml-4"></div>
        </h2>

        <div className="space-y-12">
          {jobs.map((job, idx) => (
            <div key={idx} className="relative pl-8 border-l border-gray-800">
              <div className="absolute w-3 h-3 bg-emerald-400 rounded-full -left-[6.5px] top-2"></div>
              <h3 className="text-xl font-bold text-gray-200">
                {job.role} <span className="text-emerald-400">@ {job.company}</span>
              </h3>
              <p className="text-sm font-mono text-gray-500 mb-4 mt-1">{job.period}</p>
              <ul className="space-y-3">
                {job.points.map((point, i) => (
                  <li key={i} className="text-gray-400 flex items-start">
                    <span className="text-emerald-400 mr-2">▹</span>
                    <span className="text-sm leading-relaxed">{point}</span>
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
