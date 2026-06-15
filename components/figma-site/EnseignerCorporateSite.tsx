"use client";

import {
  AlertTriangle,
  Anchor,
  ArrowRight,
  BarChart3,
  Building2,
  Cable,
  Camera,
  Factory,
  FileCheck,
  GraduationCap,
  HeartPulse,
  KeyRound,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MonitorDot,
  Network,
  Phone,
  Radio,
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
import Image from "next/image";
import { type CSSProperties, useEffect, useRef, useState } from "react";

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
    "--site-hero-overlay":
      "linear-gradient(105deg, #080d16 42%, rgba(8,13,22,0.72) 74%, rgba(8,13,22,0.35) 100%)",
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
    "--site-hero-overlay":
      "linear-gradient(105deg, rgba(244,247,251,0.97) 38%, rgba(244,247,251,0.86) 70%, rgba(244,247,251,0.58) 100%)",
  } as CSSProperties,
};

const metrics = [
  { icon: Shield, value: "12+", label: "Years Enterprise Execution", sub: "India-scale delivery foundation for GCC enterprise work" },
  { icon: Building2, value: "100+", label: "Enterprise Clients Served", sub: "Banking, government, healthcare, logistics, and critical infrastructure" },
  { icon: MapPin, value: "10,000+", label: "Branch & Site Security Installations", sub: "Operational deployments across enterprise locations" },
  { icon: Network, value: "200+", label: "OEM Partner Ecosystem", sub: "Security, networking, compute, and storage relationships" },
];

const visionQuote =
  "To be a trusted GCC partner for sovereign AI, enterprise infrastructure, and intelligent operations — enabling regulated enterprises to modernise securely, operate with confidence, and keep control of critical data.";

const strategicPillars = [
  {
    title: "Integration Over Complexity",
    body: "We design integrated solutions across security, networking, data centre, and intelligent operations — eliminating fragmented vendor exposure and reducing operational risk.",
  },
  {
    title: "Execution Over Theory",
    body: "Enterprise execution succeeds when it is grounded in infrastructure discipline. Enseigner brings 12+ years of India-scale delivery into GCC markets where reliability, accountability, and compliance matter.",
  },
  {
    title: "GCC-Focused Ambition",
    body: "Enseigner is positioned for regulated enterprises across the UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, and the wider Middle East.",
  },
];

const services = [
  {
    icon: Camera,
    code: "SYS-01",
    title: "Security Systems & Integration",
    desc: "CCTV surveillance, access control, intrusion alarm, and fire alarm systems — design, supply, installation, and maintenance.",
    tags: ["CCTV", "Access Control", "Intrusion", "Fire Alarm"],
  },
  {
    icon: Server,
    code: "SYS-02",
    title: "Enterprise Data Centre Solutions",
    desc: "Enterprise data centre design and operations — storage, network fabric, recovery architectures, and structured cabling.",
    tags: ["Compute", "Storage", "Network Fabric", "DR"],
  },
  {
    icon: Radio,
    code: "SYS-03",
    title: "PA, Voice & Command Centre",
    desc: "Public address systems, voice evacuation, intercom, and centralised command centre solutions for operational control.",
    tags: ["PA", "Voice Evacuation", "Intercom", "Command"],
  },
  {
    icon: Eye,
    code: "SYS-04",
    title: "Computer Vision & Intelligent Operations",
    desc: "AI-powered operational visibility for access control, workforce management, security, and enterprise monitoring.",
    tags: ["Video Analytics", "Anomaly", "Workforce", "Monitoring"],
  },
  {
    icon: Cable,
    code: "SYS-05",
    title: "Structured Cabling & Passive Infrastructure",
    desc: "Structured cabling, CAD design, passive infrastructure, installation, commissioning, and annual maintenance.",
    tags: ["CAD", "Structured Cabling", "Commissioning", "AMC"],
  },
  {
    icon: Wrench,
    code: "SYS-06",
    title: "Managed Services & AMC",
    desc: "Post-installation maintenance and AMC support — one partner from consultancy through execution to long-term operations.",
    tags: ["Consultancy", "Design", "Supply", "AMC"],
  },
];

