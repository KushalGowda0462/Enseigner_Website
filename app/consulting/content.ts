export type ConsultingSlug = "data-and-ai" | "infrastructure-services" | "cloud-consulting" | "security-governance";

export interface ConsultingDetail {
    slug: ConsultingSlug;
    heroPill: string;
    title: string;
    highlightWord?: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    heroImage: { src: string; alt: string };
    sections: Array<{
        heading: string;
        body: string;
        bullets?: string[];
        image?: { src: string; alt: string };
    }>;
    steps: Array<{ title: string; description: string }>;
    caseExample: { problem: string; solution: string; outcome: string };
    faq: Array<{ q: string; a: string }>;
}

export const consultingDetails: Record<ConsultingSlug, ConsultingDetail> = {
    "data-and-ai": {
        slug: "data-and-ai",
        heroPill: "AI & COMPUTER VISION",
        title: "Computer Vision & Intelligent Operations",
        highlightWord: "Intelligent Operations",
        subtitle: "Enterprise-grade operational visibility on-premise, compliant, and always on.",
        primaryCta: { label: "Discuss Use Case", href: "/contact" },
        secondaryCta: { label: "View Applications", href: "#case-example" },
        heroImage: { src: "/services/data-ai.avif", alt: "Computer vision and intelligent operations" },
        sections: [
            {
                heading: "Workforce & Attendance Intelligence",
                body: "Contactless identification, real-time presence monitoring, exception alerting, HRMS and payroll integration, restricted-zone enforcement, and automated compliance reporting.",
                bullets: ["Contactless and accurate attendance", "HRMS and payroll API integration", "Restricted zone access logs"]
            },
            {
                heading: "Security, Access & Retail Intelligence",
                body: "Use existing camera infrastructure for anomaly detection, intrusion prevention, audit trails, visitor flow analysis, dwell time analytics, POS reconciliation, and customer behaviour insight.",
                bullets: ["Anomaly and intrusion detection", "Timestamped audit trails", "Visitor flow and dwell analytics"]
            }
        ],
        steps: [
            { title: "Assess", description: "Review camera coverage, access systems, data flows, and operational goals." },
            { title: "Integrate", description: "Connect video, HR, ERP, payroll, access control, and BI systems." },
            { title: "Deploy", description: "Run on-premise AI inference and dashboards inside the enterprise environment." },
            { title: "Operate", description: "Monitor exceptions, security events, reporting, and multi-site visibility." }
        ],
        caseExample: {
            problem: "Distributed enterprise sites relied on manual checks and fragmented security monitoring.",
            solution: "Enseigner connected existing cameras, access control, and enterprise systems into an on-premise intelligent operations layer.",
            outcome: "Teams gained real-time command visibility, audit-ready reporting, and scalable rollout from pilot site to enterprise network."
        },
        faq: [
            { q: "Does data leave our environment?", a: "The platform can process AI inference on-premise so biometric and operational data stays within the client's environment." },
            { q: "Can it use existing cameras?", a: "Yes. Enseigner is designed to turn existing surveillance infrastructure into intelligent operational visibility." }
        ]
    },
    "infrastructure-services": {
        slug: "infrastructure-services",
        heroPill: "DATA CENTRE & AI",
        title: "Enterprise Data Centre & Infrastructure",
        highlightWord: "Data Centre",
        subtitle: "Reliable, scalable, and operationally sound infrastructure for Indian enterprise workloads.",
        primaryCta: { label: "Plan Infrastructure", href: "/contact" },
        secondaryCta: { label: "Explore Delivery", href: "#process" },
        heroImage: { src: "/services/infrastructure.avif", alt: "Enterprise data centre infrastructure" },
        sections: [
            {
                heading: "Data Centre Design & Build",
                body: "Compute, storage, backup, networking infrastructure, disaster recovery, and structured cabling for mission-critical operations.",
                bullets: ["Enterprise servers and storage", "DR and backup architecture", "Structured cabling and passive infra"]
            },
            {
                heading: "OEM-Backed Infrastructure",
                body: "Delivery across HPE, Dell, Cisco, Fortinet, NetApp, NVIDIA, Veritas, Veeam, VMware, and 200+ brands across enterprise systems.",
                bullets: ["200+ OEM partner ecosystem", "Server and compute platforms", "Storage, network, and security layers"]
            }
        ],
        steps: [
            { title: "Consultancy", description: "Define capacity, resilience, risk, site readiness, and operating requirements." },
            { title: "Design", description: "Create architecture, bill of materials, CAD layouts, and implementation plan." },
            { title: "Implement", description: "Supply, deploy, configure, test, and commission the environment." },
            { title: "Support", description: "Provide AMC, maintenance, managed operations, and lifecycle support." }
        ],
        caseExample: {
            problem: "Enterprise environments needed reliable data centre foundations for security, operations, and intelligent workloads.",
            solution: "Enseigner designed and delivered compute, storage, network fabric, DR, and structured cabling with OEM-backed implementation.",
            outcome: "Mission-critical operations gained scalable architecture, business continuity readiness, and one accountable lifecycle partner."
        },
        faq: [
            { q: "Do you only consult or also implement?", a: "Enseigner covers consultancy, design, supply, implementation, commissioning, AMC, and managed operations." },
            { q: "Which sectors do you support?", a: "Banking, government, healthcare, ports, logistics, education, retail, manufacturing, and critical infrastructure." }
        ]
    },
    "cloud-consulting": {
        slug: "cloud-consulting",
        heroPill: "NETWORKING & COMMAND CENTRE",
        title: "Enterprise Networking & Command Centre Operations",
        highlightWord: "Command Centre",
        subtitle: "High-performance infrastructure fabric for AI, data centre, and regulated enterprise environments.",
        primaryCta: { label: "Design Command Layer", href: "/contact" },
        secondaryCta: { label: "Our Process", href: "#process" },
        heroImage: { src: "/services/premium_photo-way.avif", alt: "Enterprise networking and command centre" },
        sections: [
            {
                heading: "Data Centre Networking",
                body: "High-performance network fabrics, software-defined networking, policy-driven infrastructure management, and multi-site data centre interconnect.",
                bullets: ["AI and traditional workload fabrics", "Policy-driven infrastructure", "Multi-site topology optimisation"]
            },
            {
                heading: "Command Centre & AIOps",
                body: "Unified management platforms with real-time operational visibility, predictive analytics, anomaly detection, SLA tracking, and role-based command views.",
                bullets: ["AIOps-driven automation", "Predictive alerts before service impact", "Enterprise HQ and distributed site visibility"]
            }
        ],
        steps: [
            { title: "Discover", description: "Map sites, systems, networks, teams, risks, and existing monitoring tools." },
            { title: "Unify", description: "Create a command architecture across operations, security, network, and compliance visibility." },
            { title: "Automate", description: "Introduce AIOps, alerts, SLA tracking, and predictive analytics." },
            { title: "Scale", description: "Expand from one location to enterprise-wide command operations." }
        ],
        caseExample: {
            problem: "Multi-site teams lacked a single operational view across infrastructure, security, and performance.",
            solution: "Enseigner integrated network observability, security monitoring, operational dashboards, and AIOps-driven alerts.",
            outcome: "Leadership and operations teams gained real-time visibility, faster issue response, and stronger SLA governance."
        },
        faq: [
            { q: "Can this integrate with existing tools?", a: "Yes. The command layer is designed to integrate with existing enterprise systems, access control, network, HR, ERP, payroll, and BI environments." },
            { q: "Does this support multi-site operations?", a: "Yes. The architecture scales from single-site command to enterprise-wide distributed visibility." }
        ]
    },
    "security-governance": {
        slug: "security-governance",
        heroPill: "SECURITY-FIRST",
        title: "Security Systems & Governance",
        highlightWord: "Security",
        subtitle: "CCTV, access control, intrusion alarm, fire alarm, audit trails, and compliance-aligned enterprise operations.",
        primaryCta: { label: "Assess Security", href: "/contact" },
        secondaryCta: { label: "View Framework", href: "#case-example" },
        heroImage: { src: "/services/ethernet.avif", alt: "Enterprise security systems" },
        sections: [
            {
                heading: "Security Systems Integration",
                body: "CCTV surveillance, access control, intrusion alarm, burglar alarm, fire alarm, public address, voice evacuation, and intercom systems.",
                bullets: ["Design, supply, installation, and maintenance", "Banking, retail, government, ports, and campuses", "Branch and multi-site rollout support"]
            },
            {
                heading: "Compliance and Evidence Management",
                body: "Zero-trust security architecture, threat detection, incident response, encryption, audit trails, and standards alignment across enterprise and cloud environments.",
                bullets: ["DPDP Act aligned operations", "ISO 27001 and SOC2 readiness", "24/7 security operations and evidence trails"]
            }
        ],
        steps: [
            { title: "Audit", description: "Assess site risk, current systems, coverage, operational gaps, and compliance requirements." },
            { title: "Design", description: "Plan surveillance, access, alarm, command, and reporting architecture." },
            { title: "Deploy", description: "Install, configure, test, commission, and document the system." },
            { title: "Maintain", description: "Provide AMC, monitoring, upgrades, and operational support." }
        ],
        caseExample: {
            problem: "Enterprises needed consistent security operations across branches, campuses, warehouses, and critical sites.",
            solution: "Enseigner delivered integrated surveillance, access control, alarm systems, command visibility, and long-term maintenance.",
            outcome: "Security teams gained consistent monitoring, better evidence management, and scalable support across distributed environments."
        },
        faq: [
            { q: "What security systems do you deliver?", a: "CCTV, access control, intrusion alarm, burglar alarm, fire alarm, PA, voice evacuation, intercom, command centre, and monitoring solutions." },
            { q: "Do you support AMC?", a: "Yes. Enseigner provides post-installation maintenance, AMC, and managed operational support." }
        ]
    }
};
