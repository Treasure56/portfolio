/**
 * SITE CONTENT
 * ------------------------------------------------------------------
 * All the text on the public portfolio lives here. Edit this file to
 * change what the site says.
 *
 * Projects come from your dashboard (/dashboard). The `projectDetails`
 * list below fills in the role, tech and dates for projects whose
 * dashboard fields are empty.
 */

export const owner = {
  name: "Treasure Onyenze",
  title: "Software Engineer & AI Creator",
  /** Cut-out photo with a transparent background. The original is /images/treasure.png. */
  photo: "/images/treasure-cutout.png",
  resume: "/images/treasure_onyenze.pdf",
  email: "simplicitytreasure@gmail.com",
  whatsapp: "https://wa.me/2349039418922",
};

export const hero = {
  headline: ["I build digital products and use AI to make them", "smarter."],
  intro:
    "I build web and mobile applications, integrate AI into digital products, and create AI-powered visual experiences that help businesses grow.",
  tags: [
    "Web Development",
    "Mobile Apps",
    "AI Integration",
    "AI Creative Production",
    "Automation",
  ],
  photoNote: "Open to remote roles and freelance projects",
};

/** One label for every "get in touch" button on the site. */
export const cta = { label: "Start a project", href: "/#Contact" };

/**
 * Shown in the scrolling ribbon under the hero.
 * - `logo`: a file in public/images/companies/. Without it, a letter badge is shown.
 * - `hideName`: set to true when the logo already contains the company name.
 */
export const companies: { name: string; logo?: string; hideName?: boolean }[] = [
  { name: "Aptech Computer Education", logo: "/images/companies/aptech.svg", hideName: true },
  { name: "Saviez Tech" },
  { name: "Symphony Enterprise", logo: "/images/companies/symphony.png" },
  { name: "CitiWheels", logo: "/images/companies/citiwheels.jpeg" },
  { name: "Finbic Group" },
];

export const work = {
  heading: ["Featured", "projects"],
  subtext: "A few things I have helped build and ship.",
  /** Button under the featured cards that opens the /projects page. */
  moreLabel: "See more projects",
  /** Heading and intro on the /projects page. */
  allHeading: ["All", "projects"],
  allSubtext: "Everything I have built and shipped, in one place.",
  /**
   * Order of the large cards, matched by project name. Used when no
   * project is ticked as "featured" in the dashboard. Names that are not
   * in the dashboard yet are skipped.
   */
  featuredOrder: ["citiwheels", "pikryde", "tec terminal erp", "epignosis", "hyven", "casee"],
};

/**
 * Extra facts per project, matched by project name (lowercase).
 * A value typed into the dashboard always wins over the one here.
 */
export const projectDetails: Record<
  string,
  { type?: string; role?: string; tech?: string[]; period?: string }
> = {
  citiwheels: {
    type: "Ride-hailing platform",
    role: "Frontend across the mobile and web apps",
    tech: ["React Native", "Expo", "TypeScript", "Next.js", "Tailwind CSS"],
    period: "Feb - Jun 2026",
  },
  pikryde: {
    type: "Ride-hailing application",
    tech: ["React Native", "Expo", "TypeScript", "NativeWind"],
    period: "Oct 2025 - Mar 2026",
  },
  "tec terminal erp": {
    type: "Educational enterprise management system",
    role: "User interfaces and API integrations",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    period: "Jul 2026",
  },
  epignosis: {
    type: "Bible application",
    tech: ["React Native", "Expo", "TypeScript", "Tailwind CSS"],
    period: "Jun - Jul 2026",
  },
  hyven: {
    type: "Marketplace platform",
    role: "Frontend and backend development",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    period: "Mar 2025",
  },
  casee: {
    type: "Product configurator",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
  },
};

/** `icon` must match a key in src/components/icons.tsx. */
export const proof = {
  heading: ["Proof beyond", "the projects"],
  subtext: "The qualifications and experience behind the work.",
  /** `logo` is optional and shows small at the bottom of the card. */
  items: [
    {
      icon: "diploma",
      title: "Advanced Diploma in Software Engineering",
      note: "Graduated with Distinction, 2025.",
      logo: "/images/companies/aptech.svg",
    },
    {
      icon: "rocket",
      title: "Production applications shipped",
      note: "Web and mobile products that are live and in use.",
    },
    {
      icon: "trophy",
      title: "Aptech Techwiz Competition",
      note: "Took part in Aptech's global technology competition.",
      logo: "/images/companies/aptech.svg",
    },
    {
      icon: "building",
      title: "Used across six Aptech centres",
      note: "ERP and school portal work supporting thousands of students in Nigeria.",
    },
  ] as { icon: string; title: string; note: string; logo?: string }[],
};

