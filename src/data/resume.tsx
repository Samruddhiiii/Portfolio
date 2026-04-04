import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Samruddhi Gulhane",
  initials: "SG",
  url: "https://samruddhi.dev",
  location: "Pune, Maharashtra",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Software Engineer. I love building things.",
  summary:
    "I'm Samruddhi Gulhane, a Fullstack Developer pursuing B.Tech in Computer Science at Government College of Engineering, Yavatmal. I love building **real, production-ready products** that solve actual problems. I've **interned at a startup**, competed in **national-level hackathons** as a finalist, and I'm currently deep into **TypeScript, Next.js, and AI integrations**. I thrive around **driven, execution-focused people** the ones who move fast and care deeply about what they are building.",
  avatarUrl: "/aron.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "sgulhane112020@gmail.com",
    tel: "+917020444109",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Samruddhiiii",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gulhane-samruddhi/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Samruddhi_108",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "sgulhane112020@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Sysgenpro",
      href: "https://sysgenpro.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/sysgenpro.webp",
      start: "Aug 2024",
      end: "Nov 2024",
      description:
        "Developed clean, efficient code across multiple modules reducing bugs by 15-20%, collaborated with senior developers on 3+ production releases, and improved issue resolution speed by 30% through systematic troubleshooting and industry best practices.",
    },
    {
      company: "JavaTpoint",
      badges: [],
      href: "https://www.tpointtech.com/",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/javatpoint.png",
      start: "Jan 2022",
      end: "Feb 2022",
      description:
        "Authored 15+ technical articles on CS fundamentals (OOP, CN, DSA, Web Dev) with 98% accuracy, collaborating with editors to meet industry standards while increasing writing efficiency 25% through structured planning and technical precision.",
    },
  ],
  education: [
    {
      school: "Government College of Engineering, Yavatmal",
      href: "https://gcoey.ac.in/",
      degree: "Bachelor's of Technology in Computer Science & Engineering (B.Tech)",
      logoUrl: "/gcoey.png",
      start: "2026",
      end: "2023",
    },
    {
      school: "Government Polytechnic,Yavatmal",
      href: "https://gpyavatmal.ac.in/gpy/",
      degree: "Diploma in Computer Engineering",
      logoUrl: "/gpyl.png",
      start: "2023",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Welth- AI Powered Finance Manager",
      href: "https://finance-omy87nomt-samruddhiiiis-projects.vercel.app/",
      active: true,
      description:
        "Built a real-world AI finance platform  <b>  not just a CRUD app  </b>  with automated expense tracking, receipt intelligence, and background financial workflows. Designed to mimic production SaaS systems with authentication, cron jobs, and AI-powered insights.",
      technologies: [
        "Next.js 15 (App Router + Server Actions)",
        "Prisma + PostgreSQL",
        "Clerk (Authentication)",
        "Gemini (AI - @google/genai, gemini-2.5-flash)",
        "Inngest (Background Jobs & Cron)",
        "Resend (Email Delivery)",
        "Arcjet (Security & Rate Limiting)",
        "Tailwind CSS + shadcn/ui"
      ],
      links: [
        {
          type: "Website",
          href: "https://finance-omy87nomt-samruddhiiiis-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Samruddhiiii/Finance-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/welth.mp4",
    },
    {
      title: "Interviewer AI - Mock Interview Platform",
      href: "https://gcoey-interview-prep.vercel.app/",
      active: true,
      description:
        "An intelligent mock interview platform powered by real-time AI voice agents. Practice interviews, get instant feedback, and level up your interview game — all in one place.",
      technologies: [
        "Next.js 15 — Frontend Framework",
        "Tailwind CSS — Styling",
        "Firebase — Auth & Database",
        "Vapi — AI Voice Agent",
        "Google Gemini — Interview Ques Generation",
      ],
      links: [
        {
          type: "Website",
          href: "https://gcoey-interview-prep.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Samruddhiiii/InterviewerAi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/interview1.mp4",
    },
    {
      title: "Spylt",
      href: "https://spylt-wine.vercel.app",
      active: true,
      description:
        "A high-performance, visually immersive web experience inspired by the award-winning SPYLT website. Originally built in JavaScript, this project was recreated using TypeScript to strengthen type safety and deepen understanding of scalable frontend architecture.",
      technologies: [
        "Next.js — Frontend Framework",
        "TypeScript — Type Safety & Structure",
        "GSAP — Animations & Transitions",
        "Tailwind CSS — Styling",
        "Bun — Package Manager & Runtime",
        "Biome — Linting & Formatting",
      ],
      links: [
        {
          type: "Website",
          href: "https://spylt-wine.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Samruddhiiii/Spylt",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/spylt1.mp4",
    },
    {
      title: "Layers-Saas landing page",
      href: "https://github.com/Samruddhiiii/Saas-Landing-Page",
      active: true,
      description:
        "Developed a production-grade SaaS landing page with Next.js and TypeScript, emphasizing responsive design, smooth animations, and clean UI architecture. Leveraged Framer Motion to create engaging user interactions while maintaining performance and scalability.",
      technologies: [
        "Next.js",
        "Typescript",
        "React",
        "TailwindCSS",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://saas-landing-page-nine-umber.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Samruddhiiii/Saas-Landing-Page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "layers.mp4",
    },
  ],
} as const;
