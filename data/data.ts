
interface Post {
    title: string
    description: string
    author: string
    date: string
    image: string
    tags: string[]
}
export type { Post }
//thsi is blogs content
export const recentPosts: Post[] = [
    {
        title: "Enhancing File Management with a File Filtering System on NAS Devices",
        description: "How a file filtering system on NAS devices can optimize storage, improve security, and streamline file management.?",
        author: "Kumar S",
        date: "10 Jan 2024",
        image: "/blogs/1.avif",
        tags: ["Storage", "Accessability", "NAS"],
    },
    {
        title: "Understanding Multicloud Methodologies: A Game-Changer for Modern IT Infrastructure",
        description:
            "A well-implemented multicloud strategy offers businesses a competitive edge in terms of flexibility, cost-efficiency, and performance. ",
        author: "Desu Das",
        date: "5 May 2024",
        image: "/blogs/2.webp",
        tags: ["Cloud", "Migration"],
    },
    {
        title: "Nutanix AHV vs. VMware: 2025 Virtualization Showdown",
        description: "A quick comparison of Nutanix AHV and VMware, focusing on performance, ease of use, security, and pricing for businesses.",
        author: "Kumar S",
        date: "17 Jan 2025",
        image: "/blogs/3.avif",
        tags: ["Design", "Research"],
    },
]

//thsi is case studies content
export const caseStudies: Post[] = [
    {
        "title": "Enterprise Data Centre Deployment",
        "description": "Data centre design, enterprise compute and storage, disaster recovery architecture, and structured cabling for mission-critical operations.",
        "author": "Enseigner",
        "date": "2 Feb 2025",
        "image": "/studies/1.jpg",
        "tags": ["Data Centre", "Compute", "DR"]
    },
    {
        "title": "Pan-India Security Systems Rollout",
        "description": "CCTV, access control, intrusion alarm, fire alarm, monitoring, and maintenance across branch and site networks.",
        "author": "Enseigner",
        "date": "2 Feb 2025",
        "image": "/studies/2.png",
        "tags": ["Security", "Access Control", "AMC"]
    },
    {
        "title": "Command Centre and AIOps Visibility",
        "description": "Unified operational dashboards, anomaly detection, SLA tracking, and command visibility across distributed enterprise locations.",
        "author": "Enseigner",
        "date": "2 Feb 2025",
        "image": "/studies/3.avif",
        "tags": ["Command Centre", "AIOps", "Monitoring"]
    },
    {
        "title": "Computer Vision for Intelligent Operations",
        "description": "On-premise video analytics, workforce intelligence, access monitoring, retail analytics, and audit-ready reporting.",
        "author": "Enseigner",
        "date": "15 Feb 2025",
        "image": "/studies/3.avif",
        "tags": ["Computer Vision", "Video Analytics", "On-Premise AI"]
    },
    {
        "title": "Hybrid Infrastructure Integration",
        "description": "Multi-site enterprise networking, data centre interconnect, backup, DR, cloud integration, and proactive operations.",
        "author": "Enseigner",
        "date": "20 Feb 2025",
        "image": "/studies/3.avif",
        "tags": ["Networking", "Hybrid Infra", "DRaaS"]
    }
]


//this is success stories content
export const SuccessStories: Post[] = [
    {
        title: "BFSI Branch Security at Scale",
        description: "Security systems, CCTV, access control, intrusion alarm, branch monitoring, and maintenance for large banking and finance networks.",
        author: "Enseigner",
        date: "10 Jan 2024",
        image: "/stories/1.avif",
        tags: ["BFSI", "Branch Security", "Monitoring"],
    },
    {
        title: "Ports, Logistics and Critical Infrastructure",
        description: "Data centre build, surveillance, access control, structured cabling, and critical operations support for infrastructure environments.",
        author: "Enseigner",
        date: "12 Jan 2024",
        image: "/stories/2.png",
        tags: ["Ports", "Logistics", "Critical Operations"],
    },

    {
        title: "Retail and Enterprise Multi-Site Rollouts",
        description: "Multi-location CCTV, access control, monitoring, and rollout support for retail, e-commerce, campuses, and industrial clients.",
        author: "Enseigner",
        date: "15 Jan 2024",
        image: "/stories/3.jpeg",
        tags: ["Retail", "Multi-Site", "AMC"],
    }

]

