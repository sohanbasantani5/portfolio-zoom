# ASSETS DOCUMENTATION

This document explains where to place your assets and what formats are recommended.

---

## HERO SECTION

The cinematic hero section shows a scroll-driven camera movement from a wide studio shot to the editor's monitor.

### Required Assets

| Asset | File | Dimensions | Format | Location |
|-------|------|------------|--------|----------|
| Wide Studio Shot | `hero-wide.mp4` | 1920×1080 (16:9) | MP4 (H.264) | `assets/hero/` |
| Wide Poster | `hero-wide.webp` | 1920×1080 (16:9) | WebP | `assets/hero/` |
| Editor Workstation | `hero-editor.mp4` | 1920×1080 (16:9) | MP4 (H.264) | `assets/hero/` |
| Editor Poster | `hero-editor.webp` | 1920×1080 (16:9) | WebP | `assets/hero/` |
| Monitor Shot | `hero-monitor.mp4` | 1920×1080 (16:9) | MP4 (H.264) | `assets/hero/` |
| Monitor Poster | `hero-monitor.webp` | 1920×1080 (16:9) | WebP | `assets/hero/` |
| Main Portfolio Video | `hero-video.mp4` | 1920×1080 (16:9) | MP4 (H.264) | `assets/hero/` |
| Video Poster | `hero-video.webp` | 1920×1080 (16:9) | WebP | `assets/hero/` |

### Recommendations

- **Video codec**: H.264 for maximum compatibility
- **Frame rate**: 24fps or 30fps
- **Bitrate**: 5-10 Mbps for smooth playback
- **Duration**: 8-15 seconds per clip works best
- **No audio required** for hero videos (muted autoplay)

### Content Guidelines

The hero should tell a visual story:
1. **Wide shot**: Editorial studio with editor at workstation, cinematic lighting
2. **Medium shot**: Getting closer to the desk, showing the editing setup
3. **Close shot**: Monitor with editing timeline visible
4. **Video transition**: The monitor screen fills the viewport and transitions to portfolio video

---

## PORTFOLIO VIDEOS

Projects displayed in the main portfolio grid.

### Location
`assets/projects/`

### Naming Convention
```
project-{id}-thumb.{ext}  (thumbnail images)
project-{id}.{ext}        (full videos)
```

### Requirements

| Type | Dimensions | Format | Max Size |
|------|-----------|--------|----------|
| Thumbnail | 1280×720 (16:9) or larger | JPG, WebP | 500KB |
| Video | 1920×1080 (16:9) | MP4 (H.264) | 100MB |

---

## REELS / SHORT-FORM

Vertical short-form content (Instagram Reels, YouTube Shorts).

### Location
`assets/reels/`

### Naming Convention
```
reel-{id}-thumb.{ext}
reel-{id}.{ext}
```

### Requirements

| Type | Dimensions | Format |
|------|-----------|--------|
| Thumbnail | 1080×1920 (9:16) | JPG, WebP |
| Video | 1080×1920 (9:16) | MP4 (H.264) |

### Display

Vertical videos are displayed with their native aspect ratio in the portfolio grid, maintaining the full vertical format.

---

## PODCAST / INTERVIEW

Long-form podcast and interview edits.

### Location
`assets/projects/` (same as main portfolio)

### Requirements
Same as Portfolio Videos.

---

## GRAPHIC DESIGN

Static graphic design work.

### Location
`assets/graphics/`

### Naming Convention
```
graphic-{id}.{ext}
```

### Requirements

| Type | Dimensions | Format | Max Size |
|------|-----------|--------|----------|
| Image | 2400×2400 (1:1) or larger | PNG, JPG, WebP | 2MB |

### Tips
- Provide high-resolution files for best quality
- PNG with transparency supported
- Can be any aspect ratio (square, landscape, or portrait)

---

## THUMBNAILS

YouTube and social media thumbnail designs.

### Location
`assets/thumbnails/`

### Naming Convention
```
thumb-{id}.{ext}
```

### Requirements

| Type | Dimensions | Format |
|------|-----------|--------|
| Thumbnail | 1280×720 (16:9) or 2560×1440 | JPG, PNG, WebP |

### Display
Thumbnails are displayed large enough to evaluate design quality.

---

## VIDEOGRAPHY

Raw footage and videography work.

### Location
`assets/videography/`

### Naming Convention
```
video-{id}-thumb.{ext}
video-{id}.{ext}
```

### Requirements
Same as Portfolio Videos.

---

## ABOUT SECTION

Optional profile image for the About section.

### Location
`assets/about/`

### File
`profile.jpg` or `profile.webp`

### Dimensions
- **Square**: 800×800 (minimum)
- **Or any aspect ratio** (will be contained/cropped)

---

## QUICK START CHECKLIST

- [ ] Place hero videos in `assets/hero/`
- [ ] Place portfolio videos and thumbnails in `assets/projects/`
- [ ] Place reels in `assets/reels/`
- [ ] Place graphics in `assets/graphics/`
- [ ] Place thumbnails in `assets/thumbnails/`
- [ ] Place videography in `assets/videography/`
- [ ] (Optional) Place profile image in `assets/about/`
- [ ] Update `config/personal.js` with your contact info
- [ ] Update `config/projects.js` with your project details

---

## PERFORMANCE TIPS

1. **Compress videos**: Use Handbrake or similar to optimize video file sizes
2. **Use WebP**: For thumbnails and posters, WebP offers better compression than JPG
3. **Lazy loading**: All images use lazy loading by default
4. **Video loading**: Videos only load when clicked (except hero video)
5. **Poster images**: Always provide poster images to show while videos load
