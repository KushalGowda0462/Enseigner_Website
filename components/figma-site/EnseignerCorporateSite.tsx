"use client";

import {
  AlertTriangle,
  Anchor,
  ArrowRight,
  BarChart3,
  Bot,
  Boxes,
  Building2,
  Cable,
  Cpu,
  Factory,
  FileCheck,
  GraduationCap,
  HeartPulse,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  MonitorDot,
  Network,
  Phone,
  Server,
  Shield,
  ShoppingBag,
  Moon,
  Sun,
  Users,
  Wrench,
  X,
  Zap,
  Eye,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import { referenceProjects, type ReferenceProject } from "@/data/reference-projects";
import ContactForm from "./ContactForm";

const logoPath = "/enseigner-logo-transparent.png";
const heroImage =
  "https://images.unsplash.com/photo-1680992046626-418f7e910589?w=1600&h=1000&fit=crop&auto=format";

type ThemeMode = "dark" | "light";

const themeVars: Record<ThemeMode, CSSProperties> = {
  dark: {
    "--site-bg": "#080d16",
    "--site-bg-deep": "#060b13",
    "--site-card": "#0c1422",
    "--site-card-hover": "#0f1a28",
    "--site-text": "#dce8f5",
    "--site-muted": "#7a90a8",
    "--site-gold": "#c9a84c",
    "--site-gold-hover": "#dbb85a",
    "--site-divider": "rgba(243,210,113,0.5)",
    "--site-divider-glow": "rgba(243,210,113,0.65)",
    "--site-hero-overlay":
      "linear-gradient(105deg, #080d16 52%, rgba(8,13,22,0.86) 80%, rgba(8,13,22,0.45) 100%)",
  } as CSSProperties,
  light: {
    "--site-bg": "#f4f7fb",
    "--site-bg-deep": "#e9eef5",
    "--site-card": "#ffffff",
    "--site-card-hover": "#f8fbff",
    "--site-text": "#172331",
    "--site-muted": "#53677d",
    "--site-gold": "#b99032",
    "--site-gold-hover": "#d0a84a",
    "--site-divider": "rgba(199,146,20,0.55)",
    "--site-divider-glow": "rgba(199,146,20,0.5)",
    "--site-hero-overlay":
      "linear-gradient(105deg, rgba(244,247,251,0.98) 50%, rgba(244,247,251,0.9) 80%, rgba(244,247,251,0.6) 100%)",
  } as CSSProperties,
};

const metrics = [
  { icon: Cpu, value: "12+", label: "Years Enterprise Execution", sub: "Enterprise execution backbone, now engineering for the GCC" },
  { icon: Building2, value: "100+", label: "Enterprise Clients Delivered", sub: "Banking, government, healthcare, logistics, and critical infrastructure" },
  { icon: MapPin, value: "10,000+", label: "Branch & Site Deployments", sub: "Operational deployments across enterprise locations" },
  { icon: Network, value: "200+", label: "OEM Partner Ecosystem", sub: "Compute, storage, networking, and cloud relationships" },
];

const visionQuote =
  "To be the GCC's most trusted infrastructure and enterprise technology partner — built on 12 years of enterprise execution — enabling enterprises to modernise their infrastructure, secure their operations, and adopt intelligent technology with confidence and operational permanence.";

const strategicPillars = [
  {
    title: "Integration Over Complexity",
    body: "We design integrated solutions across AI, networking, data centre, and intelligent operations — eliminating fragmented vendor exposure and reducing operational risk.",
  },
  {
    title: "Execution Over Theory",
    body: "Enterprise execution succeeds when it is grounded in infrastructure discipline. 12+ years of hands-on enterprise execution differentiates Enseigner from consulting-led or software-first players.",
  },
  {
    title: "GCC Focus, India-Proven Delivery",
    body: "GCC-focused and Dubai-registered, Enseigner brings a proven India delivery backbone — over a decade of deploying and maintaining systems for banks, government institutions, and logistics operators — to enterprises across the Gulf.",
  },
];

// CORE OFFERINGS — the five blocks a GCC visitor should see first (Website Brief, s.4).
// `featured: true` marks the three to lead with: AI Services, Computer Vision, Agentic AI.
// COPY PENDING: final wording for the featured three, plus Track 3D and Hospital Management,
// is being supplied by the Enseigner team. Descriptions below are drafts — do not treat as locked.
const coreOfferings = [
  {
    icon: Bot,
    code: "AI-01",
    title: "AI Services & Agentic AI",
    desc: "Agentic AI systems and applied AI services — including the Enseigner chatbot — that answer routine enquiries, classify and route requests, and run multi-step workflows across enterprise systems.",
    tags: ["Agentic AI", "Chatbot", "Workflow Automation", "LLM Ops"],
    featured: true,
  },
  {
    icon: Eye,
    code: "AI-02",
    title: "Computer Vision",
    desc: "AI-powered operational visibility for workforce management, site monitoring, retail intelligence, and anomaly detection — processed on-premise within the client environment.",
    tags: ["Video Analytics", "Anomaly", "Workforce", "On-Premise AI"],
    featured: true,
  },
  {
    icon: Boxes,
    code: "PRD-01",
    title: "Track 3D",
    desc: "Real-time 3D tracking and spatial visualisation for enterprise sites — asset, vehicle, and personnel movement rendered against a live model of the facility.",
    tags: ["3D Tracking", "Spatial Analytics", "Site Visibility"],
    featured: false,
  },
  {
    icon: HeartPulse,
    code: "PRD-02",
    title: "Hospital Management",
    desc: "Integrated hospital management covering patient administration, departmental workflow, records, and operational reporting for healthcare providers.",
    tags: ["Healthcare", "Workflow", "Records", "Reporting"],
    featured: false,
  },
  {
    icon: GraduationCap,
    code: "TRN-01",
    title: "Training Services",
    desc: "Expert-led enablement across infrastructure, networking, cloud, data centre, and AI operations — grounded in real enterprise deployment experience.",
    tags: ["Infrastructure", "Cloud", "Data Centre", "AI Operations"],
    featured: false,
  },
];

// Retained infrastructure practice areas (Website Brief, s.6 — keep as-is).
const infrastructureServices = [
  {
    icon: Server,
    code: "SYS-01",
    title: "Enterprise Data Centre Solutions",
    desc: "Enterprise data centre design and operations — storage, network fabric, recovery architectures, and structured cabling.",
    tags: ["Compute", "Storage", "Network Fabric", "DR"],
  },
  {
    icon: Wrench,
    code: "SYS-02",
    title: "Managed Services",
    desc: "Cloud storage, data centre management, and long-term operational support — one partner from consultancy through execution to steady-state operations.",
    tags: ["Cloud Storage", "DC Management", "Operations"],
  },
  {
    icon: Cable,
    code: "SYS-03",
    title: "Structured Cabling & Passive Infrastructure",
    desc: "Structured cabling, CAD design, passive infrastructure, installation, and commissioning.",
    tags: ["CAD", "Structured Cabling", "Commissioning"],
  },
];

const aiModules = [
  { icon: Users, code: "WFI", label: "Workforce & Attendance Intelligence", value: "Contactless", unit: "identification, presence monitoring, exception alerting, and HRMS/payroll API integration", status: "ON-PREMISE" },
  { icon: Shield, code: "SAI", label: "Site & Anomaly Intelligence", value: "Audit-Ready", unit: "anomaly detection, timestamped audit trails, and regulatory-grade operational evidence", status: "COMPLIANT" },
  { icon: BarChart3, code: "RCI", label: "Retail & Commercial Intelligence", value: "Operational", unit: "visitor flow analysis, zone engagement, dwell time analytics, POS reconciliation, and behaviour analytics", status: "INSIGHT" },
  { icon: MonitorDot, code: "ECD", label: "Enterprise Command Dashboard", value: "Unified", unit: "real-time visibility across workforce status, security posture, alerts, and compliance readiness", status: "COMMAND" },
  { icon: FileCheck, code: "ODA", label: "On-Premise Data Architecture", value: "Data Residency", unit: "AI inference processed in the client environment with no biometric or operational data transmitted externally — keeping data within the client's jurisdiction", status: "PRIVATE" },
  { icon: AlertTriangle, code: "AIO", label: "AIOps & Anomaly Detection", value: "Predictive", unit: "automation, predictive analytics, performance intelligence, SLA tracking, and proactive issue resolution", status: "AIOPS" },
];

const dataCentreCapabilities = [
  "Enterprise data centre design and build — compute, storage, and networking infrastructure for mission-critical operations.",
  "Server and storage deployment — HPE, Dell, NetApp, and leading OEMs; enterprise-ready from day one.",
  "Computer vision and AI enablement — intelligent video analytics, anomaly detection, and operational monitoring on existing camera infrastructure.",
  "Disaster recovery and backup architecture — resilient, tested, and designed for business continuity.",
  "Structured cabling and passive infrastructure — from CAD design through commissioning for data centres and enterprise campuses.",
  "Designed for enterprise sectors: banking, government, healthcare, ports, logistics, and critical infrastructure.",
];

const deliveryModel = [
  "Consultancy",
  "Design",
  "Supply",
  "Implementation",
  "Training",
];

const gpuInfraPoints = [
  "Dedicated GPU clusters for training, fine-tuning, and inference",
  "Scalable from initial deployment to 100+ GPUs",
  "Enterprise-grade colocation with redundant power and cooling",
  "Built for regional compliance and data residency requirements",
];

// Chatbot and ticket-intelligence cards now live in the Agentic AI section above — kept out of
// here to avoid repeating the same two claims twice on one page.
const aiSolutions = [
  {
    icon: Eye,
    title: "VisionOps",
    desc: "Computer vision for real-time operational monitoring, workforce visibility, and anomaly detection across enterprise sites.",
  },
  {
    icon: BarChart3,
    title: "Management Dashboards & AI Value Reports",
    desc: "Cross-site visibility and automated reporting that cuts reporting time from days to minutes.",
  },
];

const industries = [
  { icon: Landmark, code: "IND-01", label: "Banking & Finance", desc: "Branch infrastructure, compliance-aligned data platforms, AI-assisted service desks, and data centre modernization for banks and NBFCs." },
  { icon: Shield, code: "IND-02", label: "Government & Smart City", desc: "Command dashboards, smart-city data infrastructure, and mission-critical networks for government and public-sector operations." },
  { icon: Anchor, code: "IND-03", label: "Ports & Logistics", desc: "Cargo and asset visibility, 3D site tracking, terminal network infrastructure, and free-zone operational dashboards." },
  { icon: HeartPulse, code: "IND-04", label: "Healthcare", desc: "Hospital management systems, campus networking, data protection, and managed services for healthcare environments." },
  { icon: ShoppingBag, code: "IND-05", label: "Retail & Hospitality", desc: "Footfall and dwell-time analytics, AI customer assistants, and multi-site network and store infrastructure." },
  { icon: GraduationCap, code: "IND-06", label: "Education", desc: "Campus network backbone, smart classroom infrastructure, and training and enablement programmes." },
  { icon: Factory, code: "IND-07", label: "Manufacturing", desc: "Production floor visibility, computer vision quality and safety analytics, OT network infrastructure, and plant operations dashboards." },
  { icon: Zap, code: "IND-08", label: "Energy & Critical Infrastructure", desc: "Oil and gas, power, and utilities — high-availability compute, networking, and communications infrastructure." },
];

// India project case studies moved to /reference-projects (Website Brief, s.9).
// Source of truth is now data/reference-projects.ts.

// BRAND LIST PENDING (Website Brief, s.8): surveillance, access-control, PA and fire brands have
// been removed. The categories below are the existing server / storage / networking / cloud names
// already held by Enseigner — deliberately NOT expanded with guessed names. Replace this list when
// the finalized brand list arrives from the Enseigner team.
const oemCategories = [
  {
    category: "Servers & Storage",
    brands: ["Dell", "HPE", "NetApp", "Veritas", "Veeam", "VMware"],
  },
  {
    category: "Networking & Switches",
    brands: ["Cisco", "Aruba", "Extreme Networks", "D-Link", "Legrand", "CommScope"],
  },
  {
    category: "Cloud & Platform",
    brands: ["Microsoft", "VMware", "Veeam"],
  },
  {
    category: "AI & Compute",
    brands: ["NVIDIA", "Dell", "HPE"],
  },
  {
    category: "Network Security",
    brands: ["Fortinet", "Cisco", "Sophos", "Meraki", "Palo Alto", "Forescout"],
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-[var(--site-gold)]" />
      <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--site-gold)]">
        {children}
      </span>
    </div>
  );
}

