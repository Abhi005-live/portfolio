"use client";
import Image from "next/image";
import React from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";
import { FloatingDock } from "../ui/floating-dock";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
      <SectionHeader id="projects" title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex items-center justify-center"
    >
      <ResponsiveDialog>
        <ResponsiveDialogTrigger className="bg-transparent w-full">
          <div
            className="relative w-full rounded-none overflow-hidden group cursor-pointer clip-panel"
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              className="absolute w-full h-full top-0 left-0 object-cover group-hover:scale-[1.06] transition-transform duration-500"
              src={project.src}
              alt={project.title}
              width={400}
              height={267}
            />

            {/* dark overlay base */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* scan-line on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(139,92,246,0.06) 3px,rgba(139,92,246,0.06) 4px)",
              }}
            />

            {/* neon border on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ boxShadow: "inset 0 0 0 1px rgba(139,92,246,0.7), 0 0 20px rgba(139,92,246,0.15)" }}
            />

            {/* index number top-right */}
            <div
              className="absolute top-3 right-3 font-mono text-xs px-2 py-0.5 clip-panel-sm"
              style={{
                background: "rgba(10,5,25,0.7)",
                border: "1px solid rgba(139,92,246,0.4)",
                color: "#a78bfa",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="text-sm font-mono font-semibold text-white tracking-wide mb-1">
                {project.title}
              </div>
              <div
                className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 w-fit clip-panel-sm"
                style={{
                  background: "linear-gradient(135deg,rgba(124,58,237,0.7),rgba(236,72,153,0.5))",
                  color: "#ede9fe",
                }}
              >
                {project.category}
              </div>
            </div>
          </div>
        </ResponsiveDialogTrigger>

        <ResponsiveDialogContent className="md:max-w-4xl md:h-[85vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
          {/* dialog header */}
          <div
            className="shrink-0 border-b px-8 py-5 backdrop-blur-sm"
            style={{ borderColor: "rgba(139,92,246,0.25)", background: "rgba(10,5,25,0.8)" }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <h4 className="font-mono text-lg md:text-xl font-bold gradient-text truncate">
                  {project.title}
                </h4>
                <span
                  className="shrink-0 text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 clip-panel-sm"
                  style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.35)", color: "#c4b5fd" }}
                >
                  {project.category}
                </span>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                {project.github && (
                  <Link href={project.github} target="_blank"
                    className="text-xs font-mono text-violet-400 hover:text-violet-200 transition-colors underline underline-offset-2">
                    Source
                  </Link>
                )}
                <Link href={project.live} target="_blank">
                  <button className="btn-neon-primary flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono tracking-wider">
                    Visit
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <ScrollArea className="flex-1" type="always" data-lenis-prevent>
            <div className="px-8 py-8">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10"
              >
                {project.skills.frontend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-violet-400/60">Frontend</span>
                    <FloatingDock items={project.skills.frontend} />
                  </div>
                )}
                {project.skills.backend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-violet-400/60">Backend</span>
                    <FloatingDock items={project.skills.backend} />
                  </div>
                )}
              </motion.div>

              <div className="h-px mb-10" style={{ background: "linear-gradient(90deg,transparent,rgba(124,58,237,0.4),transparent)" }} />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {project.content}
              </motion.div>
            </div>
          </ScrollArea>
        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </motion.div>
  );
};

export default ProjectsSection;
