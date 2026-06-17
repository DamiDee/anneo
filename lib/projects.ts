export interface Project {
  slug: string;
  title: string;
  tagline: string;
  type: string;
  industry: string;
  year: string;
  accentColor: string;
  thumbnail: string;
  featured?: boolean;
  isAI?: boolean;
  showArchitecture?: boolean;
  overview: string;
  role: string;
  team: string;
  timeline: string;
  tools: string[];
  platform: string;
  status: string;
  problem: string;
  results: { value: string; label: string }[];
  tags: string[];

  // Custom case study fields
  responsibilities?: string[];
  challengeDetails?: {
    description: string;
    points: string[];
    objectives: string[];
  };
  goal?: string;
  insights?: {
    title: string;
    observation: string;
    decision: string;
  }[];
  process?: {
    title: string;
    description: string;
  }[];
  improvements?: {
    before: string[];
    after: string[];
  };
  finalSolution?: string;
  reflection?: string;

  // StyleManger extra fields
  personas?: {
    name: string;
    traits: string[];
  }[];
  userFlows?: {
    title: string;
    steps: string[];
  }[];
  showWireframes?: boolean;
  uxPrinciples?: {
    title: string;
    desc: string;
  }[];
  uiDirection?: {
    title: string;
    desc: string;
  }[];
  futureImprovements?: string[];
  closingStatement?: string;
}