const aiModules = [
  { icon: Users, code: "WFI", label: "Workforce & Attendance Intelligence", value: "Contactless", unit: "identification, presence monitoring, exception alerting, and HRMS/payroll API integration", status: "ON-PREMISE" },
  { icon: KeyRound, code: "SAI", label: "Security & Access Intelligence", value: "Audit-Ready", unit: "biometric access, anomaly detection, timestamped audit trails, and regulatory-grade evidence", status: "COMPLIANT" },
  { icon: BarChart3, code: "RCI", label: "Retail & Commercial Intelligence", value: "Operational", unit: "visitor flow analysis, zone engagement, dwell time analytics, POS reconciliation, and behaviour analytics", status: "INSIGHT" },
  { icon: MonitorDot, code: "ECD", label: "Enterprise Command Dashboard", value: "Unified", unit: "real-time visibility across workforce status, security posture, alerts, and compliance readiness", status: "COMMAND" },
  { icon: FileCheck, code: "ODA", label: "On-Premise Data Architecture", value: "GCC Ready", unit: "AI inference processed in the client environment with no biometric or operational data transmitted externally", status: "PRIVATE" },
  { icon: AlertTriangle, code: "AIO", label: "AIOps & Anomaly Detection", value: "Predictive", unit: "automation, predictive analytics, performance intelligence, SLA tracking, and proactive issue resolution", status: "AIOPS" },
];

const dataCentreCapabilities = [
  "Enterprise data centre design and build — compute, storage, and networking infrastructure for mission-critical operations.",
  "Server and storage deployment — HPE, Dell, NetApp, and leading OEMs; enterprise-ready from day one.",
  "Computer vision and AI enablement — intelligent video analytics, anomaly detection, and operational monitoring on existing camera infrastructure.",
  "Disaster recovery and backup architecture — resilient, tested, and designed for business continuity.",
  "Structured cabling and passive infrastructure — from CAD design through commissioning for data centres and enterprise campuses.",
  "Designed for GCC enterprise sectors: banking, government, healthcare, ports, logistics, free zones, and critical infrastructure.",
];

const deliveryModel = [
  "Consultancy",
  "Design",
  "Supply",
  "Implementation",
  "AMC",
];

const industries = [
  { icon: Landmark, code: "GCC-01", label: "Banking & Finance", desc: "Branch security, surveillance, compliance infrastructure, and data centre modernisation for GCC financial institutions." },
  { icon: Shield, code: "GCC-02", label: "Government & Smart Cities", desc: "Secure command centres, surveillance networks, and mission-critical infrastructure for public sector and smart city operations." },
  { icon: Anchor, code: "GCC-03", label: "Ports, Logistics & Free Zones", desc: "Container terminal security, perimeter surveillance, cargo visibility, and command centre integration for regional trade corridors." },
  { icon: HeartPulse, code: "GCC-04", label: "Healthcare", desc: "Hospital security, campus networking, data protection, and managed services for regulated healthcare environments." },
  { icon: ShoppingBag, code: "GCC-05", label: "Retail & Commercial", desc: "Multi-site security rollouts, loss prevention, footfall analytics, and centralised surveillance management." },
  { icon: GraduationCap, code: "GCC-06", label: "Education & Campuses", desc: "Campus security, smart classroom infrastructure, network backbone, and access intelligence." },
  { icon: Factory, code: "GCC-07", label: "Manufacturing & Industrial", desc: "Industrial CCTV, production floor monitoring, OT network security, and plant command operations." },
  { icon: Zap, code: "GCC-08", label: "Energy & Critical Infrastructure", desc: "Utilities, power, oil and gas, and high-availability security and communications infrastructure." },
];