//this is full blog content
export const FullBlogs = [
    {
        badge: "File Filtering",
        title: "Why Do You Need a File Filtering System on Your NAS?",
        description: "A file filtering system works by analyzing the metadata and content of files stored on your NAS device..",
        Author: {
            name: "Kumar S",
            date: "10 Jan 2024"
        },
        content: [
            {
                para: "As businesses and individuals accumulate more data, keeping track of files manually becomes impractical and time-consuming. The following reasons highlight why integrating a file filtering system into your NAS device can be beneficial As data continues to grow exponentially, effective file management on Network Attached Storage (NAS) devices becomes essential for both performance and security. "
            },
            {
                para: "A file filtering system offers a powerful solution to organize, categorize, and protect files based on specific attributes such as file type, size, or creation date. By automating the filtering process, NAS systems can prioritize critical data, ensure compliance with organizational policies, and free up valuable storage space. Additionally, file filtering enhances security by allowing administrators to set rules for detecting and removing unwanted or outdated files, preventing potential data breaches or system slowdowns. This proactive approach not only optimizes storage capacity but also streamlines data access, making it easier to locate and retrieve essential files. Whether used in small businesses or large enterprises, a file filtering system significantly improves file management efficiency, security, and compliance on NAS devices."
            },
            {
                para: "How Does a File Filtering System Work on NAS Devices? A file filtering system on Network Attached Storage (NAS) devices plays a critical role in managing and securing large volumes of data. It works by applying predefined rules and algorithms to monitor and categorize files stored on the NAS based on specific criteria, such as file type, size, date, user, or content. "
            },
            {
                para: "The system uses metadata and content inspection to filter and sort files, allowing administrators to set policies for automatic archiving, deletion, or encryption. For example, it can automatically move large or infrequently accessed files to lower-cost storage tiers, or flag sensitive files for encryption based on compliance requirements. "
            },
            {
                para: "The filtering system can also scan for duplicate files and remove unnecessary copies, optimizing storage efficiency. Additionally, it enables real-time monitoring, sending alerts if specific conditions—like unauthorized file types or sizes—are met. By automating these processes, a file filtering system on NAS devices enhances data security, storage optimization, and compliance, while reducing manual intervention and minimizing human error."
            }
        ],
        images: [
            {
                src: "/empty-inblog.png",
                alt: "Featured image"
            },
            {
                src: "/blogs/1.avif",
                alt: "Blog hero image"
            }]
    },
    {
        badge: "MultiCloud",
        title: "Automation in IT: Streamlining Operations & Cutting Costs",
        description: "Learn how automation is revolutionizing IT by simplifying provisioning, reducing costs, minimizing errors, and boosting scalability in complex environments.",
        Author: {
            name: "Desu das",
            date: "5 May 2024"

        },
        content: [
            {
                para: "What is Multicloud?"
            },
            {
                para: "Multicloud refers to the use of more than one cloud service provider to distribute workloads across various platforms, combining public and private cloud environments. This approach helps businesses select the best services for each need, ensuring optimal performance and cost efficiency.Key Benefits of Multicloud A multicloud strategy involves utilizing multiple cloud services from different providers to optimize performance, cost, and flexibility. One of the primary benefits is avoidance of vendor lock-in, giving organizations the freedom to choose the best cloud solutions for different workloads, whether it's for compute, storage, or machine learning. This flexibility enhances resilience by distributing workloads across multiple platforms, ensuring high availability and reducing the risk of downtime caused by a single cloud provider’s failure. "
            },
            {
                para: "A multicloud setup also facilitates optimized performance, as workloads can be dynamically allocated to the cloud environment that offers the best latency, bandwidth, or processing power for a given task. In terms of cost efficiency, businesses can leverage competitive pricing models from different providers, reducing the overall cost of operations. Additionally, data sovereignty is a significant advantage, as organizations can choose specific regions and compliance standards for storing sensitive data. Lastly, multicloud enables innovation, as teams can experiment with diverse cloud-native tools and services to develop cutting-edge applications. This flexibility and scalability make multicloud an essential strategy for modern enterprises."
            },
            {
                para: "Multicloud Methodologies Adopting a multicloud strategy requires well-defined methodologies to effectively manage and optimize diverse cloud environments. One key approach is cloud load balancing, which intelligently distributes workloads across multiple cloud providers, ensuring optimal performance, reducing latency, and preventing resource overloading on any single provider. Cloud bursting is another critical methodology, allowing organizations to extend their private cloud environments to public clouds during peak demand, optimizing resource usage and cost efficiency. "
            },
            {
                para: "Hybrid cloud integration blends private and public clouds, enabling businesses to keep sensitive workloads on private clouds while utilizing public clouds for less-critical applications, thus balancing security and scalability. Containerization with tools like Kubernetes is also fundamental in multicloud, as it enables seamless portability of applications across different cloud platforms, minimizing dependencies and increasing flexibility. Finally, effective multicloud security and governance are essential; enterprises must implement centralized security policies, identity management, and continuous monitoring across all cloud environments to ensure compliance, data protection, and operational consistency. By leveraging these methodologies, businesses can enhance agility, reduce risk, and maximize the value of their multicloud investments."
            }
        ],
        images: [
            {
                src: "/empty-inblog.png",
                alt: "Featured image"
            },
            {
                src: "/blogs/2.webp",
                alt: "Blog hero image"
            }]
    },
    {
        badge: "Nutanix AHV",
        title: "Nutanix AHV vs. VMware: Virtualization Leader in 2025",
        description: "Discover multicloud strategies like load balancing, cloud bursting, and hybrid integration to enhance IT performance, flexibility, and security.",
        Author: {
            name: "Desu das",
            date: "5 May 2024"

        },
        content: [
            {
                para: "As businesses seek efficient virtualization solutions, Nutanix AHV and VMware vSphere stand out as top contenders. Nutanix AHV is part of Nutanix’s hyper-converged infrastructure (HCI) solution, offering a cost-effective, simplified, and scalable platform that integrates tightly with Nutanix's compute, storage, and networking. "
            },
            {
                para: "It’s a great choice for smaller teams and organizations looking for easy management with its intuitive Nutanix Prism interface. In contrast, VMware vSphere is the industry leader, offering advanced features like vMotion, HA, and extensive third-party integrations, making it the preferred choice for larger enterprises with complex needs and legacy applications.  "
            },
            {
                para: "In terms of cost, Nutanix AHV shines by being free with Nutanix’s HCI, while VMware vSphere can become costly with its licensing model based on CPU sockets. For performance, scalability, and advanced features, VMware vSphere excels in large-scale, enterprise environments. "
            },
            {
                para: "However, Nutanix AHV wins when it comes to ease of management and reducing the complexity of virtualization setups. VMware vSphere also has a superior support and ecosystem, given its longer market presence and wider integration options. "
            },
            {
                para: "Ultimately, Nutanix AHV is ideal for cost-conscious organizations seeking simplicity and scalability, while VMware vSphere is better suited for enterprises with intricate virtualization needs, advanced capabilities, and legacy application support. The right choice depends on your business size, complexity, and long-term infrastructure goals."
            }
        ],
        images: [
            {
                src: "/empty-inblog.png",
                alt: "Featured image"
            },
            {
                src: "/blogs/3.avif",
                alt: "Blog hero image"
            }]
    },
]
//full success stories

