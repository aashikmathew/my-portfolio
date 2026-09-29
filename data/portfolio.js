// Single source of truth for all site content.
// Tags on projects and experience are matched (case-insensitive) against skill
// names and aliases to power the "where I've used it" view in the Skills section.

export const profile = {
  name: 'Aashik Mathew Prosper',
  firstName: 'Aashik',
  role: 'Software Engineer',
  company: 'Phillip Capital',
  headline: 'Capital Markets · Trading Systems · Backend Engineering',
  tagline:
    'I build the software behind futures and options clearing: trade processing, risk, and regulatory reporting that has to be right every single day.',
  location: 'Chicago, IL',
  email: 'aashikmathewss@gmail.com',
  resume: 'https://drive.google.com/file/d/1j-UagkD61zzbPCbwiAR0xLa4eUdU7KX_/view?usp=sharing',
  socials: {
    github: 'https://github.com/aashikmathew',
    linkedin: 'https://www.linkedin.com/in/aashikmathew',
  },
};

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const currentRole = {
  title: 'Software Engineer',
  org: 'Phillip Capital Inc.',
  detail: 'Futures commission merchant & self-clearing broker-dealer',
  link: 'https://www.phillipcapital.com',
};

export const education = [
  { degree: 'MS, Computer Science', school: 'University of Illinois Chicago', years: '2023 – 2025', gpa: '4.0' },
  { degree: 'BE, Computer Science & Engineering', school: 'Anna University', years: '2019 – 2023', gpa: '3.8' },
];

export const certifications = [
  { name: 'Terraform Associate (003)', issuer: 'HashiCorp', year: 2025 },
  { name: 'Associate Cloud Engineer', issuer: 'Google Cloud', year: 2025 },
  { name: 'Cloud Digital Leader', issuer: 'Google Cloud', year: 2025 },
];

// Scrolling "market tape" under the hero.
export const tickerItems = [
  { label: 'EMIR GTR', delta: 'LIVE' },
  { label: 'C#', delta: '.NET' },
  { label: 'PYTHON', delta: '▲' },
  { label: 'SPAN', delta: 'MARGIN' },
  { label: 'CME', delta: 'ICE' },
  { label: 'AIRFLOW', delta: '−40% MANUAL' },
  { label: 'MS CS', delta: '4.0 GPA' },
  { label: 'FABRIC', delta: 'ONELAKE' },
  { label: 'PAPERS', delta: '3 PUBLISHED' },
  { label: 'YOLOv8', delta: '+15% ACC' },
  { label: 'TERRAFORM', delta: 'CERTIFIED' },
  { label: 'EOD', delta: 'CLEARED' },
];

