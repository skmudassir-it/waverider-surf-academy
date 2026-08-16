export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string[];
  features: string[];
  icon: string;
  image: string;
  priceFrom: string;
};

export const services: Service[] = [
  {
    slug: "beginner-surf-lessons",
    name: "Beginner Surf Lessons",
    tagline: "Your first wave, the right way.",
    description:
      "Step-by-step lessons on Santa Cruz’s gentlest breaks — board, wetsuit and certified coach included from the moment you arrive.",
    longDescription: [
      "Most of our students have never touched a surfboard. We start on the sand with a relaxed land-school session — board handling, paddling, pop-up mechanics and ocean safety — then hit the whitewater where the waves are soft and the water is waist-deep.",
      "By the end of your first lesson, you will paddle, catch a wave and stand up. If you do not stand up on your first lesson, your next lesson is on us — that is how sure we are of our method.",
    ],
    features: [
      "Certified ISA coaches, max 4:1 student ratio",
      "Soft-top board, wetsuit and booties included",
      "Land-based safety and technique briefing",
      "Whitewater wave practice with push-start coaching",
      "Video review of your pop-up after the session",
      "First-ride guarantee — free retry lesson if needed",
    ],
    icon: "Waves",
    image: "/images/service-beginner.jpg",
    priceFrom: "$85",
  },
  {
    slug: "private-coaching",
    name: "Private Coaching",
    tagline: "One-on-one attention that accelerates your progression.",
    description:
      "Solo sessions with a senior coach — the fastest way to fix your pop-up, paddle power, wave selection and turns.",
    longDescription: [
      "Whether you are stuck on your pop-up or ready to start carving, a private session gets you there faster than a season of group lessons. Your coach builds a session around your exact weaknesses and films everything for frame-by-frame review.",
      "Privates run at Cowell’s, Pleasure Point and Capitola depending on the swell, and can include land drills, paddling intervals and video breakdown in the sand after your surf.",
    ],
    features: [
      "Dedicated senior coach for the full session",
      "Session plan built around your goals",
      "Video coaching with frame-by-frame review",
      "Paddling, pop-up and turn technique fixes",
      "Swell and tide scheduling so you surf the best window",
      "Gear matched to your level — high-performance boards available",
    ],
    icon: "UserCheck",
    image: "/images/service-private.jpg",
    priceFrom: "$150",
  },
  {
    slug: "group-surf-camps",
    name: "Group Surf Camps",
    tagline: "Learn together, shred together.",
    description:
      "Multi-day surf camps for friends, families and clubs — morning surf sessions, video reviews, ocean education and plenty of beach time.",
    longDescription: [
      "Our camps blend coached surf sessions with the parts of surfing nobody talks about: reading the ocean, swell forecasting, tides and etiquette in the lineup. You will leave with skills that keep improving long after the camp ends.",
      "Camps run on weekends and school breaks with groups of 6–14. We group students by ability, so beginners and intermediate riders each get coaching tuned to their level.",
    ],
    features: [
      "2–5 day camp formats, morning and sunset sessions",
      "Ability-grouped coaching for beginners and intermediates",
      "Swell forecasting and ocean-reading classes",
      "Daily video review with individual feedback",
      "Snacks, sunscreen and water provided",
      "Camp photo package included",
    ],
    icon: "Users",
    image: "/images/service-group.jpg",
    priceFrom: "$65",
  },
  {
    slug: "advanced-technique-clinics",
    name: "Advanced Technique Clinics",
    tagline: "Refine your turns, timing and wave selection.",
    description:
      "Small-group clinics for confident surfers who want sharper bottom turns, cutbacks and better judgment in the lineup.",
    longDescription: [
      "If you can catch green waves but your turns feel mushy, this clinic is for you. Over two hours we break down rail-to-rail transitions, pump timing, cutbacks and late-drop wave selection — then put it to work on real waves with immediate coach feedback.",
      "Clinics are capped at six surfers and run at intermediate breaks like Pleasure Point and 26th Avenue, matched to the day’s swell direction.",
    ],
    features: [
      "Max 6 surfers per clinic, two senior coaches",
      "Bottom turn, top turn and cutback mechanics",
      "Pump and speed-generation drills",
      "Wave selection and lineup positioning",
      "In-water GoPro footage for post-surf review",
      "Performance shortboard or fish rental available",
    ],
    icon: "Zap",
    image: "/images/service-advanced.jpg",
    priceFrom: "$120",
  },
  {
    slug: "kids-surf-school",
    name: "Kids Surf School",
    tagline: "Safe, fun and confidence-building surf for ages 6–15.",
    description:
      "Specialized kids’ lessons with patient, lifeguard-trained coaches — the friendliest introduction to the ocean your kid will ever have.",
    longDescription: [
      "Our kids’ program is built around one idea: if it is not fun, it will not stick. We use extra-soft boards, warm wetsuits and waist-deep water, and we celebrate every milestone — from first paddle to first stand-up ride.",
      "All kids’ coaches are lifeguard-certified and trained in working with children. Parents are welcome to watch from the sand, and every session ends with a high-five and a sticker for the surf passport.",
    ],
    features: [
      "Ages 6–15, grouped by age and ability",
      "Lifeguard-trained kids’ coaches, 4:1 max ratio",
      "Extra-soft boards and warm wetsuits included",
      "Ocean safety and confidence-building games",
      "Surf passport with stickers for every milestone",
      "Birthday party and grom-camp packages available",
    ],
    icon: "Baby",
    image: "/images/service-kids.jpg",
    priceFrom: "$55",
  },
  {
    slug: "surf-fitness-safety",
    name: "Surf Fitness & Safety",
    tagline: "Paddle stronger, read the ocean, stay safe.",
    description:
      "Land and water conditioning plus ocean-awareness training — build the paddling engine, breath control and judgment that make surfing safer and more fun.",
    longDescription: [
      "Surfing is a paddling sport first. Our fitness program blends beach sprints, paddling intervals, pop-up drills, breathwork and stretching, so you can stay out longer and catch more waves without gassing out.",
      "The safety component covers rip current identification and escape, reading surf forecasts, beach hazards and self-rescue — the skills every surfer should know before heading out on their own.",
    ],
    features: [
      "Paddle-power and endurance conditioning",
      "Breathwork and duck-dive fundamentals",
      "Rip current awareness and self-rescue skills",
      "Reading surf forecasts, tides and swell direction",
      "Warm-up and stretching routines for surfers",
      "Session plans you can continue on your own",
    ],
    icon: "HeartPulse",
    image: "/images/service-fitness.jpg",
    priceFrom: "$75",
  },
  {
    slug: "corporate-team-surf-days",
    name: "Corporate Team Surf Days",
    tagline: "Trade the boardroom for the breakwater.",
    description:
      "Team-building surf days for companies — coaching, laughs and shared stoke, with photo packages and catering options.",
    longDescription: [
      "Nothing bonds a team like everyone falling off a board together. We run private team days for groups of 10–60 with coaches per pod, a beachside base camp and a photographer to capture the wipeouts and the victories.",
      "Corporate days include a short land clinic, coached surf sessions, warm showers at our beach house and an optional catered wrap-up. Perfect for offsites, retreats and client events.",
    ],
    features: [
      "Private beach access for groups of 10–60",
      "Coaches assigned per pod of 6–8",
      "All gear, wetsuits and rash guards included",
      "Professional event photography package",
      "Beach house base with showers and changing rooms",
      "Catered wrap-up options available",
    ],
    icon: "Briefcase",
    image: "/images/service-corporate.jpg",
    priceFrom: "$95",
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  summary: string;
  details: string[];
  image: string;
  stats: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "summer-grom-camp",
    title: "Summer Grom Camp — 40 Kids, Six Weeks of Waves",
    location: "Cowell Beach, Santa Cruz",
    category: "Kids Camp",
    summary:
      "A six-week summer program that took 40 first-time groms from nervous beach walkers to confident whitewater surfers.",
    details: [
      "72 coached sessions across six weeks, grouped by age into four pods of ten.",
      "Every camper stood up on a wave by week two; 27 of 40 caught green waves by graduation.",
      "Ocean-safety curriculum covered rip currents, wave reading and buddy rules — zero incidents all summer.",
    ],
    image: "/images/project-grom-camp.jpg",
    stats: [
      { label: "Kids", value: "40" },
      { label: "Lessons", value: "72" },
      { label: "First rides", value: "100%" },
    ],
  },
  {
    slug: "central-coast-open",
    title: "Central Coast Open — Contest Prep Sprint",
    location: "Pleasure Point, Santa Cruz",
    category: "Competition Training",
    summary:
      "An eight-week private-coaching sprint that took a dozen intermediate surfers to their first regional contest — with five podium finishes.",
    details: [
      "18 private sessions per rider focused on priority rules, heat strategy and late-drop confidence.",
      "Weekly in-water video review built a highlight reel for each athlete’s heat preparation.",
      "Five of the twelve riders placed in the top three of their divisions.",
    ],
    image: "/images/project-competition.jpg",
    stats: [
      { label: "Riders", value: "12" },
      { label: "Sessions", value: "18" },
      { label: "Podiums", value: "5" },
    ],
  },
  {
    slug: "boardwalk-community-surf-day",
    title: "Boardwalk Cleanup & Community Surf Day",
    location: "Capitola Beach",
    category: "Community",
    summary:
      "A volunteer beach cleanup followed by free surf lessons for families who had never been in the water — 85 volunteers, 320 pounds of trash, 60 loaner boards.",
    details: [
      "Partnered with local environmental groups for a two-hour shoreline cleanup along Capitola’s beachfront.",
      "Free coached sessions for first-timers, with boards and wetsuits donated from our rental fleet.",
      "Event raised awareness for local marine conservation and kicked off our monthly community surf club.",
    ],
    image: "/images/project-cleanup.jpg",
    stats: [
      { label: "Volunteers", value: "85" },
      { label: "Trash removed", value: "320 lb" },
      { label: "Boards loaned", value: "60" },
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I am 42 and had never been on a board in my life. Coach Maya had me standing up by the end of the first lesson — I screamed the whole way in.",
    name: "Dana K.",
    role: "First-time surfer, Santa Cruz",
    rating: 5,
  },
  {
    quote:
      "The grom camp changed our daughter. She went from terrified of the water to begging us to go to the beach every weekend. Worth every penny.",
    name: "Marcus & Elena R.",
    role: "Parents of two campers",
    rating: 5,
  },
  {
    quote:
      "We brought our whole 30-person team down for a corporate surf day. Best team-building event we have ever run — the photos alone were worth it.",
    name: "Tanya B.",
    role: "HR Director, Bayline Analytics",
    rating: 5,
  },
  {
    quote:
      "Three private sessions fixed my pop-up after two years of plateauing in group lessons. The video review is a game changer.",
    name: "Jordan P.",
    role: "Intermediate surfer, Capitola",
    rating: 5,
  },
  {
    quote:
      "Golden-hour lesson, glassy waves, and coaches who genuinely care about safety. You can tell this is a crew that lives and breathes surfing.",
    name: "Aiko S.",
    role: "Group camp graduate, San Jose",
    rating: 5,
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "I have never surfed before. Is that okay?",
    answer:
      "Absolutely — about 60% of our students have never been on a board. Beginner lessons start on the sand with a full land briefing, then move to waist-deep whitewater where the waves are soft and forgiving. Standing up on your first lesson is the norm, not the exception.",
  },
  {
    question: "Do I need my own board or wetsuit?",
    answer:
      "No. Every lesson includes a soft-top board, wetsuit and booties matched to your size and the water temperature. If you decide to keep surfing, we can point you to the right board for your level — or rent one of ours.",
  },
  {
    question: "Is surfing safe? What about rip currents?",
    answer:
      "Surfing with a qualified school is very safe. All our coaches are lifeguard-trained, we only teach at breaks we know intimately, and safety briefings cover rip currents, wave reading and beach hazards before anyone gets wet. Every session is supervised from the water and the sand.",
  },
  {
    question: "What happens if the waves are flat or the weather is bad?",
    answer:
      "Santa Cruz has surf almost every day of the year, but when conditions are unsafe or unsurfable we reschedule your lesson to the next good window — free of charge. Your safety and your experience come first, always.",
  },
  {
    question: "How old does my child need to be for the kids’ program?",
    answer:
      "Kids’ lessons start at age 6, grouped by age and ability. Our grom camps run all summer and during school breaks, and every kids’ coach is lifeguard-certified with special training for working with children.",
  },
  {
    question: "Do you offer group rates?",
    answer:
      "Yes. Groups of 6 or more get discounted per-person rates, and our corporate team surf days are fully private for groups of 10–60 with catering and photography options. Ask us for a custom quote.",
  },
  {
    question: "What should I bring to my lesson?",
    answer:
      "Just swimwear or trunks, a towel, sunscreen and a bottle of water. We provide the board, wetsuit, booties and a whole lot of stoke. Wear sunscreen even on cloudy days — the ocean reflects a surprising amount of sun.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Life happens. Cancel or reschedule up to 24 hours before your lesson for a full refund or free rebooking. Within 24 hours we can move your lesson to another slot if the conditions allow — just call us.",
  },
];
