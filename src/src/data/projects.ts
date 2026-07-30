export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  Tools: string;
  category: string;
  year: string;
  overview: string;
  liveUrl?: string;
  secondaryImages?: {
    topBig?: string;
    middleLeft?: string;
    middleRight?: string;
    bottomBig?: string;
  };

}

export const projects: Project[] = [
{
    id: "legdr",
    title: "Ledgr",
    subtitle: "High-End Editorial Design System",
    href: "/project-details/legdr",
    imageSrc: "/projects/ledgr/1.png",
    imageAlt: "Ledgr Financial Analytics & Expense Management Dashboard",
    Tools: "Aura Creative",
    category: "Fintech & Web Application",
    year: "2026",
    overview: "Ledgr is a modern financial management dashboard engineered to simplify personal expense tracking and cash flow monitoring. The platform balances high-density data visualization with an effortless user experience—featuring a three-column desktop architecture, interactive multi-card carousels, responsive cash flow analytics, and quick-search global navigation (⌘K). Built with modular TypeScript components and utility-first styling, it provides a seamless, accessible interface for managing accounts, budgets, and real-time transaction histories.",
    liveUrl: "https://ledgr-eta-nine.vercel.app/",
    secondaryImages: {
      topBig: "/projects/ledgr/2 (1).png",
      
      bottomBig: "/projects/ledgr/2 (2).png",
    },
  },

  {
    id: "keiton",
    title: "KEITON",
    subtitle: "Civic Portal Mobile Architecture",
    href: "/project-details/keiton",
    imageSrc: "/projects/keiton/keiton.png",
    imageAlt: "Keiton Premium Footwear E-Commerce Homepage Showcase",
    Tools: "Civic Initiative Redesign",
    category: "E-Commerce Website",
    year: "2026",
    overview: "Keiton is a premium, high-performance footwear e-commerce platform designed to optimize retail conversion through clean grid visual architectures and structured content hierarchies. The application balances editorial design with commercial utility—featuring a bold widescreen lifestyle hero showcase, highly scannable collection entry blocks, micro-interaction-driven product displays with badge callouts, and multi-tier rating columns to cultivate immediate consumer trust. Engineered with semantic HTML and utility-first responsiveness, it delivers an aesthetic, smooth browsing environment optimized for digital shoe discovery.",
    liveUrl: "https://store-e-commerce-xi.vercel.app/",
    secondaryImages: {
      topBig: "/projects/keiton/gallery (1).png",
      
      bottomBig: "/projects/keiton/gallery (2).png",
    },
  },

{
    id: "kfc-redesign",
    title: "KFC Redesign",
    subtitle: "Modern Fast-Food Experience",
    href: "/project-details/kfc-redesign",
    imageSrc: "/projects/kfc-redesign/KFC Hero.png",
    imageAlt: "KFC brand identity and digital interface design",
    Tools: "VS Code, Claude AI",
    category: "Web",
    year: "2026",
    overview: "This project presents a comprehensive UX/UI redesign of the KFC digital ordering platform, engineered to transform a standard fast-food menu into a modern, high-conversion web application. By eliminating cluttered decision matrices, the interface introduces a streamlined navigation flow—featuring dedicated tabs for localized deals, an intuitive side-by-side menu layout, a friction-free secure checkout, and a highly visual live order tracker. The system emphasizes high-impact food imagery, bold brand typography, and structured layout component blocks to minimize user drop-off and maximize average order value.",
    liveUrl: "https://kfc-redesign-rho.vercel.app/",
    secondaryImages: {
      topBig: "/projects/kfc-redesign/kfc (1).png",
      middleLeft: "/projects/kfc-redesign/kfc (2).png",
      middleRight: "/projects/kfc-redesign/kfc (3).png",
      bottomBig: "/projects/kfc-redesign/kfc (4).png",
    },
  },

    {
    id: "jurneo",
    title: "Jurneo",
    subtitle: "Premium Travel & Trip Planner",
    href: "/project-details/jurneo",
    imageSrc: "/projects/jurneo/jurneo.png",
    imageAlt: "Jurneo travel mobile application high-fidelity mockup",
    Tools: "Figma",
    category: "Mobile App : Case Study",
    year: "2026",
    overview: "An intuitive mobile application designed to solve complex booking structures and trip planning friction. Features custom contextual search flows and lightweight layout screens built for mobile-first responsiveness.",
    liveUrl: "https://www.figma.com/proto/7fMmjFATdXH44sNWFYkhKl/Final-Cse-study?node-id=282-3899&t=J9HTH2TfT2NTy5Zb-1&scaling=contain&content-scaling=responsive&page-id=282%3A3898",
    secondaryImages: {
      topBig: "/projects/jurneo/gallery (3).png",
      middleLeft: "/projects/jurneo/gallery (1).png",
      middleRight: "/projects/jurneo/gallery (4).png",
      bottomBig: "/projects/jurneo/gallery (2).png",
    },
  },

    {
    id: "electrohub",
    title: "ElectroHub",
    subtitle: "Vista Velvet — Premium E-Commerce Experience",
    href: "/project-details/electrohub",
    imageSrc: "/projects/electrohub/electrohub.png",
    imageAlt: "ElectroHub Luxury E-Commerce Interface Showcase",
    Tools: "Figma",
    category: "Web",
    year: "2025",
    overview: "ElectroHub is a premium e-commerce web platform engineered to elevate electronics retail into an immersive, clean, and content-driven digital experience. Moving away from data-dense, overwhelming grids, the interface utilizes generous whitespace, refined modern typography, and high-contrast lifestyle product frames to guide user attention naturally. Built with an intuitive icon-driven category navigation, curated trending highlights, and trust-focused brand segments, it presents a highly scannable, minimal, and accessible ecosystem optimized for seamless cross-device exploration.",
    liveUrl: "https://www.figma.com/proto/qbJbrDvU0WiPwu5SULB2CH/ElectroHub_Website?node-id=1-549&t=3UdkZtL2SLUTw2Bc-1&scaling=contain&content-scaling=responsive&page-id=0%3A1",
    secondaryImages: {
      topBig: "/projects/electrohub/electrohub (1).png",
      bottomBig: "/projects/electrohub/electrohub (2).png",
     
    },
}, 

  {
    id: "aurospace",
  title: "AUROSPACE",
  subtitle: "Luxury Real Estate & Long-Term Rental Platform",
  href: "/project-details/aurospace",
  imageSrc: "/projects/aurospace/hero.png",
  imageAlt: "AuroSpace Luxury Real Estate Landing Page Showcase",
  Tools: "Real Estate & Asset Management UI",
  category: "Web Application",
  year: "2026",
  overview: "AuroSpace is an ultra-premium, long-term residential rental platform engineered to streamline high-end property discovery across premier metro locations. Built with clean visual hierarchy, low-friction navigation, and curated asset cards, the platform bridges deep real estate intelligence with high-conversion UI/UX. The web architecture features a location-and-budget-driven hero search engine, social proof metrics, a structured 4-step onboarding journey, interactive filter controls, and dynamic listing displays tailored for high-net-worth individuals, expats, and luxury tenants.",
  liveUrl: "https://aurospacerealestate.vercel.app/",
  secondaryImages: {
    topBig: "/projects/aurospace/1 (1).png",
    bottomBig: "/projects/aurospace/1 (2).png",
    },
  },
  
  
  
];



  