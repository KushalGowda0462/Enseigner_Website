// REFERENCE PROJECTS — India delivery track record (Website Brief, s.9).
//
// These were previously rendered inline on the homepage. They are secondary for a GCC audience,
// so they now live on /reference-projects as individually editable, blog-style entries.
//
// TO ADD A NEW PROJECT (e.g. the Chennai Port write-up): copy one object below, give it a unique
// `slug`, and append it to the array. Nothing else needs to change — the index page and the
// detail page both read from here.

export interface ReferenceProject {
  slug: string;
  sector: string;
  sectorLabel: string;
  title: string;
  summary: string;
  date: string;
  scope: string[];
  highlights: string[];
  body: string[];
}

export const referenceProjects: ReferenceProject[] = [
  {
    slug: "bfsi-multi-site-branch-rollout",
    sector: "BFSI",
    sectorLabel: "Banking, Financial Services & Insurance",
    title: "Multi-Site Branch Infrastructure Rollout for BFSI",
    summary:
      "Branch-network delivery across India's largest lenders and NBFCs, executed to a repeatable per-site standard across thousands of locations.",
    date: "Company Profile 2026",
    scope: ["Branch Rollout", "Multi-Site Delivery", "Monitoring", "Maintenance"],
    highlights: [
      "Muthoot Finance — 3,700 branches",
      "Manappuram Finance — 3,000 branches",
      "Canara Bank, HDB Financial Services, South Indian Bank, IIFL, HDFC ERGO, Cholamandalam Finance, Reserve Bank of India",
    ],
    body: [
      "Enseigner's BFSI track record spans Canara Bank, HDB Financial Services, Manappuram Finance, Muthoot Finance, South Indian Bank, IIFL, HDFC ERGO, Cholamandalam Finance, and the Reserve Bank of India.",
      "Deployments at this scale are an execution problem before they are a technology problem: thousands of geographically dispersed sites, each requiring the same standard of installation quality, OEM coordination, commissioning discipline, and long-term serviceability.",
      "The delivery model covered consultancy, design, supply, implementation, and ongoing support — with one accountable partner from architecture through steady-state operations.",
      "This is the delivery backbone that now underwrites Enseigner's work for GCC enterprises.",
    ],
  },
  {
    slug: "government-public-sector-infrastructure",
    sector: "GOV",
    sectorLabel: "Government, Public Sector & Defence",
    title: "Government & Public Sector Infrastructure Programmes",
    summary:
      "Networking, command visibility, and operational support for central government bodies, public-sector undertakings, and defence establishments.",
    date: "Company Profile 2026",
    scope: ["Networking", "Command & Control", "Operational Support"],
    highlights: [
      "BSNL, NLC India, EPFO, MEPZ",
      "Officers Training Academy Chennai, Indian Coast Guard",
      "Office of the Development Commissioner",
    ],
    body: [
      "Engagements across BSNL, NLC India, EPFO, MEPZ, the Officers Training Academy Chennai, the Indian Coast Guard, and the Office of the Development Commissioner.",
      "Public-sector programmes carry procurement, audit, and compliance requirements that shape the technical design as much as the operational one. Delivery had to satisfy documented process at every stage — from CAD design and bill of materials through commissioning sign-off.",
      "Scope covered enterprise networking, centralised command and control visibility, and long-running operational support across government operations, defence establishments, and port-linked public infrastructure.",
    ],
  },
  {
    slug: "ports-logistics-data-centre",
    sector: "PORT",
    sectorLabel: "Ports & Logistics",
    title: "Port & Logistics Data Centre and Site Infrastructure",
    summary:
      "Active data centre build, enterprise compute and storage, DR architecture, and structured cabling across container terminals and logistics operators.",
    date: "Company Profile 2026",
    scope: ["Data Centre", "Compute & Storage", "DR", "Structured Cabling"],
    highlights: [
      "Chennai Port Trust",
      "Container Corporation of India, Dakshin Bharat Gateway Terminal",
      "SANS CFS, Distribution Logistics Infrastructure",
      "100+ enterprise sites",
    ],
    body: [
      "Work across Chennai Port Trust, Container Corporation of India, Dakshin Bharat Gateway Terminal, SANS CFS, and Distribution Logistics Infrastructure.",
      "The programme included an active data centre build with enterprise compute and storage deployments on HPE, Dell, and NetApp platforms, disaster recovery architecture, and structured cabling delivered across more than 100 enterprise sites.",
      "Port and terminal environments impose constraints most enterprise sites do not: continuous operations, harsh physical conditions, and no tolerance for downtime in cargo movement. Infrastructure had to be commissioned around live operations rather than during them.",
      "The outcome is modular, scalable infrastructure able to support mission-critical operations and future intelligent workloads.",
    ],
  },
  {
    slug: "retail-ecommerce-multi-location",
    sector: "RTL",
    sectorLabel: "Retail, E-Commerce & Consumer Brands",
    title: "Multi-Location Rollouts for Retail & E-Commerce",
    summary:
      "Distributed store and warehouse infrastructure for national retail and e-commerce brands, delivered as a repeatable multi-branch rollout.",
    date: "Company Profile 2026",
    scope: ["Multi-Location Rollout", "Store Infrastructure", "Analytics"],
    highlights: [
      "Flipkart — 200 branches",
      "Decathlon, Lenskart, The Chennai Silks, Nilgiris",
      "Royal Enfield, Zudio, Westside, Indospace Facilities",
    ],
    body: [
      "Rollouts for Decathlon, Flipkart, Lenskart, The Chennai Silks, Nilgiris, Royal Enfield, Zudio, Westside, and Indospace Facilities.",
      "Retail rollouts are won or lost on cadence. Store openings do not wait for infrastructure, so delivery ran to the retail calendar — each site provisioned, installed, and commissioned inside a fixed window, then folded into central monitoring.",
      "Flipkart alone covered 200 branches across distributed retail and logistics environments.",
      "The same repeatable rollout model now supports footfall and dwell-time analytics workloads for retail clients.",
    ],
  },
];

export function getReferenceProject(slug: string) {
  return referenceProjects.find((project) => project.slug === slug);
}
