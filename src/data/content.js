import cmsApiDocs from '../assets/projects/cms-api-docs.png';
import coldBrewCoffee from '../assets/projects/cold-brew-coffee.png';
import gospelBibleBaptist from '../assets/projects/gospel-bible-baptist.png';
import lexchainApiDocs from '../assets/projects/lexchain-api-docs.png';
import brunoIcon from '../assets/icons/bruno.svg';
import dockerIcon from '../assets/icons/docker.svg';
import fastapiIcon from '../assets/icons/fastapi.svg';
import gitIcon from '../assets/icons/git.svg';
import githubIcon from '../assets/icons/github.svg';
import huggingfaceIcon from '../assets/icons/huggingface.svg';
import postgresqlIcon from '../assets/icons/postgresql.svg';
import pythonIcon from '../assets/icons/python.svg';
import redisIcon from '../assets/icons/redis.svg';
import solidityIcon from '../assets/icons/solidity.svg';
import supabaseIcon from '../assets/icons/supabase.svg';
import web3Icon from '../assets/icons/web3dotjs.svg';

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

// `icon` and `color` (brand color shown on hover) are optional; skills without an icon get a dot.
export const stack = [
  {
    group: 'Languages',
    items: [
      { name: 'Python', icon: pythonIcon, color: '#3776AB' },
      { name: 'Solidity', icon: solidityIcon, color: '#e9e7e2' },
    ],
  },
  {
    group: 'Frameworks & Libraries',
    items: [{ name: 'FastAPI', icon: fastapiIcon, color: '#009688' }, { name: 'sentence-transformers' }],
  },
  {
    group: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: postgresqlIcon, color: '#4169E1' },
      { name: 'pgvector' },
      { name: 'Redis', icon: redisIcon, color: '#FF4438' },
      { name: 'Supabase', icon: supabaseIcon, color: '#3FCF8E' },
    ],
  },
  {
    group: 'AI & LLM Applications',
    items: [
      { name: 'RAG pipelines' },
      { name: 'Text embeddings' },
      { name: 'LLM integration via Microsoft Foundry (Azure)' },
      { name: 'Hugging Face', icon: huggingfaceIcon, color: '#FFD21E' },
      { name: 'Langfuse' },
    ],
  },
  {
    group: 'Blockchain',
    items: [
      { name: 'Solidity', icon: solidityIcon, color: '#e9e7e2' },
      { name: 'Foundry' },
      { name: 'Web3.py', icon: web3Icon, color: '#F16822' },
    ],
  },
  {
    group: 'Tools & DevOps',
    items: [
      { name: 'AWS (EC2, S3)' },
      { name: 'Docker', icon: dockerIcon, color: '#2496ED' },
      { name: 'Git', icon: gitIcon, color: '#F05032' },
      { name: 'GitHub', icon: githubIcon, color: '#e9e7e2' },
      { name: 'Alembic' },
      { name: 'Bruno', icon: brunoIcon, color: '#F4AA41' },
    ],
  },
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

// Boot log shown by the loader; `at` is the progress % when the line appears.
export const loaderLogs = [
  { at: 0, level: 'INFO', text: 'Booting FastAPI application' },
  { at: 18, level: 'INFO', text: 'Connecting to PostgreSQL (Supabase)' },
  { at: 36, level: 'INFO', text: 'Redis rate limiter ready' },
  { at: 54, level: 'INFO', text: 'Loading projects: cms-core, lexchain' },
  { at: 72, level: 'GET', text: '/portfolio  200 OK' },
  { at: 92, level: 'INFO', text: 'Application startup complete' },
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