const deployments = [
  {
    sector: "BFSI",
    label: "Banking, Financial Services & Insurance",
    projects: [
      "Canara Bank · HDB Financial Services · Manappuram Finance · Muthoot Finance · South Indian Bank · IIFL · HDFC ERGO · Cholamandalam Finance · Reserve Bank of India",
      "Scope: CCTV · Access control · Intrusion alarm · Branch security · Monitoring · Maintenance",
      "Muthoot Finance: 3,700 branches · Manappuram Finance: 3,000 branches",
    ],
  },
  {
    sector: "GOV",
    label: "Government, Public Sector & Defence",
    projects: [
      "BSNL · NLC India · EPFO · MEPZ · Officers Training Academy Chennai · Indian Coast Guard · Office of the Development Commissioner",
      "Scope: Security systems · Networking · Surveillance · Command/control · Operational support",
      "Government operations, defence establishments, and port-linked public infrastructure engagements",
    ],
  },
  {
    sector: "PORT",
    label: "Ports & Logistics",
    projects: [
      "Chennai Port Trust · Container Corp. of India · Dakshin Bharat Gateway Terminal · SANS CFS · Distribution Logistics Infrastructure",
      "Scope: Data centre build · Surveillance · Access control · Structured cabling · Critical operations",
      "Active DC, enterprise compute and storage deployments, DR architecture, and structured cabling across 100+ enterprise sites",
    ],
  },
  {
    sector: "HLTH",
    label: "Healthcare & Education",
    projects: [
      "Apollo Hospitals · Raichem Medicare · Annamalai University · Chettinad Academy · Saveetha Dental College · Rajiv Gandhi Institute of Technology",
      "Scope: Campus security · Surveillance · Access control · Network/passive infra · Institutional systems",
      "Healthcare campuses, education institutions, and research-linked infrastructure environments",
    ],
  },
  {
    sector: "RTL",
    label: "Retail, E-Commerce & Consumer Brands",
    projects: [
      "Decathlon · Flipkart · Lenskart · The Chennai Silks · Nilgiris · Royal Enfield · Zudio · Westside · Indospace Facilities",
      "Scope: Multi-location CCTV · Access control · Monitoring · Multi-branch rollout support",
      "Flipkart: 200 branches across distributed retail and logistics environments",
    ],
  },
  {
    sector: "IND",
    label: "IT, Manufacturing & Industrial",
    projects: [
      "TCS · Tata Communications · Techwave · Systel · Accurate Springs · Sungwoo Hitech · Seoyon E-Hwa · Vinfast · Godrej and Boyce",
      "Scope: Enterprise infra · Networking · Surveillance · Structured cabling · Security systems",
      "Enterprise infrastructure and operational security for industrial and technology environments",
    ],
  },
];

