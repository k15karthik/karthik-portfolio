// Centralized content for the site. Every fact here traces back to the
// resume, GitHub (k15karthik), or explicit context supplied directly by
// Karthik. Nothing here is invented.

export const profile = {
  name: "Karthik Kesavarapu",
  location: "Naperville, IL",
  email: "karthikkes8970@gmail.com",
  github: "https://github.com/k15karthik",
  linkedin: "https://linkedin.com/in/karthikkesavarapu",
  resumeHref: "/Karthik_Kesavarapu_Resume.pdf",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];

export const achievements = [
  {
    year: "2023",
    title: "Admitted to UIC Honors College",
    detail:
      "Began the B.S. in Computer Science at the University of Illinois Chicago, College of Engineering, entering the Honors College.",
  },
  {
    year: "2025",
    title: "Databricks Certified Data Analyst Associate",
    detail:
      "Earned alongside the Databricks Academy credential in AI Agent & Generative AI Fundamentals, formalizing hands-on work with the lakehouse platform.",
  },
  {
    year: "2025",
    title: "Two data engineering internships, back to back",
    detail:
      "Power BI development followed by a Medallion Architecture build-out on Azure Databricks at Seyon Solutions — six consecutive months in production data systems.",
  },
  {
    year: "2026",
    title: "Treasury Management Analyst Intern, Old National Bank",
    detail:
      "Took validation and reporting infrastructure into a regulated banking environment, then prototyped an agentic copilot for treasury consultants.",
  },
  {
    year: "2026",
    title: "Graduated Summa Cum Laude, UIC",
    detail:
      "Completed the B.S. in Computer Science Summa Cum Laude as an Honors College graduate — coursework spanning Machine Learning, Database Systems, and Agentic AI.",
  },
  {
    year: "2026",
    title: "Began M.S. Computer Science, University of Chicago",
    detail:
      "Enrolled in the MPCS program's 12-course Artificial Intelligence specialization, continuing toward research-grade depth in AI and intelligent systems.",
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  architecture: string;
  contribution: string;
  tags: string[];
  kind: "Professional" | "Team Project" | "Academic Project" | "Independent Project";
  github?: string;
  live?: string;
  note?: string;
  featured: boolean;
  diagram: "pipeline" | "board" | "tutor" | "risk" | "db" | "data" | "team";
};

export const projects: Project[] = [
  {
    id: "tm-next",
    name: "TM Next",
    tagline:
      "A six-stage agentic pipeline that turns a banker's intake notes into a defensible product recommendation.",
    problem:
      "Treasury Management consultants at Old National Bank assembled client profiles, product fit, and ROI justification by hand across disconnected tools — slow, and hard to make consistent across consultants.",
    architecture:
      "A LangGraph pipeline moves a client case through six typed stages — profile, needs, product, ROI, compliance, executive summary — with Pydantic models enforcing structure between every handoff. Candidate products are retrieved from a ChromaDB knowledge base via semantic search and scored by a deterministic ROI engine, while a consultant accept/reject loop feeds back into future recommendations. An async FastAPI backend streams each stage's progress live to a Next.js dashboard over Server-Sent Events, with analyses persisted in SQLite.",
    contribution:
      "Designed and built as a proof-of-concept during my Treasury Management Analyst internship — the pipeline architecture, the retrieval-and-scoring logic, and the real-time streaming dashboard.",
    tags: ["Python", "LangGraph", "OpenAI API", "FastAPI", "Next.js", "ChromaDB", "Pydantic", "SSE"],
    kind: "Professional",
    note: "Internal proof-of-concept — proprietary to Old National Bank, no public repository.",
    featured: true,
    diagram: "pipeline",
  },
  {
    id: "finboard",
    name: "FinBoard",
    tagline:
      "Four AI agents, four reasoning strategies, one synthesized financial recommendation.",
    problem:
      "Most AI finance tools return a single confident answer. A real advisory conversation weighs opportunity against risk from multiple angles before it converges — FinBoard tries to model that process instead of shortcutting it.",
    architecture:
      "LangGraph orchestrates a board of four agents, each running a distinct reasoning strategy: an Economic News Agent grounded in NewsAPI via RAG, a Budget Planner and an Investment Advisor both running ReAct, and a Risk Analyst that critiques the board's output through adversarial reflection. When the Risk Analyst flags severity at 4/5 or higher, it forces the Investment Advisor back for a revision before the board can finalize. A FastAPI/Uvicorn backend streams each agent's output to the frontend as it completes, surfacing risk badges, allocation percentages, and full reasoning traces rather than a black-box verdict.",
    contribution:
      "Led the project on a five-person team, driving the system architecture and multi-agent orchestration design that the rest of the board was built around.",
    tags: ["Python", "FastAPI", "LangGraph", "OpenAI API", "NewsAPI", "React"],
    kind: "Team Project",
    github: "https://github.com/k15karthik/FinBoard",
    live: "https://fin-board-taupe-pi.vercel.app",
    featured: true,
    diagram: "board",
  },
  {
    id: "edu-chatbot",
    name: "Educational Chatbot",
    tagline: "A Socratic tutor that is built to never just hand you the answer.",
    problem:
      "Most AI tutoring tools shortcut the point of studying by answering directly. Retention comes from being walked toward an answer, not handed one.",
    architecture:
      "A multi-agent tutor built around a Socratic agent that guides students through adaptive questioning rather than direct answers, grounded by a RAG pipeline over a ChromaDB vector store of course-specific material. A FastAPI backend exposes REST endpoints to a Next.js/TypeScript frontend, secured with JWT authentication, including a lockdown exam mode for assessment contexts.",
    contribution:
      "Architected and built as my official UIC Capstone Project — the agent design, the retrieval grounding, and the full-stack delivery.",
    tags: ["Next.js", "TypeScript", "FastAPI", "Python", "ChromaDB", "OpenAI API", "JWT"],
    kind: "Academic Project",
    note: "UIC Capstone Project, Spring 2026",
    github: "https://github.com/k15karthik/edu-chatbot",
    featured: true,
    diagram: "tutor",
  },
  {
    id: "xopyops",
    name: "XOPYops",
    tagline: "Simulating six months of machine health to catch downtime before it happens.",
    problem:
      "Unplanned downtime on industrial equipment is expensive and often preventable if the right operational signals are modeled ahead of failure.",
    architecture:
      "A full-stack operations app backed by PostgreSQL, built around a simulated six-month machine-health dataset. Logistic regression and random forest models are trained on that operational data to classify downtime risk.",
    contribution: "Built independently, from data simulation through modeling to the application layer.",
    tags: ["Python", "PostgreSQL", "scikit-learn"],
    kind: "Independent Project",
    featured: true,
    diagram: "risk",
  },
];

export const sideProjects: Project[] = [
  {
    id: "hotelops",
    name: "HotelOps",
    tagline: "A hotel operations platform with hand-written SQL, not an ORM.",
    problem:
      "A CS 480 Database Systems project built to prove out schema design and query logic directly, without an abstraction layer hiding the SQL.",
    architecture:
      "Next.js and Tailwind frontend, FastAPI backend querying PostgreSQL directly via psycopg2. Room availability is resolved with overlap-detection SQL rather than an ORM's date-range helpers. Manager tooling includes six analytics reports (top clients, problematic hotels, client spend); client tooling covers search, booking, and review flows.",
    contribution: "Built solo for CS 480: Database Systems at UIC.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "psycopg2"],
    kind: "Academic Project",
    github: "https://github.com/k15karthik/HotelManagementProject_CS480",
    featured: false,
    diagram: "db",
  },
  {
    id: "carbonlens",
    name: "CarbonLens",
    tagline: "Modeling household appliance efficiency against national CO2 emissions data.",
    problem:
      "A CS 418 project exploring whether appliance-level efficiency data can inform emissions-reduction modeling at a country scale.",
    architecture:
      "Cleaned datasets across appliance categories (air conditioners, refrigerators, televisions, and more) joined against country-level CO2 emissions data, explored and modeled in a Jupyter notebook.",
    contribution: "Built for CS 418: Data Visualization at UIC.",
    tags: ["Python", "Jupyter", "Data Modeling"],
    kind: "Academic Project",
    github: "https://github.com/k15karthik/CarbonLens",
    featured: false,
    diagram: "data",
  },
  {
    id: "pawportal",
    name: "PawPortal",
    tagline: "A four-person systems-design project built around a scenario-driven simulation.",
    problem:
      "A CS 440 Software Engineering project centered on formal scenario design, user stories, and implementation reporting across a semester-long build.",
    architecture:
      "Built collaboratively in Python with a structured engineering process — scenario reports, user story cards, and milestone implementation reports documenting the system as it was built.",
    contribution: "Collaborated with three classmates for CS 440: Software Engineering I at UIC.",
    tags: ["Python", "Software Design"],
    kind: "Team Project",
    github: "https://github.com/k15karthik/PawPortal",
    featured: false,
    diagram: "team",
  },
];

export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    org: "Old National Bank",
    role: "Treasury Management Analyst Intern",
    period: "May 2026 — Aug 2026",
    location: "Chicago, IL",
    bullets: [
      "Built a centralized data-validation report on Databricks queries to monitor dataset health across every bank domain — load status, row counts, and budget values in one place.",
      "Designed configurable validation thresholds, giving data engineers per-dataset control over check strictness instead of a one-size-fits-all rule.",
      "Redesigned treasury KPI reports and optimized DAX measures to cut Power BI load times.",
    ],
    tags: ["Azure Databricks", "Power BI", "DAX"],
  },
  {
    org: "Seyon Solutions",
    role: "Data Engineering Intern — Azure Databricks",
    period: "Aug 2025 — Jan 2026",
    location: "Chicago, IL",
    bullets: [
      "Implemented Medallion Architecture in Azure Databricks to ingest, clean, and transform data across Bronze, Silver, and Gold layers, governed end-to-end by Unity Catalog.",
      "Built and optimized ETL pipelines to validate and enrich raw data for analytics readiness.",
      "Designed Gold-layer datasets purpose-built for business reporting and downstream analytics.",
    ],
    tags: ["Azure Databricks", "Unity Catalog", "ETL", "Medallion Architecture"],
  },
  {
    org: "Seyon Solutions",
    role: "Data Engineering Intern — Power BI Developer",
    period: "May 2025 — Jul 2025",
    location: "Chicago, IL",
    bullets: [
      "Developed Power BI dashboards integrating SQL, Excel, and cloud sources, modeling data with Power Query and DAX.",
      "Enabled natural-language querying over the dashboards via Power BI Q&A.",
    ],
    tags: ["Power BI", "Power Query", "DAX", "SQL"],
  },
  {
    org: "Real AI Dynamics",
    role: "Next.js Developer",
    period: "Aug 2024 — Dec 2024",
    location: "Remote",
    bullets: [
      "Built real-time communication components in Next.js and integrated backend APIs with the UI inside Agile sprints run through GitHub and JIRA.",
      "Refactored components into modular structures to improve front-end performance.",
    ],
    tags: ["Next.js", "React", "JIRA"],
  },
];

