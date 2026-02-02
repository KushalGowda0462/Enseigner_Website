
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
        "title": "Nutanix HCI Transformation",
        "description": "Discover how Nutanix's hyper-converged infrastructure (HCI) improved scalability, security, and disaster recovery for organizations.",
        "author": "Enseigner",
        "date": "2 Feb 2025",
        "image": "/studies/1.jpg",
        "tags": ["HCI", "Cloud Infrastructure", "VDI"]
    },
    {
        "title": "DevOps Transformation for Retail Manufacturer",
        "description": "Learn how a leading Indian retail manufacturer streamlined software development and increased efficiency with DevOps implementation.",
        "author": "Enseigner",
        "date": "2 Feb 2025",
        "image": "/studies/2.png",
        "tags": ["DevOps", "CI/CD", "Automation"]
    },
    {
        "title": "Automated ADO Pipeline for Node.js on Heroku",
        "description": "Explore how Azure DevOps pipeline automation and SonarQube scanning optimized Node.js deployments for seamless delivery.",
        "author": "Enseigner",
        "date": "2 Feb 2025",
        "image": "/studies/3.avif",
        "tags": ["CI/CD", "Heroku", "Azure DevOps"]
    },
    {
        "title": "Enterprise-Grade AI/ML Platform Deployment",
        "description": "Enable scalable, secure, and GPU-accelerated AI/ML development with end-to-end MLOps and Gen AI capabilities.",
        "author": "Enseigner",
        "date": "15 Feb 2025",
        "image": "/studies/3.avif",
        "tags": ["AI/ML", "Kubernetes", "NVIDIA GPU", "MLOps"]
    },
    {
        "title": "Transforming Enterprise Communication with GenAI on Azure",
        "description": "RAG-powered GenAI chatbot using Azure services delivering real-time, context-aware responses with enterprise-grade security.",
        "author": "Enseigner",
        "date": "20 Feb 2025",
        "image": "/studies/3.avif",
        "tags": ["GenAI", "Azure", "RAG", "Chatbot"]
    }
]


