# Kabankalan Catholic College, Inc. — Landing Page

A modern, responsive landing page for **Kabankalan Catholic College, Inc.**, built as a
front-end project for a BSIT course.

- **Project Owner:** Mariebelle G. Bajan
- **Course:** Bachelor of Science in Information Technology (2nd Year)
- **Institution:** Kabankalan Catholic College, Inc.

## Features

- Sticky, responsive Bootstrap 5 navigation with smooth anchor scrolling
- Asymmetrical hero section with floating info card and gold accents
- Academic highlights strip (Basic Ed, Senior High, College, Student Development)
- Split-layout About section with Mission / Vision / Core Values cards
- Academic programs section (feature + mini cards)
- Full-width admissions banner with a 4-step enrollment overview
- Editorial-style campus life gallery
- Magazine-style News & Updates section (Bootstrap modal)
- "Why Choose KCC" feature grid
- Contact section with info, demo form, and Google Maps embed
- Dark navy multi-column footer with back-to-top button
- Scroll-reveal animations and hover transitions
- Fully responsive across mobile, tablet, and desktop

## Technologies Used

- HTML5
- CSS3 (custom design system with CSS variables)
- Bootstrap 5.3 (CDN)
- Bootstrap Icons (CDN)
- Vanilla JavaScript
- Git & GitHub
- GitHub Pages (static hosting)

## Folder Structure

```
bajan-project-2/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── images/
    │   ├── logo.svg
    │   ├── campus-main.svg
    │   ├── students.svg
    │   ├── classroom.svg
    │   ├── academic-programs.svg
    │   ├── campus-activities.svg
    │   ├── school-events.svg
    │   ├── gallery-1.svg … gallery-6.svg
    │   └── news-1.svg … news-3.svg
    └── icons/
```

## Placeholder Content Notice

All images are **SVG placeholders** — replace them with official KCC photos.
Mission, Vision, Core Values, contact details, program offerings, and news are
marked with `<!-- SAMPLE ... -->` / `<!-- PLACEHOLDER ... -->` comments and must be
verified against official school materials before publishing.

## Local Setup

No build step is required. Serve the folder with any static server:

```bash
# Option 1: Python
python -m http.server 8000

# Option 2: PHP (XAMPP)
# Place the folder inside htdocs and open http://localhost/Bajan-project-2/
```

Then open `http://localhost:8000` (or your local URL) in a browser.

## GitHub Pages Deployment

1. Create a new repository named `bajan-project-2` on GitHub.
2. In this folder, initialize and push:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/bajan-project-2.git
   git push -u origin main
   ```

3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
5. Select branch `main`, folder `/ (root)`, and click **Save**.
6. Wait a minute, then visit `https://<your-username>.github.io/bajan-project-2/`.

All asset paths are relative, so the site works at the repository subpath.

## Author

**Mariebelle G. Bajan** — BSIT 2nd Year
