/**
 * SOHAN - CINEMATIC PORTFOLIO
 * Main JavaScript
 */

(function() {
  'use strict';

  // ============================================================================
  // CONFIGURATION
  // ============================================================================

  const CONFIG = {
    // Cinematic scroll settings - extended journey
    heroScrollHeight: 800, // vh units of scroll for full cinematic journey
    scenes: 8, // Number of scenes in the journey
    // Zoom settings per scene - dramatic zoom from 1x to 4x
    zoomLevels: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
    // Parallax intensity per scene
    parallaxIntensity: [0, 10, 20, 30, 40, 50, 60, 70],
    // Animation settings
    revealThreshold: 0.15,
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
  };

  // ============================================================================
  // DOM ELEMENTS
  // ============================================================================

  const elements = {
    nav: document.getElementById('nav'),
    navToggle: document.getElementById('navToggle'),
    navMenu: document.getElementById('navMenu'),
    hero: document.getElementById('hero'),
    heroCinematicContainer: document.getElementById('heroCinematicContainer'),
    heroScenes: document.querySelectorAll('.hero__scene'),
    heroContent: document.getElementById('heroContent'),
    heroIntro: document.getElementById('heroIntro'),
    scrollHint: document.getElementById('scrollHint'),
    heroProgressBar: document.getElementById('heroProgressBar'),
    portfolioGrid: document.getElementById('portfolioGrid'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    videoOverlay: document.getElementById('videoOverlay'),
    videoOverlayContainer: document.getElementById('videoOverlayContainer'),
    videoOverlayClose: document.getElementById('videoOverlayClose'),
    currentYear: document.getElementById('currentYear')
  };

  // ============================================================================
  // STATE
  // ============================================================================

  let state = {
    scrollY: 0,
    currentFilter: 'all',
    activeVideo: null,
    ticking: false
  };

  // ============================================================================
  // CINEMATIC HERO - SCROLL-DRIVEN CAMERA MOVEMENT
  // ============================================================================

  function initCinematicHero() {
    if (CONFIG.reducedMotion) {
      // Simplified animation for reduced motion
      elements.heroScenes[0].classList.add('hero__scene--active');
      elements.heroIntro.classList.add('hero__intro--visible');
      return;
    }

    // Preload images for smoother experience
    elements.heroScenes.forEach(scene => {
      const bg = scene.querySelector('.hero__scene-bg');
      if (bg) {
        const img = new Image();
        img.src = bg.style.backgroundImage.replace(/url\(['"]?(.+?)['"]?\)/, '$1');
      }
    });

    // Initialize hero scroll tracking
    updateCinematicHero();
  }

  function updateCinematicHero() {
    const heroHeight = elements.hero.offsetHeight;
    const viewportHeight = window.innerHeight;
    const maxScroll = heroHeight - viewportHeight;
    const scrollProgress = Math.min(Math.max(state.scrollY / maxScroll, 0), 1);

    // Calculate scene progress
    const totalScenes = CONFIG.scenes;
    const sceneProgress = scrollProgress * totalScenes;

    // Update progress bar
    if (elements.heroProgressBar) {
      elements.heroProgressBar.style.height = `${scrollProgress * 100}%`;
    }

    // Update each scene
    elements.heroScenes.forEach((scene, index) => {
      const bg = scene.querySelector('.hero__scene-bg');
      if (!bg) return;

      const sceneNum = index + 1;
      const distanceFromCurrent = index - sceneProgress;
      const zoomLevel = CONFIG.zoomLevels[index] || 1;
      const parallax = CONFIG.parallaxIntensity[index] || 0;

      // Calculate transforms
      let translateY, scale, bgPosition;

      if (distanceFromCurrent > 1) {
        // Scene is below - push down and reset
        translateY = distanceFromCurrent * 100;
        scale = 1;
        bgPosition = 'center center';
        scene.classList.remove('hero__scene--active');
      } else if (distanceFromCurrent < -1) {
        // Scene is above - push up and reset
        translateY = distanceFromCurrent * 100;
        scale = 1;
        bgPosition = 'center center';
        scene.classList.remove('hero__scene--active');
      } else {
        // Scene is in transition zone
        translateY = distanceFromCurrent * 50;

        // Calculate scale based on distance from center
        if (distanceFromCurrent >= 0) {
          // Below or at current - scale up as we approach
          const enterScale = 1 + (zoomLevel - 1) * Math.max(0, 1 - distanceFromCurrent);
          scale = enterScale;
        } else {
          // Above - scale down as we leave
          const exitScale = 1 + (zoomLevel - 1) * Math.min(1, 1 + distanceFromCurrent);
          scale = exitScale;
        }

        // Parallax effect on background
        const parallaxOffset = distanceFromCurrent * parallax;
        bgPosition = `center ${parallaxOffset}%`;

        // Active state
        if (Math.abs(distanceFromCurrent) < 0.15) {
          scene.classList.add('hero__scene--active');
        } else {
          scene.classList.remove('hero__scene--active');
        }
      }

      // Apply transforms
      scene.style.transform = `translateY(${translateY}vh)`;
      if (bg) {
        bg.style.transform = `scale(${scale})`;
        bg.style.backgroundPosition = bgPosition;
      }

      // Fade labels based on proximity
      const label = scene.querySelector('.hero__scene-label');
      const title = scene.querySelector('.hero__scene-title');
      if (label) {
        label.style.opacity = Math.max(0, 1 - Math.abs(distanceFromCurrent) * 2);
      }
      if (title) {
        title.style.opacity = Math.max(0, 1 - Math.abs(distanceFromCurrent) * 3);
      }
    });

    // Hero title visibility
    if (scrollProgress < 0.05) {
      elements.heroIntro.classList.remove('hero__intro--hidden');
      elements.heroIntro.classList.add('hero__intro--visible');
    } else if (scrollProgress >= 0.05 && scrollProgress < 0.1) {
      elements.heroIntro.classList.remove('hero__intro--visible', 'hero__intro--hidden');
    } else {
      elements.heroIntro.classList.remove('hero__intro--visible');
      elements.heroIntro.classList.add('hero__intro--hidden');
    }

    // Scroll hint visibility
    if (scrollProgress < 0.02) {
      elements.scrollHint.classList.remove('hero__scroll-hint--hidden');
    } else {
      elements.scrollHint.classList.add('hero__scroll-hint--hidden');
    }
  }

  // ============================================================================
  // NAVIGATION
  // ============================================================================

  function initNavigation() {
    // Mobile menu toggle
    if (elements.navToggle) {
      elements.navToggle.addEventListener('click', () => {
        elements.navToggle.classList.toggle('active');
        elements.navMenu.classList.toggle('active');
        document.body.style.overflow = elements.navMenu.classList.contains('active') ? 'hidden' : '';
      });
    }

    // Close mobile menu on link click
    elements.navMenu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        elements.navToggle.classList.remove('active');
        elements.navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Scroll-based nav styling
    updateNavigation();
  }

  function updateNavigation() {
    if (state.scrollY > 100) {
      elements.nav.classList.add('nav--scrolled');
    } else {
      elements.nav.classList.remove('nav--scrolled');
    }

    // Active nav link based on scroll position
    const sections = ['work', 'about', 'services', 'contact'];
    const viewportHeight = window.innerHeight;

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const link = elements.navMenu.querySelector(`[href="#${sectionId}"]`);

        if (rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.5) {
          if (link) link.classList.add('nav__link--active');
        } else {
          if (link) link.classList.remove('nav__link--active');
        }
      }
    });
  }

  // ============================================================================
  // PORTFOLIO
  // ============================================================================

  function initPortfolio() {
    renderProjects();
    initFilters();
  }

  function renderProjects(filter = 'all') {
    if (!elements.portfolioGrid) return;

    const projects = window.PROJECTS || [];
    let filteredProjects = projects;

    if (filter !== 'all') {
      filteredProjects = projects.filter(p => p.category === filter);
    }

    // If no projects, show placeholder
    if (filteredProjects.length === 0) {
      elements.portfolioGrid.innerHTML = generatePlaceholderCards(filter);
      return;
    }

    elements.portfolioGrid.innerHTML = filteredProjects.map(project => `
      <article class="project-card reveal" data-project-id="${project.id}">
        <div class="project-card__media-wrapper" style="aspect-ratio: ${project.aspectRatio}">
          ${generateMediaElement(project)}
        </div>
        <div class="project-card__overlay"></div>
        <div class="project-card__content">
          <span class="project-card__category">${formatCategory(project.category)}</span>
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__desc">${project.description}</p>
        </div>
      </article>
    `).join('');

    // Add click handlers for video playback
    attachProjectHandlers();

    // Trigger reveal animations
    setTimeout(() => {
      initRevealAnimations();
    }, 100);
  }

  function generateMediaElement(project) {
    if (project.thumbnail) {
      return `<img
        src="${project.thumbnail}"
        alt="${project.title}"
        class="project-card__media"
        loading="lazy"
        onerror="this.parentElement.innerHTML='<div class=\\'project-card__placeholder-icon\\'><svg width=\\'48\\' height=\\'48\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1.5\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><circle cx=\\'8.5\\' cy=\\'8.5\\' r=\\'1.5\\'/><path d=\\'M21 15l-5-5L5 21\\'/></svg></div><span class=\\'project-card__placeholder-text\\'>[THUMBNAIL]</span>'"
      >`;
    }
    return `<div class="project-card__placeholder-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M10 9l5 3-5 3V9z"/>
      </svg>
    </div>`;
  }

  function generatePlaceholderCards(filter) {
    const categoryName = filter === 'all' ? 'project' : formatCategory(filter);
    return `
      <div class="project-card project-card--placeholder reveal">
        <svg class="project-card__placeholder-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M10 9l5 3-5 3V9z"/>
        </svg>
        <span class="project-card__placeholder-text">[ADD ${categoryName.toUpperCase()} VIDEO]</span>
      </div>
    `;
  }

  function formatCategory(category) {
    return category.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  function initFilters() {
    elements.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // Update active state
        elements.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter projects
        state.currentFilter = filter;
        renderProjects(filter);
      });
    });
  }

  function attachProjectHandlers() {
    const cards = elements.portfolioGrid.querySelectorAll('.project-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const projectId = parseInt(card.dataset.projectId);
        const project = (window.PROJECTS || []).find(p => p.id === projectId);

        if (project && project.video) {
          openVideoOverlay(project);
        }
      });
    });
  }

  // ============================================================================
  // VIDEO OVERLAY
  // ============================================================================

  function openVideoOverlay(project) {
    if (!elements.videoOverlay) {
      createVideoOverlay();
    }

    const overlay = elements.videoOverlay;
    const videoContainer = overlay.querySelector('.video-overlay__container');
    const existingVideo = overlay.querySelector('video');

    if (existingVideo) {
      existingVideo.remove();
    }

    // Create video element
    const video = document.createElement('video');
    video.className = 'video-overlay__video';
    video.src = project.video;
    video.poster = project.thumbnail || '';
    video.controls = true;
    video.autoplay = true;
    video.muted = false;

    video.addEventListener('error', () => {
      videoContainer.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: var(--color-text-muted);">
          <p>[VIDEO FILE NOT FOUND]</p>
          <p style="font-size: 14px; margin-top: 8px;">${project.video}</p>
        </div>
      `;
    });

    videoContainer.appendChild(video);
    overlay.classList.add('video-overlay--active');
    document.body.style.overflow = 'hidden';

    state.activeVideo = project;
  }

  function closeVideoOverlay() {
    if (!elements.videoOverlay) return;

    const video = elements.videoOverlay.querySelector('video');
    if (video) {
      video.pause();
      video.src = '';
    }

    elements.videoOverlay.classList.remove('video-overlay--active');
    document.body.style.overflow = '';
    state.activeVideo = null;
  }

  function createVideoOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'video-overlay';
    overlay.innerHTML = `
      <div class="video-overlay__container"></div>
      <button class="video-overlay__close" aria-label="Close video">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    `;

    overlay.querySelector('.video-overlay__close').addEventListener('click', closeVideoOverlay);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeVideoOverlay();
    });

    document.body.appendChild(overlay);
    elements.videoOverlay = overlay;

    // Keyboard handler
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeVideoOverlay();
    });
  }

  // ============================================================================
  // SCROLL REVEAL ANIMATIONS
  // ============================================================================

  function initRevealAnimations() {
    if (CONFIG.reducedMotion) return;

    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
        }
      });
    }, {
      threshold: CONFIG.revealThreshold,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // ============================================================================
  // SCROLL HANDLER
  // ============================================================================

  function handleScroll() {
    state.scrollY = window.scrollY;

    if (!state.ticking) {
      requestAnimationFrame(() => {
        updateCinematicHero();
        updateNavigation();
        state.ticking = false;
      });
      state.ticking = true;
    }
  }

  // ============================================================================
  // RESIZE HANDLER
  // ============================================================================

  function handleResize() {
    // Re-check cinematic hero on resize
    updateCinematicHero();
  }

  // ============================================================================
  // SMOOTH SCROLL
  // ============================================================================

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const targetPosition = target.getBoundingClientRect().top + window.scrollY;
          const offset = 80; // Account for fixed nav

          window.scrollTo({
            top: targetPosition - offset,
            behavior: CONFIG.reducedMotion ? 'auto' : 'smooth'
          });
        }
      });
    });
  }

  // ============================================================================
  // FOOTER
  // ============================================================================

  function initFooter() {
    if (elements.currentYear) {
      elements.currentYear.textContent = new Date().getFullYear();
    }
  }

  // ============================================================================
  // KEYBOARD NAVIGATION
  // ============================================================================

  function initKeyboardNav() {
    // Focus trap for mobile menu
    if (elements.navMenu) {
      const focusableElements = elements.navMenu.querySelectorAll('a, button');
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      elements.navMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
              e.preventDefault();
              lastFocusable.focus();
            }
          } else {
            if (document.activeElement === lastFocusable) {
              e.preventDefault();
              firstFocusable.focus();
            }
          }
        }

        if (e.key === 'Escape') {
          elements.navToggle.classList.remove('active');
          elements.navMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  }

  // ============================================================================
  // INITIALIZE
  // ============================================================================

  function init() {
    initCinematicHero();
    initNavigation();
    initPortfolio();
    initSmoothScroll();
    initRevealAnimations();
    initKeyboardNav();
    initFooter();

    // Event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Video overlay close on background click
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('video-overlay')) {
        closeVideoOverlay();
      }
    });

    // Escape key to close video
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeVideoOverlay();
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