export const experiences = [
  {
    id: 'phillip-capital',
    role: 'Software Engineer',
    company: 'Phillip Capital Inc.',
    type: 'Full-time',
    start: 'Jan 2026',
    end: 'Present',
    location: 'Chicago, IL',
    bullets: [
      'Enhanced EMIR GTR EU regulatory reporting by improving trade lifecycle logic and automating NEW, CRCN, TERM, and TermSD submissions.',
      'Support and extend CQ back-office systems for futures and options trade storage, clearing, EOD processing, offsets, and production trade support.',
      'Built automated Cumulus9 unrealized PnL reporting pipelines with Apache Airflow and SFTP, cutting manual risk reporting effort by about 40%.',
      'Work across margin, risk, and exchange integrations: SPAN processes, ICE and CME APIs, breach reports, and CME weekend trading operations.',
      'Resolve production issues across clearing, EOD workflows, trade offsets, TAS block trades, IBM MQ configuration, and client financial summaries.',
    ],
    tags: [
      'C#', '.NET', 'Python', 'SQL', 'Azure', 'Microsoft Fabric', 'Apache Airflow', 'SFTP', 'OpenAI API', 'IBM MQ',
      'ICE API', 'CME API', 'EMIR GTR', 'CQ Back Office', 'Cumulus9', 'SPAN', 'Clearing', 'EOD Processing',
      'Futures & Options', 'Regulatory Reporting', 'Trade Lifecycle', 'TAS Block Trades', 'Trade Offsets', 'Risk & Margin',
    ],
  },
  {
    id: 'uic-research',
    role: 'Research Specialist, Machine Learning Engineer',
    company: 'UIC Biomechanical Orthopaedics Lab',
    type: 'Full-time',
    start: 'May 2024',
    end: 'Dec 2025',
    location: 'Chicago, IL',
    bullets: [
      'Built end-to-end ML and computer vision pipelines with YOLOv8, UNet, 3D CNNs, PyTorch, and OpenCV, improving model accuracy by 15%.',
      'Developed LLM-assisted evaluation and reporting workflows that automated review of experiment outputs.',
      'Optimized preprocessing, training, and evaluation with Dask and Spark, reducing training time by about 30%.',
      'Created reproducible training scripts, evaluation notebooks, and documentation for faster debugging and collaboration.',
    ],
    tags: ['Python', 'PyTorch', 'OpenCV', 'YOLOv8', 'Computer Vision', 'Deep Learning', 'Dask', 'Apache Spark', 'LLMs'],
  },
  {
    id: 'uic-swe',
    role: 'Software Engineer',
    company: 'University of Illinois Chicago',
    type: 'Part-time',
    start: 'Apr 2024',
    end: 'May 2025',
    location: 'Chicago, IL',
    bullets: [
      'Built and maintained full-stack internal apps with React, Next.js, Node.js, Ruby on Rails, PostgreSQL, Redis, and AWS Lambda.',
      'Designed backend APIs, database workflows, and cloud functions that replaced manual processes with maintainable tools.',
      'Integrated OpenAI APIs into backend services to automate content processing and reporting.',
      'Refactored backend logic and documented reusable components across production-facing internal tools.',
    ],
    tags: ['React.js', 'Next.js', 'Node.js', 'Ruby on Rails', 'PostgreSQL', 'Redis', 'AWS Lambda', 'OpenAI API', 'REST APIs', 'JavaScript'],
  },
  {
    id: 'ltimindtree',
    role: 'Software Engineer I',
    company: 'LTIMindtree',
    type: 'Full-time',
    start: 'Jan 2023',
    end: 'Aug 2023',
    location: 'Remote',
    bullets: [
      'Developed Java full-stack features across 6 Agile sprints with Spring Boot, AngularJS, REST APIs, and SQL.',
      'Built and tested 4 REST APIs and database-driven workflows for business-critical functionality.',
      'Collaborated with developers, QA, and business teams on sprint planning, code reviews, and production issues.',
      'Strengthened backend reliability by improving API logic and validating SQL-driven data flows.',
    ],
    tags: ['Java', 'Spring Boot', 'AngularJS', 'REST APIs', 'SQL'],
  },
  {
    id: 'confetti',
    earlier: true,
    role: 'Machine Learning Intern',
    company: 'Confetti',
    type: 'Internship',
    start: 'May 2024',
    end: 'Aug 2024',
    location: 'Remote',
    bullets: [
      'Built ML models to automate job application processes, increasing efficiency by 30%.',
      'Implemented NLP matching between job seekers and postings, improving relevancy scores by 25%.',
    ],
    tags: ['Python', 'NLP'],
  },
  {
    id: 'teals',
    earlier: true,
    role: 'CS Teaching Assistant',
    company: 'Microsoft TEALS Program',
    type: 'Volunteer',
    start: 'Jun 2024',
    end: 'Jun 2025',
    location: 'Remote',
    bullets: ['Taught Java to high school students at Cedar Grove High School, WI.'],
    tags: ['Java'],
  },
  {
    id: 'intel',
    earlier: true,
    role: 'oneAPI Student Ambassador',
    company: 'Intel Corporation',
    type: 'Part-time',
    start: 'Mar 2024',
    end: 'May 2025',
    location: 'Chicago, IL',
    bullets: ['Ran hands-on oneAPI workshops and organized hackathons and coding competitions for student developers.'],
    tags: [],
  },
  {
    id: 'perpetuuiti',
    earlier: true,
    role: 'Developer Intern',
    company: 'Perpetuuiti Technosoft',
    type: 'Internship',
    start: 'Nov 2022',
    end: 'Dec 2022',
    location: 'Chennai, India',
    bullets: ['Built Python data integration solutions and improved RPA workflows, reducing manual processes by 15%.'],
    tags: ['Python'],
  },
  {
    id: 'ibm',
    earlier: true,
    role: 'Data Analyst Intern',
    company: 'IBM',
    type: 'Internship',
    start: 'Aug 2022',
    end: 'Nov 2022',
    location: 'Remote',
    bullets: ['Developed real-time data pipelines with Kafka and Apache Spark, reducing processing delays by 50%.'],
    tags: ['Kafka', 'Apache Spark', 'SQL'],
  },
  {
    id: 'salesforce',
    earlier: true,
    role: 'Salesforce Intern',
    company: 'Salesforce',
    type: 'Part-time',
    start: 'Apr 2022',
    end: 'Jul 2022',
    location: null,
    bullets: ['Developed custom Apex triggers to automate business logic, reducing manual tasks by 25%.'],
    tags: [],
  },
];