export const services = {
  heading: ["How we can", "work together"],
  subtext: "Pick the kind of help you need. Every project starts with a conversation.",
  cards: [
    {
      title: "Websites & web apps",
      summary: "For businesses and founders who need a professional presence or a working product on the web.",
      points: [
        "Business websites and landing pages",
        "Full web applications",
        "API integration",
        "Responsive on desktop, tablet and mobile",
      ],
    },
    {
      title: "Mobile apps",
      summary: "For ideas that belong in people's pockets, built around what your business needs.",
      points: [
        "Android and iOS applications",
        "Built with React Native and Expo",
        "From business idea to working product",
        "Clean, maintainable code",
      ],
    },
    {
      title: "AI for your business",
      summary: "For teams that want AI inside their product, their operations or their marketing.",
      points: [
        "AI features added to existing apps",
        "Workflow automation for repetitive tasks",
        "AI adverts, product campaigns and promo videos",
        "AI product images, UGC videos and motion graphics",
      ],
    },
  ],
  unsure: {
    heading: "Not sure what you need?",
    text: "Tell me about your idea and I will suggest the best place to start.",
  },
};

export const experience = {
  heading: ["Where I have", "worked"],
  items: [
    {
      company: "Saviez Tech",
      role: "Mobile & Web Engineer",
      period: "2025 - 2026",
      points: [
        "Worked on dating, food delivery, e-commerce and real estate products.",
        "Built with React, React Native and Expo.",
      ],
    },
    {
      company: "Symphony Enterprise",
      role: "Lead Frontend Engineer",
      period: "2025",
      points: ["Worked in a lead frontend engineering capacity."],
    },
    {
      company: "Aptech Computer Education",
      role: "Frontend Developer",
      period: "2024 - 2025",
      points: [
        "Developed user interfaces and integrated APIs for educational platforms, internal tools and enterprise applications.",
        "Worked on the Aptech ERP and the CPN School Portal, used across six Aptech centres in Nigeria and supporting thousands of students.",
        "Collaborated with project managers and backend developers.",
        "Improved API performance and implemented caching strategies.",
      ],
    },
    {
      company: "Finbic Group",
      role: "B2B Fintech Project",
      period: "",
      points: [
        "Contributed to a fintech product covering bill payments, escrow services, KYC and liveness verification.",
      ],
    },
  ],
};

export const stack = {
  heading: ["What I", "build with"],
  subtext: "The tools and skills I use to turn ideas into real, working products.",
  groups: [
    {
      group: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "NativeWind"],
    },
    { group: "Mobile", items: ["React Native", "Expo"] },
    { group: "Backend & data", items: ["PHP", "SQL", "MongoDB", "API integration"] },
    {
      group: "AI & creative",
      items: [
        "AI integration",
        "AI-assisted development",
        "AI image generation",
        "AI video generation",
        "AI advertising content",
        "AI workflow automation",
      ],
    },
  ],
};

/**
 * AI creative samples. The section stays hidden while this list is empty.
 * Put files in public/ai/ and add entries like:
 *   { title: "Skincare product advert", kind: "video", src: "/ai/skincare.mp4", poster: "/ai/skincare.jpg" }
 *   { title: "Product photography", kind: "image", src: "/ai/perfume.jpg" }
 */
export const aiCreative: {
  heading: [string, string];
  subtext: string;
  samples: { title: string; kind: "image" | "video"; src: string; poster?: string }[];
} = {
  heading: ["AI creative", "work"],
  subtext: "Adverts, product visuals and videos I have created with AI.",
  samples: [],
};

export const principles = {
  heading: ["How I", "work"],
  items: [
    {
      title: "Easy to use comes first.",
      text: "Software should not only work. It should be easy to use, with modern and intuitive interfaces.",
    },
    {
      title: "Code the next developer can read.",
      text: "Someone else may have to work with the code I write, so quality and maintainability matter to me.",
    },
    {
      title: "Details are part of the job.",
      text: "I pay attention to the small things, because that is where a product starts to feel finished.",
    },
    {
      title: "Clear communication.",
      text: "I collaborate closely with project managers, designers and backend developers, and I keep people updated.",
    },
    {
      title: "Delivered on time.",
      text: "I value efficient development processes and delivering projects when I said I would.",
    },
  ],
};

export const about = {
  heading: ["About", "me"],
  paragraphs: [
    "I'm Treasure Onyenze Chidinma, a software developer, web and mobile app engineer, and AI creator based in Nigeria.",
    "I enjoy turning ideas into functional digital products and using technology and AI to solve real-world problems. I don't just write code. I understand how to take an idea, develop the product, create its visual identity and produce the marketing content that helps a business show what it offers.",
    "My goal is to combine software engineering and AI creativity to help businesses build, present and grow their products.",
  ],
};

export const contact = {
  heading: ["Got an idea?", "Let's build it."],
  subtext: "Tell me what you are building. I usually reply within a day.",
};

/** Social links. Entries with an empty `url` are hidden. */
export const socials: { name: string; icon: string; url: string }[] = [
  { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/treasure56" },
  { name: "GitHub", icon: "github", url: "https://github.com/treasure56" },
  { name: "X", icon: "x", url: "https://x.com/simplicitytrea1" },
  { name: "Email", icon: "email", url: `mailto:${owner.email}` },
];

export const nav = [
  { name: "Work", href: "/#Projects" },
  { name: "Services", href: "/#Services" },
  { name: "Experience", href: "/#Experience" },
  { name: "About", href: "/#About" },
];

export const projectCategories = [
  { value: "web", label: "Web application" },
  { value: "mobile", label: "Mobile application" },
  { value: "ai", label: "AI product" },
  { value: "ai-video", label: "AI video" },
] as const;
