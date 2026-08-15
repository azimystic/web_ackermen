/**
 * English dictionary - the canonical shape. `Dict` is derived from this
 * object; ur.ts and ar.ts must satisfy it, which enforces trilingual parity
 * at compile time.
 *
 * `H` is a headline with a highlighted word: rendered as
 * `{pre}<mark>{mark}</mark>{post}`.
 *
 * Voice: plain business language. Say what the client gets, not how it is
 * engineered. No jargon a non-technical owner would have to look up.
 */
export type H = { pre: string; mark: string; post: string };

export type Quote = {
  before: string;
  highlight: string;
  after: string;
};

const en = {
  meta: {
    homeTitle: "Software, AI and automation for growing businesses",
    homeDescription:
      "Ackerman builds the systems that run your business: websites and apps, AI assistants that answer customers, automation that removes busywork, and dashboards that show what is working. In English, Urdu and Arabic.",
    services: {
      title: "Services",
      description:
        "AI and automation, websites and custom software, mobile apps, and reporting dashboards, built and supported by one team.",
    },
    industries: {
      title: "Industries",
      description:
        "Clinics, real estate, e-commerce, field services, professional firms, construction, retail and hospitality: the same core system, fitted to how your sector works.",
    },
    pricing: {
      title: "Pricing",
      description:
        "Three ways to work with Ackerman: a fixed-scope project, a monthly retainer, or a full build-and-run partnership. Clear numbers, no surprises.",
    },
    work: {
      title: "Work",
      description:
        "Projects we have built and still run, including Kampus, our own school management platform used in three languages.",
    },
    kampus: {
      title: "Kampus case study",
      description:
        "How we built Kampus: one system replacing five for multi-campus schools, working in English, Urdu and Arabic.",
    },
    insights: {
      title: "Insights",
      description:
        "Notes on building multilingual software: right-to-left interfaces, Arabic and Urdu typography, ERP and automation decisions, written from projects we actually ran.",
    },
    testimonials: {
      title: "Client stories",
      description: "What it is like to work with Ackerman, in our clients' words.",
    },
    about: {
      title: "About",
      description:
        "A small senior team that builds business software end to end, and runs its own product, so we build like owners.",
    },
    contact: {
      title: "Contact",
      description:
        "Tell us what you need. You will get a straight answer and a clear next step, usually within one working day.",
    },
  },

  nav: {
    services: "Services",
    industries: "Industries",
    work: "Work",
    pricing: "Pricing",
    testimonials: "Clients",
    about: "About",
    contact: "Contact",
    cta: "Start a project",
  },

  footer: {
    tagline:
      "We build the software that runs your business, and speak your customers' language while doing it.",
    sitemap: "Site",
    servicesTitle: "Services",
    languagesTitle: "This site in",
    languagesNote: "Built in three languages, the same way we build for clients.",
    home: "Home",
    rights: "All rights reserved.",
  },

  home: {
    hero: {
      h: {
        pre: "Software that speaks ",
        mark: "every language",
        post: " your business does.",
      } as H,
      sub: "We build the websites, apps and systems that run your day, then add AI and automation so the repetitive work handles itself. Available in English, Urdu and Arabic, right from the start.",
      ctaPrimary: "Start a project",
      ctaSecondary: "See our work",
      frameCaption: "Kampus: our school platform, running live in three languages",
      trust: "Trusted by teams in education, retail, healthcare and property",
    },
    ticker: [
      "AI assistants",
      "Workflow automation",
      "Websites",
      "Online stores",
      "Custom software",
      "Mobile apps",
      "Dashboards & reports",
      "ERP & CRM systems",
      "Point of sale",
      "Urdu & Arabic support",
    ],
    services: {
      eyebrow: "What we do",
      h: { pre: "Four layers, one ", mark: "working system.", post: "" } as H,
      sub: "Most businesses do not need four vendors. They need these four things to work together, which is exactly how we build them.",
      items: [
        {
          title: "AI & automation",
          line: "Answer customers faster, chase less paperwork",
          desc: "Assistants that reply to enquiries day and night, reminders that cut no-shows, and invoices that file themselves.",
        },
        {
          title: "Web & custom software",
          line: "Websites, stores and the systems behind them",
          desc: "From a site that wins trust to the ERP, CRM or booking system your team actually works in every day.",
        },
        {
          title: "Mobile apps",
          line: "For staff in the field and customers on the go",
          desc: "Apps for iPhone and Android (job sheets, inspections, bookings, deliveries) that keep working when signal drops.",
        },
        {
          title: "Data & reporting",
          line: "Know what is working, without the guesswork",
          desc: "One dashboard pulling every number together, so you see sales, staff and stock at a glance instead of chasing spreadsheets.",
        },
      ],
      cta: "See all services",
    },
    difference: {
      eyebrow: "Why us",
      h: { pre: "Built for customers other agencies ", mark: "can't serve.", post: "" } as H,
      sub: "Most teams add Urdu or Arabic at the very end, and it shows: text runs the wrong way, dates break, forms feel foreign. We design for all three languages from day one, so every customer gets a version that feels made for them.",
      points: [
        {
          title: "It reads naturally, not translated",
          desc: "Urdu and Arabic pages flow right to left properly: menus, forms and buttons all move to where your reader expects them.",
        },
        {
          title: "The typing looks right",
          desc: "We use proper Urdu and Arabic lettering with the spacing those scripts need, so your business does not look careless.",
        },
        {
          title: "Nothing is left half-done",
          desc: "Add a page in English and the other languages are flagged immediately. No forgotten paragraphs sitting in the wrong language for months.",
        },
      ],
      demoTitle: "Try it, this is a real screen",
      demoCaption: "The whole site works this way. Switch the language in the menu above and watch.",
    },
    flagship: {
      eyebrow: "Our own product",
      h: { pre: "We do not just build software. We ", mark: "run it.", post: "" } as H,
      sub: "Kampus is our school management platform, live in real schools today. It handles fees, attendance, results, payroll and parent messaging: in English, Urdu and Arabic. We built it, we support it, and we answer the phone when something breaks.",
      facts: ["8 modules", "4 user types", "3 languages", "Web + mobile"],
      cta: "Read the full story",
      visit: "kampuscloud.app",
    },
    industries: {
      eyebrow: "Who we build for",
      h: { pre: "The same core, fitted to ", mark: "your sector.", post: "" } as H,
      sub: "A clinic and a construction firm need different things. We start from what your industry actually deals with every day.",
      cta: "See all industries",
    },
    stats: {
      eyebrow: "By the numbers",
      h: { pre: "A record, ", mark: "not a pitch.", post: "" } as H,
      labels: {
        projects: "Projects delivered",
        years: "Years building",
        languages: "Languages shipped",
        industries: "Industries served",
      },
    },
    process: {
      eyebrow: "How we work",
      h: { pre: "From first call to ", mark: "up and running.", post: "" } as H,
      steps: [
        {
          title: "We listen",
          desc: "A conversation about how your business actually runs today: what takes too long, what gets lost, what you would fix first.",
        },
        {
          title: "We plan",
          desc: "You get a clear written plan: what gets built, what it costs, and when it lands. No vague quotes, no moving numbers.",
        },
        {
          title: "We build",
          desc: "You see working software every week, not a silent six months. If something is not right, we change it while it is still cheap to change.",
        },
        {
          title: "We launch",
          desc: "We move your existing data across, train your team, and stay close through the first weeks so nothing stalls.",
        },
        {
          title: "We stay",
          desc: "After launch we keep it running: fixes, improvements and new features, at whatever pace suits you.",
        },
      ],
    },
    quotes: {
      title: { pre: "What clients ", mark: "say.", post: "" } as H,
      cta: "Read more",
    },
    faq: {
      eyebrow: "Common questions",
      h: { pre: "Answers before you ", mark: "ask.", post: "" } as H,
      items: [
        {
          q: "How much does a project cost?",
          a: "A focused website or automation build usually starts around $3,000–$8,000. A full business system (ERP, CRM or a custom platform) typically runs $15,000–$60,000 depending on scope. You get a fixed number in writing before any work starts.",
        },
        {
          q: "How long does it take?",
          a: "A website or a single automation is usually 2–4 weeks. A full system is normally 8–16 weeks. We break it into stages so you see something working early rather than waiting for one big reveal.",
        },
        {
          q: "Do we have to replace everything we already use?",
          a: "No. Most of our work connects to the tools you already have. If your accounts live in one system and your bookings in another, we join them up rather than force a rebuild.",
        },
        {
          q: "What if we do not know exactly what we need?",
          a: "That is normal, and it is what the first conversation is for. We map how your business runs today and tell you honestly which parts are worth automating and which are fine as they are.",
        },
        {
          q: "Who owns the code and the data?",
          a: "You do. Everything we build is handed over with full ownership and access. You are never locked in to us to keep it running.",
        },
        {
          q: "Do you work with businesses outside Pakistan?",
          a: "Yes. We work with clients across the Gulf, the UK and North America, and we are used to running projects across time zones in English, Urdu or Arabic.",
        },
      ],
    },
    cta: {
      h: { pre: "Tell us what you're ", mark: "building.", post: "" } as H,
      sub: "A short call or a short email. Either way you get a straight answer about whether we can help, and what it would take.",
      button: "Start a project",
      or: "or email",
    },
  },

  services: {
    intro: {
      eyebrow: "Services",
      h: { pre: "Everything your business runs on, ", mark: "under one roof.", post: "" } as H,
      sub: "One team designs it, builds it, launches it and supports it. You are never passed between agencies, and nobody blames the other vendor when something breaks.",
    },
    rail: {
      ai: "AI & automation",
      web: "Web & software",
      mobile: "Mobile apps",
      data: "Data & reporting",
    },
    ai: {
      eyebrow: "01. AI & automation",
      h: { pre: "Let the repetitive work ", mark: "run itself.", post: "" } as H,
      sub: "Not experiments: working systems that answer customers, move information and chase deadlines while your team does the work that needs a human.",
      cards: [
        {
          title: "AI assistants that answer customers",
          desc: "On your website, WhatsApp, or the phone. They answer questions, book appointments and pass real enquiries to your team, at 2am and on Sundays included.",
          points: [
            "Replies in seconds, day or night",
            "Books and reschedules appointments",
            "Answers in English, Urdu or Arabic",
            "Hands over to a person when it matters",
          ],
        },
        {
          title: "Follow-up that never forgets",
          desc: "Every enquiry captured, sorted and followed up automatically, so leads stop going cold because someone was busy.",
          points: [
            "Enquiries routed to the right person",
            "Automatic reminders and follow-ups",
            "Abandoned carts and quotes chased",
            "Nothing sits in an inbox unanswered",
          ],
        },
        {
          title: "Paperwork that files itself",
          desc: "Invoices, receipts and contracts read automatically, entered where they belong, with renewal and tax deadlines tracked before they pass.",
          points: [
            "Invoices and receipts read and filed",
            "Details entered into your accounts",
            "Contract and licence dates tracked",
            "Deadline alerts before they are missed",
          ],
        },
        {
          title: "Internal processes on autopilot",
          desc: "Approvals, new-staff setup and the endless copying between systems, handled by rules instead of people.",
          points: [
            "Approvals routed automatically",
            "New staff set up in one step",
            "Systems kept in sync without retyping",
            "Weekly reports sent without asking",
          ],
        },
        {
          title: "AI built into your own product",
          desc: "If you sell software, we can add the intelligent parts: a helper that answers from your own documents, forecasting, or spotting the numbers that look wrong.",
          points: [
            "Answers drawn from your own documents",
            "In-product assistants and copilots",
            "Demand and revenue forecasting",
            "Unusual activity flagged early",
          ],
        },
      ],
    },
    web: {
      eyebrow: "02. Web & custom software",
      h: { pre: "The system your team ", mark: "works in daily.", post: "" } as H,
      sub: "From the website that wins the enquiry to the software that fulfils it: built around how you already work, not the other way round.",
      cards: [
        {
          title: "Websites that win work",
          desc: "Fast, clear sites that load quickly, rank well and turn visitors into enquiries, in every language your market speaks.",
          points: [
            "Built for search and speed",
            "Easy for your team to update",
            "Works properly on every phone",
            "English, Urdu and Arabic ready",
          ],
        },
        {
          title: "Online stores",
          desc: "Storefronts that handle stock, payments, delivery and returns without you checking three systems to answer one question.",
          points: [
            "Live stock across all channels",
            "Local and international payments",
            "Delivery and returns handled",
            "Abandoned carts recovered",
          ],
        },
        {
          title: "Business systems (ERP & CRM)",
          desc: "One place for stock, money, staff and customers, replacing the pile of spreadsheets nobody fully trusts.",
          points: [
            "Stock, purchasing and suppliers",
            "Accounts and reporting",
            "Staff records and payroll",
            "Customer history and follow-ups",
          ],
        },
        {
          title: "Point of sale & booking",
          desc: "Tills that stay fast at the busiest hour, and booking systems that fill your calendar without the phone tag.",
          points: [
            "Quick tills, keyboard or touch",
            "Stock updated as you sell",
            "Online booking and reminders",
            "Clean end-of-day totals",
          ],
        },
      ],
    },
    mobile: {
      eyebrow: "03. Mobile apps",
      h: { pre: "For the people who work ", mark: "away from a desk.", post: "" } as H,
      sub: "Apps for iPhone and Android built for real conditions (a van, a site, a ward, a shop floor) where signal is patchy and hands are full.",
      cards: [
        {
          title: "Field & job apps",
          desc: "Job sheets, photos, signatures and time on site, captured once by the person doing the work.",
          points: [
            "Works offline, syncs later",
            "Photos and signatures on the spot",
            "Live job status for the office",
            "Routes and schedules built in",
          ],
        },
        {
          title: "Inspection & compliance",
          desc: "Checklists that produce a proper report the moment the visit ends, instead of an evening of typing.",
          points: [
            "Custom checklists per job type",
            "Reports generated instantly",
            "Photo evidence attached",
            "Full history kept for audits",
          ],
        },
        {
          title: "Staff & customer apps",
          desc: "Rotas, payslips and requests for your team; bookings, orders and updates for your customers.",
          points: [
            "Rotas, leave and payslips",
            "Push notifications that matter",
            "Customer bookings and orders",
            "Available in three languages",
          ],
        },
      ],
    },
    data: {
      eyebrow: "04. Data & reporting",
      h: { pre: "Stop guessing. ", mark: "See the numbers.", post: "" } as H,
      sub: "Your information already exists, it is just scattered. We bring it into one view that answers the questions you actually ask on a Monday morning.",
      cards: [
        {
          title: "One dashboard for the business",
          desc: "Sales, cash, stock and staff on a single screen, updating on its own, no more waiting for someone to build the monthly deck.",
          points: [
            "Live figures, not last month's",
            "One view across all branches",
            "Open it on a phone or a laptop",
            "Alerts when something drifts",
          ],
        },
        {
          title: "Know what marketing actually works",
          desc: "See which adverts, posts and campaigns bring paying customers, and which quietly waste money every month.",
          points: [
            "Enquiries traced to their source",
            "Cost per real customer",
            "Channel-by-channel comparison",
            "Reports sent to you weekly",
          ],
        },
        {
          title: "Scorecards for your team",
          desc: "Clear, fair numbers for branches, salespeople or clinicians: the same measure for everyone, updated automatically.",
          points: [
            "Branch and team comparisons",
            "Targets tracked automatically",
            "No manual spreadsheet chasing",
            "Shared honestly across the team",
          ],
        },
      ],
    },
    multilingual: {
      eyebrow: "Included throughout",
      h: { pre: "Urdu and Arabic, ", mark: "done properly.", post: "" } as H,
      sub: "This is not an add-on we charge extra for at the end. Every layer above can ship in English, Urdu and Arabic with the layout, lettering and reading direction each language needs.",
      demoCaption: "Live example, switch the language and watch the whole screen turn around.",
    },
    engagement: {
      eyebrow: "Working together",
      h: { pre: "One project, or a team that ", mark: "sticks around.", post: "" } as H,
      sub: "Some clients want one thing built properly and handed over. Others want us on call as their software team for the long run. Both work, and in both, you talk directly to the people building, not an account manager relaying messages.",
      cta: "See pricing",
    },
    cta: {
      h: { pre: "Not sure which part you ", mark: "need first?", post: "" } as H,
      sub: "Describe the problem in a few sentences. We will tell you where to start, even if that turns out to be nothing at all.",
      button: "Start a project",
    },
  },

  industries: {
    intro: {
      eyebrow: "Industries",
      h: { pre: "We start from how ", mark: "your sector works.", post: "" } as H,
      sub: "The underlying system is the same. What changes is the vocabulary, the rules you answer to, and the moments where customers slip away.",
    },
    items: [
      {
        name: "Clinics & aesthetics",
        who: "Dental, cosmetic, aesthetic and veterinary practices",
        pain: "Missed calls become lost bookings, and no-shows cost a full chair.",
        fix: "Assistants that answer and book around the clock, reminders that cut no-shows, and records that stay private and in order.",
      },
      {
        name: "Real estate",
        who: "Brokerages and property or facility management firms",
        pain: "Enquiries arrive at midnight and go cold by morning.",
        fix: "Instant replies to every listing enquiry, viewings booked automatically, and owner reporting that writes itself.",
      },
      {
        name: "E-commerce",
        who: "Online and retail brands selling direct to customers",
        pain: "Carts get abandoned and stock numbers disagree between channels.",
        fix: "One stock figure everywhere, abandoned carts chased automatically, and honest reporting on which ads actually pay.",
      },
      {
        name: "Home & field services",
        who: "Contractors, inspection and maintenance businesses",
        pain: "Job details live in a van, a WhatsApp thread, and someone's memory.",
        fix: "Field apps that capture the job once, work offline, and let the office see progress without phoning the crew.",
      },
      {
        name: "Professional services",
        who: "Accounting, bookkeeping and legal practices",
        pain: "Deadlines and documents are tracked by hand, and one slip is expensive.",
        fix: "Documents read and filed automatically, deadlines tracked before they pass, and client onboarding that runs itself.",
      },
      {
        name: "Construction",
        who: "Firms managing tenders, site work and certifications",
        pain: "Certificates expire and tender paperwork is rebuilt from scratch each time.",
        fix: "Certification dates tracked, site reports produced from the phone, and tender documents assembled from what you already have.",
      },
      {
        name: "Retail & hospitality",
        who: "Multi-branch retail, salons and appointment-based venues",
        pain: "Each branch reports differently, so the real picture arrives too late.",
        fix: "Fast tills, bookings that fill quiet hours, and one dashboard comparing every branch on the same measure.",
      },
      {
        name: "Regulated & compliance-heavy",
        who: "Businesses managing invoicing, tax and regulatory deadlines",
        pain: "Compliance work eats senior time and still carries risk.",
        fix: "Invoicing and filing automated, records kept audit-ready, and alerts well before any deadline.",
      },
    ],
    cta: {
      h: { pre: "Not on the list? ", mark: "Still talk to us.", post: "" } as H,
      sub: "These are simply where we have done the most work. The underlying problems (slow replies, scattered data, manual paperwork) look much the same everywhere.",
      button: "Start a project",
    },
  },

  pricing: {
    intro: {
      eyebrow: "Pricing",
      h: { pre: "Clear numbers, ", mark: "agreed upfront.", post: "" } as H,
      sub: "You get a fixed figure in writing before work starts. If the scope changes, we tell you what it costs before we build it, never after.",
    },
    plans: [
      {
        name: "Focused project",
        best: "Best for one clear job",
        price: "From $3,000",
        note: "Fixed price, 2–4 weeks",
        desc: "A website, an online store, or a single automation that removes one painful task.",
        features: [
          "Fixed price agreed upfront",
          "Design and build included",
          "Launch and handover",
          "30 days of support after launch",
          "Full ownership of everything",
        ],
        cta: "Get a quote",
      },
      {
        name: "Full system",
        best: "Best for running the business",
        price: "From $15,000",
        note: "Fixed price, 8–16 weeks",
        desc: "A complete platform. ERP, CRM, booking or a custom system your team lives in daily.",
        features: [
          "Everything in Focused project",
          "Multiple connected modules",
          "Your existing data moved across",
          "Team training included",
          "Three languages if you need them",
          "90 days of support after launch",
        ],
        cta: "Book a call",
        featured: true,
      },
      {
        name: "Ongoing partner",
        best: "Best for continuous work",
        price: "From $2,000/mo",
        note: "Monthly, cancel any time",
        desc: "We act as your software team: building the roadmap, running what exists, answering when things break.",
        features: [
          "Agreed hours every month",
          "Priority response",
          "Continuous improvements",
          "Monitoring and maintenance",
          "Direct line to the builders",
          "No long lock-in contract",
        ],
        cta: "Talk to us",
      },
    ],
    note: "Prices are in US dollars and cover the build itself. Third-party costs (hosting, domains, payment fees, AI usage) are billed at cost and always shown to you first.",
    faq: {
      eyebrow: "Questions about cost",
      h: { pre: "The awkward questions, ", mark: "answered.", post: "" } as H,
      items: [
        {
          q: "Why is there a range rather than one price?",
          a: "Because a five-page site and a fifty-page store are not the same job. The range tells you the neighbourhood; the written quote after our first call gives you the exact figure.",
        },
        {
          q: "What if it takes longer than planned?",
          a: "That is our problem, not your bill. A fixed-price project stays at the agreed price unless you ask for something new, and then we quote that separately before building it.",
        },
        {
          q: "Do you take payment in stages?",
          a: "Yes. Usually a third to begin, a third at the halfway review, and the rest at launch. For monthly work you are invoiced at the start of each month.",
        },
        {
          q: "Is there anything charged later?",
          a: "Only running costs, and only ever at cost: hosting, domains and any AI usage. We show you those numbers before you commit, and you can pay providers directly if you prefer.",
        },
      ],
    },
    cta: {
      h: { pre: "Want a real number for ", mark: "your project?", post: "" } as H,
      sub: "Tell us roughly what you need. You will get a written quote, not a discovery-call sales script.",
      button: "Get a quote",
    },
  },

  work: {
    intro: {
      eyebrow: "Work",
      h: { pre: "Built, launched, ", mark: "still running.", post: "" } as H,
      sub: "A selection of what we have shipped. Some client names are withheld where the agreement asks us to.",
    },
    kampusCard: {
      sector: "Education · Our own product",
      title: "Kampus",
      line: "One platform replacing five systems for multi-campus schools, in three languages.",
      cta: "Read case study",
    },
    moreSoon: "More case studies are being written up.",
    viewCase: "View project",
  },

  kampusCase: {
    meta: {
      sector: "Sector: Education",
      type: "Type: Our own product",
      languages: "Languages: English · Urdu · Arabic",
      platforms: "Platforms: Web · iPhone · Android",
    },
    h: { pre: "One platform for the ", mark: "whole school.", post: "" } as H,
    sub: "Kampus is our own product: a school management system handling fees, attendance, results, payroll and parent messaging for schools running several campuses.",
    challenge: {
      eyebrow: "The problem",
      title: "Schools run on five systems that do not talk to each other.",
      body: "Attendance in one app, fees in a spreadsheet, payroll in another tool, report cards typed by hand. The same information gets entered three times, and the owner cannot see today's real numbers without asking three people. Kampus replaces that pile with one system where marks, money and messages share the same source.",
    },
    built: {
      eyebrow: "What we built",
      h: { pre: "Eight modules, four ", mark: "kinds of user.", post: "" } as H,
      modules: [
        "Classes & timetables",
        "Student records",
        "Attendance",
        "Exams & report cards",
        "Fees & invoicing",
        "Accounts",
        "Staff & payroll",
        "Parent messaging",
      ],
      portals: ["Office staff", "Teachers", "Parents", "Students"],
      portalsLabel: "Who uses it",
      modulesLabel: "What it covers",
    },
    gallery: {
      eyebrow: "The product",
      title: "The same screen, three languages",
    },
    rtl: {
      eyebrow: "The language story",
      h: { pre: "One product, three ", mark: "ways of reading.", post: "" } as H,
      body: "Kampus works in English, Urdu and Arabic, and in the last two the whole screen turns around, the way those readers expect. Menus move, tables reverse, and the lettering uses proper Urdu and Arabic type. Fee amounts stay lined up and readable in every version. This is the capability we bring to every project.",
    },
    outcomes: {
      eyebrow: "Where it stands",
      title: "Live in schools today",
      body: "Kampus is in daily use, supported by us, and still growing. Running our own product in production is why we understand what happens after launch, because we live with it.",
      visit: "Visit kampuscloud.app",
    },
    cta: {
      h: { pre: "Want something like ", mark: "this?", post: "" } as H,
      sub: "Kampus started as a sketch on a call. Yours can too.",
      button: "Start a project",
    },
  },

  insights: {
    intro: {
      eyebrow: "Insights",
      h: { pre: "What we learned ", mark: "building it.", post: "" } as H,
      sub: "Notes from real projects: what right-to-left actually demands, where multilingual products go wrong, and when a system is worth building at all.",
    },
    empty: "The first articles are being written and will appear here shortly.",
    readMore: "Read the article",
    back: "All insights",
    by: "By",
  },

  testimonials: {
    intro: {
      eyebrow: "Clients",
      h: { pre: "In their ", mark: "own words.", post: "" } as H,
      sub: "From the people who run their business on what we built.",
    },
    empty: "Client stories are being collected and will appear here shortly.",
  },

  about: {
    intro: {
      eyebrow: "About",
      h: { pre: "A software team, ", mark: "not a middleman.", post: "" } as H,
      sub: "Ackerman builds business software from start to finish, and runs its own product in the real world, which changes how carefully you build everything else.",
    },
    principles: {
      eyebrow: "How we think",
      items: [
        {
          title: "We live with what we build",
          desc: "We run Kampus in real schools. When something breaks there, it is our evening that disappears, so we build everything else with the same care.",
        },
        {
          title: "We tell you what not to build",
          desc: "If a feature will cost more than it returns, you will hear that before you pay for it. A shorter honest project beats a long expensive one.",
        },
        {
          title: "Every customer matters, in every language",
          desc: "Your Urdu and Arabic customers deserve something that feels made for them, not an afterthought. Most teams will not do this properly. We will.",
        },
        {
          title: "You talk to the builders",
          desc: "No account managers relaying messages. The people who scope your project are the ones writing it, so nothing gets lost in translation.",
        },
      ],
    },
    setup: {
      eyebrow: "How we are set up",
      title: "Small team, senior hands.",
      body: "We are deliberately compact. The people who plan your project are the ones who build it, which keeps the context intact from first call to final launch, and keeps you off the merry-go-round of being handed to a new team every few weeks.",
    },
    cta: {
      h: { pre: "See if we ", mark: "fit.", post: "" } as H,
      sub: "The fastest way to find out is a short conversation about what you are trying to do.",
      button: "Start a project",
    },
  },

  contact: {
    intro: {
      eyebrow: "Contact",
      h: { pre: "Tell us what you're ", mark: "building.", post: "" } as H,
      sub: "A few sentences is plenty. You will get a straight answer and a clear next step, usually within one working day.",
    },
    form: {
      name: "Your name",
      email: "Email",
      company: "Company (optional)",
      projectType: "What do you need?",
      projectOptions: [
        "AI assistant or automation",
        "Website or online store",
        "Business system (ERP, CRM, POS)",
        "Mobile app",
        "Dashboards and reporting",
        "Not sure yet, need advice",
      ],
      budget: "Rough budget (optional)",
      budgetOptions: [
        "Not sure yet",
        "Under $5,000",
        "$5,000 – $15,000",
        "$15,000 – $50,000",
        "Over $50,000",
      ],
      message: "About your project",
      messagePlaceholder:
        "What are you trying to do, who will use it, and what is going wrong today?",
      submit: "Send message",
      note: "This opens your email app with the message ready to send. Nothing is stored on this site.",
    },
    direct: {
      eyebrow: "Direct",
      emailLabel: "Email us",
      title: "Prefer to just email?",
      body: "Skip the form. It reaches the same people, and it is not a ticket queue.",
      responseTitle: "What happens next",
      responseSteps: [
        "We reply within one working day",
        "A short call to understand the job",
        "A written plan and a fixed price",
      ],
    },
  },

  common: {
    placeholderTag: "Sample content",
    learnMore: "Learn more",
    backToWork: "All case studies",
    readMore: "Read more",
  },
};

export type Dict = typeof en;
export default en;
