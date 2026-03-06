# Tung Lin — Portfolio

Personal portfolio website for **Tung Lin**, Design Strategist & User Experience Researcher.

**Live site:** https://tl-sy-nl.github.io

---

## Structure

```
portfolio-site/
├── index.html              ← Main landing page
├── css/
│   └── style.css           ← All styles
├── case-studies/
│   ├── luxury-vip-app.html
│   ├── design-strategy.html
│   ├── academic-platform.html
│   ├── digital-learning.html
│   ├── arts-education.html
│   └── mobility-platform.html
└── README.md
```

## To add images

Place image files in an `images/` folder and replace the `[ ... add image here ]` placeholder divs in each case study with:

```html
<img src="../images/your-image.jpg" alt="Description" style="width:100%; border-radius:8px; margin: 2rem 0;">
```

---

## Deploy to GitHub Pages

### First-time setup

1. Create a new repository named **`tl-sy-nl.github.io`** on GitHub (must match your username exactly)
2. Upload all files in this folder to that repository
3. Go to **Settings → Pages → Source** and set branch to `main`, folder to `/ (root)`
4. Your site will be live at `https://tl-sy-nl.github.io` within a few minutes

### Via command line

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/tl-sy-nl/tl-sy-nl.github.io.git
git push -u origin main
```

### Updating content

Edit any `.html` file, then push to GitHub — the site updates automatically.
