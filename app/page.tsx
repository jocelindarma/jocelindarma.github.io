"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, Instagram, MapPin, ExternalLink, ChevronDown, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lanyard to avoid SSR issues with Three.js
const Lanyard = dynamic(() => import("@/components/lanyard/Lanyard"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  ),
});

// Work experience data
const experiences = [
  {
    company: "Nawatech",
    role: "Full Stack Developer",
    period: "Nov 2023 - Nov 2024, Feb 2025 - Present",
    logo: "/nawatech_logo.jpeg",
    description: [
      "Developed GPT-powered omnichannel chatbots using Azure Bot Framework, Qiscus, or custom-built solutions with JavaScript/TypeScript frontends and Python backends",
      "Created a virtual assistant to report palm oil harvesting activities, increasing reporting efficiency by up to 95% and integrated with UIPath for natural language-based navigation within Power BI dashboards",
      "Collaborated with diverse clients to understand their unique project requirements, delivering customized solutions that align with their business objectives",
    ],
  },
  {
    company: "Traveloka",
    role: "Software Engineer II – Content Marketing Platform",
    period: "Nov 2024 - Feb 2025",
    logo: "/traveloka_logo.png",
    description: [
      "Developed and deployed an internal Digital Asset Management (DAM) tool and backend system using Java and Spring Boot, significantly enhancing organizational efficiency in searching and managing digital assets",
      "Integrated cross-functional team assets, collaborating with Talent Acquisition (TA) and Local teams to centralize resources",
      "Experimented with Google Vertex AI to introduce an automated keyword tagging feature, streamlining the metadata generation process during asset uploads and improving discoverability",
      "Implemented unit testing using TestNG and Mockito, achieving 80%+ test coverage, ensuring system reliability and reducing bugs",
    ],
  },
  {
    company: "Starbucks Corporation",
    role: "Application Developer I – Service Observability Engineering",
    period: "Jul 2021 - Nov 2022",
    logo: "/starbucks_logo.png",
    description: [
      "Developed an automated escalation workflow using a Slack Bot (Slack Bolt SDK), increasing Tier 1 → Tier 2 handoff speed and improving service desk visibility, productivity, and response times",
      "Built internal operational dashboards to surface real-time health signals, enabling faster incident detection and reducing outage resolution time through improved cross-team observability",
      "Automated build and deployment pipelines using Drone CI and Ansible, reducing manual deployment effort and standardizing release processes across services",
    ],
  },
  {
    company: "Microsoft",
    role: "Software Data Operations Engineer — Power BI Team",
    period: "Feb 2021 - Jul 2021",
    logo: "/microsoft_logo.png",
    description: [
      "Contract position through MAQ Software",
      "Engineered new feature modules and Custom Visuals for Power BI Desktop using TypeScript, D3.js, and the Power BI Visuals SDK, improving extensibility and rendering performance",
      "Implemented comprehensive unit tests using Karma and Jasmine, achieving 100% passing test cases and maintaining 90%+ code coverage",
      "Integrated Power BI with diverse data sources, performing data modeling, DAX optimization, and dataset performance tuning",
      "Built highly interactive dashboards and analytical reports, implementing drill-through, cross-filtering, and advanced measures to support enterprise-level decision intelligence",
    ],
  },
  {
    company: "Starbucks Corporation",
    role: "Application Developer I Intern — Operations Command Center",
    period: "Jun 2020 - Aug 2020",
    logo: "/starbucks_logo.png",
    description: [
      "Expanded capabilities for a critical internal React-based web application, which shows the health of all Starbucks Technology products and services. The site was intended to help the Major Incident Response (MIR) team quickly gather service health and owner information to improve the mean time to respond (MTTR) for outages.",
    ],
  },
  {
    company: "Vrbo",
    role: "Student Software Developer — Senior Capstone Project",
    period: "Sep 2019 - Jun 2020",
    logo: "/vrbo_logo.png",
    description: [
      "Developed an Android mobile application in Java and Kotlin that allows speech-to-speech translation between 60 different languages; this will serve as a proof-of-concept for future feature integration with the Vrbo app. Project involves speech-to-text and text-to-speech conversion, natural language processing (NLP), cloud integration and building the mobile application itself.",
    ],
  },
  {
    company: "AiChat",
    role: "Software Developer Intern — Front-End Development",
    period: "Jul 2019 - Sep 2019",
    logo: "/aichat_logo.jpg",
    description: [
      "Designed and implemented features for their web content management system (CMS) using ReactJS",
    ],
  },
  {
    company: "PERMIAS Nasional",
    role: "Junior Web Developer",
    period: "Aug 2017 - Jun 2019",
    logo: "/permias_logo.jpeg",
    link: "https://permiasnasional.com/",
    description: [
      "Handled the overall development and maintenance of the organization's website",
    ],
  },
];