export const FullSuccessStories = [
    {
        "badge": "BFSI Security",
        "title": "BFSI Branch Security at Scale",
        "description": "Security systems, CCTV, access control, intrusion alarm, branch monitoring, and maintenance for large banking and finance networks.",
        "Author": {
            "name": "Enseigner",
            "date": "Company Profile 2026"
        },
        "content": [
            {
                "para": "Enseigner has delivered branch and site security systems across banking and finance environments, supporting CCTV surveillance, access control, intrusion alarm, monitoring, and maintenance requirements."
            },
            {
                "para": "The company profile highlights deployments across Canara Bank, HDB Financial Services, Manappuram Finance, Muthoot Finance, South Indian Bank, IIFL, HDFC ERGO, Cholamandalam Finance, Karnataka Gramin Bank, and Reserve Bank of India."
            },
            {
                "para": "The delivery model combines site survey, design, supply, installation, commissioning, monitoring, and AMC support. This gives distributed branch teams a consistent security posture and one accountable partner for long-term operations."
            },
            {
                "para": "The outcome is security continuity at scale: branch systems remain maintainable, monitored, and audit-ready across large enterprise footprints."
            }
        ],
        "images": [
            {
                "src": "/empty-inblog.png",
                "alt": "Featured image"
            },
            {
                "src": "/stories/1.avif",
                "alt": "Blog hero image"
            }
        ]
    },
    {
        "badge": "Critical Infrastructure",
        "title": "Ports, Logistics and Critical Infrastructure",
        "description": "Data centre build, surveillance, access control, structured cabling, and critical operations support for infrastructure environments.",
        "Author": {
            "name": "Enseigner",
            "date": "Company Profile 2026"
        },
        "content": [
            {
                "para": "Enseigner's portfolio includes ports, logistics, and critical infrastructure deployments such as Chennai Port Trust, Container Corporation of India, Dakshin Bharat Gateway Terminal, SANS CFS, and Distribution Logistics Infrastructure."
            },
            {
                "para": "These environments require reliable surveillance, access control, structured cabling, data centre readiness, and operational support because downtime or security blind spots can affect critical operations."
            },
            {
                "para": "The company delivers design, supply, implementation, commissioning, and AMC across security and infrastructure layers, creating durable systems for complex, distributed sites."
            },
            {
                "para": "The result is stronger operational continuity and clearer visibility across infrastructure environments where reliability and accountability matter."
            }
        ],
        "images": [
            {
                "src": "/empty-inblog.png",
                "alt": "ADO pipeline automation"
            },
            {
                "src": "/stories/2.png",
                "alt": "SonarQube integration"
            }
        ]
    },
    {
        badge: "Multi-Site Operations",
        title: "Retail and Enterprise Multi-Site Rollouts",
        description: "Multi-location CCTV, access control, monitoring, and rollout support for retail, e-commerce, campuses, and industrial clients.",
        Author: {
            name: "Enseigner",
            date: "Company Profile 2026"
        },
        content: [
            {
                para: "Enseigner supports multi-location rollouts for retail, e-commerce, consumer brands, campuses, IT, manufacturing, and industrial environments."
            },
            {
                para: "The company profile references engagements across Flipkart, Decathlon, Lenskart, The Chennai Silks, Nilgiris, Royal Enfield, Zudio, Westside, Indospace Facilities, TCS, Tata Communications, Vinfast, Godrej and Boyce, and other enterprise environments."
            },
            {
                para: "The delivery focus is consistent: site readiness, surveillance, access control, monitoring, structured cabling, network/passive infrastructure, and long-term support."
            },
            {
                para: "By standardising rollout and maintenance practices, enterprises gain repeatable site deployment quality and stronger operational control across distributed locations."
            }
        ],
        images: [
            {
                src: "/empty-inblog.png",
                alt: "VDI deployment with Nutanix"
            },
            {
                src: "/stories/3.jpeg",
                alt: "Private cloud solution with Nutanix"
            }
        ]
    }
]