const partners = [
  "Cisco",
  "Aruba",
  "Extreme Networks",
  "Fortinet",
  "Sophos",
  "Meraki",
  "Palo Alto",
  "Dell Technologies",
  "HPE",
  "Microsoft",
  "NetApp",
  "Veritas",
  "Veeam",
  "VMware",
  "Hikvision",
  "Axis Communications",
  "CP Plus",
  "Bosch Security",
  "Honeywell",
  "Pelco",
  "Mobotix",
  "Prama",
  "HID",
  "Suprema",
  "IDCube",
  "eSSL",
  "Spectra",
  "Matrix",
  "Texecom",
  "Optex",
  "CommScope",
  "Legrand",
  "Morley IAS",
  "Apollo",
  "TOA",
  "Ahuja",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-[var(--site-gold)]" />
      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--site-gold)]">
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

  const links = [
    ["About", "#about"],
    ["Capabilities", "#capabilities"],
    ["AI & Operations", "#ai-ops"],
    ["Industries", "#industries"],
    ["Portfolio", "#deployments"],
    ["Partners", "#partners"],
  ];

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-[var(--site-gold)]/20 bg-[var(--site-bg)]/95 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center">
          <Image
            src={logoPath}
            alt="Enseigner"
            width={1081}
            height={223}
            className={`h-8 w-auto object-contain md:h-9 ${themeMode === "dark" ? "brightness-0 invert" : ""}`}
            priority
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--site-muted)] transition hover:text-[var(--site-gold)]">
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden border border-[var(--site-gold)] px-5 py-2 text-sm font-bold uppercase tracking-[0.08em] text-[var(--site-gold)] transition hover:bg-[var(--site-gold)] hover:text-[var(--site-bg)] sm:inline-flex">
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
          <button className="text-[var(--site-text)] lg:hidden" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--site-gold)]/15 bg-[var(--site-bg)]/98 px-6 py-4 lg:hidden">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMobileOpen(false)} className="block border-b border-[var(--site-gold)]/10 py-3 text-base font-bold uppercase tracking-[0.08em] text-[var(--site-text)]">
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-4 inline-flex border border-[var(--site-gold)] px-5 py-2 text-sm font-bold uppercase tracking-[0.08em] text-[var(--site-gold)]">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[var(--site-bg)]">
      <div className="absolute inset-0">
        <Image src={heroImage} alt="Enterprise data centre infrastructure" fill className="object-cover opacity-[0.22]" priority sizes="100vw" />
        <div className="absolute inset-0 bg-[var(--site-hero-overlay)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.045)_1px,transparent_1px)] bg-[length:48px_48px]" />
      </div>
      <div className="absolute left-0 top-1/2 h-40 w-1 -translate-y-1/2 bg-[linear-gradient(to_bottom,transparent,var(--site-gold),transparent)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-12 gap-8 px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
        <div className="col-span-12 max-w-3xl lg:col-span-8">
          <SectionLabel>Enterprise Infrastructure · Built on 12 Years of Enterprise Execution</SectionLabel>
          <h1 className="text-[clamp(3.1rem,7vw,5.9rem)] font-black uppercase leading-[0.95] tracking-tight text-[var(--site-text)]">
            Engineering <br />
            <span className="text-[var(--site-gold)]">Intelligent</span> <br />
            Infrastructure <br />
            <span className="text-[var(--site-muted)]">for the GCC</span>
          </h1>
          <div className="my-7 h-0.5 w-20 bg-[linear-gradient(to_right,var(--site-gold),transparent)]" />
          <p className="max-w-xl text-lg leading-8 text-[var(--site-muted)]">
            Sovereign AI · GPU-ready infrastructure · Enterprise data centre · Integrated security systems · Network and command centre solutions for regulated GCC enterprises.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#capabilities" className="inline-flex items-center gap-2 bg-[var(--site-gold)] px-8 py-4 text-sm font-black uppercase tracking-[0.1em] text-[var(--site-bg)] transition hover:bg-[var(--site-gold-hover)]">
              Explore Capabilities <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-[var(--site-text)]/25 px-8 py-4 text-sm font-black uppercase tracking-[0.1em] text-[var(--site-text)] transition hover:border-[var(--site-gold)] hover:text-[var(--site-gold)]">
              <Phone size={16} /> Talk to an Expert
            </a>
          </div>
        </div>

        <div className="hidden lg:col-span-4 lg:flex lg:flex-col lg:items-end lg:justify-center lg:gap-3">
          {[
            ["12+", "Years of Enterprise Execution"],
            ["100+", "Enterprise Clients Served"],
            ["10,000+", "Branch & Site Security Installations"],
          ].map(([value, label]) => (
            <div key={value} className="w-44 border border-[var(--site-gold)]/25 bg-[var(--site-card)]/85 p-5 backdrop-blur-md">
              <div className="text-4xl font-black leading-none text-[var(--site-gold)]">{value}</div>
              <div className="mt-2 text-sm leading-5 text-[var(--site-muted)]">{label}</div>
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
            <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase leading-none text-[var(--site-text)]">
              Who We Are
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--site-text)]">
              A Dubai-led enterprise technology company for sovereign AI, infrastructure, security, and intelligent operations across the GCC.
            </p>
          </div>
          <div className="space-y-6 lg:col-span-7">
            <p className="text-base leading-8 text-[var(--site-muted)]">
              Enseigner is an infrastructure-first enterprise technology company focused on sovereign AI, data centre, security, networking, and intelligent operations for regulated enterprises across the UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, and the wider Middle East.
            </p>
            <p className="text-base leading-8 text-[var(--site-muted)]">
              Built on 12+ years of execution across banking, government, healthcare, logistics, ports, retail, and critical infrastructure in India, Enseigner brings field-tested delivery discipline to GCC organisations that need operationally sound, well-integrated infrastructure.
            </p>
            <p className="text-base leading-8 text-[var(--site-gold)]">
              Enseigner exists to close that gap for GCC enterprises where data sovereignty, compliance, resilience, and multi-site command visibility are board-level priorities.
            </p>
          </div>
        </div>

        <div className="mt-16 border-y border-[var(--site-gold)]/35 bg-[var(--site-card)]/80 p-8 md:p-12">
          <blockquote className="mx-auto max-w-5xl text-center text-[clamp(1.6rem,3.5vw,3rem)] font-black italic leading-tight text-[var(--site-text)]">
            &quot;{visionQuote}&quot;
          </blockquote>
        </div>

        <div className="mt-12 grid gap-px bg-[var(--site-gold)]/15 lg:grid-cols-3">
          {strategicPillars.map((pillar) => (
            <article key={pillar.title} className="bg-[var(--site-card)] p-8">
              <h3 className="text-2xl font-black uppercase leading-tight text-[var(--site-gold)]">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--site-muted)]">{pillar.body}</p>
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
        <div className="grid border border-[var(--site-gold)]/15 bg-[var(--site-gold)]/10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.value} className="relative border-b border-[var(--site-gold)]/15 bg-[var(--site-card)]/80 p-8 transition hover:bg-[var(--site-card-hover)] sm:border-r lg:border-b-0">
                <span className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-[var(--site-gold)]" />
                <Icon className="mb-5 text-[var(--site-gold)]" size={24} strokeWidth={1.5} />
                <div className="text-5xl font-black leading-none text-[var(--site-text)]">{metric.value}</div>
                <h3 className="mt-3 text-base font-black uppercase tracking-[0.07em] text-[var(--site-gold)]">{metric.label}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--site-muted)]">{metric.sub}</p>
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
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase leading-none text-[var(--site-text)]">What We Do</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--site-muted)]">
            Six integrated practice areas covering enterprise infrastructure, physical security, data centre, networking, command visibility, and AI-driven operations.
          </p>
        </div>

        <div className="grid gap-px bg-[var(--site-gold)]/15 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.code} className="group relative flex min-h-[320px] flex-col gap-4 bg-[var(--site-card)] p-8 transition hover:bg-[var(--site-card-hover)]">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--site-gold)]/55">{service.code}</span>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--site-gold)]/35 text-[var(--site-gold)]">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="text-2xl font-black uppercase leading-tight text-[var(--site-text)]">{service.title}</h3>
                </div>
                <p className="grow text-sm leading-7 text-[var(--site-muted)]">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="border border-[var(--site-gold)]/25 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--site-gold)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[linear-gradient(to_right,var(--site-gold),transparent)] opacity-0 transition group-hover:opacity-100" />
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
            <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase leading-none text-[var(--site-text)]">
              Enterprise Data Centre & AI Solutions
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--site-muted)]">
              Built for regulated GCC enterprise — sovereign, scalable, and operationally sound.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-5 gap-px bg-[var(--site-gold)]/20">
              {deliveryModel.map((step) => (
                <div key={step} className="bg-[var(--site-card)] px-3 py-5 text-center font-mono text-[10px] font-black uppercase tracking-[0.08em] text-[var(--site-gold)]">
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-px bg-[var(--site-gold)]/15 lg:grid-cols-2">
          {dataCentreCapabilities.map((capability, index) => (
            <article key={capability} className="flex gap-5 bg-[var(--site-card)] p-7">
              <span className="font-mono text-sm font-black text-[var(--site-gold)]">0{index + 1}</span>
              <p className="text-sm leading-7 text-[var(--site-text)]">{capability}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-px bg-[var(--site-gold)]/15 md:grid-cols-4">
          {[
            ["End-to-End Delivery", "Consultancy, design, supply, implementation, and AMC — one partner for the full lifecycle"],
            ["200+ OEM Partners", "HPE · Dell · Cisco · Fortinet · Hikvision · Axis · NetApp and 200+ brands"],
            ["Operational Continuity", "10,000+ installations delivered across complex enterprise environments"],
            ["Scalable Architecture", "From single site to enterprise-wide multi-location deployments"],
          ].map(([title, body]) => (
            <div key={title} className="bg-[var(--site-card)] p-6">
              <h3 className="text-xl font-black uppercase text-[var(--site-gold)]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--site-muted)]">{body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--site-muted)]">
          ISO 14001 Certified · ASCB(E) Accredited · Electronic Security Association of India Member · GCC compliance-ready delivery model
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
            <h2 className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-black uppercase leading-none text-[var(--site-text)]">
              AI-Enabled Operations <br />
              <span className="text-[var(--site-gold)]">Built on Enterprise</span> <br />
              Infrastructure
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-[var(--site-muted)]">
              Enseigner&apos;s AI layer sits on top of proven physical infrastructure. Computer vision, edge analytics, and command intelligence turn site activity into operational visibility.
            </p>
            <div className="mt-5 flex flex-wrap gap-5 font-mono text-xs uppercase tracking-[0.08em]">
              <span className="text-[#1a9e6d]">On-Premise AI Processing</span>
              <span className="text-[var(--site-muted)]">On-Premise Data by Design</span>
              <span className="text-[var(--site-muted)]">UAE PDPL · Saudi NDMO · GCC Privacy Ready</span>
            </div>
          </div>
        </div>

        <div className="border border-[var(--site-gold)]/20 bg-[var(--site-card)]/80">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--site-gold)]/15 px-5 py-4">
            <div className="flex items-center gap-5">
              <span className="flex gap-1.5">
                {["#c0392b", "#d4a017", "#1a9e6d"].map((color) => (
                  <span key={color} className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
                ))}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--site-muted)]">Centralised Command · Distributed Intelligence</span>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--site-gold)]">On-Premise by Design</span>
          </div>

          <div className="grid gap-px bg-[var(--site-gold)]/10 p-px sm:grid-cols-2 xl:grid-cols-3">
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
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--site-gold)]/70">
                      <Icon size={16} strokeWidth={1.5} />
                      {module.code}
                    </span>
                    <span className="border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em]" style={{ color: statusColor[module.status], borderColor: statusColor[module.status] }}>
                      {module.status}
                    </span>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--site-muted)]">{module.label}</div>
                  <div className={`mt-2 text-4xl font-black leading-none ${isActive ? "text-[var(--site-gold)]" : "text-[var(--site-text)]"}`}>{module.value}</div>
                  <div className="mt-1 text-xs text-[var(--site-muted)]">{module.unit}</div>
                  <div className="mt-3 font-mono text-[10px] uppercase text-[#1a9e6d]">{module.status}</div>
                </button>
              );
            })}
          </div>
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
            <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase leading-none text-[var(--site-text)]">
              Built for the GCC&apos;s Most <br /> Demanding Sectors
            </h2>
          </div>
          <p className="max-w-md text-base leading-8 text-[var(--site-muted)]">
            Sector-specific infrastructure expertise across regulated, distributed, and mission-critical enterprise environments.
          </p>
        </div>

        <div className="grid gap-px bg-[var(--site-gold)]/15 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <article key={industry.code} className="group relative min-h-[260px] bg-[var(--site-card)] p-7 transition hover:bg-[var(--site-card-hover)]">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--site-gold)]/45">{industry.code}</span>
                <div className="my-5 flex h-12 w-12 items-center justify-center border border-[var(--site-gold)]/25 text-[var(--site-muted)] transition group-hover:border-[var(--site-gold)] group-hover:text-[var(--site-gold)]">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black uppercase leading-tight text-[var(--site-text)]">{industry.label}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--site-muted)]">{industry.desc}</p>
                <span className="absolute bottom-0 right-0 h-7 w-7 border-b-2 border-r-2 border-transparent transition group-hover:border-[var(--site-gold)]" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DeploymentRecord() {
  return (
    <section id="deployments" className="relative bg-[var(--site-bg-deep)] py-24">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-[linear-gradient(to_right,transparent,rgba(201,168,76,0.45)_30%,rgba(201,168,76,0.45)_70%,transparent)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14">
          <SectionLabel>Deployment Track Record</SectionLabel>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase leading-none text-[var(--site-text)]">Enterprise Credibility Built Over 12 Years</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--site-muted)]">
            A cross-sector portfolio of enterprise deployments demonstrating deep technical capability and India-scale execution that can support GCC transformation programs.
          </p>
        </div>

        <div className="grid gap-px bg-[var(--site-gold)]/15 lg:grid-cols-2">
          {deployments.map((deployment) => (
            <article key={deployment.sector} className="bg-[var(--site-card)] p-8">
              <div className="mb-7 flex flex-wrap items-center gap-4">
                <span className="bg-[var(--site-gold)] px-3 py-1 font-mono text-[11px] font-black uppercase tracking-[0.12em] text-[var(--site-bg)]">{deployment.sector}</span>
                <span className="text-base font-black uppercase tracking-[0.06em] text-[var(--site-muted)]">{deployment.label}</span>
              </div>
              <div className="space-y-5">
                {deployment.projects.map((project) => (
                  <div key={project} className="flex gap-4 border-b border-[var(--site-gold)]/10 pb-5 last:border-b-0 last:pb-0">
                    <span className="mt-1 w-0.5 shrink-0 bg-[var(--site-gold)]/35" />
                    <p className="text-sm leading-7 text-[var(--site-text)]">{project}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OEMPartners() {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    let pos = 0;
    const animate = () => {
      if (rowRef.current) {
        pos -= 0.45;
        const half = rowRef.current.scrollWidth / 2;
        if (Math.abs(pos) >= half) pos = 0;
        rowRef.current.style.transform = `translateX(${pos}px)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="partners" className="overflow-hidden bg-[var(--site-bg)] py-24">
      <div className="mx-auto mb-12 max-w-7xl px-5 sm:px-8">
        <SectionLabel>OEM Partner Ecosystem</SectionLabel>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase leading-none text-[var(--site-text)]">200+ Global OEM Technology Partners</h2>
          <p className="max-w-md text-base leading-8 text-[var(--site-muted)]">
            Direct relationships with global technology OEMs for security, compute, storage, networking, cabling, and data centre systems.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(to_right,var(--site-bg),transparent)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(to_left,var(--site-bg),transparent)]" />
        <div className="overflow-hidden">
          <div ref={rowRef} className="flex will-change-transform">
            {[...partners, ...partners].map((partner, index) => (
              <div key={`${partner}-${index}`} className="mx-2 flex h-24 min-w-[190px] shrink-0 flex-col items-center justify-center border border-[var(--site-gold)]/15 bg-[var(--site-card)] px-6 text-center transition hover:border-[var(--site-gold)]/45 hover:bg-[var(--site-card-hover)]">
                <div className="text-lg font-black text-[var(--site-text)]">{partner}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--site-gold)]/55">Technology OEM</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ themeMode }: { themeMode: ThemeMode }) {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--site-bg-deep)] pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[var(--site-gold)]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--site-gold)]">Start a Conversation</span>
            <span className="h-px w-10 bg-[var(--site-gold)]" />
          </div>
          <h2 className="text-[clamp(2.7rem,6vw,5.3rem)] font-black uppercase leading-none text-[var(--site-text)]">
            Enterprise Success in the GCC <br />
            <span className="text-[var(--site-gold)]">Depends on Infrastructure Integration</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[var(--site-muted)]">
            Enterprise success in the GCC will depend on sovereign AI, infrastructure integration, operational execution, and compliance alignment. Enseigner is built to deliver that.
          </p>
          <a href="mailto:abu@enseigner.in" className="mt-10 inline-flex items-center gap-3 bg-[var(--site-gold)] px-10 py-5 text-base font-black uppercase tracking-[0.1em] text-[var(--site-bg)] transition hover:bg-[var(--site-gold-hover)]">
            Contact Enseigner <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid gap-px bg-[var(--site-gold)]/15 lg:grid-cols-3">
          {[
            { icon: Users, label: "Founder & MD", value: "Abubucker Mansoor Mohamed", sub: "Dubai-led. GCC-focused. India-scale execution." },
            { icon: Mail, label: "Email", value: "abu@enseigner.in", sub: "Founder contact from company profile" },
            { icon: MapPin, label: "Website", value: "www.enseigner.in", sub: "Engineers the Systems of the World" },
          ].map((contact) => {
            const Icon = contact.icon;
            return (
              <div key={contact.label} className="flex gap-4 bg-[var(--site-card)] p-8">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--site-gold)]/25 text-[var(--site-gold)]">
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <div className="font-mono text-[11px] font-black uppercase tracking-[0.12em] text-[var(--site-gold)]">{contact.label}</div>
                  <div className="mt-1 text-xl font-black text-[var(--site-text)]">{contact.value}</div>
                  <div className="mt-1 text-sm text-[var(--site-muted)]">{contact.sub}</div>
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
          <p className="text-sm text-[var(--site-muted)]">© 2026 Enseigner · Engineers the Systems of the World</p>
          <div className="flex gap-5 text-sm text-[var(--site-muted)]">
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
      <DataCentreAISection />
      <AISection />
      <Industries />
      <DeploymentRecord />
      <OEMPartners />
      <FinalCTA themeMode={themeMode} />
    </main>
  );
}
