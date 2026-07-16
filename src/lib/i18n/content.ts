import type { Locale } from "./config";
import type { SiteContent } from "@/types/content";

const workAssets = [
  ["p1", "/images/qQfvBdVvST7kBpAm3jkPaJFGVrU.jpg", "/images/x2b4KCkWQevPlNUI3ZmEW6M3OA.png", "phone"],
  ["p2", "/images/fHgWvPcLrfgv1IjwyOs3vbqblxc.jpg", "/images/d5h3AFG0x4q9dpNfOoNXtQmISgQ.png", "wide"],
  ["p3", "/images/cyIyW32eSM9oLAzlKLVGhgKfjE.jpg", "/images/bYozVfKUtOe9pLuXtyiTvOd3Ao.png", "wide"],
  ["p4", "/images/RnY49Oxpu0Qubp2Pek2IQqrz47o.jpg", "/images/JYG7ihagK3lOI39zxY0FNpsI7I.png", "phone"],
  ["p5", "/images/5oyBfQxUoaSNnLDT5FPYm282m4.png", "/images/qr8lNhvBGlbuMrKFS6SO2UYwsnw.png", "wide"],
  ["p6", "/images/zzxTyDmmIVZcKQtd4zaqtJ5zfhM.png", "/images/7yGyanY7eIVU5SGpBsMwiybFgog.png", "wide"],
  ["p7", "/images/oKotSfjwyD3glPouvbJCNxPb0cU.jpg", "/images/CA7zijvz8uSIoHktJobeKYdnc.png", "wide"],
] as const;

const logos = [
  { src: "/images/Se4DELo6pLUc1OEyg2asJmaaGQ.svg", alt: "Launch Pop", width: 74, height: 32 },
  { src: "/images/CLh8tjlQnc0fId7bNQlCPOQrUhg.svg", alt: "Humi", width: 125, height: 20 },
  { src: "/images/roUs73VFOq23o2EUZym2vRNaBys.svg", alt: "Hornbeam", width: 117, height: 26 },
  { src: "/images/w9CdEuSuN7Ex5JvuYQzQj5JTw.png", alt: "Myodetox", width: 270, height: 50 },
  { src: "/images/jVGwqflHeqYbCErUi1jYJKb6Q.svg", alt: "GrantMatch", width: 70, height: 32 },
  { src: "/images/xYgpdBP41zO5ZYf3V1sTyoNnHAM.png", alt: "Lendly", width: 285, height: 77 },
  { src: "/images/46J08n7WO3KYC8MEjnKdXS0M7Y.png", alt: "Affinity", width: 419, height: 38 },
];

const testimonials = [
  ["Campbell Baron", "CEO & Founder @montra", "/images/zuoQWWUTPsrIYXBddCZUv2dD9I.png", "/images/Ga8vfNFxAf9JwpbK2esRcOPBtc.png", "Working with BlackBoxWorld was a game changer. Their speed and design standards gave us a product that impressed customers and investors."],
  ["Eva Chan", "CEO & Founder @launchpop", "/images/zfVAMyoVfuIvwrcGDkDeRya84k.jpg", "/images/qaQtncNWVNG34jFosomfe6UBsU.png", "They turned a data-heavy internal workflow into a clear product our strategists can use in minutes without a separate reporting team."],
  ["Kanwar Gill", "CEO & Co-Founder @ratio", "/images/95a51PaszZBSiCsWrC2RPunOPAo.jpg", "/images/ufilRabm4AYUOBo5rZwBQXlX8.png", "Speed, quality, and cost usually compete. BlackBoxWorld delivered all three and helped us navigate the MVP build on time and on budget."],
  ["Kate Ward", "COO @creatornow", "/images/CSGAFEJAPrL4itor5zFPHCM50.jpg", "/images/yiE1WJ78PE6rEr0KA3skvOs0Fq4.png", "They were a phenomenal product partner: fast, thoughtful, and able to turn feedback into a polished build without losing momentum."],
] as const;

const shared = {
  logos,
  testimonialItems: testimonials.map(([name, role, avatar, logo, body]) => ({ name, role, avatar, logo, body })),
  workImages: workAssets,
};

