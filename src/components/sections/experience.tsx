"use client";
import { EXPERIENCE, SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { useState } from "react";

const ExperienceSection = () => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center min-h-[120vh] py-20 z-10">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="experience"
          title="Experience"
          desc="My professional journey."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-6 relative">
          {/* gradient timeline */}
          <div
            className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px hidden md:block -translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, #7c3aed 20%, #ec4899 80%, transparent)" }}
          />

          {EXPERIENCE.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* timeline node */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-6 w-3 h-3 hidden md:block"
                style={{
                  background: "linear-gradient(135deg,#7c3aed,#ec4899)",
                  boxShadow: "0 0 10px rgba(124,58,237,0.9), 0 0 20px rgba(124,58,237,0.4)",
                  clipPath: "polygon(50% 0%,100% 50%,50% 100%,0% 50%)",
                }}
              />
              <ExperienceCard experience={exp} index={index} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCE)[0];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={cn(
          "neon-card clip-panel p-6 transition-all duration-300",
          hovered && "border-violet-500/60"
        )}
      >
        {/* neon left accent */}
        <div
          className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full transition-all duration-300"
          style={{
            background: hovered
              ? "linear-gradient(to bottom,#7c3aed,#ec4899)"
              : "rgba(124,58,237,0.3)",
            boxShadow: hovered ? "0 0 8px rgba(124,58,237,0.7)" : "none",
          }}
        />

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div className="space-y-1">
            <h3 className="text-lg font-bold tracking-tight font-mono gradient-text">
              {experience.title}
            </h3>
            <p className="text-sm font-mono text-violet-400/70">{experience.company}</p>
          </div>
          {/* date badge */}
          <div
            className="clip-panel-sm px-3 py-1 text-xs font-mono tracking-widest w-fit shrink-0"
            style={{
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.35)",
              color: "#c4b5fd",
            }}
          >
            {experience.startDate} — {experience.endDate}
          </div>
        </div>

        <ul className="space-y-2 mb-5">
          {experience.description.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899)" }} />
              {point}
            </li>
          ))}
        </ul>

        {/* skill badges */}
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skillName) => {
            const skill = SKILLS[skillName as SkillNames];
            return (
              <motion.div
                key={skillName}
                whileHover={{ scale: 1.08, y: -2 }}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded cursor-default"
                style={{
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.25)",
                  color: "#c4b5fd",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.7)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 10px rgba(124,58,237,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.25)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <img src={skill.icon} alt={skill.label} className="w-3.5 h-3.5 object-contain" />
                {skill.label}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
