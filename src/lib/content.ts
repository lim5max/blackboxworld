import type {
  WorkCard,
  StatCard,
  LogoEntry,
  ProcessCard,
  ProjectCard,
  FeatureCard,
  PricingTier,
  Testimonial,
  FaqGroup,
} from "@/types/content";

export const hero = {
  badge: { prefix: "Trusted by", emphasis: "200+", suffix: "founders worldwide", brand: "" },
  title: "We'll build your idea into a ready to launch MVP in 2-weeks",
  body: "The #1 AI product studio - trusted by startups and founders to design, build, and launch products that scale.",
  primaryCta: { label: "Book a Call", href: "/book" },
  secondaryCta: { label: "View Pricing", href: "#price" },
} as const;

export const workCarousel: WorkCard[] = [
  { id: "p1", image: "/images/qQfvBdVvST7kBpAm3jkPaJFGVrU.jpg", logo: "/images/x2b4KCkWQevPlNUI3ZmEW6M3OA.png", title: "Mobile app for Nimora",     variant: "phone" },
  { id: "p2", image: "/images/fHgWvPcLrfgv1IjwyOs3vbqblxc.jpg", logo: "/images/d5h3AFG0x4q9dpNfOoNXtQmISgQ.png", title: "Finance dashboard for Voltly", variant: "wide" },
  { id: "p3", image: "/images/cyIyW32eSM9oLAzlKLVGhgKfjE.jpg",  logo: "/images/bYozVfKUtOe9pLuXtyiTvOd3Ao.png", title: "Operations panel for Kairo",  variant: "wide" },
  { id: "p4", image: "/images/RnY49Oxpu0Qubp2Pek2IQqrz47o.jpg", logo: "/images/JYG7ihagK3lOI39zxY0FNpsI7I.png", title: "Social app for Wavebound",    variant: "phone" },
  { id: "p5", image: "/images/5oyBfQxUoaSNnLDT5FPYm282m4.png",  logo: "/images/qr8lNhvBGlbuMrKFS6SO2UYwsnw.png", title: "Investor portal for Zenith",   variant: "wide" },
  { id: "p6", image: "/images/zzxTyDmmIVZcKQtd4zaqtJ5zfhM.png",  logo: "/images/7yGyanY7eIVU5SGpBsMwiybFgog.png", title: "Creator studio for Lumen",     variant: "wide" },
  { id: "p7", image: "/images/oKotSfjwyD3glPouvbJCNxPb0cU.jpg",  logo: "/images/CA7zijvz8uSIoHktJobeKYdnc.png", title: "Payments suite for Orbita",    variant: "wide" },
];

export const stats: StatCard[] = [
  { label: "Average time to MVP", value: "2 wks" },
  { label: "Projects shipped", value: "150+" },
  { label: "On-time delivery rate", value: "98%" },
];

export const logos: LogoEntry[] = [
  { src: "/images/Se4DELo6pLUc1OEyg2asJmaaGQ.svg", alt: "Launch Pop", width: 74, height: 32 },
  { src: "/images/CLh8tjlQnc0fId7bNQlCPOQrUhg.svg", alt: "Humi",       width: 125, height: 20 },
  { src: "/images/roUs73VFOq23o2EUZym2vRNaBys.svg", alt: "Hornbeam",   width: 117, height: 26 },
  { src: "/images/w9CdEuSuN7Ex5JvuYQzQj5JTw.png",   alt: "Myodetox",   width: 270, height: 50 },
  { src: "/images/jVGwqflHeqYbCErUi1jYJKb6Q.svg",   alt: "GrantMatch", width: 70,  height: 32 },
  { src: "/images/xYgpdBP41zO5ZYf3V1sTyoNnHAM.png", alt: "Lendly",     width: 285, height: 77 },
  { src: "/images/46J08n7WO3KYC8MEjnKdXS0M7Y.png",  alt: "Affinity",   width: 419, height: 38 },
];