//full case studies
export const FullCaseStudies = [
    {
        badge: "Data Centre",
        title: "Enterprise Data Centre Deployment",
        description: "Data centre design, enterprise compute and storage, disaster recovery architecture, and structured cabling for mission-critical operations.",
        Author: {
            name: "Enseigner",
            date: "Company Profile 2026"
        },
        content: [
            {
                para: "Enseigner delivers enterprise data centre design and build services across compute, storage, networking, disaster recovery, backup, and passive infrastructure."
            },
            {
                para: "The company profile highlights active data centre and enterprise infrastructure work including Chennai Port Trust, enterprise compute and storage deployments, HPE, Dell, NetApp infrastructure, DR architecture, and structured cabling across 100+ enterprise sites."
            },
            {
                para: "The delivery model covers consultancy, design, supply, implementation, commissioning, and AMC. This ensures the same partner remains accountable from architecture through long-term operational continuity."
            },
            {
                para: "The outcome is modular, scalable infrastructure that can support mission-critical enterprise operations and future intelligent workloads."
            }
        ],


        //     src: "/empty-inblog.png",
        //     alt: "Consultation"
        // },
        // {
        //     src: "/studies/3.avif",
        images: [
            {
                src: "/empty-inblog.png",
                alt: "Nutanix HCI case study"
            },
            {
                src: "/studies/1.jpg",
                alt: "Nutanix virtual desktop environments"
            }
        ]
    },
    {
        badge: "Security Systems",
        title: "Pan-India Security Systems Rollout",
        description: "CCTV, access control, intrusion alarm, fire alarm, monitoring, and maintenance across branch and site networks.",
        Author: {
            name: "Enseigner",
            date: "Company Profile 2026"
        },
        content: [
            {
                para: "Enseigner's security systems track record includes 10,000+ branch and site installations across CCTV, access control, intrusion alarm, fire alarm, monitoring, and maintenance."
            },
            {
                para: "Large-scale deployments referenced in the profile include Muthoot Finance across 3,700 branches, Manappuram Finance across 3,000 branches, and Flipkart across 200 branches."
            },
            {
                para: "These engagements require repeatable site delivery, OEM coordination, installation quality, support discipline, and long-term serviceability."
            },
            {
                para: "The outcome is a scalable security operations model for enterprises that need consistent standards across distributed sites."
            }
        ],


        images: [
            {
                src: "/empty-inblog.png",
                alt: "DevOps transformation benefits"
            },
            {
                src: "/studies/2.png",
                alt: "DevOps implementation"
            }
        ]
    },
    {
        badge: "Command Centre",
        title: "Command Centre and AIOps Visibility",
        description: "Unified operational dashboards, anomaly detection, SLA tracking, and command visibility across distributed enterprise locations.",
        Author: {
            name: "Enseigner",
            date: "Company Profile 2026"
        },
        content: [
            {
                para: "Indian enterprises increasingly need operational visibility platforms that are on-premise, reliable, and architecturally independent of external cloud dependency."
            },
            {
                para: "Enseigner's command centre model unifies workforce status, security posture, operational alerts, compliance readiness, and multi-site command visibility in role-controlled dashboards."
            },
            {
                para: "AIOps-driven automation reduces manual intervention, detects anomalies before service impact, and supports SLA tracking for enterprise operations teams."
            },
            {
                para: "This creates a scalable command layer from single-site pilots to enterprise-wide deployment."
            }
        ],
        images: [
            {
                src: "/empty-inblog.png",
                alt: "AI/ML Platform Deployment"
            },
            {
                src: "/studies/2.png",
                alt: "DevOps Transformation for Retail Manufacturer"
            }
        ]
    },
    {
        badge: "Computer Vision",
        title: "Computer Vision for Intelligent Operations",
        description: "On-premise video analytics, workforce intelligence, access monitoring, retail analytics, and audit-ready reporting.",
        Author: {
            name: "Enseigner",
            date: "Company Profile 2026"
        },
        content: [
            {
                para: "Enseigner transforms existing camera infrastructure into an AI-powered enterprise operations platform that supports security, workforce, retail, and operational use cases."
            },
            {
                para: "Use cases include contactless identification, real-time presence monitoring, exception alerting, restricted zone access enforcement, anomaly detection, intrusion prevention, visitor flow analysis, dwell time analytics, POS reconciliation, and automated reporting."
            },
            {
                para: "The architecture is on-premise by design, so AI inference can remain inside the client's own environment and reduce external data dependency."
            },
            {
                para: "The result is centralised command, distributed intelligence, and audit-ready operational visibility."
            }
        ],
        images: [
            {
                src: "/empty-inblog.png",
                alt: "Consultation"
            },
            {
                src: "/studies/3.avif",
                alt: "Automated Node.js Deployment Pipeline"
            }
        ]
    },
    {
        badge: "Hybrid Infrastructure",
        title: "Hybrid Infrastructure Integration",
        description: "Multi-site enterprise networking, data centre interconnect, backup, DR, cloud integration, and proactive operations.",
        Author: {
            name: "Enseigner",
            date: "Company Profile 2026"
        },
        content: [
            {
                para: "Enseigner supports hybrid infrastructure integration for enterprises that need workload portability, burst capacity, disaster recovery, and operational control across on-premise and cloud environments."
            },
            {
                para: "Capabilities include data centre networking, software-defined infrastructure, multi-site interconnect, observability, performance assurance, and proactive SLA management."
            },
            {
                para: "Security and compliance controls include zero-trust architecture, threat detection, incident response, encryption in transit and at rest, and continuous monitoring."
            },
            {
                para: "The result is reliable infrastructure fabric for AI, data centre, and enterprise operations at multi-site scale."
            }
        ],
        images: [
            {
                src: "/empty-inblog.png",
                alt: "AI/ML Platform Deployment"
            },
            {
                src: "/studies/3.avif",
                alt: "Enterprise AI Infrastructure"
            }
        ]
    }


]


