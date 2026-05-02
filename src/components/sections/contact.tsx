"use client";
import React from "react";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto relative overflow-hidden">
      {/* ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[260px] bg-violet-600 glow-orb pointer-events-none" />

      <SectionHeader
        id="contact"
        className="relative mb-14"
        title={<>LET&apos;S WORK<br />TOGETHER</>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="neon-card clip-panel p-8 mt-10 md:mt-20 shimmer-border"
        >
          {/* panel header bar */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full" style={{ background: "#7c3aed", boxShadow: "0 0 6px #7c3aed" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "#ec4899", boxShadow: "0 0 6px #ec4899" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "#a78bfa", boxShadow: "0 0 6px #a78bfa" }} />
            <span className="ml-2 font-mono text-xs tracking-widest text-violet-400/50 uppercase">
              contact.form
            </span>
          </div>

          <h3 className="text-2xl font-bold font-mono gradient-text mb-1">Send a Message</h3>
          <p className="text-sm font-mono text-violet-400/60 mb-6">
            Or reach me at{" "}
            <a
              href={`mailto:${config.email}`}
              target="_blank"
              className="text-violet-400 hover:text-violet-200 transition-colors underline underline-offset-2"
            >
              {config.email.replace(/@/g, "(at)")}
            </a>
          </p>

          <ContactForm />
        </motion.div>

        {/* right side decorative panel */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hidden md:flex flex-col justify-center gap-6 mt-20"
        >
          {[
            { label: "Response Time", value: "< 24h" },
            { label: "Availability", value: "Open to Work" },
            { label: "Location", value: "India" },
          ].map((item) => (
            <div
              key={item.label}
              className="neon-card clip-panel-sm px-6 py-4 flex items-center justify-between group cursor-default"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-violet-400/60">
                {item.label}
              </span>
              <span className="font-mono text-sm font-bold gradient-text">
                {item.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
