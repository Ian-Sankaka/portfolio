/** Ease-in-out cubic for smooth acceleration and deceleration */
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

const HEADER_OFFSET = 80; // 5rem, matches scroll-padding-top

/**
 * Smoothly scroll to a position or element with custom easing and duration.
 * Feels smoother than native scroll-behavior: smooth.
 */
export function smoothScrollTo(
  target: number | HTMLElement,
  options?: { duration?: number }
): void {
  const duration = options?.duration ?? 900;
  const targetY =
    typeof target === "number"
      ? target
      : target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