export const enContent: SiteContent = {
  meta: {
    home: { title: "BlackBoxWorld LLP — AI Product Studio", description: "Turn your idea into a ready-to-launch product in weeks with an AI-native design and engineering team." },
    about: { title: "About — BlackBoxWorld LLP", description: "Meet the small senior team behind BlackBoxWorld and how we design and ship products." },
    terms: { title: "Terms of Service — BlackBoxWorld LLP", description: "Terms governing BlackBoxWorld LLP professional services and website use." },
    privacy: { title: "Privacy Policy — BlackBoxWorld LLP", description: "How BlackBoxWorld LLP collects, uses, and protects personal data under UK GDPR." },
    refund: { title: "Refund & Cancellation Policy — BlackBoxWorld LLP", description: "How refunds, pauses, and cancellations work for BlackBoxWorld LLP engagements." },
  },
  nav: {
    links: [{ label: "About", href: "/about" }, { label: "Pricing", href: "/#price" }, { label: "FAQs", href: "/#faqs" }],
    cta: { label: "Book a Call", href: "mailto:hello@blackboxworld.com" },
    languageLabel: "Choose language",
  },
  hero: {
    badge: { prefix: "Trusted by", emphasis: "200+", suffix: "founders worldwide" },
    title: "We’ll build your idea into a ready-to-launch MVP in 2 weeks",
    body: "An AI-native product studio trusted by founders to design, build, and launch products that scale.",
    primaryCta: { label: "Book a Call", href: "mailto:hello@blackboxworld.com" },
    secondaryCta: { label: "View Pricing", href: "#price" },
  },
  workCarousel: shared.workImages.map(([id, image, logo, variant], index) => ({ id, image, logo, variant, title: ["Mobile app for Nimora", "Finance dashboard for Voltly", "Operations panel for Kairo", "Social app for Wavebound", "Investor portal for Zenith", "Creator studio for Lumen", "Payments suite for Orbita"][index] })),
  stats: [{ label: "Average time to MVP", value: "2 wks" }, { label: "Products shipped", value: "200+" }, { label: "On-time delivery", value: "98%" }],
  logos: { title: "Trusted by ambitious teams", items: shared.logos },
  howWeWork: {
    title: "How we work.",
    subtitle: "Fast, focused sprints that ship a real result every week.",
    cards: [
      { tag: "Build", title: "Build your MVP in just 2 weeks", body: "We design and build the core product first so you can validate the idea before making a larger investment.", bgFrom: "#0e1024", bgTo: "#4a2bff" },
      { tag: "Iterate", title: "Turn feedback into a clear roadmap", body: "Once the first version is live, we prioritize real user feedback and ship the next highest-impact improvements.", bgFrom: "#3a1bff", bgTo: "#bd2bff" },
      { tag: "Grow", title: "Move faster with AI-native tools", body: "We combine modern AI tooling with disciplined engineering and design, reducing production time without lowering the bar.", bgFrom: "#a0249c", bgTo: "#ff5b50" },
      { tag: "Collaborate", title: "Stay close without endless meetings", body: "Async updates, focused reviews, and clear ownership keep work moving while your team stays focused.", bgFrom: "#ff6f5e", bgTo: "#ffd1a9" },
    ],
  },
  exploreWork: {
    title: "Explore our work",
    body: "Polished, production-ready products built to launch and learn fast.",
    cta: { label: "Start a project", href: "mailto:hello@blackboxworld.com" },
    cards: [
      { id: "ew1", image: "/images/8mtG4MOmLSI8Pbm4UN69jB9tcsk.jpg", logo: "/images/i1xf8VIW21qgtxpkbYBMx8aRw.svg", title: "Briefly", subtitle: "Internal brief creation for media teams" },
      { id: "ew2", image: "/images/oNYl2xWtI3cEN5TbAwCNLXl5M.jpg", logo: "/images/UPwre7eBH9p3ZMJeBcb8UMq4M.svg", title: "Orbita", subtitle: "Fintech simplifying B2B payments" },
      { id: "ew3", image: "/images/SJZYFUNVc7Pa0NeJ7Ivl64cQ4dA.png", logo: "/images/94jhSKowHW9sNduGRYEoNGxXEyg.svg", title: "Lumen", subtitle: "Creator tools built for daily work" },
    ],
  },
  whySubscribe: {
    title: "Why work by subscription?",
    subtitle: "Senior output without hiring another full-time team.",
    cards: [
      { title: "AI-native speed", body: "We use AI to remove production friction while senior specialists keep the thinking and quality bar human." },
      { title: "Clear async collaboration", body: "A transparent queue, written updates, and focused reviews keep every request moving." },
      { title: "Design that earns attention", body: "From product screens to campaign assets, every surface is designed as part of one coherent brand." },
      { title: "Flexible by default", body: "No long contract. Change priorities, pause, or cancel when your roadmap changes." },
    ],
    sayNoMoreLabel: "Say goodbye to",
    sayNoMoreTo: ["Long hiring cycles", "Fragmented freelancers", "Micromanagement", "Long retainers"],
  },
  pricing: {
    selectorLabel: "Choose a service",
    includedLabel: "What’s included",
    featuredLabel: "Most popular",
    trialCta: "Try a one-off project",
    design: {
      label: "Design subscription",
      eyebrow: "Design, always on",
      title: "A senior design team without the hiring cycle.",
      subtitle: "Landing pages, product UI, decks, campaigns, and marketing materials delivered through one clear queue.",
      plans: [
        { kind: "trial", icon: "/images/Eid4jMJKXqCs9rhjVrxEuQ4l8t4.png", name: "Test Drive", subtitle: "One paid trial", description: "See how we think and deliver before committing to a monthly plan.", price: "$950", cadence: "/ One-time", cta: "Try a one-off project", note: "50% is credited to your first month when you subscribe within 14 days.", included: ["1 landing-page section or 3–5 campaign creatives", "Delivery in 3–5 business days", "One revision round", "Production-ready source files"] },
        { kind: "subscription", icon: "/images/AwxD0yUadlc6xiyFwfQAda2EU.png", name: "Design Partner", subtitle: "One active request", description: "A reliable senior design function for product and brand work every week.", price: "$3,900", cadence: "/ Month", cta: "Start Design Partner", note: "Pause or cancel monthly.", featured: true, isDark: true, included: ["Landing pages and product UI", "Presentations and sales collateral", "Brand and marketing assets", "Typical 2–4 day turnaround", "Weekly design review"] },
        { kind: "subscription", icon: "/images/Eid4jMJKXqCs9rhjVrxEuQ4l8t4.png", name: "Design + Growth", subtitle: "Two active requests", description: "More capacity for teams shipping product and campaigns in parallel.", price: "$6,500", cadence: "/ Month", cta: "Start Design + Growth", note: "Pause or cancel monthly.", included: ["Everything in Design Partner", "Two parallel design requests", "Ongoing campaign and social creatives", "Priority queue", "Twice-weekly review"] },
      ],
    },
    development: {
      label: "Product development",
      eyebrow: "Build and ship",
      title: "AI-native product development in focused sprints.",
      subtitle: "From a first working MVP to ongoing product iterations with one senior cross-functional team.",
      plans: [
        { kind: "development", icon: "/images/Eid4jMJKXqCs9rhjVrxEuQ4l8t4.png", name: "Sprints", subtitle: "Two-week sprint", description: "For founders and teams who need strategy, design, and development executed quickly.", price: "$4,500", cadence: "/ Bi-weekly", cta: "Book a Call", note: "Pause or cancel before the next sprint.", included: ["AI-native engineering team", "Product strategy and roadmap", "UI/UX and design system", "Integrations and APIs", "Weekly progress review"] },
        { kind: "development", icon: "/images/AwxD0yUadlc6xiyFwfQAda2EU.png", name: "MVP Development", subtitle: "Ready to launch in two weeks", description: "A focused, functional first product designed and built around the core user journey.", price: "$9,500", cadence: "/ One-time", cta: "Start Your MVP", note: "Fixed scope agreed before kickoff.", isDark: true, included: ["Functional production-ready MVP", "Database and API integrations", "Authentication and onboarding", "Product design system", "QA, launch, and handoff"] },
      ],
    },
  },
  testimonials: { title: "Trusted by product leaders.", subtitle: "What clients say about working with BlackBoxWorld.", items: shared.testimonialItems },
  faqs: {
    title: "Questions? Answers.",
    groups: [
      { category: "General", items: [
        { q: "What is BlackBoxWorld?", a: "BlackBoxWorld LLP is an AI-native product studio that combines product strategy, design, and engineering in one senior team." },
        { q: "Who do you work with?", a: "We work with early-stage founders, venture-backed startups, and product teams that value speed without sacrificing quality." },
        { q: "Where is the team based?", a: "BlackBoxWorld LLP is registered in the United Kingdom and works with clients remotely across time zones." },
      ] },
      { category: "Design subscription", items: [
        { q: "What can I request?", a: "Landing pages, product UI, pitch decks, sales collateral, campaign concepts, social assets, and most other digital design work." },
        { q: "How does the queue work?", a: "You can add unlimited requests. We actively work on one or two at a time, depending on your plan, and move to the next as soon as one is approved." },
        { q: "Can I try the team before subscribing?", a: "Yes. Test Drive is a fixed-scope paid project delivered in 3–5 business days. Half of its fee is credited to your first month if you subscribe within 14 days." },
        { q: "Can I pause or cancel?", a: "Yes. Monthly design plans can be paused or cancelled before the next billing period." },
      ] },
      { category: "Product development", items: [
        { q: "Can you really ship an MVP in two weeks?", a: "Yes, when the first release has one clear user journey and a disciplined scope. Larger products are split into additional two-week sprints." },
        { q: "Which stack do you use?", a: "Usually React, Next.js, TypeScript, Postgres or Supabase, Node.js, and the AI APIs best suited to the product." },
        { q: "Do I own the files and code?", a: "Yes. Paid deliverables, source files, and code are handed over according to the agreed statement of work." },
      ] },
    ],
  },
  cta: { title: "Have something to ship? Let’s make it real.", button: { label: "Start a Project", href: "mailto:hello@blackboxworld.com" } },
  footer: {
    title: "Notes from BlackBoxWorld",
    body: "Practical product, design, and AI lessons for teams that ship.",
    emailPlaceholder: "Email address",
    submitLabel: "Sign Up",
    siteLabel: "Site",
    legalLabel: "Legal",
    links: [{ label: "About", href: "/about" }, { label: "Pricing", href: "/#price" }, { label: "Testimonials", href: "/#testimonials" }, { label: "FAQs", href: "/#faqs" }],
    legalLinks: [{ label: "Terms of Service", href: "/terms" }, { label: "Privacy Policy", href: "/privacy" }, { label: "Refund Policy", href: "/refund" }],
    brand: "BlackBoxWorld LLP",
    year: "© 2026",
    rightsText: "All rights reserved",
  },
  about: {
    eyebrow: "About",
    titleBefore: "A small studio shipping",
    titleAccent: "real products",
    titleAfter: "for ambitious teams.",
    intro: "BlackBoxWorld is a UK-based product studio. We take ideas from a blank document to a launched product with strategy, design, engineering, and AI under one roof.",
    founderEyebrow: "Founder",
    founderTitle: "Maksim — Founder & Product Engineer",
    founderBody: ["I started BlackBoxWorld because the distance between a strong idea and a usable product has never been smaller — if the right tools are paired with disciplined product thinking.", "The pattern behind the best launches is consistent: ruthless scope, sharp design, and fast feedback from real users.", "I stay close to every engagement and bring in focused senior specialists when the product needs deeper design, engineering, or growth expertise."],
    founderImageAlt: "Maksim, founder of BlackBoxWorld",
    founderCta: "Book a call",
    teamEyebrow: "The team",
    teamTitle: "Senior specialists around one product goal.",
    teamSubtitle: "A small cross-functional team assembled around the work — without layers of account management.",
    team: [
      { role: "Product & Strategy", body: "Turns business context into a focused roadmap and clear release scope.", image: "/images/team/product-strategy.webp" },
      { role: "Product Design", body: "Shapes flows, interfaces, and systems that feel coherent from the first release.", image: "/images/team/product-design.webp" },
      { role: "AI Engineering", body: "Builds reliable product foundations and useful AI into real user workflows.", image: "/images/team/ai-engineering.webp" },
      { role: "Brand & Growth", body: "Connects positioning, landing pages, and campaign assets into one story.", image: "/images/team/brand-growth.webp" },
    ],
    principlesTitle: "How we operate",
    principles: [{ title: "Ship in weeks, not quarters", body: "Every engagement is divided into focused increments with a working result at the end." }, { title: "Design-led engineering", body: "We clarify the product and user experience before complexity gets baked into code." }, { title: "AI as a multiplier", body: "AI removes friction from the workflow; senior judgment remains responsible for the result." }],
    closingTitle: "Got an idea? Let’s build it.",
    closingBody: "Clear scope, senior execution, and no long contract. We’ll map the first useful release on a 30-minute call.",
  },
  legal: { updatedLabel: "Last updated", updatedDate: "17 May 2026" },
};