// Education data
const education = [
  {
    school: "Seattle University",
    degree: "BS Computer Science",
    honors: "Cum Laude",
    period: "Sep 2018 - Dec 2020",
    location: "Seattle, Washington",
    logo: "/seattleu_logo.png",
  },
  {
    school: "North Seattle College",
    degree: "AS Computer Science",
    period: "Jan 2017 - Aug 2018",
    location: "Seattle, Washington",
    logo: "/nsc_logo.svg",
  },
];

// Skills data
const skills = [
  { name: "Python", category: "language" },
  { name: "Java", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "HTML/CSS", category: "language" },
  { name: "React", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "NestJS", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Docker", category: "devops" },
  { name: "Git", category: "devops" },
  { name: "Azure", category: "cloud" },
  { name: "AWS", category: "cloud" },
  { name: "Agile Scrum", category: "methodology" },
];

// Contact links
const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "jocelindarma13@gmail.com",
    href: "mailto:jocelindarma13@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "jocelindarma",
    href: "https://linkedin.com/in/jocelindarma",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "jocelindarma",
    href: "https://github.com/jocelindarma",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@jocelindarma",
    href: "https://instagram.com/jocelindarma",
  },
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Experience Card Component
function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 cursor-pointer
                   hover:bg-card hover:border-border hover:shadow-soft-lg transition-all duration-300"
      >
        {/* Company header */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl overflow-hidden bg-background flex-shrink-0 shadow-soft">
            <Image
              src={experience.logo}
              alt={experience.company}
              width={56}
              height={56}
              className="object-cover"
              style={{ width: '100%', height: '100%' }}
              unoptimized
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl text-foreground group-hover:text-accent transition-colors">
                  {experience.company}
                </h3>
                <p className="text-muted-foreground text-sm mt-0.5">{experience.role}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs text-muted-foreground whitespace-nowrap">{experience.period}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Expandable content */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <ul className="mt-5 space-y-3 pl-[4.5rem]">
            {experience.description.map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
            {experience.link && (
              <li className="pt-2">
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {experience.link}
                </a>
              </li>
            )}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background noise-bg">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Text content */}
            <div className="lg:col-span-3 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Available for opportunities
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
              >
                Hi, I&apos;m{" "}
                <span className="gradient-text">Jocelin Darma</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl"
              >
                Results-oriented{" "}
                <span className="text-foreground font-medium">Full Stack Engineer</span>{" "}
                with over 5 years of experience building robust and scalable applications.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted-foreground leading-relaxed max-w-2xl"
              >
                Proficient in Python, Java, JavaScript, and a range of other technologies.
                Proven ability to deliver high-quality code and collaborate effectively within
                cross-functional teams. Seeking to leverage my skills to contribute to innovative
                solutions in the tech industry.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a
                  href="mailto:jocelindarma13@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full
                           font-medium hover:bg-accent transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
                <a
                  href="https://linkedin.com/in/jocelindarma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full
                           font-medium hover:bg-secondary transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/jocelindarma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full
                           font-medium hover:bg-secondary transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </motion.div>
            </div>

            {/* 3D Lanyard Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-transparent rounded-3xl blur-2xl" />
                <Lanyard position={[0, 0, 20]} fov={26} />
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Experience Section */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-accent text-sm font-medium uppercase tracking-widest">Career</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-2 line-accent">Work Experience</h2>
          </motion.div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <ExperienceCard key={`${exp.company}-${index}`} experience={exp} index={index} />
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Education Section */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-accent text-sm font-medium uppercase tracking-widest">Background</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-2 line-accent">Education</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6
                         hover:bg-card hover:border-border hover:shadow-soft-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-background flex-shrink-0 shadow-soft flex items-center justify-center p-2">
                    <Image
                      src={edu.logo}
                      alt={edu.school}
                      width={48}
                      height={48}
                      className="object-contain"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-foreground group-hover:text-accent transition-colors">
                      {edu.school}
                    </h3>
                    <p className="text-foreground/90 mt-1">
                      {edu.degree}
                      {edu.honors && (
                        <span className="ml-2 px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full">
                          {edu.honors}
                        </span>
                      )}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <span>{edu.period}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Skills Section */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-accent text-sm font-medium uppercase tracking-widest">Expertise</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-2 line-accent">Technical Skills</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                variants={fadeInUp}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="skill-badge cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
          </motion.div>
        </section>

        <div className="section-divider" />

        {/* Contact Section */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-accent text-sm font-medium uppercase tracking-widest">Connect</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-2">Let&apos;s Work Together</h2>
            <p className="text-muted-foreground mt-4">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {contactLinks.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6
                         hover:bg-card hover:border-accent/50 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <contact.icon className="w-6 h-6 text-accent" />
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent
                                          group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{contact.label}</p>
                <p className="text-foreground font-medium truncate">{contact.value}</p>
              </a>
            ))}
          </motion.div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 mt-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 Jocelin Darma</p>
            <p className="flex items-center gap-1">
              Built with <span className="text-accent">♥</span> using Next.js & Tailwind
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