export const projectAreas = ['AI/ML', 'Healthcare', 'Backend & Cloud', 'Data'];

export const projects = [
  {
    id: 'serverless-pipeline',
    title: 'Serverless Data Validation Pipeline',
    featured: true,
    description:
      'A Terraform-provisioned GCP pipeline for real-time data validation and quality monitoring, built on Cloud Run, Pub/Sub, and BigQuery with REST and GraphQL APIs and Slack alerting.',
    areas: ['Backend & Cloud', 'Data'],
    tags: ['Terraform', 'Cloud Run', 'Pub/Sub', 'BigQuery', 'GraphQL', 'REST APIs'],
    year: 2024,
    repo: 'https://github.com/aashikmathew/serverless-pipeline',
  },
  {
    id: 'distributed-algorithms',
    title: 'Distributed Algorithms Simulator',
    featured: true,
    description:
      'Chandy–Lamport and Lai–Yang snapshots plus Chang–Roberts leader election, implemented with Java, Akka, Maven, and JUnit as testable, fault-tolerant simulations.',
    areas: ['Backend & Cloud'],
    tags: ['Java', 'Akka', 'JUnit', 'Distributed Systems'],
    year: 2024,
    repo: 'https://github.com/aashikmathew/Distributed-Algorithms',
  },
  {
    id: 'llm-red-teaming',
    title: 'LLM Red Teaming Platform',
    featured: true,
    description:
      'Evaluates large language models across jailbreak, bias, hallucination, privacy, and manipulation attacks, with four LLM providers, real-time WebSocket monitoring, and PDF reports.',
    areas: ['AI/ML', 'Backend & Cloud'],
    tags: ['Python', 'LLMs', 'WebSockets', 'AI Safety'],
    year: 2024,
    repo: 'https://github.com/aashikmathew/llm-red-teaming-platform',
  },
  {
    id: 'yolov8-fracture',
    title: 'Improved YOLOv8 for Pediatric Wrist Fractures',
    featured: true,
    description:
      'An enhanced YOLOv8 model for pediatric wrist fracture detection with higher accuracy and fewer false positives. The code behind the published fracture detection paper.',
    areas: ['AI/ML', 'Healthcare'],
    tags: ['Python', 'YOLOv8', 'Computer Vision', 'Deep Learning'],
    year: 2024,
    repo: 'https://github.com/aashikmathew/Improved-iYOLO-v8-Fracture-detection-for-pediatric-wrist',
  },
  {
    id: 'safety-standards',
    title: 'AI-Powered Safety Standards Analyzer',
    description:
      'Uses the OpenAI API to compare safety standards against research papers and incident reports, flagging gaps for emerging technologies.',
    areas: ['AI/ML'],
    tags: ['Python', 'OpenAI API', 'LLMs', 'NLP'],
    year: 2025,
    repo: 'https://github.com/aashikmathew/AI-Powered-Safety-Standards-Analyzer',
  },
  {
    id: 'himym-api',
    title: "HIMYM MacLaren's API",
    description:
      "A tribute API and web app for How I Met Your Mother: facts, quotes, and Barney's legendary pickup lines. FastAPI with an animated glassmorphism UI.",
    areas: ['Backend & Cloud'],
    tags: ['Python', 'FastAPI', 'JavaScript'],
    year: 2024,
    repo: 'https://github.com/aashikmathew/himym-maclarens-api',
    live: 'https://aashikmathew.github.io/himym-maclarens-api/',
  },
  {
    id: 'iot-heartbeat',
    title: 'IoT Heartbeat Monitor',
    description:
      'A FastAPI service that monitors IoT device heartbeats and detects anomalies, with Prometheus metrics, Grafana dashboards, and Docker.',
    areas: ['Backend & Cloud'],
    tags: ['Python', 'FastAPI', 'Docker', 'Prometheus'],
    year: 2024,
    repo: 'https://github.com/aashikmathew/iot-heart-beat-monitor-dashbaord',
  },
  {
    id: 'nlp-synergy',
    title: 'NLP Synergy',
    description:
      'POS tagging, named entity recognition, and text classification using Hidden Markov Models, the Stanford NER tagger, TF-IDF, and Word2Vec.',
    areas: ['AI/ML'],
    tags: ['Python', 'NLP', 'Word2Vec'],
    year: 2025,
    repo: 'https://github.com/aashikmathew/NLP_Synergy',
  },
  {
    id: 'spine-fracture',
    title: 'Spine Fracture Detection',
    description: 'An AI-powered tool that detects and analyzes spine fractures using image processing and deep learning.',
    areas: ['AI/ML', 'Healthcare'],
    tags: ['Python', 'Computer Vision', 'Deep Learning'],
    year: 2024,
    repo: 'https://github.com/aashikmathew/SpineFractureDetection',
  },
  {
    id: 'astrocyte',
    title: 'Astrocyte Perturbation Analysis',
    description:
      'Log fold changes, calcium clusters, UMAP projections, and heatmaps to understand how astrocytes respond to perturbations.',
    areas: ['Healthcare', 'Data'],
    tags: ['Python', 'Pandas', 'UMAP'],
    year: 2024,
    repo: 'https://github.com/aashikmathew/astrocyte-perturbation-analysis',
  },
  {
    id: 'bertweet',
    title: 'Tweet Sentiment Analysis with BERTweet',
    description: 'Classifies sentiment in social media content using the BERTweet transformer model.',
    areas: ['AI/ML'],
    tags: ['Python', 'NLP', 'Hugging Face'],
    year: 2024,
    repo: 'https://github.com/aashikmathew/Tweet-Sentiment-Analysis-using-Bertweet',
  },
  {
    id: 'chromatin',
    title: '3D Single-Cell Chromatin Web Tools',
    description:
      'Web tools for visualizing high-resolution ensemble models of 3D single-cell chromatin conformations for genomic research.',
    areas: ['Healthcare', 'Data'],
    tags: ['Python', 'Genomics'],
    year: 2024,
    fork: true,
    repo: 'https://github.com/aashikmathewcodes/CS522_Project',
  },
  {
    id: 'precision-farming',
    title: 'Precision Farming with Machine Learning',
    description:
      'Crop prediction models and a Flask web app for precision agriculture. The code behind the IEEE precision farming paper.',
    areas: ['AI/ML', 'Data'],
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
    year: 2024,
    repo: 'https://github.com/aashikmathew/Precision-farming-using-Data-Analytics-and-Machine-learning',
  },
  {
    id: 'rainfall',
    title: 'Rainfall Data Analysis for Agriculture',
    description: 'Exploratory analysis of rainfall patterns in India with a focus on agricultural applications.',
    areas: ['Data'],
    tags: ['Python', 'Pandas'],
    year: 2024,
    repo: 'https://github.com/aashikmathew/Exploratory-Analysis-of-Rainfall-Data-in-India-for-Agriculture',
  },
  {
    id: 'ruby-playground',
    title: 'Ruby Playground',
    description: 'A hub for personal Ruby experiments and small projects.',
    areas: [],
    tags: ['Ruby'],
    year: 2024,
    repo: 'https://github.com/aashikmathew/RubyPlayground',
  },
];

