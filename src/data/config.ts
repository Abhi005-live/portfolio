const config = {
  title: "Abhinandan Maharana | SDE & Web Developer",
  description: {
    long: "Explore the portfolio of Abhinandan Maharana, a Software Development Engineer and Web Developer specializing in building modern web applications, AI/ML projects, and interactive experiences. Discover my latest work and let's build something amazing together!",
    short:
      "Portfolio of Abhinandan Maharana — SDE and Web Developer building modern web apps and AI/ML projects.",
  },
  keywords: [
    "Abhinandan Maharana",
    "portfolio",
    "SDE",
    "software developer",
    "web developer",
    "full-stack developer",
    "React",
    "Next.js",
    "Python",
    "AI ML",
    "web development",
  ],
  author: "Abhinandan Maharana",
  email: "maharanaabhi220205@gmail.com",
  site: "https://abhinandan-maharana.vercel.app",

  // for github stars button
  githubUsername: "Abhi005-live",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com",
    linkedin: "https://www.linkedin.com/in/abhinandan-maharana",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    github: "https://github.com/Abhi005-live",
  },
};
export { config };
