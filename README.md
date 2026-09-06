# Sohan's Cinematic Portfolio

A dark, cinematic portfolio website for a video editor, graphic designer, and videographer.

## Features

- **Cinematic Hero Experience**: Scroll-driven camera movement from wide studio to editor's monitor
- **Portfolio Sections**: Video Editing, Reels, Podcasts, Graphics, Thumbnails, Videography
- **Creative Approach Section**: Visual display of editing philosophy
- **Services & Skills**: Clean, organized presentation
- **Contact Section**: Large typography, clear call-to-action
- **Dark Cinematic Theme**: Professional, editorial aesthetic
- **Fully Responsive**: Works on desktop, tablet, and mobile
- **Accessibility**: Reduced motion support, keyboard navigation, semantic HTML
- **Performance Optimized**: Lazy loading, efficient scroll handling

## Project Structure

```
├── index.html           # Main HTML file
├── styles.css           # All styles
├── main.js             # JavaScript functionality
├── config/
│   ├── personal.js     # Personal info (name, contact, hero paths)
│   └── projects.js     # Portfolio projects data
├── assets/
│   ├── hero/          # Hero section videos/images
│   ├── projects/      # Portfolio videos/thumbnails
│   ├── reels/         # Short-form content
│   ├── graphics/      # Graphic design work
│   ├── thumbnails/    # Thumbnail designs
│   ├── videography/   # Videography work
│   └── about/         # Profile images
├── ASSETS.md           # Asset documentation
└── PERSONAL_INFO.md    # Personal info guide
```

## Getting Started

### Option 1: Simple HTML (Recommended for beginners)

1. Open `index.html` in a browser
2. Or run a local server:
   ```bash
   # Python
   python -m http.server 8080

   # Node.js (if npx available)
   npx serve .

   # PHP
   php -S localhost:8080
   ```
3. Open http://localhost:8080

### Option 2: VS Code Live Server

1. Install the "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

## Adding Your Content

### 1. Update Personal Information

Edit `config/personal.js`:

```javascript
const PERSONAL = {
  name: 'Sohan',
  role: 'Video Editor • Graphic Designer • Videographer',
  email: 'your@email.com',
  instagram: 'https://instagram.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  // ... rest of config
};
```

### 2. Add Portfolio Projects

Edit `config/projects.js`:

```javascript
{
  id: 1,
  title: 'Your Project Title',
  category: 'video-editing', // video-editing, reels, podcast, graphics, thumbnails, videography
  description: 'Brief description',
  thumbnail: 'assets/projects/your-thumb.jpg',
  video: 'assets/projects/your-video.mp4',
  aspectRatio: '16/9', // 16/9 for landscape, 9/16 for vertical
  featured: true
}
```

### 3. Add Hero Assets

Place your hero videos in `assets/hero/`:
- `hero-wide.mp4` - Wide studio shot
- `hero-editor.mp4` - Editor workstation
- `hero-monitor.mp4` - Monitor/editor screen
- `hero-video.mp4` - Main portfolio video

Also provide poster images (`.webp` or `.jpg`) for faster loading.

### 4. Add Portfolio Content

```
assets/projects/    → Full video projects
assets/reels/      → Short-form vertical content
assets/graphics/   → Static graphic designs
assets/thumbnails/ → Thumbnail designs
assets/videography/ → Videography footage
```

## Categories

| Category | Description |
|----------|-------------|
| `video-editing` | Full video editing work |
| `reels` | Short-form content (Reels, Shorts) |
| `podcast` | Podcast and interview editing |
| `graphics` | Graphic design work |
| `thumbnails` | YouTube/social thumbnails |
| `videography` | Raw footage and shooting |

## Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --color-bg: #0a0a0a;           /* Background */
  --color-bg-secondary: #111111;  /* Section backgrounds */
  --color-text: #f5f5f5;         /* Main text */
  --color-text-secondary: #a0a0a0; /* Secondary text */
  /* ... more variables */
}
```

### Typography

The site uses Inter font from Google Fonts. To change:

1. Update the Google Fonts link in `index.html`
2. Update `--font-primary` in CSS

### Animation Speed

Adjust in `styles.css`:

```css
--transition-fast: 0.2s;
--transition-base: 0.4s;
--transition-slow: 0.6s;
```

### Scroll Behavior

Adjust in `main.js`:

```javascript
const CONFIG = {
  heroScrollHeight: 300, // vh units for cinematic journey
  revealThreshold: 0.15, // Intersection observer threshold
};
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility

- `prefers-reduced-motion`: Disables animations
- Keyboard navigation: Full support
- Focus states: Visible and clear
- Semantic HTML: Proper heading hierarchy
- ARIA labels: On interactive elements

## Performance

- Lazy loading images
- Videos only load on click
- Efficient scroll handling with requestAnimationFrame
- CSS transforms for GPU acceleration
- Minimal dependencies (vanilla JS)

## Build & Deploy

### Static Hosting

This is a static site. Deploy to:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any web server

### Build Commands

```bash
# Python
python -m http.server 8080

# Node.js
npx serve

# PHP
php -S localhost:8080
```

## Documentation

- [ASSETS.md](ASSETS.md) - Detailed asset guidelines
- [PERSONAL_INFO.md](PERSONAL_INFO.md) - Personal info reference

## Credits

Built with vanilla HTML, CSS, and JavaScript.

Design inspired by cinematic editing aesthetics and editorial portfolios.
