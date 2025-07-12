"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Briefcase, ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "AI E-commerce",
    description: "Real-time inventory, personalized shopping, and AI-powered recommendations.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    color: "#6366f1",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Manager",
    description: "Collaborative, real-time, with advanced analytics.",
    tech: ["React", "Socket.io", "TailwindCSS"],
    color: "#10b981",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "DeFi Dashboard",
    description: "Yield tracking, portfolio insights, cross-chain.",
    tech: ["Web3.js", "Solidity", "The Graph"],
    color: "#f59e0b",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.77, 0, 0.18, 1] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.4, ease: [0.77, 0, 0.18, 1] },
  }),
};

export default function ProjectsSlider() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);

  // Touch swipe
  const touchStartX = useRef<number | null>(null);

  const handleNext = () => {
    if (index < projects.length - 1) {
      setDir(1);
      setIndex(index + 1);
    }
  };
  const handlePrev = () => {
    if (index > 0) {
      setDir(-1);
      setIndex(index - 1);
    }
  };

  // Touch events for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta < -50) handleNext();
    else if (delta > 50) handlePrev();
    touchStartX.current = null;
  };

  // Keyboard navigation (left/right)
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <section className="relative w-full flex flex-col items-center bg-gradient-to-br from-slate-50 to-indigo-50 py-16 sm:py-24 min-h-[80vh]">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="text-indigo-500 w-6 h-6" />
        <span className="uppercase font-bold tracking-widest text-sm text-gray-700">Recent Projects</span>
      </div>

      <div className="relative w-full max-w-xl flex flex-col items-center">
        <div
          className="relative w-full"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={index}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full"
              style={{ minHeight: "370px" }}
            >
              <div
                className="flex flex-col items-center bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 sm:p-12"
                style={{
                  borderTop: `6px solid ${projects[index].color}`,
                  boxShadow: `0 6px 40px 0 ${projects[index].color}22`,
                }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-800 to-purple-600">
                  {projects[index].title}
                </h2>
                <p className="text-md sm:text-lg text-gray-700 mb-4 text-center">{projects[index].description}</p>
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {projects[index].tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-700 font-semibold border border-white/40 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mb-2 justify-center">
                  <a
                    href={projects[index].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 text-sm font-semibold transition"
                  >
                    Live <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={projects[index].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-900 text-sm transition"
                  >
                    <Github size={16} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Arrows */}
        <div className="flex items-center gap-6 mt-8">
          <button
            aria-label="Previous project"
            disabled={index === 0}
            onClick={handlePrev}
            className={`p-2 rounded-full bg-gray-200 hover:bg-indigo-100 transition ${
              index === 0 ? "opacity-40 pointer-events-none" : ""
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-gray-500 select-none">
            {String(index + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
          </span>
          <button
            aria-label="Next project"
            disabled={index === projects.length - 1}
            onClick={handleNext}
            className={`p-2 rounded-full bg-gray-200 hover:bg-indigo-100 transition ${
              index === projects.length - 1 ? "opacity-40 pointer-events-none" : ""
            }`}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        {/* Dots */}
        <div className="flex gap-2 mt-4 justify-center">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === index ? "bg-indigo-500 scale-125" : "bg-gray-300"
              }`}
              aria-label={`Show project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
