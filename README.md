# Marvin Pescos — Personal CV Website

A personal CV and portfolio website for **Marvin Pescos**, a back-end developer and fourth-year BS Information Technology student at Davao del Norte State College. It presents my profile, projects, technical skills, education and contact details in a dark, minimal, responsive layout.

**Live site:** https://your-project.vercel.app <!-- TODO: replace with the Vercel link after deploying -->

## Features

- **Profile sidebar** with portrait (pixel-art filter that reveals the photo on hover), social links, email and résumé download
- **Sticky navigation** that highlights the section currently in view and smooth-scrolls on click
- **Projects** shown in browser-style frames, with a screenshot carousel, tech tags, GitHub and live demo links
- **Animations:** staggered entrance on load, scroll-triggered reveals, hover and button transitions
- **Responsive** layout for desktop, laptop, tablet and mobile; scales up on large screens
- Respects the user's **reduced-motion** setting

## Sections

1. About — introduction, career focus and highlights
2. Projects — Multi-Tenant CMS API, LexChain
3. Skills & Tech Stack
4. Education
5. Contact

## Technologies Used

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript (ES modules), HTML and CSS (no UI framework)
- Google Fonts: Geist, Geist Mono and Newsreader
- ESLint
- Deployed on [Vercel](https://vercel.com/)

## Project Structure

```
├── index.html              # HTML entry, fonts and favicon
├── public/                 # Static files (favicon, résumé PDF)
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx / App.css   # Page layout
    ├── index.css           # Design tokens, global styles, animations
    ├── assets/             # Portrait and project screenshots
    ├── components/
    │   ├── layout/         # Sidebar, Nav, Footer
    │   ├── sections/       # About, Projects, Tech Stack, Education, Contact
    │   └── ui/             # Shared pieces: SectionTitle, RichText, ProjectPreview
    ├── data/content.js     # All CV text, links and project data
    └── hooks/              # Active-section tracking and scroll reveal
```

All CV content lives in `src/data/content.js`, so text and links can be updated without touching the components.

## Running Locally

Requires [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build in dist/
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Author

**Marvin Pescos**
BS Information Technology, Davao del Norte State College

- Email: marvinpescos@gmail.com
- GitHub: [MarvinPescos](https://github.com/MarvinPescos)
- LinkedIn: [Marvin Pescos](https://ph.linkedin.com/in/marvin-pescos-2943ba375)
