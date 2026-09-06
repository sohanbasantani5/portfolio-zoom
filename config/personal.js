/**
 * PERSONAL CONFIGURATION
 * Update this file with your information
 */

const PERSONAL = {
  // Basic Info
  name: 'Sohan',
  role: 'Video Editor • Graphic Designer • Videographer',

  // Contact - Replace these with your actual information
  email: '[EMAIL HERE]',
  instagram: '[INSTAGRAM LINK]',
  linkedin: '[LINKEDIN LINK]',
  other: {
    label: 'Other',
    url: '[OTHER LINK]'
  },

  // About text (optional override)
  about: {
    intro: "I'm Sohan, a video editor, graphic designer and videographer focused on creating engaging digital content.",
    body: "My work spans short-form videos, podcast and interview edits, social media content, thumbnails, graphic design and visual storytelling.",
    closing: "I combine editing, design and content understanding to turn raw footage and ideas into polished content built for digital platforms.",
    accent: "I'm particularly interested in editing that doesn't simply make footage look good, but improves how the story is communicated and keeps the audience engaged."
  },

  // Hero assets - Update these paths to point to your actual assets
  hero: {
    // Wide studio shot
    wide: 'assets/hero/hero-wide.mp4',
    widePoster: 'assets/hero/hero-wide.webp',
    // Editor workstation
    editor: 'assets/hero/hero-editor.mp4',
    editorPoster: 'assets/hero/hero-editor.webp',
    // Monitor / editing environment
    monitor: 'assets/hero/hero-monitor.mp4',
    monitorPoster: 'assets/hero/hero-monitor.webp',
    // Main portfolio video (shown in monitor)
    video: 'assets/hero/hero-video.mp4',
    videoPoster: 'assets/hero/hero-video.webp'
  },

  // About image (optional)
  aboutImage: 'assets/about/profile.jpg'
};

// Make it available globally
window.PERSONAL = PERSONAL;