export const projects: Project[] = [
  {
    slug: "fundus-ai",
    title: "FundusAI",
    tagline: "Product Website UX Case Study",
    type: "UX Design · Product Website",
    industry: "SaaS / FinTech",
    year: "2024",
    accentColor: "#7C6AF7",
    thumbnail: "/images/fundus-ai.png",
    featured: false,
    isAI: true,
    showArchitecture: false,
    overview:
      "FundusAI is an AI-powered platform focused on helping users simplify access to intelligent financial and business insights through a modern digital experience.\n\nThis project focused on designing a clean, trustworthy, and conversion-focused product website that communicates innovation while remaining intuitive and accessible to users.\n\nThe goal was to create a modern AI product experience that balances clarity, usability, and visual sophistication.",
    role: "UI/UX Designer",
    team: "Collaborative",
    timeline: "2–3 weeks",
    tools: ["Figma"],
    platform: "Responsive Website",
    status: "Completed",
    problem:
      "AI products often struggle with communication clarity. Many users do not immediately understand the value proposition, feel overwhelmed by technical language, struggle to trust AI products quickly, and abandon websites with confusing layouts or weak hierarchy.",
    results: [],
    tags: ["UI Design", "UX Strategy", "Information Architecture", "Responsive Design", "Visual Direction"],
    responsibilities: [
      "UI Design",
      "UX Strategy",
      "Information Architecture",
      "Responsive Design",
      "Visual Direction"
    ],
    challengeDetails: {
      description: "AI products often struggle with communication clarity.",
      points: [
        "Do not immediately understand the value proposition",
        "Feel overwhelmed by technical language",
        "Struggle to trust AI products quickly",
        "Abandon websites with confusing layouts or weak hierarchy"
      ],
      objectives: [
        "Explains the product clearly",
        "Builds credibility quickly",
        "Guides users naturally",
        "Increases engagement and conversion potential",
        "Feels modern without becoming visually overwhelming"
      ]
    },
    goal: "The primary goal was to create a high-converting and visually engaging AI product website that:\n• Communicates value instantly\n• Simplifies complex information\n• Improves content hierarchy\n• Creates a seamless user journey\n• Builds trust through clean UI patterns\n• Feels innovative and premium",
    insights: [
      {
        title: "1. Users Scan Before They Read",
        observation: "Most users quickly scan headlines, visuals, and CTA sections before committing attention.",
        decision: "I designed the layout using strong visual hierarchy, large headlines, concise supporting text, clear CTA placement, and modular content sections."
      },
      {
        title: "2. Trust Is Critical for AI Products",
        observation: "AI platforms require stronger trust signals than traditional websites.",
        decision: "To improve credibility, I incorporated cleaner spacing, structured layouts, modern typography, consistent visual patterns, and professional interface aesthetics."
      },
      {
        title: "3. Complex Information Needed Simplification",
        observation: "Technical product explanations can quickly overwhelm users.",
        decision: "I simplified the experience by breaking information into digestible sections, reducing unnecessary text density, improving section grouping, and using visual balance to guide attention."
      }
    ],
    process: [
      {
        title: "Information Architecture",
        description: "I structured the website flow to prioritize clear product understanding, fast value communication, easy navigation, and conversion-focused interactions."
      },
      {
        title: "Wireframing",
        description: "Low-fidelity wireframes were used to explore section hierarchy, CTA placement, responsive layout behavior, content prioritization, and visual rhythm across the page."
      },
      {
        title: "Visual Direction",
        description: "The visual system focused on creating a premium AI product aesthetic through modern typography, clean spacing, subtle visual contrast, minimal clutter, structured layouts, and responsive consistency."
      }
    ],
    improvements: {
      before: [
        "Dense information flow",
        "Limited visual breathing space",
        "Weak content prioritization",
        "Potential confusion around product value",
        "Generic AI website patterns"
      ],
      after: [
        "Cleaner section hierarchy",
        "Improved readability",
        "Stronger visual storytelling",
        "More intuitive navigation flow",
        "Better CTA visibility",
        "More premium and modern presentation"
      ]
    },
    finalSolution: "The final design created a more engaging and conversion-focused product experience that communicates the product clearly, improves usability, strengthens trust, supports responsive interaction, and creates a visually modern brand presence.\n\nRedesigning the experience positions FundusAI as a forward-thinking AI platform while maintaining simplicity and usability.",
    reflection: "This project reinforced the importance of clarity in AI product design.\n\nOne major takeaway was learning how strategic hierarchy and content simplification can dramatically improve how users perceive and understand complex products.\n\nIt also strengthened my ability to design for AI/SaaS products, improve conversion-focused experiences, simplify information architecture, balance modern aesthetics with usability, and create scalable responsive layouts."
  },
  {
    slug: "handyman",
    title: "HandyMan",
    tagline: "Expert help, just a tap away — connecting services to communities",
    type: "UX Design · Mobile",
    industry: "Services Marketplace",
    year: "2024",
    accentColor: "#3DFFE0",
    thumbnail: "/images/handyman.png",
    featured: false,
    isAI: false,
    overview:
      "HandyMan is a mobile marketplace connecting users with verified home service providers — from plumbing to carpentry. Designed for speed of trust: every interaction builds confidence between client and professional.",
    role: "Lead UX Designer",
    team: "Solo Design, 3 Engineers",
    timeline: "8 weeks",
    tools: ["Figma", "Framer", "Principle"],
    platform: "iOS · Android",
    status: "Shipped",
    problem:
      "Unverified service providers, zero price transparency, and no accountability created a trust crisis in Nigeria's home services market. Users needed confidence before opening their doors.",
    results: [
      { value: "+47%", label: "Task completion rate" },
      { value: "4.8★", label: "App Store rating" },
      { value: "2.1×", label: "Faster booking flow" },
      { value: "92%", label: "Trust score (post-survey)" },
    ],
    tags: ["Mobile", "Marketplace", "UX Research", "Design Systems"],
  },
  {
    slug: "ubloom",
    title: "Ubloom",
    tagline: "Beauty & wellness marketplace connecting clients and professionals",
    type: "UX Design · Mobile",
    industry: "Beauty / Wellness",
    year: "2023",
    accentColor: "#FF6B6B",
    thumbnail: "/images/ubloom.png",
    featured: false,
    isAI: false,
    overview:
      "Ubloom is a beauty services platform designed to help African beauty professionals attract clients while giving users an intuitive discovery experience for make-up, hair, facials, and more.",
    role: "UX Designer",
    team: "Solo, 2 Engineers",
    timeline: "10 weeks",
    tools: ["Figma", "Maze (usability testing)", "Notion"],
    platform: "iOS · Android",
    status: "Shipped",
    problem:
      "Beauty professionals in Nigeria relied on fragmented WhatsApp marketing and word-of-mouth. There was no polished discovery experience that matched the quality of their craft.",
    results: [
      { value: "+38%", label: "Booking conversion rate" },
      { value: "4.6★", label: "User rating" },
      { value: "60%", label: "Reduction in no-shows" },
      { value: "1.8×", label: "Professional earnings uplift" },
    ],
    tags: ["Mobile", "Marketplace", "Accessibility", "Interaction Design"],
  },
  {
    slug: "echomind-ai",
    title: "EchoMind AI",
    tagline: "LLM-powered journaling assistant that listens and reflects",
    type: "AI Engineering · Product",
    industry: "Productivity",
    year: "2024",
    accentColor: "#F5C97A",
    thumbnail: "/images/echomind.png",
    featured: true,
    isAI: true,
    showArchitecture: true,
    overview:
      "EchoMind is a conversational journaling app powered by a custom GPT-4 layer. It doesn't just store thoughts — it mirrors them back with empathy, asks probing questions, and surfaces patterns over time.",
    role: "AI Engineer + Product Designer",
    team: "Solo",
    timeline: "6 weeks",
    tools: ["Python", "OpenAI API", "LangChain", "React Native", "Figma"],
    platform: "iOS · Android",
    status: "Live",
    problem:
      "Traditional journaling apps are passive storage. People want reflection, not just record-keeping. Most AI tools felt clinical — not emotionally intelligent.",
    results: [
      { value: "3.2×", label: "Journaling frequency increase" },
      { value: "94%", label: "Felt 'understood' by AI" },
      { value: "<600ms", label: "AI response latency p95" },
      { value: "4.9★", label: "Emotional resonance score" },
    ],
    tags: ["AI/ML", "LLM", "Product Design", "Prompt Engineering"],
  },
  {
    slug: "stylemanger",
    title: "StyleManger",
    tagline: "AI Digital Closet & Social Styling App",
    type: "UX Design · AI · Mobile App",
    industry: "Fashion / Lifestyle",
    year: "2024",
    accentColor: "#FF6B8B",
    thumbnail: "/images/stylemanger.jpg",
    featured: false,
    isAI: true,
    showArchitecture: false,
    overview:
      "StyleManger is an AI-powered digital closet that helps users digitize their wardrobe, receive outfit suggestions based on weather and context, preview outfits on a virtual avatar, connect with friends, and participate in influencer-led styling challenges.\n\nThe goal of this project was to design a comprehensive mobile experience that reduces outfit decision-making stress, increases wardrobe utilization, and blends personal utility with social engagement.",
    role: "UI/UX Designer",
    team: "Solo (Visual & UX)",
    timeline: "2–3 weeks",
    tools: ["Figma"],
    platform: "Mobile App (iOS & Android)",
    status: "Completed",
    problem:
      "Users struggle with daily outfit decision fatigue, underutilization of wardrobe items, lack of visualization before wearing outfits, and fragmented fashion inspiration across multiple platforms.",
    results: [],
    tags: ["UI/UX Design", "Product Strategy", "Information Architecture", "Mobile Design", "Interaction Design"],
    responsibilities: [
      "User research & persona development",
      "Information architecture",
      "Wireframing and user flows",
      "Interaction design",
      "Visual design direction",
      "Usability insight synthesis"
    ],
    challengeDetails: {
      description: "AI styling platforms must balance technical utility with visual trust and social validation.",
      points: [
        "Daily outfit decision fatigue",
        "Underutilization of wardrobe items",
        "Lack of visualization before wearing outfits",
        "Fragmented fashion inspiration across multiple platforms"
      ],
      objectives: [
        "Reduce outfit decision time",
        "Increase wardrobe utilization",
        "Make AI feel like a personal stylist",
        "Blend utility with social engagement",
        "Create habit-forming daily usage"
      ]
    },
    goal: "The primary goal was to design an intuitive mobile experience that:\n• Reduces decision-making stress\n• Makes wardrobe interaction engaging and fun\n• Encourages daily app usage through personalization and social interaction",
    insights: [
      {
        title: "1. Weather-Driven Decisions",
        observation: "Weather strongly influences daily outfit choices, but users find checking weather and clothes separately tedious.",
        decision: "I integrated real-time weather context directly into the AI daily outfit recommendation card."
      },
      {
        title: "2. The Trust Gap & Social Validation",
        observation: "Users (especially Gen Z) trust friends' opinions more than AI styling alone and seek social proof.",
        decision: "I built a dedicated Friends Feed and interactive influencer challenges directly into the app core."
      },
      {
        title: "3. Wardrobe Underutilization",
        observation: "Users experience outfit fatigue despite owning many items because they forget what they have.",
        decision: "I designed a smart onboarding with AI auto-tagging that makes digitizing and cataloging clothes effortless."
      }
    ],
    process: [
      {
        title: "Information Architecture",
        description: "Mapped out style exploration, closet organization, virtual try-ons, social interactions, and influencer challenges to keep the experience cohesive."
      },
      {
        title: "Wireframing",
        description: "Created low-fidelity screen flows focusing on core views: Home (AI outfit suggestions), Closet grid, Try-on avatar studio, Social feed, and Challenges."
      },
      {
        title: "Visual Direction",
        description: "Designed a clean, modern style utilizing soft gradients, neutral background tones, and a clear hierarchy where clothing and styling imagery dominate the interface."
      }
    ],
    improvements: {
      before: [
        "Daily outfit decision fatigue",
        "Underutilization of wardrobe items",
        "Lack of visualization before wearing outfits",
        "Fragmented fashion inspiration across multiple platforms"
      ],
      after: [
        "A daily outfit decision assistant",
        "A digital closet organizer",
        "A social fashion platform",
        "A creator-driven styling ecosystem"
      ]
    },
    finalSolution: "The final solution transforms StyleManger from a simple organizer into a habit-forming social styling assistant that delivers styling confidence, enables closet management, and fosters community engagement.",
    reflection: "This project reinforced the importance of blending utility with social features in product design.\n\nDeveloping StyleManger deepened my experience in styling applications, gamified engagement, and AI-driven personalization, highlighting how simple layouts can communicate complex AI services gracefully.",
    personas: [
      {
        name: "Busy Professional",
        traits: [
          "Needs quick outfit suggestions",
          "Limited time for planning"
        ]
      },
      {
        name: "Fashion Explorer (Gen Z)",
        traits: [
          "Loves experimenting with styles",
          "Engages heavily in social sharing"
        ]
      },
      {
        name: "Influencer",
        traits: [
          "Needs engagement tools for audience interaction",
          "Hosts fashion-related content and campaigns"
        ]
      }
    ],
    userFlows: [
      {
        title: "Onboarding Flow",
        steps: ["Sign up", "Upload clothing", "AI auto-tags items", "Wardrobe is built", "First outfit suggestion appears instantly"]
      },
      {
        title: "Daily Outfit Flow",
        steps: ["Open app", "AI suggests outfit", "Weather context displayed", "Try on avatar", "Save or wear"]
      },
      {
        title: "Virtual Try-On Flow",
        steps: ["Select outfit", "View on avatar", "Adjust styling", "Save/share look"]
      },
      {
        title: "Social Flow",
        steps: ["Post outfit", "Friends react/comment", "Save inspiration", "Explore feed"]
      },
      {
        title: "Influencer Challenge Flow",
        steps: ["Influencer creates theme", "Users submit outfits", "Voting phase", "Leaderboard results"]
      }
    ],
    showWireframes: true,
    uxPrinciples: [
      { title: "Instant value delivery", desc: "The first outfit suggestion is generated and shown immediately upon onboarding." },
      { title: "Low friction input", desc: "AI auto-tagging eliminates manual cataloging when uploading wardrobe items." },
      { title: "Confidence building", desc: "A virtual avatar try-on lets users visualize outfits before putting them on." },
      { title: "Social proof", desc: "Friend reactions and comments provide validation on styling decisions." },
      { title: "Gamification", desc: "Daily styling challenges and leaderboards turn routine into play." }
    ],
    uiDirection: [
      { title: "Minimal Interface", desc: "A clean, content-first layout with neutral tones and plenty of whitespace." },
      { title: "Fashion-First Hierarchy", desc: "High-quality outfit images and avatar models dominate the visual workspace." },
      { title: "Swipe Navigation", desc: "Natural swipe gestures are used to explore daily outfit recommendations." }
    ],
    futureImprovements: [
      "Voice-based styling assistant (\"What should I wear today?\")",
      "AR mirror integration for real-world try-on",
      "Smart calendar outfit planning",
      "Style memory and outfit history suggestions"
    ],
    closingStatement: "StyleManger transforms fashion interaction from:\n\n“What should I wear?” → “Here is your best look today.”"
  },
  {
    slug: "intellisearch",
    title: "IntelliSearch",
    tagline: "Semantic search with RAG for enterprise knowledge bases",
    type: "AI Engineering · Backend-facing UI",
    industry: "Enterprise AI",
    year: "2024",
    accentColor: "#3DFFE0",
    thumbnail: "/images/intellisearch.png",
    featured: false,
    isAI: true,
    showArchitecture: true,
    overview:
      "IntelliSearch transforms how enterprise teams access institutional knowledge — using RAG architecture to deliver precise, cited answers from vast document repositories in under 800ms.",
    role: "AI Engineer + UI Designer",
    team: "Solo + 2 Backend Engineers",
    timeline: "10 weeks",
    tools: ["Python", "LangChain", "FAISS", "Next.js", "TypeScript", "Figma"],
    platform: "Web",
    status: "Shipped",
    problem:
      "Enterprise teams spend 30% of their time searching for information already captured somewhere in their organization. Keyword search is fundamentally broken for nuanced knowledge retrieval.",
    results: [
      { value: "78%", label: "Reduction in search time" },
      { value: "<800ms", label: "Query response p95" },
      { value: "4.5×", label: "Knowledge retrieval accuracy" },
      { value: "96%", label: "Analyst satisfaction" },
    ],
    tags: ["RAG", "LLM", "Enterprise AI", "Search"],
  },
  {
    slug: "epharma4fp",
    title: "ePharma4FP",
    tagline: "Website & Mobile App UX Redesign Case Study",
    type: "UX Redesign · Web & Mobile",
    industry: "HealthTech",
    year: "2024",
    accentColor: "#3DFFE0",
    thumbnail: "/images/epharma4fp.jpg",
    featured: false,
    isAI: false,
    showArchitecture: false,
    overview:
      "ePharma4FP is a digital healthcare platform designed to improve access to family planning information and services across both web and mobile experiences. The existing product ecosystem had usability and navigation challenges that made task completion difficult for users.\n\nThis redesign focused on simplifying navigation, improving usability, reducing cognitive load, and creating a more intuitive and consistent experience across the website and mobile app.",
    role: "UI/UX Designer",
    team: "Collaborative",
    timeline: "3–4 weeks",
    tools: ["Figma"],
    platform: "Website & Mobile App",
    status: "Completed",
    problem:
      "The original web and mobile experiences created friction for users trying to access family planning information efficiently due to non-intuitive navigation, text-heavy interfaces, repetitive onboarding, and poor hierarchy.",
    results: [],
    tags: ["UX Redesign", "Responsive Design", "UX Audit", "Design Systems", "Prototyping"],
    responsibilities: [
      "UX Audit",
      "Wireframing",
      "UI Design",
      "Information Architecture",
      "Responsive Design",
      "Prototyping"
    ],
    challengeDetails: {
      description: "The original web and mobile experiences created friction for users trying to access family planning information efficiently.",
      points: [
        "Non-intuitive navigation & difficult back navigation",
        "Text-heavy interfaces causing information overload",
        "Repetitive onboarding flow in the mobile app",
        "Poor content hierarchy & limited interactivity",
        "Overdependence on a single green color palette"
      ],
      objectives: [
        "Make navigation intuitive across web and mobile",
        "Simplify content discovery & reduce friction",
        "Improve visual hierarchy & create cleaner interfaces",
        "Modernize the healthcare experience & improve accessibility",
        "Create visual and interactive consistency between platforms"
      ]
    },
    goal: "The redesign focused on helping users navigate faster, understand information more easily, discover family planning methods efficiently, and interact with the platform confidently.",
    insights: [
      {
        title: "1. Repeated Onboarding Experience",
        observation: "Mobile users were shown onboarding screens repeatedly, creating unnecessary friction on daily usage.",
        decision: "I redesigned the onboarding logic so onboarding appears only during first-time use, saving state locally."
      },
      {
        title: "2. Complex Navigation Structure",
        observation: "The website and app navigation lacked clear hierarchy, making it difficult for users to move between sections and backtrack.",
        decision: "I introduced clearer navigation patterns, simplified information architecture, and more predictable back navigation across both platforms."
      },
      {
        title: "3. Text-Heavy Interface",
        observation: "Large blocks of text reduced readability and increased cognitive load for users seeking quick answers.",
        decision: "I broke content into digestible sections, introduced cards and ample spacing, improved typography hierarchy, and added clearer visual grouping."
      },
      {
        title: "4. Inconsistent Cross-Platform Experience",
        observation: "Users experienced visual and structural inconsistencies when moving between the website and mobile app.",
        decision: "I created a unified visual and interaction system to ensure consistency across web viewports and mobile devices."
      },
      {
        title: "5. Poor Interaction Feedback",
        observation: "Users experienced confusing transitions and lack of visual indicators for navigation behavior.",
        decision: "I redesigned interaction states and navigation behavior to create smoother transitions and better orientation cues."
      }
    ],
    process: [
      {
        title: "Information Architecture",
        description: "Restructured content hierarchy to prioritize searchability, quick access to family planning methods, clear categorization, and reduced user effort."
      },
      {
        title: "Wireframing",
        description: "Created low-fidelity wireframes to test screen hierarchy, navigation placement, responsive layouts, content prioritization, and flow simplification."
      },
      {
        title: "UI Direction",
        description: "Adopted a cleaner interface with softer visual hierarchy, improved spacing, accessible typography, reduced clutter, balanced color usage, and clear CTAs."
      }
    ],
    improvements: {
      before: [
        "Cluttered layouts & heavy text blocks",
        "Confusing navigation & difficult backtracking",
        "Repetitive onboarding experience",
        "Limited interaction cues",
        "Inconsistent cross-platform experience"
      ],
      after: [
        "Cleaner layouts & simplified flows",
        "Better readability & improved content discovery",
        "More intuitive interactions & navigation",
        "Unified website and mobile experience",
        "Modernized visual system with balanced colors"
      ]
    },
    finalSolution: "The redesigned website and mobile app focused on helping users navigate faster, understand information more easily, discover family planning methods efficiently, and interact with the platform confidently.\n\nThe final solution introduced a more scalable and user-friendly design system while maintaining the platform’s healthcare identity across all touchpoints.",
    reflection: "This project reinforced the importance of balancing usability with information density in healthcare products.\n\nOne of the biggest lessons was learning how consistency across platforms can significantly improve user trust and usability.\n\nIt also strengthened my ability to conduct UX audits, simplify complex flows, design responsive experiences, improve accessibility, and create structured digital healthcare products."
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const idx = projects.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? projects[idx - 1] : projects[projects.length - 1],
    next: idx < projects.length - 1 ? projects[idx + 1] : projects[0],
  };
}