function NavBar({
  themeMode,
  onToggleTheme,
}: {
  themeMode: ThemeMode;
  onToggleTheme: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Labels are kept short on purpose — eight items plus the logo and CTA have to fit
  // inside max-w-7xl. Long labels here overflow the bar before the mobile breakpoint.
  const links = [
    ["About", "#about"],
    ["Offerings", "#capabilities"],
    ["Agentic AI", "#agentic-ai"],
    ["Operations", "#ai-ops"],
    ["GPU", "#ai-gpu"],
    ["Industries", "#industries"],
    ["Projects", "/reference-projects"],
    ["Partners", "#partners"],
  ];

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-[var(--site-gold)]/20 bg-[var(--site-bg)]/95 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#" className="flex shrink-0 items-center">
          <Image
            src={logoPath}
            alt="Enseigner"
            width={1081}
            height={223}
            className={`h-8 w-auto object-contain md:h-9 ${themeMode === "dark" ? "brightness-0 invert" : ""}`}
            priority
          />
        </a>

        <div className="hidden items-center gap-4 xl:flex xl:gap-6">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.06em] text-[var(--site-muted)] transition hover:text-[var(--site-gold)]">
              {label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <a href="#contact" className="hidden shrink-0 border border-[var(--site-gold)] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--site-gold)] transition hover:bg-[var(--site-gold)] hover:text-[var(--site-bg)] sm:inline-flex">
            Contact
          </a>
          <button
            onClick={onToggleTheme}
            className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full text-[var(--site-gold)] transition duration-300 hover:scale-110 active:scale-95"
            aria-label={`Switch to ${themeMode === "dark" ? "bright" : "dark"} mode`}
            title={`Switch to ${themeMode === "dark" ? "bright" : "dark"} mode`}
          >
            <span className="absolute inset-1 rounded-full bg-[var(--site-gold)]/10 opacity-0 blur-sm transition duration-300 group-hover:scale-125 group-hover:opacity-100" />
            <Sun
              size={18}
              className={`absolute transition duration-500 ${
                themeMode === "dark"
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-50 opacity-0"
              }`}
            />
            <Moon
              size={18}
              className={`absolute transition duration-500 ${
                themeMode === "light"
                  ? "rotate-0 scale-100 opacity-100"
                  : "rotate-90 scale-50 opacity-0"
              }`}
            />
          </button>
          <button className="text-[var(--site-text)] xl:hidden" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--site-gold)]/15 bg-[var(--site-bg)]/98 px-6 py-4 xl:hidden">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMobileOpen(false)} className="block border-b border-[var(--site-gold)]/10 py-3 text-base font-bold uppercase tracking-[0.08em] text-[var(--site-text)]">
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-4 inline-flex border border-[var(--site-gold)] px-5 py-2 text-base font-bold uppercase tracking-[0.08em] text-[var(--site-gold)]">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section style={themeVars.dark} className="relative flex min-h-screen items-center overflow-hidden bg-[var(--site-bg)] text-[var(--site-text)]">
      <div className="absolute inset-0">
        <Image src={heroImage} alt="Enterprise data centre infrastructure" fill className="object-cover opacity-[0.22]" priority sizes="100vw" />
        <div className="absolute inset-0 bg-[var(--site-hero-overlay)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.045)_1px,transparent_1px)] bg-[length:48px_48px]" />
      </div>
      <div className="absolute left-0 top-1/2 h-40 w-1 -translate-y-1/2 bg-[linear-gradient(to_bottom,transparent,var(--site-gold),transparent)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-12 gap-8 px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
        <div className="col-span-12 max-w-3xl lg:col-span-8">
          <SectionLabel>Enterprise Infrastructure · Built on 12 Years of Enterprise Execution</SectionLabel>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black uppercase leading-[0.96] tracking-tight text-[var(--site-text)] [text-shadow:0_2px_24px_rgba(8,13,22,0.85)]">
            Engineering <br />
            <span className="text-[var(--site-gold)]">Intelligent</span> <br />
            Enterprise <br />
            Infrastructure <br />
            <span className="text-[var(--site-muted)]">For the GCC</span>
          </h1>
          <div className="my-7 h-0.5 w-20 bg-[linear-gradient(to_right,var(--site-gold),transparent)]" />
          <p className="max-w-xl text-lg leading-8 text-[var(--site-muted)]">
            AI Services & Agentic AI · Computer Vision · Track 3D · Hospital Management · Enterprise Data Centre & Infrastructure · Training Services.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#capabilities" className="inline-flex items-center gap-2 bg-[var(--site-gold)] px-8 py-4 text-base font-black uppercase tracking-[0.1em] text-[var(--site-bg)] transition hover:bg-[var(--site-gold-hover)]">
              Explore Capabilities <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-[var(--site-text)]/25 px-8 py-4 text-base font-black uppercase tracking-[0.1em] text-[var(--site-text)] transition hover:border-[var(--site-gold)] hover:text-[var(--site-gold)]">
              <Phone size={16} /> Talk to an Expert
            </a>
          </div>

          <div className="mt-12 border-t border-[var(--site-text)]/10 pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--site-muted)]">
              OEM &amp; technology partners
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
              {["Dell", "HP", "Cisco", "Juniper", "NetApp", "Super Micro"].map((client) => (
                <span key={client} className="text-base font-black uppercase tracking-[0.04em] text-[var(--site-text)]/65 transition hover:text-[var(--site-gold)]">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:col-span-4 lg:flex lg:flex-col lg:items-end lg:justify-center lg:gap-3">
          {[
            ["12+", "Years of Enterprise Execution"],
            ["100+", "Enterprise Clients Delivered"],
            ["10,000+", "Branch & Site Security Installations"],
          ].map(([value, label]) => (
            <div key={value} className="w-44 border border-[var(--site-gold)]/25 bg-[var(--site-card)]/85 p-5 backdrop-blur-md">
              <div className="text-4xl font-black leading-none text-[var(--site-gold)]">{value}</div>
              <div className="mt-2 text-base leading-5 text-[var(--site-muted)]">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_bottom,transparent,var(--site-bg))]" />
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative bg-[var(--site-bg-deep)] py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.025)_1px,transparent_1px)] bg-[length:56px_56px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionLabel>About Enseigner</SectionLabel>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black uppercase leading-none text-[var(--site-text)]">
              Who We Are
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--site-text)]">
              A systems integration company built for GCC enterprises on a foundation of 12 years of enterprise execution.
            </p>
          </div>
          <div className="space-y-6 lg:col-span-7">
            <p className="text-base leading-8 text-[var(--site-muted)]">
              Enseigner is an infrastructure-first enterprise technology company that has evolved into AI-enabled intelligent operations. Built on 12+ years of enterprise execution across banking, government, healthcare, logistics, and critical infrastructure — and now engineered to serve the GCC.
            </p>
            <p className="text-base leading-8 text-[var(--site-muted)]">
              Enterprise deployments succeed when they are grounded in infrastructure discipline. Organisations that attempt technology adoption without operationally sound, well-integrated infrastructure consistently face execution failures.
            </p>
            <p className="text-base leading-8 text-[var(--site-gold)]">
              Enseigner exists to close that gap — for enterprises across the GCC.
            </p>
          </div>
        </div>

        <div className="mt-16 border-y border-[var(--site-gold)]/35 bg-[var(--site-card)]/80 p-8 md:p-12">
          {/* A 40-word quote does not want display sizing — at Display 3 it ran to five
              shouting lines. Body Large -> H4 keeps it a quote, and the narrower measure
              holds the line length readable at the smaller size. */}
          <blockquote className="mx-auto max-w-4xl text-center text-lg font-bold italic leading-snug text-[var(--site-text)] md:text-2xl">
            &quot;{visionQuote}&quot;
          </blockquote>
        </div>

        <div className="mt-12 grid gap-px bg-[var(--site-divider)] [&>*]:[box-shadow:0_0_12px_-1px_var(--site-divider-glow)] lg:grid-cols-3">
          {strategicPillars.map((pillar) => (
            <article key={pillar.title} className="bg-[var(--site-card)] p-8">
              <h3 className="text-2xl font-black uppercase leading-tight text-[var(--site-gold)]">{pillar.title}</h3>
              <p className="mt-4 text-base leading-7 text-[var(--site-muted)]">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustMetrics() {
  return (
    <section className="bg-[var(--site-bg)] pb-24">
      <div className="h-px bg-[linear-gradient(to_right,transparent,var(--site-gold)_20%,var(--site-gold)_80%,transparent)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid border border-[var(--site-divider)] bg-[var(--site-gold)]/12 [&>*]:[box-shadow:0_0_12px_-1px_var(--site-divider-glow)] sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.value} className="relative border-b border-[var(--site-divider)] bg-[var(--site-card)]/80 p-8 transition hover:bg-[var(--site-card-hover)] sm:border-r lg:border-b-0">
                <span className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-[var(--site-gold)]" />
                <Icon className="mb-5 text-[var(--site-gold)]" size={24} strokeWidth={1.5} />
                <div className="text-5xl font-black leading-none text-[var(--site-text)]">{metric.value}</div>
                <h3 className="mt-3 text-base font-black uppercase tracking-[0.07em] text-[var(--site-gold)]">{metric.label}</h3>
                <p className="mt-2 text-base leading-6 text-[var(--site-muted)]">{metric.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-[var(--site-bg)] py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.025)_1px,transparent_1px)] bg-[length:64px_64px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14">
          <SectionLabel>Core Offerings</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black uppercase leading-none text-[var(--site-text)]">What We Do</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--site-muted)]">
            Five core offerings — AI services and agentic systems, computer vision, Track 3D, hospital management, and training — built on an enterprise infrastructure foundation.
          </p>
        </div>

        <div className="grid gap-px bg-[var(--site-divider)] [&>*]:[box-shadow:0_0_12px_-1px_var(--site-divider-glow)] md:grid-cols-2 xl:grid-cols-6">
          {coreOfferings.map((service, index) => {
            const Icon = service.icon;
            // 5 cards on a six-column grid: three across the top (2 cols each), two across
            // the bottom (3 cols each). Both bottom cards widen equally instead of one being
            // stretched to fill the remainder, and no empty cell is left to paint gold.
            const fillsRow = [
              index < 3 ? "xl:col-span-2" : "xl:col-span-3",
              index === coreOfferings.length - 1 ? "md:col-span-2 xl:col-span-3" : "",
            ].join(" ");
            return (
              <article
                key={service.code}
                className={`group relative flex flex-col gap-4 p-8 transition ${fillsRow} ${service.featured ? "bg-[var(--site-card-hover)] hover:bg-[var(--site-card-hover)]" : "bg-[var(--site-card)] hover:bg-[var(--site-card-hover)]"}`}
              >
                {service.featured && <span className="absolute inset-x-0 top-0 h-0.5 bg-[var(--site-gold)]" />}
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--site-gold)]/55">{service.code}</span>
                  {service.featured && (
                    <span className="border border-[var(--site-gold)]/45 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--site-gold)]">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--site-gold)]/35 text-[var(--site-gold)]">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="text-2xl font-black uppercase leading-tight text-[var(--site-text)]">{service.title}</h3>
                </div>
                <p className="grow text-base leading-7 text-[var(--site-muted)]">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="border border-[var(--site-gold)]/25 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.08em] text-[var(--site-gold)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[linear-gradient(to_right,var(--site-gold),transparent)] opacity-0 transition group-hover:opacity-100" />
              </article>
            );
          })}
        </div>

        <div className="mb-8 mt-20">
          <SectionLabel>Infrastructure Foundation</SectionLabel>
          <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-black uppercase leading-tight text-[var(--site-text)]">
            The Layer Everything Else Runs On
          </h3>
        </div>

        <div className="grid gap-px bg-[var(--site-divider)] [&>*]:[box-shadow:0_0_12px_-1px_var(--site-divider-glow)] md:grid-cols-3">
          {infrastructureServices.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.code} className="group relative flex flex-col gap-4 bg-[var(--site-card)] p-8 transition hover:bg-[var(--site-card-hover)]">
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--site-gold)]/55">{service.code}</span>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--site-gold)]/35 text-[var(--site-gold)]">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="text-xl font-black uppercase leading-tight text-[var(--site-text)]">{service.title}</h3>
                </div>
                <p className="grow text-base leading-7 text-[var(--site-muted)]">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="border border-[var(--site-gold)]/25 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.08em] text-[var(--site-gold)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// AGENTIC AI — new heading occupying the layout slot vacated by Security Systems