export const howWeWork = {
  title: "How we work?",
  subtitle: "We simplify complex builds into fast, focused sprints that ship real results every week.",
  cards: [
    { tag: "Build",       title: "Build your MVP in just 2 weeks",        body: "We start by designing and developing the core functionality to validate your concept fast — so you can prove traction before investing big.", bgFrom: "#0e1024", bgTo: "#4a2bff" },
    { tag: "Itirate",     title: "Set your roadmap and milestones",       body: "Once live, we help you define clear goals and run bi-weekly sprints to ship features, improve UX, and scale efficiently.",                bgFrom: "#3a1bff", bgTo: "#bd2bff" },
    { tag: "Grow",        title: "Move faster with AI-powered tools",     body: "We leverage Lovable, Cursor, and Supabase to build at unmatched speed — combining AI automation with real engineering best practices.",   bgFrom: "#a0249c", bgTo: "#ff5b50" },
    { tag: "Collaborate", title: "Stay flexible with async collaboration", body: "Join weekly calls, stay connected asynchronously, and pause or cancel anytime — total flexibility, zero long-term commitments.",          bgFrom: "#ff6f5e", bgTo: "#ffd1a9" },
  ] as ProcessCard[],
};

export const exploreWork = {
  title: "Explore work",
  body: "We build polished, production-ready apps that look great and scale fast.",
  cta: { label: "View all work", href: "/work" },
  cards: [
    { id: "ew1", image: "/images/8mtG4MOmLSI8Pbm4UN69jB9tcsk.jpg", logo: "/images/i1xf8VIW21qgtxpkbYBMx8aRw.svg", title: "Briefly",   subtitle: "Streamlining internal brief creation for media teams" },
    { id: "ew2", image: "/images/oNYl2xWtI3cEN5TbAwCNLXl5M.jpg",   logo: "/images/UPwre7eBH9p3ZMJeBcb8UMq4M.svg", title: "Orbita",    subtitle: "Fintech simplifying B2B payments" },
    { id: "ew3", image: "/images/SJZYFUNVc7Pa0NeJ7Ivl64cQ4dA.png", logo: "/images/94jhSKowHW9sNduGRYEoNGxXEyg.svg", title: "Lumen",     subtitle: "Building the next generation of creator tools" },
  ] as ProjectCard[],
};

export const whySubscribe = {
  title: "Why subscribe?",
  subtitle: "By the end you'll have a full working product ready to launch to the world.",
  cards: [
    { title: "AI Native",                body: "AI isn't just a tool — it's a multiplier. We use it to remove friction, accelerate creation, and free you to focus on vision, not code." },
    { title: "Clear, async collaboration", body: "Stay in sync through weekly calls and async updates. No endless meetings, no micromanagement — just progress." },
    { title: "Design matters",           body: "In a world filled with AI clones, user experience matters more than ever. Design is what makes technology feel human — and that's where we obsess." },
    { title: "Operate with freedom",     body: "No rigid contracts. Just an open, flexible process that adapts to how you work — not the other way around." },
  ] as FeatureCard[],
  sayNoMoreTo: ["Long meetings", "High cost hiring full-time", "Micromanagement", "Long contracts"],
};

export const pricing: PricingTier[] = [
  {
    icon: "/images/Eid4jMJKXqCs9rhjVrxEuQ4l8t4.png",
    name: "Sprints",
    subtitle: "2-Weeks Sprints",
    description: "For founders or teams who want to move fast — strategy, design, and development executed in 14 days.",
    price: "$4,500",
    cadence: "/ Bi-Weekly",
    cta: "Book A Call",
    ctaVariant: "light",
    included: [
      "AI developer team",
      "Unlimited revisions",
      "Product strategy & roadmap",
      "Integrations & API's",
      "Communication via Slack",
      "Weekly progress updates",
    ],
  },
  {
    icon: "/images/AwxD0yUadlc6xiyFwfQAda2EU.png",
    name: "MVP Development",
    subtitle: "We deliver an MVP in 2 weeks",
    description: "In 2-weeks you'll have a full working product ready to launch to the world.",
    price: "$9,500",
    cadence: "/ One-time",
    cta: "Get Started Today",
    ctaVariant: "dark",
    isDark: true,
    included: [
      "Functional MVP built with Lovable",
      "Database + API integrations (Supabase, OpenAI, etc)",
      "User authentication & onboarding flow",
      "Product design components",
      "Communication via Slack",
      "Weekly progress updates",
    ],
  },
];