//this is services page content
export const services = [
    {
        id: "data-ai",
        title: "AI, Computer Vision and Intelligent Analytics",
        description: "Transform existing surveillance and operational infrastructure into an AI-powered enterprise operations platform. Enseigner delivers computer vision models for video analytics, object detection, anomaly detection, workforce attendance intelligence, retail analytics, access intelligence, and real-time command visibility.",
        link: "/consulting/data-and-ai",
        hasImage: false,
    },
    {
        id: "data-ai-image",
        title: "Data and AI",
        hasImage: true,
        image: "/services/data-ai.avif",
    },

    {
        id: "infrastructure-services-image",
        title: "Infrastructure Services",
        hasImage: true,
        image: "/services/infrastructure.avif",
    },
    {
        id: "infrastructure-services",
        title: "Enterprise Data Centre and Infrastructure",
        description: "Design and build enterprise data centres across compute, storage, networking, backup, disaster recovery, and structured cabling. Enseigner works with HPE, Dell, NetApp, Cisco, Fortinet, NVIDIA, and 200+ OEM brands to deliver mission-critical infrastructure from design through commissioning and AMC.",
        link: "/consulting/infrastructure-services",
        hasImage: false,
    },
    {
        id: "cloud-services",
        title: "Networking and Command Centre Operations",
        description: "Build high-performance network fabrics for data centre, AI, and enterprise environments. Our command centre and AIOps solutions provide unified operational visibility, predictive analytics, anomaly detection, SLA tracking, and role-based dashboards across distributed locations.",
        link: "/consulting/cloud-consulting",
        hasImage: false,
    },
    {
        id: "cloud-services-image",
        title: "Cloud Services",
        hasImage: true,
        image: "/services/premium_photo-way.avif",
    },


    {
        id: "devops-automation-image",
        title: "DevOps and Automation",
        hasImage: true,
        image: "/services/groupofpeople.avif",
    },
    {
        id: "devops-automation",
        title: "End-to-End Delivery and Managed Operations",
        description: "One accountable partner from consultancy, CAD design, supply, implementation, installation, commissioning, AMC, and managed operations. Enseigner's pan-India delivery maturity keeps enterprise projects aligned from first design through long-term operational support.",
        link: "/consulting/cloud-consulting",
        hasImage: false,
    },
    {
        id: "security",
        title: "Security Systems and Integration",
        description: "Deliver CCTV surveillance, access control, intrusion alarm, fire alarm, public address, voice evacuation, and intercom systems across banking, retail, government, ports, campuses, and enterprise environments. Our solutions are security-first, audit-ready, and built for multi-site operations.",
        link: "/consulting/security-governance",
        hasImage: false,
    },
    {
        id: "security-image",
        title: "Security",
        hasImage: true,
        image: "/services/ethernet.avif",
    },


    // {
    //     id: "training-services-image",
    //     title: "Training Services Image",
    //     hasImage: true,
    //     image: "/placeholder.svg",
    // },
    // {
    //     id: "training-services",
    //     title: "Training Services",
    //     description: "Stay ahead with tailored enterprise technology training grounded in real deployment experience.",
    //     link: "/services/#training",
    //     hasImage: false,
    // }
];

