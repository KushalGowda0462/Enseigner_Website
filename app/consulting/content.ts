
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
        heroPill: "INTELLIGENT INSIGHTS",
        title: "Data Analytics & AI Solutions",
        highlightWord: "AI Solutions",
        subtitle: "Turn your data into a strategic asset with GCC-compliant warehousing and sovereign AI models.",
        primaryCta: { label: "Schedule Consultation", href: "/contact" },
        secondaryCta: { label: "View Case Studies", href: "#case-example" },
        heroImage: { src: "/placeholder.svg", alt: "Data and AI Dashboard" },
        sections: [
            {
                heading: "Enterprise Data Warehousing",
                body: "Consolidate your siloed data into a single source of truth using high-performance, compliant storage architectures designed for the region.",
                bullets: ["Unified Data Lakes", "Real-time ETL Pipelines", "Governance & Audit Trails"]
            },
            {
                heading: "Sovereign AI Integration",
                body: "Deploy machine learning models on our sovereign GPU infrastructure, ensuring your intellectual property and sensitive data never leave the GCC.",
                bullets: ["Predictive Analytics", "NLP & LLM Deployment", "Computer Vision"]
            }
        ],
        steps: [
            { title: "Assessment", description: "We analyze your data maturity and compliance requirements." },
            { title: "Architecture", description: "Design a sovereign data platform tailored to your goals." },
            { title: "Migration & Training", description: "Securely migrate data and train models on local GPUs." },
            { title: "Production", description: "Deploy with continuous monitoring and governance." }
        ],
        caseExample: {
            problem: "A major UAE bank struggled with fragmented customer data and strict traversing regulations.",
            solution: "Implemented a sovereign data warehouse with on-premise AI scoring models.",
            outcome: "30% increase in cross-sell opportunities while remaining 100% compliant with Central Bank and PDPL regulations."
        },
        faq: [
            { q: "Is my data safe?", a: "Yes, all data remains resident within the GCC on our sovereign infrastructure." },
            { q: "Can we use open source LLMs?", a: "Absolutely. We specialize in hosting and fine-tuning open source models securely." }
        ]
    },
    "infrastructure-services": {
        slug: "infrastructure-services",
        heroPill: "ROBUST FOUNDATIONS",
        title: "Data Center & Infrastructure",
        highlightWord: "Infrastructure",
        subtitle: "High-performance compute and storage solutions built for mission-critical and regulated workloads.",
        primaryCta: { label: "Build Your Infra", href: "/contact" },
        secondaryCta: { label: "Explore Specs", href: "#specs" },
        heroImage: { src: "/placeholder.svg", alt: "Server Room" },
        sections: [
            {
                heading: "HPC & GPU Clusters",
                body: "Access state-of-the-art NVIDIA DGX and accelerated computing clusters for intensive simulations and AI training.",
                bullets: ["NVIDIA H100/A100 Clusters", "Low-latency InfiniBand Networking", "Scalable Storage"]
            },
            {
                heading: "Networking & Virtualization",
                body: "Enterprise-grade networking leveraging Cisco ACI and VMware stacks for maximum reliability and control.",
                bullets: ["Software-Defined Networking", "Hybrid Cloud Connectivity", "Zero-Trust Security"]
            }
        ],
        steps: [
            { title: "Planning", description: "Define compute, storage, and network requirements." },
            { title: "Procurement", description: "Source best-in-class hardware optimized for your needs." },
            { title: "Installation", description: "Physical deployment and configuration in Tier-3+ data centers." },
            { title: "Management", description: "24/7 monitoring and proactive maintenance." }
        ],
        caseExample: {
            problem: "A government entity needed a dedicated high-performance cluster for climate modeling.",
            solution: "Deployed a customized HPC environment with parallel file systems.",
            outcome: "Reduced simulation time by 60% with full data residency compliance."
        },
        faq: [
            { q: "What hardware do you use?", a: "We partner with leaders like NVIDIA, Cisco, and NetApp." },
            { q: "Is colocation available?", a: "Yes, we offer both managed infrastructure and colocation services." }
        ]
    },
    "cloud-consulting": {
        slug: "cloud-consulting",
        heroPill: "CLOUD MODERNIZATION",
        title: "Cloud Migration Services",
        highlightWord: "Migration",
        subtitle: "Modernize your legacy applications with secure, cost-effective cloud strategies aligned with GCC residency laws.",
        primaryCta: { label: "Start Migration", href: "/contact" },
        secondaryCta: { label: "Our Process", href: "#process" },
        heroImage: { src: "/placeholder.svg", alt: "Cloud Concept" },
        sections: [
            {
                heading: "Strategy & Roadmap",
                body: "We assess your application portfolio to determine the best 6R strategy (Rehost, Refactor, etc.) for each workload.",
                bullets: ["TCO Analysis", "Dependency Mapping", "Risk Assessment"]
            },
            {
                heading: "Hybrid Cloud Landing Zones",
                body: "Build secure, compliant landing zones that seamlessly integrate on-premise assets with sovereign cloud resources.",
                bullets: ["Infrastructure as Code", "Identity & Access Management", "Network Connectivity"]
            }
        ],
        steps: [
            { title: "Discovery", description: "Inventory analysis and dependency mapping." },
            { title: "Design", description: "Architecting the target state and landing zone." },
            { title: "Migrate", description: "Executing the migration (Lift & Shift or Modernize)." },
            { title: "Optimize", description: "Post-migration cost and performance tuning." }
        ],
        caseExample: {
            problem: "A retail chain had aging on-premise servers causing downtime during peak sales.",
            solution: "Migrated e-commerce stack to a scalable private cloud container platform.",
            outcome: "99.99% availability achieved with auto-scaling capabilities."
        },
        faq: [
            { q: "How long does migration take?", a: "Timeline varies by complexity, usually 3-6 months for mid-sized estates." },
            { q: "Do you support hybrid setups?", a: "Yes, hybrid cloud is a core specialty of ours." }
        ]
    },
    "security-governance": {
        slug: "security-governance",
        heroPill: "COMPLIANCE FRIST",
        title: "Security & Governance",
        highlightWord: "Governance",
        subtitle: "Protect your assets and ensure compliance with UAE PDPL, Saudi NDMO, and global standards.",
        primaryCta: { label: "Assess Risk", href: "/contact" },
        secondaryCta: { label: "Frameworks", href: "#frameworks" },
        heroImage: { src: "/placeholder.svg", alt: "Shield and Lock" },
        sections: [
            {
                heading: "Regulatory Compliance",
                body: "We help you navigate the complex landscape of GCC data regulations, ensuring you pass audits and avoid penalties.",
                bullets: ["Gap Analysis", "Policy Development", "Audit Preparation"]
            },
            {
                heading: "Cybersecurity Operations",
                body: "End-to-end security services including SOC, threat hunting, and vulnerability retention.",
                bullets: ["Managed SOC", "Penetration Testing", "Incident Response"]
            }
        ],
        steps: [
            { title: "Audit", description: "Current state assessment against required frameworks." },
            { title: "Remediate", description: "Closing gaps and implementing controls." },
            { title: "Verify", description: "Testing effectiveness of new security measures." },
            { title: "Monitor", description: "Continuous compliance monitoring." }
        ],
        caseExample: {
            problem: "Fintech startup blocked from launch due to unmet strict cyber regulations.",
            solution: "Implemented a complete ISO 27001 and NESA compliant framework.",
            outcome: "Secured regulatory approval in 4 months and successfully launched."
        },
        faq: [
            { q: "Which standards do you cover?", a: "ISO 27001, NESA, ISR, SAMA, PDPL, GDPR, and more." },
            { q: "Do you offer vCISO services?", a: "Yes, we provide virtual CISO services for strategic guidance." }
        ]
    }
};
