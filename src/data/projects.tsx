import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiReactjsFill } from "react-icons/ri";
import { SiJavascript, SiPython } from "react-icons/si";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  react: { title: "React.js", bg: "black", fg: "white", icon: <RiReactjsFill /> },
};

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => (
  <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
    <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={live}>
      <Button variant={"default"} size={"sm"}>
        Visit Website
        <ArrowUpRight className="ml-3 w-5 h-5" />
      </Button>
    </Link>
    {repo && (
      <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={repo}>
        <Button variant={"default"} size={"sm"}>
          Github
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    )}
  </div>
);

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "ppcv",
    category: "AI / ML",
    title: "Personality Prediction via CV",
    src: "https://opengraph.githubassets.com/1/Abhi005-live/ppcv",
    screenshots: ["https://opengraph.githubassets.com/1/Abhi005-live/ppcv"],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.python],
    },
    live: "https://github.com/Abhi005-live/ppcv",
    github: "https://github.com/Abhi005-live/ppcv",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            An AI/ML project that predicts personality traits by analyzing the
            content of a CV/resume. Built with Python, it uses natural language
            processing techniques to extract meaningful patterns from text and
            map them to personality dimensions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">How it works</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Parses and cleans CV text data.</li>
            <li className="font-mono">Extracts features using NLP techniques.</li>
            <li className="font-mono">Predicts personality traits using a trained ML model.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "quantum_club",
    category: "Web",
    title: "Quantum Club Website",
    src: "https://opengraph.githubassets.com/1/Abhi005-live/quantum_club",
    screenshots: ["https://opengraph.githubassets.com/1/Abhi005-live/quantum_club"],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [],
    },
    live: "https://abhi005-live.github.io/quantum_club",
    github: "https://github.com/Abhi005-live/quantum_club",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A clean and responsive website built for the Quantum Club. Designed
            and developed using HTML, CSS, and JavaScript, it serves as the
            official online presence for the club with information about events,
            members, and activities.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Fully responsive layout for all screen sizes.</li>
            <li className="font-mono">Clean UI showcasing club events and team.</li>
            <li className="font-mono">Deployed live via GitHub Pages.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "aiml_casestudy",
    category: "AI / ML",
    title: "AI/ML Case Study",
    src: "https://opengraph.githubassets.com/1/Abhi005-live/aiml_casestudy",
    screenshots: ["https://opengraph.githubassets.com/1/Abhi005-live/aiml_casestudy"],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.python],
    },
    live: "https://github.com/Abhi005-live/aiml_casestudy",
    github: "https://github.com/Abhi005-live/aiml_casestudy",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A comprehensive AI/ML case study project built with Python. This
            repository has been forked by 2 others, reflecting its usefulness
            as a learning resource. It covers real-world data analysis,
            model building, and evaluation workflows.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">End-to-end ML pipeline from data to predictions.</li>
            <li className="font-mono">Covers data preprocessing, feature engineering, and model evaluation.</li>
            <li className="font-mono">Forked by peers — used as a reference for learning.</li>
          </ul>
        </div>
      );
    },
  },
];

export default projects;