//add here to change the partners infinite scroll
export const partners = [
    { name: "Google Cloud", logo: "/google.webp" },
    { name: "AWS", logo: "/aws.png" },
    { name: "Microsoft Azure", logo: "/azure.png" },
    { name: "Nutanix", logo: "/partners/nutanix.png" },
    { name: "NetApp", logo: "/partners/netapp.png" },
    { name: "OVHcloud", logo: "/ovh-logo.png" },
    { name: "DigitalOcean", logo: "/digitalocean.svg" },
    { name: "XCP-ng", logo: "/mainlogo.png" },
]

export const stats = [
    {
        number: "12+",
        label: "Years Enterprise Execution",
    },
    {
        number: "100+",
        label: "Enterprise Clients Across India",
    },
    {
        number: "10,000+",
        label: "Branch and Site Installations",
    },
    {
        number: "200+",
        label: "OEM Partner Brands",
    },
]

export const values = [
    {
        title: "Integration Over Complexity",
        description:
            "We design integrated solutions across security, networking, data centre, and intelligent operations, reducing fragmented vendor exposure and operational risk.",
    },
    {
        title: "Execution Over Theory",
        description: "Enterprise execution succeeds when it is grounded in infrastructure discipline and field-proven delivery, not slideware.",
    },
    {
        title: "Pan-India Reach",
        description: "We deliver and maintain systems for enterprises, banks, government institutions, ports, logistics operators, campuses, and retail networks across India.",
    },
    {
        title: "Operational Permanence",
        description: "We build systems that remain secure, maintainable, auditable, and useful long after installation day.",
    },
]

export const securityFeatures = [
    {
        title: "On-Premise Data by Design",
        description:
            "AI inference and operational data can remain inside the client's own environment, with no biometric or operational data transmitted externally.",
    },
    {
        title: "Audit-Ready Operations",
        description: "Timestamped logs, evidence management, role-based dashboards, and reporting support enterprise security and compliance teams.",
    },
    {
        title: "Scalable Multi-Site Architecture",
        description: "Deploy from a single-site pilot to enterprise-wide rollouts without redesign, bringing every location into unified command visibility.",
    },
]

interface Testimonial {
    quote: string
    content: string
    author: {
        name: string
        role: string
        avatar: string
    }
}
export const testimonials: Testimonial[] = [
    {
        quote: "Enterprise execution with infrastructure discipline",
        content:
            "Enseigner brings the rare combination of infrastructure understanding, security system execution, and practical delivery discipline. Their ability to coordinate design, supply, installation, and long-term support makes them a dependable enterprise technology partner.",
        author: {
            name: "J Sudharsan",
            role: "Project Manager",
            avatar: "/placeholder.avif",
        },
    },
    {
        quote: "Reliable partner for complex enterprise systems",
        content:
            "Their team understands operational environments, not just technology components. From data centre and networking to security systems and managed support, Enseigner consistently focuses on continuity, accountability, and field outcomes.",
        author: {
            name: "Madhun Hegde",
            role: "Director, E Plus",
            avatar: "/placeholder.avif",
        },
    },
    {
        quote: "Practical enablement for modern operations",
        content:
            "Enseigner's strength is connecting infrastructure, intelligent operations, and team enablement. Their real deployment experience helps enterprise teams move from fragmented systems to integrated, maintainable operations.",
        author: {
            name: "Tejinder Singh",
            role: "Education Lead,  APJ, NetApp",
            avatar: "/placeholder.avif",
        },
    },
]

