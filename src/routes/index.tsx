import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Code2,
  Database,
  FileDown,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  MapPin,
  Network,
  Sparkles,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Reveal } from "@/components/portfolio/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saivardhan Mailaram | AI & ML Engineer in Progress" },
      {
        name: "description",
        content:
          "Portfolio of Saivardhan Mailaram — CSE (AI & ML) undergraduate working with Python, Java, SQL, web development and machine learning.",
      },
      { property: "og:title", content: "Saivardhan Mailaram | AI & ML Engineer in Progress" },
      {
        property: "og:description",
        content:
          "Projects in machine learning and web development, education, internship experience and certifications.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const GITHUB = "https://github.com/saivardhan-07";
const LINKEDIN = "https://www.linkedin.com/in/saivardhan-mailaram";

const skillGroups = [
  { icon: Code2, title: "Programming", items: ["Python", "Java", "C"] },
  { icon: Sparkles, title: "Web", items: ["HTML", "CSS", "JavaScript"] },
  { icon: Database, title: "Databases", items: ["SQL", "MySQL"] },
  {
    icon: BookOpen,
    title: "Core CS",
    items: ["OOP", "DBMS", "Data Structures & Algorithms"],
  },
  { icon: Network, title: "Networking", items: ["Computer Networks"] },
  {
    icon: Sparkles,
    title: "Machine Learning",
    items: ["Machine Learning", "Regression", "Decision Trees", "Data Analysis"],
  },
  { icon: Wrench, title: "Tools", items: ["GitHub", "VS Code"] },
  { icon: Users, title: "Soft Skills", items: ["Communication", "Teamwork", "Problem-solving", "Time management"] },
];

const education = [
  {
    school: "Malla Reddy College of Engineering",
    detail: "B.Tech, Computer Science & Engineering (AI & ML)",
    period: "2023 – 2027",
    score: "CGPA 7.02 / 10",
  },
  {
    school: "Sree Sandeepani Junior College, Karimnagar",
    detail: "Intermediate, MPC",
    period: "2021 – 2023",
    score: "90.2%",
  },
  {
    school: "Geetha High School, Chegunta",
    detail: "SSC",
    period: "2021",
    score: "100%",
  },
];

const projects = [
  {
    title: "Climate Change Impact on Agricultural Land Suitability",
    tech: ["Python", "Machine Learning", "Regression", "Decision Trees"],
    points: [
      "Developed a machine learning approach to evaluate climate and agricultural factors affecting land suitability.",
      "Applied regression and decision-tree methods to identify important factors and generate interpretable predictions.",
      "Analyzed model results to support practical agricultural decision-making.",
    ],
  },
  {
    title: "Online Apparel Shopping",
    tech: ["HTML", "CSS", "JavaScript"],
    points: [
      "Developed a responsive web application for browsing apparel products and supporting shopping functionality.",
      "Implemented structured product presentation, intuitive navigation, and user-friendly interactions.",
      "Focused on clean layout, usability, and responsive user experience.",
    ],
  },
];

const certifications = [
  { issuer: "Coursera", items: ["Artificial Intelligence", "Java Full Stack Development", "Front-End Development", "Java Object-Oriented Programming"] },
  { issuer: "IBM", items: ["AI and Its Fundamentals", "Project Management", "SkillsBuild — Artificial Intelligence"] },
  { issuer: "Infosys", items: ["Time Management", "Springboard — Python"] },
  { issuer: "Intel", items: ["AI for Everyone"] },
  { issuer: "Cisco Networking Academy", items: ["Cybersecurity"] },
  { issuer: "Cambridge English Empower", items: ["B2 Level Course (Completed)"] },
];

const activities = [
  "Participated in a Power BI workshop.",
  "Attended GENOS-25, a national-level technical symposium, and participated in the JNTUH Trivia Quiz.",
  "Participated in the Disruptors Den 36-hour Hackathon.",
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      <div className="rule-line mt-5 h-px w-28 opacity-70" />
    </div>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}

function Portfolio() {
  return (
    <div id="top" className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Nav />

      <main id="main">
        {/* Hero */}
        <section className="hero-surface relative overflow-hidden">
          <div className="mx-auto flex max-w-6xl flex-col justify-center px-5 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-44">
            <Reveal>
              <span className="chip">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                Open to entry-level software development roles
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">
                Saivardhan <span className="text-gradient">Mailaram</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 font-display text-lg text-primary sm:text-2xl">
                AI &amp; ML Engineer in Progress
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Computer Science &amp; Engineering (AI &amp; ML) undergraduate with a strong foundation in
                Python, Java, SQL, web development, object-oriented programming, databases, data structures
                and machine learning — currently turning coursework into real, working projects.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-16px_var(--teal-glow)]"
                >
                  View Projects
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:bg-secondary"
                >
                  Contact Me
                </a>
                <a
                  href="/Saivardhan-Mailaram-Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <FileDown className="size-4" aria-hidden="true" /> Download Resume
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-primary" aria-hidden="true" /> India
                </span>
                <a href={GITHUB} target="_blank" rel="noreferrer" className="nav-link inline-flex items-center gap-2">
                  <Github className="size-4" aria-hidden="true" /> github.com/saivardhan-07
                </a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer" className="nav-link inline-flex items-center gap-2">
                  <Linkedin className="size-4" aria-hidden="true" /> linkedin.com/in/saivardhan-mailaram
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <Section id="about">
          <Reveal>
            <SectionHeading eyebrow="01 — About" title="A student engineer, building steadily" />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <div className="card-surface rounded-2xl p-7 sm:p-9">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  I'm a motivated Computer Science and Engineering (AI &amp; ML) undergraduate seeking an
                  entry-level software development role. My focus is on writing clean, understandable code and
                  applying machine learning to problems that have a real-world reading — like how climate
                  factors affect agricultural land.
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Alongside coursework I've completed a Python for Data Science internship, built a responsive
                  web application from scratch, and earned certifications across AI, full-stack development
                  and cybersecurity.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card-surface flex h-full flex-col justify-center gap-5 rounded-2xl p-7 sm:p-9">
                {[
                  { icon: GraduationCap, label: "B.Tech CSE (AI & ML)", sub: "2023 – 2027 · CGPA 7.02/10" },
                  { icon: Briefcase, label: "Python for Data Science", sub: "Internship" },
                  { icon: Languages, label: "English, Telugu", sub: "Languages" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-display text-sm font-semibold">{label}</span>
                      <span className="block text-sm text-muted-foreground">{sub}</span>
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" className="border-t border-border">
          <Reveal>
            <SectionHeading eyebrow="02 — Skills" title="Technical toolkit" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 60}>
                <div className="card-surface h-full rounded-2xl p-6">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                    <group.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" className="border-t border-border">
          <Reveal>
            <SectionHeading eyebrow="03 — Education" title="Academic background" />
          </Reveal>
          <ol className="relative space-y-5 border-l border-border pl-6 sm:pl-9">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 90}>
                <li className="relative">
                  <span
                    className="absolute -left-[1.9rem] top-7 size-2.5 rounded-full bg-primary sm:-left-[2.65rem]"
                    aria-hidden="true"
                  />
                  <div className="card-surface rounded-2xl p-6 sm:p-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-lg font-semibold">{e.school}</h3>
                      <span className="text-sm text-muted-foreground">{e.period}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{e.detail}</p>
                    <p className="mt-3 inline-flex rounded-full bg-secondary px-3 py-1 text-sm font-medium text-primary">
                      {e.score}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* Internship */}
        <Section id="experience" className="border-t border-border">
          <Reveal>
            <SectionHeading eyebrow="04 — Internship" title="Python for Data Science" />
          </Reveal>
          <Reveal>
            <div className="card-surface rounded-2xl p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Briefcase className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-semibold">Python for Data Science Internship</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Applied Python programming concepts to data-oriented tasks and analysis.",
                  "Worked with data handling and analysis techniques using Python.",
                  "Practiced data preprocessing, exploratory analysis, and problem-solving approaches.",
                  "Strengthened practical understanding of Python and data science concepts.",
                ].map((p) => (
                  <li key={p} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Section>

        {/* Projects */}
        <Section id="projects" className="border-t border-border">
          <Reveal>
            <SectionHeading eyebrow="05 — Projects" title="Things I've built" />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 110}>
                <article className="card-surface group flex h-full flex-col rounded-2xl p-7 sm:p-8">
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold leading-snug transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-3 pt-1">
                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
                    >
                      <Github className="size-4" aria-hidden="true" /> GitHub
                    </a>
                    <span
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground"
                      aria-disabled="true"
                      title="Live demo link not available yet"
                    >
                      Live demo — coming soon
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section id="certifications" className="border-t border-border">
          <Reveal>
            <SectionHeading eyebrow="06 — Certifications" title="Courses & credentials" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <Reveal key={c.issuer} delay={i * 60}>
                <div className="card-surface h-full rounded-2xl p-6">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-primary">
                    {c.issuer}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {c.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/70" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Achievements & activities */}
        <Section id="achievements" className="border-t border-border">
          <Reveal>
            <SectionHeading eyebrow="07 — Beyond the code" title="Workshops & achievements" />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="card-surface h-full rounded-2xl p-7">
                <h3 className="flex items-center gap-3 text-lg font-semibold">
                  <Award className="size-5 text-primary" aria-hidden="true" /> Workshops &amp; technical activities
                </h3>
                <ul className="mt-5 space-y-3">
                  {activities.map((a) => (
                    <li key={a} className="flex gap-3 text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      <span className="leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={110}>
              <div className="card-surface h-full rounded-2xl p-7">
                <h3 className="flex items-center gap-3 text-lg font-semibold">
                  <Trophy className="size-5 text-primary" aria-hidden="true" /> Achievements
                </h3>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  Secured second prize in an inter-college volleyball competition.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" className="border-t border-border">
          <Reveal>
            <div className="card-surface hero-surface rounded-3xl px-7 py-14 text-center sm:px-12">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">08 — Contact</p>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
                Let's talk about entry-level opportunities
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                The fastest way to reach me is through LinkedIn or GitHub — I'm happy to share more about my
                projects and coursework.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Linkedin className="size-4" aria-hidden="true" /> Connect on LinkedIn
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:bg-secondary"
                >
                  <Github className="size-4" aria-hidden="true" /> View GitHub
                </a>
                <a
                  href="/Saivardhan-Mailaram-Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:bg-secondary"
                >
                  <FileDown className="size-4" aria-hidden="true" /> Download Resume
                </a>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
          <div className="text-center sm:text-left">
            <p className="font-display font-semibold">Saivardhan Mailaram</p>
            <p className="text-sm text-muted-foreground">AI &amp; ML Engineer in Progress · India</p>
          </div>
          <ul className="flex items-center gap-3">
            {[
              { href: GITHUB, label: "GitHub", icon: Github },
              { href: LINKEDIN, label: "LinkedIn", icon: Linkedin },
            ].map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Saivardhan Mailaram
          </p>
        </div>
      </footer>
    </div>
  );
}
