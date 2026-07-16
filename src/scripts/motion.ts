/**
 * Scroll-driven motion: reveal-on-enter and count-up figures.
 *
 * Progressive enhancement contract — the failure modes this guards against:
 *
 *  - The final figure is already in the HTML. This script resets it to zero and
 *    counts back up; it never *supplies* the value. Without JS the figure reads.
 *  - The pre-reveal hidden state lives behind the `.js` class, which only JS can
 *    set. Without JS nothing is ever hidden — it just doesn't animate. A bare
 *    `opacity: 0` in CSS would leave the page blank whenever the bundle fails.
 *  - Under prefers-reduced-motion nothing is observed at all.
 *
 * <ClientRouter /> swaps the DOM on navigation WITHOUT re-running module
 * scripts, so init is bound to `astro:page-load` (fires on first load and after
 * every swap). The `.js` class is re-applied to the incoming document in
 * `astro:before-swap` — before it paints, so the hidden state is never missing
 * for a frame.
 */

const ENTER_MARGIN = "0px 0px -12% 0px";
const COUNT_DURATION_MS = 1600;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

function countUp(el: HTMLElement, to: number) {
  let startedAt: number | null = null;

  const tick = (now: number) => {
    startedAt ??= now;
    const progress = Math.min((now - startedAt) / COUNT_DURATION_MS, 1);
    el.textContent = String(Math.round(easeOutCubic(progress) * to));
    if (progress < 1) requestAnimationFrame(tick);
  };

  el.textContent = "0";
  requestAnimationFrame(tick);
}

/** Runs `onEnter` once per element, the first time it enters the viewport. */
function onFirstEnter(selector: string, onEnter: (el: HTMLElement) => void) {
  const targets = document.querySelectorAll<HTMLElement>(selector);
  if (targets.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        onEnter(entry.target as HTMLElement);
      }
    },
    { rootMargin: ENTER_MARGIN },
  );

  targets.forEach((el) => observer.observe(el));
}

function init() {
  document.documentElement.classList.add("js");
  if (prefersReducedMotion()) return;

  onFirstEnter("[data-reveal]:not([data-revealed])", (el) => {
    el.dataset.revealed = "";
  });

  onFirstEnter("[data-count-to]", (el) => {
    const to = Number(el.dataset.countTo);
    if (Number.isFinite(to)) countUp(el, to);
  });
}

document.addEventListener("astro:page-load", init);

document.addEventListener("astro:before-swap", (event) => {
  const { newDocument } = event as Event & { newDocument: Document };
  newDocument.documentElement.classList.add("js");
});
