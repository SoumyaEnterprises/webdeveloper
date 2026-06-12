import {
  Globe,
  ShoppingCart,
  Building2,
  UserRound,
  Rocket,
  RefreshCw,
  Search,
  Wrench,
  Ship,
} from "lucide-react";

export const services = [
  {
    title: "Business Websites",
    description:
      "Polished, conversion-focused websites that present your company with clarity and credibility.",
    href: "/services/website-development",
    icon: Building2,
    size: "lg" as const,
  },
  {
    title: "Export Company Websites",
    description:
      "International-ready websites built to win trust with overseas buyers and import partners.",
    href: "/services/exporter-websites",
    icon: Ship,
    size: "lg" as const,
  },
  {
    title: "Ecommerce Stores",
    description:
      "Fast, secure online stores with seamless checkout and inventory-friendly structures.",
    href: "/services/ecommerce-development",
    icon: ShoppingCart,
    size: "md" as const,
  },
  {
    title: "Portfolio Websites",
    description:
      "Visual-first sites for creatives and professionals who need their work to do the talking.",
    href: "/services",
    icon: UserRound,
    size: "md" as const,
  },
  {
    title: "Landing Pages",
    description: "High-converting, focused pages built for campaigns and product launches.",
    href: "/services",
    icon: Rocket,
    size: "sm" as const,
  },
  {
    title: "Website Redesign",
    description: "Transform an outdated site into a fast, modern experience without losing your data.",
    href: "/services",
    icon: RefreshCw,
    size: "sm" as const,
  },
  {
    title: "SEO Optimization",
    description: "Technical and on-page SEO foundations that help your site get found.",
    href: "/services",
    icon: Search,
    size: "sm" as const,
  },
  {
    title: "Website Maintenance",
    description: "Ongoing updates, monitoring and support so your site stays fast and secure.",
    href: "/services",
    icon: Wrench,
    size: "sm" as const,
  },
  {
    title: "Corporate Websites",
    description: "Enterprise-grade sites with structured content for larger organizations.",
    href: "/services",
    icon: Globe,
    size: "md" as const,
  },
];

export const valueProps = [
  {
    title: "Premium Design",
    description: "Custom-crafted interfaces with the polish of a top-tier studio — never a generic template.",
  },
  {
    title: "Fast Delivery",
    description: "Streamlined process and focused execution get your website live without unnecessary delays.",
  },
  {
    title: "Affordable Pricing",
    description: "Agency-quality work at pricing built for growing businesses, not just large enterprises.",
  },
  {
    title: "SEO Optimization",
    description: "Every site is structured with clean markup and metadata so search engines understand it.",
  },
  {
    title: "Mobile-First Development",
    description: "Designed for the screen most of your visitors use first, then refined for every device.",
  },
  {
    title: "Business Growth Focus",
    description: "Every layout and message is designed to move visitors toward an enquiry or sale.",
  },
  {
    title: "Long-Term Support",
    description: "We stay reachable after launch for updates, fixes and guidance as your business grows.",
  },
  {
    title: "Conversion-Focused Strategy",
    description: "Clear calls-to-action, trust signals and structure guide visitors toward taking action.",
  },
];

export const comparisons = [
  {
    old: "Generic templates reused across dozens of businesses",
    soumya: "A custom design system built around your brand and audience",
  },
  {
    old: "Vague timelines and slow back-and-forth",
    soumya: "A defined process with clear milestones and fast turnaround",
  },
  {
    old: "Pricing that changes once the project starts",
    soumya: "Transparent pricing agreed upfront, with no hidden surprises",
  },
  {
    old: "A site that's abandoned the moment it's delivered",
    soumya: "Ongoing support so your website keeps working for your business",
  },
  {
    old: "One person juggling design, code and content",
    soumya: "A focused process covering strategy, design, build and testing",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, audience and goals — what the website needs to achieve and who it needs to convince.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We map the site structure, key messages and user journeys so every page has a clear purpose before any design begins.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Custom visual design tailored to your brand — layouts, typography and interactions crafted to feel premium and on-message.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Your design is built with clean, modern code — fast-loading, responsive and structured for long-term maintainability.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Every page is checked across devices and browsers for performance, accessibility and functionality before launch.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "We deploy your website, configure essentials like analytics and SEO basics, and hand over a site that's ready to grow.",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    description: "Ideal for individuals and small businesses getting online with a strong first impression.",
    price: "Custom quote",
    features: [
      "Up to 5 pages",
      "Custom premium design",
      "Mobile-first responsive build",
      "Basic on-page SEO setup",
      "Contact form integration",
      "1 round of revisions",
    ],
    highlight: false,
  },
  {
    name: "Business",
    description: "Ideal for growing companies that need a complete, conversion-focused web presence.",
    price: "Custom quote",
    features: [
      "Up to 10 pages",
      "Advanced custom design system",
      "Animations & micro-interactions",
      "SEO structure & metadata setup",
      "Blog or resources section",
      "Performance optimization",
      "2 rounds of revisions",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "Ideal for large organizations and custom solutions with complex requirements.",
    price: "Custom quote",
    features: [
      "Unlimited pages & custom modules",
      "Ecommerce or export catalog support",
      "Advanced animation system",
      "Dedicated project planning",
      "Priority support & SLA",
      "Scalable architecture",
      "Ongoing collaboration",
    ],
    highlight: false,
  },
];
