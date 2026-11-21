# IAESTE LC JECRC Website Redesign

A modern, responsive redesign of the **IAESTE LC JECRC** website, built with React and Vite.

> **Theme:** Beyond Borders – Explore. Experience. Evolve.

IAESTE LC JECRC is the local chapter of IAESTE India at JECRC University, Jaipur. It offers students paid, course-related STEM internships abroad and hosts international interns. This project redesigns the website's **Home**, **Departments** and **Gallery** pages while keeping the original IAESTE branding, logo and colour palette.

---

## Features

- **Sticky navigation bar** with the official logo, Login and Join IAESTE buttons, and a hamburger menu on mobile
- **Hero section** with a group photograph and floating information cards
- **About, Why Choose IAESTE and Global Journey** sections, including a five-step timeline
- **Animated statistics** that count up when they scroll into view
- **Departments page** with an interactive card grid, expandable details, and a "How Our Teams Work Together" section
- **Student experiences** with Incoming/Outgoing labels and a Read More toggle
- **Gallery page** with category filters and a full-screen lightbox (Esc and arrow keys supported)
- **Smooth scrolling, scroll-reveal animations and hover effects**, with reduced-motion support
- **Fully responsive** on desktop, laptop, tablet and mobile
- **All content in one file** (`src/data/content.js`) so it is easy to update

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React | Component-based UI |
| Vite | Development server and build tool |
| React Router DOM | Page navigation |
| Framer Motion | Animations and interactions |
| Lucide React | Icons |
| CSS3 | Custom styling (variables, Grid, Flexbox, media queries) |
| Google Fonts (Poppins) | Typography |

---

## Colour Palette

| Colour | Code |
|---|---|
| Primary Navy Blue | `#003B5C` |
| IAESTE Blue | `#005B96` |
| Light Blue | `#EAF4FB` |
| Accent Orange | `#FF7A32` |
| White | `#FFFFFF` |
| Dark Text | `#202B3C` |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- npm (installed with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/avnimujawdiya/iaeste-lc-jecrc-website.git

# 2. Go into the project folder
cd iaeste-lc-jecrc-website

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open the `Local:` link shown in the terminal (usually `http://localhost:5173/`).

### Available Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Checks the code for problems |

---

## Project Structure

```
iaeste-redesign/
├── public/
│   ├── logo.jpg                 # IAESTE LC JECRC logo
│   ├── images/                  # Hero and About photographs
│   └── gallery/                 # Event photographs for the Gallery page
├── src/
│   ├── components/              # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Statistics.jsx
│   │   ├── DepartmentCard.jsx
│   │   ├── Testimonial.jsx
│   │   ├── Logo.jsx
│   │   ├── Reveal.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── SocialIcons.jsx
│   │   └── iconMap.js
│   ├── data/
│   │   └── content.js           # All text, departments, stats and gallery data
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Departments.jsx
│   │   └── Gallery.jsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── Home.css
│   │   ├── Departments.css
│   │   └── Gallery.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

---

## Updating the Content

Almost everything shown on the website is stored in **`src/data/content.js`**:

- `departments`: department names, descriptions and responsibilities
- `stats`: the numbers in the Our Impact section
- `testimonials`: student experience cards
- `galleryPhotos`: gallery images, captions and categories
- `contact` and `socials`: footer details
- `navLinks`, `LOGIN_URL`, `JOIN_URL`: navigation and button links

An item marked `placeholder: true` shows a small "Placeholder" badge on the page. Replace its text with the real information and remove that line.

---

## Content Sources and Notes

- Department descriptions, statistics (109 incoming interns, 78 outgoing interns), testimonials, contact details and gallery photographs come from the official **"Beyond Borders" IAESTE LC JECRC brochure**.
- *Total Exchanges* is the sum of incoming and outgoing interns.
- The ITDA department card uses placeholder text until its official description is added.
- The Opportunities, Login and Join IAESTE buttons currently link to the official website and should be updated with their exact page links.
- Please check the gallery captions before publishing.

---

## Screenshots

<img width="1213" height="841" alt="Screenshot 2026-11-22 002610" src="https://github.com/user-attachments/assets/06ae4617-deff-41e4-a5b0-77c9aa82ba9c" />


---

## Credits

- Design and development: [@avnimujawdiya](https://github.com/avnimujawdiya)
- Logo, photographs and organisational content: **IAESTE LC JECRC**, JECRC University, Jaipur

All logos, photographs and organisational content belong to IAESTE LC JECRC and JECRC University.