export const specializations = [
    {
        title: "Video Surveillance",
        logo: "/partners/aws.png",
        description: "Hikvision, Axis, CP Plus, Bosch, Honeywell, Pelco, Mobotix, Prama and enterprise video surveillance ecosystems.",
        alt: "Video surveillance partner ecosystem",
        gradient: "from-blue-500/40 to-cyan-500/20"
    },
    {
        title: "Servers, Storage & Networking",
        logo: "/partners/netapp.png",
        description: "HPE, Dell, Microsoft, NetApp, Veritas, Veeam, VMware, Cisco, Aruba, Extreme Networks, Legrand, and CommScope.",
        alt: "Servers storage and networking partner ecosystem",
        gradient: "from-blue-500/50 to-emerald-500/20"
    },
    {
        title: "Security, Fire & Safety",
        logo: "/partners/nutanix.png",
        description: "Fortinet, Cisco, Sophos, Meraki, Palo Alto, Forescout, HID, Suprema, Texecom, Optex, Morley IAS, Apollo, Ravel, TOA, and Ahuja.",
        alt: "Security fire and safety partner ecosystem",
        gradient: "from-red-500/40 to-amber-500/20"
    }
]

//home page services
const homeservices = [
    //These are inside home page component only . 
];
export const homepartners = [
    {
        name: 'AWS',
        logo: '/partners/aws.png',
        alt: 'AWS logo'
    },
    {
        name: 'Google Cloud',
        logo: '/partners/google.png',
        alt: 'Google Cloud logo'
    },
    {
        name: 'Azure',
        logo: '/partners/azure.png',
        alt: 'Azure logo'
    }
]
export const customers = [
    { name: "Flipkart", logo: "/eplus.png" },
    { name: "Myntra", logo: "/fast-lane.png" },
    { name: "E-Plus", logo: "/flipkart.png" },
    { name: "Fastline", logo: "/myntra.png" },
    { name: "Daikin", logo: "/daikin.png" },
    { name: "Ahana", logo: "/ahana-logo.svg" },
    { name: "Tenzai", logo: "/Tenzai-logo.svg" },
    { name: "Pages", logo: "/pages-logo.png" },
]
export const faqs = [
    {
        question: "What does Enseigner do?",
        answer: "Enseigner delivers end-to-end systems integration across security systems, enterprise data centre, networking, command centre operations, computer vision, intelligent analytics, structured cabling, and managed services."
    },
    {
        question: "Which industries do you serve?",
        answer: "We work across BFSI, government, public sector, defence, ports, logistics, healthcare, education, retail, IT, manufacturing, industrial, and critical infrastructure environments."
    },
    {
        question: "Can you work with existing camera and security infrastructure?",
        answer: "Yes. Enseigner can transform existing camera infrastructure into AI-powered operational visibility using on-premise computer vision, video analytics, anomaly detection, and command dashboards."
    },
    {
        question: "Do you provide long-term support?",
        answer: "Yes. Delivery covers consultancy, design, supply, implementation, commissioning, AMC, post-installation maintenance, and managed operations."
    }
]