export const testimonials: Testimonial[] = [
  { body: "Working with Creme was a game changer for Montra. The speed at which they operate paired with their high quality design standards resulted in a beautiful, elegant and intuitive product that wowed employees, customers and investors.", name: "Campbell Baron", role: "CEO & Founder @montra",         avatar: "/images/zuoQWWUTPsrIYXBddCZUv2dD9I.png", logo: "/images/Ga8vfNFxAf9JwpbK2esRcOPBtc.png" },
  { body: "We wanted to find a partner to help us build an internal app to help us optimize our workflow. Our proprietary signal testing method generates a lot of data and requires a full team to build reports and insights. We now no longer need a team in place to do that, our strategists are enabled now to produce their own reports in minutes using our app generator.", name: "Eva Chan", role: "CEO & Founder @launchpop", avatar: "/images/zfVAMyoVfuIvwrcGDkDeRya84k.jpg", logo: "/images/qaQtncNWVNG34jFosomfe6UBsU.png" },
  { body: "Speed, quality, and cost. Typically when working with an external development team, you have to sacrifice one of those elements. From day one Creme has delivered high quality work, on budget and on time. They were instrumental in us navigating our MVP build and we've received many compliments on the design of our product from customers and investors alike.", name: "Kanwar Gill", role: "CEO & Co-Founder @ratio", avatar: "/images/95a51PaszZBSiCsWrC2RPunOPAo.jpg", logo: "/images/ufilRabm4AYUOBo5rZwBQXlX8.png" },
  { body: "Creme helped us design & develop an MVP for a product with Bubble, and just months later… we raised a seed round for the company. They have been a phenomenal sparring partner in developing roadmaps, and incredibly talented in building fast + efficiently + beautifully. 10/10 would recommend.", name: "Kate Ward", role: "COO @creatornow", avatar: "/images/CSGAFEJAPrL4itor5zFPHCM50.jpg", logo: "/images/yiE1WJ78PE6rEr0KA3skvOs0Fq4.png" },
  { body: "I have just adored working with you all. From the first meeting, [there were] really clear cut directions and you guys pushed us when we were working too slow.", name: "Marie Bigham", role: "CEO & Co-Founder @aei", avatar: "/images/3fJ1LtHdVCBOj5sCKb1VhpoBBc.jpg", logo: "/images/Pu4wY54YKH21O3nnTskY5QWyes4.png" },
  { body: "Creme and Bubble were great in our very early launch phase. Low-code helped us launch and get started.", name: "David Kreiger", role: "CEO & Co-Founder @onder", avatar: "/images/M1NgDkIHoAGVI6w6PwuhTrGcq3w.png", logo: "/images/KQQVbakk4Kn9a8d0FgNG9bNaiw.png" },
  { body: "Great team, amazing UI/UX skills. Helped us go from idea to product in market 3 times now. Couldn't do better.", name: "Zachary Laberge", role: "Founder @frenter", avatar: "/images/Ay4RcIumBuDkLxG6f4VCke6ocs.jpeg", logo: "/images/YmWV6fgqt0e1bXlx7j027POQUlY.png" },
  { body: "Working with Creme has been an absolute pleasure. I actually look forward to the meetings. They're prepared, on point, have a process and drive at providing the expertise we hired them for while allowing us to really engage in the creative process.", name: "John Gwin", role: "Founder @theauctusgroup", avatar: "/images/iSFUsF49xj8JjmIL3iiJffzrji8.png", logo: "/images/LXldo1qyZLg8XXCKdTG33i8Hg.svg" },
  { body: "I decided to go with Creme because of their commitment to doing whatever it took to get it right and their desire to create a great user experience. They have been amazingly patient and flexible as together we have created a tool that will help businesses with 25-250 employees manage change better.", name: "Tabetha Sheaver", role: "Founder @plusdelta314", avatar: "/images/QcW5ZrhyDCxWUd5qsrI8xK4OQ.png", logo: "/images/mnfvb4i5EaTGB98PAZa5zhz96U.png" },
];