export const publications = [
  {
    id: 'pediatric-fracture',
    title:
      'Enhancing Pediatric Distal Radius Fracture Detection: Optimizing YOLOv8 with Advanced AI and Machine Learning Techniques',
    venue: 'BMC',
    status: 'Published',
    date: 'Oct 2024',
    authors: 'Dr. Farid Amirouche, Aashik Mathew Prosper, Dr. Majd Mzeihem',
    link: 'https://doi.org/10.21203/rs.3.rs-5306607/v1',
    code: 'https://github.com/aashikmathew/Improved-iYOLO-v8-Fracture-detection-for-pediatric-wrist',
    highlights: [
      'Developed an AI-driven approach for pediatric distal radius fracture detection using YOLOv8 and machine learning optimizations.',
      'Applied feature engineering and hyperparameter tuning to improve accuracy and reduce false positives.',
      'Integrated clinical validation feedback to improve real-world applicability in medical diagnostics.',
    ],
  },
  {
    id: 'precision-farming',
    title: 'Precision Farming Using Machine Learning and Data Analytics',
    venue: 'IEEE',
    status: 'Published',
    date: 'Mar 2024',
    link: 'https://ieeexplore.ieee.org/document/10465318',
    code: 'https://github.com/aashikmathew/Precision-farming-using-Data-Analytics-and-Machine-learning',
    highlights: [
      'Collected and analyzed 5,000+ samples, trained a crop prediction model, and built a Flask web application.',
      'Reached 99.31% accuracy by comparing six supervised learning algorithms, with XGBoost performing best.',
      'Used Matplotlib, Seaborn, Pandas, NumPy, and scikit-learn to build and refine the crop yield model.',
    ],
  },
  {
    id: 'license-plate',
    title: 'Realtime License Plate Detection Using YOLOv5 and ResNet50 CNN',
    venue: 'IEEE',
    status: 'Published',
    date: 'Mar 2023',
    link: 'https://ieeexplore.ieee.org/document/10105076',
    highlights: [
      'Built a CCTV-based system that detects motorcyclists without helmets and identifies their license plates.',
      'Combined Cascade R-CNN and Mask R-CNN with a ResNet50-based approach for better accuracy and speed.',
      'Achieved 98.89% mAP, an F1-score of 94.6, and 130 frames per second.',
      'Led the team end to end, from background subtraction to license plate recognition for traffic enforcement.',
    ],
  },
];

