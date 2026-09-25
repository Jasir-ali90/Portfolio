import React, { useEffect, useRef } from 'react';

/**
 * MotionLayer
 * -----------
 * Mount-once component that owns every scroll / pointer driven animation:
 *
 *   1. Scroll progress bar           - transform only, rAF throttled
 *   2. Pointer spotlight + card glow - CSS custom properties, rAF throttled
 *   3. Scroll reveal                 - IntersectionObserver
 *   4. Animated stat counters        - rAF, runs once per stat
 *
 * All of it is progressive enhancement. With `prefers-reduced-motion`, a coarse
 * pointer, or no IntersectionObserver support the page just renders in its
 * final, fully visible state.
 */

// Blocks that fade + rise the first time they scroll into view.
const REVEAL_SELECTOR = [
  '.section-title',
  '.section-subtitle',
  '.value-prop-card',
  '.card',
  '.education-card',
  '.experience-card-wrap',
  '.contact-box',
  '.tech-marquee',
].join(',');

// Cards that carry a soft highlight which follows the pointer.
const SPOTLIGHT_SELECTOR = '.card, .value-prop-card, .education-card, .experience-card';

const HERO_STAT_SELECTOR = '.hero-stat-value';

export default function MotionLayer() {
  const progressRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const docEl = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const cleanups = [];

    /* ------------------------------------------------------------------
       1. Scroll progress bar
       ------------------------------------------------------------------ */
    const bar = progressRef.current;
    let scrollFrame = 0;
    const paintProgress = () => {
      scrollFrame = 0;
      if (!bar) return;
      const max = docEl.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      bar.style.transform = `scaleX(${ratio})`;
    };
    const onScroll = () => {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(paintProgress);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    paintProgress();
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
    });

    /* ------------------------------------------------------------------
       2. Pointer spotlight + per-card glow
       ------------------------------------------------------------------ */
    const glow = glowRef.current;
    let pointerFrame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let hotCard = null;

    if (glow && finePointer && !reduceMotion) {
      const paintPointer = () => {
        pointerFrame = 0;
        if (glow) {
          glow.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
        }
        if (hotCard) {
          const rect = hotCard.getBoundingClientRect();
          if (rect.width && rect.height) {
            hotCard.style.setProperty('--mx', `${((pointerX - rect.left) / rect.width) * 100}%`);
            hotCard.style.setProperty('--my', `${((pointerY - rect.top) / rect.height) * 100}%`);
          }
        }
      };

      const onPointerMove = (event) => {
        pointerX = event.clientX;
        pointerY = event.clientY;
        hotCard =
          event.target instanceof Element ? event.target.closest(SPOTLIGHT_SELECTOR) : null;
        if (!pointerFrame) pointerFrame = requestAnimationFrame(paintPointer);
      };

      const onPointerEnter = () => {
        if (glow) glow.classList.add('is-active');
      };

      const onPointerLeave = () => {
        if (glow) glow.classList.remove('is-active');
        hotCard = null;
      };

      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('pointerover', onPointerEnter, { passive: true });
      docEl.addEventListener('mouseleave', onPointerLeave);
      glow.classList.remove('is-active'); // only appear once the pointer moves
      cleanups.push(() => {
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerover', onPointerEnter);
        docEl.removeEventListener('mouseleave', onPointerLeave);
        if (pointerFrame) cancelAnimationFrame(pointerFrame);
      });
    }

    /* ------------------------------------------------------------------
       3. Scroll reveal
       ------------------------------------------------------------------
       Only nodes present at mount are marked `.reveal-pending`. Nodes created
       later (project cards swapped in by the category filter) are never
       marked, so they appear instantly instead of staying invisible.
       ------------------------------------------------------------------ */
    if (!reduceMotion && 'IntersectionObserver' in window) {
      const nodes = Array.from(document.querySelectorAll(REVEAL_SELECTOR));
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('reveal-in');
            obs.unobserve(entry.target);
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -8% 0px' }
      );

      nodes.forEach((node, index) => {
        node.style.transitionDelay = `${(index % 5) * 70}ms`;
        node.classList.add('reveal-pending');
        observer.observe(node);
      });

      cleanups.push(() => observer.disconnect());
    }

    /* ------------------------------------------------------------------
       4. Animated stat counters
       ------------------------------------------------------------------ */
    const counterFrames = new Set();
    const runCounter = (node) => {
      const source = node.textContent || '';
      const match = source.match(/^(\d+)(.*)$/); // "18+" -> 18 / "+"
      if (!match) return;
      const target = Number(match[1]);
      const suffix = match[2];
      if (!target) return;

      const duration = 1300;
      const startedAt = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) {
          counterFrames.add(requestAnimationFrame(tick));
        } else {
          node.textContent = source; // always restore the exact original string
        }
      };
      counterFrames.add(requestAnimationFrame(tick));
    };

    if (!reduceMotion && 'IntersectionObserver' in window) {
      const statNodes = Array.from(document.querySelectorAll(HERO_STAT_SELECTOR));
      const statObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            obs.unobserve(entry.target);
            runCounter(entry.target);
          });
        },
        { threshold: 0.4 }
      );
      statNodes.forEach((node) => statObserver.observe(node));
      cleanups.push(() => statObserver.disconnect());
    }

    cleanups.push(() => {
      counterFrames.forEach((id) => cancelAnimationFrame(id));
      counterFrames.clear();
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
    </>
  );
}
