# Prashant Sali — Portfolio v2

Production-grade personal portfolio built with React + Vite + Tailwind CSS + Framer Motion.

---

## ▶️ Quick Start

```bash
npm install
npm run dev
# → http://localhost:5173
```

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── effects/       # CursorGlow, Spotlight, NoiseBackground, GridOverlay
│   ├── layout/        # Navbar, Footer, Container
│   ├── sections/      # Hero, About, Skills, Experience, Projects, Contact, CTA
│   └── ui/            # Button, GlowCard, ProjectCard, SkillBadge, MagneticButton, AnimatedText, SectionTitle
├── data/              # projects.js, skills.js, experience.js, socials.js  ← EDIT THESE
├── hooks/             # useMousePosition, useScrollReveal, useMagneticEffect
├── layouts/           # MainLayout.jsx
├── styles/            # globals.css, animations.css, variables.css
└── utils/             # cn.js, motion.js, constants.js  ← EDIT constants.js
```

---

## ✏️ How to Update Content

### 1. Add / Update a Project

Open `src/data/projects.js` and add an object:

```js
{
  id: 5,
  name: 'My New Project',
  tagline: 'One-line tagline',
  description: 'Full description shown on the card.',
  type: 'personal',          // 'personal' | 'work'
  status: 'live',            // 'live' | 'in-progress' | 'private'
  tags: ['React', 'Node.js'],
  highlights: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  liveUrl: 'https://...',    // null if no live link
  githubUrl: 'https://...',  // null if private
  featured: true,
}
```

It appears automatically on the Projects section.

### 2. Add a New Skill

Open `src/data/skills.js`, find the right category, and add the name:

```js
{ category: 'Frontend', items: ['React.js', 'YOUR NEW SKILL', ...] }
```

### 3. Add a New Job

Open `src/data/experience.js` and add a new object at the top of the array (newest first):

```js
{
  id: 3,
  role: 'Senior Developer',
  company: 'New Company',
  location: 'City, Country',
  period: 'Jan 2026 – Present',
  current: true,
  type: 'Full-time',
  bullets: ['Achievement 1', 'Achievement 2'],
  skills: ['React', 'Node.js'],
}
```

Set `current: false` on the previous job.

### 4. Change Your Tech Stack Label / Typewriter Roles

Open `src/utils/constants.js` and edit `HERO_ROLES`.

### 5. Change Colors

Open `src/styles/variables.css` and edit the CSS variables:

```css
--color-accent: #7c5cfc; /* main purple */
--color-violet: #a78bfa; /* soft purple */
--color-cyan: #22d3ee; /* cyan accent */
```

### 6. Add a New Section

1. Create `src/components/sections/MySectionName.jsx`
2. Import it in `src/App.jsx`
3. Add `<MySectionName />` where you want it

### 7. Reorder Sections

Edit the component order in `src/App.jsx` — that's it.

---

## 📄 Resume

Place your PDF at `public/resume.pdf`. The navbar "Resume ↗" button links to it automatically.

---

## 🚀 Deploy to Vercel (Free)

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "init"
git remote add origin https://github.com/PrashantSali18/portfolio.git
git push -u origin main

# 2. Go to vercel.com → New Project → Import repo → Deploy
# Your site is live at: prashant-portfolio.vercel.app
```

### Connect a Custom Domain

1. Buy `prashantsali.dev` from Namecheap (~₹1200/yr) or `prashantsali.in` (~₹700/yr)
2. In Vercel → Project → Settings → Domains → Add domain
3. Follow the DNS instructions — live in ~10 min

---

## 🔌 Optional: Real Email Form with EmailJS

1. Sign up free at https://emailjs.com
2. Create a service + template
3. Add to `.env.local`:

```
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=xxx
```

4. In `Contact.jsx`, replace the `mailto:` logic with:

```js
import emailjs from "@emailjs/browser";
emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  { from_name: form.name, from_email: form.email, message: form.message },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
);
```

Then `npm install @emailjs/browser`.

---

## 🛠️ Tech Stack

- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion 11
- react-icons 5
- clsx (className utility)
  "# portfolio-frontend"
