"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { File } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";

/* ── animated counter ── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(to / 40);
    const t = setInterval(() => {
      start += step;
      if (start >= to) { setVal(to); clearInterval(t); }
      else setVal(start);
    }, 35);
    return () => clearInterval(t);
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const STATS = [
  { label: "Projects", value: 10, suffix: "+" },
  { label: "Technologies", value: 25, suffix: "+" },
  { label: "Commits", value: 500, suffix: "+" },
];

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen overflow-hidden")}>
      {/* dot-grid bg */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-violet-600 glow-orb pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[360px] h-[360px] bg-fuchsia-600 glow-orb pointer-events-none" style={{ animationDelay: "2.5s" }} />

      <div className="grid md:grid-cols-2 h-full">
        <div className={cn(
          "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
          "col-span-1 flex flex-col justify-start md:justify-center items-center md:items-start",
          "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
        )}>
          {!isLoading && (
            <div className="flex flex-col gap-6">

              {/* name block */}
              <div className="corner-brackets p-1">
                <BlurIn delay={0.7}>
                  <p className="font-mono text-xs tracking-[0.3em] uppercase text-violet-400 mb-1">
                    // player one
                  </p>
                </BlurIn>
                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1 className={cn(
                        "-ml-[4px] leading-none font-bold text-left",
                        "text-7xl md:text-7xl lg:text-8xl xl:text-9xl",
                        "cursor-default font-display gradient-text"
                      )}>
                        {config.author.split(" ")[0]}
                        <br />
                        {config.author.split(" ")[1]}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="dark:bg-white dark:text-black font-mono text-xs">
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                <BlurIn delay={1.2}>
                  <p className="font-mono text-sm tracking-widest text-fuchsia-400 mt-2 uppercase">
                    SDE &amp; Web Developer
                  </p>
                </BlurIn>
              </div>

              {/* stat row */}
              <BlurIn delay={1.5}>
                <div className="flex gap-4 mt-2">
                  {STATS.map((s) => (
                    <div
                      key={s.label}
                      className="neon-card clip-panel-sm px-4 py-2 text-center min-w-[72px]"
                    >
                      <div className="text-xl font-bold font-mono gradient-text">
                        <Counter to={s.value} suffix={s.suffix} />
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-violet-400/70 mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </BlurIn>

              {/* buttons */}
              <div className="flex flex-col gap-3 w-fit mt-2">
                <Link
                  href="https://drive.google.com/file/d/13dktYmVFF7LTbs8abZEuopE4zIR84NNG/view?usp=drive_link"
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%">
                    <button className="btn-neon-primary flex items-center gap-2 px-6 py-2.5 text-sm font-semibold w-full font-mono tracking-wider">
                      <File size={16} />
                      RESUME
                    </button>
                  </BoxReveal>
                </Link>

                <div className="flex gap-2">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href="#contact">
                        <button className="btn-neon px-5 py-2.5 text-sm font-mono tracking-wider">
                          HIRE ME
                        </button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="font-mono text-xs">
                      pls 🥹 🙏
                    </TooltipContent>
                  </Tooltip>

                  {/* social icons */}
                  {[
                    { href: config.social.twitter, icon: <SiX size={15} /> },
                    { href: config.social.github, icon: <SiGithub size={15} /> },
                    { href: config.social.linkedin, icon: <SiLinkedin size={15} /> },
                  ].map(({ href, icon }) => (
                    <Link key={href} href={href} target="_blank">
                      <button className="btn-neon w-10 h-10 flex items-center justify-center">
                        {icon}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>
        <div className="col-span-1" />
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
