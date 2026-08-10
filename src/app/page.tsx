import Hero from "@/components/Hero";
import Showcases from "@/components/Showcases";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 md:px-12">
      <Hero />
      <Showcases />
      <Experience />
      <TechStack />
      
      <footer className="py-12 text-center text-gray-600 text-sm border-t border-gray-900 mt-20">
        <p>Built with Next.js 16, Tailwind v4 & Framer Motion.</p>
        <p className="mt-2">© {new Date().getFullYear()} Renée Paternesi. All rights reserved.</p>
      </footer>
    </main>
  );
}
