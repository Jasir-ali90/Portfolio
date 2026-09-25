import React from 'react';

/**
 * AuroraBackground
 * ----------------
 * The dark gradient backdrop: drifting colour blobs, a slow rotating colour
 * sheen, an infinitely panning grid and a vignette for depth.
 *
 * Pure CSS on purpose. The WebGL version this replaces could not render at all
 * on machines without WebGL, cost a full-screen canvas repaint every frame and
 * fought for GPU/CPU with the rest of the page. Transform-only CSS animations
 * run on the compositor, so this stays smooth on low-end laptops.
 */
export default function AuroraBackground() {
  return (
    <div className="aurora-bg" aria-hidden="true">
      <span className="aurora-blob aurora-blob-1" />
      <span className="aurora-blob aurora-blob-2" />
      <span className="aurora-blob aurora-blob-3" />
      <span className="aurora-blob aurora-blob-4" />
      <span className="aurora-sheen" />
      <span className="aurora-grid" />
      <span className="aurora-vignette" />
    </div>
  );
}