// `core` marks the everyday tools; `aliases` widen evidence matching.
export const skillGroups = [
  {
    id: 'markets',
    label: 'Capital Markets',
    skills: [
      { name: 'EMIR GTR', core: true },
      { name: 'Trade Lifecycle' },
      { name: 'Clearing' },
      { name: 'EOD Processing' },
      { name: 'Futures & Options' },
      { name: 'SPAN Margining', aliases: ['SPAN'] },
      { name: 'Risk & Margin' },
      { name: 'Regulatory Reporting' },
      { name: 'TAS Block Trades' },
      { name: 'Trade Offsets' },
    ],
  },
  {
    id: 'trading',
    label: 'Trading Systems',
    skills: [
      { name: 'CQ Back Office', core: true },
      { name: 'Cumulus9' },
      { name: 'ICE API' },
      { name: 'CME API' },
      { name: 'IBM MQ' },
      { name: 'Exchange Integrations', aliases: ['ICE API', 'CME API'] },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'C#', core: true },
      { name: 'Python', core: true },
      { name: 'SQL', core: true },
      { name: 'Java' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Bash' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Full Stack',
    skills: [
      { name: '.NET', core: true },
      { name: 'ASP.NET' },
      { name: 'REST APIs' },
      { name: 'GraphQL' },
      { name: 'Microservices' },
      { name: 'Node.js' },
      { name: 'Spring Boot' },
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'Ruby on Rails' },
      { name: 'FastAPI' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Data',
    skills: [
      { name: 'Azure', core: true, aliases: ['Azure Blob Storage', 'Azure Key Vault'] },
      { name: 'Microsoft Fabric', core: true, aliases: ['OneLake'] },
      { name: 'Apache Airflow', core: true },
      { name: 'ETL', aliases: ['Apache Airflow', 'Microsoft Fabric'] },
      { name: 'SFTP' },
      { name: 'Google Cloud', aliases: ['BigQuery', 'Pub/Sub', 'Cloud Run'] },
      { name: 'Terraform' },
      { name: 'AWS Lambda' },
    ],
  },
  {
    id: 'data',
    label: 'Databases & DevOps',
    skills: [
      { name: 'SQL Server' },
      { name: 'PostgreSQL' },
      { name: 'Redis' },
      { name: 'Kafka' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Git' },
      { name: 'CI/CD' },
    ],
  },
  {
    id: 'ml',
    label: 'AI & Machine Learning',
    skills: [
      { name: 'PyTorch' },
      { name: 'Computer Vision', aliases: ['YOLOv8', 'OpenCV'] },
      { name: 'Deep Learning' },
      { name: 'LLMs', aliases: ['OpenAI API'] },
      { name: 'NLP', aliases: ['Word2Vec'] },
      { name: 'OpenCV' },
      { name: 'Dask' },
      { name: 'Apache Spark' },
      { name: 'Scikit-learn' },
      { name: 'Hugging Face' },
    ],
  },
];

function matchesSkill(skill, tags) {
  const needles = [skill.name, ...(skill.aliases || [])].map((s) => s.toLowerCase());
  return tags.some((tag) => needles.includes(tag.toLowerCase()));
}

export function evidenceFor(skill) {
  return {
    projects: projects.filter((p) => matchesSkill(skill, p.tags)),
    roles: experiences.filter((e) => matchesSkill(skill, e.tags)),
  };
}