//this is success stories content
export const SuccessStories: Post[] = [
    {
        title: "Azure DevOps Pipeline for Mobile App with Sonar Integration",
        description: "Discover how we automated the React mobile app's deployment, including APK generation and SonarQube scanning for enhanced code quality.",
        author: "Enseigner",
        date: "10 Jan 2024",
        image: "/stories/1.avif",
        tags: ["Azure DevOps", "CI/CD", "Mobile App"],
    },
    {
        title: "Automated ADO Pipeline for Node.js Deployment to Heroku",
        description: "Explore how we automated the Node.js application deployment to Heroku with continuous code quality checks via SonarQube.",
        author: "Enseigner",
        date: "12 Jan 2024",
        image: "/stories/2.png",
        tags: ["Node.js", "CI/CD", "Heroku"],
    },

    {
        title: "Transforming IT Infrastructure with Nutanix",
        description: "Learn how Nutanix’s hyper-converged infrastructure enabled scalable VDI and private cloud solutions for enhanced security and simplified IT management.",
        author: "Enseigner",
        date: "15 Jan 2024",
        image: "/stories/3.jpeg",
        tags: ["Nutanix", "Infrastructure", "VDI"],
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
        "badge": "Success Story",
        "title": "Transforming Retail Manufacturing with DevOps Implementation on Azure Platform",
        "description": "How Enseigner helped a leading GCC enterprise streamline their AI infrastructure and compliance processes with sovereign GPU infrastructure.",
        "Author": {
            "name": "Kumar S",
            "date": "17 Jan 2025"
        },
        "content": [
            {
                "para": "Client Overview: Our client, a leading Indian retail manufacturer, faced significant challenges in its software development processes, which were impacting their ability to innovate, deliver products on time, and ensure reliable operations. The client’s existing workflows lacked the structure and automation necessary to support rapid growth and dynamic market demands. This led to inefficiencies, slow deployment cycles, and frequent production incidents that threatened product quality and data security."
            },
            {
                "para": "The Challenge: The client struggled with: Absence of a DevOps Framework: Without a structured DevOps approach, development and operational processes were fragmented, leading to inefficiencies and manual interventions. Direct Code Deployment: Code changes were deployed directly to production without sufficient testing or approval, resulting in frequent issues and a lack of quality assurance. Frequent Production Incidents: Continuous deployments and insufficient control over code quality created reliability issues in the application, along with concerns around data security and system downtime."
            },
            {
                "para": "Our Solution: Enseigner worked closely with the client to implement a comprehensive sovereign AI infrastructure strategy. By addressing the core challenges of compliance, data residency, and GPU cost predictability, we created a robust framework that enabled production AI workloads with full auditability. Sovereign Infrastructure: We established a dedicated GPU cluster designed for persistent enterprise workloads, ensuring data residency and regulatory compliance. Compliance & Audit Readiness: We configured auditable AI pipelines aligned to regulatory requirements, with governance-first execution. Operational Ownership: We provided clear ownership across infrastructure and execution to reduce production friction and accelerate time-to-production."
            },
            {
                "para": "Structured DevOps Framework: By implementing a structured DevOps framework, we ensured traceability, accountability, and streamlined collaboration between development, testing, and operations teams. Business Outcomes: The DevOps transformation delivered faster time to market, improved product quality, enhanced collaboration, and increased system reliability. Automation also brought cost efficiency, reducing manual interventions and production issues."
            },
            {
                "para": "Improved Security (DevSecOps): Integrated security measures, such as SonarQube for vulnerability scanning, significantly enhanced the security of the client’s applications, protecting both data and user privacy. Conclusion: By adopting a structured DevOps framework, the client improved agility, collaboration, and security, enabling them to thrive in the fast-paced retail industry."
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
        "badge": "Automated ADO Pipeline",
        "title": "Automated ADO Pipeline for Node.js Deployment to Heroku with Sonar Scanning",
        "description": "We set up an Azure DevOps (ADO) pipeline that automates the deployment of the customer's Node.js application to Heroku. This pipeline not only streamlined the deployment process but also integrated SonarQube scanning for continuous code quality and security analysis.",
        "Author": {
            "name": "Kumar S",
            "date": "12 Jan 2024"
        },
        "content": [
            {
                "para": "We implemented an Azure DevOps (ADO) pipeline for the customer's Node.js application, automating the build, test, and deployment processes to Heroku. This automation eliminated manual intervention and introduced SonarQube integration for code quality and security scanning, enhancing the reliability and security of the application."
            },
            {
                "para": "Issues Faced: The customer encountered several challenges, including manual build and deployment processes that were time-consuming and error-prone. APK generation required manual intervention, slowing down the release cycle. Additionally, there were no integrated code quality or security checks, exposing the application to potential risks. Developers also faced challenges in managing dependencies and ensuring a stable environment throughout the deployment stages."
            },
            {
                "para": "Solution Offered: To address these issues, we designed and implemented an Azure DevOps (ADO) pipeline for the customer's React mobile application. The key elements of the solution included:"
            },
            {
                "para": "Automated APK generation: The pipeline automatically builds the application and generates the APK file, eliminating the need for manual intervention and speeding up the release cycle."
            },
            {
                "para": "SonarQube integration: We integrated Sonar scanning into the CI/CD pipeline to provide automated code quality and security checks, enabling early detection of issues and maintaining high code standards."
            },
            {
                "para": "Consistency and Speed: By automating the workflow, the solution ensured consistency across builds and facilitated faster delivery of features and fixes, greatly improving efficiency."
            },
            {
                "para": "Key Features: Automated deployment of the Node.js application to Heroku, SonarQube scanning for code quality and security, and a fully automated CI/CD pipeline, ensuring reliable and secure releases."
            },
            {
                "para": "Benefits to the customer: The implementation of this pipeline significantly reduced deployment time, minimized errors, and ensured the application met quality and security standards before going live on Heroku. This automation enhanced the overall efficiency of the deployment process."
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
        badge: "IT Infrastructure",
        title: "Transforming IT Infrastructure with Nutanix",
        description: "Discover how Nutanix’s hyper-converged infrastructure transformed the IT environment of a leading enterprise, enabling seamless VDI deployment and a private cloud solution.",
        Author: {
            name: "Enseigner",
            date: "15 Jan 2024"
        },
        content: [
            {
                para: "A leading enterprise faced growing challenges in managing its IT infrastructure, especially with scaling remote work, maintaining data security, and ensuring disaster recovery resilience. As they transitioned to a more remote workforce and dealt with inflexible traditional data centers, they needed a modern solution that could streamline virtual desktop environments (VDI) and meet strict security requirements."
            },
            {
                para: "Nutanix’s hyper-converged infrastructure (HCI) provided a seamless solution for deploying and scaling virtual desktops using Citrix, VMware Horizon, or Nutanix’s AHV hypervisor. The system automatically adjusted resources based on demand, ensuring consistent performance, and providing enhanced security across remote desktop environments. The implementation also simplified infrastructure management through Nutanix Prism, reducing complexity and enabling quick responses to fluctuating user demands."
            },
            {
                para: "In addition to the VDI solution, Nutanix enabled the enterprise to transition from inflexible, costly traditional data centers to a software-defined infrastructure. This new private cloud solution allowed them to achieve the scalability and self-service provisioning they needed, all while maintaining full control over their data security and regulatory compliance."
            },
            {
                para: "This transformation not only improved operational efficiency but also offered significant benefits, including consistent and responsive virtual desktop environments, enhanced security, and reduced complexity in managing IT infrastructure. By embracing Nutanix’s infrastructure, the client ensured scalability, data security, and simplified management across their organization."
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
        badge: "HCI",
        title: "Nutanix HCI: Enhancing IT Infrastructure for Remote Work and Beyond",
        description: "Explore how Nutanix's hyper-converged infrastructure (HCI) revolutionizes desktop environments, data centers, and disaster recovery solutions for enterprises facing modern IT challenges.",
        Author: {
            name: "Tech Advisory Team",
            date: "18 Jan 2024"
        },
        content: [
            {
                para: "Organizations today face challenges in managing and scaling virtual desktop environments (VDI) for employees working remotely. Fluctuating resource demands, security concerns, and maintaining consistent performance are key issues that many businesses struggle with as their workforce shifts towards remote operations."
            },
            {
                para: "Nutanix’s hyper-converged infrastructure (HCI) offers a robust solution for seamless VDI deployment, utilizing platforms such as Citrix, VMware Horizon, or Nutanix’s AHV hypervisor. Nutanix’s integrated compute and storage capabilities enable the VDI environment to efficiently scale and adapt to resource demands, ensuring consistent user experiences and high availability in case of hardware failure. Additionally, Nutanix Prism simplifies management with centralized monitoring and automation, reducing the complexity of managing virtual environments."
            },
            {
                para: "Traditional data centers can be expensive, difficult to scale, and inflexible. Nutanix’s software-defined infrastructure provides businesses with the flexibility of a private cloud solution, offering scalability and self-service provisioning while maintaining full control over sensitive data and regulatory compliance. Nutanix integrates seamlessly with Kubernetes, VMware, and Nutanix Cloud Management services, enabling businesses to manage their workloads both on-premises and across public cloud environments with ease."
            },
            {
                para: "Disaster recovery is another challenge faced by many organizations. Traditional disaster recovery (DR) solutions require separate, costly infrastructure and are often complex to manage. Nutanix Leap and Nutanix Mine offer built-in DR solutions that simplify the replication and recovery of workloads across locations. With automated failover and minimal recovery times, Nutanix helps businesses avoid downtime and reduces the overall cost of maintaining separate DR infrastructure."
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
        badge: "DevOps",
        title: "DevOps Transformation for a Leading Indian Retail Manufacturer",
        description: "A comprehensive DevOps transformation enhanced software development efficiency, improved product quality, and ensured operational stability for a leading Indian retail manufacturer.",
        Author: {
            name: "Enseigner",
            date: "12 Jan 2024"
        },
        content: [
            {
                para: "A prominent Indian retail manufacturer faced significant challenges in their software development processes, which impacted product innovation, delivery timelines, and overall operational reliability. Their existing practices were inefficient, lacked structure, and were prone to frequent production incidents, threatening both product quality and data security."
            },
            {
                para: "One of the primary challenges was the absence of a well-defined DevOps framework. Development and operational processes were fragmented, often requiring manual interventions. Code changes were frequently deployed directly into production environments without sufficient testing or approval, leading to multiple production incidents, security vulnerabilities, and downtime."
            },
            {
                para: "Enseigner implemented a comprehensive sovereign AI infrastructure strategy, introducing a dedicated GPU cluster designed for persistent enterprise workloads to ensure data residency and regulatory compliance. The client's AI pipelines were configured with full auditability, aligned to regulatory requirements with governance-first execution. Additionally, clear operational ownership across infrastructure and execution reduced production friction and accelerated time-to-production."
            },
            {
                para: "By implementing a structured DevOps framework, the client experienced improved traceability and accountability across development, testing, and operational teams. Automated testing, deployment pipelines, and strict code review processes helped reduce the risk of production incidents while enhancing overall security. The result was faster time to market, improved product quality, better collaboration among teams, and reduced costs."
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
        badge: "AI/ML",
        title: "Enterprise-Grade AI/ML Platform Deployment",
        description: "Enable scalable, secure, and GPU-accelerated AI/ML development with end-to-end MLOps and Gen AI capabilities.",
        Author: {
            name: "Enseigner",
            date: "15 Feb 2025"
        },
        content: [
            {
                para: "A leading GCC enterprise sought to enable scalable, secure, and GPU-accelerated AI/ML development with end-to-end MLOps and Gen AI capabilities. The client needed a production-ready infrastructure that could support complex model training, real-time inference, and seamless deployment workflows while maintaining strict compliance with GCC data residency requirements."
            },
            {
                para: "Enseigner deployed a high-availability Rancher Kubernetes cluster on Cisco UCS, integrated Kubeflow + MLFlow + ArgoCD for robust MLOps pipeline, and configured RBAC with AD, private Harbor Registry, and secure namespaces. We deployed ELK Stack for real-time logging & monitoring, installed and validated NVIDIA GPU Operator for GPU-aware scheduling, and successfully deployed LLaMA 3.3 70B Gen AI model with Ollama API."
            },
            {
                para: "The solution delivered seamless CI/CD with GitOps, 3x faster model deployment cycles, 100% GPU utilization with scalable AI pipelines, and comprehensive training & documentation delivered remotely. The client now has a production-ready, enterprise-scale AI infrastructure with best-in-class automation, observability, and performance—all while maintaining full GCC compliance and data residency."
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
        badge: "DevOps",
        title: "Automated ADO Pipeline for Node.js Deployment to Heroku with Sonar Scanning",
        description: "An automated Azure DevOps (ADO) pipeline was implemented for seamless Node.js deployment to Heroku with integrated SonarQube scanning, improving efficiency, security, and quality.",
        Author: {
            name: "Enseigner",
            date: "12 Jan 2024"
        },
        content: [
            {
                para: "We set up an Azure DevOps (ADO) pipeline that automates the deployment of the customer's Node.js application to Heroku. The pipeline eliminated manual build processes, ensuring consistent deployments while integrating SonarQube scanning for continuous code quality and security analysis."
            },
            {
                para: "The client faced several challenges, including manual build and deployment processes that were time-consuming, error-prone, and inconsistent. APK generation required manual intervention, slowing down release cycles. There were also no integrated code quality and security checks, posing risks to the application's stability."
            },
            {
                para: "To resolve these issues, we developed an automated ADO pipeline. It eliminated manual intervention for APK generation, introduced SonarQube integration for continuous code analysis, and standardized the deployment workflow. The result was improved consistency and speed across all deployment stages, allowing for faster delivery of features and bug fixes."
            },
            {
                para: "Key features of this solution include automated Node.js deployment to Heroku, integrated SonarQube scanning during CI/CD, and improved efficiency by catching issues early in the development process. The pipeline drastically reduced deployment times, ensured stable releases, and maintained high code standards for the customer’s application."
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
        badge: "AI/ML",
        title: "Enterprise-Grade AI/ML Platform Deployment",
        description: "Enable scalable, secure, and GPU-accelerated AI/ML development with end-to-end MLOps and Gen AI capabilities.",
        Author: {
            name: "Enseigner",
            date: "15 Feb 2025"
        },
        content: [
            {
                para: "A leading GCC enterprise sought to enable scalable, secure, and GPU-accelerated AI/ML development with end-to-end MLOps and Gen AI capabilities. The client needed a production-ready infrastructure that could support complex model training, real-time inference, and seamless deployment workflows while maintaining strict compliance with GCC data residency requirements."
            },
            {
                para: "Enseigner deployed a high-availability Rancher Kubernetes cluster on Cisco UCS, integrated Kubeflow + MLFlow + ArgoCD for robust MLOps pipeline, and configured RBAC with AD, private Harbor Registry, and secure namespaces. We deployed ELK Stack for real-time logging & monitoring, installed and validated NVIDIA GPU Operator for GPU-aware scheduling, and successfully deployed LLaMA 3.3 70B Gen AI model with Ollama API."
            },
            {
                para: "The solution delivered seamless CI/CD with GitOps, 3x faster model deployment cycles, 100% GPU utilization with scalable AI pipelines, and comprehensive training & documentation delivered remotely. The client now has a production-ready, enterprise-scale AI infrastructure with best-in-class automation, observability, and performance—all while maintaining full GCC compliance and data residency."
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
        title: "Data and AI",
        description: "Unlocking the true potential of your data through advanced analytics and AI-driven insights. Enseigner helps you modernize your AI infrastructure with sovereign GPU capacity, improving compliance and predictability. From data residency to auditability, we transform AI pilots into production workloads. Our compliance-first AI execution solutions allow regulated enterprises to automate processes, enhance productivity, and scale faster while meeting governance requirements. Let us help you harness the power of sovereign AI to drive business growth.",
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
        title: "Infrastructure Services",
        description: "Achieve uninterrupted AI workloads with Enseigner's sovereign GPU infrastructure. Our solutions are designed to provide always-on AI capacity with predictable costs, powered by cutting-edge GPU technologies. We help regulated GCC enterprises implement scalable infrastructures that support production AI workloads while ensuring data residency and compliance. With a focus on security, compliance, and performance, our infrastructure services are tailored to meet the needs of regulated enterprises. Keep your AI operations running smoothly with our expert support.",
        link: "/consulting/infrastructure-services",
        hasImage: false,
    },
    {
        id: "cloud-services",
        title: "Cloud Services",
        description: "Enseigner provides scalable, secure sovereign GPU infrastructure tailored to regulated GCC enterprise needs. We help businesses streamline their AI operations by offering reliable and predictable GPU capacity. Our sovereign infrastructure enables seamless integration with existing compliance frameworks. Whether you're moving AI from pilot to production or optimizing GPU costs, we have the expertise to support your journey. Benefit from always-on AI workloads and ensure your infrastructure stays compliant and available.",
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
        title: "DevOps and Automation",
        description: "Maximize AI operational efficiency with our compliance-first AI execution solutions. We help regulated enterprises automate their AI pipeline processes, improving productivity and reducing compliance friction. Our services include auditable AI pipeline setup, governance-first execution, and compliance monitoring. With auditability and logging solutions, you gain full visibility into your AI operations. Empower your team to deliver faster and more reliable production AI with Enseigner's expertise.",
        link: "/consulting/cloud-consulting",
        hasImage: false,
    },
    {
        id: "security",
        title: "Security",
        description: "In an ever-evolving regulatory landscape, compliance is paramount. We provide comprehensive solutions to protect your AI operations from compliance risks. Our services include robust auditability, real-time compliance monitoring, and regulatory alignment support. With Enseigner, you can navigate the complexities of GCC data residency requirements with confidence, knowing that your critical AI workloads are protected. Stay resilient and safeguard your operations with our expert compliance solutions.",
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
    //     description: "Stay ahead in the fast-paced tech world with our tailored training services. DC Tech provides corporate technical training programs designed to upskill your team. Our courses, led by expert instructors, offer hands-on learning and focus on the latest industry trends. With custom programs, your team gains the knowledge needed to excel. Our training paths also offer certification opportunities, ensuring your workforce remains competitive and well-equipped for the future.",
    //     link: "/services/#training",
    //     hasImage: false,
    // }
];

//add here to change the partners infinite scroll
export const partners = [
    { name: "Google Cloud", logo: "/google.webp" },
    { name: "AWS", logo: "/aws.png" },
    { name: "Ovh Cloud", logo: "/ovh-logo.png" },
    { name: "Azure", logo: "/azure.png" },
    { name: "DigitalOcean", logo: "/digitalocean.svg" },
    { name: "Xcp ng ", logo: "/mainlogo.png" },
    { name: "DigitalOcean", logo: "/partners/nutanix.png" },
    { name: "Xcp ng ", logo: "/partners/netapp.png" },
]

export const stats = [
    {
        number: "20+",
        label: "Years of Experience",
    },
    {
        number: "30",
        label: "Clients World wide",
    },
    {
        number: "80",
        label: "Successful Projects Completed",
    },
    {
        number: "99%",
        label: "Client Satisfaction Rate",
    },
]

export const values = [
    {
        title: "Customer-Centricity",
        description:
            "We prioritize our clients' needs, ensuring our solutions align with their goals and drive success.",
    },
    {
        title: "Excellence",
        description: "We deliver the highest standards in both technical expertise and customer service.",
    },
    {
        title: "Innovation",
        description: "We embrace new technologies and methodologies to create better outcomes for our clients.",
    },
    {
        title: "Integrity",
        description: "Honesty, transparency, and trust are at the core of everything we do.",
    },
]

export const securityFeatures = [
    {
        title: "Scalable and Customizable Solutions",
        description:
            "We deliver tailored, flexible technology solutions that grow with your business needs, ensuring long-term success.",
    },
    {
        title: "Innovation-Driven Efficiency",
        description: "By leveraging the latest technologies, we drive automation and streamline processes for faster, more efficient operations.",
    },
    {
        title: "Enhanced Security and Reliability",
        description: "Our solutions integrate robust security measures and ensure high availability, minimizing downtime and protecting critical business data.",
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
        quote: "Seamless DevOps & Heroku Integration Boosts Software Efficiency",
        content:
            "Enseigner transformed our AI infrastructure with their seamless sovereign GPU implementation. Their expertise in providing compliance-first GPU infrastructure enhanced our data residency and auditability, while improving AI workload predictability and cost management. Their timely execution and clear communication ensured we met regulatory requirements without compromising performance.",
        author: {
            name: "J Sudharsan",
            role: "Project Manager",
            avatar: "/placeholder.avif",
        },
    },
    {
        quote: "Flawless Sovereign AI Infrastructure with Enseigner's Expertise",
        content:
            "Enseigner has been a key partner in delivering and integrating sovereign GPU infrastructure and compliance-first AI execution. Their expertise, reliability, and proactive approach have consistently exceeded expectations, ensuring seamless execution and smooth integration. They're also a trusted partner in advancing our production AI workloads and regulatory compliance.",
        author: {
            name: "Madhun Hegde",
            role: "Director, E Plus",
            avatar: "/placeholder.avif",
        },
    },
    {
        quote: "Enseigner: Empowering Teams with Sovereign AI Infrastructure",
        content:
            "Enseigner has been our go-to partner for sovereign AI infrastructure and compliance-first execution. Their deep expertise and efficient execution have consistently delivered outstanding results, ensuring smooth AI production rollouts and empowering regulated enterprises with the right infrastructure. They have been instrumental in delivering compliance-ready AI infrastructure to GCC enterprises.",
        author: {
            name: "Tejinder Singh",
            role: "Education Lead,  APJ, NetApp",
            avatar: "/placeholder.avif",
        },
    },
]

export const specializations = [
    {
        title: "Google Cloud Premier Partner",
        logo: "/partners/google.png",
        description: "We are a Premier Level partner for Google Cloud with additional competencies in Infrastructure and Machine Learning",
        alt: "Google Cloud Premier Partner badge",
        gradient: "from-blue-500/40 to-pink-500/20"
    },
    {
        title: "AWS Advanced Partner",
        logo: "/partners/aws.png",
        description: "As an Advanced Tier AWS Service Partner, we hold more than 50+ AWS certifications, 6 AWS Competencies, 5 partner programs",
        alt: "AWS Partner badge",
        gradient: "from-blue-500/50 to-orange-500/20"
    }
]

//home page services
const homeservices = [
    //These are inside home page component only . 
];
export const homepartners = [
    {
        name: 'AWS Partner Network',
        logo: '/partners/aws.png',
        alt: 'AWS Partner Network logo'
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
        question: "What services do you offer?",
        answer: "We offer a comprehensive range of services including cloud solutions, AI implementation, and digital transformation consulting."
    },
    {
        question: "How do you ensure project success?",
        answer: "We follow a rigorous project management methodology, maintain constant communication, and implement regular quality checks."
    },
    {
        question: "What industries do you work with?",
        answer: "We work across various industries including technology, healthcare, finance, and manufacturing."
    },
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on scope and complexity, typically ranging from 2-6 months."
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
        "title": "Cloud Services",
        "href": "/services#cloud-services",
        "description": "Seamlessly migrate your infrastructure to the cloud."
    },
    {
        "title": "Data and AI",
        "href": "/services#data-ai",
        "description": "Harness AI and data to optimize your operations."
    },
    {
        "title": "Infrastructure Services",
        "href": "/services#infrastructure-services",
        "description": "Streamline and manage your IT infrastructure efficiently."
    },
    {
        "title": "DevOps and Automation",
        "href": "/services#devops-automation",
        "description": "Automate workflows and improve development processes."
    },
    {
        "title": "Managed Services",
        "href": "/services#managed-services",
        "description": "Comprehensive IT management to ensure business continuity."
    },
    {
        "title": "Training Services",
        "href": "/services#training-services",
        "description": "Upskill your team with expert-led training programs."
    }
]


export const training: { title: string; href: string; description: string }[] = [
    {
        "title": "NetApp Training",
        "href": "/services#traing-programs",
        "description": "Master NetApp storage solutions with ONTAP, E-Series, and more."
    },
    {
        "title": "VMware Training",
        "href": "/services#traing-programs",
        "description": "Enhance virtualization skills with VMware vSphere, Tanzu, and more."
    },
    {
        "title": "Cloud Computing",
        "href": "/services#traing-programs",
        "description": "Learn to integrate and optimize AWS, Azure, and Google Cloud."
    },
    {
        "title": "Kubernetes & OpenShift",
        "href": "/services#traing-programs",
        "description": "Develop expertise in container orchestration with Kubernetes and OpenShift."
    },
    {
        "title": "DevOps & Automation",
        "href": "/services#traing-programs",
        "description": "Streamline workflows with DevOps, CI/CD, and automation tools."
    },
    {
        "title": "Generative AI & Machine Learning",
        "href": "/services#traing-programs",
        "description": "Stay ahead with AI and ML skills, including Generative AI models."
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
