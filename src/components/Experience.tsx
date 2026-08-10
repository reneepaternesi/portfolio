"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

const olderJobs = [
  {
    company: "Belatrix Software",
    role: "Java Developer (Front-end focus)",
    period: "Jan 2010 - Feb 2014",
    points: ["Led front-end development initiatives for various client web projects."]
  },
  {
    company: "Clifton Myers Enterprises",
    role: "Systems Programmer Analyst",
    period: "Mar 2009 - Dec 2009",
    points: ["Managed database conversions and software development tasks."]
  },
  {
    company: "Proyectos Informáticos Suris",
    role: "Systems Programmer Analyst",
    period: "Sep 2006 - Feb 2009",
    points: ["Implemented META4 Human Resources System as part of a Software Factory."]
  },
  {
    company: "IMPSA",
    role: "Technical Assistant",
    period: "Sep 2005 - Sep 2006",
    points: ["Executed database migrations and provided technical support."]
  },
  {
    company: "Inden S.A.",
    role: "Jr Information System Analyst",
    period: "Mar 2005 - Sep 2005",
    points: ["Developed computer security plans, database migrations, and procedure manuals."]
  }
];

export default function Experience() {
  const [showOlder, setShowOlder] = useState(false);

  return (
    <section className="py-24" id="experience">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-100 mb-12 flex items-center gap-4">
          <span className="text-emerald-400 font-mono text-xl">02.</span> Where I&apos;ve Worked
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

        <div className="mt-12 text-center">
          <button 
            onClick={() => setShowOlder(!showOlder)}
            className="px-6 py-3 border border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-colors font-mono text-sm"
          >
            {showOlder ? "Hide previous experience" : "Show previous experience (2005 - 2014)"}
          </button>
        </div>

        <AnimatePresence>
          {showOlder && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-12 mt-12 overflow-hidden"
            >
              {olderJobs.map((job, idx) => (
                <div key={idx} className="relative pl-8 border-l border-gray-800/50">
                  <div className="absolute w-2 h-2 bg-gray-600 rounded-full -left-[4.5px] top-2.5"></div>
                  <h3 className="text-lg font-bold text-gray-300">
                    {job.role} <span className="text-gray-500">@ {job.company}</span>
                  </h3>
                  <p className="text-xs font-mono text-gray-600 mb-3 mt-1">{job.period}</p>
                  <ul className="space-y-2">
                    {job.points.map((point, i) => (
                      <li key={i} className="text-gray-500 flex items-start text-sm">
                        <span className="text-gray-600 mr-2">▹</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
