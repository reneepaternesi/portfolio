"use client";

import { motion } from "framer-motion";

const jobs = [
  {
    company: "Halo Media",
    role: "Frontend Engineer (Design Systems & UI)",
    period: "Jan 2024 - Present",
    points: [
      "Developed a Next.js-based employee benefits portal serving as the primary frontend across multiple user journeys.",
      "Led end-to-end typography migration and mobile-first responsiveness initiatives across 10+ core UI components.",
      "Contributed to an internal Design System monorepo (Nx), managing versioning and publishing pipelines.",
      "Pioneered AI-augmented development practices using agentic tools (Claude/DeepMind) for automated code audits and large-scale refactoring."
    ]
  },
  {
    company: "CoderHouse",
    role: "Sr Frontend Developer",
    period: "Feb 2022 - Oct 2023",
    points: [
      "Led the development of a Vue.js component library designed to be shared across different micro-frontends.",
      "Established shared UI standards for multiple product squads and implemented responsive UX designs.",
      "Tested and maintained critical web page functionality across a major platform migration project."
    ]
  },
  {
    company: "Rappi",
    role: "Sr Frontend Developer",
    period: "Jul 2019 - Feb 2022",
    points: [
      "Developed a React component library to be shared between different web squads, supporting micro-frontend architecture.",
      "Implemented and tested critical web page functionality related to restaurants, payments, and checkout.",
      "Mentored junior engineers and ensured pixel-perfect, responsive UI deliverables."
    ]
  },
  {
    company: "AG2 Technology LLC",
    role: "Sr Frontend Developer",
    period: "Feb 2015 - Jul 2019",
    points: [
      "Implemented and tested a complex module integrated within the client web page to configure Print on Demand products.",
      "Maintained legacy architectures using Angular.js, HTML, CSS3, and jQuery.",
      "Collaborated closely with backend engineers to consume RESTful APIs for robust e-commerce configurations."
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
