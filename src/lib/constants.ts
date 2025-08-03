export const siteConfig = {
  name: "A3S Labs",
  description: "Transforming Ideas into Digital Reality",
  url: "https://a3slabs.com",
  ogImage: "https://a3slabs.com/og.jpg",
  links: {
    twitter: "https://twitter.com/a3slabs",
    github: "https://github.com/a3slabs",
    linkedin: "https://linkedin.com/company/a3slabs",
  },
}

export const services = [
  {
    title: "Software Development",
    description: "Custom applications, web platforms, and mobile solutions built with cutting-edge technologies.",
    icon: "Code",
    features: ["Web Applications", "Mobile Apps", "API Development", "System Architecture"],
  },
  {
    title: "Data Science",
    description: "Machine learning, AI, and analytics solutions that turn data into actionable insights.",
    icon: "Brain",
    features: ["Machine Learning", "Predictive Analytics", "Data Visualization", "AI Solutions"],
  },
  {
    title: "Consulting",
    description: "Technical strategy and architecture design to optimize your digital transformation.",
    icon: "Lightbulb",
    features: ["Technical Strategy", "Architecture Design", "Digital Transformation", "Technology Audit"],
  },
]

export const technologies = [
  "React", "Next.js", "TypeScript", "Python", "Node.js", "PostgreSQL", 
  "MongoDB", "AWS", "Docker", "Kubernetes", "TensorFlow", "PyTorch",
  "D3.js", "Three.js", "GraphQL", "Redis", "Elasticsearch"
]

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
]

export const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Built a comprehensive analytics platform using machine learning to provide real-time insights for enterprise clients.",
    image: "/projects/analytics.jpg",
    technologies: ["Python", "TensorFlow", "React", "AWS"],
    category: "Data Science",
    link: "#",
  },
  {
    title: "E-Commerce Mobile App",
    description: "Developed a full-featured mobile application with advanced features like AR product visualization.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
    category: "Mobile Development",
    link: "#",
  },
  {
    title: "Cloud Infrastructure Solution",
    description: "Designed and implemented a scalable cloud infrastructure for a fintech startup handling millions of transactions.",
    image: "/projects/cloud.jpg",
    technologies: ["AWS", "Kubernetes", "Terraform", "Python"],
    category: "DevOps",
    link: "#",
  },
  {
    title: "Real-time Dashboard",
    description: "Created an interactive dashboard for monitoring IoT devices with real-time data visualization.",
    image: "/projects/dashboard.jpg",
    technologies: ["Next.js", "D3.js", "WebSocket", "PostgreSQL"],
    category: "Web Development",
    link: "#",
  },
  {
    title: "Machine Learning Pipeline",
    description: "Built an automated ML pipeline for predictive maintenance in manufacturing industries.",
    image: "/projects/ml-pipeline.jpg",
    technologies: ["Python", "Scikit-learn", "Apache Airflow", "Docker"],
    category: "Data Science",
    link: "#",
  },
  {
    title: "Blockchain Integration",
    description: "Integrated blockchain technology for secure document verification and smart contracts.",
    image: "/projects/blockchain.jpg",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
    category: "Blockchain",
    link: "#",
  },
]

export const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    image: "/team/sarah.jpg",
    bio: "PhD in Computer Science with 15+ years of experience in AI and machine learning. Led teams at Google and Microsoft.",
    expertise: ["AI/ML", "System Architecture", "Team Leadership"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Software Engineer",
    image: "/team/marcus.jpg",
    bio: "Full-stack developer with expertise in modern web technologies. Passionate about creating scalable, user-centric solutions.",
    expertise: ["React", "Node.js", "Cloud Architecture"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Dr. Emily Watson",
    role: "Data Science Lead",
    image: "/team/emily.jpg",
    bio: "Data scientist with a background in statistics and research. Specializes in predictive analytics and business intelligence.",
    expertise: ["Python", "Statistics", "Business Intelligence"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Alex Thompson",
    role: "DevOps Engineer",
    image: "/team/alex.jpg",
    bio: "Infrastructure specialist with deep knowledge of cloud platforms and automation. Ensures reliable, scalable deployments.",
    expertise: ["AWS", "Kubernetes", "CI/CD"],
    linkedin: "#",
    github: "#",
  },
]

export const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "CTO, TechFlow Inc.",
    content: "A3S Labs transformed our entire data infrastructure. Their expertise in machine learning helped us increase efficiency by 300%.",
    image: "/testimonials/jennifer.jpg",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Founder, StartupXYZ",
    content: "Working with A3S Labs was a game-changer. They delivered our MVP in record time and the quality exceeded our expectations.",
    image: "/testimonials/david.jpg",
    rating: 5,
  },
  {
    name: "Rachel Green",
    role: "Product Manager, EnterpriseCorp",
    content: "The team at A3S Labs is incredibly professional and technically brilliant. They solved complex problems we thought were impossible.",
    image: "/testimonials/rachel.jpg",
    rating: 5,
  },
]

export const stats = [
  { label: "Projects Delivered", value: "100+", suffix: "" },
  { label: "Happy Clients", value: "50+", suffix: "" },
  { label: "Team Members", value: "25+", suffix: "" },
  { label: "Years Experience", value: "8+", suffix: "" },
  { label: "Success Rate", value: "98", suffix: "%" },
  { label: "Support Hours", value: "24/7", suffix: "" },
] 