
# Anthony Grippi – Developer Portfolio

Welcome to the personal developer portfolio of **Anthony Grippi**—a Computer Science scholar with a passion for software architecture and cybersecurity. This portfolio highlights key projects, technical experience, and skills in a clean, interactive, and modern interface powered by React, TypeScript, TailwindCSS, and Flowbite.

## Overview

This website showcases:

* A **dynamic hero section** with personal branding
* An **About Me** segment introducing academic and career background
* **Experience & Education timelines** with Flowbite's Timeline component
* A **Projects section** with GitHub-linked items
* An interactive **Skills display**, categorized for clarity
* A **Why page** using animated backgrounds and carousel interactivity

It's fully responsive and visually tuned for dark mode presentation.

## Tech Stack

| Area                  | Tools & Frameworks                   |
| --------------------- | ------------------------------------ |
| Frontend              | React, TypeScript                    |
| Styling               | TailwindCSS v4, Flowbite-React       |
| Animations/UX         | Custom gradient background, Carousel |
| Routing               | React Router DOM                     |


## Folder Structure

```
src/
├── components/             # Reusable UI elements (timelines, cards, modals)
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   └── ...
├── pages/                  # Top-level routed pages
│   ├── Who.tsx             # Main portfolio page
│   └── Why.tsx             # Intro and carousel
|   └── ...
├── assets/                 # Static images like profile photo
├── App.tsx                 # Root app entry with routes
└── main.tsx                # Vite main bootstrap file
```

---

## Local Development

### Prerequisites

* Node.js ≥ 18.x
* npm ≥ 9.x

### Steps

```bash
# Clone the repo
git clone https://github.com/FanaticAJ/portfolio-repo.git
cd portfolio/portfolio

# Install dependencies
npm install

# Run in development mode
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build Locally

```bash
npm run preview
```

---