export const ruContent: SiteContent = {
  meta: {
    home: { title: "BlackBoxWorld LLP — продуктовая AI-студия", description: "Превращаем идею в готовый к запуску продукт за несколько недель — дизайн и разработка в одной AI-native команде." },
    about: { title: "О нас — BlackBoxWorld LLP", description: "Небольшая senior-команда BlackBoxWorld: как мы проектируем и запускаем цифровые продукты." },
    terms: { title: "Условия оказания услуг — BlackBoxWorld LLP", description: "Условия профессиональных услуг BlackBoxWorld LLP и использования сайта." },
    privacy: { title: "Политика конфиденциальности — BlackBoxWorld LLP", description: "Как BlackBoxWorld LLP собирает, использует и защищает персональные данные по UK GDPR." },
    refund: { title: "Возвраты и отмена — BlackBoxWorld LLP", description: "Правила возврата, паузы и отмены проектов и подписок BlackBoxWorld LLP." },
  },
  nav: {
    links: [{ label: "О нас", href: "/about" }, { label: "Цены", href: "/#price" }, { label: "Вопросы", href: "/#faqs" }],
    cta: { label: "Созвониться", href: "mailto:hello@blackboxworld.com" },
    languageLabel: "Выбрать язык",
  },
  hero: {
    badge: { prefix: "Нам доверяют", emphasis: "200+", suffix: "фаундеров по всему миру" },
    title: "Превратим вашу идею в готовый к запуску MVP за 2 недели",
    body: "AI-native продуктовая студия: продумываем, проектируем и запускаем продукты, которые готовы расти.",
    primaryCta: { label: "Обсудить проект", href: "mailto:hello@blackboxworld.com" },
    secondaryCta: { label: "Посмотреть цены", href: "#price" },
  },
  workCarousel: shared.workImages.map(([id, image, logo, variant], index) => ({ id, image, logo, variant, title: ["Мобильное приложение Nimora", "Финансовый дашборд Voltly", "Операционная панель Kairo", "Социальное приложение Wavebound", "Портал для инвесторов Zenith", "Студия для авторов Lumen", "Платёжная платформа Orbita"][index] })),
  stats: [{ label: "Средний срок до MVP", value: "2 нед" }, { label: "Запущено продуктов", value: "200+" }, { label: "Релизов в срок", value: "98%" }],
  logos: { title: "Нам доверяют амбициозные команды", items: shared.logos },
  howWeWork: {
    title: "Как мы работаем.",
    subtitle: "Короткие сфокусированные спринты с реальным результатом каждую неделю.",
    cards: [
      { tag: "Собираем", title: "Запускаем MVP всего за 2 недели", body: "Сначала проектируем и собираем ядро продукта, чтобы вы проверили идею до крупных вложений.", bgFrom: "#0e1024", bgTo: "#4a2bff" },
      { tag: "Улучшаем", title: "Превращаем обратную связь в понятный roadmap", body: "После запуска приоритизируем реальные сигналы от пользователей и берём в работу самые важные улучшения.", bgFrom: "#3a1bff", bgTo: "#bd2bff" },
      { tag: "Ускоряем", title: "Двигаемся быстрее с AI-native инструментами", body: "Соединяем современные AI-инструменты с инженерной дисциплиной и сильным дизайном — быстрее, но без снижения качества.", bgFrom: "#a0249c", bgTo: "#ff5b50" },
      { tag: "Работаем вместе", title: "Остаёмся на связи без бесконечных встреч", body: "Асинхронные апдейты, короткие ревью и понятная ответственность сохраняют темп и ваше внимание.", bgFrom: "#ff6f5e", bgTo: "#ffd1a9" },
    ],
  },
  exploreWork: {
    title: "Наши проекты",
    body: "Готовые к продакшену продукты, с которыми можно быстро выйти на рынок и учиться на данных.",
    cta: { label: "Начать проект", href: "mailto:hello@blackboxworld.com" },
    cards: [
      { id: "ew1", image: "/images/8mtG4MOmLSI8Pbm4UN69jB9tcsk.jpg", logo: "/images/i1xf8VIW21qgtxpkbYBMx8aRw.svg", title: "Briefly", subtitle: "Брифы для медиа-команд без рутины" },
      { id: "ew2", image: "/images/oNYl2xWtI3cEN5TbAwCNLXl5M.jpg", logo: "/images/UPwre7eBH9p3ZMJeBcb8UMq4M.svg", title: "Orbita", subtitle: "Простые B2B-платежи для финтеха" },
      { id: "ew3", image: "/images/SJZYFUNVc7Pa0NeJ7Ivl64cQ4dA.png", logo: "/images/94jhSKowHW9sNduGRYEoNGxXEyg.svg", title: "Lumen", subtitle: "Рабочие инструменты для авторов" },
    ],
  },
  whySubscribe: {
    title: "Зачем дизайн по подписке?",
    subtitle: "Результат senior-команды без найма ещё одного отдела.",
    cards: [
      { title: "Скорость AI-native", body: "AI снимает производственную рутину, а senior-специалисты отвечают за логику и качество результата." },
      { title: "Понятная асинхронная работа", body: "Прозрачная очередь, письменные апдейты и короткие ревью двигают каждый запрос вперёд." },
      { title: "Дизайн, который замечают", body: "От экранов продукта до рекламы — все материалы складываются в один цельный бренд." },
      { title: "Гибкость по умолчанию", body: "Без длинного контракта: меняйте приоритеты, ставьте работу на паузу или отменяйте подписку." },
    ],
    sayNoMoreLabel: "Больше никаких",
    sayNoMoreTo: ["Долгих поисков сотрудников", "Разрозненных фрилансеров", "Микроменеджмента", "Длинных контрактов"],
  },
  pricing: {
    selectorLabel: "Выберите услугу",
    includedLabel: "Что входит",
    featuredLabel: "Выбирают чаще всего",
    trialCta: "Попробовать разово",
    design: {
      label: "Дизайн по подписке",
      eyebrow: "Дизайн всегда под рукой",
      title: "Senior-команда дизайна без долгого найма.",
      subtitle: "Лендинги, продуктовый UI, презентации, рекламные кампании и маркетинговые материалы — в одной понятной очереди.",
      plans: [
        { kind: "trial", icon: "/images/Eid4jMJKXqCs9rhjVrxEuQ4l8t4.png", name: "Тест-драйв", subtitle: "Один оплачиваемый проект", description: "Посмотрите, как мы думаем и работаем, прежде чем оформлять подписку.", price: "79 000 ₽", cadence: "/ Разово", cta: "Попробовать разово", note: "50% стоимости зачтём в первый месяц, если оформите подписку в течение 14 дней.", included: ["1 секция лендинга или 3–5 рекламных креативов", "Готовность за 3–5 рабочих дней", "Один раунд правок", "Исходники, готовые к продакшену"] },
        { kind: "subscription", icon: "/images/AwxD0yUadlc6xiyFwfQAda2EU.png", name: "Design Partner", subtitle: "Один активный запрос", description: "Надёжная senior-функция дизайна для продукта и бренда каждую неделю.", price: "329 000 ₽", cadence: "/ Месяц", cta: "Подключить Design Partner", note: "Можно поставить на паузу или отменить помесячно.", featured: true, isDark: true, included: ["Лендинги и продуктовый UI", "Презентации и материалы для продаж", "Брендовые и маркетинговые материалы", "Обычно 2–4 дня на запрос", "Еженедельное дизайн-ревью"] },
        { kind: "subscription", icon: "/images/Eid4jMJKXqCs9rhjVrxEuQ4l8t4.png", name: "Design + Growth", subtitle: "Два активных запроса", description: "Больше мощности для команд, которые параллельно развивают продукт и маркетинг.", price: "549 000 ₽", cadence: "/ Месяц", cta: "Подключить Design + Growth", note: "Можно поставить на паузу или отменить помесячно.", included: ["Всё из тарифа Design Partner", "Два параллельных запроса", "Постоянные рекламные и social-креативы", "Приоритетная очередь", "Два ревью в неделю"] },
      ],
    },
    development: {
      label: "Разработка продукта",
      eyebrow: "Собираем и запускаем",
      title: "AI-native разработка продукта короткими спринтами.",
      subtitle: "От первого рабочего MVP до регулярных продуктовых итераций с одной senior-командой.",
      plans: [
        { kind: "development", icon: "/images/Eid4jMJKXqCs9rhjVrxEuQ4l8t4.png", name: "Спринты", subtitle: "Двухнедельный спринт", description: "Для фаундеров и команд, которым нужно быстро соединить стратегию, дизайн и разработку.", price: "$4,500", cadence: "/ 2 недели", cta: "Обсудить проект", note: "Можно остановиться до следующего спринта.", included: ["AI-native команда разработки", "Продуктовая стратегия и roadmap", "UI/UX и дизайн-система", "Интеграции и API", "Еженедельное ревью прогресса"] },
        { kind: "development", icon: "/images/AwxD0yUadlc6xiyFwfQAda2EU.png", name: "Разработка MVP", subtitle: "Готов к запуску за две недели", description: "Сфокусированный рабочий продукт вокруг главного пользовательского сценария.", price: "$9,500", cadence: "/ Разово", cta: "Запустить MVP", note: "Фиксируем scope до старта.", isDark: true, included: ["Рабочий MVP для продакшена", "База данных и API-интеграции", "Авторизация и онбординг", "Продуктовая дизайн-система", "QA, запуск и передача проекта"] },
      ],
    },
  },
  testimonials: { title: "Нам доверяют продуктовые лидеры.", subtitle: "Что клиенты говорят о работе с BlackBoxWorld.", items: shared.testimonialItems },
  faqs: {
    title: "Вопросы? Отвечаем.",
    groups: [
      { category: "Общее", items: [
        { q: "Что такое BlackBoxWorld?", a: "BlackBoxWorld LLP — AI-native продуктовая студия, которая соединяет продуктовую стратегию, дизайн и разработку в одной senior-команде." },
        { q: "С кем вы работаете?", a: "С фаундерами на ранней стадии, венчурными стартапами и продуктовыми командами, которым важна скорость без компромисса по качеству." },
        { q: "Где находится команда?", a: "BlackBoxWorld LLP зарегистрирована в Великобритании и удалённо работает с клиентами из разных часовых поясов." },
      ] },
      { category: "Дизайн по подписке", items: [
        { q: "Что можно заказывать?", a: "Лендинги, продуктовый UI, питч-деки, материалы для продаж, концепции кампаний, social-креативы и почти любые другие цифровые дизайн-задачи." },
        { q: "Как работает очередь?", a: "Добавляйте сколько угодно запросов. Мы одновременно ведём один или два — в зависимости от тарифа — и берём следующий сразу после согласования." },
        { q: "Можно сначала проверить качество?", a: "Да. Тест-драйв — оплачиваемая задача с фиксированным scope и сроком 3–5 рабочих дней. Половину стоимости зачтём в первый месяц, если вы оформите подписку в течение 14 дней." },
        { q: "Можно поставить подписку на паузу или отменить?", a: "Да. Ежемесячный дизайн-тариф можно поставить на паузу или отменить до следующего платёжного периода." },
      ] },
      { category: "Разработка продукта", items: [
        { q: "Реально запустить MVP за две недели?", a: "Да, если у первого релиза один понятный пользовательский сценарий и дисциплинированный scope. Более крупные продукты делим на дополнительные двухнедельные спринты." },
        { q: "Какой стек вы используете?", a: "Обычно React, Next.js, TypeScript, Postgres или Supabase, Node.js и AI API, которые лучше всего подходят продукту." },
        { q: "Файлы и код принадлежат клиенту?", a: "Да. Оплаченные результаты, исходники и код передаются в соответствии с согласованным statement of work." },
      ] },
    ],
  },
  cta: { title: "Есть что запускать? Давайте сделаем это реальным.", button: { label: "Обсудить проект", href: "mailto:hello@blackboxworld.com" } },
  footer: {
    title: "Письма от BlackBoxWorld",
    body: "Практические заметки о продукте, дизайне и AI для команд, которые запускают.",
    emailPlaceholder: "Ваш email",
    submitLabel: "Подписаться",
    siteLabel: "Сайт",
    legalLabel: "Документы",
    links: [{ label: "О нас", href: "/about" }, { label: "Цены", href: "/#price" }, { label: "Отзывы", href: "/#testimonials" }, { label: "Вопросы", href: "/#faqs" }],
    legalLinks: [{ label: "Условия услуг", href: "/terms" }, { label: "Конфиденциальность", href: "/privacy" }, { label: "Возвраты", href: "/refund" }],
    brand: "BlackBoxWorld LLP",
    year: "© 2026",
    rightsText: "Все права защищены",
  },
  about: {
    eyebrow: "О нас",
    titleBefore: "Небольшая студия, которая запускает",
    titleAccent: "реальные продукты",
    titleAfter: "для амбициозных команд.",
    intro: "BlackBoxWorld — продуктовая студия из Великобритании. Доводим идеи от пустого документа до запущенного продукта: стратегия, дизайн, разработка и AI под одной крышей.",
    founderEyebrow: "Основатель",
    founderTitle: "Максим — основатель и продуктовый инженер",
    founderBody: ["Я запустил BlackBoxWorld, потому что путь от сильной идеи до полезного продукта стал короче, чем когда-либо, — если соединить правильные инструменты с дисциплинированным продуктовым мышлением.", "У лучших запусков один паттерн: жёсткий scope, сильный дизайн и быстрая обратная связь от реальных пользователей.", "Я остаюсь внутри каждого проекта и подключаю узких senior-специалистов, когда продукту нужна дополнительная экспертиза в дизайне, разработке или growth."],
    founderImageAlt: "Максим, основатель BlackBoxWorld",
    founderCta: "Созвониться",
    teamEyebrow: "Команда",
    teamTitle: "Senior-специалисты вокруг одной продуктовой цели.",
    teamSubtitle: "Небольшая кросс-функциональная команда под конкретную задачу — без слоёв аккаунт-менеджмента.",
    team: [
      { role: "Продукт и стратегия", body: "Переводит бизнес-контекст в сфокусированный roadmap и понятный scope релиза.", image: "/images/team/product-strategy.webp" },
      { role: "Продуктовый дизайн", body: "Проектирует сценарии, интерфейсы и системы, которые цельно работают с первого релиза.", image: "/images/team/product-design.webp" },
      { role: "AI-разработка", body: "Собирает надёжную основу продукта и встраивает AI в реальные пользовательские процессы.", image: "/images/team/ai-engineering.webp" },
      { role: "Бренд и growth", body: "Связывает позиционирование, лендинги и рекламные материалы в одну историю.", image: "/images/team/brand-growth.webp" },
    ],
    principlesTitle: "Как мы работаем",
    principles: [{ title: "Недели, а не кварталы", body: "Каждый проект делим на короткие этапы с рабочим результатом в конце." }, { title: "Разработка следует за дизайном", body: "Сначала проясняем продукт и пользовательский опыт, чтобы не зашивать неопределённость в код." }, { title: "AI как усилитель", body: "AI снимает трение в процессе, а за итог по-прежнему отвечает senior-экспертиза." }],
    closingTitle: "Есть идея? Давайте соберём.",
    closingBody: "Понятный scope, senior-исполнение и никаких длинных контрактов. За 30 минут определим первый полезный релиз.",
  },
  legal: { updatedLabel: "Последнее обновление", updatedDate: "17 мая 2026" },
};

const contentByLocale: Record<Locale, SiteContent> = {
  en: enContent,
  ru: ruContent,
};

export function getSiteContent(locale: Locale): SiteContent {
  return contentByLocale[locale];
}

export function getLocalizedMetadata(locale: Locale, page: keyof SiteContent["meta"]) {
  return contentByLocale[locale].meta[page];
}
