import cmsApiDocs from '../assets/projects/cms-api-docs.png';
import coldBrewCoffee from '../assets/projects/cold-brew-coffee.png';
import gospelBibleBaptist from '../assets/projects/gospel-bible-baptist.png';
import lexchainApiDocs from '../assets/projects/lexchain-api-docs.png';

export const profile = {
  name: 'Marvin Pescos',
  role: 'Back-end Developer · Aspiring AI Engineer',
  location: 'Panabo City, Davao del Norte, PH',
  email: 'marvinpescos@gmail.com',
  resume: '/Marvin_Pescos_Resume.pdf',
  github: 'https://github.com/MarvinPescos',
};

export const socials = [
  { label: 'LinkedIn', href: 'https://ph.linkedin.com/in/marvin-pescos-2943ba375' },
  { label: 'GitHub', href: 'https://github.com/MarvinPescos' },
  { label: 'Instagram', href: 'https://www.instagram.com/marqqq.s' },
  { label: 'Facebook', href: 'https://www.facebook.com/marvin.pescos.1' },
];

export const sections = ['about', 'projects', 'stack', 'education', 'contact'];

export const about = {
  eyebrow: 'Back-end Developer / Aspiring AI Engineer',
  headline: [
    { text: 'I build ' },
    { text: 'reliable', italic: true },
    { text: ' back-ends and ' },
    { text: 'AI-powered', italic: true, accent: true },
    { text: ' systems.' },
  ],
  intro:
    'Back-end developer and fourth-year Bachelor of Science in Information Technology student at Davao del Norte State College, specializing in Python, FastAPI and PostgreSQL. Experienced in designing and deploying RESTful APIs, including a multi-tenant content management system in production for two client websites. Additional experience in retrieval-augmented generation (RAG) and blockchain-based record integrity.',
  stats: [
    { value: '2', label: 'Live client sites' },
    { value: 'AWS', label: 'EC2 + S3 in production' },
    { value: '4th', label: 'Year BSIT · DNSC' },
  ],
};

export const projects = [
  {
    title: 'Multi-Tenant CMS API',
    role: 'Back-End Developer · 2026',
    subtitle: 'Content API for local business websites',
    slides: [
      {
        src: cmsApiDocs,
        alt: 'Multi-Tenant CMS API endpoints in Swagger UI',
        url: '/docs · Multi-Tenant CMS API',
        title: 'API endpoints',
        note: 'FastAPI · Swagger UI · tenants, members, content types & entries',
        dim: true,
      },
      {
        src: coldBrewCoffee,
        alt: 'Cold Brew Coffee Co. website',
        url: 'cold-brew-coffee.vercel.app',
        title: 'Cold Brew Coffee Co. — live client site',
        note: 'Content served by my API · front-end by a partner developer',
      },
      {
        src: gospelBibleBaptist,
        alt: 'Gospel Bible Baptist Church website',
        url: 'gospel-bible-baptist-church.vercel.app',
        title: 'Gospel Bible Baptist Church — live client site',
        note: 'Content served by my API · front-end by a partner developer',
      },
    ],
    points: [
      'Designed and developed the back-end API serving content for multiple independent business tenants, including retail shops, churches and cafés.',
      'Deployed to production, powering two live client websites: Cold Brew Coffee Co. and Gospel Bible Baptist Church.',
      'Implemented request rate limiting with Redis and managed database schema changes through Alembic migrations.',
      'Deployed and hosted the API on AWS EC2; stored tenant media in a private Amazon S3 bucket using presigned URLs for direct client uploads, per-tenant key prefixes, file type and size validation, and least-privilege IAM access.',
      'Collaborated with a front-end developer responsible for the client-facing interfaces.',
    ],
    tags: ['FastAPI', 'PostgreSQL (Supabase)', 'Redis', 'Alembic', 'AWS (EC2, S3)'],
    links: [
      { label: 'GitHub', href: 'https://github.com/MarvinPescos/minimal-cms-core' },
      { label: 'Live: Cold Brew Coffee Co.', href: 'https://cold-brew-coffee.vercel.app/archive' },
      { label: 'Live: Gospel Bible Baptist Church', href: 'https://gospel-bible-baptist-church.vercel.app/' },
    ],
  },
  {
    title: 'LexChain',
    role: 'Back-End Developer, Capstone Project · 2026',
    subtitle: 'Back-end API for a digital notarial register',
    slides: [
      {
        src: lexchainApiDocs,
        alt: 'LexChain API endpoints in Swagger UI',
        url: '/docs · LexChain API',
        dim: true,
      },
    ],
    points: [
      'Developing the back-end of a system that enables notaries public to manage notarial books, pages and entries.',
      'Implemented retrieval-augmented generation (RAG) search over legal documents using pgvector embeddings.',
      'Recorded document hashes on-chain through Solidity smart contracts to provide tamper-evident records.',
      'Containerized application services with Docker.',
    ],
    tags: ['FastAPI', 'PostgreSQL (Supabase)', 'pgvector', 'Solidity', 'Docker'],
    links: [{ label: 'GitHub', href: 'https://github.com/MarvinPescos/lexchain_backend' }],
  },
];

export const stack = [
  { group: 'Languages', items: ['Python', 'Solidity'] },
  { group: 'Frameworks & Libraries', items: ['FastAPI', 'sentence-transformers'] },
  { group: 'Databases', items: ['PostgreSQL', 'pgvector', 'Redis', 'Supabase'] },
  {
    group: 'AI & LLM Applications',
    items: ['RAG pipelines', 'Text embeddings', 'LLM integration via Microsoft Foundry (Azure)', 'Langfuse'],
  },
  { group: 'Blockchain', items: ['Solidity', 'Foundry', 'Web3.py'] },
  { group: 'Tools & DevOps', items: ['AWS (EC2, S3)', 'Docker', 'Git', 'GitHub', 'Alembic', 'Bruno'] },
];

export const education = [
  {
    period: '2023–2027',
    title: 'Bachelor of Science in Information Technology',
    detail: 'Davao del Norte State College · Panabo City, Davao del Norte · Expected 2027',
    capstone: 'LexChain – Digital Notarial Register',
  },
  {
    period: '2022',
    title: 'Hello World!',
    detail: 'Started teaching myself to code',
  },
];

export const contact = {
  headline: [
    { text: 'Open to internships and junior ' },
    { text: 'back-end', italic: true },
    { text: ' or ' },
    { text: 'AI engineering', italic: true },
    { text: ' roles.' },
  ],
};