//mobile menu
export const menuItems = [
    { name: 'About Us', link: '/about' },
    { name: 'Consulting', link: '/services' },
    { name: 'Training', link: '/services#traing-programs' },
    { name: 'Resources', link: '/resources' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
]


//NAVBAR

export const resources = [
    {
        title: "Case Studies",
        href: "/resources#case-studies",
        description: "Explore our successful client implementations",
    },
    {
        title: "Success Stories",
        href: "/resources#success-stories",
        description: "Read about the transformative impact we've had on businesses",
    },
    {
        title: "Blog",
        href: "/resources#blogs",
        description: "Insights, updates, and industry knowledge sharing",
    },
]


export const components: { title: string; href: string; description: string }[] = [
    {
        "title": "Networking and Command Centre",
        "href": "/services#cloud-services",
        "description": "High-performance network fabric, AIOps, dashboards, and multi-site operational visibility."
    },
    {
        "title": "AI and Computer Vision",
        "href": "/services#data-ai",
        "description": "Video analytics, workforce intelligence, anomaly detection, retail analytics, and monitoring."
    },
    {
        "title": "Data Centre and Infrastructure",
        "href": "/services#infrastructure-services",
        "description": "Compute, storage, networking, backup, DR, and structured cabling for mission-critical operations."
    },
    {
        "title": "Managed Operations",
        "href": "/services#devops-automation",
        "description": "Consultancy, design, supply, implementation, commissioning, AMC, and lifecycle support."
    },
    {
        "title": "Security Systems",
        "href": "/services#security",
        "description": "CCTV, access control, intrusion alarm, fire alarm, PA, voice evacuation, and intercom."
    },
    {
        "title": "Training Services",
        "href": "/services#training-services",
        "description": "Upskill your team with expert-led training programs."
    }
]


export const training: { title: string; href: string; description: string }[] = [
    {
        "title": "Infrastructure and Data Centre",
        "href": "/services#traing-programs",
        "description": "Build skills across compute, storage, networking, backup, DR, and structured cabling."
    },
    {
        "title": "Security and Command Operations",
        "href": "/services#traing-programs",
        "description": "Operate CCTV, access control, intrusion, fire alarm, SOC, and command centre environments."
    },
    {
        "title": "Cloud and Hybrid Integration",
        "href": "/services#traing-programs",
        "description": "Integrate on-premise infrastructure with AWS, Azure, Google Cloud, and hybrid operations."
    },
    {
        "title": "Kubernetes & OpenShift",
        "href": "/services#traing-programs",
        "description": "Develop expertise in container orchestration with Kubernetes and OpenShift."
    },
    {
        "title": "AIOps and Automation",
        "href": "/services#traing-programs",
        "description": "Use automation, observability, predictive analytics, and SLA management for enterprise operations."
    },
    {
        "title": "AI and Computer Vision",
        "href": "/services#traing-programs",
        "description": "Learn video analytics, anomaly detection, workforce intelligence, and on-premise AI operations."
    }
]




//SERVICES PAGE Taining Programs
export const trainingCategories = [
    {
        title: "NetApp Training",
        description: "Enhance your storage management capabilities with our NetApp training offerings.",
        courses: [
            { title: "ONTAP NAS Fundamentals" },
            { title: "ONTAP SAN Fundamentals" },
            { title: "ONTAP Cluster Foundation & Administration" },
            { title: "Automating ONTAP REST APIs with Python & Ansible" },
            { title: "SnapCenter & Performance Administration" },
            { title: "Cloud Insights for NetApp Storage" },
        ],
    },
    {
        title: "VMware Training",
        description: "Become proficient in managing virtualized environments with our VMware training courses.",
        courses: [
            { title: "VMware vSphere: Install, Configure, Manage [V8]" },
            { title: "VMware vSphere with Tanzu: Deploy, Configure, Manage [V8]" },
            { title: "VMware vSAN: Troubleshooting [V8]" },
            { title: "VMware Site Recovery Manager: Configure, Manage [8.6]" },
        ],
    },
    {
        title: "Cloud Computing & Hybrid Cloud",
        description: "Equip your team with the skills to effectively manage cloud services and hybrid cloud environments.",
        courses: [
            { title: "Microsoft Azure Fundamentals (AZ-900T00)" },
            { title: "Google Cloud Certified Professional Cloud Architect" },
            { title: "Integrating Hybrid Clouds with AWS, Microsoft Azure, and Google Cloud" },
            { title: "Cloud Volumes ONTAP Troubleshooting" },
        ],
    },
    {
        title: "Kubernetes & OpenShift Training",
        description: "Develop the skills to manage and deploy containerized applications using Kubernetes and OpenShift.",
        courses: [
            { title: "Red Hat OpenShift Administration I: Operating a Production Cluster" },
            { title: "Managing Kubernetes in Google Cloud" },
            { title: "OpenShift Administration II: Configuring a Production Cluster" },
        ],
    },
    {
        title: "DevOps & Automation Training",
        description: "Foster a culture of automation and continuous integration (CI) with our DevOps training programs.",
        courses: [
            { title: "DevOps Foundations: The Core Principles and Practices" },
            { title: "Automating ONTAP REST APIs with Ansible & Python" },
            { title: "Designing and Implementing Microsoft DevOps Solutions (AZ-400T00)" },
        ],
    },
    {
        title: "Generative AI & Machine Learning",
        description: "Stay ahead in AI innovation with our specialized training in Generative AI and Machine Learning.",
        courses: [
            { title: "Generative AI with Diffusion Models" },
            { title: "Machine Learning Fundamentals with TensorFlow and PyTorch" },
        ],
    },
]
