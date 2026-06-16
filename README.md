# Aline Ferreira — Portfolio

Personal portfolio website built with vanilla HTML, CSS and JavaScript.
Features dark mode, EN/PT language toggle and SEO-optimized markup.

## Project Structure

```
.
├── index.html              # Main entry point
├── robots.txt              # Search engine crawler instructions
├── sitemap.xml             # SEO sitemap
├── README.md
├── .gitignore
└── assets/
    ├── css/
    │   └── style.css       # All styles + theme variables
    ├── js/
    │   └── script.js       # Theme + language toggle logic
    └── images/
        ├── logo.png
        ├── profile.png
        ├── brand-logo.png
        └── projects/
            └── pong.png
```

## Features

- Responsive layout (mobile-first)
- Dark mode toggle with `localStorage` persistence
- Bilingual support (EN / PT-BR) with `data-i18n` keys
- SEO-ready: meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- Accessible markup (semantic HTML, ARIA labels)

## Running locally

Just open `index.html` in a browser, or serve with any static server:

```bash
npx serve .
# or
python3 -m http.server 8000
```
