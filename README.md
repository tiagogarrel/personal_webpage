# Tiago Garrel — Personal Portfolio

Minimalist, bilingual (EN/ES) portfolio website with dark/light mode toggle.

## Structure

```
/
├── index.html          # Main HTML
├── styles.css          # All styles (CSS variables, components, responsive)
├── app.js              # Translations, rendering, interactivity
├── assets/
│   ├── img/
│   │   └── profile.jpg     ← Add your profile photo here
│   └── cv/
│       └── tiago-garrel-cv.pdf  ← Add your CV PDF here
└── README.md
```

## Adding your photo

Drop your profile image as `assets/img/profile.jpg`.
If no image is found, the site shows your initials (TG) as a fallback.

## Adding your CV

Drop your CV PDF as `assets/cv/tiago-garrel-cv.pdf`.
The "Download CV" button in the hero will link to it automatically.

## Publishing to GitHub Pages

1. Create a new repo on GitHub (e.g. `tiagogarrel.github.io` for a root URL, or any name)
2. Push all files to the `main` branch
3. Go to **Settings → Pages → Source → Deploy from branch → main / root**
4. Your site will be live at `https://tiagogarrel.github.io/` (or the repo URL)

## Custom domain (optional)

1. Buy a domain (e.g. `tiagogarrel.dev`) on Namecheap or similar
2. In GitHub Pages settings, set it as custom domain
3. Add a `CNAME` DNS record pointing to `tiagogarrel.github.io`
