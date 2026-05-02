import { cn } from "@/lib/utils"
import Link from "next/link"
import { BoxReveal } from "../reveal-animations"
import { ReactNode } from "react"

const SECTION_NUMBERS: Record<string, string> = {
  hero: "00",
  skills: "01",
  experience: "02",
  projects: "03",
  contact: "04",
}

export const SectionHeader = ({
  id,
  title,
  desc,
  className,
}: {
  id: string
  title: string | ReactNode
  desc?: string
  className?: string
}) => {
  const num = SECTION_NUMBERS[id] ?? "00"

  return (
    <div className={cn("top-[70px] sticky mb-96", className)}>
      <Link href={`#${id}`}>
        {/* number prefix */}
        <p className="text-center font-mono text-xs tracking-[0.4em] text-violet-500/60 mb-2 uppercase">
          [ {num} ]
        </p>

        <BoxReveal width="100%">
          <div className="relative inline-block w-full">
            {/* top-left corner bracket */}
            <span className="absolute -top-2 left-[calc(50%-60px)] w-4 h-4 border-t-2 border-l-2 border-violet-500/50 hidden md:block" />
            {/* top-right corner bracket */}
            <span className="absolute -top-2 right-[calc(50%-60px)] w-4 h-4 border-t-2 border-r-2 border-fuchsia-500/50 hidden md:block" />

            <h2 className={cn(
              "text-4xl text-center md:text-7xl font-bold tracking-tight",
              "gradient-text"
            )}>
              {title}
            </h2>
          </div>
        </BoxReveal>
      </Link>

      {/* neon divider */}
      <div className="mx-auto mt-4 w-24 h-px" style={{
        background: "linear-gradient(90deg, transparent, #7c3aed, #ec4899, transparent)"
      }} />

      {desc && (
        <p className="mx-auto mt-3 line-clamp-4 max-w-3xl font-mono text-sm text-center text-violet-400/60 tracking-wide">
          {desc}
        </p>
      )}
    </div>
  )
}
