# PERSONAL INFORMATION

Update this file with your details, then update `config/personal.js` with the same values.

---

## WHAT TO UPDATE

### 1. Contact Information

Open `config/personal.js` and update:

```javascript
email: '[YOUR EMAIL]',
instagram: '[YOUR INSTAGRAM URL]',
linkedin: '[YOUR LINKEDIN URL]',
other: {
  label: '[LABEL]',
  url: '[YOUR URL]'
}
```

### 2. About Text (Optional)

The about section uses text from `config/personal.js`. You can customize:

```javascript
about: {
  intro: "Your intro text...",
  body: "Your main about text...",
  closing: "Your closing statement...",
  accent: "Your accent/standout point..."
}
```

### 3. Hero Assets

Update the hero asset paths in `config/personal.js`:

```javascript
hero: {
  wide: 'assets/hero/hero-wide.mp4',
  widePoster: 'assets/hero/hero-wide.webp',
  editor: 'assets/hero/hero-editor.mp4',
  editorPoster: 'assets/hero/hero-editor.webp',
  monitor: 'assets/hero/hero-monitor.mp4',
  monitorPoster: 'assets/hero/hero-monitor.webp',
  video: 'assets/hero/hero-video.mp4',
  videoPoster: 'assets/hero/hero-video.webp'
}
```

### 4. About Image

```javascript
aboutImage: 'assets/about/profile.jpg'
```

---

## WHERE TO UPDATE

All personal information is centralized in:

| File | Purpose |
|------|---------|
| `config/personal.js` | Main configuration (contact, hero paths, about text) |
| `config/projects.js` | Portfolio projects (titles, descriptions, media) |

---

## QUICK REFERENCE

```
Name: Sohan
Role: Video Editor • Graphic Designer • Videographer
Email: [YOUR EMAIL]
Instagram: [YOUR INSTAGRAM]
LinkedIn: [YOUR LINKEDIN]
Other: [YOUR OTHER LINK]
```

---

## EXAMPLE COMPLETED CONFIG

```javascript
const PERSONAL = {
  name: 'Sohan',
  role: 'Video Editor • Graphic Designer • Videographer',

  email: 'sohan@example.com',
  instagram: 'https://instagram.com/sohan',
  linkedin: 'https://linkedin.com/in/sohan',
  other: {
    label: 'Portfolio',
    url: 'https://sohan.portfolio.com'
  },

  about: {
    intro: "I'm Sohan, a video editor...",
    body: "My work spans short-form videos...",
    closing: "I combine editing, design...",
    accent: "I'm particularly interested in..."
  },

  hero: {
    wide: 'assets/hero/hero-wide.mp4',
    widePoster: 'assets/hero/hero-wide.webp',
    editor: 'assets/hero/hero-editor.mp4',
    editorPoster: 'assets/hero/hero-editor.webp',
    monitor: 'assets/hero/hero-monitor.mp4',
    monitorPoster: 'assets/hero/hero-monitor.webp',
    video: 'assets/hero/hero-video.mp4',
    videoPoster: 'assets/hero/hero-video.webp'
  },

  aboutImage: 'assets/about/profile.jpg'
};
```