// (Website Brief, s.7). COPY PENDING: final wording to follow from the Enseigner team.
//
// SUBSCRIBE CTA (Website Brief, s.7 & s.10): the standalone chatbot product site is a later
// phase. Until that destination exists the CTA routes to #contact so interested visitors can
// self-serve today. Repoint `subscribeHref` when the chatbot site/signup URL is confirmed.
const subscribeHref = "#contact";

const agenticCapabilities = [
  {
    icon: MessageSquare,
    title: "Enseigner Chatbot",
    desc: "24/7 multilingual assistant that deflects 70–80% of routine queries, cutting response times from hours to seconds.",
  },
  {
    icon: FileCheck,
    title: "Ticket Intelligence",
    desc: "Automatically classifies, routes, and summarizes service requests with 70–85% accuracy, reducing SLA breaches by 40–60%.",
  },
  {
    icon: Network,
    title: "Multi-Step Agents",
    desc: "Agents that carry a task across HR, ERP, ticketing, and reporting systems instead of stopping at a single answer.",
  },
  {
    icon: BarChart3,
    title: "Value Reporting",
    desc: "Cross-site visibility into what the agents handled, what they escalated, and what that saved.",
  },
];

function AgenticAISection() {
  return (
    <section id="agentic-ai" className="relative overflow-hidden bg-[var(--site-bg)] py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.025)_1px,transparent_1px)] bg-[length:64px_64px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel>Agentic AI</SectionLabel>
            <div className="mt-3 flex items-start gap-4">
              <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--site-divider)] text-[var(--site-gold)] [box-shadow:0_0_14px_-4px_var(--site-divider-glow)]">
                <Bot size={24} strokeWidth={1.5} />
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-black uppercase leading-none text-[var(--site-text)]">
                Agents That <span className="text-[var(--site-gold)]">Finish the Work</span>
              </h2>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--site-muted)]">
              Enseigner&apos;s agentic layer goes past answering questions. Agents read the request, decide what it needs, act across the systems that hold the answer, and report what they did — with a human in the loop wherever the decision warrants one.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-[var(--site-divider)] bg-[var(--site-card)]/80 p-7 [box-shadow:0_0_18px_-4px_var(--site-divider-glow)]">
              <div className="font-mono text-xs font-black uppercase tracking-[0.12em] text-[var(--site-gold)]">
                Enseigner Chatbot
              </div>
              <p className="mt-3 text-base leading-7 text-[var(--site-muted)]">
                Deploy the chatbot against your own knowledge base, ticketing, and enterprise systems. Subscribe to get access details and onboarding as soon as they open.
              </p>
              <a
                href={subscribeHref}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[var(--site-gold)] px-8 py-4 text-base font-black uppercase tracking-[0.1em] text-[var(--site-bg)] transition hover:bg-[var(--site-gold-hover)]"
              >
                Subscribe <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-px bg-[var(--site-divider)] [&>*]:[box-shadow:0_0_12px_-1px_var(--site-divider-glow)] sm:grid-cols-2 xl:grid-cols-4">
          {agenticCapabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="flex flex-col gap-4 bg-[var(--site-card)] p-7 transition hover:bg-[var(--site-card-hover)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--site-gold)]/35 text-[var(--site-gold)]">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="text-xl font-black uppercase leading-tight text-[var(--site-text)]">{capability.title}</h3>
                <p className="text-base leading-7 text-[var(--site-muted)]">{capability.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DataCentreAISection() {
  return (
    <section id="data-centre-ai" className="relative bg-[var(--site-bg-deep)] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel>Data Centre & AI</SectionLabel>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black uppercase leading-none text-[var(--site-text)]">
              Enterprise Data Centre & AI Solutions
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--site-muted)]">
              Built for GCC enterprise — reliable, scalable, and operationally sound.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="flex gap-px bg-[var(--site-divider)] [&>*]:[box-shadow:0_0_12px_-1px_var(--site-divider-glow)]">
              {deliveryModel.map((step) => (
                <div key={step} className="flex-auto whitespace-nowrap bg-[var(--site-card)] px-5 py-5 text-center font-mono text-xs font-black uppercase tracking-[0.08em] text-[var(--site-gold)]">
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-px bg-[var(--site-divider)] [&>*]:[box-shadow:0_0_12px_-1px_var(--site-divider-glow)] lg:grid-cols-2">
          {dataCentreCapabilities.map((capability, index) => (
            <article key={capability} className="flex gap-5 bg-[var(--site-card)] p-7">
              <span className="font-mono text-base font-black text-[var(--site-gold)]">0{index + 1}</span>
              <p className="text-base leading-7 text-[var(--site-text)]">{capability}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-px bg-[var(--site-divider)] [&>*]:[box-shadow:0_0_12px_-1px_var(--site-divider-glow)] md:grid-cols-4">
          {[
            ["End-to-End Delivery", "Consultancy, design, supply, implementation, and training — one partner for the full lifecycle"],
            ["200+ OEM Partners", "HPE · Dell · Cisco · Fortinet · NetApp · Microsoft · NVIDIA and 200+ brands"],
            ["Operational Continuity", "10,000+ installations delivered across enterprise client sites"],
            ["Scalable Architecture", "From single site to enterprise-wide multi-location deployments"],
          ].map(([title, body]) => (
            <div key={title} className="bg-[var(--site-card)] p-6">
              <h3 className="text-xl font-black uppercase text-[var(--site-gold)]">{title}</h3>
              <p className="mt-3 text-base leading-6 text-[var(--site-muted)]">{body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-xs uppercase tracking-[0.12em] text-[var(--site-muted)]">
          ISO 14001 Certified · ASCB(E) Accredited · Electronic Security Association of India Member
        </p>
      </div>
    </section>
  );
}

function AISection() {
  const [active, setActive] = useState(0);
  const statusColor: Record<string, string> = {
    "ON-PREMISE": "#1a9e6d",
    COMPLIANT: "#2a7ab5",
    INSIGHT: "var(--site-gold)",
    COMMAND: "var(--site-gold)",
    PRIVATE: "#1a9e6d",
    AIOPS: "#2a7ab5",
  };

  return (
    <section id="ai-ops" className="relative overflow-hidden bg-[var(--site-bg-deep)] py-24">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(201,168,76,0.012)_2px,rgba(201,168,76,0.012)_4px)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel>Intelligent Operations</SectionLabel>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black uppercase leading-none text-[var(--site-text)]">
              AI-Enabled Operations <br />
              <span className="text-[var(--site-gold)]">Built on Enterprise</span> <br />
              Infrastructure
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-[var(--site-muted)]">
              Enseigner&apos;s AI layer sits on top of proven physical infrastructure. Computer vision, edge analytics, and command intelligence turn site activity into operational visibility.
            </p>
            <div className="mt-5 flex flex-wrap gap-5 font-mono text-sm uppercase tracking-[0.08em]">
              <span className="text-[#1a9e6d]">On-Premise AI Processing</span>
              <span className="text-[var(--site-muted)]">On-Premise Data by Design</span>
              <span className="text-[var(--site-muted)]">GCC Data Sovereignty Aligned</span>
            </div>
          </div>
        </div>

        <div className="border border-[var(--site-divider)] bg-[var(--site-card)]/80 [box-shadow:0_0_18px_-4px_var(--site-divider-glow)]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--site-divider)] px-5 py-4">
            <div className="flex items-center gap-5">
              <span className="flex gap-1.5">
                {["#c0392b", "#d4a017", "#1a9e6d"].map((color) => (
                  <span key={color} className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
                ))}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--site-muted)]">Centralised Command · Distributed Intelligence</span>
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--site-gold)]">On-Premise by Design</span>
          </div>

          <div className="grid gap-px bg-[var(--site-divider)] [&>*]:[box-shadow:0_0_12px_-1px_var(--site-divider-glow)] p-px sm:grid-cols-2 xl:grid-cols-3">
            {aiModules.map((module, index) => {
              const Icon = module.icon;
              const isActive = active === index;
              return (
                <button
                  key={module.code}
                  onClick={() => setActive(index)}
                  className={`relative border-l-2 p-6 text-left transition ${isActive ? "border-[var(--site-gold)] bg-[var(--site-card-hover)]" : "border-transparent bg-[var(--site-card)] hover:bg-[var(--site-card-hover)]"}`}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-[var(--site-gold)]/70">
                      <Icon size={16} strokeWidth={1.5} />
                      {module.code}
                    </span>
                    <span className="border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: statusColor[module.status], borderColor: statusColor[module.status] }}>
                      {module.status}
                    </span>
                  </div>
                  <div className="text-sm font-bold uppercase tracking-[0.08em] text-[var(--site-muted)]">{module.label}</div>
                  <div className={`mt-2 text-4xl font-black leading-none ${isActive ? "text-[var(--site-gold)]" : "text-[var(--site-text)]"}`}>{module.value}</div>
                  <div className="mt-1 text-sm text-[var(--site-muted)]">{module.unit}</div>
                  <div className="mt-3 font-mono text-xs uppercase text-[#1a9e6d]">{module.status}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function GpuInfrastructure() {
  return (
    <section id="ai-gpu" className="relative bg-[var(--site-bg)] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 max-w-3xl">
          <SectionLabel>AI & GPU Infrastructure</SectionLabel>
          <div className="mt-3 flex items-start gap-4">
            <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--site-divider)] text-[var(--site-gold)] [box-shadow:0_0_14px_-4px_var(--site-divider-glow)]">
              <Cpu size={24} strokeWidth={1.5} />
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black uppercase leading-none text-[var(--site-text)]">
              Sovereign AI Infrastructure for the Region
            </h2>
          </div>
          <p className="mt-6 text-base leading-8 text-[var(--site-muted)]">
            Enseigner delivers GPU-as-a-Service infrastructure built for enterprises and governments that need high-performance compute without the capital burden of building it themselves. Our infrastructure footprint is designed to scale from pilot deployments to large-scale AI workloads, fully hosted within the region for data sovereignty and compliance.
          </p>
        </div>

        <div className="grid gap-px bg-[var(--site-divider)] [&>*]:[box-shadow:0_0_12px_-1px_var(--site-divider-glow)] lg:grid-cols-2">
          {gpuInfraPoints.map((point, index) => (
            <article key={point} className="flex gap-5 bg-[var(--site-card)] p-7">
              <span className="font-mono text-base font-black text-[var(--site-gold)]">0{index + 1}</span>
              <p className="text-base leading-7 text-[var(--site-text)]">{point}</p>
            </article>
          ))}
        </div>

        <div className="mb-10 mt-20 max-w-3xl">
          <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-black uppercase leading-tight text-[var(--site-text)]">
            AI Solutions That Solve <span className="text-[var(--site-gold)]">Real Operational Problems</span>
          </h3>
          <p className="mt-4 text-base leading-8 text-[var(--site-muted)]">
            Beyond infrastructure, Enseigner builds applied AI solutions that turn raw compute into measurable business outcomes:
          </p>
        </div>

        <div className="grid gap-px bg-[var(--site-divider)] [&>*]:[box-shadow:0_0_12px_-1px_var(--site-divider-glow)] md:grid-cols-2">
          {aiSolutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <article key={solution.title} className="flex flex-col gap-4 bg-[var(--site-card)] p-7 transition hover:bg-[var(--site-card-hover)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--site-gold)]/35 text-[var(--site-gold)]">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h4 className="text-xl font-black uppercase leading-tight text-[var(--site-text)]">{solution.title}</h4>
                <p className="text-base leading-7 text-[var(--site-muted)]">{solution.desc}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 border border-[var(--site-divider)] bg-[var(--site-card)]/80 p-8 [box-shadow:0_0_18px_-4px_var(--site-divider-glow)] md:p-12">
          <SectionLabel>Why It Matters</SectionLabel>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--site-text)]">
            Most providers offer either infrastructure or applications — rarely both, integrated. Enseigner combines GPU infrastructure with applied AI agents and workflow automation, giving clients a full-stack path from raw compute to real operational results.
          </p>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="bg-[var(--site-bg)] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel>Industries Served</SectionLabel>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black uppercase leading-none text-[var(--site-text)]">
              Built for the GCC&apos;s Most <br /> Demanding Sectors
            </h2>
          </div>
          <p className="max-w-md text-base leading-8 text-[var(--site-muted)]">
            Sector-specific infrastructure expertise across regulated, distributed, and mission-critical enterprise environments.
          </p>
        </div>

        <div className="grid gap-px bg-[var(--site-divider)] [&>*]:[box-shadow:0_0_12px_-1px_var(--site-divider-glow)] sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            // 8 cards divide evenly into 2 and 4 columns but not 3. At lg the grid runs on six
            // columns: six cards at 2 each, then the final two at 3 each — a balanced last row.
            const fillsRow = index < 6
              ? "lg:col-span-2 xl:col-span-1"
              : "lg:col-span-3 xl:col-span-1";
            return (
              <article key={industry.code} className={`group relative min-h-[260px] bg-[var(--site-card)] p-7 transition hover:bg-[var(--site-card-hover)] ${fillsRow}`}>
                <span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--site-gold)]/45">{industry.code}</span>
                <div className="my-5 flex h-12 w-12 items-center justify-center border border-[var(--site-gold)]/25 text-[var(--site-muted)] transition group-hover:border-[var(--site-gold)] group-hover:text-[var(--site-gold)]">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black uppercase leading-tight text-[var(--site-text)]">{industry.label}</h3>
                <p className="mt-3 text-base leading-6 text-[var(--site-muted)]">{industry.desc}</p>
                <span className="absolute bottom-0 right-0 h-7 w-7 border-b-2 border-r-2 border-transparent transition group-hover:border-[var(--site-gold)]" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Compact credibility strip. The India project detail now lives on /reference-projects
// (Website Brief, s.9) so it stays available without dominating the GCC-facing homepage.
function TrackRecordStrip() {
  return (
    <section id="track-record" className="relative bg-[var(--site-bg-deep)] py-24">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-[linear-gradient(to_right,transparent,rgba(201,168,76,0.45)_30%,rgba(201,168,76,0.45)_70%,transparent)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <SectionLabel>Delivery Track Record</SectionLabel>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black uppercase leading-none text-[var(--site-text)]">
              Enterprise Credibility Built Over 12 Years
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--site-muted)]">
              A proven delivery backbone across banking, government, ports, healthcare, retail, and industrial environments — the technical capability and project execution that now underwrites our work for GCC enterprises.
            </p>
            <Link
              href="/reference-projects"
              className="mt-8 inline-flex items-center gap-2 bg-[var(--site-gold)] px-8 py-4 text-base font-black uppercase tracking-[0.1em] text-[var(--site-bg)] transition hover:bg-[var(--site-gold-hover)]"
            >
              View Reference Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReferenceProjectDialog({
  project,
  onClose,
  triggerRef,
}: {
  project: ReferenceProject | null;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  // NOTE: rendered WITHOUT Dialog.Portal on purpose. The site colour tokens
  // (--site-card, --site-gold, ...) are set as inline styles on <main>, so a
  // portal into document.body would render the modal with every var undefined.
  // Keeping it in the tree means the tokens resolve and the theme toggle works.
  return (
    <Dialog.Root open={project !== null} onOpenChange={(open) => { if (!open) onClose(); }}>
      <Dialog.Overlay className="fixed inset-0 z-[60] bg-[#04070C]/85 backdrop-blur-sm" />
      <Dialog.Content
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          triggerRef.current?.focus();
        }}
        className="fixed left-1/2 top-1/2 z-[70] max-h-[88vh] w-[min(920px,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-[var(--site-gold)]/25 bg-[var(--site-card)] shadow-[0_24px_80px_-12px_rgba(0,0,0,0.8)] focus:outline-none"
      >
        {project && (
          <>
            <div className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-[var(--site-gold)]/15 bg-[var(--site-card)] px-8 py-6">
              <div>
                <span className="inline-block bg-[var(--site-gold)] px-2.5 py-1 font-mono text-xs font-black uppercase tracking-[0.12em] text-[var(--site-bg)]">
                  {project.sector}
                </span>
                <Dialog.Title className="mt-4 text-[clamp(1.375rem,2.5vw,1.875rem)] font-black uppercase leading-tight text-[var(--site-text)]">
                  {project.title}
                </Dialog.Title>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--site-muted)]">
                  {project.sectorLabel} &middot; {project.date}
                </p>
              </div>
              <Dialog.Close
                aria-label="Close project"
                className="shrink-0 border border-[var(--site-text)]/20 p-2 text-[var(--site-muted)] transition hover:border-[var(--site-gold)] hover:text-[var(--site-gold)]"
              >
                <X size={18} />
              </Dialog.Close>
            </div>

            <div className="px-8 py-7">
              <Dialog.Description className="text-base leading-8 text-[var(--site-muted)]">
                {project.summary}
              </Dialog.Description>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.scope.map((item) => (
                  <span
                    key={item}
                    className="border border-[var(--site-gold)]/25 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-[var(--site-gold)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-[var(--site-text)]/10 pt-7">
                <h4 className="font-mono text-xs font-black uppercase tracking-[0.16em] text-[var(--site-gold)]">
                  Scale &amp; Highlights
                </h4>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-7 text-[var(--site-text)]/85">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-[var(--site-gold)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 space-y-5 border-t border-[var(--site-text)]/10 pt-7">
                {project.body.map((para) => (
                  <p key={para.slice(0, 48)} className="text-base leading-8 text-[var(--site-muted)]">
                    {para}
                  </p>
                ))}
              </div>

              <Link
                href={`/reference-projects/${project.slug}`}
                className="mt-9 inline-flex items-center gap-2 bg-[var(--site-gold)] px-7 py-3.5 text-sm font-black uppercase tracking-[0.1em] text-[var(--site-bg)] transition hover:bg-[var(--site-gold-hover)]"
              >
                Open Full Write-Up <ArrowRight size={16} />
              </Link>
            </div>
          </>
        )}
      </Dialog.Content>
    </Dialog.Root>
  );
}

function ReferenceProjects() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const active = referenceProjects.find((project) => project.slug === openSlug) ?? null;

  return (
    <section id="reference-projects" className="relative bg-[var(--site-bg)] py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Reference Projects</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black uppercase leading-none text-[var(--site-text)]">
            Delivered Programmes,{" "}
            <span className="text-[var(--site-gold)]">Documented</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-[var(--site-muted)]">
            Representative programmes from the India delivery record &mdash; sector, scope, and the scale each was executed at. Open any project to read the full write-up.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-[var(--site-divider)] [&>*]:[box-shadow:0_0_12px_-1px_var(--site-divider-glow)] sm:grid-cols-2 lg:grid-cols-4">
          {referenceProjects.map((project) => (
            <button
              key={project.slug}
              type="button"
              aria-haspopup="dialog"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setOpenSlug(project.slug);
              }}
              className="group flex h-full flex-col bg-[var(--site-card)] p-7 text-left transition hover:bg-[var(--site-card-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--site-gold)]"
            >
              <span className="self-start bg-[var(--site-gold)] px-2.5 py-1 font-mono text-xs font-black uppercase tracking-[0.12em] text-[var(--site-bg)]">
                {project.sector}
              </span>
              <h3 className="mt-5 text-base font-black uppercase leading-tight text-[var(--site-text)] transition group-hover:text-[var(--site-gold)]">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--site-muted)]">{project.summary}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 font-mono text-xs font-black uppercase tracking-[0.12em] text-[var(--site-gold)]">
                View Project <ArrowRight size={14} />
              </span>
            </button>
          ))}
        </div>

        <Link
          href="/reference-projects"
          className="mt-10 inline-flex items-center gap-2 border border-[var(--site-text)]/25 px-7 py-3.5 text-sm font-black uppercase tracking-[0.1em] text-[var(--site-text)] transition hover:border-[var(--site-gold)] hover:text-[var(--site-gold)]"
        >
          All Reference Projects <ArrowRight size={16} />
        </Link>
      </div>

      <ReferenceProjectDialog project={active} onClose={() => setOpenSlug(null)} triggerRef={triggerRef} />
    </section>
  );
}

function OEMPartners() {
  return (
    <section id="partners" className="bg-[var(--site-bg)] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12">
          <SectionLabel>OEM Partners</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black uppercase leading-none text-[var(--site-text)]">Technology Partners &amp; OEM Ecosystem</h2>
            <p className="max-w-md text-base leading-8 text-[var(--site-muted)]">
              200+ OEM relationships across servers, storage, networking, and cloud.
            </p>
          </div>
        </div>

        <div className="grid gap-px bg-[var(--site-divider)] [&>*]:[box-shadow:0_0_12px_-1px_var(--site-divider-glow)] sm:grid-cols-2 lg:grid-cols-6">
          {oemCategories.map((group, index) => (
            // 5 categories, same 3 + 2 split as the offerings grid.
            <div
              key={group.category}
              className={`bg-[var(--site-card)] p-7 transition hover:bg-[var(--site-card-hover)] ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${index === oemCategories.length - 1 ? "sm:col-span-2 lg:col-span-3" : ""}`}
            >
              <h3 className="text-lg font-black uppercase tracking-[0.04em] text-[var(--site-gold)]">{group.category}</h3>
              <p className="mt-4 text-base leading-7 text-[var(--site-muted)]">{group.brands.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ themeMode }: { themeMode: ThemeMode }) {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--site-bg-deep)] pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
      <div className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[var(--site-gold)]" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--site-gold)]">Start a Conversation</span>
            <span className="h-px w-10 bg-[var(--site-gold)]" />
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black uppercase leading-none text-[var(--site-text)]">
            Enterprise Success in the GCC <br />
            <span className="text-[var(--site-gold)]">Depends on Infrastructure Integration</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[var(--site-muted)]">
            Enterprise success in the GCC will depend on infrastructure integration, operational execution, and compliance alignment. Enseigner is built to deliver that.
          </p>
          <ContactForm />
        </div>

        <div className="grid gap-px bg-[var(--site-divider)] [&>*]:[box-shadow:0_0_12px_-1px_var(--site-divider-glow)] sm:grid-cols-2 lg:grid-cols-4">
          {/*
            CONTACT DETAILS PENDING (Website Brief, s.3):
            - Email: the common email ID must be confirmed with Ramesh/Kumar before publishing.
              Left at the existing address until then — do NOT publish a guessed .ai address.
            - Phone: to be confirmed whether this is Imran's direct Dubai line or Vijay's number.
            - Website updated to the purchased enseigner.ai domain (Website Brief, s.2).
          */}
          {[
            { icon: MapPin, label: "Head Office", value: "Dubai International Financial Centre, Dubai, UAE", sub: "Unit IH-00-01-02-OF-01, Level 2, H-00-01-CP-05" },
            { icon: Phone, label: "Phone", value: "+971 505951062", sub: "Direct line for enterprise enquiries" },
            { icon: Mail, label: "Email", value: "Info.ai@enseigner.in", sub: "Enterprise enquiries" },
            { icon: MonitorDot, label: "Website", value: "www.enseigner.ai", sub: "Engineers the Systems of the World" },
          ].map((contact) => {
            const Icon = contact.icon;
            return (
              <div key={contact.label} className="flex gap-4 bg-[var(--site-card)] p-8">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--site-gold)]/25 text-[var(--site-gold)]">
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <div className="font-mono text-xs font-black uppercase tracking-[0.12em] text-[var(--site-gold)]">{contact.label}</div>
                  <div className="mt-1 text-xl font-black text-[var(--site-text)]">{contact.value}</div>
                  <div className="mt-1 text-base text-[var(--site-muted)]">{contact.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer className="relative mt-px border-t border-[var(--site-gold)]/10 bg-[var(--site-bg)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-8 sm:px-8">
          <Image
            src={logoPath}
            alt="Enseigner"
            width={1081}
            height={223}
            className={`h-7 w-auto object-contain opacity-85 ${themeMode === "dark" ? "brightness-0 invert" : ""}`}
          />
          <p className="text-base text-[var(--site-muted)]">© 2026 Enseigner · Engineers the Systems of the World</p>
          <div className="flex gap-5 text-base text-[var(--site-muted)]">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Certifications</span>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default function EnseignerCorporateSite() {
  const [themeMode, setThemeMode] = useState<ThemeMode>("dark");

  return (
    <main
      className="min-h-screen overflow-x-hidden bg-[var(--site-bg)] text-[var(--site-text)] transition-colors duration-300"
      style={themeVars[themeMode]}
    >
      <NavBar
        themeMode={themeMode}
        onToggleTheme={() => setThemeMode((mode) => (mode === "dark" ? "light" : "dark"))}
      />
      <HeroSection />
      <TrustMetrics />
      <AboutSection />
      <Capabilities />
      <AgenticAISection />
      <DataCentreAISection />
      <AISection />
      <GpuInfrastructure />
      <Industries />
      <TrackRecordStrip />
      <ReferenceProjects />
      <OEMPartners />
      <FinalCTA themeMode={themeMode} />
    </main>
  );
}