export const expertise = [
  {
    category: "Languages",
    items: ["Python", "SQL", "TypeScript", "JavaScript", "Java", "C++", "C", "Bash"],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "LangGraph",
      "LangChain",
      "OpenAI API",
      "RAG",
      "ChromaDB",
      "Pydantic",
      "scikit-learn",
      "Pandas",
    ],
  },
  {
    category: "Data Engineering & Cloud",
    items: [
      "Azure Databricks",
      "Unity Catalog",
      "Medallion Architecture",
      "ETL Pipelines",
      "Microsoft Azure",
      "AWS (EC2)",
      "Power BI (DAX)",
    ],
  },
  {
    category: "Software Engineering",
    items: [
      "FastAPI",
      "Flask",
      "Next.js",
      "React",
      "Node.js",
      "Streamlit",
      "PostgreSQL",
      "SQL Server",
      "MySQL",
      "SQLite",
    ],
  },
];

export const certifications = [
  "Databricks Certified Data Analyst Associate",
  "Databricks Academy: AI Agent & Generative AI Fundamentals",
];

export const principles = [
  {
    title: "Understand why, not just how",
    detail:
      "Getting a pipeline or a model to work is the easy half. I don't consider something learned until I can explain why it behaves the way it does.",
  },
  {
    title: "Depth over breadth, by choice",
    detail:
      "I'd rather go deep enough on Medallion Architecture or agent orchestration to reason about edge cases than collect a longer list of frameworks I've only sampled.",
  },
  {
    title: "Hold the standard even when no one's checking",
    detail:
      "Graduating Summa Cum Laude through an Honors College curriculum wasn't about the transcript — it was about not letting myself turn in work I knew was short of what I could do.",
  },
  {
    title: "Treat the next hard thing as the point",
    detail:
      "Each step — UIC to Seyon Solutions to Old National Bank to UChicago's MPCS — was chosen because it was a harder room to be in, not a safer one.",
  },
];
