import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, MapPin, ArrowUpRight, FileText } from "lucide-react";
import edtech from "@/assets/edtech.png";
import profilePic from "@/assets/Vikash Kr.jpg";
import resumeAsset from "@/assets/vikash-kumar-singh-resume.pdf.asset.json";
import cms from "@/assets/Screenshot 2026-06-13 180004.png";
import resumae from "@/assets/vikash_kumar_singh_resume.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vikash Kumar Singh — MERN Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Vikash Kumar Singh, a MERN stack developer with three years of experience building scalable web applications.",
      },
      { property: "og:title", content: "Vikash Kumar Singh — MERN Stack Developer" },
      {
        property: "og:description",
        content:
          "Full-stack developer with three years of experience building production-ready MERN applications, APIs, and cloud deployments.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

const experience = [
  {
    period: "AUG 2023 — PRESENT",
    company: "Civil Guruji",
    role: "Software Engineer · Full Stack",
  },
];

const projects = [
  {
    title: "EdTech Platform Systems",
    subtitle: "Scalable APIs, dashboards, and automated certificate workflows",
    image: edtech,
    index: 1,
  },
  {
    title: "Content Management System",
    subtitle: "MERN platform for adding courses, packages,offline classes resources etc",
    image: cms,
    index: 2,
  },
];

const socials = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/vikash-kumar-singh-65567824a" },
  { label: "GITHUB", href: "https://github.com/vikashkumar3210" },
  { label: "EMAIL", href: "mailto:vikashkrrajput2000@gmail.com" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:h-20 sm:px-6">
          <a
            href="#"
            className="font-display text-lg font-bold uppercase tracking-tight sm:text-xl"
          >
            Vikash Kr Singh.
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium tracking-wide md:flex lg:gap-8">
            {navLinks.slice(0, 3).map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-accent">
                {l.label}
              </a>
            ))}
            <a
              href={resumeAsset.url}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              RESUME
            </a>
            <a
              href="#contact"
              className="rounded-full bg-foreground px-5 py-2 text-background transition-all hover:bg-accent hover:text-accent-foreground"
            >
              GET IN TOUCH
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border/50 py-4 text-sm font-medium tracking-wide last:border-0 hover:text-accent"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={resumeAsset.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="py-4 text-sm font-medium tracking-wide hover:text-accent"
              >
                RESUME
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="mx-auto max-w-6xl px-4 pt-24 sm:px-6 sm:pt-32">
        {/* Hero */}
        <section className="py-16 sm:py-20 md:py-32">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
            [ Full Stack Developer · 3 Years Experience ]
          </p>
          <h1 className="mb-6 font-display text-4xl font-bold leading-[0.95] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            BUILDING <span className="text-accent">SCALABLE</span>
            <br />
            MERN APPS.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            I'm Vikash Kumar Singh, a full-stack developer building production-ready products with
            MongoDB, Express.js, React.js, and Node.js.
          </p>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 border-t border-border py-16 sm:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="grid aspect-[4/5] content-between rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Profile / 01
              </p>
              <div>
                <p className="font-display text-7xl font-bold tracking-tighter text-accent sm:text-8xl">
                  3+
                </p>
                <p className="mt-2 font-display text-xl font-semibold uppercase">
                  Years building for the web
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
                <span>200+ DSA problems</span>
                <span>B.Tech · 2023</span>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                About
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Based in Jharkhand, India, I have three years of development experience creating
                high-traffic web platforms with React, Next.js, Node.js, Express, and TypeScript. I
                build responsive interfaces, reliable REST APIs, and efficient database systems.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                I also work with Docker and AWS, and explore AI applications using RAG, LangChain,
                LangGraph, and agentic workflows.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-accent">
                    Stack
                  </p>
                  <p className="text-sm">
                    MongoDB, Express, React, Node.js, postgreSQL, AWS- {`(EC2, EBS, ROUTE53)`}{" "}
                    Redis, Docker
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-accent">
                    Focus
                  </p>
                  <p className="text-sm">Full Stack, APIs, Agentic AI, AI-Chatbot</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 border-t border-border py-16 sm:py-24">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:mb-16 md:flex-row md:items-start">
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
              Experience
            </h2>
            <p className="max-w-sm text-muted-foreground">
              Building and scaling a high-traffic EdTech platform used by thousands of students.
            </p>
          </div>

          <div className="space-y-px bg-border">
            {experience.map((item) => (
              <div
                key={item.company}
                className="grid grid-cols-1 gap-2 bg-background px-4 py-8 transition-all hover:bg-surface sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:py-10"
              >
                <div className="min-w-0">
                  <span className="font-mono text-xs text-accent">{item.period}</span>
                  <h3 className="mt-2 truncate font-display text-xl font-medium sm:text-2xl">
                    {item.company}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground sm:text-base">{item.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 text-sm leading-relaxed text-muted-foreground md:grid-cols-3">
            <p>
              Designed REST APIs for authentication, courses, attendance, certificates, and
              engagement features.
            </p>
            <p>
              Improved API response times by 30% through indexing, aggregation pipelines, and
              optimized queries.
            </p>
            <p>
              Managed production delivery with Docker, Ubuntu, AWS EC2, EBS, and CI/CD workflows.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 border-t border-border py-16 sm:py-24">
          <h2 className="mb-12 font-display text-2xl font-bold uppercase tracking-tight sm:mb-16 sm:text-3xl">
            Selected Work
          </h2>
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            {projects.map((project) => (
              <div key={project.title} className="group cursor-pointer">
                <div className="mb-6 overflow-hidden rounded-xl bg-surface outline outline-1 -outline-offset-1 outline-border transition-all group-hover:outline-accent/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={1216}
                    height={800}
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-lg font-bold uppercase sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                  <span className="font-mono text-xs text-accent opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                    [{project.index}]
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 border-t border-border py-16 sm:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                [ Contact ]
              </p>
              <h2 className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-tighter sm:text-5xl md:text-6xl">
                Let's ship
                <br />
                something
                <br />
                <span className="text-accent">together.</span>
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                Open to full-stack and MERN development opportunities. Send over a brief and I'll
                get back within a day.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:vikashkrrajput2000@gmail.com"
                className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-all hover:border-accent/50 hover:bg-surface/70 sm:p-6"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-background">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                  <p className="truncate text-sm font-medium sm:text-base">
                    vikashkrrajput2000@gmail.com
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>

              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-2xl border border-border bg-surface p-5 sm:p-6">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-background">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Based In
                  </p>
                  <p className="text-sm font-medium sm:text-base">Bermo, Jharkhand, India</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="group flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3 font-mono text-xs hover:border-accent/50 hover:text-accent"
                  >
                    <span>{s.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>

              <a
                href={resumae}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border bg-foreground px-5 py-4 text-sm font-semibold text-background transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <span className="flex items-center gap-3">
                  <FileText className="h-4 w-4" />
                  VIEW RESUME
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col items-start justify-between gap-4 border-t border-border py-10 sm:flex-row sm:items-center sm:py-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            © 2026 Vikash Kumar Singh. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">Designed & built with care.</p>
        </footer>
      </main>
    </div>
  );
}