export const faqs: FaqGroup[] = [
  {
    category: "General FAQ's",
    items: [
      { q: "What is BlackBoxWorld?", a: "BlackBoxWorld LLP is an AI product studio that designs, builds, and launches software products with AI-native tooling. We help founders and teams turn ideas into fully functional products in weeks, not months." },
      { q: "What makes BlackBoxWorld different from other AI agencies?", a: "We pair top-tier product design with AI-native engineering. Most agencies bolt AI tools onto a traditional workflow — we built ours around modern AI-first development from day one, which is why we ship full MVPs in 14 days instead of months." },
      { q: "Who does BlackBoxWorld work with?", a: "We work with early-stage founders, venture-backed startups, and product-led teams who want to move quickly. Our clients have raised over $25M+ in funding after working with us." },
      { q: "How many products has BlackBoxWorld built?", a: "We've shipped over 200 products across SaaS, fintech, marketplaces, internal tools, and consumer apps." },
    ],
  },
  {
    category: "Services & Process",
    items: [
      { q: "What services does BlackBoxWorld offer?", a: "End-to-end product development: discovery, product design, UI/UX, full-stack engineering, AI integrations, and post-launch iteration sprints." },
      { q: "How does the 2-week sprint work?", a: "Day 1 — discovery and scoping. Days 2–4 — design and architecture. Days 5–12 — engineering. Days 13–14 — QA, polish, and handoff. You get a working build at the end of each sprint." },
      { q: "Which stack do you use?", a: "Modern, production-grade stacks: React/Next.js, TypeScript, Postgres/Supabase, Node.js, and AI APIs from OpenAI, Anthropic, and others. Choice is driven by your product needs, not by what's trendy." },
      { q: "Can BlackBoxWorld help me validate my app idea?", a: "Yes. Our 2-week Sprint is designed exactly for validation: a working MVP you can put in front of real users and investors before committing to a full build." },
    ],
  },
  {
    category: "Pricing & Timelines",
    items: [
      { q: "How much does it cost to build an AI app?", a: "Our 2-week Sprint is $4,500 bi-weekly and our flagship MVP Development package is $9,500 one-time. Custom scopes are quoted after a discovery call." },
      { q: "How long does it take to build an app with BlackBoxWorld?", a: "Most MVPs ship in 2 weeks. Larger products typically take 4–8 weeks split into bi-weekly sprints, with a working build delivered at the end of every sprint." },
      { q: "Do you offer ongoing support after launch?", a: "Yes — clients can stay on a bi-weekly Sprint plan for continued feature development, design iterations, or maintenance. Pause or cancel anytime." },
    ],
  },
  {
    category: "AI & Integrations",
    items: [
      { q: "What types of AI features can BlackBoxWorld build?", a: "Chat interfaces, retrieval-augmented generation, document parsing, custom embeddings, agentic workflows, voice interfaces, image generation, and AI-powered analytics — built on OpenAI, Anthropic, and other leading models." },
      { q: "Can BlackBoxWorld integrate AI into my existing product?", a: "Absolutely. We frequently embed AI capabilities into existing React, Next.js, or Supabase codebases without rebuilding the whole product." },
      { q: "Is the software you ship scalable?", a: "Yes. We deliver standard React + TypeScript on top of Postgres-class databases, so the codebase scales the same way any modern web application would — including horizontal scaling, caching layers, and CDN-backed deployments." },
    ],
  },
];

export const cta = {
  title: "Start your project with us today!",
  buttonLabel: "Start a Project",
  href: "/book",
};

export const footer = {
  title: "Subscribe to BlackBoxWorld",
  body: "The partner for founders building products with AI.",
  emailPlaceholder: "Enter email...",
  submitLabel: "Sign Up",
  links: [
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/#price" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "FAQs", href: "/#faqs" },
  ],
  legalLinks: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund" },
  ],
  brand: "BlackBoxWorld LLP",
  year: "© 2026",
  rightsText: "All rights reserved",
};

export const nav = {
  links: [
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/#price" },
    { label: "FAQs", href: "/#faqs" },
  ],
  cta: { label: "Book a Call", href: "mailto:hello@blackboxworld.com" },
};
