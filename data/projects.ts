export interface Project {
  id: string;
  title: string;
  category: "AI" | "Web" | "Data" | "Emerging Tech";
  problem: string;
  solution: string;
  techStack: string[];
  role: string;
  challenges: string;
  impact: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "voya-ai",
    title: "Voya AI Agent",
    category: "AI",
    problem: "Travel planning is time-consuming and overwhelming, with users needing to research destinations, accommodations, activities, and create comprehensive itineraries.",
    solution: "Built an intelligent AI travel agent using multi-agent orchestration that assists users in planning trips, providing personalized recommendations, and generating detailed itineraries based on preferences and budget.",
    techStack: ["Python", "LangChain", "OpenAI API", "Multi-Agent Systems", "FastAPI"],
    role: "Full-stack Developer & AI Engineer",
    challenges: "Orchestrating multiple AI agents to work cohesively, managing context across conversations, and ensuring reliable recommendations.",
    impact: "Significantly reduced travel planning time for users and demonstrated advanced AI system integration capabilities.",
    featured: true,
  },
  {
    id: "coffee-trends",
    title: "Coffee Trends Agent",
    category: "AI",
    problem: "Coffee industry professionals and enthusiasts lack easy access to aggregated, analyzed data about market trends, pricing, and consumer preferences.",
    solution: "Developed a data-driven AI agent that analyzes coffee industry trends, extracts insights from multiple sources, and provides actionable intelligence through an intuitive interface.",
    techStack: ["Python", "AI Agents", "Data Extraction", "Web Scraping", "Regex", "LLM Integration"],
    role: "Data Engineer & AI Developer",
    challenges: "Extracting structured data from unstructured sources, handling rate limits, and creating meaningful insights from raw data.",
    impact: "Enabled coffee businesses to make data-informed decisions and stay competitive in the market.",
    featured: true,
  },
  {
    id: "neardish",
    title: "NearDish",
    category: "Web",
    problem: "Users struggle to discover nearby restaurants and make informed dining decisions based on location, cuisine, and reviews.",
    solution: "Created a restaurant discovery and recommendation platform that helps users find the perfect dining experience based on their location, preferences, and real-time availability.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Geolocation API", "Restaurant APIs"],
    role: "Full-stack Developer",
    challenges: "Implementing accurate geolocation services, managing real-time data, and creating an intuitive user experience.",
    impact: "Improved restaurant discovery for users and increased visibility for local restaurants.",
    featured: true,
  },
  {
    id: "expressgo",
    title: "ExpressGo",
    category: "Web",
    problem: "Delivery services need efficient management systems to track orders, manage drivers, and provide real-time updates to customers.",
    solution: "Built a fast and efficient delivery management system that streamlines the entire delivery process from order placement to completion.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Backend APIs", "Real-time Updates"],
    role: "Full-stack Developer",
    challenges: "Implementing real-time tracking, optimizing for performance, and ensuring reliable order management.",
    impact: "Enhanced delivery efficiency and improved customer satisfaction through real-time tracking.",
    featured: true,
  },
  {
    id: "medbooking-web3",
    title: "MedBooking Web3",
    category: "Emerging Tech",
    problem: "Traditional medical booking systems lack transparency, security, and patient data ownership.",
    solution: "Developed a Web3-based medical booking platform leveraging blockchain technology for secure, transparent, and decentralized healthcare appointment management.",
    techStack: ["Next.js", "Solidity", "Web3.js", "Blockchain", "Smart Contracts"],
    role: "Full-stack & Blockchain Developer",
    challenges: "Learning Solidity, implementing smart contracts, integrating Web3 technologies with a modern frontend, and ensuring security.",
    impact: "Demonstrated the potential for blockchain in healthcare while providing a secure booking solution.",
    featured: false,
  },
  {
    id: "baho-coffee",
    title: "Baho Coffee Projects",
    category: "Web",
    problem: "Coffee businesses need digital presence and e-commerce solutions to reach customers and manage online sales.",
    solution: "Developed multiple web solutions for Baho Coffee including landing pages, e-commerce features, and business management tools.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "E-commerce", "Payment Integration"],
    role: "Full-stack Developer",
    challenges: "Creating scalable e-commerce solutions, integrating payment systems, and ensuring smooth user experience.",
    impact: "Enabled Baho Coffee to expand their digital presence and increase online sales.",
    featured: false,
  },
];
