/**
 * PROJECTS DATA
 * Add your portfolio projects here
 *
 * Categories:
 * - video-editing: Full video editing work
 * - reels: Short-form content (Reels, Shorts)
 * - podcast: Podcast and interview editing
 * - graphics: Graphic design work
 * - thumbnails: Thumbnail designs
 * - videography: Raw footage / videography
 */

const PROJECTS = [
  // ========== VIDEO EDITING ==========
  {
    id: 1,
    title: '[PROJECT TITLE]',
    category: 'video-editing',
    description: '[Project description]',
    thumbnail: 'assets/projects/project-1-thumb.jpg',
    video: 'assets/projects/project-1.mp4',
    aspectRatio: '16/9',
    featured: true
  },
  {
    id: 2,
    title: '[PROJECT TITLE]',
    category: 'video-editing',
    description: '[Project description]',
    thumbnail: 'assets/projects/project-2-thumb.jpg',
    video: 'assets/projects/project-2.mp4',
    aspectRatio: '16/9',
    featured: true
  },

  // ========== REELS ==========
  {
    id: 3,
    title: '[REELS TITLE]',
    category: 'reels',
    description: '[Short-form content description]',
    thumbnail: 'assets/reels/reel-1-thumb.jpg',
    video: 'assets/reels/reel-1.mp4',
    aspectRatio: '9/16',
    featured: true
  },
  {
    id: 4,
    title: '[REELS TITLE]',
    category: 'reels',
    description: '[Short-form content description]',
    thumbnail: 'assets/reels/reel-2-thumb.jpg',
    video: 'assets/reels/reel-2.mp4',
    aspectRatio: '9/16',
    featured: false
  },

  // ========== PODCAST / INTERVIEW ==========
  {
    id: 5,
    title: '[PODCAST TITLE]',
    category: 'podcast',
    description: '[Podcast/interview editing description]',
    thumbnail: 'assets/projects/podcast-1-thumb.jpg',
    video: 'assets/projects/podcast-1.mp4',
    aspectRatio: '16/9',
    featured: true
  },

  // ========== GRAPHIC DESIGN ==========
  {
    id: 6,
    title: '[GRAPHIC TITLE]',
    category: 'graphics',
    description: '[Graphic design description]',
    thumbnail: 'assets/graphics/graphic-1.jpg',
    video: null,
    aspectRatio: '1/1',
    featured: false
  },
  {
    id: 7,
    title: '[GRAPHIC TITLE]',
    category: 'graphics',
    description: '[Graphic design description]',
    thumbnail: 'assets/graphics/graphic-2.jpg',
    video: null,
    aspectRatio: '1/1',
    featured: false
  },

  // ========== THUMBNAILS ==========
  {
    id: 8,
    title: '[THUMBNAIL SET]',
    category: 'thumbnails',
    description: '[Thumbnail design series description]',
    thumbnail: 'assets/thumbnails/thumb-1.jpg',
    video: null,
    aspectRatio: '16/9',
    featured: false
  },
  {
    id: 9,
    title: '[THUMBNAIL SET]',
    category: 'thumbnails',
    description: '[Thumbnail design series description]',
    thumbnail: 'assets/thumbnails/thumb-2.jpg',
    video: null,
    aspectRatio: '16/9',
    featured: false
  },

  // ========== VIDEOGRAPHY ==========
  {
    id: 10,
    title: '[VIDEOGRAPHY TITLE]',
    category: 'videography',
    description: '[Videography work description]',
    thumbnail: 'assets/videography/video-1-thumb.jpg',
    video: 'assets/videography/video-1.mp4',
    aspectRatio: '16/9',
    featured: true
  }
];

// Make it available globally
window.PROJECTS = PROJECTS;
