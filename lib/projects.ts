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
  gallery?: string[];
  prototypeUrl?: string;
  prototypeUrls?: { label: string; url: string }[];
  websiteUrl?: string;

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

  // StyleManger/Bodify extra fields
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
    year: "2023",
    accentColor: "#7C6AF7",
    thumbnail: "/images/fundus-ai.png",
    featured: false,
    isAI: true,
    showArchitecture: false,
    prototypeUrl: "https://www.figma.com/proto/3SiWr2wp0L3QDSiQmxgRvw/FundusAI?node-id=555-244&viewport=-221%2C2732%2C0.07&t=Pv7TEMpPgKW3ASfp-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=555%3A244&page-id=47%3A439",
    websiteUrl: "https://www.fundusai.com/",
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
    slug: "lova-ai",
    title: "Lova AI",
    tagline: "An AI-Powered Relationship Companion for Couples",
    type: "UX Design · Product",
    industry: "Lifestyle / AI",
    year: "2026",
    accentColor: "#FF6B6B",
    thumbnail: "/images/lova1.PNG",
    featured: true,
    isAI: true,
    prototypeUrl: "https://www.figma.com/proto/iTQHtxOyrsIRli284aQirw/Tandem-%E2%80%94-iPhone-Screens-v1?node-id=73-23&t=vAyOG7SRmuHn1Le4-1&scaling=scale-down&content-scaling=fixed&page-id=73%3A2&starting-point-node-id=73%3A23",
    overview:
      "Lova AI is a mobile application designed to help couples build stronger, healthier, and more intentional relationships by leveraging the principles of the Five Love Languages and the power of artificial intelligence.\n\nThe app delivers personalized daily challenges, thoughtful relationship activities, interactive games, and meaningful conversation prompts tailored to each couple’s unique dynamic. As users engage with the app and provide feedback, its AI continuously learns their preferences and refines future recommendations, creating a deeply personalized experience that evolves alongside the relationship.",
    role: "UX Researcher + UX Designer + UI Designer",
    team: "Solo Design",
    timeline: "3 weeks",
    tools: ["Figma"],
    platform: "Mobile App (iOS & Android)",
    status: "Completed",
    problem:
      "Many couples genuinely want to nurture their relationships but often struggle to do so consistently. Busy schedules, routine, and differing communication styles can cause partners to drift apart despite having good intentions.\n\nWhile many relationship apps focus on messaging or tracking anniversaries, few provide actionable, personalized guidance that encourages couples to intentionally invest in their relationship every day.\n\nThe challenge was to design a solution that makes expressing love simple, engaging, and sustainable.",
    results: [],
    tags: ["UX Research", "UI Design", "Information Architecture", "Mobile Design", "Relationship Psychology"],
    responsibilities: ["UX Research", "UI/UX Design", "Wireframing", "Prototyping"],
    challengeDetails: {
      description: "Couples need an easy and engaging way to consistently nurture their relationships because everyday responsibilities often reduce intentional expressions of love, resulting in routine and emotional distance.",
      points: [
        "Busy schedules leaving little time for intentional connection",
        "Running out of creative date or appreciation ideas",
        "Misunderstandings due to different love languages",
        "Forgetting to consistently show appreciation"
      ],
      objectives: [
        "Discover and understand each other’s love languages",
        "Build healthy relationship habits through daily activities",
        "Receive AI-powered personalized recommendations",
        "Improve emotional intimacy through fun challenges and games",
        "Track relationship growth over time",
        "Strengthen communication through consistent intentional actions"
      ]
    },
    goal: "Design an intelligent relationship platform that helps couples build healthy habits, engage in personalized relationship activities, track emotional growth over time, and consistently express affection in meaningful ways.",
    insights: [
      {
        title: "1. Small Acts, Large Impact",
        observation: "Small daily acts of love often have a greater long-term impact than occasional grand gestures.",
        decision: "I designed the app around quick, actionable 'Daily Love Challenges' that take less than 20 minutes to complete."
      },
      {
        title: "2. Personalization is Essential",
        observation: "Generic relationship advice fails because every couple has a unique dynamic and different communication styles.",
        decision: "I designed an onboarding questionnaire to gather shared interests, love languages, and relationship goals to guide the AI recommendation engine."
      },
      {
        title: "3. Gamification Drives Consistency",
        observation: "Couples start with good intentions but lose consistency when relationship building feels like a chore.",
        decision: "I incorporated streaks, trivia, milestone celebration widgets, and shared reflection sessions into the dashboard."
      }
    ],
    process: [
      {
        title: "UX Research & Interviews",
        description: "Conducted interviews with couples in committed relationships to understand friction points, date-planning habits, and emotional connection dynamics."
      },
      {
        title: "Information Architecture & Flows",
        description: "Mapped out onboarding flows, daily challenge loops, game lobbies, and progress tracking to create a low-friction daily ritual."
      },
      {
        title: "UI Design & Prototyping",
        description: "Designed a warm, emotional interface in Figma utilizing soft lighting details, comfortable curves, and friendly typography to build emotional trust."
      }
    ],
    improvements: {
      before: [
        "Repetitive, routine interactions",
        "Struggle to plan date ideas or conversation starters",
        "Unexpressed appreciation due to busy schedules",
        "Fragmented or missing relationship habits"
      ],
      after: [
        "Dynamic, personalized daily challenges",
        "Curated relationship games & conversation cards",
        "Streaks and metrics honoring consistent progress",
        "Sustainable relationship habits fueled by AI learning"
      ]
    },
    finalSolution: "The final solution is an intelligent companion that guides couples to intentionally connect daily. By analyzing feedback, the AI continuously refines challenges to match what makes each partner feel loved, fostering deep and sustainable intimacy.",
    reflection: "Designing Lova AI highlighted the importance of balancing technology with authentic human connection. The objective was never to replace emotional effort with AI but to use intelligent technology as a guide that inspires genuine interactions.",
    gallery: [
      "/images/lova1.PNG",
      "/images/lova2.PNG",
      "/images/lova3.PNG",
      "/images/lova4.PNG",
      "/images/lova5.PNG"
    ]
  },
  {
    slug: "stylemanger",
    title: "StyleManager",
    tagline: "AI Digital Closet & Social Styling App",
    type: "UX Design · AI · Mobile App",
    industry: "Fashion / Lifestyle",
    year: "2026",
    accentColor: "#FF6B8B",
    thumbnail: "/images/stylemanager1.PNG",
    featured: false,
    isAI: true,
    showArchitecture: false,
    prototypeUrl: "https://www.figma.com/proto/Zo8WvW5shTqgkJDQfDJ9nX/Dappa?node-id=2-8&t=dSdGdkoHyJpJZb2s-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A8&show-proto-sidebar=1",
    overview:
      "StyleManager is an AI-powered digital closet that helps users digitize their wardrobe, receive outfit suggestions based on weather and context, preview outfits on a virtual avatar, connect with friends, and participate in influencer-led styling challenges.\n\nThe goal of this project was to design a comprehensive mobile experience that reduces outfit decision-making stress, increases wardrobe utilization, and blends personal utility with social engagement.",
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
    finalSolution: "The final solution transforms StyleManager from a simple organizer into a habit-forming social styling assistant that delivers styling confidence, enables closet management, and fosters community engagement.",
    reflection: "This project reinforced the importance of blending utility with social features in product design.\n\nDeveloping StyleManager deepened my experience in styling applications, gamified engagement, and AI-driven personalization, highlighting how simple layouts can communicate complex AI services gracefully.",
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
    closingStatement: "StyleManager transforms fashion interaction from:\n\n“What should I wear?” → “Here is your best look today.”",
    gallery: [
      "/images/stylemanager1.PNG",
      "/images/stylemanager2.PNG",
      "/images/stylemanager3.PNG",
      "/images/stylemanager4.PNG"
    ]
  },
  {
    slug: "epharma4fp",
    title: "ePharma4FP",
    tagline: "Website & Mobile App UX Redesign Case Study",
    type: "UX Redesign · Web & Mobile",
    industry: "HealthTech",
    year: "2025",
    accentColor: "#3DFFE0",
    thumbnail: "/images/epharma1.PNG",
    featured: false,
    isAI: false,
    showArchitecture: false,
    prototypeUrls: [
      { label: "View Mobile Prototype", url: "https://www.figma.com/proto/jBSFYqyWrONxuzutHrrYpO/Epharma4FP?node-id=342-1200&viewport=-106%2C125%2C0.36&t=E4bqqrSs8HBSaeer-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=451%3A3796&page-id=317%3A12664" },
      { label: "View Website Prototype", url: "https://www.figma.com/proto/jBSFYqyWrONxuzutHrrYpO/Epharma4FP?node-id=96-243&viewport=34%2C296%2C0.06&t=SrPd9o97Sgs55c47-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=96%3A243&page-id=96%3A242" }
    ],
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
    reflection: "This project reinforced the importance of balancing usability with information density in healthcare products.\n\nOne of the biggest lessons was learning how consistency across platforms can significantly improve user trust and usability.\n\nIt also strengthened my ability to conduct UX audits, simplify complex flows, design responsive experiences, improve accessibility, and create structured digital healthcare products.",
    gallery: [
      "/images/epharma1.PNG",
      "/images/epharma2.PNG",
      "/images/epharma3.PNG"
    ]
  },
  {
    slug: "bodify",
    title: "Bodify",
    tagline: "AI Body & Face Enhancer App UX Case Study",
    type: "UX Design · AI · Mobile App",
    industry: "Lifestyle / AI",
    year: "2024",
    accentColor: "#FF2A6D",
    thumbnail: "/images/bodify1.PNG",
    featured: false,
    isAI: true,
    showArchitecture: false,
    overview:
      "Bodify is an AI-powered body and face enhancement application designed to help users naturally refine their photos, adjust body posture, and smooth facial features through advanced computer vision.\n\nThe goal of this project was to design a comprehensive mobile editing studio that balances powerful AI adjustments with realistic, non-distorted outcomes, addressing the ethical and aesthetic concerns of modern photo editing.",
    role: "UI/UX Designer",
    team: "Solo (Visual & UX)",
    timeline: "2–3 weeks",
    tools: ["Figma"],
    platform: "Mobile App (iOS & Android)",
    status: "Completed",
    problem:
      "Users struggle with complex, manual adjustments in traditional editing apps, which often lead to unrealistic distortions, visible warp marks on backgrounds, and a steep learning curve for everyday users.",
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
      description: "AI body and face enhancement tools must balance powerful modification capabilities with natural, distortion-free outputs that maintain user trust and editing authenticity.",
      points: [
        "Unnatural distortion of background grids and lines during reshaping",
        "Overwhelming number of sliders and adjustment categories",
        "Ethical concerns regarding extreme body alteration vs. natural enhancements",
        "High processing time and lack of real-time adjustment preview"
      ],
      objectives: [
        "Deliver natural, non-distorted body and face adjustments",
        "Simplify the editing interface with context-aware controls",
        "Promote realistic body standards through intelligent presets",
        "Provide instantaneous visual feedback and side-by-side comparison",
        "Create a seamless and non-destructive export workflow"
      ]
    },
    goal: "The primary goal was to design an intuitive mobile experience that simplifies photo editing, prevents background warping, and makes AI enhancement feel organic and accessible to non-professionals.",
    insights: [
      {
        title: "1. The Distortion Fear",
        observation: "Users hate when the background (e.g., floor patterns, walls) warps visibly when using body-slimming tools.",
        decision: "I designed a smart background-isolation feature that locks the background grid while only applying edits to the subject."
      },
      {
        title: "2. Slider Fatigue",
        observation: "Having 30 different sliders for body and face features causes decision paralysis for users who just want a quick touch-up.",
        decision: "I grouped adjustments into context-aware tabs: Face, Body, and Presets, with single-slider AI-driven automatic corrections."
      },
      {
        title: "3. Destructive Editing Anxiety",
        observation: "Users are hesitant to make extensive changes if they cannot easily backtrack or compare with the original photo.",
        decision: "I designed a persistent 'Original Compare' tap button and a non-destructive layers panel."
      }
    ],
    process: [
      {
        title: "Information Architecture",
        description: "Mapped out image uploading, camera capture, category selection (Face vs. Body), AI adjustment sliders, and one-tap preset menus."
      },
      {
        title: "Wireframing",
        description: "Created wireframes of the main camera view, editor workspace (featuring tool tabs and sliders), before-and-after comparison slider view, and export options."
      },
      {
        title: "Visual Direction",
        description: "Opted for a dark, sleek UI layout with magenta/pink accents. Neutral tones keep the user focused entirely on their photo while sliders feel organic and tactile."
      }
    ],
    improvements: {
      before: [
        "Visible background warping",
        "Cluttered and overwhelming slider lists",
        "Difficult comparisons with the original photo",
        "Complex export steps"
      ],
      after: [
        "Background-locked smart contouring",
        "Simplified categories and one-tap presets",
        "Instant slider compare and split-screen mode",
        "One-click high-res export and sharing"
      ]
    },
    finalSolution: "The final solution is a premium editing interface that empowers users to confidently edit photos without technical friction, ensuring all edits look natural and realistic.",
    reflection: "This project demonstrated the value of simplification in tool-based design. By designing around the user's focus—the photo itself—and reducing secondary interface clutter, I created an experience that feels empowering and effortless.",
    personas: [
      {
        name: "Casual Social Poster",
        traits: [
          "Needs quick, natural adjustments",
          "Post photos directly to social media",
          "Prefers one-tap automatic presets"
        ]
      },
      {
        name: "Content Creator",
        traits: [
          "Demands precise control over details",
          "Edits large batches of photos",
          "Focuses on background integrity"
        ]
      }
    ],
    userFlows: [
      {
        title: "Photo Editing Flow",
        steps: ["Upload image", "Select enhancement area (Face/Body)", "Adjust slider intensity", "Compare with original", "Export to camera roll"]
      },
      {
        title: "Preset Flow",
        steps: ["Open editor", "Tap 'Presets'", "Choose filter (e.g., Natural Glow)", "Adjust overall intensity", "Save & share"]
      }
    ],
    showWireframes: true,
    uxPrinciples: [
      { title: "Non-destructive flow", desc: "Allows users to toggle individual edits on/off at any point without losing progress." },
      { title: "Contextual sliders", desc: "Sliders adjust their labels and ranges dynamically based on the selected feature." },
      { title: "Natural boundaries", desc: "The AI prevents resizing beyond realistic anatomical limits to support authenticity." },
      { title: "Visual feedback", desc: "Before/after comparison is always one tap away from any editing screen." }
    ],
    uiDirection: [
      { title: "Editor-Centric Layout", desc: "A dark canvas that makes colors and details of the edited photo stand out." },
      { title: "Tactile Sliders", desc: "Large touch targets and smooth dragging gestures for fine-grained slider adjustments." }
    ],
    futureImprovements: [
      "AI video face and body tracking support",
      "Custom preset creation based on user's history",
      "Interactive tutorial overlays for advanced tools"
    ],
    closingStatement: "Bodify simplifies photo enhancement from:\n\n“Complex manual warping” → “Perfect, organic edits in seconds.”",
    gallery: [
      "/images/bodify1.PNG",
      "/images/bodify2.PNG",
      "/images/bodify3.PNG"
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const idx = projects.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? projects[idx - 1] : projects[projects.length - 1],
    next: idx < projects.length - 1 ? projects[idx + 1] : projects[0]
  };
}
